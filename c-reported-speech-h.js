const CONTENT = {
  title: "Reported Speech",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "🎓",
  subtitle: "Reported Wh-Questions, Commands, Modal Backshift และ Reporting Verbs",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Reported Wh-Questions",
      cards: [
        {
          title: "การรายงานคำถามที่ขึ้นต้นด้วย Wh-",
          icon: "❓",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อรายงานคำถามที่ใช้ **Wh-word** (what, where, when, why, who, how) ให้ใช้ **คำ Wh- เดิม** เชื่อมประโยค แล้วเรียงประโยคแบบบอกเล่า"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำถามตรง (Direct)", "คำถามรายงาน (Reported)"],
              rows: [
                ["\"Where have you been?\"", "She asked me **where** I **had been**."],
                ["\"What is your name?\"", "He asked **what my name was**."],
                ["\"Why are you late?\"", "The teacher asked **why I was late**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⚠️",
              text: "ข้อควรระวัง: เรียงประโยคแบบ **บอกเล่า** (S+V) ไม่ใช่แบบคำถาม และไม่มีเครื่องหมาย ?"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Reported Commands & Requests",
      cards: [
        {
          title: "การรายงานคำสั่ง/คำขอ",
          icon: "📢",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อรายงาน **คำสั่ง** หรือ **คำขอ** ใช้โครงสร้าง **tell/ask + object + to + V1** (infinitive) แทนการใช้ that-clause"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["คำพูดตรง (Direct)", "คำพูดรายงาน (Reported)"],
              rows: [
                ["\"Submit your homework by Friday.\"", "The teacher **told us to submit** our homework by Friday."],
                ["\"Please help me.\"", "She **asked me to help** her."],
                ["\"Don't be late.\"", "He **told me not to be** late."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ประโยคปฏิเสธ (คำสั่งห้ามทำ) ใช้ **not to + V1**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Modal Backshift & Reporting Verbs",
      cards: [
        {
          title: "การเปลี่ยน Modal Verbs",
          icon: "🔄",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["Modal เดิม", "Modal รายงาน"],
              rows: [
                ["can", "could"],
                ["will", "would"],
                ["must", "had to"],
                ["may", "might"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "\"I **can** swim.\" → He said he **could** swim.", th: "\"ฉันว่ายน้ำได้\" → เขาบอกว่าเขาว่ายน้ำได้" },
                { en: "\"I **will** help you.\" → She said she **would** help me.", th: "\"ฉันจะช่วยเธอ\" → เธอบอกว่าเธอจะช่วยฉัน" }
              ]
            }
          ]
        },
        {
          title: "Reporting Verbs หลากหลาย",
          icon: "🗣️",
          blocks: [
            {
              type: "explanation",
              text: "นอกจาก say/tell/ask ยังมี **reporting verbs** อื่นๆ ที่ใช้ในบริบทเฉพาะ ทำให้ประโยคเป็นธรรมชาติและตรงความหมายมากขึ้น"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "suggest", rule: "แนะนำให้ทำ", example: "She **suggested going** to the beach." },
                { quantifier: "advise", rule: "แนะนำ (ตักเตือน)", example: "The doctor **advised him to rest**." },
                { quantifier: "promise", rule: "สัญญาว่าจะ", example: "He **promised to call** her." },
                { quantifier: "warn", rule: "เตือน", example: "She **warned us not to go** there." },
                { quantifier: "admit", rule: "ยอมรับ", example: "He **admitted stealing** the money." }
              ]
            }
          ]
        },
        {
          title: "ข้อยกเว้นที่ไม่ Backshift",
          icon: "⚠️",
          blocks: [
            {
              type: "explanation",
              text: "หากสิ่งที่พูด **ยังเป็นความจริงอยู่** หรือเป็น **ข้อเท็จจริงทั่วไป** ไม่จำเป็นต้อง backshift"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "\"The Earth **is** round.\" → She said the Earth **is** round.", th: "\"โลกกลม\" → เธอบอกว่าโลกกลม (ข้อเท็จจริงเสมอ)" },
                { en: "\"I **live** in Bangkok.\" → He said he **lives** in Bangkok. (still true)", th: "\"ฉันอาศัยอยู่ที่กรุงเทพฯ\" → เขาบอกว่าเขาอาศัยอยู่ที่กรุงเทพฯ (ยังเป็นจริงอยู่)" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
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
};
