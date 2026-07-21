const CONTENT = {
  title: "Conditional Sentences",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🎓",
  subtitle: "Second/Third Conditional, Mixed Conditionals และ Wish/If only",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Second Conditional",
      cards: [
        {
          title: "สมมติที่ไม่จริงในปัจจุบัน",
          icon: "💭",
          blocks: [
            {
              type: "explanation",
              text: "**Second Conditional** ใช้พูดถึงสถานการณ์ **สมมติที่ตรงข้ามกับความจริงในปัจจุบัน** หรือ **ไม่น่าจะเกิดขึ้นได้จริง** โครงสร้างคือ **If + Past Simple, would + V1**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["If-clause", "Main clause"],
              rows: [
                ["If + Past Simple", "would + V1"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**If** I **had** more time, I **would travel** the world.", th: "ถ้าฉันมีเวลามากกว่านี้ ฉันจะไปเที่ยวรอบโลก (แต่ตอนนี้ไม่มีเวลา)" },
                { en: "**If** I **were** rich, I **would buy** a big house.", th: "ถ้าฉันรวย ฉันจะซื้อบ้านหลังใหญ่ (แต่ตอนนี้ไม่รวย)" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ข้อสังเกต: ใช้ **were** แทน **was** กับทุกประธานใน If-clause ของ Second Conditional (formal/standard form)"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Third Conditional",
      cards: [
        {
          title: "สมมติในอดีตที่ไม่เกิดขึ้นจริง",
          icon: "⏮️",
          blocks: [
            {
              type: "explanation",
              text: "**Third Conditional** ใช้พูดถึงสถานการณ์ **สมมติในอดีตที่ไม่ได้เกิดขึ้นจริง** มักแสดงความ **เสียใจ/เสียดาย** โครงสร้างคือ **If + Past Perfect, would have + V3**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["If-clause", "Main clause"],
              rows: [
                ["If + Past Perfect", "would have + V3"]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "**If** she **had studied** harder, she **would have passed** the exam.", th: "ถ้าเธอตั้งใจเรียนมากกว่านี้ เธอจะสอบผ่าน (แต่เธอไม่ได้ตั้งใจ และสอบตก)" },
                { en: "**If** I **had known** about the party, I **would have come**.", th: "ถ้าฉันรู้เรื่องปาร์ตี้ ฉันจะมา (แต่ฉันไม่รู้ เลยไม่ได้มา)" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ เปรียบเทียบ 4 แบบ & Wish/If only",
      cards: [
        {
          title: "สรุป Conditional ทั้ง 4 แบบ",
          icon: "🔍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Zero", sub: "ข้อเท็จจริงเสมอ", color: "blue", body: "If + Present, Present\n\nIf you heat ice, it melts." },
                { word: "First", sub: "เป็นไปได้ในอนาคต", color: "secondary", body: "If + Present, will + V1\n\nIf it rains, we'll stay home." },
                { word: "Second", sub: "สมมติไม่จริงปัจจุบัน", color: "purple", body: "If + Past, would + V1\n\nIf I had time, I'd travel." },
                { word: "Third", sub: "สมมติไม่จริงอดีต", color: "amber", body: "If + Past Perfect, would have + V3\n\nIf she had studied, she'd have passed." }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "🎯",
              title: "เทคนิคจำ",
              text: "ยิ่ง **Tense ถอยหลังมากเท่าไหร่** ยิ่งหมายถึงสถานการณ์ที่ **ไม่จริง/เป็นไปไม่ได้มากขึ้น**"
            }
          ]
        },
        {
          title: "Mixed Conditionals เบื้องต้น",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "**Mixed Conditionals** ผสมระหว่าง Second และ Third Conditional เมื่อ **เงื่อนไขในอดีต** ส่งผลต่อ **ผลลัพธ์ในปัจจุบัน**"
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "**If** I **had studied** medicine, I **would be** a doctor now.", th: "ถ้าฉันเรียนแพทย์ (ในอดีต) ตอนนี้ฉันคงเป็นหมอแล้ว" }
              ]
            }
          ]
        },
        {
          title: "Wish / If only",
          icon: "🌠",
          blocks: [
            {
              type: "explanation",
              text: "**Wish** และ **If only** ใช้แสดงความ **ปรารถนา/เสียดาย** โดยใช้โครงสร้างคล้าย conditional — Past Simple สำหรับปัจจุบัน, Past Perfect สำหรับอดีต"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["โครงสร้าง", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                ["wish + Past Simple", "ปรารถนาสิ่งที่ต่างจากปัจจุบัน", "I **wish** I **had** more free time."],
                ["wish + Past Perfect", "เสียดายสิ่งที่ผ่านไปแล้ว", "I **wish** I **had studied** harder."]
              ]
            },
            {
              type: "pills",
              items: [
                { text: "I wish...", color: "blue" },
                { text: "If only...", color: "secondary" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "If I ___ more time, I would travel the world.",
      tag: "Second Conditional",
      tagColor: "blue",
      emoji: "🌍",
      options: ["have", "had", "will have", "would have"],
      answer: "had",
      explanation: "Second Conditional: If + Past Simple, would + V1"
    },
    {
      sentence: "If she had studied harder, she ___ the exam.",
      tag: "Third Conditional",
      tagColor: "secondary",
      emoji: "📝",
      options: ["would pass", "would have passed", "passed", "will pass"],
      answer: "would have passed",
      explanation: "Third Conditional: If + Past Perfect, would have + V3"
    },
    {
      sentence: "If I ___ rich, I would buy a big house.",
      tag: "Second Conditional",
      tagColor: "blue",
      emoji: "🏠",
      options: ["am", "was", "were", "will be"],
      answer: "were",
      explanation: "Second Conditional formal form ใช้ were กับทุกประธาน"
    },
    {
      sentence: "If I had known about the party, I ___ come.",
      tag: "Third Conditional",
      tagColor: "secondary",
      emoji: "🎉",
      options: ["would", "would have", "will", "had"],
      answer: "would have",
      explanation: "Third Conditional main clause: would have + V3 (came)"
    },
    {
      sentence: "I wish I ___ harder for the test last week.",
      tag: "Wish",
      tagColor: "purple",
      emoji: "🌠",
      options: ["study", "studied", "had studied", "would study"],
      answer: "had studied",
      explanation: "wish + Past Perfect ใช้แสดงความเสียดายต่อเหตุการณ์ในอดีต"
    }
  ]
};
