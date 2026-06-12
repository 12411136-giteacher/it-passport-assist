const STORAGE_KEY = "itPassportMvpState";
const API_DEPLOYMENT_ID = "AKfycbybIutIP2MBfi2_6I2ZV4UIVi4rn5cYwMRouGOiqpLsImLJ1jvpKkae1O2m5z2ib2HO";
const API_URLS = [
  `https://script.google.com/macros/s/${API_DEPLOYMENT_ID}/exec`,
  `https://script.google.com/a/macros/sankogakuen.jp/s/${API_DEPLOYMENT_ID}/exec`
];
const USE_REMOTE_API = true;

const classes = [
  { id: "A1A", maxSeat: 31 },
  { id: "A1B", maxSeat: 31 },
  { id: "A1C", maxSeat: 31 },
  { id: "A1D", maxSeat: 31 }
];

const icons = [
  { id: "cat", label: "ねこ" },
  { id: "dog", label: "いぬ" },
  { id: "bird", label: "とり" },
  { id: "fox", label: "きつね" },
  { id: "bear", label: "くま" },
  { id: "owl", label: "ふくろう" },
  { id: "book", label: "本" },
  { id: "pc", label: "PC" }
];

const seedQuestions = [
  {
    id: "Q2026-001",
    year: "令和7年度",
    no: 1,
    domain: "ストラテジ",
    category: "企業活動",
    text: "企業が継続的に利益を上げるために、強み・弱み・機会・脅威を整理して戦略を考える分析手法はどれか。",
    choices: { a: "SWOT分析", b: "PERT", c: "正規化", d: "暗号化" },
    answer: "a",
    explanation: "SWOT分析は、内部環境の強みと弱み、外部環境の機会と脅威を整理する考え方です。経営戦略を考える最初の整理としてよく使われます。",
    difficulty: "easy",
    status: "published"
  },
  {
    id: "Q2026-002",
    year: "令和7年度",
    no: 2,
    domain: "テクノロジ",
    category: "ネットワーク",
    text: "インターネットでWebページを閲覧するときに主に使われるプロトコルはどれか。",
    choices: { a: "HTTP", b: "SMTP", c: "POP3", d: "SNMP" },
    answer: "a",
    explanation: "HTTPはWebサーバとブラウザの間でWebページをやり取りするためのプロトコルです。SMTPやPOP3はメール、SNMPはネットワーク機器管理で使われます。",
    difficulty: "easy",
    status: "published"
  },
  {
    id: "Q2026-003",
    year: "令和7年度",
    no: 3,
    domain: "テクノロジ",
    category: "セキュリティ",
    text: "利用者本人であることを確認するために、パスワードに加えてスマートフォンの確認コードなどを使う方式はどれか。",
    choices: { a: "冗長化", b: "多要素認証", c: "圧縮", d: "負荷分散" },
    answer: "b",
    explanation: "多要素認証は、知識情報、所持情報、生体情報など複数の要素で本人確認する方式です。パスワードだけより不正ログインに強くなります。",
    difficulty: "normal",
    status: "published"
  },
  {
    id: "Q2026-004",
    year: "令和7年度",
    no: 4,
    domain: "マネジメント",
    category: "プロジェクトマネジメント",
    text: "プロジェクトの作業を細かい単位に分解し、全体の範囲を整理するために使うものはどれか。",
    choices: { a: "WBS", b: "DNS", c: "CPU", d: "HTML" },
    answer: "a",
    explanation: "WBSはWork Breakdown Structureの略で、プロジェクトで必要な作業を階層的に分解したものです。作業漏れの防止や進捗管理に役立ちます。",
    difficulty: "normal",
    status: "published"
  },
  {
    id: "Q2026-005",
    year: "令和6年度",
    no: 1,
    domain: "テクノロジ",
    category: "データベース",
    text: "データの重複や更新時の不整合を減らすために、表を適切に分割して整理することを何というか。",
    choices: { a: "正規化", b: "暗号化", c: "圧縮", d: "仮想化" },
    answer: "a",
    explanation: "正規化は、データベースの表を整理して重複や矛盾を減らす設計手法です。データを安全に更新しやすくする目的があります。",
    difficulty: "normal",
    status: "published"
  },
  {
    id: "Q2026-006",
    year: "令和6年度",
    no: 2,
    domain: "ストラテジ",
    category: "法務",
    text: "著作物を創作した人に自動的に発生する権利はどれか。",
    choices: { a: "特許権", b: "商標権", c: "著作権", d: "意匠権" },
    answer: "c",
    explanation: "著作権は、文章、画像、音楽、プログラムなどの著作物を創作した時点で発生します。登録しなくても発生する点が特徴です。",
    difficulty: "easy",
    status: "published"
  },
  {
    id: "Q2026-007",
    year: "令和6年度",
    no: 3,
    domain: "マネジメント",
    category: "サービスマネジメント",
    text: "システム障害が起きたとき、利用者への影響を小さくし、通常状態へ戻す活動はどれか。",
    choices: { a: "インシデント管理", b: "販売管理", c: "在庫管理", d: "人事評価" },
    answer: "a",
    explanation: "インシデント管理は、障害や問い合わせなどの発生時にサービスへの影響を抑え、できるだけ早く復旧するための活動です。",
    difficulty: "normal",
    status: "published"
  },
  {
    id: "Q2026-008",
    year: "令和6年度",
    no: 4,
    domain: "テクノロジ",
    category: "アルゴリズム",
    text: "同じ処理を条件が満たされるまで繰り返す制御構造はどれか。",
    choices: { a: "順次", b: "分岐", c: "反復", d: "排他" },
    answer: "c",
    explanation: "反復は、同じ処理を繰り返す制御構造です。プログラムではfor文やwhile文などで表現されます。",
    difficulty: "easy",
    status: "published"
  }
];

const seedUsers = [
  {
    id: "T0001",
    role: "teacher",
    name: "教師アカウント",
    email: "teacher@sankogakuen.jp",
    classId: "",
    seatNo: "",
    username: "先生",
    iconId: "book",
    rankingVisible: false,
    status: "active",
    lastLoginAt: "",
    createdAt: new Date().toISOString()
  },
  {
    id: "U0001",
    role: "student",
    name: "山田 太郎",
    email: "vwb0001@sankogakuen.jp",
    classId: "A1A",
    seatNo: 1,
    username: "ねこまる",
    iconId: "cat",
    rankingVisible: true,
    status: "active",
    lastLoginAt: addHours(new Date(), -120).toISOString(),
    createdAt: new Date().toISOString()
  },
  {
    id: "U0002",
    role: "student",
    name: "佐藤 花子",
    email: "vwb0002@sankogakuen.jp",
    classId: "A1B",
    seatNo: 8,
    username: "本好き",
    iconId: "book",
    rankingVisible: true,
    status: "active",
    lastLoginAt: addHours(new Date(), -4).toISOString(),
    createdAt: new Date().toISOString()
  }
];

const seedAuth = [
  { userId: "U0001", email: "vwb0001@sankogakuen.jp", passwordHash: demoHash("student123") },
  { userId: "U0002", email: "vwb0002@sankogakuen.jp", passwordHash: demoHash("student123") }
];

const app = document.querySelector("#app");
let state = loadState();
let currentUserId = localStorage.getItem("currentUserId") || sessionStorage.getItem("currentUserId") || "";
let currentView = "home";
let teacherClassFilter = "A1A";
let studentListFilter = { classId: "A1A", status: "all", query: "" };
let questionFilter = { year: "all", domain: "all", query: "" };
let practicePicker = "yearly";
let teacherDataLoadedAt = 0;
let teacherQuestionsLoadedAt = 0;
let questionPage = 1;
let importState = { running: false, total: 0, done: 0 };
let reportImportState = { running: false, total: 0, done: 0, label: "" };
let quiz = null;

function addHours(date, hours) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

