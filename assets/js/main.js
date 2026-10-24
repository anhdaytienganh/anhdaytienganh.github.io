/*
 * Vietnamese text lives directly in the HTML (so the page works without JS).
 * English translations live here, keyed by each element's data-i18n attribute.
 */
const EN = {
  "meta.title": "Ánh teaches English: conversational English A1–B2, online",
  "nav.about": "About",
  "nav.process": "How it works",
  "nav.reviews": "Reviews",
  "nav.lectures": "Lessons",
  "nav.contact": "Contact",

  "hero.eyebrow": "Hi, I'm Ánh 👋",
  "hero.title": "Speak English<br><span class=\"hl\">without memorising scripts</span>",
  "hero.lead": "Online conversational English from A1 to B2, 1-on-1 or in small groups. You speak, I correct, and your confidence grows step by step. For university students, IT folks, working adults, and beginners of any age.",
  "hero.b1": "🎓 BA English, USSH (Distinction)",
  "hero.b3": "⏳ 5 years teaching",
  "hero.b4": "💻 100% online",
  "hero.cta1": "Free trial class →",
  "hero.cta2": "💬 Message on Zalo",
  "hero.note": "↳ The trial class is completely free, no strings attached!",
  "hero.sticker": "No scripts ✌️",

  "about.eyebrow": "about Ánh",
  "about.title": "A teacher who <span class=\"hl-sun\">talks less, listens more</span>",
  "about.p1": "I'm Ánh, a conversational English teacher with 5 years in the classroom. My students are a mixed bunch: university students getting ready for internships, IT people who meet with overseas teams, adults starting again from zero, and learners abroad who join class at 1 a.m.",
  "about.p2": "I believe anyone can speak English. All it takes is a class that feels safe enough to make mistakes in.",
  "about.c1t": "BA in English Language, Distinction",
  "about.c1d": "University of Social Sciences & Humanities (USSH)",
  "about.c2d": "Cambridge's international English teaching certificate",
  "about.c3t": "5 years of experience",
  "about.c3d": "Teaching conversational English A1–B2",
  "about.c4t": "1-on-1 or small groups",
  "about.c4d": "Online, flexible schedule",
  "about.pr1t": "Student-centred",
  "about.pr1d": "You talk more than the teacher. Every lesson has a lead-in, vocabulary games, and time to figure things out yourself before anything is explained.",
  "about.pr2t": "No memorised scripts",
  "about.pr2d": "You speak with your own words and I correct you on the spot. Mistakes are fine. Mistakes are how you improve.",
  "about.pr3t": "Real-life topics",
  "about.pr3d": "Traffic, restaurants, online meetings, interviews, travel… Learn what you can use tomorrow.",
  "about.pr4t": "Pronunciation from the roots",
  "about.pr4d": "Clear IPA foundations and fixes for tricky sounds (like L/N) so people understand you the first time.",

  "process.eyebrow": "how it works",
  "process.title": "3 steps to get started",
  "process.lead": "Simple, transparent, and no upfront payment.",
  "process.s1t": "Trial class",
  "process.s1tag": "FREE",
  "process.s1a": "Experience a real lesson, online",
  "process.s1b": "See whether my teaching style suits you",
  "process.s1c": "No commitment, no preparation needed",
  "process.s2t": "Level assessment",
  "process.s2tag": "PLACEMENT",
  "process.s2a": "A short chat + a gentle test",
  "process.s2b": "Find your CEFR level (A1–B2)",
  "process.s2c": "Set concrete goals together",
  "process.s3t": "Start your course",
  "process.s3tag": "1-ON-1 / SMALL GROUP",
  "process.s3a": "Course book matched to your level (e.g. Speak Out)",
  "process.s3b": "Flexible schedule that fits your time zone",
  "process.s3c": "Progress tracking and feedback at every milestone",
  "process.cta": "Book a trial class on Zalo →",

  "aud.eyebrow": "who is it for?",
  "aud.title": "This class is for you if…",
  "aud.a1t": "You're a university student",
  "aud.a1d": "You need confidence for presentations, internship interviews, exchange programmes, or just to stop freezing up when you meet foreigners.",
  "aud.a2t": "it_people<span class=\"cursor\"></span>",
  "aud.a2d": "Reading docs is fine, but speaking in a <code>daily stand-up</code>, a demo, or a client call throws an <code>Exception</code>? Let's debug your speaking.",
  "aud.a3t": "You're starting from zero",
  "aud.a3d": "At any age. We go from IPA and basic grammar to everyday phrases, slow and steady.",
  "aud.a4t": "You live or work abroad",
  "aud.a4d": "Different time zone? No problem. Flexible scheduling, even at odd hours like 1 a.m.",

  "rev.eyebrow": "what students say",
  "rev.title": "Real reviews from real students",
  "rev.hint": "← swipe for more →",

  "lec.eyebrow": "lessons",
  "lec.title": "Try a few recent lessons",
  "lec.lead": "Small slices of real classes, shared on Threads.",
  "lec.all": "📚 See all lessons",

  "contact.eyebrow": "contact",
  "contact.title": "Ready to speak English?",
  "contact.lead": "Message me on Zalo to book your free trial class. I usually reply the same day.",
  "contact.formatT": "Format",
  "contact.formatD": "100% online · 1-on-1 or small groups",
  "contact.levelT": "Levels",
  "contact.levelD": "Conversational A1 – B2",
  "contact.cta": "Message on Zalo",
  "contact.qr": "Scan to open Zalo",

  "footer.tag": "Conversational English, no scripts needed.",

  "lp.metaTitle": "Lesson archive · Ánh teaches English",
  "lp.eyebrow": "lesson archive",
  "lp.title": "All lessons 📚",
  "lp.lead": "Filter by level and topic, then pick the one you like best.",
  "lp.search": "Search lessons, vocabulary…",
  "lp.level": "Level:",
  "lp.topic": "Topic:",
  "lp.empty": "No lessons match yet. Try another filter!",
  "lp.cta": "Like this way of learning? Free trial class →"
};

