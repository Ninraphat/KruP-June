const EXERCISE = {
  title: "Comparison",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "ฝึก Double Comparative, Comparison เชิงสัดส่วน และ Comparison ขั้นสูง",
  accentColor: "blue",
  contentPage: "c-comparison-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "___ (the/hard) you work, ___ (the/much) you earn.",
          tag: "Double Comparative",
          tagColor: "blue",
          answer: "The harder / the more",
          explanation: "Double Comparative: the + comparative..., the + comparative..."
        },
        {
          sentence: "This phone is ___ (three times/as) expensive as the old one.",
          tag: "Proportion",
          tagColor: "secondary",
          answer: "three times as",
          explanation: "three times as...as ใช้บอกสัดส่วนสามเท่า"
        },
        {
          sentence: "Life is becoming ___ (more/difficult) and more difficult.",
          tag: "Continuous Change",
          tagColor: "amber",
          answer: "more",
          explanation: "Comparative + and + Comparative: more and more difficult"
        },
        {
          sentence: "The trip was more expensive ___ we thought.",
          tag: "Clause Comparison",
          tagColor: "purple",
          answer: "than",
          explanation: "Comparison ผสม clause ใช้ than"
        },
        {
          sentence: "The older I get, ___ (the/wise) I become.",
          tag: "Double Comparative",
          tagColor: "blue",
          answer: "the wiser",
          explanation: "Double Comparative ต้องมี the นำหน้า"
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
          sentence: "The more you read, ___ you know.",
          emoji: "📚",
          options: ["the more", "more"],
          answer: "the more",
          explanation: "Double Comparative ต้องมี the นำหน้าทั้งสองส่วน"
        },
        {
          sentence: "This building is ___ tall as that one. (twice)",
          emoji: "🏢",
          options: ["twice as", "two as"],
          answer: "twice as",
          explanation: "twice as...as ใช้บอกสัดส่วนสองเท่า"
        },
        {
          sentence: "The traffic is getting ___.",
          emoji: "🚗",
          options: ["worse and worse", "worse and bad"],
          answer: "worse and worse",
          explanation: "Comparative + and + Comparative แสดงการเปลี่ยนแปลงต่อเนื่อง"
        },
        {
          sentence: "The movie was better ___ I expected.",
          emoji: "🎬",
          options: ["than", "as"],
          answer: "than",
          explanation: "Comparison ผสม clause ใช้ than"
        },
        {
          sentence: "This suitcase is ___ heavy as that one. (half)",
          emoji: "🧳",
          options: ["half as", "half than"],
          answer: "half as",
          explanation: "half as...as ใช้บอกสัดส่วนครึ่งหนึ่ง"
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
          wrong: "More you practice, better you become.",
          tag: "Double Comparative",
          tagColor: "blue",
          options: ["The more you practice, the better you become.", "More you practice, the better you become.", "The more you practice, better you become."],
          answer: "The more you practice, the better you become.",
          explanation: "Double Comparative ต้องมี the นำหน้าทั้งสองส่วน"
        },
        {
          wrong: "This year's sales are twice than last year's.",
          tag: "Proportion",
          tagColor: "secondary",
          options: ["This year's sales are twice as high as last year's.", "This year's sales are two times high as last year's.", "This year's sales are twice more than last year's."],
          answer: "This year's sales are twice as high as last year's.",
          explanation: "โครงสร้างที่ถูกต้องคือ twice as + adjective + as ไม่ใช่ twice than"
        },
        {
          wrong: "The weather is getting cold and cold.",
          tag: "Continuous Change",
          tagColor: "amber",
          options: ["The weather is getting colder and colder.", "The weather is getting more cold and cold.", "The weather is getting cold and colder."],
          answer: "The weather is getting colder and colder.",
          explanation: "Comparative + and + Comparative ต้องใช้รูป comparative ทั้งสองฝั่ง"
        },
        {
          wrong: "The exam was easier as I expected.",
          tag: "Clause Comparison",
          tagColor: "purple",
          options: ["The exam was easier than I expected.", "The exam was easy than I expected.", "The exam was more easier than I expected."],
          answer: "The exam was easier than I expected.",
          explanation: "Comparison ผสม clause ใช้ than ไม่ใช่ as"
        },
        {
          wrong: "This box is half heavy as that one.",
          tag: "Proportion",
          tagColor: "secondary",
          options: ["This box is half as heavy as that one.", "This box is half heavy than that one.", "This box is half of heavy as that one."],
          answer: "This box is half as heavy as that one.",
          explanation: "โครงสร้างที่ถูกต้องคือ half as + adjective + as"
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
          sentence: "The harder you study, ___ your grades will be.",
          bank: ["the better", "better", "the best"],
          answer: "the better",
          explanation: "Double Comparative ต้องมี the นำหน้า"
        },
        {
          sentence: "This laptop is ___ expensive as that tablet. (three times)",
          bank: ["three times as", "three as", "three times than"],
          answer: "three times as",
          explanation: "three times as...as ใช้บอกสัดส่วนสามเท่า"
        },
        {
          sentence: "The company is growing ___.",
          bank: ["bigger and bigger", "big and big", "more big"],
          answer: "bigger and bigger",
          explanation: "Comparative + and + Comparative แสดงการเปลี่ยนแปลงต่อเนื่อง"
        },
        {
          sentence: "The concert was louder ___ I imagined.",
          bank: ["than", "as", "that"],
          answer: "than",
          explanation: "Comparison ผสม clause ใช้ than"
        },
        {
          sentence: "This apartment is ___ big as that house. (half)",
          bank: ["half as", "half than", "half of"],
          answer: "half as",
          explanation: "half as...as ใช้บอกสัดส่วนครึ่งหนึ่ง"
        }
      ]
    }
  ]
};