function demoHash(value) {
  return btoa(unescape(encodeURIComponent(`mvp:${value}`)));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);

  const initial = {
    users: seedUsers,
    auth: seedAuth,
    questions: seedQuestions,
    answers: makeSeedAnswers(),
    pastResults: [],
    sessions: makeSeedSessions(),
    resetCodes: [],
    settings: {
      rankingLimit: 30,
      allowedPrefix: "vwb",
      allowedDomain: "sankogakuen.jp",
      followNoLoginHours: 72
    }
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function persistLogin(userId) {
  localStorage.setItem("currentUserId", userId);
  sessionStorage.setItem("currentUserId", userId);
}

function clearPersistedLogin() {
  localStorage.removeItem("currentUserId");
  sessionStorage.removeItem("currentUserId");
}

async function apiRequest(action, payload = {}) {
  if (!USE_REMOTE_API) throw new Error("Remote API is disabled.");

  const supabaseBackend = await window.supabaseBackendReady;
  if (supabaseBackend?.enabled) return supabaseBackend.request(action, payload);

  let lastError;
  for (const apiUrl of API_URLS) {
    try {
      const data = await jsonpRequest(action, payload, apiUrl);
      if (!data.ok) throw new Error(data.error || "API request failed.");
      return data;
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(lastError?.message || "API接続に失敗しました。通信環境を確認してください。");
}

function jsonpRequest(action, payload = {}, apiUrl = API_URLS[0]) {
  return new Promise((resolve, reject) => {
    const callbackName = `itpwa_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("APIの応答がありません。デプロイ設定を確認してください。"));
    }, 45000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    const params = new URLSearchParams({
      action,
      callback: callbackName,
      payload: JSON.stringify(payload)
    });

    script.onerror = () => {
      cleanup();
      reject(new Error("API接続に失敗しました。"));
    };
    script.referrerPolicy = "no-referrer";
    script.src = `${apiUrl}?${params.toString()}`;
    document.body.appendChild(script);
  });
}

function remoteUserToLocal(user) {
  const rawRole = String(user.role || "");
  const role = rawRole.startsWith("student") ? "student" : rawRole;
  return {
    id: user.user_id,
    role,
    name: user.name,
    email: user.email,
    classId: user.class_id || "",
    seatNo: user.seat_no || "",
    username: user.display_name || user.name,
    iconId: user.icon_id || "book",
    rankingVisible: user.ranking_visible !== false,
    status: user.status || "active",
    lastLoginAt: user.last_login_at || "",
    createdAt: user.created_at || new Date().toISOString()
  };
}

function upsertLocalUser(remoteUser) {
  const user = remoteUserToLocal(remoteUser);
  const index = state.users.findIndex((item) => item.id === user.id || item.email === user.email);
  if (index >= 0) state.users[index] = { ...state.users[index], ...user };
  else state.users.push(user);
  saveState();
  return user;
}

async function loadTeacherData(force = false) {
  if (!USE_REMOTE_API) return false;
  if (!force && Date.now() - teacherDataLoadedAt < 30000) return false;

  const result = await apiRequest("getTeacherData");
  state.users = result.users.map(remoteUserToLocal);
  state.answers = result.answers.map(remoteAnswerToLocal);
  state.sessions = result.sessions.map(remoteSessionToLocal);
  state.pastResults = (result.pastResults || result.importedResults || []).map(remotePastResultToLocal);
  state.messages = result.messages || state.messages || [];
  teacherDataLoadedAt = Date.now();
  saveState();
  return true;
}

function remoteAnswerToLocal(answer) {
  return {
    id: answer.answer_id,
    userId: answer.user_id,
    sessionId: answer.session_id,
    questionId: answer.question_id,
    selectedChoice: answer.selected_choice,
    isCorrect: answer.is_correct === true || String(answer.is_correct).toUpperCase() === "TRUE",
    answeredAt: answer.answered_at,
    answerTimeSec: Number(answer.answer_time_sec || 0),
    mode: answer.mode,
    viewedExplanation: answer.viewed_explanation === true || String(answer.viewed_explanation).toUpperCase() === "TRUE",
    isReview: answer.mode === "review",
    pointAwarded: Number(answer.point_awarded || 0)
  };
}

function remoteSessionToLocal(session) {
  return {
    id: session.session_id,
    userId: session.user_id,
    startedAt: session.started_at,
    endedAt: session.ended_at,
    durationSec: Number(session.duration_sec || 0),
    mode: session.mode
  };
}

function remotePastResultToLocal(row) {
  return {
    id: row.result_id,
    userId: row.user_id,
    uploadId: row.upload_id,
    no: Number(row.no || 0),
    isCorrect: row.is_correct === true || String(row.is_correct).toUpperCase() === "TRUE",
    domain: row.domain,
    majorCategory: row.major_category,
    middleCategory: row.middle_category,
    sourceLabel: row.source_label,
    sourceUrl: row.source_url,
    studiedAt: row.studied_at,
    uploadedAt: row.uploaded_at
  };
}

function makeSeedAnswers() {
  const now = new Date();
  return [
    answer("U0001", "Q2026-001", "a", true, addHours(now, -130), "yearly", 3),
    answer("U0001", "Q2026-002", "b", false, addHours(now, -129), "yearly", 2),
    answer("U0002", "Q2026-001", "a", true, addHours(now, -8), "recommended", 3),
    answer("U0002", "Q2026-002", "a", true, addHours(now, -7), "recommended", 3),
    answer("U0002", "Q2026-003", "d", false, addHours(now, -6), "weak", 2),
    answer("U0002", "Q2026-004", "a", true, addHours(now, -5), "category", 3)
  ];
}

function makeSeedSessions() {
  const now = new Date();
  return [
    { id: "S0001", userId: "U0001", startedAt: addHours(now, -130).toISOString(), endedAt: addHours(now, -129).toISOString(), durationSec: 3600, mode: "yearly" },
    { id: "S0002", userId: "U0002", startedAt: addHours(now, -8).toISOString(), endedAt: addHours(now, -5).toISOString(), durationSec: 2400, mode: "recommended" }
  ];
}

function answer(userId, questionId, selected, correct, date, mode, points) {
  return {
    id: crypto.randomUUID(),
    userId,
    sessionId: "",
    questionId,
    selectedChoice: selected,
    isCorrect: correct,
    answeredAt: date.toISOString(),
    answerTimeSec: 45,
    mode,
    viewedExplanation: true,
    isReview: mode === "review",
    pointAwarded: points
  };
}

function currentUser() {
  return state.users.find((user) => user.id === currentUserId) || null;
}

function isStudentEmail(email) {
  const normalized = email.trim().toLowerCase();
  return normalized.startsWith(state.settings.allowedPrefix) && normalized.endsWith(`@${state.settings.allowedDomain}`);
}

function formatDateTime(value) {
  if (!value) return "未ログイン";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function hoursSince(value) {
  if (!value) return Infinity;
  return (Date.now() - new Date(value).getTime()) / 36e5;
}

function pct(value) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "0%";
  return `${Math.round(value)}%`;
}

function userAnswers(userId) {
  return state.answers.filter((item) => item.userId === userId);
}

function userPastResults(userId) {
  return (state.pastResults || []).filter((item) => item.userId === userId);
}

function userStats(userId) {
  const answers = userAnswers(userId);
  const pastResults = userPastResults(userId);
  const total = answers.length + pastResults.length;
  const correct = answers.filter((item) => item.isCorrect).length + pastResults.filter((item) => item.isCorrect).length;
  const points = answers.reduce((sum, item) => sum + Number(item.pointAwarded || 0), 0);
  const sessions = state.sessions.filter((item) => item.userId === userId);
  const durationSec = sessions.reduce((sum, item) => sum + Number(item.durationSec || 0), 0);
  const categoryStats = {};

  answers.forEach((item) => {
    const q = state.questions.find((question) => question.id === item.questionId);
    if (!q) return;
    const key = q.category;
    categoryStats[key] ||= { total: 0, correct: 0, domain: q.domain };
    categoryStats[key].total += 1;
    if (item.isCorrect) categoryStats[key].correct += 1;
  });

  pastResults.forEach((item) => {
    const key = item.middleCategory || item.majorCategory || item.domain;
    if (!key) return;
    categoryStats[key] ||= { total: 0, correct: 0, domain: item.domain };
    categoryStats[key].total += 1;
    if (item.isCorrect) categoryStats[key].correct += 1;
  });

  const weakCategories = Object.entries(categoryStats)
    .filter(([, stat]) => stat.total > 0)
    .map(([category, stat]) => ({
      category,
      domain: stat.domain,
      total: stat.total,
      accuracy: (stat.correct / stat.total) * 100
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);

  return {
    answers: total,
    correct,
    accuracy: total ? (correct / total) * 100 : 0,
    points,
    studyMinutes: Math.round(durationSec / 60),
    weakCategories
  };
}

function domainStats(userId) {
  const domains = ["ストラテジ", "マネジメント", "テクノロジ"];
  const result = Object.fromEntries(domains.map((domain) => [domain, { domain, total: 0, correct: 0, accuracy: 0 }]));
  userAnswers(userId).forEach((item) => {
    const q = state.questions.find((question) => question.id === item.questionId);
    if (!q || !result[q.domain]) return;
    result[q.domain].total += 1;
    if (item.isCorrect) result[q.domain].correct += 1;
  });
  Object.values(result).forEach((item) => {
    item.accuracy = item.total ? (item.correct / item.total) * 100 : 0;
  });
  return Object.values(result);
}

function domainStats(userId) {
  const domains = ["ストラテジ系", "マネジメント系", "テクノロジ系"];
  const result = Object.fromEntries(domains.map((domain) => [domain, { domain, total: 0, correct: 0, accuracy: 0 }]));

  userAnswers(userId).forEach((item) => {
    const q = state.questions.find((question) => question.id === item.questionId);
    const domain = normalizeDomain(q?.domain);
    if (!domain || !result[domain]) return;
    result[domain].total += 1;
    if (item.isCorrect) result[domain].correct += 1;
  });

  userPastResults(userId).forEach((item) => {
    const domain = normalizeDomain(item.domain);
    if (!domain || !result[domain]) return;
    result[domain].total += 1;
    if (item.isCorrect) result[domain].correct += 1;
  });

  Object.values(result).forEach((item) => {
    item.accuracy = item.total ? (item.correct / item.total) * 100 : 0;
  });
  return Object.values(result);
}

function normalizeDomain(value) {
  const text = String(value || "");
  if (text.includes("ストラテジ")) return "ストラテジ系";
  if (text.includes("マネジメント")) return "マネジメント系";
  if (text.includes("テクノロジ")) return "テクノロジ系";
  return text;
}

function learningPlan(userId) {
  const stats = userStats(userId);
  const domains = domainStats(userId);
  const weakDomain = [...domains].sort((a, b) => {
    const aPriority = a.total < 5 ? -1 : a.accuracy;
    const bPriority = b.total < 5 ? -1 : b.accuracy;
    return aPriority - bPriority;
  })[0];
  const weakCategory = stats.weakCategories[0];

  let title = "まず20問までデータを集めよう";
  let reason = "まだ解答数が少ないため、苦手分野を正確に判断しにくい状態です。まずは問題数を増やすと、次にやるべき分野が見えやすくなります。";
  let mode = "recommended";
  let filterValue = "";
  let target = "おすすめ5問";

  if (stats.answers >= 20 && stats.accuracy < 60) {
    title = "全体正答率を60%に近づけよう";
    reason = `現在の全体正答率は${pct(stats.accuracy)}です。ITパスポートは総合評価で600点以上が必要なので、まず過去問正答率の目安として60%を目指します。`;
    mode = weakCategory ? "weak" : "recommended";
    filterValue = weakCategory?.category || "";
    target = weakCategory ? `${weakCategory.category}を5問` : "おすすめ5問";
  }

  if (stats.answers >= 20 && weakDomain && weakDomain.total >= 5 && weakDomain.accuracy < 30) {
    title = `${weakDomain.domain}を優先しよう`;
    reason = `${weakDomain.domain}の正答率が${pct(weakDomain.accuracy)}です。ITパスポートは各分野でも基準点が必要なため、全体が良くても1分野が低いと危険です。`;
    mode = "category";
    filterValue = weakDomain.domain;
    target = `${weakDomain.domain}を5問`;
  }

  if (stats.answers >= 20 && stats.accuracy >= 60 && domains.every((domain) => domain.total < 5 || domain.accuracy >= 30)) {
    title = "合格ラインに近い状態です";
    reason = "全体60%と各分野30%の目安を満たしています。次は間違えた問題の復習で安定させましょう。";
    mode = "review";
    target = "間違い復習";
  }

  return { title, reason, mode, filterValue, target, stats, domains };
}

function classSummary(classId) {
  const students = state.users.filter((user) => user.role === "student" && user.classId === classId);
  const totals = students.map((student) => userStats(student.id));
  const answerCount = totals.reduce((sum, item) => sum + item.answers, 0);
  const correctCount = totals.reduce((sum, item) => sum + item.correct, 0);
  const minutes = totals.reduce((sum, item) => sum + item.studyMinutes, 0);
  const inactive = students.filter((student) => hoursSince(student.lastLoginAt) >= state.settings.followNoLoginHours).length;
  return {
    students: students.length,
    answerCount,
    accuracy: answerCount ? (correctCount / answerCount) * 100 : 0,
    minutes,
    inactive
  };
}

function classHealth(classId) {
  const cls = classes.find((item) => item.id === classId);
  const expected = cls ? cls.maxSeat : 0;
  const students = state.users.filter((user) => user.role === "student" && user.classId === classId);
  const now = Date.now();
  const recentWeek = now - 7 * 24 * 60 * 60 * 1000;
  let notStarted = 0;
  let stopped = 0;
  let lowUnderstanding = 0;
  let activeThisWeek = 0;
  let steady = 0;

  students.forEach((student) => {
    const stats = userStats(student.id);
    const answers = userAnswers(student.id);
    const hasRecentAnswer = answers.some((item) => new Date(item.answeredAt).getTime() >= recentWeek);
    const noLoginHours = hoursSince(student.lastLoginAt);

    if (stats.answers === 0) notStarted += 1;
    if (stats.answers > 0 && noLoginHours >= state.settings.followNoLoginHours) stopped += 1;
    if (stats.answers >= 10 && stats.accuracy < 50) lowUnderstanding += 1;
    if (hasRecentAnswer || noLoginHours < state.settings.followNoLoginHours) activeThisWeek += 1;
    if (stats.answers >= 20 && stats.accuracy >= 70 && noLoginHours < state.settings.followNoLoginHours) steady += 1;

  });

  const registered = students.length;
  const missingRegistration = Math.max(0, expected - registered);
  let status = "要確認";
  let statusClass = "yellow";
  let suggestion = "未着手・停止中の学生を確認し、まず5問だけ取り組む声かけをします。";

  if (missingRegistration > 0) {
    status = "登録確認";
    statusClass = "red";
    suggestion = "未登録者がいます。授業内で登録状況を先にそろえるのがよさそうです。";
  } else if (notStarted + stopped >= Math.max(3, Math.ceil(registered * 0.25))) {
    status = "着手支援";
    statusClass = "red";
    suggestion = "学習開始・再開の声かけが必要です。短い演習から入ると動かしやすいです。";
  } else if (lowUnderstanding >= Math.max(2, Math.ceil(registered * 0.15))) {
    status = "理解支援";
    statusClass = "yellow";
    suggestion = "解いているが正答率が低い学生がいます。苦手分野の基礎説明を補うと効果的です。";
  } else if (steady >= Math.max(1, Math.ceil(registered * 0.35))) {
    status = "順調";
    statusClass = "green";
    suggestion = "継続できている学生が増えています。復習と分野横断の演習に進めます。";
  }

  return {
    classId,
    expected,
    registered,
    missingRegistration,
    activeThisWeek,
    notStarted,
    stopped,
    lowUnderstanding,
    steady,
    status,
    statusClass,
    suggestion
  };
}

function getRecommendation(userId) {
  const stats = userStats(userId);
  const weak = stats.weakCategories[0];
  if (!stats.answers) {
    return { title: "まずは5問だけ解いてみよう", detail: "最初は正答率を気にせず、問題に慣れるところから始めます。", mode: "recommended" };
  }
  if (weak && weak.accuracy < 60) {
    return { title: `${weak.category}を5問だけ復習`, detail: `直近の正答率が${pct(weak.accuracy)}です。短い演習で弱点を確認しましょう。`, mode: "weak", category: weak.category };
  }
  return { title: "ランダム10問で実力確認", detail: "分野を混ぜて、今の理解がどれくらい安定しているか見てみましょう。", mode: "random" };
}

function render() {
  const user = currentUser();
  if (!user) {
    renderAuth();
    return;
  }
  if (user.role === "teacher") renderTeacher();
  else renderStudent();
}

function layout(content) {
  const user = currentUser();
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">IT</div>
          <div class="brand-title">ITパスポート学習サポート</div>
        </div>
        <div class="top-actions">
          <span class="hint">${user.name} / ${user.role === "teacher" ? "教師" : `${user.classId} ${user.seatNo}番`}</span>
          <button class="button secondary" data-action="logout">ログアウト</button>
        </div>
      </header>
      <main class="container">${content}</main>
    </div>
  `;
  bindGlobal();
}

function renderAuth(active = "login", message = "", type = "error") {
  app.innerHTML = `
    <main class="login-layout">
      <section class="login-hero">
        <h1>今日やることが、すぐ分かるITパスポート学習。</h1>
        <p>まずは5問だけ。問題を解いて、解説を読んで、少しずつ合格ラインに近づいていきましょう。</p>
      </section>
      <section class="login-panel">
        <div class="auth-card">
          <div class="auth-tabs">
            <button class="${active === "login" ? "active" : ""}" data-auth-tab="login">ログイン</button>
            <button class="${active === "register" ? "active" : ""}" data-auth-tab="register">学生登録</button>
            <button class="${active === "reset" ? "active" : ""}" data-auth-tab="reset">再設定</button>
          </div>
          <div id="auth-form">${authForm(active, message, type)}</div>
          <p class="footer-note">学生は学校メールで登録してからログインしてください。</p>
        </div>
      </section>
    </main>
  `;
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.addEventListener("click", () => renderAuth(button.dataset.authTab));
  });
  bindAuth(active);
}

function authForm(active, message, type = "error") {
  const messageHtml = message ? `<p class="${type === "success" ? "success" : "error"}">${message}</p>` : "";
  if (active === "register") {
    return `
      <form class="form-grid" id="register-form">
        ${messageHtml}
        <div class="field"><label>氏名</label><input name="name" required placeholder="山田 太郎"></div>
        <div class="field"><label>学校メール</label><input name="email" required placeholder="vwb0000@sankogakuen.jp"></div>
        <div class="field"><label>パスワード</label><input name="password" type="password" required minlength="8" placeholder="8文字以上"></div>
        <div class="field"><label>クラス</label><select name="classId">${classes.map((c) => `<option>${c.id}</option>`).join("")}</select></div>
        <div class="field"><label>出席番号</label><select name="seatNo">${seatOptions("A1A")}</select></div>
        <div class="field"><label>ランキング名</label><input name="username" required placeholder="ねこまる"></div>
        <div class="field"><label>アイコン</label><select name="iconId">${icons.map((icon) => `<option value="${icon.id}">${icon.label}</option>`).join("")}</select></div>
        <button class="button full">登録して始める</button>
        <p class="hint">メールは vwb で始まり @sankogakuen.jp で終わる必要があります。</p>
      </form>
    `;
  }
  if (active === "reset") {
    return `
      <form class="form-grid" id="reset-form">
        ${messageHtml}
        <div class="field"><label>学校メール</label><input name="email" required placeholder="vwb0000@sankogakuen.jp"></div>
        <div class="field"><label>新しいパスワード</label><input name="password" type="password" required minlength="8"></div>
        <button class="button full">パスワードを再設定</button>
        <p class="hint">MVPでは確認コード送信の代わりに、その場で再設定します。後で学校メールへのコード送信に差し替えます。</p>
      </form>
    `;
  }
  return `
    <form class="form-grid" id="login-form">
      ${messageHtml}
      <div class="field"><label>メール</label><input name="email" required></div>
      <div class="field"><label>パスワード</label><input name="password" type="password" required></div>
      <button class="button full">ログイン</button>
    </form>
  `;
}

function seatOptions(classId) {
  const cls = classes.find((item) => item.id === classId) || classes[0];
  return Array.from({ length: cls.maxSeat }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("");
}

function bindAuth(active) {
  if (active === "register") {
    const form = document.querySelector("#register-form");
    const classSelect = form.classId;
    classSelect.addEventListener("change", () => {
      form.seatNo.innerHTML = seatOptions(classSelect.value);
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      registerStudent(data);
    });
  }
  if (active === "login") {
    document.querySelector("#login-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      login(data.email, data.password);
    });
  }
  if (active === "reset") {
    document.querySelector("#reset-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      resetPassword(data.email, data.password);
    });
  }
}

async function registerStudent(data) {
  const email = data.email.trim().toLowerCase();
  if (!isStudentEmail(email)) return renderAuth("register", "メールアドレスの形式が違います。");

  if (USE_REMOTE_API) {
    try {
      const result = await apiRequest("registerStudent", {
        name: data.name.trim(),
        email,
        password: data.password,
        class_id: data.classId,
        seat_no: Number(data.seatNo),
        display_name: data.username.trim(),
        icon_id: data.iconId
      });
      const user = upsertLocalUser(result.user);
      currentUserId = user.id;
      persistLogin(user.id);
      render();
      return;
    } catch (error) {
      return renderAuth("register", error.message);
    }
  }

  if (state.auth.some((item) => item.email === email)) return renderAuth("register", "このメールはすでに登録されています。");
  if (state.users.some((user) => user.role === "student" && user.classId === data.classId && Number(user.seatNo) === Number(data.seatNo))) {
    return renderAuth("register", "このクラスと出席番号はすでに登録されています。");
  }
  const id = crypto.randomUUID();
  state.users.push({
    id,
    role: "student",
    name: data.name.trim(),
    email,
    classId: data.classId,
    seatNo: Number(data.seatNo),
    username: data.username.trim(),
    iconId: data.iconId,
    rankingVisible: true,
    status: "active",
    lastLoginAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  });
  state.auth.push({ userId: id, email, passwordHash: demoHash(data.password) });
  saveState();
  currentUserId = id;
  persistLogin(id);
  render();
}

async function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  if (USE_REMOTE_API) {
    try {
      const result = await apiRequest("login", {
        email: normalizedEmail,
        password
      });
      const user = upsertLocalUser(result.user);
      currentUserId = user.id;
      persistLogin(user.id);
      currentView = "home";
      render();
      return;
    } catch (error) {
      return renderAuth("login", error.message);
    }
  }

  const auth = state.auth.find((item) => item.email === email.trim().toLowerCase());
  if (!auth || auth.passwordHash !== demoHash(password)) return renderAuth("login", "メールまたはパスワードが違います。");
  const user = state.users.find((item) => item.id === auth.userId);
  if (!user || user.status !== "active") return renderAuth("login", "このアカウントは利用できません。");
  user.lastLoginAt = new Date().toISOString();
  saveState();
  currentUserId = user.id;
  persistLogin(user.id);
  currentView = "home";
  render();
}

function resetPassword(email, password) {
  if (window.ITPWA_SUPABASE?.url && window.ITPWA_SUPABASE?.publishableKey) {
    window.supabaseBackendReady.then(async (backend) => {
      try {
        await backend.resetPassword(email);
        renderAuth("login", "パスワード再設定用のメールを送信しました。", "success");
      } catch (error) {
        renderAuth("reset", error.message);
      }
    });
    return;
  }
  const normalized = email.trim().toLowerCase();
  const auth = state.auth.find((item) => item.email === normalized);
  if (!auth) return renderAuth("reset", "登録済みのメールが見つかりません。");
  auth.passwordHash = demoHash(password);
  saveState();
  renderAuth("login", "パスワードを再設定しました。新しいパスワードでログインしてください。", "success");
}

function renderStudent() {
  const nav = `
    <div class="nav-tabs">
      ${tab("home", "ホーム")}
      ${tab("practice", "問題演習")}
      ${tab("ranking", "ランキング")}
      ${tab("profile", "プロフィール")}
    </div>
  `;
  if (currentView === "practice") currentView = "home";
  const content = currentView === "practice" ? studentPractice()
    : currentView === "ranking" ? studentRanking()
    : currentView === "profile" ? studentProfile()
    : studentHome();
  layout(nav + content + studentFirstGuide());
  bindStudent();
}

function studentGuideStorageKey() {
  return `itpwa-guide-seen-${currentUser()?.id || "student"}`;
}

function studentGuideHtml() {
  return `
    <div class="guide-steps">
      <div class="guide-step">
        <strong>1. 過去問道場で学習</strong>
        <span>分野別や年度別で問題を解き、学習結果のCSVを保存します。</span>
      </div>
      <div class="guide-step">
        <strong>2. CSVをアップロード</strong>
        <span>「CSVアップロード」からファイルを選ぶだけです。同じ履歴は二重登録されません。</span>
      </div>
      <div class="guide-step">
        <strong>3. 分析を確認</strong>
        <span>「分析」で苦手分野と、次に優先して取り組む内容を確認します。</span>
      </div>
    </div>
  `;
}

function studentFirstGuide() {
  if (localStorage.getItem(studentGuideStorageKey()) === "1") return "";
  return `
    <div class="modal-backdrop" data-student-guide>
      <section class="nudge-card student-guide-card" role="dialog" aria-modal="true" aria-labelledby="student-guide-title">
        <div>
          <span class="tag green">はじめに</span>
          <h2 id="student-guide-title">このシステムの使い方</h2>
          <p class="hint">3つの流れだけ覚えれば大丈夫です。</p>
        </div>
        ${studentGuideHtml()}
        <button class="button full" type="button" data-close-student-guide>始める</button>
      </section>
    </div>
  `;
}

function tab(view, label) {
  return `<button class="${currentView === view ? "active" : ""}" data-view="${view}">${label}</button>`;
}

function studentHome() {
  const user = currentUser();
  const stats = userStats(user.id);
  const rec = getRecommendation(user.id);
  const plan = learningPlan(user.id);
  const streak = learningStreak(user.id);
  const nextGoal = Math.max(0, 20 - stats.answers);
  const weak = stats.weakCategories[0];
  return `
    <section class="student-home">
      <div class="mission-hero">
        <div class="mission-copy">
          <span class="tag">今日のミッション</span>
          <h1>${rec.title}</h1>
          <p>${rec.detail}</p>
          <div class="mission-stats">
            <span>連続 ${streak}日</span>
            <span>正答率 ${pct(stats.accuracy)}</span>
            <span>あと${nextGoal}問で基礎データ完成</span>
          </div>
        </div>
        <div class="mission-action">
          <div class="focus-orb">5</div>
          <button class="button" data-start-mode="${rec.mode}" data-category="${rec.category || ""}">5問だけ解く</button>
        </div>
      </div>

      ${reportImportProgress()}

      <div class="home-focus-grid">
        <section class="panel quiet-panel plan-panel">
          <div class="panel-header"><h2 class="panel-title">次にやること</h2></div>
          <div class="panel-body">
            <p class="next-main">${plan.target}</p>
            <p class="hint">${plan.reason}</p>
            <div class="domain-meter">
              ${plan.domains.map((domain) => `
                <div>
                  <span>${domain.domain}</span>
                  <strong>${domain.total ? pct(domain.accuracy) : "-"}</strong>
                </div>
              `).join("")}
            </div>
            <button class="button full" data-start-mode="${plan.mode}" data-filter-value="${plan.filterValue}" data-category="${plan.filterValue}">${plan.target}</button>
          </div>
        </section>
        <section class="panel quiet-panel progress-panel">
          <div class="panel-header"><h2 class="panel-title">今の進み具合</h2></div>
          <div class="panel-body">
            <div class="progress-line">
              <div>
                <strong>${stats.answers}問</strong>
                <span>まず20問まで解くと、苦手が見えやすくなります。</span>
              </div>
              <div class="progress-ring">${Math.min(100, Math.round((stats.answers / 20) * 100))}%</div>
            </div>
            <div class="simple-progress"><span style="width:${Math.min(100, Math.round((stats.answers / 20) * 100))}%"></span></div>
            <p class="hint">${nextGoal ? `あと${nextGoal}問で、学習アドバイスの精度が上がります。` : "基礎データは十分です。次は弱点復習に進みましょう。"}</p>
          </div>
        </section>
        <section class="panel quiet-panel next-panel">
          <div class="panel-header"><h2 class="panel-title">次のおすすめ</h2></div>
          <div class="panel-body">
            ${weak ? `
              <p class="next-main">${weak.category}</p>
              <p class="hint">${weak.domain} / 正答率 ${pct(weak.accuracy)}</p>
              <button class="button secondary full" data-start-mode="weak" data-category="${weak.category}">この分野を5問</button>
            ` : `
              <p class="next-main">おすすめ演習</p>
              <p class="hint">まずは問題を解いて、得意・苦手を見える化しましょう。</p>
              <button class="button secondary full" data-start-mode="recommended">おすすめ5問</button>
            `}
          </div>
        </section>
      </div>

      <details class="more-study">
        <summary>ほかの学習メニュー</summary>
        <div class="compact-actions">
          ${actionTile("review", "間違えた問題", "復習")}
          ${actionTile("random", "ランダム10問", "確認")}
          ${actionTile("yearly", "年度別", "過去問")}
          ${actionTile("category", "分野別", "選んで解く")}
        </div>
      </details>
    </section>
  `;
}

function studentHome() {
  const user = currentUser();
  const report = pastResultSummary(user.id);
  const weakTop = report.weak[0];
  return `
    <section class="student-home">
      <div class="mission-hero">
        <div class="mission-copy">
          <span class="tag">過去問道場CSV分析</span>
          <h1>解いた結果から、次にやることを見つけます</h1>
          <p>過去問道場で演習したあと、CSVをアップロードしてください。苦手分野・合格ライン・復習優先度を確認できます。</p>
          <div class="mission-stats">
            <span>アップロード ${report.total}問</span>
            <span>正答率 ${pct(report.accuracy)}</span>
            <span>${report.latestUpload ? `最終 ${formatDateTime(report.latestUpload)}` : "まだCSVなし"}</span>
          </div>
        </div>
        <div class="mission-action">
          <div class="focus-orb">CSV</div>
          <label class="button file-button">
            CSVを選ぶ
            <input type="file" data-past-report-file accept=".csv,text/csv">
          </label>
        </div>
      </div>

      ${reportImportProgress()}

      <div class="home-focus-grid">
        <section class="panel quiet-panel plan-panel">
          <div class="panel-header"><h2 class="panel-title">次にやること</h2></div>
          <div class="panel-body">
            <p class="next-main">${weakTop ? `${weakTop.name}を復習` : "CSVをアップロード"}</p>
            <p class="hint">${studyAdvice(report)}</p>
            <div class="domain-meter">
              ${report.domains.map((domain) => `
                <div>
                  <span>${domain.domain}</span>
                  <strong>${domain.total ? pct(domain.accuracy) : "-"}</strong>
                </div>
              `).join("")}
            </div>
            ${weakTop ? `<a class="button full" href="${escapeHtml(firstWrongLink(user.id, weakTop.name) || "https://www.itpassportsiken.com/")}" target="_blank" rel="noopener">過去問道場で復習する</a>` : ""}
          </div>
        </section>

        <section class="panel quiet-panel progress-panel">
          <div class="panel-header"><h2 class="panel-title">今回の分析</h2></div>
          <div class="panel-body">
            <div class="progress-line">
              <div>
                <strong>${report.total}問</strong>
                <span>正解 ${report.correct}問 / 不正解 ${report.wrong}問</span>
              </div>
              <div class="progress-ring">${pct(report.accuracy)}</div>
            </div>
            <div class="simple-progress"><span style="width:${Math.min(100, Math.round(report.accuracy))}%"></span></div>
            <p class="hint">合格目安は全体60%以上、各分野30%以上です。</p>
          </div>
        </section>

        <section class="panel quiet-panel next-panel">
          <div class="panel-header"><h2 class="panel-title">苦手トップ3</h2></div>
          <div class="panel-body">
            ${report.weak.length ? report.weak.map((item) => `
              <div class="mini-row">
                <strong>${item.name}</strong>
                <span>${item.domain || ""} / ${item.correct}/${item.total}問 / ${pct(item.accuracy)}</span>
              </div>
            `).join("") : `<p class="hint">CSVをアップロードすると、苦手分野が表示されます。</p>`}
          </div>
        </section>
      </div>
    </section>
  `;
}

function firstWrongLink(userId, categoryName) {
  const row = userPastResults(userId).find((item) =>
    !item.isCorrect && [item.middleCategory, item.majorCategory, item.domain].includes(categoryName) && item.sourceUrl
  );
  return row?.sourceUrl || "";
}

function reportImportProgress() {
  if (!reportImportState.running && !reportImportState.total) return "";
  const percent = reportImportState.total ? Math.round((reportImportState.done / reportImportState.total) * 100) : 0;
  return `
    <section class="panel report-import-panel">
      <div class="panel-body">
        <div class="progress-line">
          <div>
            <strong>${reportImportState.running ? "CSVを取り込み中" : "CSV取り込み完了"}</strong>
            <span>${reportImportState.label || "処理しています。画面を閉じないでください。"}</span>
          </div>
          <div class="progress-ring">${percent}%</div>
        </div>
        <div class="simple-progress"><span style="width:${percent}%"></span></div>
        <p class="hint">${reportImportState.done}/${reportImportState.total || "-"}問 処理済み</p>
      </div>
    </section>
  `;
}

function showReportImportOverlay(total = 0, done = 0, label = "CSVを取り込んでいます。") {
  let overlay = document.querySelector("[data-report-import-overlay]");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "report-import-overlay";
    overlay.dataset.reportImportOverlay = "true";
    document.body.appendChild(overlay);
  }
  const percent = total ? Math.round((done / total) * 100) : 0;
  overlay.innerHTML = `
    <div class="report-import-card">
      <strong>CSVを取り込み中</strong>
      <p>${escapeHtml(label)}</p>
      <div class="simple-progress"><span style="width:${percent}%"></span></div>
      <div class="report-import-count">${total ? `${done}/${total}問` : "準備中"} ${percent}%</div>
    </div>
  `;
}

function hideReportImportOverlay() {
  document.querySelector("[data-report-import-overlay]")?.remove();
}

function pathStep(no, title, detail, active) {
  return `
    <div class="path-step ${active ? "active" : ""}">
      <div class="path-number">${no}</div>
      <div>
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
    </div>
  `;
}

function learningStreak(userId) {
  const days = new Set(userAnswers(userId).map((item) => new Date(item.answeredAt).toDateString()));
  let streak = 0;
  const cursor = new Date();
  while (days.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function studentNudgeModal() {
  const user = currentUser();
  if (!user || user.role !== "student" || currentView !== "home") return "";
  const key = `studentNudgeSeen:${user.id}`;
  if (sessionStorage.getItem(key)) return "";
  const stats = userStats(user.id);
  const title = stats.answers ? "今日も5問だけ進めよう" : "最初の5問でスタート";
  const detail = stats.answers ? "短く続けるほど、苦手分野がはっきり見えてきます。" : "正答率はまだ気にしなくてOK。まずは1回解いてみましょう。";
  return `
    <div class="modal-backdrop" data-nudge-modal>
      <div class="nudge-card" role="dialog" aria-modal="true" aria-label="今日の学習">
        <div class="nudge-badge">今日</div>
        <h2>${title}</h2>
        <p>${detail}</p>
        <div class="nudge-actions">
          <button class="button" data-nudge-start>5問だけ解く</button>
          <button class="button secondary" data-nudge-close>あとで</button>
        </div>
      </div>
    </div>
  `;
}

function metric(label, value, note) {
  return `<div class="card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-note">${note}</div></div>`;
}

function definitionItem(label, detail) {
  return `
    <div class="definition-item">
      <strong>${label}</strong>
      <span>${detail}</span>
    </div>
  `;
}

function helpTh(label, detail) {
  return `
    <th>
      <span class="th-help" tabindex="0" aria-label="${label}: ${detail}">
        ${label}
        <span class="help-dot">?</span>
        <span class="tooltip" role="tooltip">${detail}</span>
      </span>
    </th>
  `;
}

function actionTile(mode, title, detail) {
  return `<button class="action-tile" data-start-mode="${mode}"><strong>${title}</strong><span>${detail}</span></button>`;
}

function pastResultSummary(userId) {
  const rows = userPastResults(userId);
  const correct = rows.filter((row) => row.isCorrect).length;
  const wrong = rows.length - correct;
  const domains = domainStats(userId);
  const weak = [...rows.reduce((map, row) => {
    const key = row.middleCategory || row.majorCategory || row.domain || "未分類";
    const item = map.get(key) || { name: key, domain: row.domain, total: 0, correct: 0 };
    item.total += 1;
    if (row.isCorrect) item.correct += 1;
    map.set(key, item);
    return map;
  }, new Map()).values()]
    .filter((item) => item.total > 0)
    .map((item) => ({ ...item, accuracy: (item.correct / item.total) * 100 }))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 3);

  return {
    total: rows.length,
    correct,
    wrong,
    accuracy: rows.length ? (correct / rows.length) * 100 : 0,
    domains,
    weak,
    latestUpload: rows.map((row) => row.uploadedAt).filter(Boolean).sort().at(-1) || ""
  };
}

function studyAdvice(summary) {
  if (!summary.total) return "まずは過去問道場で10問以上解いて、CSVをアップロードしましょう。分析はアップロード後に表示されます。";
  const lowDomain = summary.domains.find((domain) => domain.total >= 3 && domain.accuracy < 30);
  if (lowDomain) return `${lowDomain.domain} が合格基準の目安である30%を下回っています。まずはこの分野を優先して、間違えた問題を過去問道場で解き直しましょう。`;
  if (summary.accuracy < 60) return `全体正答率が ${pct(summary.accuracy)} です。合格目安の60%に届くよう、苦手中分類を中心に復習しましょう。`;
  return "全体の正答率は合格目安に近い状態です。間違えた問題の解き直しと、解いていない年度の演習で安定させましょう。";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatQuestionText(text) {
  const raw = String(text || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";

  const markers = [...raw.matchAll(/(?:^|[\s。])([a-d])\s(?=\S)/g)]
    .filter((match) => {
      const before = raw.slice(Math.max(0, match.index - 8), match.index);
      return !/[A-Za-z0-9]$/.test(before.trim());
    });

  if (markers.length >= 2) {
    const introEnd = markers[0].index + (raw[markers[0].index] === " " ? 1 : 0);
    const intro = raw.slice(0, introEnd).trim();
    const items = markers.map((match, index) => {
      const start = match.index + match[0].indexOf(match[1]);
      const next = markers[index + 1]?.index ?? raw.length;
      const body = raw.slice(start + 1, next).trim();
      return `<li><span class="condition-label">${match[1]}</span><span>${escapeHtml(body)}</span></li>`;
    }).join("");
    return `<div class="question-text structured">
      ${intro ? `<p>${escapeHtml(intro)}</p>` : ""}
      <ul class="condition-list">${items}</ul>
    </div>`;
  }

  const sentences = raw
    .replace(/。\s+/g, "。\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return `<div class="question-text">${sentences.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</div>`;
}

function studentPractice() {
  if (!quiz) {
    const user = currentUser();
    const stats = userStats(user.id);
    const rec = getRecommendation(user.id);
    const weak = stats.weakCategories[0];
    const years = [...new Set(state.questions.map((q) => q.year))].sort().reverse();
    const domains = [...new Set(state.questions.map((q) => q.domain))].sort();
    return `
      <section class="student-page">
        <div class="practice-focus">
          <div>
            <span class="tag">おすすめ</span>
            <h1>${rec.title}</h1>
            <p>${rec.detail}</p>
          </div>
          <button class="button" data-start-mode="${rec.mode}" data-category="${rec.category || ""}">この5問を解く</button>
        </div>

        <div class="mode-grid">
          <button class="mode-card primary-mode" data-start-mode="recommended">
            <strong>おすすめ5問</strong>
            <span>迷ったらここから</span>
          </button>
          <button class="mode-card" data-start-mode="weak" data-category="${weak?.category || ""}">
            <strong>苦手を5問</strong>
            <span>${weak ? weak.category : "弱点が見えたら表示"}</span>
          </button>
          <button class="mode-card" data-start-mode="review">
            <strong>間違い復習</strong>
            <span>前にミスした問題</span>
          </button>
          <button class="mode-card" data-start-mode="random">
            <strong>ランダム10問</strong>
            <span>理解度チェック</span>
          </button>
        </div>

        <details class="more-study">
          <summary>年度・分野を指定して解く</summary>
          <div class="picker-panel">
            <div class="segmented picker-tabs">
              <button class="${practicePicker === "yearly" ? "active" : ""}" data-practice-picker="yearly">年度</button>
              <button class="${practicePicker === "category" ? "active" : ""}" data-practice-picker="category">分野</button>
            </div>
            <div class="picker-options">
              ${practicePicker === "yearly"
                ? years.map((year) => `<button class="picker-chip" data-start-mode="yearly" data-filter-value="${year}">${year}</button>`).join("")
                : domains.map((domain) => `<button class="picker-chip" data-start-mode="category" data-filter-value="${domain}">${domain}</button>`).join("")}
            </div>
          </div>
        </details>
      </section>
    `;
  }
  const q = quiz.questions[quiz.index];
  const answered = quiz.currentAnswer;
  return `
    <section class="question-layout">
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">${q.year} 問${q.no}</h2>
          <span class="tag">${quiz.index + 1} / ${quiz.questions.length}</span>
        </div>
        <div class="panel-body">
          ${formatQuestionText(q.text)}
          <div class="choices">
            ${Object.entries(q.choices).map(([key, text]) => {
              const status = answered && key === q.answer ? "correct" : answered && key === answered && key !== q.answer ? "wrong" : "";
              return `<button class="choice ${status}" data-choice="${key}" ${quiz.currentAnswer ? "disabled" : ""}>
                <span class="choice-key">${key.toUpperCase()}</span><span>${escapeHtml(text)}</span>
              </button>`;
            }).join("")}
          </div>
          ${answered ? `
            <div class="explanation">
              <strong>${answered === q.answer ? "正解です。" : `正解は ${q.answer.toUpperCase()} です。`}</strong><br>
              ${q.explanation}
            </div>
            <div class="toolbar" style="margin-top:16px">
              <button class="button" data-next-question>${quiz.index + 1 >= quiz.questions.length ? "結果を見る" : "次の問題"}</button>
              <button class="button secondary" data-end-quiz>演習を終了</button>
            </div>
          ` : ""}
        </div>
      </div>
      <aside class="panel">
        <div class="panel-header"><h2 class="panel-title">今回の演習</h2></div>
        <div class="panel-body">
          <p class="hint">モード</p>
          <p><span class="tag">${modeLabel(quiz.mode)}</span></p>
          <p class="hint">出題分野</p>
          <p>${q.domain} / ${q.category}</p>
        </div>
      </aside>
    </section>
  `;
}

function modeLabel(mode) {
  return ({ recommended: "おすすめ", weak: "苦手", random: "ランダム", review: "復習", yearly: "年度別", category: "分野別" }[mode] || mode);
}

async function startQuiz(mode, category = "", filterValue = "") {
  let questions = state.questions.filter((q) => q.status === "published");
  const user = currentUser();

  if (USE_REMOTE_API) {
    try {
      const result = await apiRequest("getQuestions", {
        user_id: user.id,
        mode,
        filter_value: filterValue || category || "",
        limit: mode === "random" ? 10 : 5
      });
      questions = result.questions.map(remoteQuestionToLocal);
      mergeQuestions(questions);
    } catch (error) {
      alert(`問題取得に失敗しました。ローカルのサンプル問題で続けます。\n${error.message}`);
    }
  }

  if (mode === "weak") {
    const weak = category || getRecommendation(user.id).category;
    if (weak) questions = questions.filter((q) => q.category === weak);
  }
  if (mode === "review") {
    const wrongIds = new Set(userAnswers(user.id).filter((a) => !a.isCorrect).map((a) => a.questionId));
    questions = questions.filter((q) => wrongIds.has(q.id));
  }
  if (mode === "category") {
    if (filterValue) questions = questions.filter((q) => q.domain === filterValue || q.category === filterValue);
  }
  if (mode === "yearly") {
    if (filterValue) questions = questions.filter((q) => q.year === filterValue);
  }
  if (!questions.length) {
    alert("条件に合う問題がありません。別の演習を選んでください。");
    return;
  }
  const limit = mode === "random" ? 10 : 5;
  quiz = {
    id: crypto.randomUUID(),
    mode,
    questions: shuffle(questions).slice(0, limit),
    index: 0,
    currentAnswer: "",
    startedAt: new Date().toISOString(),
    correctCount: 0
  };
  currentView = "practice";
  render();
}

function remoteQuestionToLocal(question) {
  return {
    id: question.question_id,
    year: question.exam_year,
    no: Number(question.question_no),
    domain: question.domain,
    category: question.category,
    text: question.question_text,
    choices: {
      a: question.choice_a,
      b: question.choice_b,
      c: question.choice_c,
      d: question.choice_d
    },
    answer: question.correct_choice,
    explanation: question.explanation,
    difficulty: question.difficulty || "normal",
    status: question.status || "published"
  };
}

function localQuestionToRemote(question) {
  return {
    question_id: question.id,
    exam_year: question.year,
    question_no: question.no,
    domain: question.domain,
    category: question.category,
    subcategory: question.subcategory || "",
    question_text: question.text,
    choice_a: question.choices.a,
    choice_b: question.choices.b,
    choice_c: question.choices.c,
    choice_d: question.choices.d,
    correct_choice: question.answer,
    explanation: question.explanation,
    difficulty: question.difficulty || "normal",
    status: question.status || "published",
    source: question.source || "manual",
    updated_by: currentUser()?.id || "T000001"
  };
}

function mergeQuestions(questions) {
  questions.forEach((question) => {
    const index = state.questions.findIndex((item) => item.id === question.id);
    if (index >= 0) state.questions[index] = question;
    else state.questions.push(question);
  });
  saveState();
}

async function loadTeacherQuestions(force = false) {
  if (!USE_REMOTE_API) return false;
  if (!force && Date.now() - teacherQuestionsLoadedAt < 30000) return false;
  const result = await apiRequest("getQuestions", { mode: "all", limit: 2000 });
  state.questions = result.questions.map(remoteQuestionToLocal);
  teacherQuestionsLoadedAt = Date.now();
  saveState();
  return true;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

async function answerQuestion(choice) {
  if (!quiz || quiz.currentAnswer) return;
  const user = currentUser();
  const q = quiz.questions[quiz.index];
  const isCorrect = choice === q.answer;
  const stats = userStats(user.id);
  const weakNames = new Set(stats.weakCategories.map((item) => item.category));
  const points = 1 + (isCorrect ? 1 : 0) + 1 + (weakNames.has(q.category) ? 1 : 0);
  quiz.currentAnswer = choice;
  if (isCorrect) quiz.correctCount += 1;
  const localAnswer = {
    id: crypto.randomUUID(),
    userId: user.id,
    sessionId: quiz.id,
    questionId: q.id,
    selectedChoice: choice,
    isCorrect,
    answeredAt: new Date().toISOString(),
    answerTimeSec: Math.max(8, Math.round((Date.now() - new Date(quiz.startedAt).getTime()) / 1000)),
    mode: quiz.mode,
    viewedExplanation: true,
    isReview: quiz.mode === "review",
    pointAwarded: points
  };
  state.answers.push(localAnswer);
  saveState();

  if (USE_REMOTE_API) {
    apiRequest("submitAnswer", {
      user_id: user.id,
      session_id: quiz.id,
      question_id: q.id,
      selected_choice: choice,
      answer_time_sec: localAnswer.answerTimeSec,
      mode: quiz.mode,
      viewed_explanation: true
    }).then((result) => {
      localAnswer.isCorrect = result.is_correct;
      localAnswer.pointAwarded = result.point_awarded;
      saveState();
    }).catch((error) => {
      console.warn("submitAnswer failed", error);
    });
  }

  render();
}

function nextQuestion() {
  if (!quiz) return;
  if (quiz.index + 1 >= quiz.questions.length) {
    finishQuiz();
    return;
  }
  quiz.index += 1;
  quiz.currentAnswer = "";
  render();
}

function finishQuiz() {
  const user = currentUser();
  const endedAt = new Date().toISOString();
  const durationSec = Math.max(60, Math.round((Date.now() - new Date(quiz.startedAt).getTime()) / 1000));
  const session = {
    id: quiz.id,
    userId: user.id,
    startedAt: quiz.startedAt,
    endedAt,
    durationSec,
    mode: quiz.mode
  };
  state.sessions.push(session);

  if (USE_REMOTE_API) {
    apiRequest("finishSession", {
      session_id: session.id,
      user_id: user.id,
      started_at: session.startedAt,
      duration_sec: durationSec,
      mode: session.mode,
      answered_count: quiz.questions.length,
      correct_count: quiz.correctCount,
      device_type: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop"
    }).catch((error) => {
      console.warn("finishSession failed", error);
    });
  }

  quiz = null;
  saveState();
  currentView = "home";
  render();
}

function studentRanking() {
  const rows = rankingRows();
  const mineIndex = rows.findIndex((row) => row.user.id === currentUser().id);
  const mine = rankingRows().find((row) => row.user.id === currentUser().id);
  return `
    <section class="student-page">
      <div class="ranking-hero">
        <div>
          <span class="tag">今週</span>
          <h1>学習ポイントランキング</h1>
        </div>
        <div class="my-rank">
          <strong>${mineIndex >= 0 ? `${mineIndex + 1}位` : "-"}</strong>
          <span>あなたの順位</span>
        </div>
      </div>

      ${mine ? `
        <div class="student-mini-card">
          <div class="avatar">${iconLabel(mine.user.iconId).slice(0, 1)}</div>
          <div>
            <strong>${mine.user.username}</strong>
            <span>${mine.stats.points}pt / ${mine.stats.answers}問</span>
          </div>
        </div>
      ` : ""}

      <section class="panel quiet-panel">
        <div class="panel-header">
          <h2 class="panel-title">上位30名</h2>
        </div>
        <div class="panel-body ranking-list">
          ${rows.length ? rows.map((row, i) => `
            <div class="ranking-row ${row.user.id === currentUser().id ? "me" : ""}">
              <div class="rank-number">${i + 1}</div>
              <div class="row-main">
                <p class="row-title">${iconLabel(row.user.iconId)} ${row.user.username}</p>
                <p class="row-sub">${row.stats.answers}問 / 正答率 ${pct(row.stats.accuracy)}</p>
              </div>
              <span class="tag">${row.stats.points}pt</span>
            </div>
          `).join("") : `<p class="empty">まだランキング対象者がいません。</p>`}
        </div>
      </section>
    </section>
  `;
}

function rankingRows() {
  return state.users
    .filter((user) => user.role === "student" && user.rankingVisible)
    .map((user) => ({ user, stats: userStats(user.id) }))
    .sort((a, b) => b.stats.points - a.stats.points)
    .slice(0, state.settings.rankingLimit);
}

function iconLabel(iconId) {
  return icons.find((icon) => icon.id === iconId)?.label || "学習";
}

function studentProfile() {
  const user = currentUser();
  const classOptions = classes.map((item) =>
    `<option value="${item.id}" ${user.classId === item.id ? "selected" : ""}>${item.id}</option>`
  ).join("");
  const selectedClass = classes.find((item) => item.id === user.classId) || classes[0];
  const seatNumberOptions = Array.from({ length: selectedClass.maxSeat }, (_, index) => {
    const seatNo = index + 1;
    return `<option value="${seatNo}" ${Number(user.seatNo) === seatNo ? "selected" : ""}>${seatNo}番</option>`;
  }).join("");
  return `
    <section class="student-page profile-page">
      <div class="profile-hero">
        <div class="profile-avatar">${iconLabel(user.iconId).slice(0, 1)}</div>
        <div>
          <h1>${user.username}</h1>
          <p>${user.classId} ${user.seatNo}番 / 学生同士には本名は表示されません。</p>
        </div>
      </div>

      <div class="profile-grid">
        <section class="panel quiet-panel">
          <div class="panel-header"><h2 class="panel-title">公開プロフィール</h2></div>
          <div class="panel-body">
            <form class="form-grid" id="profile-form">
              <div class="field"><label>ランキング名</label><input name="username" value="${user.username}" required></div>
              <div class="field"><label>アイコン</label><select name="iconId">${icons.map((icon) => `<option value="${icon.id}" ${user.iconId === icon.id ? "selected" : ""}>${icon.label}</option>`).join("")}</select></div>
              <label class="toggle-line"><input type="checkbox" name="rankingVisible" ${user.rankingVisible ? "checked" : ""}> ランキングに表示する</label>
              <button class="button">保存</button>
            </form>
          </div>
        </section>
        <section class="panel quiet-panel">
          <div class="panel-header"><h2 class="panel-title">使い方</h2></div>
          <div class="panel-body">
            <p class="hint">CSVアップロードから分析確認までの流れを、いつでも見直せます。</p>
            <button class="button secondary" type="button" data-open-student-guide>使い方を見る</button>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderTeacher() {
  if (USE_REMOTE_API) {
    loadTeacherData(currentView === "students").then((loaded) => {
      if (loaded && currentUser()?.role === "teacher") render();
    }).catch((error) => console.warn("loadTeacherData failed", error));
    if (currentView === "questions") {
      loadTeacherQuestions().then((loaded) => {
        if (loaded && currentUser()?.role === "teacher" && currentView === "questions") render();
      }).catch((error) => console.warn("loadTeacherQuestions failed", error));
    }
  }

  const nav = `
    <div class="nav-tabs">
      ${tab("home", "ダッシュボード")}
      ${tab("students", "学生一覧")}
      ${tab("questions", "問題管理")}
    </div>
  `;
  const content = currentView === "students" ? teacherStudents()
    : currentView === "questions" ? teacherQuestions()
    : teacherHome();
  layout(nav + content);
  bindTeacher();
}

function followRows() {
  return state.users
    .filter((user) => user.role === "student")
    .map((user) => {
      const stats = userStats(user.id);
      const risk = followRisk(user, stats);
      return { user, stats, ...risk };
    })
    .filter((row) => row.needsFollow)
    .sort((a, b) => {
      const levelScore = { red: 0, yellow: 1, green: 2 };
      return levelScore[a.level] - levelScore[b.level] || b.score - a.score;
    });
}

function followRisk(user, stats) {
  const noLoginHours = hoursSince(user.lastLoginAt);
  const weak = stats.weakCategories[0];
  let score = 0;
  const reasons = [];

  if (stats.answers === 0) {
    score += 35;
    reasons.push("未着手");
  } else if (stats.answers < 20) {
    score += 20;
    reasons.push("演習量不足");
  }

  if (stats.answers >= 10 && stats.accuracy < 50) {
    score += 35;
    reasons.push("正答率50%未満");
  } else if (stats.answers >= 10 && stats.accuracy < 60) {
    score += 20;
    reasons.push("正答率60%未満");
  }

  if (noLoginHours >= 168) {
    score += 30;
    reasons.push("7日以上ログインなし");
  } else if (noLoginHours >= state.settings.followNoLoginHours) {
    score += 20;
    reasons.push("72時間以上ログインなし");
  }

  if (stats.studyMinutes < 30) {
    score += 10;
    reasons.push("学習時間30分未満");
  }

  const needsFollow = score >= 25;
  const level = score >= 55 ? "red" : score >= 25 ? "yellow" : "green";
  const label = level === "red" ? "高リスク" : level === "yellow" ? "要確認" : "順調";
  let action = "学習状況を確認し、次に取り組む5問を指定します。";

  if (stats.answers === 0) {
    action = "まず今日5問だけ着手。正答率より、開始できたかを確認します。";
  } else if (noLoginHours >= state.settings.followNoLoginHours) {
    action = "学習再開を優先。おすすめ5問から戻れるように声をかけます。";
  } else if (stats.answers >= 10 && stats.accuracy < 50) {
    action = weak ? `${weak.category}を基礎から確認し、解説を読んでから再演習します。` : "基礎問題を一緒に確認し、解説を読んでから再演習します。";
  } else if (stats.answers < 20) {
    action = "まず20問まで演習量を増やし、正答率の判断材料をそろえます。";
  }

  return {
    needsFollow,
    score,
    level,
    label,
    reason: reasons.slice(0, 3).join(" / "),
    action
  };
}

function teacherHome() {
  const follow = followRows();
  const selectedFollow = follow.filter((row) => row.user.classId === teacherClassFilter);
  const followByClass = classes.map((cls) => ({
    id: cls.id,
    total: follow.filter((row) => row.user.classId === cls.id).length,
    high: follow.filter((row) => row.user.classId === cls.id && row.level === "red").length
  }));
  const highRisk = follow.filter((row) => row.level === "red").length;
  const registeredInClass = state.users.filter((user) => user.role === "student" && user.classId === teacherClassFilter).length;
  return `
    <section class="grid">
      <div class="cards">
        ${metric("フォロー対象", `${follow.length}人`, "全クラスの要確認・高リスク")}
        ${metric("高リスク", `${highRisk}人`, "優先して声をかけたい学生")}
        ${metric(`${teacherClassFilter}の対象`, `${selectedFollow.length}人`, "選択中クラスのフォロー対象")}
        ${metric(`${teacherClassFilter}登録`, `${registeredInClass}人`, "このクラスで登録済みの学生")}
      </div>
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">クラス別 フォロー対象</h2>
          <span class="tag">デフォルト: A1A</span>
        </div>
        <div class="panel-body">
          <div class="class-filter" role="tablist" aria-label="クラスを選択">
            ${followByClass.map((row) => `
              <button class="${teacherClassFilter === row.id ? "active" : ""}" data-class-filter="${row.id}">
                <strong>${row.id}</strong>
                <span>${row.total}人${row.high ? ` / 高${row.high}` : ""}</span>
              </button>
            `).join("")}
          </div>
          <div class="risk-note">
            <strong>フォロー判定</strong>
            <span>未着手、演習量不足、正答率50%未満、72時間以上ログインなし、学習時間30分未満などを組み合わせて、合格に向けたリスクを判定しています。</span>
          </div>
          <div class="list follow-list">
            ${selectedFollow.length ? selectedFollow.map(({ user, stats, reason, level, label, score, action }) => `
              <div class="follow-card ${level}">
                <div class="avatar">${user.seatNo}</div>
                <div class="row-main">
                  <div class="follow-card-title">
                    <p class="row-title">${user.name}</p>
                    <span class="tag ${level}">${label}</span>
                  </div>
                  <p class="row-sub">${user.classId} ${user.seatNo}番 / 最終ログイン: ${formatDateTime(user.lastLoginAt)}</p>
                  <div class="follow-metrics">
                    <span>解答 ${stats.answers}問</span>
                    <span>正答率 ${pct(stats.accuracy)}</span>
                    <span>学習 ${stats.studyMinutes}分</span>
                    <span>リスク ${score}</span>
                  </div>
                  <p class="row-sub">理由: ${reason}</p>
                  <p class="row-sub">次の対応: ${action}</p>
                </div>
              </div>
            `).join("") : `<p class="empty">${teacherClassFilter}に現在フォロー対象はいません。</p>`}
          </div>
        </div>
      </section>
    </section>
  `;
}

function teacherStudents() {
  const rows = filteredStudents();
  const allStudents = state.users.filter((user) => user.role === "student");
  const followCount = allStudents.filter((user) => followRisk(user, userStats(user.id)).needsFollow).length;
  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">学生一覧</h2>
        <div class="panel-actions">
          <button class="button secondary" data-refresh-students type="button">再読み込み</button>
          <span class="tag">${rows.length}人表示</span>
        </div>
      </div>
      <div class="panel-body">
        <div class="management-toolbar">
          <div class="field">
            <label>クラス</label>
            <select data-student-filter="classId">
              ${classes.map((cls) => `<option value="${cls.id}" ${studentListFilter.classId === cls.id ? "selected" : ""}>${cls.id}</option>`).join("")}
              <option value="all" ${studentListFilter.classId === "all" ? "selected" : ""}>全クラス</option>
            </select>
          </div>
          <div class="field">
            <label>表示対象</label>
            <select data-student-filter="status">
              <option value="follow" ${studentListFilter.status === "follow" ? "selected" : ""}>フォロー対象</option>
              <option value="high" ${studentListFilter.status === "high" ? "selected" : ""}>高リスクのみ</option>
              <option value="all" ${studentListFilter.status === "all" ? "selected" : ""}>全員</option>
              <option value="steady" ${studentListFilter.status === "steady" ? "selected" : ""}>順調</option>
            </select>
          </div>
          <div class="field search-field">
            <label>検索</label>
            <input data-student-filter="query" value="${studentListFilter.query}" placeholder="氏名・表示名・メール">
          </div>
        </div>
        <div class="compact-summary">
          <span>登録済み ${allStudents.length}人</span>
          <span>フォロー対象 ${followCount}人</span>
          <span>現在表示 ${rows.length}人</span>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>状態</th><th>クラス</th><th>番号</th><th>氏名</th><th>表示名</th><th>最終ログイン</th><th>解答数</th><th>正答率</th><th>次の対応</th></tr></thead>
          <tbody>${rows.map((user) => {
            const stats = userStats(user.id);
            const risk = followRisk(user, stats);
            return `<tr>
              <td><span class="tag ${risk.level}">${risk.label}</span></td><td>${user.classId}</td><td>${user.seatNo}</td><td>${user.name}</td><td>${user.username}</td>
              <td>${formatDateTime(user.lastLoginAt)}</td><td>${stats.answers}</td><td>${pct(stats.accuracy)}</td>
              <td>${risk.needsFollow ? risk.action : "現在は大きなフォロー不要"}</td>
            </tr>`;
          }).join("") || `<tr><td colspan="9">条件に合う学生はいません。</td></tr>`}</tbody>
        </table>
      </div>
    </section>
  `;
}

function filteredStudents() {
  const query = studentListFilter.query.trim().toLowerCase();
  return state.users
    .filter((user) => user.role === "student" || String(user.role).startsWith("student"))
    .filter((user) => studentListFilter.classId === "all" || user.classId === studentListFilter.classId)
    .filter((user) => {
      const risk = followRisk(user, userStats(user.id));
      if (studentListFilter.status === "follow") return risk.needsFollow;
      if (studentListFilter.status === "high") return risk.level === "red";
      if (studentListFilter.status === "steady") return !risk.needsFollow;
      return true;
    })
    .filter((user) => {
      if (!query) return true;
      return [user.name, user.username, user.email, user.classId, String(user.seatNo)].some((value) => String(value).toLowerCase().includes(query));
    })
    .sort((a, b) => a.classId.localeCompare(b.classId) || Number(a.seatNo) - Number(b.seatNo));
}

function teacherQuestions() {
  const rows = filteredQuestions();
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  if (questionPage > totalPages) questionPage = totalPages;
  const pageRows = rows.slice((questionPage - 1) * pageSize, questionPage * pageSize);
  const years = [...new Set(state.questions.map((q) => q.year))].sort().reverse();
  const domains = [...new Set(state.questions.map((q) => q.domain))].sort();
  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">問題管理</h2>
        <div class="panel-actions">
          <button class="button secondary" data-refresh-questions type="button">再読み込み</button>
          <span class="tag">${rows.length}/${state.questions.length}問表示</span>
        </div>
      </div>
      <div class="panel-body">
        <div class="management-toolbar">
          <div class="field">
            <label>年度</label>
            <select data-question-filter="year">
              <option value="all" ${questionFilter.year === "all" ? "selected" : ""}>すべて</option>
              ${years.map((year) => `<option value="${year}" ${questionFilter.year === year ? "selected" : ""}>${year}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>分野</label>
            <select data-question-filter="domain">
              <option value="all" ${questionFilter.domain === "all" ? "selected" : ""}>すべて</option>
              ${domains.map((domain) => `<option value="${domain}" ${questionFilter.domain === domain ? "selected" : ""}>${domain}</option>`).join("")}
            </select>
          </div>
          <div class="field search-field">
            <label>検索</label>
            <input data-question-filter="query" value="${questionFilter.query}" placeholder="問題文・解説・中分類">
          </div>
        </div>
        <div class="compact-summary">
          <span>公開中 ${state.questions.filter((q) => q.status === "published").length}問</span>
          <span>年度 ${years.length}件</span>
          <span>分野 ${domains.length}件</span>
        </div>
        <details class="import-box">
          <summary>問題を一括登録</summary>
          <div class="import-body">
            <p class="hint">CSV / TSV / JSON を読み込んで、Questionsシートへまとめて登録します。PDFは文字化けする場合があるため、まず問題データを表形式に整えてから取り込む方式にしています。</p>
            <div class="field">
              <label>問題データファイル</label>
              <input type="file" id="question-import-file" accept=".csv,.tsv,.json,.txt,application/json,text/csv,text/tab-separated-values">
            </div>
            <button class="button secondary" id="question-import-button" type="button" ${importState.running ? "disabled" : ""}>${importState.running ? "登録中..." : "一括登録する"}</button>
            <div class="import-progress ${importState.running ? "active" : ""}">
              <div><span style="width:${importState.total ? Math.round((importState.done / importState.total) * 100) : 0}%"></span></div>
              <p>${importState.running ? `${importState.done}/${importState.total}問 登録中...` : "登録中はこの画面を閉じないでください。"}</p>
            </div>
            <p class="hint">列名: exam_year, question_no, domain, category, subcategory, question_text, choice_a, choice_b, choice_c, choice_d, correct_choice, explanation</p>
          </div>
        </details>
        <form class="form-grid" id="question-form">
          <input type="hidden" name="id">
          <div class="toolbar">
            <div class="field"><label>年度</label><input name="year" required placeholder="令和7年度"></div>
            <div class="field"><label>問番号</label><input name="no" type="number" required></div>
            <div class="field"><label>大分類</label><select name="domain"><option>ストラテジ</option><option>マネジメント</option><option>テクノロジ</option></select></div>
            <div class="field"><label>中分類</label><input name="category" required></div>
          </div>
          <div class="field"><label>問題文</label><textarea name="text" required></textarea></div>
          <div class="toolbar">
            <div class="field"><label>ア</label><input name="choiceA" required></div>
            <div class="field"><label>イ</label><input name="choiceB" required></div>
            <div class="field"><label>ウ</label><input name="choiceC" required></div>
            <div class="field"><label>エ</label><input name="choiceD" required></div>
            <div class="field"><label>正解</label><select name="answer"><option value="a">ア</option><option value="b">イ</option><option value="c">ウ</option><option value="d">エ</option></select></div>
          </div>
          <div class="field"><label>解説</label><textarea name="explanation" required></textarea></div>
          <button class="button">問題を追加</button>
        </form>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>年度</th><th>問</th><th>大分類</th><th>中分類</th><th>問題文</th><th>操作</th></tr></thead>
          <tbody>${pageRows.map((q) => `<tr>
            <td>${q.year}</td><td>${q.no}</td><td>${q.domain}</td><td>${q.category}</td><td>${q.text.slice(0, 34)}...</td>
            <td><button class="button secondary" data-edit-question="${q.id}">編集</button></td>
          </tr>`).join("") || `<tr><td colspan="6">条件に合う問題はありません。</td></tr>`}</tbody>
        </table>
      </div>
      <div class="pagination">
        <button class="button secondary" data-question-page="prev" ${questionPage <= 1 ? "disabled" : ""}>前へ</button>
        <span>${questionPage} / ${totalPages}</span>
        <button class="button secondary" data-question-page="next" ${questionPage >= totalPages ? "disabled" : ""}>次へ</button>
      </div>
    </section>
  `;
}

function filteredQuestions() {
  const query = questionFilter.query.trim().toLowerCase();
  return state.questions
    .filter((q) => questionFilter.year === "all" || q.year === questionFilter.year)
    .filter((q) => questionFilter.domain === "all" || q.domain === questionFilter.domain)
    .filter((q) => {
      if (!query) return true;
      return [q.year, q.domain, q.category, q.text, q.explanation].some((value) => String(value).toLowerCase().includes(query));
    })
    .sort((a, b) => b.year.localeCompare(a.year) || Number(a.no) - Number(b.no));
}

function teacherRanking() {
  const rows = rankingRows();
  return `
    <section class="panel">
      <div class="panel-header"><h2 class="panel-title">ランキング確認</h2></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>順位</th><th>表示名</th><th>氏名</th><th>クラス</th><th>番号</th><th>ポイント</th><th>解答数</th><th>正答率</th></tr></thead>
          <tbody>${rows.map((row, i) => `<tr>
            <td>${i + 1}</td><td>${row.user.username}</td><td>${row.user.name}</td><td>${row.user.classId}</td><td>${row.user.seatNo}</td>
            <td>${row.stats.points}</td><td>${row.stats.answers}</td><td>${pct(row.stats.accuracy)}</td>
          </tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function bindGlobal() {
  document.querySelector("[data-action='logout']")?.addEventListener("click", async () => {
    const backend = await window.supabaseBackendReady;
    if (backend?.enabled) {
      try {
        await backend.signOut();
      } catch (error) {
        console.warn("Supabase sign out failed", error);
      }
    }
    currentUserId = "";
    currentView = "home";
    quiz = null;
    clearPersistedLogin();
    render();
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      quiz = null;
      render();
    });
  });
}

function bindStudent() {
  document.querySelector("[data-close-student-guide]")?.addEventListener("click", () => {
    localStorage.setItem(studentGuideStorageKey(), "1");
    document.querySelector("[data-student-guide]")?.remove();
  });
  document.querySelector("[data-open-student-guide]")?.addEventListener("click", () => {
    localStorage.removeItem(studentGuideStorageKey());
    render();
  });
  document.querySelector("[data-past-report-file]")?.addEventListener("change", importPastReportFile);
  document.querySelectorAll("[data-start-mode]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.startMode, button.dataset.category, button.dataset.filterValue));
  });
  document.querySelectorAll("[data-practice-picker]").forEach((button) => {
    button.addEventListener("click", () => {
      practicePicker = button.dataset.practicePicker;
      render();
    });
  });
  document.querySelector("[data-nudge-close]")?.addEventListener("click", closeStudentNudge);
  document.querySelector("[data-nudge-start]")?.addEventListener("click", () => {
    closeStudentNudge(false);
    const rec = getRecommendation(currentUser().id);
    startQuiz(rec.mode, rec.category || "");
  });
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.choice));
  });
  document.querySelector("[data-next-question]")?.addEventListener("click", nextQuestion);
  document.querySelector("[data-end-quiz]")?.addEventListener("click", finishQuiz);
  document.querySelector("#profile-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = currentUser();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    user.username = data.username.trim();
    user.iconId = data.iconId;
    user.rankingVisible = Boolean(data.rankingVisible);
    saveState();
    render();
  });
}

async function importPastReportFile(event) {
  const file = event.target.files?.[0];
  const user = currentUser();
  if (!file || !user) return;

  try {
    showReportImportOverlay(0, 0, "CSVファイルを読み込んでいます。");
    await new Promise((resolve) => setTimeout(resolve, 50));
    reportImportState = { running: true, total: 0, done: 0, label: "CSVファイルを読み込んでいます。" };
    render();
    const text = await readCsvText(file);
    const rows = parseCsvRows(text);
    const results = rows.map((row, index) => pastReportRowToResult(row, user.id, index)).filter(Boolean);
    if (!results.length) throw new Error("読み取れる学習データがありません。過去問道場のCSVか確認してください。");
    const uploadId = `UP_${user.id}_${Date.now()}`;
    const uploadedAt = new Date().toISOString();
    results.forEach((result) => {
      result.uploadId = uploadId;
      result.uploadedAt = uploadedAt;
    });

    reportImportState = { running: true, total: results.length, done: 0, label: "学習データを保存しています。" };
    showReportImportOverlay(results.length, 0, "学習データを保存しています。");
    render();

    if (USE_REMOTE_API) {
      const saved = [];
      try {
        for (let i = 0; i < results.length; i += 10) {
          const chunk = results.slice(i, i + 10).map(localPastResultToRemote);
          const result = await apiRequest("savePastResults", { user_id: user.id, results: chunk });
          saved.push(...(result.results || chunk).map(remotePastResultToLocal));
          reportImportState.done = Math.min(results.length, i + chunk.length);
          showReportImportOverlay(results.length, reportImportState.done, "学習データを保存しています。");
          render();
        }
      } catch (error) {
        console.warn("savePastResults failed; using local results", error);
        reportImportState.done = results.length;
        reportImportState.label = "画面内に取り込みました。スプレッドシート保存は未確認です。";
        showReportImportOverlay(results.length, results.length, "画面内に取り込みました。分析を更新しています。");
        render();
      }
      mergePastResults(saved.length ? saved : results);
    } else {
      mergePastResults(results);
    }

    reportImportState = { running: false, total: results.length, done: results.length, label: "取り込みが完了しました。" };
    showReportImportOverlay(results.length, results.length, "取り込みが完了しました。");
    saveState();
    hideReportImportOverlay();
    alert(`${results.length}問分の学習データを取り込みました。`);
    render();
  } catch (error) {
    hideReportImportOverlay();
    alert(`CSVの取り込みに失敗しました。\n${error.message}`);
  } finally {
    event.target.value = "";
  }
}

async function readCsvText(file) {
  const buffer = await file.arrayBuffer();
  const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
  if (utf8.includes("正誤") && utf8.includes("分野名")) return utf8;
  return new TextDecoder("shift_jis").decode(buffer);
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    if (row.some((value) => value.trim() !== "")) rows.push(row);
  }

  const headers = rows.shift()?.map((value) => value.trim()) || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
}

function pastReportRowToResult(row, userId, index) {
  const source = parseHyperlink(row["出典"] || "");
  const isCorrect = String(row["正誤"] || "").trim() === "○";
  const domain = row["分野名"] || "";
  const studiedAt = normalizeStudyDate(row["学習日"]);
  if (!domain || !row["正誤"]) return null;
  const no = Number(row["No."] || index + 1);
  const sourceKey = source.url || source.label || "past-question";
  return {
    id: `${userId}_${sourceKey}_${no}_${studiedAt}`.replace(/[^\w一-龠ぁ-んァ-ヶー]/g, "_"),
    userId,
    uploadId: `UP${Date.now()}`,
    no,
    isCorrect,
    domain,
    majorCategory: row["大分類"] || "",
    middleCategory: row["中分類"] || "",
    sourceLabel: source.label,
    sourceUrl: source.url,
    studiedAt,
    uploadedAt: new Date().toISOString()
  };
}

function pastResultDuplicateKey(result) {
  return [
    result.userId || "",
    result.sourceUrl || result.sourceLabel || "",
    Number(result.no || 0),
    result.studiedAt || "",
    result.domain || "",
    result.majorCategory || "",
    result.middleCategory || ""
  ].join("|");
}

function parseHyperlink(value) {
  const match = String(value || "").match(/HYPERLINK\("([^"]+)","([^"]+)"\)/);
  if (match) return { url: match[1], label: match[2] };
  return { url: "", label: String(value || "") };
}

function normalizeStudyDate(value) {
  const text = String(value || "").trim();
  const date = new Date(text.replaceAll("/", "-"));
  return Number.isNaN(date.getTime()) ? text : date.toISOString();
}

function localPastResultToRemote(row) {
  return {
    result_id: row.id,
    user_id: row.userId,
    upload_id: row.uploadId,
    no: row.no,
    is_correct: row.isCorrect,
    domain: row.domain,
    major_category: row.majorCategory,
    middle_category: row.middleCategory,
    source_label: row.sourceLabel,
    source_url: row.sourceUrl,
    studied_at: row.studiedAt,
    uploaded_at: row.uploadedAt
  };
}

function mergePastResults(results) {
  state.pastResults ||= [];
  results.forEach((result) => {
    const index = state.pastResults.findIndex((item) => item.id === result.id);
    if (index >= 0) state.pastResults[index] = result;
    else state.pastResults.push(result);
  });
}

function closeStudentNudge(rerender = true) {
  const user = currentUser();
  if (user) sessionStorage.setItem(`studentNudgeSeen:${user.id}`, "1");
  if (rerender) render();
}

function bindTeacher() {
  document.querySelectorAll("[data-class-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      teacherClassFilter = button.dataset.classFilter;
      render();
    });
  });

  document.querySelectorAll("[data-student-filter]").forEach((input) => {
    input.addEventListener("input", () => {
      studentListFilter[input.dataset.studentFilter] = input.value;
      if (input.tagName !== "INPUT") render();
    });
    input.addEventListener("change", () => {
      studentListFilter[input.dataset.studentFilter] = input.value;
      render();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        studentListFilter[input.dataset.studentFilter] = input.value;
        render();
      }
    });
  });

  document.querySelector("[data-refresh-students]")?.addEventListener("click", async () => {
    try {
      await loadTeacherData(true);
      render();
    } catch (error) {
      alert(`学生一覧の再読み込みに失敗しました。\n${error.message}`);
    }
  });

  document.querySelectorAll("[data-question-filter]").forEach((input) => {
    input.addEventListener("input", () => {
      questionFilter[input.dataset.questionFilter] = input.value;
      questionPage = 1;
      if (input.tagName !== "INPUT") render();
    });
    input.addEventListener("change", () => {
      questionFilter[input.dataset.questionFilter] = input.value;
      questionPage = 1;
      render();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        questionFilter[input.dataset.questionFilter] = input.value;
        questionPage = 1;
        render();
      }
    });
  });

  document.querySelector("[data-refresh-questions]")?.addEventListener("click", async () => {
    try {
      await loadTeacherQuestions(true);
      questionPage = 1;
      render();
    } catch (error) {
      alert(`問題一覧の再読み込みに失敗しました。\n${error.message}`);
    }
  });

  document.querySelectorAll("[data-question-page]").forEach((button) => {
    button.addEventListener("click", () => {
      questionPage += button.dataset.questionPage === "next" ? 1 : -1;
      render();
    });
  });

  const form = document.querySelector("#question-form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const existing = state.questions.find((q) => q.id === data.id);
      const payload = {
        id: data.id || crypto.randomUUID(),
        year: data.year,
        no: Number(data.no),
        domain: data.domain,
        category: data.category,
        text: data.text,
        choices: { a: data.choiceA, b: data.choiceB, c: data.choiceC, d: data.choiceD },
        answer: data.answer,
        explanation: data.explanation,
        difficulty: "normal",
        status: "published"
      };
      try {
        if (USE_REMOTE_API) {
          const result = await apiRequest("saveQuestion", localQuestionToRemote(payload));
          const saved = remoteQuestionToLocal(result.question);
          if (existing) Object.assign(existing, saved);
          else state.questions.push(saved);
        } else if (existing) Object.assign(existing, payload);
        else state.questions.push(payload);
        saveState();
        render();
      } catch (error) {
        alert(`問題の保存に失敗しました。\n${error.message}`);
      }
    });
  }
  document.querySelectorAll("[data-edit-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const q = state.questions.find((item) => item.id === button.dataset.editQuestion);
      if (!q || !form) return;
      form.elements.id.value = q.id;
      form.elements.year.value = q.year;
      form.elements.no.value = q.no;
      form.elements.domain.value = q.domain;
      form.elements.category.value = q.category;
      form.elements.text.value = q.text;
      form.elements.choiceA.value = q.choices.a;
      form.elements.choiceB.value = q.choices.b;
      form.elements.choiceC.value = q.choices.c;
      form.elements.choiceD.value = q.choices.d;
      form.elements.answer.value = q.answer;
      form.elements.explanation.value = q.explanation;
      form.querySelector("button").textContent = "問題を更新";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelector("#question-import-button")?.addEventListener("click", importQuestionFile);
}

async function importQuestionFile() {
  if (importState.running) return;
  const input = document.querySelector("#question-import-file");
  const file = input?.files?.[0];
  if (!file) {
    alert("一括登録するファイルを選んでください。");
    return;
  }

  try {
    const text = await file.text();
    const rows = parseQuestionImport(text, file.name);
    if (!rows.length) throw new Error("登録できる問題が見つかりません。");

    importState = { running: true, total: rows.length, done: 0 };
    render();

    let savedCount = 0;
    for (const row of rows) {
      const question = importRowToQuestion(row);
      if (USE_REMOTE_API) {
        const result = await apiRequest("saveQuestion", localQuestionToRemote(question));
        mergeQuestions([remoteQuestionToLocal(result.question)]);
      } else {
        mergeQuestions([question]);
      }
      savedCount += 1;
      importState.done = savedCount;
      if (savedCount % 5 === 0 || savedCount === rows.length) render();
    }

    importState = { running: false, total: rows.length, done: rows.length };
    await loadTeacherQuestions(true);
    alert(`${savedCount}問を登録しました。`);
    render();
  } catch (error) {
    importState = { running: false, total: 0, done: 0 };
    render();
    alert(`一括登録に失敗しました。\n${error.message}`);
  }
}

function parseQuestionImport(text, filename) {
  if (filename.toLowerCase().endsWith(".json")) {
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : data.questions || [];
  }

  const delimiter = filename.toLowerCase().endsWith(".tsv") ? "\t" : ",";
  const table = parseDelimited(text, delimiter);
  const headers = table.shift()?.map((header) => header.trim()) || [];
  return table
    .filter((row) => row.some((cell) => cell.trim()))
    .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])));
}

function parseDelimited(text, delimiter) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows;
}

function importRowToQuestion(row) {
  const required = ["exam_year", "question_no", "domain", "category", "question_text", "choice_a", "choice_b", "choice_c", "choice_d", "correct_choice", "explanation"];
  const missing = required.filter((key) => !String(row[key] || "").trim());
  if (missing.length) throw new Error(`必須列が不足しています: ${missing.join(", ")}`);

  return {
    id: row.question_id || makeQuestionId(row.exam_year, row.question_no),
    year: row.exam_year,
    no: Number(row.question_no),
    domain: row.domain,
    category: row.category,
    subcategory: row.subcategory || "",
    text: row.question_text,
    choices: {
      a: row.choice_a,
      b: row.choice_b,
      c: row.choice_c,
      d: row.choice_d
    },
    answer: String(row.correct_choice).trim().toLowerCase(),
    explanation: row.explanation,
    difficulty: row.difficulty || "normal",
    status: row.status || "published",
    source: row.source || "import"
  };
}

function makeQuestionId(year, questionNo) {
  const normalizedYear = String(year || "year")
    .replace(/令和/g, "r")
    .replace(/年度/g, "")
    .replace(/[^\w一-龥ぁ-んァ-ン]/g, "_");
  return `${normalizedYear}_${String(questionNo).padStart(3, "0")}`;
}

function renderStudent() {
  if (!["home", "upload", "profile"].includes(currentView)) currentView = "home";
  loadStudentMessages();
  const nav = `
    <div class="nav-tabs student-analysis-tabs">
      ${tab("home", "分析")}
      ${tab("upload", "CSVアップロード")}
      ${tab("profile", "プロフィール")}
    </div>
  `;
  const content = currentView === "upload" ? studentUploadGuide()
    : currentView === "profile" ? studentProfile()
    : studentHome();
  layout(nav + content + studentFirstGuide());
  bindStudent();
}

function studentHome() {
  const user = currentUser();
  const report = pastResultSummary(user.id);
  const plan = buildReportPlan(user.id, report);
  return `
    <section class="student-home analysis-home">
      ${studentMessagePanel(user.id)}
      <div class="mission-hero analysis-hero">
        <div class="mission-copy">
          <span class="tag">学習分析</span>
          <h1>${report.total ? "次に復習する場所が分かります" : "CSVをアップロードすると分析できます"}</h1>
          <p>${report.total ? "過去問道場の結果から、苦手分野・合格ライン・復習する問題を整理しました。" : "過去問道場で問題を解いたあと、CSVをこのシステムにアップロードしてください。"}</p>
          <div class="mission-stats">
            <span>${report.total}問取り込み済み</span>
            <span>正答率 ${pct(report.accuracy)}</span>
            <span>${report.latestUpload ? `最終 ${formatDateTime(report.latestUpload)}` : "CSV未登録"}</span>
          </div>
        </div>
        <div class="mission-action">
          <div class="focus-orb">${report.total ? pct(report.accuracy) : "CSV"}</div>
          <label class="button file-button">
            CSVを選ぶ
            <input type="file" data-past-report-file accept=".csv,text/csv">
          </label>
        </div>
      </div>

      ${reportImportProgress()}

      <div class="analysis-grid">
        <section class="panel analysis-main-panel">
          <div class="panel-header"><h2 class="panel-title">次にやること</h2></div>
          <div class="panel-body">
            <p class="next-main">${plan.title}</p>
            <p class="hint">${plan.reason}</p>
            ${plan.url ? `<a class="button full" href="${escapeHtml(plan.url)}" target="_blank" rel="noopener">過去問道場でこの問題を開く</a>` : `<button class="button full" data-view="upload">CSVをアップロードする</button>`}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header"><h2 class="panel-title">合格ライン確認</h2></div>
          <div class="panel-body">
            <div class="domain-meter">
              ${report.domains.map((domain) => `
                <div class="${domain.total && domain.accuracy < 30 ? "needs-work" : ""}">
                  <span>${domain.domain}</span>
                  <strong>${domain.total ? pct(domain.accuracy) : "-"}</strong>
                  <small>${domain.correct}/${domain.total}問</small>
                </div>
              `).join("")}
            </div>
            <p class="hint">目安は全体60%以上、各分野30%以上です。</p>
          </div>
        </section>

        <section class="panel">
          <div class="panel-header"><h2 class="panel-title">苦手トップ3</h2></div>
          <div class="panel-body">
            ${report.weak.length ? report.weak.map((item) => `
              <div class="mini-row">
                <strong>${escapeHtml(item.name)}</strong>
                <span>${escapeHtml(item.domain || "")} / 正解 ${item.correct}/${item.total}問 / ${pct(item.accuracy)}</span>
              </div>
            `).join("") : `<p class="hint">CSVをアップロードすると、苦手分野が表示されます。</p>`}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header"><h2 class="panel-title">間違えた問題</h2></div>
          <div class="panel-body wrong-list">
            ${wrongProblemRows(user.id).slice(0, 6).map((item) => `
              <a class="wrong-item" href="${escapeHtml(item.sourceUrl || "https://www.itpassportsiken.com/")}" target="_blank" rel="noopener">
                <strong>${escapeHtml(item.sourceLabel || `${item.middleCategory || item.domain}`)}</strong>
                <span>${escapeHtml(item.domain)} / ${escapeHtml(item.middleCategory || item.majorCategory || "")}</span>
              </a>
            `).join("") || `<p class="hint">間違えた問題はまだありません。</p>`}
          </div>
        </section>
      </div>
    </section>
  `;
}

function studentUploadGuide() {
  return `
    <section class="student-page">
      <div class="panel upload-guide-panel">
        <div class="panel-header"><h2 class="panel-title">CSVアップロード</h2></div>
        <div class="panel-body">
          <div class="upload-steps">
            <div><strong>1</strong><span>過去問道場で問題を解く</span></div>
            <div><strong>2</strong><span>学習履歴CSVをダウンロード</span></div>
            <div><strong>3</strong><span>この画面でCSVを選ぶ</span></div>
          </div>
          <label class="button file-button upload-main-button">
            CSVを選んで分析する
            <input type="file" data-past-report-file accept=".csv,text/csv">
          </label>
          ${reportImportProgress()}
          <p class="hint">CSVを選ぶだけで、苦手分野・正答率・復習する問題が自動で更新されます。</p>
        </div>
      </div>
    </section>
  `;
}

function buildReportPlan(userId, report) {
  if (!report.total) {
    return { title: "まずCSVをアップロード", reason: "過去問道場で解いた結果を取り込むと、苦手分野と復習する問題が表示されます。", url: "" };
  }
  const weakDomain = report.domains.find((domain) => domain.total >= 3 && domain.accuracy < 30);
  if (weakDomain) {
    const url = firstWrongLink(userId, weakDomain.domain);
    return { title: `${weakDomain.domain}を優先`, reason: `${weakDomain.domain}が30%未満です。分野別基準に届いていないため、まずこの分野の間違えた問題を解き直しましょう。`, url };
  }
  const weak = report.weak[0];
  if (weak) {
    const url = firstWrongLink(userId, weak.name);
    return { title: `${weak.name}を復習`, reason: `正答率が${pct(weak.accuracy)}です。似た内容でつまずきやすいので、間違えた問題から復習しましょう。`, url };
  }
  return { title: "別年度の問題を追加", reason: "大きな弱点は見えていません。別年度のCSVも追加して、分析の精度を上げましょう。", url: "" };
}

function wrongProblemRows(userId) {
  return userPastResults(userId)
    .filter((item) => !item.isCorrect)
    .sort((a, b) => String(b.studiedAt).localeCompare(String(a.studiedAt)));
}

function profileAvatarHtml(user) {
  if (user.avatarImage) {
    return `<img src="${user.avatarImage}" alt="${escapeHtml(user.username)}のプロフィール画像">`;
  }
  return `<span>${escapeHtml(iconLabel(user.iconId).slice(0, 1))}</span>`;
}

function studentProfile() {
  const user = currentUser();
  const classOptions = classes.map((item) =>
    `<option value="${item.id}" ${user.classId === item.id ? "selected" : ""}>${item.id}</option>`
  ).join("");
  const selectedClass = classes.find((item) => item.id === user.classId) || classes[0];
  const seatNumberOptions = Array.from({ length: selectedClass.maxSeat }, (_, index) => {
    const seatNo = index + 1;
    return `<option value="${seatNo}" ${Number(user.seatNo) === seatNo ? "selected" : ""}>${seatNo}番</option>`;
  }).join("");
  return `
    <section class="student-page profile-page">
      <div class="profile-hero">
        <label class="profile-avatar profile-avatar-edit" title="プロフィール画像を変更">
          ${profileAvatarHtml(user)}
          <input type="file" data-profile-image accept="image/jpeg,image/png,image/webp">
          <span class="profile-camera" aria-hidden="true">+</span>
        </label>
        <div>
          <h1>${escapeHtml(user.username)}</h1>
          <p>${escapeHtml(user.classId)} ${escapeHtml(user.seatNo)}番</p>
          <span class="hint">画像を変更するにはアイコンを押してください。</span>
        </div>
      </div>

      <div class="profile-grid">
        <section class="panel quiet-panel">
          <div class="panel-header"><h2 class="panel-title">登録内容の変更</h2></div>
          <div class="panel-body">
            <form class="form-grid" id="profile-form">
              <div class="field">
                <label>氏名</label>
                <input name="name" value="${escapeHtml(user.name)}" required>
              </div>
              <div class="field">
                <label>クラス</label>
                <select name="classId">${classOptions}</select>
              </div>
              <div class="field">
                <label>出席番号</label>
                <select name="seatNo">${seatNumberOptions}</select>
              </div>
              <div class="field">
                <label>表示名</label>
                <input name="username" value="${escapeHtml(user.username)}" required>
              </div>
              <div class="field">
                <label>標準アイコン</label>
                <select name="iconId">${icons.map((icon) => `<option value="${icon.id}" ${user.iconId === icon.id ? "selected" : ""}>${icon.label}</option>`).join("")}</select>
              </div>
              <div class="field">
                <label>学校メール</label>
                <input value="${escapeHtml(user.email)}" readonly aria-readonly="true">
                <span class="hint">ログインに使用するため、ここでは変更できません。</span>
              </div>
              ${user.avatarImage ? `<button class="button secondary" type="button" data-remove-profile-image>設定した画像を取り消す</button>` : ""}
              <button class="button" type="submit">変更を保存</button>
            </form>
          </div>
        </section>
        <section class="panel quiet-panel">
          <div class="panel-header"><h2 class="panel-title">パスワード変更</h2></div>
          <div class="panel-body">
            <form class="form-grid" id="password-change-form">
              <div class="field">
                <label>新しいパスワード</label>
                <div class="password-control">
                  <input name="newPassword" type="password" minlength="8" autocomplete="new-password" required>
                  <button class="password-toggle" type="button" data-password-toggle="newPassword">表示</button>
                </div>
                <span class="hint">8文字以上で設定してください。</span>
              </div>
              <div class="field">
                <label>新しいパスワード（確認）</label>
                <div class="password-control">
                  <input name="confirmPassword" type="password" minlength="8" autocomplete="new-password" required>
                  <button class="password-toggle" type="button" data-password-toggle="confirmPassword">表示</button>
                </div>
              </div>
              <button class="button" type="submit">パスワードを変更</button>
            </form>
          </div>
        </section>
        <section class="panel quiet-panel">
          <div class="panel-header"><h2 class="panel-title">使い方</h2></div>
          <div class="panel-body">
            <p class="hint">CSVアップロードから分析確認までの流れを、いつでも見直せます。</p>
            <button class="button secondary" type="button" data-open-student-guide>使い方を見る</button>
          </div>
        </section>
      </div>
    </section>
  `;
}

async function resizeProfileImage(file) {
  const image = await new Promise((resolve, reject) => {
    const element = new Image();
    const url = URL.createObjectURL(file);
    element.onload = () => {
      URL.revokeObjectURL(url);
      resolve(element);
    };
    element.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image load failed"));
    };
    element.src = url;
  });
  const size = 192;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const scale = Math.max(size / image.width, size / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
  return canvas.toDataURL("image/jpeg", 0.78);
}

function bindStudent() {
  document.querySelector("[data-close-student-guide]")?.addEventListener("click", () => {
    localStorage.setItem(studentGuideStorageKey(), "1");
    document.querySelector("[data-student-guide]")?.remove();
  });
  document.querySelector("[data-open-student-guide]")?.addEventListener("click", () => {
    localStorage.removeItem(studentGuideStorageKey());
    render();
  });
  document.querySelectorAll("[data-past-report-file]").forEach((input) => {
    input.addEventListener("change", importPastReportFile);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      render();
    });
  });
  document.querySelector("[data-profile-image]")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("画像ファイルを選択してください。");
      return;
    }
    try {
      const user = currentUser();
      user.avatarImage = await resizeProfileImage(file);
      saveState();
      render();
    } catch (error) {
      alert("画像を設定できませんでした。別の画像を選択してください。");
    }
  });
  document.querySelector("[data-remove-profile-image]")?.addEventListener("click", () => {
    const user = currentUser();
    delete user.avatarImage;
    saveState();
    render();
  });
  const profileForm = document.querySelector("#profile-form");
  profileForm?.classId?.addEventListener("change", () => {
    profileForm.seatNo.innerHTML = seatOptions(profileForm.classId.value);
  });
  profileForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = currentUser();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const button = event.currentTarget.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "保存中...";
    try {
      if (USE_REMOTE_API) {
        const result = await apiRequest("updateProfile", {
          user_id: user.id,
          name: data.name.trim(),
          class_id: data.classId,
          seat_no: Number(data.seatNo),
          display_name: data.username.trim(),
          icon_id: data.iconId
        });
        upsertLocalUser(result.user);
      } else {
        user.name = data.name.trim();
        user.classId = data.classId;
        user.seatNo = Number(data.seatNo);
        user.username = data.username.trim();
        user.iconId = data.iconId;
        saveState();
      }
      alert("登録内容を変更しました。");
      render();
    } catch (error) {
      alert(error.message);
      button.disabled = false;
      button.textContent = "変更を保存";
    }
  });
  document.querySelectorAll("#password-change-form [data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.querySelector(`#password-change-form [name="${button.dataset.passwordToggle}"]`);
      if (!input) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.textContent = show ? "非表示" : "表示";
    });
  });
  document.querySelector("#password-change-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.newPassword.length < 8) {
      alert("パスワードは8文字以上で設定してください。");
      return;
    }
    if (data.newPassword !== data.confirmPassword) {
      alert("確認用パスワードが一致していません。");
      return;
    }
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "変更中...";
    try {
      const backend = await window.supabaseBackendReady;
      if (!backend?.enabled || !backend.updatePassword) {
        throw new Error("パスワード変更機能に接続できません。");
      }
      await backend.updatePassword(data.newPassword);
      form.reset();
      alert("パスワードを変更しました。次回から新しいパスワードでログインしてください。");
      render();
    } catch (error) {
      alert(error.message);
      button.disabled = false;
      button.textContent = "パスワードを変更";
    }
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function importPastReportFile(event) {
  const file = event.target.files?.[0];
  const user = currentUser();
  if (!file || !user) return;

  try {
    reportImportState = { running: true, total: 1, done: 0, label: "CSVファイルを読み込んでいます。" };
    showReportImportOverlay(1, 0, "CSVファイルを読み込んでいます。");
    await sleep(120);

    const text = await readCsvText(file);
    const rows = parseCsvRows(text);
    const parsedResults = rows.map((row, index) => pastReportRowToResult(row, user.id, index)).filter(Boolean);
    if (!parsedResults.length) throw new Error("読み取れる学習データがありません。過去問道場のCSVか確認してください。");
    let existingResults = userPastResults(user.id);
    if (USE_REMOTE_API) {
      const existing = await apiRequest("getPastResults", { user_id: user.id });
      existingResults = (existing.results || []).map(remotePastResultToLocal);
      mergePastResults(existingResults);
    }
    const existingKeys = new Set(existingResults.map(pastResultDuplicateKey));
    const csvKeys = new Set();
    const results = parsedResults.filter((result) => {
      const key = pastResultDuplicateKey(result);
      if (existingKeys.has(key) || csvKeys.has(key)) return false;
      csvKeys.add(key);
      return true;
    });
    const duplicateCount = parsedResults.length - results.length;
    if (!results.length) {
      hideReportImportOverlay();
      alert(`新しく追加する学習データはありませんでした。\n${duplicateCount}件はすでに取り込み済みです。`);
      return;
    }
    const uploadId = `UP_${user.id}_${Date.now()}`;
    const uploadedAt = new Date().toISOString();
    results.forEach((result) => {
      result.uploadId = uploadId;
      result.uploadedAt = uploadedAt;
    });

    reportImportState = { running: true, total: results.length, done: 0, label: "学習データを保存しています。" };
    showReportImportOverlay(results.length, 0, "学習データを保存しています。");

    if (USE_REMOTE_API) {
      const saved = [];
      try {
        for (let i = 0; i < results.length; i += 1) {
          const row = localPastResultToRemote(results[i]);
          const result = await apiRequest("savePastResults", { user_id: user.id, results: [row] });
          saved.push(...(result.results || [row]).map(remotePastResultToLocal));
          reportImportState.done = i + 1;
          showReportImportOverlay(results.length, reportImportState.done, "学習データを保存しています。");
        }
      } catch (error) {
        console.warn("savePastResults failed; using local results", error);
      }
      mergePastResults(saved.length ? saved : results);
    } else {
      mergePastResults(results);
    }

    reportImportState = { running: false, total: results.length, done: results.length, label: "取り込みが完了しました。" };
    showReportImportOverlay(results.length, results.length, "取り込みが完了しました。分析画面を更新しています。");
    saveState();
    render();
    await sleep(700);
    hideReportImportOverlay();
    alert(`${results.length}件を新しく取り込みました。${duplicateCount ? `\n重複していた${duplicateCount}件は追加していません。` : ""}`);
  } catch (error) {
    hideReportImportOverlay();
    alert(`CSVの取り込みに失敗しました。\n${error.message}`);
  } finally {
    event.target.value = "";
  }
}

function domainStats(userId) {
  const domainNames = ["ストラテジ系", "マネジメント系", "テクノロジ系"];
  const result = Object.fromEntries(domainNames.map((domain) => [domain, { domain, total: 0, correct: 0, accuracy: 0 }]));
  userPastResults(userId).forEach((item) => {
    const domain = normalizeDomainName(item.domain);
    if (!result[domain]) return;
    result[domain].total += 1;
    if (item.isCorrect) result[domain].correct += 1;
  });
  Object.values(result).forEach((item) => {
    item.accuracy = item.total ? (item.correct / item.total) * 100 : 0;
  });
  return Object.values(result);
}

let registerDraft = {};
let registerSubmitting = false;

function authForm(active, message, type = "error") {
  const messageHtml = message ? `<p class="${type === "success" ? "success" : "error"}">${escapeHtml(message)}</p>` : "";
  if (active === "register") {
    const draft = registerDraft;
    const selectedClass = draft.classId || "A1A";
    return `
      <form class="form-grid" id="register-form">
        ${messageHtml}
        <div class="field"><label>氏名</label><input name="name" required value="${escapeHtml(draft.name)}" placeholder="山田 太郎"></div>
        <div class="field"><label>学校メール</label><input name="email" type="email" required value="${escapeHtml(draft.email)}" placeholder="vwb0000@sankogakuen.jp"></div>
        <div class="field"><label>パスワード</label>${passwordInput("password", { required: true, minlength: 8, value: draft.password, placeholder: "8文字以上" })}</div>
        <div class="field"><label>クラス</label><select name="classId">${classes.map((c) => `<option value="${c.id}" ${selectedClass === c.id ? "selected" : ""}>${c.id}</option>`).join("")}</select></div>
        <div class="field"><label>出席番号</label><select name="seatNo">${seatOptions(selectedClass).replace(`value="${draft.seatNo}"`, `value="${draft.seatNo}" selected`)}</select></div>
        <div class="field"><label>表示名</label><input name="username" required value="${escapeHtml(draft.username)}" placeholder="ねこまる"></div>
        <div class="field"><label>アイコン</label><select name="iconId">${icons.map((icon) => `<option value="${icon.id}" ${draft.iconId === icon.id ? "selected" : ""}>${icon.label}</option>`).join("")}</select></div>
        <button class="button full" type="submit" ${registerSubmitting ? "disabled" : ""}>${registerSubmitting ? "登録しています..." : "登録して始める"}</button>
        <p class="hint">学校メールは vwb で始まり @sankogakuen.jp で終わる必要があります。</p>
      </form>
    `;
  }
  if (active === "reset") {
    return `
      <form class="form-grid" id="reset-form">
        ${messageHtml}
        <div class="field"><label>学校メール</label><input name="email" required placeholder="vwb0000@sankogakuen.jp"></div>
        <div class="field"><label>新しいパスワード</label>${passwordInput("password", { required: true, minlength: 8 })}</div>
        <button class="button full">パスワードを再設定</button>
      </form>
    `;
  }
  return `
    <form class="form-grid" id="login-form">
      ${messageHtml}
      <div class="field"><label>メール</label><input name="email" required></div>
      <div class="field"><label>パスワード</label>${passwordInput("password", { required: true })}</div>
      <button class="button full">ログイン</button>
    </form>
  `;
}

function bindAuth(active) {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.textContent = showing ? "表示" : "隠す";
      button.setAttribute("aria-label", showing ? "パスワードを表示" : "パスワードを隠す");
    });
  });
  if (active === "register") {
    const form = document.querySelector("#register-form");
    const saveDraft = () => {
      registerDraft = Object.fromEntries(new FormData(form));
    };
    form.addEventListener("input", saveDraft);
    form.addEventListener("change", saveDraft);
    form.classId.addEventListener("change", () => {
      saveDraft();
      form.seatNo.innerHTML = seatOptions(form.classId.value);
      registerDraft.seatNo = form.seatNo.value;
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (registerSubmitting) return;
      saveDraft();
      await registerStudent({ ...registerDraft });
    });
  }
  if (active === "login") {
    document.querySelector("#login-form")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      login(data.email, data.password);
    });
  }
  if (active === "reset") {
    document.querySelector("#reset-form")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      resetPassword(data.email, data.password);
    });
  }
}

