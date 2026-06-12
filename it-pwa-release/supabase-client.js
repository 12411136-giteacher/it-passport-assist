const config = window.ITPWA_SUPABASE || {};
const enabled = Boolean(config.url && config.publishableKey);
const SESSION_KEY = "itpwaSupabaseSession";

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function saveSession(session) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

function captureRecoverySession() {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const query = new URLSearchParams(window.location.search);
  const accessToken = hash.get("access_token");
  const refreshToken = hash.get("refresh_token");
  const type = hash.get("type") || query.get("type");
  if (!accessToken || type !== "recovery") return false;
  saveSession({
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_at: Math.floor(Date.now() / 1000) + Number(hash.get("expires_in") || 3600),
    token_type: hash.get("token_type") || "bearer"
  });
  history.replaceState({}, document.title, window.location.pathname);
  return true;
}

async function request(path, options = {}) {
  const session = readSession();
  let response;
  try {
    response = await fetch(`${config.url}${path}`, {
      ...options,
      headers: {
        apikey: config.publishableKey,
        Authorization: `Bearer ${session?.access_token || config.publishableKey}`,
        "Content-Type": "application/json",
        Prefer: options.prefer || "return=representation",
        ...(options.headers || {})
      }
    });
  } catch {
    throw new Error("Supabaseに接続できません。通信環境を確認して、もう一度お試しください。");
  }
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    const rawMessage = data?.msg || data?.message || data?.error_description || data?.error || "";
    const message = data?.code === "23505" && String(data?.details || rawMessage).includes("class_id")
      ? "このクラスと出席番号は、すでに別の学生が使用しています。クラスと出席番号を確認してください。"
      : rawMessage === "Invalid login credentials"
      ? "メールアドレスまたはパスワードが違います。Supabaseへのアカウント移行が済んでいるか確認してください。"
      : rawMessage === "Email not confirmed"
        ? "メールアドレスの確認が完了していません。確認メールを開いてください。"
        : rawMessage || `通信エラー（${response.status}）`;
    throw new Error(message);
  }
  return data;
}

function profileToUser(profile) {
  return {
    user_id: profile.id,
    role: profile.role,
    name: profile.name,
    email: profile.email,
    class_id: profile.class_id || "",
    seat_no: profile.seat_no || "",
    display_name: profile.display_name || profile.name,
    icon_id: profile.icon_id || "book",
    ranking_visible: false,
    status: profile.status || "active",
    created_at: profile.created_at,
    last_login_at: profile.last_login_at
  };
}

async function profile(userId) {
  const rows = await request(`/rest/v1/profiles?id=eq.${encodeURIComponent(userId)}&select=*`);
  if (!rows?.length) throw new Error("利用者情報が見つかりません。");
  return rows[0];
}

async function refreshSession() {
  const session = readSession();
  if (!session?.refresh_token) return null;
  const data = await request("/auth/v1/token?grant_type=refresh_token", {
    method: "POST",
    body: JSON.stringify({ refresh_token: session.refresh_token })
  });
  saveSession(data);
  return data;
}

async function ensureSession() {
  let session = readSession();
  if (!session) return null;
  const expiresAt = Number(session.expires_at || 0) * 1000;
  if (expiresAt && expiresAt < Date.now() + 60000) session = await refreshSession();
  return session;
}