/* Strings that JS renders itself */
const UI = {
  vi: { sample: "Mẫu", view: "Xem bài →", soon: "Sắp có", all: "Tất cả", count: n => `${n} bài giảng` },
  en: { sample: "Sample", view: "View lesson →", soon: "Coming soon", all: "All", count: n => `${n} lesson${n === 1 ? "" : "s"}` }
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
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

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

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

/* ---------- Reveal on scroll ---------- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 })
  : null;
const observe = root => $$(".reveal:not(.in)", root).forEach(el => io ? io.observe(el) : el.classList.add("in"));

/* ---------- Reviews ---------- */
function reviewCard(r) {
  return `
    <article class="review">
      ${r.sample ? `<span class="sample-tag">${UI[lang].sample}</span>` : ""}
      <div class="review-bubble">
        <div class="stars" aria-label="5/5">★★★★★</div>
        <p>${esc(t(r.text))}</p>
      </div>
      <div class="review-meta">
        <div class="avatar" style="background:${esc(r.color || "#FFC93C")}">${esc(r.initial || r.name[0])}</div>
        <div><strong>${esc(r.name)}</strong><span>${esc(t(r.role))}</span></div>
      </div>
    </article>`;
}

/* ---------- Lectures ---------- */
const byDateDesc = (a, b) => b.date.localeCompare(a.date);

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "vi-VN", { day: "numeric", month: "short", year: "numeric" });
}

function lectureCard(l) {
  const topic = window.LECTURE_TOPICS[l.topic] || { emoji: "📘", color: "#FFF1C2" };
  const hasLink = l.link && l.link !== "#";
  return `
    <article class="card lecture reveal">
      ${l.sample ? `<span class="sample-tag">${UI[lang].sample}</span>` : ""}
      <div class="lecture-cover" style="background:${topic.color}" aria-hidden="true">${l.emoji || topic.emoji}</div>
      <div class="lecture-body">
        <div class="lecture-meta">
          <span class="chip level-chip">${esc(l.level)}</span>
          <span class="chip">${esc(t(topic))}</span>
        </div>
        <h3>${esc(t(l.title))}</h3>
        <p>${esc(t(l.summary))}</p>
        ${l.vocab && l.vocab.length ? `<ul class="vocab">${l.vocab.map(v => `<li>${esc(v)}</li>`).join("")}</ul>` : ""}
        <div class="lecture-foot">
          <time datetime="${esc(l.date)}">${formatDate(l.date)}</time>
          ${hasLink ? `<a href="${esc(l.link)}" target="_blank" rel="noopener">${UI[lang].view}</a>` : `<span>${UI[lang].soon}</span>`}
        </div>
      </div>
    </article>`;
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
    Object.entries(window.LECTURE_TOPICS).map(([k, v]) => btn("topic", k, `${v.emoji} ${t(v)}`)).join(""));
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
  const grid = $("#allLectures");
  if (!grid) return;
  const list = window.LECTURES.filter(matches).sort(byDateDesc);
  grid.innerHTML = list.map(lectureCard).join("");
  $("#empty").style.display = list.length ? "none" : "block";
  $("#resultCount").textContent = UI[lang].count(list.length);
  observe(grid);
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
  if (track) track.innerHTML = window.REVIEWS.map(reviewCard).join("");

  const latest = $("#latestLectures");
  if (latest) {
    latest.innerHTML = [...window.LECTURES].sort(byDateDesc).slice(0, 3).map(lectureCard).join("");
    observe(latest);
  }

  renderFilters();
  renderArchive();
}

/* ---------- Zalo QR ---------- */
const qr = $("#qr");
if (qr && window.QRCode) {
  new QRCode(qr, { text: "https://zalo.me/0375487597", width: 160, height: 160, colorDark: "#2B2118", colorLight: "#ffffff" });
}

applyLang();
observe(document);
