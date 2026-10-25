/*
 * Vietnamese text lives directly in the HTML (so the page works without JS).
 * English translations live here, keyed by each element's data-i18n attribute.
 */
const EN = {
  "meta.title": "Ánh teaches English: conversational English online, A1 to B2",
  "nav.skip": "Skip to content",
  "nav.about": "About",
  "nav.process": "How it works",
  "nav.reviews": "Students",
  "nav.lectures": "Lessons",
  "nav.archive": "Lesson archive",
  "nav.contact": "Contact",
  "nav.cta": "Free trial",
  "nav.menu": "Menu",

  "hero.title": "Speak English without scripts",
  "hero.lead": "Conversational English online, A1 to B2, 1-on-1 or small groups.",
  "hero.cta1": "Book a free trial",
  "hero.cta2": "See how it works",
  "hero.tag": "First class free",
  "hero.seal": "CELTA certified",

  "about.title": "A teacher who talks less, listens more",
  "about.p1": "I'm Ánh, a conversational English teacher. My students are a mixed bunch: university students getting ready for internships, IT people who meet with overseas teams, adults starting again from zero, and learners abroad who join class at 1 a.m.",
  "about.p2": "I believe anyone can speak English. All it takes is a class that feels safe enough to make mistakes in.",
  "about.c1": "BA in English Language, with Distinction",
  "about.c2": "Cambridge's international English teaching certificate",
  "about.c3": "years teaching conversational English",
  "about.c4": "or small groups, online, flexible schedule",
  "about.pr1t": "Student-centred",
  "about.pr1d": "You talk more than the teacher, with lead-ins and vocabulary games.",
  "about.pr2t": "No memorised scripts",
  "about.pr2d": "You speak with your own words, and I correct you on the spot.",
  "about.pr3t": "Real-life topics",
  "about.pr3d": "Traffic, restaurants, online meetings, interviews, travel.",
  "about.pr4t": "Pronunciation from the roots",
  "about.pr4d": "IPA foundations and fixes for tricky sounds like L and N.",

  "aud.title": "This class is for you if…",
  "aud.a1t": "You're a university student",
  "aud.a1d": "You need confidence for presentations, internship interviews and exchange programmes, or just to stop freezing up when you meet foreigners.",
  "aud.a2t": "You work in IT",
  "aud.a2d": "Reading docs is fine, but speaking in a <code>daily stand-up</code>, a demo or a client call throws an <code>Exception</code>? Let's debug your speaking.",
  "aud.a3t": "You're starting from zero",
  "aud.a3d": "At any age. We go from IPA and basic grammar to everyday phrases, slow and steady.",
  "aud.a4t": "You live abroad",
  "aud.a4d": "Different time zone? No problem. Flexible scheduling, even at odd hours like 1 a.m.",

  "process.title": "3 steps to get started",
  "process.lead": "Simple, transparent, and no upfront payment.",
  "process.s1t": "Trial class",
  "process.s1tag": "Free",
  "process.s1a": "Experience a real lesson, online",
  "process.s1b": "See whether my teaching style suits you",
  "process.s1c": "No commitment, no preparation needed",
  "process.s2t": "Level assessment",
  "process.s2tag": "Placement",
  "process.s2a": "A short chat and a gentle test",
  "process.s2b": "Find your CEFR level",
  "process.s2c": "Set concrete goals together",
  "process.s3t": "Start your course",
  "process.s3tag": "1-on-1 or small group",
  "process.s3a": "A course book matched to your level, e.g. Speak Out",
  "process.s3b": "A flexible schedule that fits your time zone",
  "process.s3c": "Progress tracking and feedback at every milestone",
  "process.closeLine": "Start at step 1, for free.",
  "process.cta": "Book a trial class on Zalo",
  "lec.all": "See all lessons",

  "rev.statement": "Some days, class starts at 1 a.m.",
  "rev.tag": "A student working in Germany",
  "rev.s1t": "From zero to almost through Speak Out A1",
  "rev.s1d": "Three months of 1-on-1: IPA, basic grammar, ordering at a restaurant.",
  "rev.s2t": "Fixing the L and N sounds",
  "rev.s2d": "A student in Germany, studying between shifts, sometimes at 1 a.m.",
  "rev.s3t": "Guiding right at the heritage site",
  "rev.s3d": "Tourism students on a field trip to pagodas and assembly halls in HCMC.",
  "rev.more": "Read more on Threads",

  "contact.title": "Ready to speak English?",
  "contact.lead": "Message me on Zalo to book your free trial class. I usually reply the same day.",
  "contact.formatT": "Format",
  "contact.formatD": "Online, 1-on-1 or small groups",
  "contact.levelT": "Levels",
  "contact.levelD": "Conversational, A1 to B2",
  "contact.cta": "Message on Zalo",
  "contact.qr": "Scan to open Zalo",

  "footer.letter": "See you at your trial class.",
  "footer.tag": "Conversational English, no scripts needed.",

  "lp.metaTitle": "Lesson archive: Ánh teaches English",
  "lp.title": "Lesson archive",
  "lp.lead": "Filter by level and topic, then pick the one you like best.",
  "lp.search": "Search lessons, vocabulary…",
  "lp.level": "Level",
  "lp.topic": "Topic",
  "lp.empty": "No lessons match yet. Try another filter.",
  "lp.cta": "Book a free trial"
};

