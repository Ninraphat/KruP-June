const EXERCISE = {
  title: "Conjunctions",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "ฝึก Correlative Conjunction, Conjunctive Adverb และ Contrast/Concession ขั้นสูง",
  accentColor: "blue",
  contentPage: "c-conjunctions-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำเชื่อมที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She is ___ smart ___ kind.",
          tag: "Correlative",
          tagColor: "blue",
          emoji: "🌟",
          options: ["both...and", "either...or", "neither...nor", "not only...but"],
          answer: "both...and",
          explanation: "both...and ใช้เชื่อมสองสิ่งที่เป็นจริงพร้อมกัน"
        },
        {
          sentence: "He was tired; ___, he kept working.",
          tag: "Conjunctive Adverb",
          tagColor: "secondary",
          emoji: "💪",
          options: ["however", "therefore", "moreover", "furthermore"],
          answer: "however",
          explanation: "however ใช้แสดงความขัดแย้ง (แม้จะเหนื่อยแต่ยังทำงานต่อ)"
        },
        {
          sentence: "It was raining; therefore___ we stayed home.",
          tag: "Punctuation",
          tagColor: "amber",
          emoji: "✍️",
          options: [",", ";", ".", ":"],
          answer: ",",
          explanation: "หลัง conjunctive adverb ต้องมี comma ก่อน clause ที่สอง"
        },
        {
          sentence: "___ the rain, we went out.",
          tag: "Despite",
          tagColor: "purple",
          emoji: "🌧️",
          options: ["Despite", "Even though", "Whereas", "However"],
          answer: "Despite",
          explanation: "despite ตามด้วย noun (the rain) ไม่ใช่ clause"
        },
        {
          sentence: "___ did she pass the exam, but she also got the highest score.",
          tag: "Correlative",
          tagColor: "blue",
          emoji: "🏆",
          options: ["Not only", "Both", "Either", "Neither"],
          answer: "Not only",
          explanation: "not only...but also ใช้ inversion เมื่อ not only ขึ้นต้นประโยค"
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
          sentence: "You can have ___ (either) tea ___ (or) coffee.",
          tag: "Correlative",
          tagColor: "blue",
          answer: "either / or",
          explanation: "either...or ใช้บอกทางเลือกอย่างใดอย่างหนึ่ง"
        },
        {
          sentence: "The plan is risky; ___ (moreover), it's expensive.",
          tag: "Conjunctive Adverb",
          tagColor: "secondary",
          answer: "moreover",
          explanation: "moreover ใช้เพิ่มเติมข้อมูล"
        },
        {
          sentence: "I like tea, ___ (whereas) she prefers coffee.",
          tag: "Contrast",
          tagColor: "purple",
          answer: "whereas",
          explanation: "whereas ใช้แสดงความขัดแย้งระหว่างสองสิ่ง"
        },
        {
          sentence: "He likes ___ (neither) tea ___ (nor) coffee.",
          tag: "Correlative",
          tagColor: "blue",
          answer: "neither / nor",
          explanation: "neither...nor ใช้บอกว่าไม่ทั้งสองอย่าง"
        },
        {
          sentence: "___ (Even though) it was raining, we went out.",
          tag: "Concession",
          tagColor: "purple",
          answer: "Even though",
          explanation: "even though ตามด้วย clause เต็มรูป (S+V)"
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
          sentence: "He is ___ talented ___ hardworking.",
          emoji: "🎨",
          options: ["not only...but also", "either...or"],
          answer: "not only...but also",
          explanation: "not only...but also ใช้เน้นสองคุณสมบัติ"
        },
        {
          sentence: "The task was hard; ___, she completed it.",
          emoji: "✅",
          options: ["nevertheless", "moreover"],
          answer: "nevertheless",
          explanation: "nevertheless ใช้แสดงความขัดแย้ง (แม้ยากแต่ก็ทำสำเร็จ)"
        },
        {
          sentence: "___ the heavy traffic, we arrived on time.",
          emoji: "🚗",
          options: ["Despite", "Even though"],
          answer: "Despite",
          explanation: "despite ตามด้วย noun phrase (the heavy traffic)"
        },
        {
          sentence: "She studies hard; ___, she still struggles.",
          emoji: "📖",
          options: ["however", "therefore"],
          answer: "however",
          explanation: "however ใช้แสดงความขัดแย้ง"
        },
        {
          sentence: "I like dogs, ___ my sister prefers cats.",
          emoji: "🐕",
          options: ["whereas", "moreover"],
          answer: "whereas",
          explanation: "whereas ใช้แสดงความขัดแย้งระหว่างสองสิ่ง"
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
          wrong: "She is both smart or kind.",
          tag: "Correlative",
          tagColor: "blue",
          options: ["She is both smart and kind.", "She is either smart or kind.", "She is neither smart or kind."],
          answer: "She is both smart and kind.",
          explanation: "both ต้องคู่กับ and เสมอ ไม่ใช่ or"
        },
        {
          wrong: "He was tired, however, he kept working.",
          tag: "Punctuation",
          tagColor: "amber",
          options: ["He was tired; however, he kept working.", "He was tired. however, he kept working.", "He was tired: however, he kept working."],
          answer: "He was tired; however, he kept working.",
          explanation: "ต้องใช้ semicolon (;) ก่อน conjunctive adverb ไม่ใช่ comma"
        },
        {
          wrong: "Despite it was raining, we went out.",
          tag: "Despite",
          tagColor: "purple",
          options: ["Despite the rain, we went out.", "Despite raining, we went out already.", "Despite of the rain, we went out."],
          answer: "Despite the rain, we went out.",
          explanation: "despite ต้องตามด้วย noun/gerund ไม่ใช่ clause (it was raining)"
        },
        {
          wrong: "Not only she passed the exam, but she also got the highest score.",
          tag: "Correlative",
          tagColor: "blue",
          options: ["Not only did she pass the exam, but she also got the highest score.", "Not only she did pass the exam, but she also got the highest score.", "Not only passed she the exam, but she also got the highest score."],
          answer: "Not only did she pass the exam, but she also got the highest score.",
          explanation: "เมื่อ not only ขึ้นต้นประโยค ต้องใช้ inversion (did she pass)"
        },
        {
          wrong: "He likes neither tea or coffee.",
          tag: "Correlative",
          tagColor: "blue",
          options: ["He likes neither tea nor coffee.", "He likes either tea or coffee not.", "He likes not tea nor coffee."],
          answer: "He likes neither tea nor coffee.",
          explanation: "neither ต้องคู่กับ nor เสมอ ไม่ใช่ or"
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
          sentence: "You can choose ___ the red one ___ the blue one.",
          bank: ["either / or", "both / and", "neither / nor"],
          answer: "either / or",
          explanation: "either...or ใช้บอกทางเลือกอย่างใดอย่างหนึ่ง"
        },
        {
          sentence: "The project failed; ___, we learned a lot.",
          bank: ["however", "moreover", "for"],
          answer: "however",
          explanation: "however ใช้แสดงความขัดแย้ง"
        },
        {
          sentence: "___ the difficulty, the team succeeded.",
          bank: ["Despite", "Even though", "Whereas"],
          answer: "Despite",
          explanation: "despite ตามด้วย noun phrase"
        },
        {
          sentence: "___ am I interested in art, but also in music.",
          bank: ["Not only", "Both", "Either"],
          answer: "Not only",
          explanation: "not only...but also ใช้ inversion เมื่อขึ้นต้นประโยค"
        },
        {
          sentence: "She works in Bangkok, ___ her sister works abroad.",
          bank: ["whereas", "moreover", "for"],
          answer: "whereas",
          explanation: "whereas ใช้แสดงความขัดแย้งระหว่างสองสิ่ง"
        }
      ]
    }
  ]
};