function passwordInput(name, options = {}) {
  const id = `${name}-${Math.random().toString(36).slice(2, 8)}`;
  const attributes = [
    options.required ? "required" : "",
    options.minlength ? `minlength="${options.minlength}"` : "",
    options.placeholder ? `placeholder="${escapeHtml(options.placeholder)}"` : "",
    `value="${escapeHtml(options.value || "")}"`
  ].filter(Boolean).join(" ");
  return `
    <div class="password-control">
      <input id="${id}" name="${name}" type="password" autocomplete="${name === "password" ? "current-password" : "off"}" ${attributes}>
      <button type="button" class="password-toggle" data-password-toggle="${id}" aria-label="パスワードを表示">表示</button>
    </div>
  `;
}

async function registerStudent(data) {
  const email = String(data.email || "").trim().toLowerCase();
  registerDraft = { ...data, email };
  if (!isStudentEmail(email)) {
    renderAuth("register", "学校メールの形式を確認してください。入力内容は保持されています。");
    return;
  }
  if (state.auth.some((item) => String(item.email).toLowerCase() === email) ||
      state.users.some((user) => String(user.email).toLowerCase() === email)) {
    renderAuth("register", "このメールアドレスはすでに登録されています。ログインまたは再設定を利用してください。");
    return;
  }

  registerSubmitting = true;
  renderAuth("register");
  try {
    if (USE_REMOTE_API) {
      const result = await apiRequest("registerStudent", {
        name: String(data.name || "").trim(),
        email,
        password: data.password,
        class_id: data.classId,
        seat_no: Number(data.seatNo),
        display_name: String(data.username || "").trim(),
        icon_id: data.iconId
      });
      const user = upsertLocalUser(result.user);
      registerDraft = {};
      currentUserId = user.id;
      persistLogin(user.id);
      currentView = "home";
      render();
      return;
    }

    if (state.users.some((user) => user.role === "student" && user.classId === data.classId && Number(user.seatNo) === Number(data.seatNo))) {
      throw new Error("このクラスと出席番号はすでに登録されています。");
    }
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    state.users.push({
      id, role: "student", name: data.name.trim(), email,
      classId: data.classId, seatNo: Number(data.seatNo),
      username: data.username.trim(), iconId: data.iconId,
      rankingVisible: false, status: "active", lastLoginAt: now, createdAt: now
    });
    state.auth.push({ userId: id, email, passwordHash: demoHash(data.password) });
    saveState();
    registerDraft = {};
    currentUserId = id;
    persistLogin(id);
    currentView = "home";
    render();
  } catch (error) {
    renderAuth("register", error.message || "登録に失敗しました。時間をおいてもう一度お試しください。");
  } finally {
    registerSubmitting = false;
    if (!currentUserId) {
      const button = document.querySelector("#register-form button[type='submit']");
      if (button) {
        button.disabled = false;
        button.textContent = "登録して始める";
      }
    }
  }
}