/* Strings that JS renders itself */
const UI = {
  vi: { view: "Xem bài", all: "Tất cả", count: n => `${n} bài giảng`, latest: "Bài giảng gần đây" },
  en: { view: "View lesson", all: "All", count: n => `${n} lesson${n === 1 ? "" : "s"}`, latest: "Recent lessons" }
};

const LANG_KEY = "anh-lang";
let lang = "vi";
try { lang = localStorage.getItem(LANG_KEY) || "vi"; } catch (e) {}
/* ?lang=en in the URL wins, so an English link can be shared directly */
const urlLang = new URLSearchParams(location.search).get("lang");
if (urlLang === "vi" || urlLang === "en") lang = urlLang;

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = obj => (obj && (obj[lang] || obj.vi)) || "";
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Only real content reaches the page: entries marked sample stay in data.js as templates */
const real = list => (list || []).filter(x => !x.sample);

/* ---------- i18n ---------- */
$$("[data-i18n]").forEach(el => { el.dataset.vi = el.innerHTML; });
$$("[data-i18n-placeholder]").forEach(el => { el.dataset.viPh = el.placeholder; });

function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const html = lang === "en" && EN[key] ? EN[key] : el.dataset.vi;
    if (el.tagName === "TITLE") document.title = html.replace(/&amp;/g, "&");
    else el.innerHTML = html;
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = lang === "en" ? EN[el.dataset.i18nPlaceholder] : el.dataset.viPh;
  });
  $$(".lang-toggle button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderAll();
}

$$(".lang-toggle button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  applyLang();
}));

/* ---------- Nav ---------- */
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
$$("a", navLinks).forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

/* The floating Zalo pill stays out of the way while the hero (with its own Zalo button) is on screen */
const floatZalo = $(".float-zalo");
const hero = $(".hero");
if (floatZalo && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => floatZalo.classList.toggle("is-tucked", e.isIntersecting), { threshold: 0.2 }).observe(hero);
}

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

/* ---------- Reviews ---------- */
function reviewCard(r) {
  return `
    <blockquote class="review diecut">
      <p>${esc(t(r.text))}</p>
      <footer><strong>${esc(r.name)}</strong>${esc(t(r.role))}</footer>
    </blockquote>`;
}

/* ---------- Lectures ---------- */
const byDateDesc = (a, b) => b.date.localeCompare(a.date);

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "vi-VN", { day: "numeric", month: "short", year: "numeric" });
}

