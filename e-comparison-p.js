const EXERCISE = {
  title: "Comparison",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "⚖️",
  subtitle: "ฝึกทำแบบฝึกหัดการเปรียบเทียบแบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-comparison-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "This box is ___ (heavy) than that one.",
          tag: "Comparative",
          tagColor: "blue",
          answer: "heavier",
          explanation: "heavy ลงท้าย y เปลี่ยนเป็น ier"
        },
        {
          sentence: "She is ___ (smart) girl in her class.",
          tag: "Superlative",
          tagColor: "secondary",
          answer: "the smartest",
          explanation: "คำสั้นเติม -est พร้อม the"
        },
        {
          sentence: "My pencil is ___ (the same) as yours.",
          tag: "Same As",
          tagColor: "amber",
          answer: "the same",
          explanation: "โครงสร้าง the same as ใช้บอกว่าเหมือนกัน"
        },
        {
          sentence: "He has ___ (more) toys than his sister.",
          tag: "More",
          tagColor: "blue",
          answer: "more",
          explanation: "more ใช้กับคำนามนับได้"
        },
        {
          sentence: "This is ___ (big) elephant in the zoo.",
          tag: "Superlative",
          tagColor: "secondary",
          answer: "the biggest",
          explanation: "คำสั้นเติม -est พร้อม the"
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
          sentence: "The elephant is ___ than the mouse.",
          emoji: "🐘",
          options: ["bigger", "big"],
          answer: "bigger",
          explanation: "Comparative ใช้เปรียบเทียบ 2 สิ่ง เติม -er"
        },
        {
          sentence: "This is ___ animal in the world.",
          emoji: "🦒",
          options: ["the tallest", "tall"],
          answer: "the tallest",
          explanation: "Superlative ต้องมี the และเติม -est"
        },
        {
          sentence: "My shirt is ___ as yours.",
          emoji: "👕",
          options: ["the same", "same"],
          answer: "the same",
          explanation: "the same as ใช้บอกว่าเหมือนกัน"
        },
        {
          sentence: "I have ___ candies than you.",
          emoji: "🍬",
          options: ["more", "most"],
          answer: "more",
          explanation: "more ใช้เปรียบเทียบจำนวนที่มากกว่า"
        },
        {
          sentence: "The sun is ___ than the moon.",
          emoji: "☀️",
          options: ["brighter", "bright"],
          answer: "brighter",
          explanation: "Comparative เติม -er"
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
          wrong: "My bag is more big than yours.",
          tag: "Comparative",
          tagColor: "blue",
          options: ["My bag is bigger than yours.", "My bag is biggest than yours.", "My bag is big than yours."],
          answer: "My bag is bigger than yours.",
          explanation: "คำสั้น (big) เติม -er ไม่ใช้ more"
        },
        {
          wrong: "He is tallest boy in class.",
          tag: "Superlative",
          tagColor: "secondary",
          options: ["He is the tallest boy in class.", "He is more tallest boy in class.", "He is taller boy in class."],
          answer: "He is the tallest boy in class.",
          explanation: "Superlative ต้องมี the นำหน้าเสมอ"
        },
        {
          wrong: "This bag is same that one.",
          tag: "Same As",
          tagColor: "amber",
          options: ["This bag is the same as that one.", "This bag is same as that one.", "This bag is the same that one."],
          answer: "This bag is the same as that one.",
          explanation: "โครงสร้างที่ถูกต้องคือ the same as"
        },
        {
          wrong: "I have most apples than you.",
          tag: "More",
          tagColor: "blue",
          options: ["I have more apples than you.", "I have much apples than you.", "I have many apples than you."],
          answer: "I have more apples than you.",
          explanation: "เมื่อเปรียบเทียบ 2 สิ่งด้วย than ต้องใช้ more ไม่ใช่ most"
        },
        {
          wrong: "This book is interestinger than that one.",
          tag: "Comparative",
          tagColor: "blue",
          options: ["This book is more interesting than that one.", "This book is interesting than that one.", "This book is most interesting than that one."],
          answer: "This book is more interesting than that one.",
          explanation: "คำยาวใช้ more นำหน้า ไม่เติม -er"
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
          sentence: "This puzzle is ___ than that one.",
          bank: ["more difficult", "difficult", "difficulter"],
          answer: "more difficult",
          explanation: "คำยาวใช้ more นำหน้า"
        },
        {
          sentence: "She is ___ girl in the school.",
          bank: ["the smartest", "smart", "smarter"],
          answer: "the smartest",
          explanation: "Superlative ต้องมี the และเติม -est"
        },
        {
          sentence: "My pen is ___ yours.",
          bank: ["the same as", "same", "similar to"],
          answer: "the same as",
          explanation: "โครงสร้าง the same as ใช้บอกว่าเหมือนกัน"
        },
        {
          sentence: "He has ___ books than me.",
          bank: ["more", "most", "much"],
          answer: "more",
          explanation: "more ใช้เปรียบเทียบจำนวนที่มากกว่า"
        },
        {
          sentence: "This box is ___ than that one.",
          bank: ["heavier", "heavy", "heaviest"],
          answer: "heavier",
          explanation: "Comparative เติม -er สำหรับคำสั้น"
        }
      ]
    }
  ]
};
