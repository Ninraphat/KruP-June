const CONTENT = {
  title: "Conditional Sentences",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🌦️",
  subtitle: "First Conditional, Unless และ Negative/Question Form",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน Zero Conditional",
      cards: [
        {
          title: "Zero Conditional คืออะไร?",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "**Zero Conditional** (If + Present Simple, Present Simple) ใช้พูดถึง **ข้อเท็จจริง** หรือ **กฎทั่วไปที่เป็นจริงเสมอ**"
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**If** you **heat** water to 100°C, it **boils**.", th: "ถ้าคุณทำให้น้ำร้อนถึง 100 องศา มันจะเดือด" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ First Conditional",
      cards: [
        {
          title: "First Conditional คืออะไร?",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**First Conditional** ใช้พูดถึงเหตุการณ์ที่ **มีความเป็นไปได้จริงในอนาคต** โครงสร้างคือ **If + Present Simple, will + V1**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["If-clause", "Main clause"],
              rows: [
                ["If + Present Simple", "will + V1"]
              ]
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Zero", sub: "ข้อเท็จจริงเสมอ", color: "blue", body: "If you **heat** ice, it **melts**." },
                { word: "First", sub: "เป็นไปได้ในอนาคต", color: "secondary", body: "If it **rains**, we **will stay** home." }
              ]
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "**If** it **rains** tomorrow, we **will stay** at home.", th: "ถ้าพรุ่งนี้ฝนตก เราจะอยู่บ้าน" },
                { en: "**If** you **study** hard, you **will pass** the exam.", th: "ถ้าเธอตั้งใจเรียน เธอจะสอบผ่าน" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "ข้อควรระวัง: ใน If-clause **ห้ามใช้ will** แม้จะพูดถึงอนาคต ต้องใช้ **Present Simple** เท่านั้น"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Unless & Negative/Question",
      cards: [
        {
          title: "Unless (แทน If...not)",
          icon: "🚫",
          blocks: [
            {
              type: "explanation",
              text: "**Unless** มีความหมายว่า **\"ถ้าไม่...\"** ใช้แทน **If...not** ได้ โดยไม่ต้องใส่ not ตามหลัง"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "If...not", sub: "แบบเดิม", color: "blue", body: "**If** you **don't study**, you won't pass." },
                { word: "Unless", sub: "แบบย่อ", color: "secondary", body: "**Unless** you **study**, you won't pass." }
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "**Unless** you **study**, you **won't pass** the exam.", th: "ถ้าเธอไม่ตั้งใจเรียน เธอจะสอบไม่ผ่าน" },
                { en: "**Unless** it **stops** raining, we **won't go** out.", th: "ถ้าฝนไม่หยุดตก เราจะไม่ออกไปข้างนอก" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              text: "จำง่ายๆ: **Unless = If...not** — หลัง unless **ห้ามใส่ not ซ้ำ**"
            }
          ]
        },
        {
          title: "Negative & Question Form",
          icon: "❓",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["รูปประโยค", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["ปฏิเสธ", "If + S + don't/doesn't + V1, S + won't + V1", "If you **don't hurry**, you **won't catch** the bus."],
                ["คำถาม", "Will + S + V1, if + S + V1?", "**Will** you **come** if I **invite** you?"]
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "If it rains tomorrow, we ___ at home.",
      tag: "First Conditional",
      tagColor: "secondary",
      emoji: "🌧️",
      options: ["stay", "will stay", "stayed", "stays"],
      answer: "will stay",
      explanation: "First Conditional: If + Present Simple, will + V1"
    },
    {
      sentence: "If you ___ hard, you will pass the exam.",
      tag: "First Conditional",
      tagColor: "secondary",
      emoji: "📚",
      options: ["study", "will study", "studied", "studies"],
      answer: "study",
      explanation: "If-clause ต้องใช้ Present Simple ห้ามใช้ will"
    },
    {
      sentence: "___ you study, you won't pass the exam.",
      tag: "Unless",
      tagColor: "amber",
      emoji: "🚫",
      options: ["If", "Unless", "When", "While"],
      answer: "Unless",
      explanation: "Unless มีความหมายว่า 'ถ้าไม่' = If...not"
    },
    {
      sentence: "If you heat water to 100°C, it ___.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "💧",
      options: ["boil", "boils", "will boil", "boiled"],
      answer: "boils",
      explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน เพราะเป็นข้อเท็จจริงเสมอ"
    },
    {
      sentence: "If you don't hurry, you ___ the bus.",
      tag: "Negative",
      tagColor: "purple",
      emoji: "🚌",
      options: ["won't catch", "don't catch", "not catch", "catch"],
      answer: "won't catch",
      explanation: "Main clause ปฏิเสธของ First Conditional ใช้ won't + V1"
    }
  ]
};