function lectureRow(l) {
  const topic = window.LECTURE_TOPICS[l.topic] || {};
  const hasLink = l.link && l.link !== "#";
  return `
    <li class="lesson">
      <time datetime="${esc(l.date)}">${formatDate(l.date)}</time>
      <span class="level">${esc(l.level)}</span>
      <div>
        <h4>${esc(t(l.title))}</h4>
        <p>${esc(t(l.summary))}</p>
        ${l.vocab && l.vocab.length ? `<ul class="vocab">${l.vocab.map(v => `<li>${esc(v)}</li>`).join("")}</ul>` : ""}
      </div>
      <span class="topic">${esc(t(topic))}</span>
      ${hasLink ? `<a class="go" href="${esc(l.link)}" target="_blank" rel="noopener">${UI[lang].view}</a>` : "<span></span>"}
    </li>`;
}

/* Lectures page filter state */
const filter = { level: "all", topic: "all", q: "" };

function renderFilters() {
  const levels = $("#levelFilters");
  const topics = $("#topicFilters");
  if (!levels) return;
  const btn = (group, value, label) =>
    `<button type="button" class="filter-btn" data-group="${group}" data-value="${value}" aria-pressed="${filter[group] === value}">${esc(label)}</button>`;
  $$(".filter-btn", levels).forEach(b => b.remove());
  $$(".filter-btn", topics).forEach(b => b.remove());
  levels.insertAdjacentHTML("beforeend",
    btn("level", "all", UI[lang].all) + ["A1", "A2", "B1", "B2"].map(l => btn("level", l, l)).join(""));
  topics.insertAdjacentHTML("beforeend",
    btn("topic", "all", UI[lang].all) +
    Object.entries(window.LECTURE_TOPICS).map(([k, v]) => btn("topic", k, t(v))).join(""));
}

function matches(l) {
  if (filter.level !== "all" && l.level !== filter.level) return false;
  if (filter.topic !== "all" && l.topic !== filter.topic) return false;
  if (filter.q) {
    const hay = [l.title.vi, l.title.en, l.summary.vi, l.summary.en, ...(l.vocab || [])].join(" ").toLowerCase();
    if (!hay.includes(filter.q)) return false;
  }
  return true;
}

function renderArchive() {
  const list = $("#allLectures");
  if (!list) return;
  const items = real(window.LECTURES).filter(matches).sort(byDateDesc);
  list.innerHTML = items.map(lectureRow).join("");
  $("#empty").hidden = items.length > 0;
  $("#resultCount").textContent = UI[lang].count(items.length);
}

document.addEventListener("click", e => {
  const b = e.target.closest(".filter-btn");
  if (!b) return;
  filter[b.dataset.group] = b.dataset.value;
  renderFilters();
  renderArchive();
});
const search = $("#search");
if (search) search.addEventListener("input", () => {
  filter.q = search.value.trim().toLowerCase();
  renderArchive();
});

/* ---------- Render ---------- */
function renderAll() {
  const track = $("#reviewTrack");
  if (track) track.innerHTML = real(window.REVIEWS).map(reviewCard).join("");

  const latest = $("#latestLectures");
  if (latest) {
    latest.setAttribute("aria-label", UI[lang].latest);
    latest.innerHTML = real(window.LECTURES).sort(byDateDesc).slice(0, 3).map(lectureRow).join("");
  }

  renderFilters();
  renderArchive();
}

/* ---------- Zalo QR ---------- */
const qr = $("#qr");
if (qr && window.QRCode) {
  const css = getComputedStyle(document.documentElement);
  new QRCode(qr, {
    text: "https://zalo.me/0375487597", width: 160, height: 160,
    colorDark: css.getPropertyValue("--color-ink").trim(),
    colorLight: css.getPropertyValue("--color-white").trim()
  });
}

applyLang();
