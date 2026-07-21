const CONTENT = {
  title: "Adjectives",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎨",
  subtitle: "Comparative/Superlative ครบกฎ, Order of Adjectives, Participle Adjective และ As...As",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Comparative/Superlative ครบกฎ",
      cards: [
        {
          title: "กฎการเติม -er/-est",
          icon: "📐",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภทคำ", "Comparative", "Superlative"],
              rows: [
                ["คำสั้น (1 พยางค์)", "adjective + er", "the + adjective + est"],
                ["ลงท้าย e", "adjective + r", "the + adjective + st"],
                ["พยัญชนะ+y", "y → ier", "the + y → iest"],
                ["คำยาว (2+ พยางค์)", "more + adjective", "the most + adjective"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "This movie is **more boring** than that one.", th: "หนังเรื่องนี้น่าเบื่อกว่าเรื่องนั้น" },
                { en: "happy → **happier** → **the happiest**", th: "มีความสุข → มีความสุขกว่า → มีความสุขที่สุด" }
              ]
            }
          ]
        },
        {
          title: "Irregular Adjectives (คำผิดปกติ)",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "มี adjective บางคำที่ **ไม่ตามกฎปกติ** ต้องจำรูปพิเศษ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Adjective", "Comparative", "Superlative"],
              rows: [
                ["good", "better", "the best"],
                ["bad", "worse", "the worst"],
                ["far", "farther/further", "the farthest/furthest"]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "good/bad/far ไม่เติม -er/-est ต้องท่องจำรูปพิเศษ"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Order of Adjectives & As...As",
      cards: [
        {
          title: "ลำดับ Adjective เบื้องต้น",
          icon: "🔢",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อใช้ adjective หลายตัวขยายคำนามเดียวกัน มี **ลำดับที่แน่นอน**: **Opinion → Size → Age → Color**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ลำดับ", "ประเภท", "ตัวอย่าง"],
              rows: [
                ["1", "Opinion (ความคิดเห็น)", "beautiful, nice"],
                ["2", "Size (ขนาด)", "big, small"],
                ["3", "Age (อายุ)", "old, young, new"],
                ["4", "Color (สี)", "red, blue"]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "She has a **beautiful small old** house.", th: "เธอมีบ้านเก่าหลังเล็กที่สวยงาม" }
              ]
            }
          ]
        },
        {
          title: "As...As (เปรียบเทียบเท่ากัน)",
          icon: "⚖️",
          blocks: [
            {
              type: "explanation",
              text: "**as + adjective + as** ใช้เมื่อสองสิ่ง **เท่ากัน/เหมือนกัน** ในลักษณะนั้นๆ"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "My car is **as fast as** yours.", th: "รถของฉันเร็วเท่ากับรถของเธอ" },
                { en: "She is **as tall as** her brother.", th: "เธอสูงเท่ากับพี่ชายของเธอ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Participle Adjective (-ing/-ed)",
      cards: [
        {
          title: "-ing vs -ed",
          icon: "🎭",
          blocks: [
            {
              type: "explanation",
              text: "**-ing** ใช้อธิบาย **สิ่งที่ทำให้เกิดความรู้สึก** ส่วน **-ed** ใช้อธิบาย **คนที่รู้สึก**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "-ing", sub: "สิ่งที่ทำให้รู้สึก", color: "blue", body: "The movie is **boring**.\n\n(หนังทำให้รู้สึกน่าเบื่อ)" },
                { word: "-ed", sub: "คนที่รู้สึก", color: "secondary", body: "I am **bored**.\n\n(ฉันรู้สึกเบื่อ)" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "boring / bored", color: "blue" },
                { text: "interesting / interested", color: "blue" },
                { text: "exciting / excited", color: "secondary" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "This movie is ___ than that one.",
      tag: "Comparative",
      tagColor: "blue",
      emoji: "🎬",
      options: ["boring", "more boring", "most boring", "boringer"],
      answer: "more boring",
      explanation: "คำยาว (boring มี 2 พยางค์) ใช้ more นำหน้า"
    },
    {
      sentence: "My car is as ___ as yours.",
      tag: "As...As",
      tagColor: "amber",
      emoji: "🚗",
      options: ["fast", "faster", "fastest", "more fast"],
      answer: "fast",
      explanation: "as...as ใช้ adjective รูปเดิม ไม่เติม -er"
    },
    {
      sentence: "This restaurant is ___ than that one.",
      tag: "Irregular",
      tagColor: "secondary",
      emoji: "🍽️",
      options: ["gooder", "better", "best", "more good"],
      answer: "better",
      explanation: "good เป็น irregular adjective เปลี่ยนเป็น better"
    },
    {
      sentence: "She has a ___ house. (beautiful, small)",
      tag: "Order",
      tagColor: "purple",
      emoji: "🏠",
      options: ["small beautiful", "beautiful small", "small small beautiful", "beautifully small"],
      answer: "beautiful small",
      explanation: "ลำดับ Adjective: Opinion (beautiful) มาก่อน Size (small)"
    },
    {
      sentence: "The movie was so ___ that I fell asleep.",
      tag: "Participle",
      tagColor: "blue",
      emoji: "😴",
      options: ["boring", "bored", "bore", "bores"],
      answer: "boring",
      explanation: "-ing ใช้อธิบายสิ่งที่ทำให้เกิดความรู้สึกน่าเบื่อ"
    }
  ]
};
