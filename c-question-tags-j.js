const CONTENT = {
  title: "Question Tags",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "❓",
  subtitle: "Question Tag กับ Present/Past Simple, ประโยคปฏิเสธ และ Modal อื่นๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Question Tag กับ Present/Past Simple",
      cards: [
        {
          title: "ใช้ Do/Does/Did",
          icon: "🔧",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประโยคหลักเป็น **Present Simple** หรือ **Past Simple** (ที่ไม่มี verb to be) ต้องใช้ **do/does/did** สร้าง Question Tag"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "Question Tag", "ตัวอย่าง"],
              rows: [
                ["Present Simple (he/she/it)", "doesn't + S?", "She **likes** coffee, **doesn't she**?"],
                ["Present Simple (I/you/we/they)", "don't + S?", "They **like** pizza, **don't they**?"],
                ["Past Simple", "didn't + S?", "They **went** to school, **didn't they**?"]
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Question Tag กับประโยคปฏิเสธ",
      cards: [
        {
          title: "ปฏิเสธ → บอกเล่า",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "ถ้าประโยคหลักเป็น **ปฏิเสธ** ตัว Question Tag จะเป็น **บอกเล่า** (ตรงข้ามกับกฎที่เรียนมาก่อน)"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "บอกเล่า", sub: "→ tag ปฏิเสธ", color: "blue", body: "She **likes** coffee, **doesn't she**?" },
                { word: "ปฏิเสธ", sub: "→ tag บอกเล่า", color: "secondary", body: "She **doesn't like** coffee, **does she**?" }
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "She **doesn't like** coffee, **does she**?", th: "เธอไม่ชอบกาแฟ ใช่ไหม" },
                { en: "They **didn't go** to the party, **did they**?", th: "พวกเขาไม่ได้ไปงานปาร์ตี้ ใช่ไหม" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Modal อื่นๆ & Was/Were",
      cards: [
        {
          title: "Will, Should, Must",
          icon: "⚙️",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["Modal", "Question Tag", "ตัวอย่าง"],
              rows: [
                ["will", "won't + S?", "You **will help** me, **won't you**?"],
                ["should", "shouldn't + S?", "We **should leave** now, **shouldn't we**?"],
                ["must", "mustn't + S?", "You **must finish** this, **mustn't you**?"]
              ]
            }
          ]
        },
        {
          title: "Was/Were (Past Simple ของ verb to be)",
          icon: "⏮️",
          blocks: [
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประธาน", "Verb to be", "Question Tag"],
              rows: [
                ["He/She/It", "was", "**wasn't he/she/it?**"],
                ["You/We/They", "were", "**weren't you/we/they?**"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "She **was** tired, **wasn't she**?", th: "เธอเหนื่อย ใช่ไหม" },
                { en: "They **were** happy, **weren't they**?", th: "พวกเขามีความสุข ใช่ไหม" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "doesn't/don't", color: "blue" },
                { text: "didn't", color: "blue" },
                { text: "won't/shouldn't/mustn't", color: "secondary" },
                { text: "wasn't/weren't", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She likes coffee, ___?",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "☕",
      options: ["does she", "doesn't she", "isn't she", "is she"],
      answer: "doesn't she",
      explanation: "Present Simple บอกเล่า (likes) → tag ปฏิเสธ (doesn't she)"
    },
    {
      sentence: "They went to school, ___?",
      tag: "Past Simple",
      tagColor: "blue",
      emoji: "🏫",
      options: ["went they", "didn't they", "did they", "weren't they"],
      answer: "didn't they",
      explanation: "Past Simple บอกเล่า (went) → tag ปฏิเสธ (didn't they)"
    },
    {
      sentence: "She doesn't like coffee, ___?",
      tag: "Negative",
      tagColor: "secondary",
      emoji: "🚫",
      options: ["doesn't she", "does she", "isn't she", "is she"],
      answer: "does she",
      explanation: "ประโยคปฏิเสธ (doesn't like) → tag บอกเล่า (does she)"
    },
    {
      sentence: "You will help me, ___?",
      tag: "Modal",
      tagColor: "secondary",
      emoji: "🤝",
      options: ["will you", "won't you", "do you", "don't you"],
      answer: "won't you",
      explanation: "will บอกเล่า → tag ปฏิเสธ (won't you)"
    },
    {
      sentence: "They were happy, ___?",
      tag: "Was/Were",
      tagColor: "amber",
      emoji: "😊",
      options: ["were they", "weren't they", "was they", "wasn't they"],
      answer: "weren't they",
      explanation: "were บอกเล่า → tag ปฏิเสธ (weren't they)"
    }
  ]
};
