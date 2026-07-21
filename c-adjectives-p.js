const CONTENT = {
  title: "Adjectives",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎨",
  subtitle: "เรียนรู้คำคุณศัพท์และการเปรียบเทียบแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Adjective คืออะไร?",
      cards: [
        {
          title: "คำที่บอกลักษณะ",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Adjective (คำคุณศัพท์)** คือคำที่ใช้บอก **ลักษณะ สี ขนาด รูปร่าง** ของคำนาม เช่น big, small, red, tall"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ตำแหน่ง", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["หน้าคำนาม", "adjective + noun", "a **big** dog"],
                ["หลัง verb to be", "S + is/am/are + adjective", "The dog **is big**."]
              ]
            },
            {
              type: "pills",
              items: [
                { text: "big", color: "blue" },
                { text: "small", color: "blue" },
                { text: "red", color: "secondary" },
                { text: "tall", color: "amber" }
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
              borderColor: "blue",
              items: [
                { en: "She has a **big** dog.", th: "เธอมีสุนัขตัวใหญ่" },
                { en: "The ball is **red**.", th: "ลูกบอลเป็นสีแดง" },
                { en: "He is a **tall** boy.", th: "เขาเป็นเด็กผู้ชายตัวสูง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Comparative (การเปรียบเทียบ)",
      cards: [
        {
          title: "-er และ more",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเปรียบเทียบ **สองสิ่ง** เราใช้ **Comparative** — คำสั้นเติม **-er** ส่วนคำยาวใช้ **more** นำหน้า"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประเภท", "กฎ", "ตัวอย่าง"],
              rows: [
                ["คำสั้น", "adjective + er", "tall → **taller**"],
                ["คำยาว", "more + adjective", "interesting → **more interesting**"]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "This book is **more interesting** than that one.", th: "หนังสือเล่มนี้น่าสนใจกว่าเล่มนั้น" },
                { en: "My brother is **taller** than me.", th: "พี่ชายของฉันสูงกว่าฉัน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Superlative (ขั้นสุด)",
      cards: [
        {
          title: "-est และ most",
          icon: "🏆",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเปรียบเทียบ **มากกว่าสองสิ่งขึ้นไป** และบอกว่าอันไหน **ที่สุด** เราใช้ **Superlative** — คำสั้นเติม **-est** ส่วนคำยาวใช้ **most** นำหน้า และต้องมี **the** นำหน้าเสมอ"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภท", "กฎ", "ตัวอย่าง"],
              rows: [
                ["คำสั้น", "the + adjective + est", "tall → **the tallest**"],
                ["คำยาว", "the most + adjective", "interesting → **the most interesting**"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "He is **the tallest** boy in class.", th: "เขาเป็นเด็กผู้ชายที่สูงที่สุดในห้อง" },
                { en: "This is **the most beautiful** flower.", th: "นี่คือดอกไม้ที่สวยที่สุด" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "[hl:blue]Comparative[/hl] เปรียบเทียบ **2 สิ่ง** — [hl:secondary]Superlative[/hl] เปรียบเทียบ **มากกว่า 2 สิ่ง** และต้องมี **the** นำหน้า"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She has a ___ dog.",
      tag: "Adjective",
      tagColor: "blue",
      emoji: "🐕",
      options: ["big", "bigly", "bigger", "biggest"],
      answer: "big",
      explanation: "adjective พื้นฐานวางหน้าคำนามได้เลย"
    },
    {
      sentence: "My brother is ___ than me.",
      tag: "Comparative",
      tagColor: "secondary",
      emoji: "📏",
      options: ["tall", "taller", "tallest", "more tall"],
      answer: "taller",
      explanation: "คำสั้นเติม -er เพื่อเปรียบเทียบ 2 สิ่ง"
    },
    {
      sentence: "This book is ___ than that one.",
      tag: "Comparative",
      tagColor: "secondary",
      emoji: "📚",
      options: ["interesting", "interestinger", "more interesting", "most interesting"],
      answer: "more interesting",
      explanation: "คำยาวใช้ more นำหน้าเพื่อเปรียบเทียบ"
    },
    {
      sentence: "He is ___ boy in class.",
      tag: "Superlative",
      tagColor: "amber",
      emoji: "🏆",
      options: ["the taller", "the tallest", "taller", "tall"],
      answer: "the tallest",
      explanation: "Superlative ต้องมี the นำหน้า และเติม -est"
    },
    {
      sentence: "This is ___ flower in the garden.",
      tag: "Superlative",
      tagColor: "amber",
      emoji: "🌸",
      options: ["more beautiful", "the most beautiful", "beautiful", "the beautiful"],
      answer: "the most beautiful",
      explanation: "คำยาวใช้ the most นำหน้าสำหรับ Superlative"
    }
  ]
};