function normalizeDomainName(value) {
  const text = String(value || "");
  if (text.includes("ストラテジ")) return "ストラテジ系";
  if (text.includes("マネジメント")) return "マネジメント系";
  if (text.includes("テクノロジ")) return "テクノロジ系";
  return text;
}

function studentUploadStatus(userId) {
  const rows = userPastResults(userId);
  const uploadIds = new Set(rows.map((row) => row.uploadId).filter(Boolean));
  const latestUpload = rows.map((row) => row.uploadedAt).filter(Boolean).sort().at(-1) || "";
  const domainSet = new Set(rows.map((row) => normalizeDomainName(row.domain)).filter(Boolean));
  return {
    total: rows.length,
    uploadCount: uploadIds.size,
    latestUpload,
    hoursSinceUpload: latestUpload ? hoursSince(latestUpload) : Infinity,
    domains: domainSet,
    hasUpload: rows.length > 0
  };
}

function teacherStudentRows() {
  return state.users
    .filter((user) => user.role === "student" || String(user.role).startsWith("student"))
    .map((user) => {
      const stats = userStats(user.id);
      const upload = studentUploadStatus(user.id);
      const domains = domainStats(user.id);
      const weakDomain = domains.filter((item) => item.total > 0).sort((a, b) => a.accuracy - b.accuracy)[0];
      return { user, stats, upload, domains, weakDomain };
    });
}

