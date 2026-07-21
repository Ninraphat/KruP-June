const CONTENT = {
  title: "Conjunctions",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🔗",
  subtitle: "เรียนรู้คำเชื่อม And, But, Or, So แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ And & But",
      cards: [
        {
          title: "And (และ) & But (แต่)",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**And** ใช้เชื่อมสิ่งที่ **เพิ่มเติมกัน** ส่วน **But** ใช้เชื่อมสิ่งที่ **ตรงข้ามกัน**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำเชื่อม", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["and", "และ (เพิ่มเติม)", "I like apples **and** bananas."],
                ["but", "แต่ (ตรงข้าม)", "I like apples **but** not bananas."]
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
                { en: "I like apples **and** bananas.", th: "ฉันชอบแอปเปิ้ลและกล้วย" },
                { en: "She is small **but** strong.", th: "เธอตัวเล็กแต่แข็งแรง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Or & So",
      cards: [
        {
          title: "Or (หรือ) & So (ดังนั้น)",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "**Or** ใช้เชื่อมเมื่อมี **ทางเลือก** ส่วน **So** ใช้บอก **ผลลัพธ์** ที่ตามมา"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["คำเชื่อม", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["or", "หรือ (ทางเลือก)", "Do you want tea **or** coffee?"],
                ["so", "ดังนั้น (ผลลัพธ์)", "She is tired, **so** she wants to sleep."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "so ใช้บอก **ผลลัพธ์** ที่เกิดจากเหตุการณ์ก่อนหน้า มักมี **comma (,)** ก่อน so"
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
                { en: "Do you want tea **or** coffee?", th: "เธอต้องการชาหรือกาแฟ" },
                { en: "It was raining, **so** we stayed home.", th: "ฝนตก ดังนั้นเราจึงอยู่บ้าน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ฝึกใช้คำเชื่อมทั้ง 4 คำ",
      cards: [
        {
          title: "สรุป And/But/Or/So",
          icon: "🎯",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "and", sub: "เพิ่มเติม", color: "blue", body: "I have a cat **and** a dog." },
                { word: "but", sub: "ตรงข้าม", color: "secondary", body: "I have a cat **but** no dog." },
                { word: "or", sub: "ทางเลือก", color: "amber", body: "Do you want a cat **or** a dog?" },
                { word: "so", sub: "ผลลัพธ์", color: "purple", body: "I love animals, **so** I have many pets." }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "and", color: "blue" },
                { text: "but", color: "secondary" },
                { text: "or", color: "amber" },
                { text: "so", color: "purple" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I like apples ___ bananas.",
      tag: "And",
      tagColor: "blue",
      emoji: "🍎",
      options: ["and", "but", "or", "so"],
      answer: "and",
      explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
    },
    {
      sentence: "She is small ___ strong.",
      tag: "But",
      tagColor: "secondary",
      emoji: "💪",
      options: ["and", "but", "or", "so"],
      answer: "but",
      explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน"
    },
    {
      sentence: "Do you want tea ___ coffee?",
      tag: "Or",
      tagColor: "amber",
      emoji: "☕",
      options: ["and", "but", "or", "so"],
      answer: "or",
      explanation: "or ใช้เชื่อมเมื่อมีทางเลือก"
    },
    {
      sentence: "It was raining, ___ we stayed home.",
      tag: "So",
      tagColor: "purple",
      emoji: "🌧️",
      options: ["and", "but", "or", "so"],
      answer: "so",
      explanation: "so ใช้บอกผลลัพธ์ที่ตามมา"
    },
    {
      sentence: "I have a cat ___ a dog.",
      tag: "And",
      tagColor: "blue",
      emoji: "🐱",
      options: ["and", "but", "or", "so"],
      answer: "and",
      explanation: "and ใช้เชื่อมสองสิ่งที่มีเพิ่มเติมกัน"
    }
  ]
};
