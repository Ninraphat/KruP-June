const EXERCISE = {
  title: "Conditional Sentences",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🌦️",
  subtitle: "ฝึกทำแบบฝึกหัด Zero Conditional แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-conditional-sentences-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "If you heat ice, it ___.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "🧊",
          options: ["melt", "melts", "will melt", "melted"],
          answer: "melts",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน เพราะเป็นข้อเท็จจริงเสมอ"
        },
        {
          sentence: "If it rains, we ___ at home.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "🌧️",
          options: ["stay", "stays", "will stay", "stayed"],
          answer: "stay",
          explanation: "Zero Conditional ใช้ Present Simple ทั้ง If-clause และ Main clause"
        },
        {
          sentence: "If you mix blue and yellow, you ___ green.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "🎨",
          options: ["get", "gets", "will get", "got"],
          answer: "get",
          explanation: "เป็นข้อเท็จจริงทั่วไป ใช้ Present Simple ทั้งสองส่วน"
        },
        {
          sentence: "If the weather is hot, we ___ shorts.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "☀️",
          options: ["wear", "wears", "will wear", "wore"],
          answer: "wear",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน"
        },
        {
          sentence: "If I ___ hungry, I eat a snack.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "🍎",
          options: ["am", "is", "will be", "was"],
          answer: "am",
          explanation: "ประธาน I ใช้ am ใน Present Simple สำหรับ If-clause"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์รูปกริยาที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "If water ___ (freeze), it becomes ice.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "freezes",
          explanation: "Zero Conditional: If + Present Simple, Present Simple"
        },
        {
          sentence: "If she ___ (be) tired, she sleeps early.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "is",
          explanation: "ประธาน she ใช้ is ใน Present Simple"
        },
        {
          sentence: "If you ___ (touch) fire, it burns you.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "touch",
          explanation: "If-clause ใช้ Present Simple ไม่เติม s เพราะประธาน you"
        },
        {
          sentence: "If plants ___ (not/get) water, they die.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "don't get",
          explanation: "ประโยคปฏิเสธ Present Simple ใช้ don't/doesn't + V1"
        },
        {
          sentence: "If the sun ___ (shine), the sky is blue.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "shines",
          explanation: "ประธาน the sun (เอกพจน์) เติม s"
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
          sentence: "If you drop a glass, it ___.",
          emoji: "🥛",
          options: ["breaks", "will break"],
          answer: "breaks",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน"
        },
        {
          sentence: "If it is cold, we ___ a jacket.",
          emoji: "🧥",
          options: ["wear", "wears"],
          answer: "wear",
          explanation: "ประธาน we ไม่เติม s ใน Present Simple"
        },
        {
          sentence: "If you water a plant, it ___.",
          emoji: "🌱",
          options: ["grows", "grow"],
          answer: "grows",
          explanation: "ประธาน it (เอกพจน์) ต้องเติม s"
        },
        {
          sentence: "If the light is red, cars ___.",
          emoji: "🚦",
          options: ["stop", "stops"],
          answer: "stop",
          explanation: "ประธาน cars (พหูพจน์) ไม่เติม s"
        },
        {
          sentence: "If I am sleepy, I ___ to bed.",
          emoji: "🛏️",
          options: ["go", "goes"],
          answer: "go",
          explanation: "ประธาน I ไม่เติม s ใน Present Simple"
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
          wrong: "If you heat ice, it will melt.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If you heat ice, it melts.", "If you heated ice, it melts.", "If you heat ice, it melted."],
          answer: "If you heat ice, it melts.",
          explanation: "Zero Conditional ห้ามใช้ will ต้องใช้ Present Simple ทั้งสองส่วน"
        },
        {
          wrong: "If it rain, we stay at home.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If it rains, we stay at home.", "If it raining, we stay at home.", "If it rained, we stay at home."],
          answer: "If it rains, we stay at home.",
          explanation: "ประธาน it (เอกพจน์) ต้องเติม s ที่กริยา"
        },
        {
          wrong: "If you mix blue and yellow, you gets green.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If you mix blue and yellow, you get green.", "If you mixed blue and yellow, you get green.", "If you mix blue and yellow, you will get green."],
          answer: "If you mix blue and yellow, you get green.",
          explanation: "ประธาน you ไม่เติม s ที่กริยา"
        },
        {
          wrong: "If the weather is hot, we wearing shorts.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If the weather is hot, we wear shorts.", "If the weather is hot, we wore shorts.", "If the weather hot, we wear shorts."],
          answer: "If the weather is hot, we wear shorts.",
          explanation: "Main clause ต้องใช้ Present Simple (wear) ไม่ใช่ -ing"
        },
        {
          wrong: "If I hungry, I eat a snack.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If I am hungry, I eat a snack.", "If I is hungry, I eat a snack.", "If I are hungry, I eat a snack."],
          answer: "If I am hungry, I eat a snack.",
          explanation: "ต้องมี verb to be (am) ก่อนคำคุณศัพท์ hungry"
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
          sentence: "If water freezes, it ___ ice.",
          bank: ["becomes", "become", "will become"],
          answer: "becomes",
          explanation: "ประธาน it (เอกพจน์) เติม s ใน Present Simple"
        },
        {
          sentence: "If you touch fire, it ___ you.",
          bank: ["burns", "burn", "will burn"],
          answer: "burns",
          explanation: "ประธาน it (เอกพจน์) เติม s ใน Present Simple"
        },
        {
          sentence: "If plants don't ___ water, they die.",
          bank: ["get", "gets", "got"],
          answer: "get",
          explanation: "หลัง don't กริยาต้องเป็น V1 ไม่ผัน"
        },
        {
          sentence: "If the sun ___, the sky is blue.",
          bank: ["shines", "shine", "shining"],
          answer: "shines",
          explanation: "ประธาน the sun (เอกพจน์) เติม s"
        },
        {
          sentence: "If I am tired, I ___ early.",
          bank: ["sleep", "sleeps", "slept"],
          answer: "sleep",
          explanation: "ประธาน I ไม่เติม s ใน Present Simple"
        }
      ]
    }
  ]
};
