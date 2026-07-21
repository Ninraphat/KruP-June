const EXERCISE = {
  title: "Adjectives",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎨",
  subtitle: "ฝึกทำแบบฝึกหัด Adjective, Comparative และ Superlative แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-adjectives-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "The ball is ___ (red).",
          tag: "Adjective",
          tagColor: "blue",
          answer: "red",
          explanation: "adjective ใช้หลัง verb to be ได้"
        },
        {
          sentence: "This bag is ___ (small) than that one.",
          tag: "Comparative",
          tagColor: "secondary",
          answer: "smaller",
          explanation: "คำสั้นเติม -er"
        },
        {
          sentence: "She is ___ (beautiful) girl in her class.",
          tag: "Superlative",
          tagColor: "amber",
          answer: "the most beautiful",
          explanation: "คำยาวใช้ the most"
        },
        {
          sentence: "My cat is ___ (fast) than your cat.",
          tag: "Comparative",
          tagColor: "secondary",
          answer: "faster",
          explanation: "คำสั้นเติม -er"
        },
        {
          sentence: "This is ___ (big) elephant in the zoo.",
          tag: "Superlative",
          tagColor: "amber",
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
          sentence: "This is ___ flower.",
          emoji: "🌻",
          options: ["a beautiful", "the most beautiful"],
          answer: "a beautiful",
          explanation: "adjective ธรรมดาไม่ได้เปรียบเทียบ ใช้ a beautiful"
        },
        {
          sentence: "The sun is ___ than the moon.",
          emoji: "☀️",
          options: ["brighter", "bright"],
          answer: "brighter",
          explanation: "Comparative เติม -er"
        },
        {
          sentence: "This is ___ animal in the world.",
          emoji: "🦒",
          options: ["the tallest", "tall"],
          answer: "the tallest",
          explanation: "Superlative ต้องมี the และเติม -est"
        },
        {
          sentence: "The book is ___.",
          emoji: "📕",
          options: ["red", "redder"],
          answer: "red",
          explanation: "adjective ธรรมดาบอกลักษณะ"
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
          wrong: "She has a bigly dog.",
          tag: "Adjective",
          tagColor: "blue",
          options: ["She has a big dog.", "She has a bigger dog than nothing.", "She has a biggest dog."],
          answer: "She has a big dog.",
          explanation: "adjective พื้นฐานไม่เติม -ly (bigly ไม่ใช่คำที่ถูกต้อง)"
        },
        {
          wrong: "My brother is more tall than me.",
          tag: "Comparative",
          tagColor: "secondary",
          options: ["My brother is taller than me.", "My brother is tallest than me.", "My brother is tall than me."],
          answer: "My brother is taller than me.",
          explanation: "คำสั้น (tall) เติม -er ไม่ใช้ more"
        },
        {
          wrong: "This book is interestinger than that one.",
          tag: "Comparative",
          tagColor: "secondary",
          options: ["This book is more interesting than that one.", "This book is interesting than that one.", "This book is most interesting than that one."],
          answer: "This book is more interesting than that one.",
          explanation: "คำยาวใช้ more นำหน้า ไม่เติม -er"
        },
        {
          wrong: "He is tallest boy in class.",
          tag: "Superlative",
          tagColor: "amber",
          options: ["He is the tallest boy in class.", "He is more tallest boy in class.", "He is taller boy in class."],
          answer: "He is the tallest boy in class.",
          explanation: "Superlative ต้องมี the นำหน้าเสมอ"
        },
        {
          wrong: "This is most beautiful flower.",
          tag: "Superlative",
          tagColor: "amber",
          options: ["This is the most beautiful flower.", "This is more beautiful flower.", "This is beautifuller flower."],
          answer: "This is the most beautiful flower.",
          explanation: "Superlative ต้องมี the นำหน้า most"
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
          sentence: "This box is ___ than that one.",
          bank: ["heavier", "heavy", "heaviest"],
          answer: "heavier",
          explanation: "Comparative เติม -er สำหรับคำสั้น"
        },
        {
          sentence: "She is ___ girl in the school.",
          bank: ["the smartest", "smart", "smarter"],
          answer: "the smartest",
          explanation: "Superlative ต้องมี the และเติม -est"
        },
        {
          sentence: "This shirt is ___.",
          bank: ["blue", "bluer", "bluest"],
          answer: "blue",
          explanation: "adjective ธรรมดาบอกสี ไม่เปรียบเทียบ"
        },
        {
          sentence: "This puzzle is ___ than that one.",
          bank: ["more difficult", "difficult", "difficulter"],
          answer: "more difficult",
          explanation: "คำยาวใช้ more นำหน้า"
        },
        {
          sentence: "He has ___ car in town.",
          bank: ["the fastest", "fast", "faster"],
          answer: "the fastest",
          explanation: "Superlative ต้องมี the และเติม -est"
        }
      ]
    }
  ]
};
