const EXERCISE = {
  title: "Reported Speech",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "🎓",
  subtitle: "ฝึก Reported Wh-Questions, Commands, Modal Backshift และ Reporting Verbs",
  accentColor: "blue",
  contentPage: "c-reported-speech-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "\"Where have you been?\" she asked. → She asked me where I ___.",
          tag: "Wh-Question",
          tagColor: "blue",
          emoji: "❓",
          options: ["have been", "had been", "was", "am"],
          answer: "had been",
          explanation: "Present Perfect ในคำถามตรงเปลี่ยนเป็น Past Perfect เมื่อรายงาน"
        },
        {
          sentence: "\"Submit your homework by Friday,\" the teacher said. → The teacher told us ___ our homework by Friday.",
          tag: "Command",
          tagColor: "secondary",
          emoji: "📚",
          options: ["submit", "to submit", "submitting", "submitted"],
          answer: "to submit",
          explanation: "Reported Command ใช้ tell + object + to + V1"
        },
        {
          sentence: "\"I can swim,\" he said. → He said he ___ swim.",
          tag: "Modal Backshift",
          tagColor: "amber",
          emoji: "🏊",
          options: ["can", "could", "will", "would"],
          answer: "could",
          explanation: "can เปลี่ยนเป็น could เมื่อ backshift"
        },
        {
          sentence: "She ___ going to the beach for the holiday.",
          tag: "Reporting Verb",
          tagColor: "purple",
          emoji: "🏖️",
          options: ["suggested", "told", "asked", "said"],
          answer: "suggested",
          explanation: "suggest + V-ing ใช้แนะนำให้ทำสิ่งใดสิ่งหนึ่ง"
        },
        {
          sentence: "\"The Earth is round,\" the teacher said. → The teacher said the Earth ___ round.",
          tag: "No Backshift",
          tagColor: "blue",
          emoji: "🌍",
          options: ["was", "is", "were", "had been"],
          answer: "is",
          explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ไม่จำเป็นต้อง backshift"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "\"What is your name?\" he asked. → He asked ___ my name was.",
          tag: "Wh-Question",
          tagColor: "blue",
          answer: "what",
          explanation: "Reported Wh-Question ใช้ wh-word เดิมเชื่อมประโยค"
        },
        {
          sentence: "\"Please help me,\" she said. → She asked me ___ (help) her.",
          tag: "Request",
          tagColor: "secondary",
          answer: "to help",
          explanation: "Reported Request ใช้ ask + object + to + V1"
        },
        {
          sentence: "\"I will help you,\" she said. → She said she ___ (will) help me.",
          tag: "Modal Backshift",
          tagColor: "amber",
          answer: "would",
          explanation: "will เปลี่ยนเป็น would เมื่อ backshift"
        },
        {
          sentence: "He ___ (admit) stealing the money.",
          tag: "Reporting Verb",
          tagColor: "purple",
          answer: "admitted",
          explanation: "admit + V-ing ใช้ยอมรับสิ่งที่ทำไป"
        },
        {
          sentence: "\"I live in Bangkok,\" he said. (still true) → He said he ___ (live) in Bangkok.",
          tag: "No Backshift",
          tagColor: "blue",
          answer: "lives",
          explanation: "สิ่งที่ยังเป็นจริงอยู่ไม่จำเป็นต้อง backshift"
        }
      ]
    },
    {
      type: "picture",
      label: "Picture Choice",
      icon: "🖼️",
      title: "เลือกคำตอบจากภาพ",
      description: "ดูอิโมจิและเลือกคำตอบที่ถูกต้อง",
      questions: [
        {
          sentence: "He asked me ___ I was going.",
          emoji: "🚶",
          options: ["where", "if"],
          answer: "where",
          explanation: "Reported Wh-Question ใช้ where เชื่อมประโยค"
        },
        {
          sentence: "The doctor advised him ___ more water.",
          emoji: "💧",
          options: ["to drink", "drinking"],
          answer: "to drink",
          explanation: "advise + object + to + V1"
        },
        {
          sentence: "\"I must leave now,\" she said. → She said she ___ leave.",
          emoji: "🚪",
          options: ["had to", "must"],
          answer: "had to",
          explanation: "must เปลี่ยนเป็น had to เมื่อ backshift"
        },
        {
          sentence: "She warned us ___ go there alone.",
          emoji: "⚠️",
          options: ["not to", "don't"],
          answer: "not to",
          explanation: "warn + object + not to + V1 ใช้ในประโยคปฏิเสธ"
        },
        {
          sentence: "\"Water boils at 100°C,\" he said. → He said water ___ at 100°C.",
          emoji: "💧",
          options: ["boils", "boiled"],
          answer: "boils",
          explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ไม่จำเป็นต้อง backshift"
        }
      ]
    },
    {
      type: "fix",
      label: "Spot the Mistake",
      icon: "🔍",
      title: "หาที่ผิด",
      description: "เลือกประโยคที่ถูกต้อง",
      questions: [
        {
          wrong: "She asked me where did I live.",
          tag: "Wh-Question",
          tagColor: "blue",
          options: ["She asked me where I lived.", "She asked me where I live.", "She asked me where do I live."],
          answer: "She asked me where I lived.",
          explanation: "Reported Wh-Question เรียงประโยคแบบบอกเล่า ไม่ใช้ did/do"
        },
        {
          wrong: "The teacher told us submit our homework.",
          tag: "Command",
          tagColor: "secondary",
          options: ["The teacher told us to submit our homework.", "The teacher told us submitting our homework.", "The teacher said us to submit our homework."],
          answer: "The teacher told us to submit our homework.",
          explanation: "Reported Command ต้องมี to ก่อนกริยา: tell + object + to + V1"
        },
        {
          wrong: "He said he will help me.",
          tag: "Modal Backshift",
          tagColor: "amber",
          options: ["He said he would help me.", "He said he can help me.", "He said he helps me."],
          answer: "He said he would help me.",
          explanation: "will เปลี่ยนเป็น would เมื่อ backshift"
        },
        {
          wrong: "He admitted to steal the money.",
          tag: "Reporting Verb",
          tagColor: "purple",
          options: ["He admitted stealing the money.", "He admitted steal the money.", "He admits to stealing the money."],
          answer: "He admitted stealing the money.",
          explanation: "admit ตามด้วย V-ing ไม่ใช่ to + V1"
        },
        {
          wrong: "The teacher said the Earth was round.",
          tag: "No Backshift",
          tagColor: "blue",
          options: ["The teacher said the Earth is round.", "The teacher says the Earth was round.", "The teacher said the Earth were round."],
          answer: "The teacher said the Earth is round.",
          explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ไม่จำเป็นต้อง backshift"
        }
      ]
    },
    {
      type: "drag",
      label: "Drag & Drop",
      icon: "🧩",
      title: "ลากคำมาเติม",
      description: "ลากคำจากคลังคำมาใส่ในช่องว่างให้ถูกต้อง",
      questions: [
        {
          sentence: "He asked me ___ I liked the movie.",
          bank: ["what", "if", "where"],
          answer: "if",
          explanation: "จากคำถาม Yes/No ใช้ if เชื่อมประโยค"
        },
        {
          sentence: "She told him ___ be late.",
          bank: ["not to", "to not", "don't"],
          answer: "not to",
          explanation: "Reported Command ปฏิเสธใช้ tell + object + not to + V1"
        },
        {
          sentence: "\"I will call you,\" he said. → He said he ___ call me.",
          bank: ["would", "will", "can"],
          answer: "would",
          explanation: "will เปลี่ยนเป็น would เมื่อ backshift"
        },
        {
          sentence: "She ___ him to be careful.",
          bank: ["warned", "suggested", "admitted"],
          answer: "warned",
          explanation: "warn + object + to + V1 ใช้เตือน"
        },
        {
          sentence: "\"The sun rises in the east,\" he said. → He said the sun ___ in the east.",
          bank: ["rises", "rose", "had risen"],
          answer: "rises",
          explanation: "ข้อเท็จจริงทางวิทยาศาสตร์ไม่จำเป็นต้อง backshift"
        }
      ]
    }
  ]
};
