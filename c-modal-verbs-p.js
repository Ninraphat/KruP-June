const CONTENT = {
  title: "Modal Verbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🗝️",
  subtitle: "เรียนรู้ Can และ Must แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Can (ความสามารถ)",
      cards: [
        {
          title: "Can คืออะไร?",
          icon: "💪",
          blocks: [
            {
              type: "explanation",
              text: "**Can** ใช้บอกว่า **ทำอะไรได้/เก่งอะไร** (ability) โครงสร้างคือ **can + V1** กริยาหลังจาก can **ไม่ผัน** ไม่ว่าประธานจะเป็นใคร"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["รูปประโยค", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["บอกเล่า", "S + can + V1", "I **can swim**."],
                ["ปฏิเสธ", "S + can't + V1", "I **can't fly**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "จำง่ายๆ: หลัง can/can't กริยาเป็น **V1 เสมอ** ไม่เติม s แม้ประธานจะเป็น he/she/it"
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
                { en: "I **can swim**.", th: "ฉันว่ายน้ำได้" },
                { en: "She **can play** the piano.", th: "เธอเล่นเปียโนได้" },
                { en: "I **can't fly**.", th: "ฉันบินไม่ได้" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Can (ขออนุญาต)",
      cards: [
        {
          title: "Can สำหรับขออนุญาต",
          icon: "🙋",
          blocks: [
            {
              type: "explanation",
              text: "นอกจากบอกความสามารถ **Can** ยังใช้ **ขออนุญาต** ทำสิ่งใดสิ่งหนึ่งได้ด้วย"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "**Can I** go to the toilet?", th: "ฉันขอไปห้องน้ำได้ไหม" },
                { en: "**Can I** borrow your pencil?", th: "ฉันขอยืมดินสอเธอได้ไหม" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "เมื่อขออนุญาต เราขึ้นต้นประโยคด้วย **Can I...?**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Must (ข้อบังคับ)",
      cards: [
        {
          title: "Must คืออะไร?",
          icon: "⚠️",
          blocks: [
            {
              type: "explanation",
              text: "**Must** ใช้บอกว่า **ต้องทำ** สิ่งใดสิ่งหนึ่ง เป็นกฎหรือข้อบังคับที่สำคัญ โครงสร้างคือ **must + V1**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["ทุกประธาน", "must + V1", "You **must wear** a helmet."]
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              text: "must ใช้เหมือนกันกับทุกประธาน ไม่ต้องเติม s หรือเปลี่ยนรูป"
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "You **must wear** a helmet.", th: "เธอต้องใส่หมวกกันน็อค" },
                { en: "Students **must be** quiet in the library.", th: "นักเรียนต้องเงียบในห้องสมุด" },
                { en: "We **must wash** our hands before eating.", th: "เราต้องล้างมือก่อนกินข้าว" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "can + V1", color: "blue" },
                { text: "can't + V1", color: "secondary" },
                { text: "must + V1", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I ___ swim very well.",
      tag: "Can",
      tagColor: "blue",
      emoji: "🏊",
      options: ["can", "cans", "canning", "could"],
      answer: "can",
      explanation: "can ใช้บอกความสามารถ กริยาตามด้วย V1"
    },
    {
      sentence: "___ I go to the toilet, please?",
      tag: "Permission",
      tagColor: "secondary",
      emoji: "🙋",
      options: ["Can", "Must", "Do", "Am"],
      answer: "Can",
      explanation: "Can I...? ใช้ขออนุญาต"
    },
    {
      sentence: "You ___ wear a helmet when riding a bike.",
      tag: "Must",
      tagColor: "amber",
      emoji: "🪖",
      options: ["can", "must", "musts", "musting"],
      answer: "must",
      explanation: "must ใช้บอกข้อบังคับ"
    },
    {
      sentence: "She ___ play the piano beautifully.",
      tag: "Can",
      tagColor: "blue",
      emoji: "🎹",
      options: ["can", "cans", "canned", "could"],
      answer: "can",
      explanation: "can ใช้กับทุกประธาน ไม่เติม s"
    },
    {
      sentence: "I ___ fly like a bird.",
      tag: "Can Negative",
      tagColor: "secondary",
      emoji: "🐦",
      options: ["can", "can't", "must", "mustn't"],
      answer: "can't",
      explanation: "can't ใช้บอกว่าทำไม่ได้ (ไม่มีความสามารถ)"
    }
  ]
};
