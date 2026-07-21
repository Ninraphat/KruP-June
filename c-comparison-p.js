const CONTENT = {
  title: "Comparison",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "⚖️",
  subtitle: "เรียนรู้การเปรียบเทียบแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน Comparative & Superlative",
      cards: [
        {
          title: "Comparative: -er / more",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเปรียบเทียบ **สองสิ่ง** เราใช้ **Comparative** — คำสั้นเติม **-er** ส่วนคำยาวใช้ **more** นำหน้า ตามด้วย **than**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภท", "กฎ", "ตัวอย่าง"],
              rows: [
                ["คำสั้น", "adjective + er + than", "My bag is **bigger than** yours."],
                ["คำยาว", "more + adjective + than", "This book is **more interesting than** that one."]
              ]
            }
          ]
        },
        {
          title: "Superlative: -est / most",
          icon: "🏆",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเปรียบเทียบ **มากกว่าสองสิ่ง** และบอกว่าอันไหน **ที่สุด** ใช้ **the + -est** หรือ **the most**"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "He is **the tallest** boy in class.", th: "เขาเป็นเด็กที่สูงที่สุดในห้อง" },
                { en: "This is **the most beautiful** flower.", th: "นี่คือดอกไม้ที่สวยที่สุด" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ The Same As",
      cards: [
        {
          title: "การบอกว่าเหมือนกัน",
          icon: "🟰",
          blocks: [
            {
              type: "explanation",
              text: "**the same as** ใช้บอกว่าสองสิ่ง **เหมือนกัน** ไม่มีความแตกต่าง"
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "This is **the same as** that one.", th: "อันนี้เหมือนกับอันนั้น" },
                { en: "My shirt is **the same as** yours.", th: "เสื้อของฉันเหมือนกับของเธอ" }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "โครงสร้าง: **S + is/are + the same as + สิ่งที่เปรียบเทียบ**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ More / Less กับปริมาณ",
      cards: [
        {
          title: "More กับสิ่งของนับได้",
          icon: "🍎",
          blocks: [
            {
              type: "explanation",
              text: "**more** ใช้บอกว่ามี **มากกว่า** เมื่อพูดถึงจำนวนสิ่งของ"
            },
            {
              type: "table",
              headerColor: "amber",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["more + noun (plural)", "I have **more apples** than you."],
                ["less + noun", "She has **less water** than me."]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "I have **more apples** than you.", th: "ฉันมีแอปเปิ้ลมากกว่าเธอ" },
                { en: "He has **more toys** than his sister.", th: "เขามีของเล่นมากกว่าน้องสาว" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "-er / more", color: "blue" },
                { text: "-est / most", color: "secondary" },
                { text: "the same as", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "My bag is ___ than yours.",
      tag: "Comparative",
      tagColor: "blue",
      emoji: "🎒",
      options: ["big", "bigger", "biggest", "more big"],
      answer: "bigger",
      explanation: "คำสั้นเติม -er เพื่อเปรียบเทียบ 2 สิ่ง"
    },
    {
      sentence: "He is ___ boy in class.",
      tag: "Superlative",
      tagColor: "secondary",
      emoji: "🏆",
      options: ["tall", "taller", "the tallest", "more tall"],
      answer: "the tallest",
      explanation: "Superlative ต้องมี the นำหน้า และเติม -est"
    },
    {
      sentence: "This bag is ___ as that one.",
      tag: "Same As",
      tagColor: "amber",
      emoji: "🟰",
      options: ["same", "the same", "the same as", "similar"],
      answer: "the same as",
      explanation: "โครงสร้าง the same as ใช้บอกว่าเหมือนกัน"
    },
    {
      sentence: "I have ___ apples than you.",
      tag: "More",
      tagColor: "blue",
      emoji: "🍎",
      options: ["more", "most", "much", "many"],
      answer: "more",
      explanation: "more ใช้บอกจำนวนที่มากกว่าเมื่อเปรียบเทียบ"
    },
    {
      sentence: "This book is ___ than that one.",
      tag: "Comparative",
      tagColor: "blue",
      emoji: "📚",
      options: ["interesting", "more interesting", "most interesting", "interestinger"],
      answer: "more interesting",
      explanation: "คำยาวใช้ more นำหน้าเพื่อเปรียบเทียบ"
    }
  ]
};
