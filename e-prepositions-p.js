const EXERCISE = {
  title: "Prepositions",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "📍",
  subtitle: "ฝึกทำแบบฝึกหัด Preposition of Place และ Time แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-prepositions-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "The dog is ___ (in) the box.",
          tag: "Place",
          tagColor: "blue",
          answer: "in",
          explanation: "in ใช้บอกตำแหน่งข้างใน"
        },
        {
          sentence: "She sits ___ (next to) me in class.",
          tag: "Place",
          tagColor: "blue",
          answer: "next to",
          explanation: "next to ใช้บอกตำแหน่งข้างๆ"
        },
        {
          sentence: "We go swimming ___ (on) Saturday.",
          tag: "Time",
          tagColor: "secondary",
          answer: "on",
          explanation: "on ใช้กับวัน"
        },
        {
          sentence: "The party starts ___ (at) 6 o'clock.",
          tag: "Time",
          tagColor: "secondary",
          answer: "at",
          explanation: "at ใช้กับเวลา"
        },
        {
          sentence: "My school trip is ___ (in) December.",
          tag: "Time",
          tagColor: "secondary",
          answer: "in",
          explanation: "in ใช้กับเดือน"
        }
      ]
    },
    {
      type: "picture",
      label: "Picture Choice",
      icon: "🖼️",
      title: "เลือกคำตอบจากภาพ",
      description: "ดูอิโมจิและเลือกคำตอบที่ถูกต้อง",
      questions: [
        {
          sentence: "The ball is ___ the box.",
          emoji: "⚽",
          options: ["between", "on"],
          answer: "between",
          explanation: "between ใช้บอกตำแหน่งระหว่างกลางสองสิ่ง"
        },
        {
          sentence: "The bird is ___ the tree.",
          emoji: "🐦",
          options: ["in", "under"],
          answer: "in",
          explanation: "in ใช้บอกตำแหน่งข้างใน (นกอยู่ในต้นไม้)"
        },
        {
          sentence: "We have art class ___ Friday.",
          emoji: "🎨",
          options: ["on", "at"],
          answer: "on",
          explanation: "on ใช้กับวัน"
        },
        {
          sentence: "The lamp is ___ the table.",
          emoji: "💡",
          options: ["on", "under"],
          answer: "on",
          explanation: "on ใช้บอกตำแหน่งบนพื้นผิว"
        },
        {
          sentence: "Dinner is ready ___ 7 PM.",
          emoji: "🍽️",
          options: ["at", "in"],
          answer: "at",
          explanation: "at ใช้กับเวลา"
        }
      ]
    },
    {
      type: "fix",
      label: "Spot the Mistake",
      icon: "🔍",
      title: "หาที่ผิด",
      description: "เลือกประโยคที่ถูกต้อง",
      questions: [
        {
          wrong: "The cat is on the table under.",
          tag: "Place",
          tagColor: "blue",
          options: ["The cat is under the table.", "The cat is table under.", "The cat under is the table."],
          answer: "The cat is under the table.",
          explanation: "under ต้องวางหน้าคำนามที่ขยาย"
        },
        {
          wrong: "My birthday is on June.",
          tag: "Time",
          tagColor: "secondary",
          options: ["My birthday is in June.", "My birthday is at June.", "My birthday is June."],
          answer: "My birthday is in June.",
          explanation: "in ใช้กับเดือน ไม่ใช่ on"
        },
        {
          wrong: "We have PE in Monday.",
          tag: "Time",
          tagColor: "secondary",
          options: ["We have PE on Monday.", "We have PE at Monday.", "We have PE Monday."],
          answer: "We have PE on Monday.",
          explanation: "on ใช้กับวัน ไม่ใช่ in"
        },
        {
          wrong: "School starts in 8 o'clock.",
          tag: "Time",
          tagColor: "secondary",
          options: ["School starts at 8 o'clock.", "School starts on 8 o'clock.", "School starts 8 o'clock."],
          answer: "School starts at 8 o'clock.",
          explanation: "at ใช้กับเวลา ไม่ใช่ in"
        },
        {
          wrong: "The book is at the table.",
          tag: "Place",
          tagColor: "blue",
          options: ["The book is on the table.", "The book is in the table.", "The book is next the table."],
          answer: "The book is on the table.",
          explanation: "on ใช้บอกตำแหน่งบนพื้นผิว"
        }
      ]
    },
    {
      type: "drag",
      label: "Drag & Drop",
      icon: "🧩",
      title: "ลากคำมาเติม",
      description: "ลากคำจากคลังคำมาใส่ในช่องว่างให้ถูกต้อง",
      questions: [
        {
          sentence: "The fish is ___ the bowl.",
          bank: ["in", "on", "at"],
          answer: "in",
          explanation: "in ใช้บอกตำแหน่งข้างใน"
        },
        {
          sentence: "We eat breakfast ___ 7 AM.",
          bank: ["at", "on", "in"],
          answer: "at",
          explanation: "at ใช้กับเวลา"
        },
        {
          sentence: "My sister's birthday is ___ May.",
          bank: ["in", "on", "at"],
          answer: "in",
          explanation: "in ใช้กับเดือน"
        },
        {
          sentence: "The picture is ___ the wall.",
          bank: ["on", "in", "at"],
          answer: "on",
          explanation: "on ใช้บอกตำแหน่งบนพื้นผิว"
        },
        {
          sentence: "We go to church ___ Sunday.",
          bank: ["on", "at", "in"],
          answer: "on",
          explanation: "on ใช้กับวัน"
        }
      ]
    }
  ]
};
