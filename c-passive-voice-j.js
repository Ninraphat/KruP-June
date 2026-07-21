const CONTENT = {
  title: "Passive Voice",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🔄",
  subtitle: "Passive Voice ใน Present Simple, Past Simple และ Present Continuous",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน Passive Voice",
      cards: [
        {
          title: "Active vs Passive",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**Active Voice** เน้นว่า **ใครทำ** ส่วน **Passive Voice** เน้นว่า **สิ่งใดถูกทำ** โครงสร้างพื้นฐานคือ **verb to be + V3**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Active", sub: "ประธานเป็นผู้กระทำ", color: "blue", body: "A famous author **wrote** this book." },
                { word: "Passive", sub: "ประธานถูกกระทำ", color: "secondary", body: "This book **was written** by a famous author." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Passive ในแต่ละ Tense",
      cards: [
        {
          title: "โครงสร้าง Passive 3 Tense",
          icon: "🔧",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง Passive", "ตัวอย่าง"],
              rows: [
                ["Present Simple", "is/am/are + V3", "This room **is cleaned** every day."],
                ["Past Simple", "was/were + V3", "This book **was written** by a famous author."],
                ["Present Continuous", "is/am/are + being + V3", "The house **is being painted** now."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "จุดสังเกต: **Present Continuous Passive** ต้องมีคำว่า **being** แทรกก่อน V3 เสมอ"
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "This book **was written** by a famous author.", th: "หนังสือเล่มนี้ถูกเขียนโดยนักเขียนที่มีชื่อเสียง" },
                { en: "The house **is being painted** now.", th: "บ้านหลังนี้กำลังถูกทาสีอยู่ตอนนี้" },
                { en: "English **is spoken** in many countries.", th: "ภาษาอังกฤษถูกใช้พูดในหลายประเทศ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ การแปลง Active → Passive",
      cards: [
        {
          title: "ขั้นตอนการแปลงประโยค",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "การแปลง Active เป็น Passive มี **3 ขั้นตอน**: 1) นำกรรมมาเป็นประธาน 2) เปลี่ยนกริยาเป็น verb to be + V3 3) ใส่ by + ผู้กระทำเดิม (ถ้าจำเป็น)"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ขั้นตอน", "Active", "Passive"],
              rows: [
                ["1. กรรม → ประธาน", "**The chef** cooks **the meal**.", "**The meal** is cooked..."],
                ["2. กริยา → be + V3", "cooks", "is **cooked**"],
                ["3. by + ผู้กระทำเดิม", "The chef", "**by the chef**"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "Active: **The chef cooks the meal.**", th: "เชฟทำอาหาร" },
                { en: "Passive: **The meal is cooked by the chef.**", th: "อาหารถูกทำโดยเชฟ" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "เมื่อไหร่ต้องใส่ by + ผู้กระทำ?",
              text: "ใส่เมื่อ **ผู้กระทำสำคัญ/น่าสนใจ** เช่น ชื่อคนดัง แต่ถ้าผู้กระทำ **ไม่สำคัญหรือไม่รู้** (someone, they) มักละไว้"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "This room ___ every day.",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "🧹",
      options: ["clean", "cleans", "is cleaned", "was cleaned"],
      answer: "is cleaned",
      explanation: "Present Simple Passive: is/am/are + V3"
    },
    {
      sentence: "This novel ___ by a famous writer in 1990.",
      tag: "Past Simple",
      tagColor: "secondary",
      emoji: "📖",
      options: ["wrote", "was written", "is written", "writes"],
      answer: "was written",
      explanation: "Past Simple Passive: was/were + V3 พร้อมเวลาระบุในอดีต"
    },
    {
      sentence: "The bridge ___ right now.",
      tag: "Present Continuous",
      tagColor: "amber",
      emoji: "🌉",
      options: ["is built", "is being built", "was built", "builds"],
      answer: "is being built",
      explanation: "Present Continuous Passive: is/am/are + being + V3"
    },
    {
      sentence: "Active: The workers built the bridge. → Passive: The bridge ___ by the workers.",
      tag: "Conversion",
      tagColor: "purple",
      emoji: "🔀",
      options: ["built", "was built", "is built", "builds"],
      answer: "was built",
      explanation: "แปลงจาก Active (built) เป็น Passive: was/were + V3"
    },
    {
      sentence: "This cake ___ by my grandmother.",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "🎂",
      options: ["is made", "made", "was made", "make"],
      answer: "is made",
      explanation: "Present Simple Passive: is + V3 เพราะเป็นข้อเท็จจริงทั่วไป"
    }
  ]
};