function renderTeacher() {
  if (USE_REMOTE_API) {
    loadTeacherData(currentView === "students").then((loaded) => {
      if (loaded && currentUser()?.role === "teacher") render();
    }).catch((error) => console.warn("loadTeacherData failed", error));
  }
  if (!["home", "students", "messages"].includes(currentView)) currentView = "home";
  const nav = `
    <div class="nav-tabs">
      ${tab("home", "ダッシュボード")}
      ${tab("students", "学生一覧")}
      ${tab("messages", "メッセージ")}
    </div>
  `;
  layout(nav + (currentView === "students" ? teacherStudents() : currentView === "messages" ? teacherMessages() : teacherHome()));
  bindTeacher();
}

function teacherHome() {
  const rows = teacherStudentRows();
  const classRows = rows.filter((row) => row.user.classId === teacherClassFilter);
  const noUpload = rows.filter((row) => !row.upload.hasUpload);
  const stale = rows.filter((row) => row.upload.hasUpload && row.upload.hoursSinceUpload >= 168);
  const belowLine = rows.filter((row) =>
    row.upload.total >= 10 &&
    (row.stats.accuracy < 60 || row.domains.some((domain) => domain.total >= 3 && domain.accuracy < 30))
  );
  const classNoUpload = classRows.filter((row) => !row.upload.hasUpload);
  return `
    <section class="grid teacher-analysis-dashboard">
      <div class="cards">
        ${metric("CSV未アップロード", `${noUpload.length}人`, "一度も学習履歴を提出していない学生")}
        ${metric("7日以上更新なし", `${stale.length}人`, "CSVの追加アップロードが止まっている学生")}
        ${metric("合格ライン未達", `${belowLine.length}人`, "全体60%または分野30%の目安を下回る学生")}
        ${metric(`${teacherClassFilter} 未提出`, `${classNoUpload.length}人`, "選択クラスのCSV未アップロード学生")}
      </div>

      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">クラス別 CSV提出状況</h2>
          <span class="tag">最優先確認</span>
        </div>
        <div class="panel-body">
          <div class="class-filter">
            ${classes.map((cls) => {
              const target = rows.filter((row) => row.user.classId === cls.id);
              const missing = target.filter((row) => !row.upload.hasUpload).length;
              return `<button class="${teacherClassFilter === cls.id ? "active" : ""}" data-class-filter="${cls.id}">
                <strong>${cls.id}</strong><span>未提出 ${missing}/${target.length}人</span>
              </button>`;
            }).join("")}
          </div>
          <div class="list follow-list">
            ${classRows.filter((row) => !row.upload.hasUpload).map(({ user }) => `
              <div class="follow-card red">
                <div class="avatar">${user.seatNo}</div>
                <div class="row-main">
                  <p class="row-title">${escapeHtml(user.name)}</p>
                  <p class="row-sub">${user.classId} ${user.seatNo}番 / CSV未アップロード</p>
                  <p class="row-sub">対応: 過去問道場で演習後、CSVをアップロードするよう案内します。</p>
                </div>
              </div>
            `).join("") || `<p class="empty">${teacherClassFilter}は全員CSVをアップロード済みです。</p>`}
          </div>
        </div>
      </section>
    </section>
  `;
}