async function backendRequest(action, payload = {}) {
  if (action === "login") {
    const data = await request("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({
        email: String(payload.email || "").trim().toLowerCase(),
        password: payload.password
      })
    });
    saveSession(data);
    await request(`/rest/v1/profiles?id=eq.${data.user.id}`, {
      method: "PATCH",
      body: JSON.stringify({ last_login_at: new Date().toISOString() })
    });
    return { ok: true, user: profileToUser(await profile(data.user.id)) };
  }

  if (action === "registerStudent") {
    const data = await request("/auth/v1/signup", {
      method: "POST",
      body: JSON.stringify({
        email: String(payload.email || "").trim().toLowerCase(),
        password: payload.password,
        data: {
          name: payload.name,
          class_id: payload.class_id,
          seat_no: Number(payload.seat_no),
          display_name: payload.display_name,
          icon_id: payload.icon_id
        }
      })
    });
    if (!data.access_token) throw new Error("確認メールを開いてからログインしてください。");
    saveSession(data);
    return { ok: true, user: profileToUser(await profile(data.user.id)) };
  }

  if (action === "updateProfile") {
    const session = await ensureSession();
    if (!session?.user?.id || session.user.id !== payload.user_id) {
      throw new Error("本人の登録内容だけ変更できます。");
    }
    const data = await request(`/rest/v1/profiles?id=eq.${encodeURIComponent(session.user.id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: String(payload.name || "").trim(),
        class_id: String(payload.class_id || "").trim(),
        seat_no: Number(payload.seat_no),
        display_name: String(payload.display_name || "").trim(),
        icon_id: String(payload.icon_id || "book")
      })
    });
    if (!data?.length) throw new Error("登録内容を変更できませんでした。");
    return { ok: true, user: profileToUser(data[0]) };
  }

  if (action === "savePastResults") {
    const rows = (payload.results || []).map((row) => ({
      id: row.result_id, user_id: payload.user_id || row.user_id, upload_id: row.upload_id,
      question_no: Number(row.no || 0), is_correct: Boolean(row.is_correct),
      domain: row.domain || "", major_category: row.major_category || "",
      middle_category: row.middle_category || "", source_label: row.source_label || "",
      source_url: row.source_url || "", studied_at: row.studied_at || null,
      uploaded_at: row.uploaded_at || new Date().toISOString()
    }));
    const data = await request("/rest/v1/past_results?on_conflict=id", {
      method: "POST", prefer: "resolution=merge-duplicates,return=representation", body: JSON.stringify(rows)
    });
    return { ok: true, results: data.map(toPastResult) };
  }

  if (action === "getPastResults") {
    const session = await ensureSession();
    if (!session?.user?.id || session.user.id !== payload.user_id) {
      throw new Error("本人の学習履歴だけ取得できます。");
    }
    const data = await request(
      `/rest/v1/past_results?user_id=eq.${encodeURIComponent(session.user.id)}&select=*`
    );
    return { ok: true, results: data.map(toPastResult) };
  }

  if (action === "getTeacherData") {
    const [profiles, results, messages] = await Promise.all([
      request("/rest/v1/profiles?select=*&order=class_id.asc,seat_no.asc"),
      request("/rest/v1/past_results?select=*"),
      request("/rest/v1/messages?select=*&order=created_at.desc")
    ]);
    return {
      ok: true, users: profiles.map(profileToUser), answers: [], sessions: [],
      pastResults: results.map(toPastResult), messages
    };
  }

  if (action === "getMessages") {
    const data = await request(`/rest/v1/messages?user_id=eq.${encodeURIComponent(payload.user_id)}&select=*&order=created_at.desc`);
    return { ok: true, messages: data };
  }

  if (action === "sendMessages") {
    const session = await ensureSession();
    const rows = [...new Set(payload.user_ids || [])].map((userId) => ({
      user_id: userId, title: payload.title, body: payload.body,
      action_view: payload.action_view || "home", created_by: session.user.id
    }));
    const data = await request("/rest/v1/messages", { method: "POST", body: JSON.stringify(rows) });
    return { ok: true, messages: data, count: data.length };
  }

  if (action === "markMessageRead") {
    await request(`/rest/v1/messages?id=eq.${encodeURIComponent(payload.message_id)}`, {
      method: "PATCH", body: JSON.stringify({ read_at: new Date().toISOString() })
    });
    return { ok: true };
  }

  throw new Error(`未対応の操作です: ${action}`);
}

function toPastResult(row) {
  return {
    result_id: row.id, user_id: row.user_id, upload_id: row.upload_id,
    no: row.question_no, is_correct: row.is_correct, domain: row.domain,
    major_category: row.major_category, middle_category: row.middle_category,
    source_label: row.source_label, source_url: row.source_url,
    studied_at: row.studied_at, uploaded_at: row.uploaded_at
  };
}

async function getCurrentUser() {
  const session = await ensureSession();
  if (!session?.user?.id) return null;
  return profileToUser(await profile(session.user.id));
}

async function signOut() {
  const session = readSession();
  if (session?.access_token) {
    try {
      await request("/auth/v1/logout", { method: "POST" });
    } catch {
      // Local logout must still complete when the network is unavailable.
    }
  }
  saveSession(null);
}

async function resetPassword(email) {
  await request("/auth/v1/recover", {
    method: "POST",
    body: JSON.stringify({
      email: String(email || "").trim().toLowerCase(),
      redirect_to: window.location.origin + window.location.pathname
    })
  });
}

async function updatePassword(password) {
  await request("/auth/v1/user", {
    method: "PUT",
    body: JSON.stringify({ password })
  });
}

const recoveryMode = enabled && captureRecoverySession();

window.resolveSupabaseBackend(enabled
  ? { enabled: true, request: backendRequest, getCurrentUser, signOut, resetPassword, updatePassword, recoveryMode }
  : { enabled: false });
