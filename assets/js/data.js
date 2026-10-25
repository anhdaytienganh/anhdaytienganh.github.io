/*
 * ==========================================================
 *  NỘI DUNG CÓ THỂ CHỈNH SỬA / EDITABLE CONTENT
 * ==========================================================
 *  Thêm review hoặc bài giảng mới: copy một khối { ... } rồi sửa chữ.
 *  To add a review or lecture: copy one { ... } block and edit the text.
 *
 *  sample: true  -> mục mẫu, KHÔNG hiện trên trang. Xoá dòng này khi đã là nội dung thật.
 *                   a template entry, NOT shown on the page. Remove the line once it is real.
 */

/*
 *  Chỉ thêm review thật, có sự đồng ý của học viên.
 *  Only add real reviews, with the student's permission. Template:
 *
 *  {
 *    name: "Tên học viên / Student name",
 *    role: { vi: "Sinh viên, A2 lên B1", en: "Student, A2 to B1" },
 *    text: { vi: "Lời review bằng tiếng Việt", en: "The review in English" }
 *  },
 */
window.REVIEWS = [
];

/*
 *  level: "A1" | "A2" | "B1" | "B2"
 *  topic: một trong các key của LECTURE_TOPICS bên dưới / one of the LECTURE_TOPICS keys below
 *  link:  link bài đăng Threads, video, slide... / link to the Threads post, video, slides...
 */
window.LECTURE_TOPICS = {
  daily:   { vi: "Đời sống",      en: "Daily life" },
  travel:  { vi: "Du lịch",       en: "Travel" },
  work:    { vi: "Công việc & IT", en: "Work & IT" },
  basics:  { vi: "Nền tảng",      en: "Foundations" },
  skills:  { vi: "Kỹ năng",       en: "Skills" }
};

window.LECTURES = [
  {
    date: "2026-10-25",
    level: "A1",
    topic: "daily",
    title: { vi: "Đi nhà hàng: gọi món & thanh toán", en: "At the restaurant: ordering & paying" },
    summary: {
      vi: "Từ vựng nhà hàng, mẫu câu gọi món và luyện nói không cần script: học viên tự nói, cô sửa.",
      en: "Restaurant vocabulary, phrases for ordering, and script-free speaking practice: you speak, Ánh corrects."
    },
    vocab: ["menu", "starter", "main course", "the bill, please", "takeaway"],
    link: "https://www.threads.com/@summer_english_2909"
  },
  {
    date: "2026-10-20",
    level: "B1",
    topic: "travel",
    title: { vi: "Fieldtrip: thuyết minh di tích ở TP.HCM", en: "Field trip: guiding heritage sites in HCMC" },
    summary: {
      vi: "Dẫn học trò đi chùa, hội quán và tập thuyết minh bằng tiếng Anh ngay tại chỗ.",
      en: "Taking students to pagodas and assembly halls to practise guided commentary in English on site."
    },
    vocab: ["pagoda", "assembly hall", "worship", "deity", "incense", "artifact"],
    link: "https://www.threads.com/@summer_english_2909"
  },
  {
    date: "2026-10-14",
    level: "A2",
    topic: "daily",
    title: { vi: "Traffic: nói chuyện giao thông", en: "Traffic: talking about the road" },
    summary: {
      vi: "Chủ đề giao thông từ một giáo viên… không biết chạy xe máy :)) Quay đầu, vượt, cắt mặt và hơn thế nữa.",
      en: "Traffic English from a teacher who can't ride a motorbike :)) U-turns, overtaking, cutting someone off and more."
    },
    vocab: ["U-turn", "overtake", "cut off", "blind spot", "right-of-way", "zebra crossing"],
    link: "https://www.threads.com/@summer_english_2909"
  },
  {
    date: "2026-07-13",
    level: "B1",
    topic: "skills",
    title: { vi: "Listening & Reading kiểu student-centred", en: "Student-centred Listening & Reading" },
    summary: {
      vi: "Lead-in 5 phút, biến từ mới thành trò chơi ghép cặp, skimming & predicting cho bài khó.",
      en: "A 5-minute lead-in, turning new words into matching games, and skimming & predicting for harder texts."
    },
    vocab: ["lead-in", "skimming", "predicting", "matching"],
    link: "https://www.threads.com/@summer_english_2909"
  },
  {
    sample: true,
    date: "2026-06-20",
    level: "B1",
    topic: "work",
    title: { vi: "Daily stand-up bằng tiếng Anh", en: "Running a daily stand-up in English" },
    summary: {
      vi: "Báo cáo tiến độ, nói về blocker và hỏi lại lịch sự khi chưa hiểu.",
      en: "Reporting progress, talking about blockers, and politely asking for clarification."
    },
    vocab: ["blocker", "on track", "ETA", "could you clarify…?"],
    link: "#"
  },
  {
    sample: true,
    date: "2026-06-05",
    level: "A1",
    topic: "basics",
    title: { vi: "IPA cho người mới: nguyên âm ngắn & dài", en: "IPA for beginners: short & long vowels" },
    summary: {
      vi: "Nghe và phân biệt /ɪ/ – /iː/, /ʊ/ – /uː/ qua các cặp từ quen thuộc.",
      en: "Hearing and telling apart /ɪ/ – /iː/ and /ʊ/ – /uː/ through familiar word pairs."
    },
    vocab: ["ship / sheep", "full / fool", "live / leave"],
    link: "#"
  },
  {
    sample: true,
    date: "2026-05-18",
    level: "B2",
    topic: "work",
    title: { vi: "Phỏng vấn xin việc: kể chuyện bằng STAR", en: "Job interviews: storytelling with STAR" },
    summary: {
      vi: "Trả lời câu hỏi hành vi theo Situation – Task – Action – Result.",
      en: "Answering behavioural questions with Situation – Task – Action – Result."
    },
    vocab: ["take ownership", "trade-off", "stakeholder", "outcome"],
    link: "#"
  },
  {
    sample: true,
    date: "2026-05-02",
    level: "A2",
    topic: "travel",
    title: { vi: "Ở sân bay: check-in & hỏi đường", en: "At the airport: check-in & directions" },
    summary: {
      vi: "Những câu bạn chắc chắn sẽ dùng khi bay quốc tế lần đầu.",
      en: "The phrases you'll definitely need on your first international flight."
    },
    vocab: ["boarding pass", "gate", "carry-on", "layover"],
    link: "#"
  }
];