function teacherStudents() {
  const rows = filteredStudents();
  const all = teacherStudentRows();
  const noUploadCount = all.filter((row) => !row.upload.hasUpload).length;
  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">学生別 学習状況</h2>
        <div class="panel-actions">
          <button class="button secondary" data-refresh-students type="button">再読み込み</button>
          <span class="tag">${rows.length}人表示</span>
        </div>
      </div>
      <div class="panel-body">
        <div class="management-toolbar">
          <div class="field">
            <label>クラス</label>
            <select data-student-filter="classId">
              ${classes.map((cls) => `<option value="${cls.id}" ${studentListFilter.classId === cls.id ? "selected" : ""}>${cls.id}</option>`).join("")}
              <option value="all" ${studentListFilter.classId === "all" ? "selected" : ""}>全クラス</option>
            </select>
          </div>
          <div class="field">
            <label>表示対象</label>
            <select data-student-filter="status">
              <option value="no_upload" ${studentListFilter.status === "no_upload" ? "selected" : ""}>CSV未アップロード</option>
              <option value="stale" ${studentListFilter.status === "stale" ? "selected" : ""}>7日以上更新なし</option>
              <option value="below" ${studentListFilter.status === "below" ? "selected" : ""}>合格ライン未達</option>
              <option value="all" ${studentListFilter.status === "all" ? "selected" : ""}>全員</option>
            </select>
          </div>
          <div class="field search-field">
            <label>検索</label>
            <input data-student-filter="query" value="${escapeHtml(studentListFilter.query)}" placeholder="氏名・メール・出席番号">
          </div>
        </div>
        <div class="compact-summary">
          <span>登録 ${all.length}人</span>
          <span>CSV未提出 ${noUploadCount}人</span>
          <span>現在表示 ${rows.length}人</span>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>状態</th><th>クラス</th><th>番号</th><th>氏名</th><th>最終アップロード</th><th>取込数</th><th>正答率</th><th>不足分野</th><th>次の対応</th></tr></thead>
          <tbody>${rows.map(({ user, stats, upload, domains, weakDomain }) => {
            const belowDomains = domains.filter((domain) => domain.total >= 3 && domain.accuracy < 30);
            const status = !upload.hasUpload ? "未提出" : upload.hoursSinceUpload >= 168 ? "更新停止" : stats.accuracy < 60 || belowDomains.length ? "要復習" : "順調";
            const level = !upload.hasUpload || upload.hoursSinceUpload >= 168 ? "red" : stats.accuracy < 60 || belowDomains.length ? "yellow" : "green";
            const action = !upload.hasUpload ? "CSVアップロードを案内" : belowDomains.length ? `${belowDomains[0].domain}を優先` : weakDomain ? `${weakDomain.domain}の苦手を復習` : "別分野・別年度を追加";
            return `<tr>
              <td><span class="tag ${level}">${status}</span></td>
              <td>${user.classId}</td><td>${user.seatNo}</td><td>${escapeHtml(user.name)}</td>
              <td>${upload.latestUpload ? formatDateTime(upload.latestUpload) : "未提出"}</td>
              <td>${upload.total}問 / ${upload.uploadCount}回</td><td>${upload.total ? pct(stats.accuracy) : "-"}</td>
              <td>${belowDomains.length ? belowDomains.map((domain) => `${domain.domain} ${pct(domain.accuracy)}`).join(" / ") : "-"}</td>
              <td>${action}</td>
            </tr>`;
          }).join("") || `<tr><td colspan="9">条件に合う学生はいません。</td></tr>`}</tbody>
        </table>
      </div>
    </section>
  `;
}

function filteredStudents() {
  const query = studentListFilter.query.trim().toLowerCase();
  return teacherStudentRows()
    .filter((row) => studentListFilter.classId === "all" || row.user.classId === studentListFilter.classId)
    .filter((row) => {
      if (studentListFilter.status === "no_upload") return !row.upload.hasUpload;
      if (studentListFilter.status === "stale") return row.upload.hasUpload && row.upload.hoursSinceUpload >= 168;
      if (studentListFilter.status === "below") {
        return row.upload.total >= 10 && (row.stats.accuracy < 60 || row.domains.some((domain) => domain.total >= 3 && domain.accuracy < 30));
      }
      return true;
    })
    .filter((row) => {
      if (!query) return true;
      const user = row.user;
      return [user.name, user.username, user.email, user.classId, String(user.seatNo)].some((value) => String(value).toLowerCase().includes(query));
    })
    .sort((a, b) => a.user.classId.localeCompare(b.user.classId) || Number(a.user.seatNo) - Number(b.user.seatNo));
}

function normalizeDomainName(value) {
  const text = String(value || "").trim();
  if (text.includes("ストラテジ")) return "ストラテジ系";
  if (text.includes("マネジメント")) return "マネジメント系";
  if (text.includes("テクノロジ")) return "テクノロジ系";
  return text || "未分類";
}

function domainStats(userId) {
  const names = ["ストラテジ系", "マネジメント系", "テクノロジ系"];
  const stats = Object.fromEntries(names.map((domain) => [domain, { domain, total: 0, correct: 0 }]));
  userPastResults(userId).forEach((row) => {
    const domain = normalizeDomainName(row.domain);
    if (!stats[domain]) return;
    stats[domain].total += 1;
    if (row.isCorrect) stats[domain].correct += 1;
  });
  return names.map((domain) => ({
    ...stats[domain],
    accuracy: stats[domain].total ? (stats[domain].correct / stats[domain].total) * 100 : 0
  }));
}

function studentUploadStatus(userId) {
  const rows = userPastResults(userId);
  const uploadIds = new Set(rows.map((row) => row.uploadId).filter(Boolean));
  const latestUpload = rows.map((row) => row.uploadedAt).filter(Boolean).sort().at(-1) || "";
  return {
    total: rows.length,
    uploadCount: uploadIds.size,
    latestUpload,
    hoursSinceUpload: latestUpload ? hoursSince(latestUpload) : Infinity,
    hasUpload: rows.length > 0
  };
}

function csvAnalysis(userId) {
  const rows = userPastResults(userId);
  const correct = rows.filter((row) => row.isCorrect).length;
  return {
    total: rows.length,
    correct,
    accuracy: rows.length ? (correct / rows.length) * 100 : 0,
    domains: domainStats(userId)
  };
}

function buildReportPlan(userId, report) {
  const domains = domainStats(userId);
  const missingDomain = domains.find((domain) => domain.total === 0);
  const urgentDomain = domains
    .filter((domain) => domain.total >= 3 && domain.accuracy < 30)
    .sort((a, b) => a.accuracy - b.accuracy)[0];
  const weak = report.weak?.[0];

  if (!report.total) {
    return {
      title: "まずCSVをアップロード",
      reason: "過去問道場の学習履歴を取り込むと、苦手分野と次に解く内容を分析できます。",
      url: ""
    };
  }
  if (report.total < 20) {
    return {
      title: "あと20問までデータを集める",
      reason: `現在は${report.total}問です。傾向を判断するため、過去問道場でもう少し解いてCSVを追加してください。`,
      url: ""
    };
  }
  if (missingDomain) {
    return {
      title: `${missingDomain.domain}を解く`,
      reason: `${missingDomain.domain}のデータがありません。過去問道場でこの分野を10問ほど解き、CSVを追加してください。`,
      url: ""
    };
  }
  if (urgentDomain) {
    return {
      title: `${urgentDomain.domain}を最優先`,
      reason: `${urgentDomain.domain}は${pct(urgentDomain.accuracy)}で、分野別の目安30%を下回っています。間違いを確認してから同じ分野を10問解き直しましょう。`,
      url: firstWrongLink(userId, urgentDomain.domain)
    };
  }
  if (report.accuracy < 60 && weak) {
    return {
      title: `${weak.name}を復習`,
      reason: `全体正答率は${pct(report.accuracy)}です。合格目安60%へ近づけるため、正答率の低い${weak.name}から復習しましょう。`,
      url: firstWrongLink(userId, weak.name)
    };
  }
  return {
    title: "別年度で実力を確認",
    reason: "全体60%以上かつ各分野30%以上の目安を満たしています。別年度でも安定して基準を超えられるか確認しましょう。",
    url: ""
  };
}

function teacherStudentRows() {
  return state.users
    .filter((user) => user.role === "student" || String(user.role).startsWith("student"))
    .map((user) => {
      const upload = studentUploadStatus(user.id);
      const analysis = csvAnalysis(user.id);
      const weakDomain = analysis.domains.filter((item) => item.total > 0).sort((a, b) => a.accuracy - b.accuracy)[0];
      const belowDomains = analysis.domains.filter((domain) => domain.total >= 3 && domain.accuracy < 30);
      const lowData = upload.total > 0 && upload.total < 20;
      const stale = upload.hasUpload && upload.hoursSinceUpload >= 168;
      const belowLine = upload.total >= 10 && (analysis.accuracy < 60 || belowDomains.length > 0);
      const needsFollow = !upload.hasUpload || stale || lowData || belowLine;
      return { user, upload, analysis, weakDomain, belowDomains, lowData, stale, belowLine, needsFollow };
    });
}

function renderTeacher() {
  if (USE_REMOTE_API) {
    loadTeacherData(currentView === "students").then((loaded) => {
      if (loaded && currentUser()?.role === "teacher") render();
    }).catch((error) => console.warn("loadTeacherData failed", error));
  }
  if (!["home", "students", "messages"].includes(currentView)) currentView = "home";
  const nav = `
    <div class="nav-tabs">
      ${tab("home", "ダッシュボード")}
      ${tab("students", "学生一覧")}
      ${tab("messages", "メッセージ")}
    </div>
  `;
  layout(nav + (currentView === "students" ? teacherStudents() : currentView === "messages" ? teacherMessages() : teacherHome()));
  bindTeacher();
}

function teacherHome() {
  const all = teacherStudentRows();
  const rows = all.filter((row) => row.user.classId === teacherClassFilter);
  const noUpload = rows.filter((row) => !row.upload.hasUpload);
  const follow = rows.filter((row) => row.needsFollow);
  const uploaded = rows.filter((row) => row.upload.hasUpload);
  const priority = [...rows].sort((a, b) =>
    Number(a.upload.hasUpload) - Number(b.upload.hasUpload) ||
    Number(b.stale) - Number(a.stale) ||
    a.analysis.accuracy - b.analysis.accuracy
  );

  return `
    <section class="grid teacher-analysis-dashboard">
      <div class="class-filter">
        ${classes.map((cls) => {
          const classRows = all.filter((row) => row.user.classId === cls.id);
          const missing = classRows.filter((row) => !row.upload.hasUpload).length;
          return `<button class="${teacherClassFilter === cls.id ? "active" : ""}" data-class-filter="${cls.id}">
            <strong>${cls.id}</strong><span>CSV未提出 ${missing}人</span>
          </button>`;
        }).join("")}
      </div>
      <div class="cards">
        ${metric("登録学生", `${rows.length}人`, `${teacherClassFilter}の登録人数`)}
        ${metric("CSV提出済み", `${uploaded.length}人`, "1回以上アップロード済み")}
        ${metric("CSV未提出", `${noUpload.length}人`, "最初に声をかける対象")}
        ${metric("要フォロー", `${follow.length}人`, "未提出・更新停止・基準未達")}
      </div>
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">${teacherClassFilter} フォロー優先リスト</h2>
          <button class="button secondary" data-refresh-students type="button">最新情報に更新</button>
        </div>
        <div class="panel-body">
          <div class="list follow-list">
            ${priority.filter((row) => row.needsFollow).map((row) => {
              const { user, upload, analysis, weakDomain } = row;
              const reason = !upload.hasUpload ? "CSV未提出"
                : row.stale ? "7日以上CSV更新なし"
                : row.lowData ? `分析データ不足（${upload.total}問）`
                : row.belowDomains.length ? `${row.belowDomains[0].domain}が30%未満`
                : `全体正答率${pct(analysis.accuracy)}`;
              const action = !upload.hasUpload ? "過去問道場で演習後、CSV提出を案内"
                : row.stale ? "最近の演習状況を確認し、新しいCSV提出を案内"
                : row.lowData ? "分野を問わず、まず20問まで演習量を増やす"
                : `${weakDomain?.domain || "苦手分野"}を10問解き、間違いを復習`;
              return `<div class="follow-card ${!upload.hasUpload || row.stale ? "red" : "yellow"}">
                <div class="avatar">${escapeHtml(user.seatNo)}</div>
                <div class="row-main">
                  <p class="row-title">${escapeHtml(user.name)} <span class="tag">${reason}</span></p>
                  <p class="row-sub">${escapeHtml(user.classId)} ${escapeHtml(user.seatNo)}番 / ${upload.hasUpload ? `取込${upload.total}問・最終${formatDateTime(upload.latestUpload)}` : "アップロード履歴なし"}</p>
                  <p class="row-sub"><strong>次の対応:</strong> ${action}</p>
                </div>
              </div>`;
            }).join("") || `<p class="empty">現在、優先してフォローする学生はいません。</p>`}
          </div>
        </div>
      </section>
    </section>
  `;
}

function teacherStudents() {
  const rows = filteredStudents();
  const all = teacherStudentRows();
  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">学生別 CSV・分析状況</h2>
        <div class="panel-actions">
          <button class="button secondary" data-refresh-students type="button">最新情報に更新</button>
          <span class="tag">${rows.length}人表示</span>
        </div>
      </div>
      <div class="panel-body">
        <div class="management-toolbar">
          <div class="field"><label>クラス</label><select data-student-filter="classId">
            ${classes.map((cls) => `<option value="${cls.id}" ${studentListFilter.classId === cls.id ? "selected" : ""}>${cls.id}</option>`).join("")}
            <option value="all" ${studentListFilter.classId === "all" ? "selected" : ""}>全クラス</option>
          </select></div>
          <div class="field"><label>表示対象</label><select data-student-filter="status">
            <option value="all" ${studentListFilter.status === "all" ? "selected" : ""}>全員</option>
            <option value="no_upload" ${studentListFilter.status === "no_upload" ? "selected" : ""}>CSV未提出</option>
            <option value="stale" ${studentListFilter.status === "stale" ? "selected" : ""}>7日以上更新なし</option>
            <option value="follow" ${studentListFilter.status === "follow" ? "selected" : ""}>要フォロー</option>
            <option value="ready" ${studentListFilter.status === "ready" ? "selected" : ""}>合格目安到達</option>
          </select></div>
          <div class="field search-field"><label>検索</label>
            <input data-student-filter="query" value="${escapeHtml(studentListFilter.query)}" placeholder="氏名・メール・出席番号">
          </div>
        </div>
        <div class="compact-summary">
          <span>登録 ${all.length}人</span>
          <span>CSV未提出 ${all.filter((row) => !row.upload.hasUpload).length}人</span>
          <span>要フォロー ${all.filter((row) => row.needsFollow).length}人</span>
        </div>
      </div>
      <div class="table-wrap">
        <table class="teacher-student-table">
          <thead><tr><th>状態</th><th>クラス</th><th>番号</th><th>氏名</th><th>最終CSV</th><th>取込履歴</th><th>正答率</th><th>苦手</th><th>次の対応</th></tr></thead>
          <tbody>${rows.map((row) => {
            const { user, upload, analysis, weakDomain } = row;
            const status = !upload.hasUpload ? "未提出" : row.stale ? "更新停止" : row.needsFollow ? "要フォロー" : "順調";
            const level = !upload.hasUpload || row.stale ? "red" : row.needsFollow ? "yellow" : "green";
            const action = !upload.hasUpload ? "CSV提出を案内"
              : row.lowData ? "20問まで演習"
              : row.belowDomains.length ? `${row.belowDomains[0].domain}を優先`
              : analysis.accuracy < 60 ? `${weakDomain?.domain || "苦手分野"}を復習`
              : "別年度で確認";
            return `<tr>
              <td><span class="tag ${level}">${status}</span></td>
              <td>${escapeHtml(user.classId)}</td><td>${escapeHtml(user.seatNo)}</td><td>${escapeHtml(user.name)}</td>
              <td>${upload.latestUpload ? formatDateTime(upload.latestUpload) : "-"}</td>
              <td>${upload.uploadCount}回 / ${upload.total}問</td>
              <td>${upload.total ? pct(analysis.accuracy) : "-"}</td>
              <td>${weakDomain ? `${weakDomain.domain} ${pct(weakDomain.accuracy)}` : "-"}</td>
              <td>${action}</td>
            </tr>`;
          }).join("") || `<tr><td colspan="9">条件に合う学生はいません。</td></tr>`}</tbody>
        </table>
      </div>
    </section>
  `;
}

