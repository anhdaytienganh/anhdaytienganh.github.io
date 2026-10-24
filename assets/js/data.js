/*
 * ==========================================================
 *  NỘI DUNG CÓ THỂ CHỈNH SỬA / EDITABLE CONTENT
 * ==========================================================
 *  Thêm review hoặc bài giảng mới: copy một khối { ... } rồi sửa chữ.
 *  To add a review or lecture: copy one { ... } block and edit the text.
 *
 *  sample: true  -> hiện nhãn "Mẫu / Sample". Xoá dòng này khi đã là nội dung thật.
 *                   shows a "Sample" tag. Remove the line once the content is real.
 */

window.REVIEWS = [
  {
    sample: true,
    name: "Minh Anh",
    initial: "M",
    color: "#FFC93C",
    role: { vi: "Sinh viên năm 3 · A2 → B1", en: "3rd-year student · A2 → B1" },
    text: {
      vi: "Trước đây mình sợ nói lắm, toàn học thuộc rồi quên. Học với cô Ánh thì được nói thật, sai thì cô sửa ngay, giờ mình dám nói trong lớp rồi :))",
      en: "I used to be scared of speaking. I memorised everything and then forgot it. With Ánh I actually get to talk, she corrects me on the spot, and now I speak up in class :))"
    }
  },
  {
    sample: true,
    name: "Hoàng Long",
    initial: "H",
    color: "#7CF2C2",
    role: { vi: "Backend Developer · B1", en: "Backend Developer · B1" },
    text: {
      vi: "Mình cần nói trong daily stand-up với team nước ngoài. Cô cho mình tập đúng những tình huống đó: báo cáo task, hỏi lại khi không hiểu, small talk. Rất thực tế.",
      en: "I needed to speak in daily stand-ups with an overseas team. Ánh had me practise exactly those situations: reporting tasks, asking for clarification, small talk. Very practical."
    }
  },
  {
    sample: true,
    name: "Chị Thu",
    initial: "T",
    color: "#FF7A59",
    role: { vi: "Kế toán · bắt đầu từ con số 0", en: "Accountant · started from zero" },
    text: {
      vi: "Hơn 40 tuổi mới học lại tiếng Anh, chị cứ nghĩ không theo nổi. Sau 3 tháng chị đã tự gọi món và hỏi đường được khi đi du lịch.",
      en: "I came back to English in my 40s and thought I couldn't keep up. After 3 months I could order food and ask for directions on my own while travelling."
    }
  },
  {
    sample: true,
    name: "Quang",
    initial: "Q",
    color: "#D6E4FF",
    role: { vi: "Đang làm việc tại Đức · A1", en: "Working in Germany · A1" },
    text: {
      vi: "Lịch làm của mình lệch múi giờ, có hôm học lúc 1 giờ sáng mà cô vẫn nhiệt tình. Phát âm L và N của mình đã đỡ hơn nhiều.",
      en: "My work schedule is in a different time zone. Some days we had class at 1 a.m. and she was still full of energy. My L and N sounds are much better now."
    }
  },
  {
    sample: true,
    name: "Bảo Ngọc",
    initial: "B",
    color: "#C8F0D8",
    role: { vi: "Sinh viên Du lịch · B1", en: "Tourism student · B1" },
    text: {
      vi: "Buổi fieldtrip đi chùa và hội quán là buổi học vui nhất! Mình học được cách thuyết minh bằng tiếng Anh ngay tại chỗ.",
      en: "The field trip to the pagoda and assembly hall was the most fun lesson! I learned how to give a guided commentary in English right on the spot."
    }
  }
];

/*
 *  level: "A1" | "A2" | "B1" | "B2"
 *  topic: một trong các key của LECTURE_TOPICS bên dưới / one of the LECTURE_TOPICS keys below
 *  emoji: (tuỳ chọn / optional) icon riêng cho bài, mặc định theo chủ đề
 *  link:  link bài đăng Threads, video, slide... / link to the Threads post, video, slides...
 */
window.LECTURE_TOPICS = {
  daily:   { vi: "Đời sống",      en: "Daily life", emoji: "🛵", color: "#FFE3D9" },
  travel:  { vi: "Du lịch",       en: "Travel",     emoji: "🏯", color: "#C8F0D8" },
  work:    { vi: "Công việc & IT", en: "Work & IT",  emoji: "💻", color: "#D6E4FF" },
  basics:  { vi: "Nền tảng",      en: "Foundations", emoji: "🔤", color: "#FFF1C2" },
  skills:  { vi: "Kỹ năng",       en: "Skills",     emoji: "🎧", color: "#FFC93C" }
};

window.LECTURES = [
  {
    date: "2026-10-25",
    level: "A1",
    topic: "daily",
    emoji: "🍜",
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
