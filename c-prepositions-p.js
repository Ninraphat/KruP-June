const CONTENT = {
  title: "Prepositions",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "📍",
  subtitle: "เรียนรู้ Preposition of Place และ Time แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Preposition of Place",
      cards: [
        {
          title: "บอกตำแหน่ง",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Preposition of Place** ใช้บอก **ตำแหน่ง/ที่อยู่** ของสิ่งของหรือคน เช่น in, on, at, under, next to, between"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Preposition", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["in", "ข้างใน", "The cat is **in** the box."],
                ["on", "บนพื้นผิว", "The book is **on** the table."],
                ["under", "ข้างใต้", "The cat is **under** the table."],
                ["next to", "ข้างๆ", "She sits **next to** me."],
                ["between", "ระหว่างกลาง", "The ball is **between** the two chairs."]
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
                { en: "The cat is **under** the table.", th: "แมวอยู่ใต้โต๊ะ" },
                { en: "My pencil case is **on** the desk.", th: "กล่องดินสอของฉันอยู่บนโต๊ะ" },
                { en: "The park is **between** the school and my house.", th: "สวนสาธารณะอยู่ระหว่างโรงเรียนกับบ้านของฉัน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Preposition of Time",
      cards: [
        {
          title: "บอกเวลา",
          icon: "🕐",
          blocks: [
            {
              type: "explanation",
              text: "**Preposition of Time** ใช้บอก **เมื่อไหร่** เหตุการณ์เกิดขึ้น — ใช้ **in** กับเดือน/ปี, **on** กับวัน, **at** กับเวลา"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Preposition", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                ["in", "เดือน/ปี/ฤดูกาล", "My birthday is **in** June."],
                ["on", "วัน/วันที่", "We have PE **on** Monday."],
                ["at", "เวลา", "School starts **at** 8 o'clock."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "จำง่ายๆ: **in** = เดือน/ปี (ใหญ่), **on** = วัน (กลาง), **at** = เวลา (เล็ก/แม่นยำ)"
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
                { en: "My birthday is **in** June.", th: "วันเกิดของฉันอยู่ในเดือนมิถุนายน" },
                { en: "We have PE **on** Monday.", th: "เรามีวิชาพลศึกษาวันจันทร์" },
                { en: "School starts **at** 8 o'clock.", th: "โรงเรียนเริ่มตอน 8 โมง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ฝึกใช้ In/On/At",
      cards: [
        {
          title: "สรุป In/On/At",
          icon: "🎯",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Place", sub: "ตำแหน่ง", color: "blue", body: "**in** the box\n\n**on** the table\n\n**under** the chair" },
                { word: "Time", sub: "เวลา", color: "secondary", body: "**in** June\n\n**on** Monday\n\n**at** 8 o'clock" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "in", color: "blue" },
                { text: "on", color: "secondary" },
                { text: "at", color: "amber" },
                { text: "under", color: "blue" },
                { text: "next to", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "The cat is ___ the table.",
      tag: "Place",
      tagColor: "blue",
      emoji: "🐱",
      options: ["under", "in", "on", "at"],
      answer: "under",
      explanation: "under ใช้บอกตำแหน่งข้างใต้"
    },
    {
      sentence: "My birthday is ___ June.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "🎂",
      options: ["in", "on", "at", "under"],
      answer: "in",
      explanation: "in ใช้กับเดือน"
    },
    {
      sentence: "We have PE ___ Monday.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "📅",
      options: ["in", "on", "at", "next to"],
      answer: "on",
      explanation: "on ใช้กับวัน"
    },
    {
      sentence: "School starts ___ 8 o'clock.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "⏰",
      options: ["in", "on", "at", "between"],
      answer: "at",
      explanation: "at ใช้กับเวลา"
    },
    {
      sentence: "The book is ___ the table.",
      tag: "Place",
      tagColor: "blue",
      emoji: "📖",
      options: ["on", "under", "next", "at"],
      answer: "on",
      explanation: "on ใช้บอกตำแหน่งบนพื้นผิว"
    }
  ]
};