function filteredStudents() {
  const query = studentListFilter.query.trim().toLowerCase();
  return teacherStudentRows()
    .filter((row) => studentListFilter.classId === "all" || row.user.classId === studentListFilter.classId)
    .filter((row) => {
      if (studentListFilter.status === "no_upload") return !row.upload.hasUpload;
      if (studentListFilter.status === "stale") return row.stale;
      if (studentListFilter.status === "follow") return row.needsFollow;
      if (studentListFilter.status === "ready") return row.upload.total >= 20 && !row.needsFollow;
      return true;
    })
    .filter((row) => {
      if (!query) return true;
      const user = row.user;
      return [user.name, user.username, user.email, user.classId, String(user.seatNo)]
        .some((value) => String(value || "").toLowerCase().includes(query));
    })
    .sort((a, b) => a.user.classId.localeCompare(b.user.classId) || Number(a.user.seatNo) - Number(b.user.seatNo));
}

let studentMessagesLoadedFor = "";
let studentMessagesLoading = false;

function normalizeMessage(row) {
  return {
    id: row.message_id || row.id,
    userId: row.user_id || row.userId,
    title: row.title || "先生からのメッセージ",
    body: row.body || "",
    actionView: row.action_view || row.actionView || "home",
    createdAt: row.created_at || row.createdAt || "",
    readAt: row.read_at || row.readAt || ""
  };
}

