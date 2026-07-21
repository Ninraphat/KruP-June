const CONTENT = {
  title: "Question Tags",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "🎓",
  subtitle: "Perfect Tenses, ข้อยกเว้นพิเศษ, Negative Words และ Intonation",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Question Tag กับ Perfect Tenses",
      cards: [
        {
          title: "Has/Have/Had",
          icon: "⏮️",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประโยคหลักเป็น **Perfect Tense** (has/have/had + V3) ใช้ตัวช่วยเดิมสร้าง Question Tag"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "Question Tag", "ตัวอย่าง"],
              rows: [
                ["Present Perfect", "haven't/hasn't + S?", "You **have finished**, **haven't you**?"],
                ["Past Perfect", "hadn't + S?", "She **had left** before we arrived, **hadn't she**?"]
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ ข้อยกเว้นพิเศษ",
      cards: [
        {
          title: "I am, Let's, Imperative",
          icon: "⚠️",
          blocks: [
            {
              type: "explanation",
              text: "มี Question Tag บางกรณีที่ **ไม่ตามกฎปกติ** ต้องจำเป็นกรณีพิเศษ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประโยคหลัก", "Question Tag", "ตัวอย่าง"],
              rows: [
                ["I am...", "aren't I?", "I **am** late, **aren't I**?"],
                ["Let's...", "shall we?", "**Let's** go, **shall we**?"],
                ["Imperative (คำสั่ง)", "will you?", "**Close** the door, **will you**?"]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "จำง่ายๆ: **I am → aren't I** (ไม่ใช่ am not I ที่ออกเสียงยาก), **Let's → shall we**, **คำสั่ง → will you**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Negative Words & Intonation",
      cards: [
        {
          title: "Never, Nothing, No One",
          icon: "🚫",
          blocks: [
            {
              type: "explanation",
              text: "ประโยคที่มีคำแฝงความหมายปฏิเสธ เช่น **never, nothing, no one, hardly** ถือเป็น **ประโยคปฏิเสธ** ดังนั้น Question Tag ต้องเป็น **บอกเล่า**"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "She **never lies**, **does she**?", th: "เธอไม่เคยโกหก ใช่ไหม" },
                { en: "**Nothing** happened, **did it**?", th: "ไม่มีอะไรเกิดขึ้น ใช่ไหม" },
                { en: "**No one** called, **did they**?", th: "ไม่มีใครโทรมา ใช่ไหม" }
              ]
            }
          ]
        },
        {
          title: "Intonation: Rising vs Falling",
          icon: "🎵",
          blocks: [
            {
              type: "explanation",
              text: "เสียงสูง-ต่ำของ Question Tag เปลี่ยนความหมาย: **เสียงขึ้น (Rising)** = ถามจริงเพราะไม่แน่ใจ ส่วน **เสียงลง (Falling)** = ยืนยัน/ขอความเห็นด้วย"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Rising ⬆️", sub: "ถามจริง (ไม่แน่ใจ)", color: "blue", body: "You're coming, **aren't you**? ⬆️\n\n(ไม่แน่ใจ ถามจริงๆ)" },
                { word: "Falling ⬇️", sub: "ยืนยัน (มั่นใจ)", color: "secondary", body: "It's cold today, **isn't it**? ⬇️\n\n(มั่นใจ แค่ขอความเห็นด้วย)" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "haven't/hasn't", color: "blue" },
                { text: "aren't I / shall we / will you", color: "secondary" },
                { text: "never → does she", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "You have finished, ___?",
      tag: "Perfect",
      tagColor: "blue",
      emoji: "✅",
      options: ["have you", "haven't you", "did you", "didn't you"],
      answer: "haven't you",
      explanation: "have บอกเล่า → tag ปฏิเสธ (haven't you)"
    },
    {
      sentence: "I am late, ___?",
      tag: "Exception",
      tagColor: "secondary",
      emoji: "⏰",
      options: ["am I not", "amn't I", "aren't I", "isn't I"],
      answer: "aren't I",
      explanation: "ข้อยกเว้นพิเศษ: I am ใช้ aren't I เป็น tag"
    },
    {
      sentence: "Let's go, ___?",
      tag: "Exception",
      tagColor: "secondary",
      emoji: "🚶",
      options: ["shall we", "will we", "don't we", "aren't we"],
      answer: "shall we",
      explanation: "ข้อยกเว้นพิเศษ: Let's ใช้ shall we เป็น tag"
    },
    {
      sentence: "Close the door, ___?",
      tag: "Imperative",
      tagColor: "amber",
      emoji: "🚪",
      options: ["do you", "will you", "aren't you", "don't you"],
      answer: "will you",
      explanation: "ประโยคคำสั่ง (Imperative) ใช้ will you เป็น tag"
    },
    {
      sentence: "She never lies, ___?",
      tag: "Negative Word",
      tagColor: "purple",
      emoji: "🤥",
      options: ["does she", "doesn't she", "is she", "isn't she"],
      answer: "does she",
      explanation: "never เป็นคำแฝงความหมายปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
    }
  ]
};
