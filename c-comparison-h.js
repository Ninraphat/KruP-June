const CONTENT = {
  title: "Comparison",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "Double Comparative, Comparison เชิงสัดส่วน และ Comparison ขั้นสูง",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Double Comparative",
      cards: [
        {
          title: "ยิ่ง...ยิ่ง...",
          icon: "📈",
          blocks: [
            {
              type: "explanation",
              text: "**Double Comparative** (the + comparative..., the + comparative...) ใช้แสดงว่า **สองสิ่งเปลี่ยนแปลงไปพร้อมกัน** แปลว่า **\"ยิ่ง...ยิ่ง...\"**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["The + comparative + S+V, the + comparative + S+V", "**The more** you practice, **the better** you become."],
                ["ตัวอย่างอื่น", "**The harder** you work, **the more** you earn."]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**The more** you practice, **the better** you become.", th: "ยิ่งฝึกฝนมากเท่าไหร่ ก็ยิ่งเก่งขึ้นเท่านั้น" },
                { en: "**The older** I get, **the wiser** I become.", th: "ยิ่งฉันอายุมากขึ้น ฉันก็ยิ่งฉลาดขึ้น" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Comparison เชิงสัดส่วน",
      cards: [
        {
          title: "Twice/Three Times As...As",
          icon: "📐",
          blocks: [
            {
              type: "explanation",
              text: "ใช้บอก **สัดส่วน/จำนวนเท่า** ในการเปรียบเทียบ โครงสร้างคือ **[จำนวนเท่า] as + adjective + as**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["twice as...as", "สองเท่า", "This year's sales are **twice as high as** last year's."],
                ["three times as...as", "สามเท่า", "The new phone is **three times as expensive as** the old one."],
                ["half as...as", "ครึ่งหนึ่ง", "This box is **half as heavy as** that one."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "This year's sales are **twice as high as** last year's.", th: "ยอดขายปีนี้สูงเป็นสองเท่าของปีที่แล้ว" }
              ]
            }
          ]
        },
        {
          title: "Comparative + and + Comparative",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "การซ้ำ comparative ด้วย **and** ใช้แสดงว่าสิ่งนั้น **เปลี่ยนแปลงอย่างต่อเนื่อง**"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "The weather is getting **colder and colder**.", th: "อากาศกำลังหนาวขึ้นเรื่อยๆ" },
                { en: "Life is becoming **more and more** difficult.", th: "ชีวิตกำลังยากขึ้นเรื่อยๆ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Comparison ขั้นสูงผสม Clause",
      cards: [
        {
          title: "Than Expected / Than I Thought",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "Comparison สามารถผสมกับ clause เพื่อบอกว่าผลลัพธ์ **ต่างจากที่คาดการณ์ไว้**"
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "The exam was **easier than I expected**.", th: "ข้อสอบง่ายกว่าที่ฉันคาดไว้" },
                { en: "The trip was **more expensive than we thought**.", th: "ทริปนี้แพงกว่าที่เราคิดไว้" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "the more...the more", color: "blue" },
                { text: "twice as...as", color: "secondary" },
                { text: "colder and colder", color: "amber" },
                { text: "than expected", color: "purple" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "The more you practice, ___ you become.",
      tag: "Double Comparative",
      tagColor: "blue",
      emoji: "🎯",
      options: ["better", "the better", "best", "the best"],
      answer: "the better",
      explanation: "Double Comparative ต้องมี the นำหน้าทั้งสองส่วน"
    },
    {
      sentence: "This year's sales are ___ high as last year's.",
      tag: "Proportion",
      tagColor: "secondary",
      emoji: "📈",
      options: ["twice as", "twice than", "two times than", "double than"],
      answer: "twice as",
      explanation: "twice as...as ใช้บอกสัดส่วนสองเท่า"
    },
    {
      sentence: "The weather is getting ___.",
      tag: "Continuous Change",
      tagColor: "amber",
      emoji: "🌡️",
      options: ["cold and cold", "colder and colder", "more cold", "coldest"],
      answer: "colder and colder",
      explanation: "Comparative + and + Comparative แสดงการเปลี่ยนแปลงต่อเนื่อง"
    },
    {
      sentence: "The exam was easier ___ I expected.",
      tag: "Clause Comparison",
      tagColor: "purple",
      emoji: "📝",
      options: ["as", "than", "that", "then"],
      answer: "than",
      explanation: "Comparison ผสม clause ใช้ than เชื่อมประโยค"
    },
    {
      sentence: "This box is ___ heavy as that one. (half)",
      tag: "Proportion",
      tagColor: "secondary",
      emoji: "📦",
      options: ["half as", "half than", "half of", "one half"],
      answer: "half as",
      explanation: "half as...as ใช้บอกสัดส่วนครึ่งหนึ่ง"
    }
  ]
};