async function loadStudentMessages(force = false) {
  const user = currentUser();
  if (!user || user.role === "teacher" || !USE_REMOTE_API || studentMessagesLoading) return;
  if (!force && studentMessagesLoadedFor === user.id) return;
  studentMessagesLoading = true;
  try {
    const result = await apiRequest("getMessages", { user_id: user.id });
    state.messages = (result.messages || []).map(normalizeMessage);
    studentMessagesLoadedFor = user.id;
    saveState();
    if (currentUser()?.id === user.id) render();
  } catch (error) {
    console.warn("getMessages failed", error);
  } finally {
    studentMessagesLoading = false;
  }
}

function studentMessagePanel(userId) {
  const messages = (state.messages || [])
    .map(normalizeMessage)
    .filter((message) => message.userId === userId && !message.readAt)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  if (!messages.length) return "";
  return `
    <section class="panel student-message-panel">
      <div class="panel-header">
        <h2 class="panel-title">先生からのメッセージ</h2>
        <span class="tag">${messages.length}件</span>
      </div>
      <div class="panel-body">
        ${messages.map((message) => `
          <article class="message-item">
            <h3>${escapeHtml(message.title)}</h3>
            <p>${escapeHtml(message.body)}</p>
            <p class="message-meta">${message.createdAt ? formatDateTime(message.createdAt) : ""}</p>
            <div class="panel-actions">
              <button class="button" data-message-action="${escapeHtml(message.id)}" data-action-view="${escapeHtml(message.actionView)}">
                ${message.actionView === "upload" ? "CSVアップロードへ" : "分析を確認する"}
              </button>
              <button class="button secondary" data-message-read="${escapeHtml(message.id)}">確認済みにする</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function messageTargetRows(classId, status) {
  return teacherStudentRows().filter((row) => {
    if (classId !== "all" && row.user.classId !== classId) return false;
    if (status === "no_upload") return !row.upload.hasUpload;
    if (status === "stale") return row.stale;
    if (status === "follow") return row.needsFollow;
    return true;
  });
}

function teacherMessages() {
  const recent = (state.messages || []).map(normalizeMessage)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 10);
  return `
    <section class="grid">
      <section class="panel">
        <div class="panel-header"><h2 class="panel-title">学生へメッセージを送る</h2></div>
        <div class="panel-body">
          <form class="message-compose" id="teacher-message-form">
            <div class="management-toolbar">
              <div class="field"><label>クラス</label><select name="classId">
                ${classes.map((cls) => `<option value="${cls.id}">${cls.id}</option>`).join("")}
                <option value="all">全クラス</option>
              </select></div>
              <div class="field"><label>送信対象</label><select name="status">
                <option value="no_upload">CSV未提出</option>
                <option value="stale">7日以上更新なし</option>
                <option value="follow">要フォロー</option>
                <option value="all">全員</option>
              </select></div>
              <div class="field"><label>行動ボタン</label><select name="actionView">
                <option value="upload">CSVアップロードへ</option>
                <option value="home">分析を確認する</option>
              </select></div>
            </div>
            <div class="field"><label>件名</label><input name="title" value="学習状況を確認してください" required></div>
            <div class="field"><label>メッセージ</label><textarea name="body" rows="4" required>過去問道場で学習した後、CSVをアップロードして現在の苦手分野を確認しましょう。</textarea></div>
            <div class="message-target-preview" data-message-target-preview></div>
            <button class="button" type="submit">対象の学生へ送信</button>
          </form>
        </div>
      </section>
      <section class="panel">
        <div class="panel-header"><h2 class="panel-title">最近送ったメッセージ</h2></div>
        <div class="panel-body">
          ${recent.length ? recent.map((message) => `
            <div class="mini-row">
              <strong>${escapeHtml(message.title)}</strong>
              <span>${escapeHtml(message.body)} / ${message.createdAt ? formatDateTime(message.createdAt) : ""}</span>
            </div>
          `).join("") : `<p class="hint">送信履歴はまだありません。</p>`}
        </div>
      </section>
    </section>
  `;
}

const bindTeacherWithoutMessages = bindTeacher;
bindTeacher = function bindTeacherWithMessages() {
  bindTeacherWithoutMessages();
  const form = document.querySelector("#teacher-message-form");
  if (!form) return;
  const preview = form.querySelector("[data-message-target-preview]");
  const updatePreview = () => {
    const data = Object.fromEntries(new FormData(form));
    const targets = messageTargetRows(data.classId, data.status);
    preview.textContent = `送信対象: ${targets.length}人`;
  };
  form.querySelectorAll("select").forEach((select) => select.addEventListener("change", updatePreview));
  updatePreview();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const targets = messageTargetRows(data.classId, data.status);
    if (!targets.length) {
      alert("条件に合う学生がいません。");
      return;
    }
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "送信しています...";
    try {
      const result = await apiRequest("sendMessages", {
        user_ids: targets.map((row) => row.user.id),
        title: data.title,
        body: data.body,
        action_view: data.actionView,
        created_by: currentUser()?.id || "teacher"
      });
      state.messages = [...(state.messages || []), ...(result.messages || []).map(normalizeMessage)];
      saveState();
      alert(`${result.count || targets.length}人へ送信しました。`);
      render();
    } catch (error) {
      alert(`送信に失敗しました。\n${error.message}`);
      button.disabled = false;
      button.textContent = "対象の学生へ送信";
    }
  });
};

const bindStudentWithoutMessages = bindStudent;
bindStudent = function bindStudentWithMessages() {
  bindStudentWithoutMessages();
  document.querySelectorAll("[data-message-read], [data-message-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const messageId = button.dataset.messageRead || button.dataset.messageAction;
      const message = (state.messages || []).map(normalizeMessage).find((item) => item.id === messageId);
      if (message) message.readAt = new Date().toISOString();
      if (USE_REMOTE_API) {
        apiRequest("markMessageRead", { message_id: messageId }).catch((error) => console.warn("markMessageRead failed", error));
      }
      state.messages = (state.messages || []).map((item) =>
        (item.message_id || item.id) === messageId ? { ...item, read_at: new Date().toISOString(), readAt: new Date().toISOString() } : item
      );
      saveState();
      if (button.dataset.messageAction) currentView = button.dataset.actionView === "upload" ? "upload" : "home";
      render();
    });
  });
};

async function bootstrapApp() {
  try {
    const backend = await window.supabaseBackendReady;
    if (backend?.enabled) {
      if (backend.recoveryMode) {
        renderPasswordRecovery();
        return;
      }
      const remoteUser = await backend.getCurrentUser();
      if (remoteUser) {
        const user = upsertLocalUser(remoteUser);
        currentUserId = user.id;
        persistLogin(user.id);
      } else {
        currentUserId = "";
        clearPersistedLogin();
      }
    }
  } catch (error) {
    console.warn("Supabase session restore failed", error);
  }
  render();
}

function renderPasswordRecovery(message = "") {
  app.innerHTML = `
    <main class="login-layout">
      <section class="login-hero">
        <h1>新しいパスワードを設定</h1>
        <p>今後ログインするときに使用するパスワードを入力してください。</p>
      </section>
      <section class="login-panel">
        <div class="auth-card">
          <form class="form-grid" id="recovery-password-form">
            ${message ? `<p class="error">${escapeHtml(message)}</p>` : ""}
            <div class="field">
              <label>新しいパスワード</label>
              ${passwordInput("newPassword", { required: true, minlength: 8, placeholder: "8文字以上" })}
            </div>
            <div class="field">
              <label>新しいパスワード（確認）</label>
              ${passwordInput("confirmPassword", { required: true, minlength: 8, placeholder: "もう一度入力" })}
            </div>
            <button class="button full" type="submit">パスワードを更新</button>
          </form>
        </div>
      </section>
    </main>
  `;
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.textContent = showing ? "表示" : "隠す";
    });
  });
  document.querySelector("#recovery-password-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    if (data.newPassword !== data.confirmPassword) {
      renderPasswordRecovery("確認用パスワードが一致しません。");
      return;
    }
    const button = event.currentTarget.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "更新しています...";
    try {
      const backend = await window.supabaseBackendReady;
      await backend.updatePassword(data.newPassword);
      await backend.signOut();
      currentUserId = "";
      clearPersistedLogin();
      renderAuth("login", "パスワードを更新しました。新しいパスワードでログインしてください。", "success");
    } catch (error) {
      renderPasswordRecovery(error.message);
    }
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js?v=20260609-first-guide", { updateViaCache: "none" })
      .then((registration) => registration.update())
      .catch(() => {});
  });
}

bootstrapApp();
