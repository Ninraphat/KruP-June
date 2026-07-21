const EXERCISE = {
  title: "Conditional Sentences",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🌦️",
  subtitle: "ฝึก First Conditional, Unless และ Negative/Question Form",
  accentColor: "blue",
  contentPage: "c-conditional-sentences-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "If it rains tomorrow, we ___ at home.",
          tag: "First Conditional",
          tagColor: "secondary",
          emoji: "🌧️",
          options: ["stay", "will stay", "stayed", "stays"],
          answer: "will stay",
          explanation: "First Conditional: If + Present Simple, will + V1"
        },
        {
          sentence: "If you ___ hard, you will pass the exam.",
          tag: "First Conditional",
          tagColor: "secondary",
          emoji: "📚",
          options: ["study", "will study", "studied", "studies"],
          answer: "study",
          explanation: "If-clause ต้องใช้ Present Simple ห้ามใช้ will"
        },
        {
          sentence: "___ you study, you won't pass the exam.",
          tag: "Unless",
          tagColor: "amber",
          emoji: "🚫",
          options: ["If", "Unless", "When", "While"],
          answer: "Unless",
          explanation: "Unless มีความหมายว่า 'ถ้าไม่' = If...not"
        },
        {
          sentence: "If you heat water to 100°C, it ___.",
          tag: "Zero Conditional",
          tagColor: "blue",
          emoji: "💧",
          options: ["boil", "boils", "will boil", "boiled"],
          answer: "boils",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน เพราะเป็นข้อเท็จจริงเสมอ"
        },
        {
          sentence: "If you don't hurry, you ___ the bus.",
          tag: "Negative",
          tagColor: "purple",
          emoji: "🚌",
          options: ["won't catch", "don't catch", "not catch", "catch"],
          answer: "won't catch",
          explanation: "Main clause ปฏิเสธของ First Conditional ใช้ won't + V1"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์รูปกริยาหรือคำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "If she ___ (miss) the bus, she will be late.",
          tag: "First Conditional",
          tagColor: "secondary",
          answer: "misses",
          explanation: "If-clause ใช้ Present Simple ประธาน she เติม s"
        },
        {
          sentence: "___ (you/study) you won't pass the exam.",
          tag: "Unless",
          tagColor: "amber",
          answer: "Unless you study",
          explanation: "Unless = If...not เชื่อมประโยคเงื่อนไข"
        },
        {
          sentence: "If I ___ (not/have) money, I won't buy the ticket.",
          tag: "Negative",
          tagColor: "purple",
          answer: "don't have",
          explanation: "ประโยคปฏิเสธ Present Simple ใช้ don't + V1"
        },
        {
          sentence: "___ (will/you/come) if I invite you?",
          tag: "Question",
          tagColor: "blue",
          answer: "Will you come",
          explanation: "ประโยคคำถาม First Conditional: Will + S + V1"
        },
        {
          sentence: "If you ___ (touch) fire, it burns you.",
          tag: "Zero Conditional",
          tagColor: "blue",
          answer: "touch",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน"
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
          sentence: "If I have free time, I ___ badminton.",
          emoji: "🏸",
          options: ["will play", "play"],
          answer: "will play",
          explanation: "Main clause ของ First Conditional ใช้ will + V1"
        },
        {
          sentence: "___ you finish your homework, you can't watch TV.",
          emoji: "📺",
          options: ["Unless", "If"],
          answer: "Unless",
          explanation: "Unless = ถ้าไม่ ใช้แทน If...not"
        },
        {
          sentence: "If we plant a seed, it ___.",
          emoji: "🌱",
          options: ["grows", "will grow"],
          answer: "grows",
          explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน (ข้อเท็จจริง)"
        },
        {
          sentence: "If it snows, we ___ a snowman.",
          emoji: "⛄",
          options: ["will build", "build"],
          answer: "will build",
          explanation: "First Conditional main clause ใช้ will + V1"
        },
        {
          sentence: "___ you hurry, you will miss the train.",
          emoji: "🚆",
          options: ["Unless", "If"],
          answer: "Unless",
          explanation: "Unless you hurry = If you don't hurry"
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
          wrong: "If it will rain tomorrow, we will stay at home.",
          tag: "First Conditional",
          tagColor: "secondary",
          options: ["If it rains tomorrow, we will stay at home.", "If it rain tomorrow, we will stay at home.", "If it raining tomorrow, we will stay at home."],
          answer: "If it rains tomorrow, we will stay at home.",
          explanation: "ห้ามใช้ will ใน If-clause ต้องใช้ Present Simple"
        },
        {
          wrong: "Unless you don't study, you won't pass.",
          tag: "Unless",
          tagColor: "amber",
          options: ["Unless you study, you won't pass.", "Unless you studying, you won't pass.", "Unless you will study, you won't pass."],
          answer: "Unless you study, you won't pass.",
          explanation: "หลัง unless ห้ามใส่ not ซ้ำ เพราะ unless มีความหมายปฏิเสธอยู่แล้ว"
        },
        {
          wrong: "If I no have money, I won't buy the ticket.",
          tag: "Negative",
          tagColor: "purple",
          options: ["If I don't have money, I won't buy the ticket.", "If I not have money, I won't buy the ticket.", "If I haven't money, I won't buy the ticket."],
          answer: "If I don't have money, I won't buy the ticket.",
          explanation: "ประโยคปฏิเสธ Present Simple ใช้ don't/doesn't + V1"
        },
        {
          wrong: "Will you coming if I invite you?",
          tag: "Question",
          tagColor: "blue",
          options: ["Will you come if I invite you?", "Do you come if I invite you?", "Will you comes if I invite you?"],
          answer: "Will you come if I invite you?",
          explanation: "หลัง Will กริยาหลักต้องเป็น V1 ไม่ผัน"
        },
        {
          wrong: "If you heat water to 100°C, it will boil.",
          tag: "Zero Conditional",
          tagColor: "blue",
          options: ["If you heat water to 100°C, it boils.", "If you heated water to 100°C, it boils.", "If you heat water to 100°C, it boiled."],
          answer: "If you heat water to 100°C, it boils.",
          explanation: "Zero Conditional ห้ามใช้ will ต้องใช้ Present Simple ทั้งสองส่วน"
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
          sentence: "If she studies hard, she ___ the test.",
          bank: ["will pass", "pass", "passed"],
          answer: "will pass",
          explanation: "Main clause ของ First Conditional ใช้ will + V1"
        },
        {
          sentence: "___ you apologize, she won't forgive you.",
          bank: ["Unless", "If", "When"],
          answer: "Unless",
          explanation: "Unless = ถ้าไม่ ใช้แทน If...not"
        },
        {
          sentence: "If we ___ late, the teacher will be angry.",
          bank: ["are", "will be", "were"],
          answer: "are",
          explanation: "If-clause ต้องใช้ Present Simple ไม่ใช่ will"
        },
        {
          sentence: "If plants don't get water, they ___.",
          bank: ["die", "died", "will die"],
          answer: "die",
          explanation: "Zero Conditional main clause ใช้ Present Simple"
        },
        {
          sentence: "If you don't wear a coat, you ___ cold.",
          bank: ["will feel", "feel", "felt"],
          answer: "will feel",
          explanation: "Main clause ของ First Conditional ใช้ will + V1"
        }
      ]
    }
  ]
};
