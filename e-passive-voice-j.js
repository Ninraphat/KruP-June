const EXERCISE = {
  title: "Passive Voice",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🔄",
  subtitle: "ฝึก Passive ใน Present Simple, Past Simple, Present Continuous และการแปลงประโยค",
  accentColor: "blue",
  contentPage: "c-passive-voice-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "This room ___ every day.",
          tag: "Present Simple",
          tagColor: "blue",
          emoji: "🧹",
          options: ["clean", "cleans", "is cleaned", "was cleaned"],
          answer: "is cleaned",
          explanation: "Present Simple Passive: is/am/are + V3"
        },
        {
          sentence: "This novel ___ by a famous writer in 1990.",
          tag: "Past Simple",
          tagColor: "secondary",
          emoji: "📖",
          options: ["wrote", "was written", "is written", "writes"],
          answer: "was written",
          explanation: "Past Simple Passive: was/were + V3 พร้อมเวลาระบุในอดีต"
        },
        {
          sentence: "The bridge ___ right now.",
          tag: "Present Continuous",
          tagColor: "amber",
          emoji: "🌉",
          options: ["is built", "is being built", "was built", "builds"],
          answer: "is being built",
          explanation: "Present Continuous Passive: is/am/are + being + V3"
        },
        {
          sentence: "Active: The workers built the bridge. → Passive: The bridge ___ by the workers.",
          tag: "Conversion",
          tagColor: "purple",
          emoji: "🔀",
          options: ["built", "was built", "is built", "builds"],
          answer: "was built",
          explanation: "แปลงจาก Active (built) เป็น Passive: was/were + V3"
        },
        {
          sentence: "This cake ___ by my grandmother.",
          tag: "Present Simple",
          tagColor: "blue",
          emoji: "🎂",
          options: ["is made", "made", "was made", "make"],
          answer: "is made",
          explanation: "Present Simple Passive: is + V3 เพราะเป็นข้อเท็จจริงทั่วไป"
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
          sentence: "English ___ (speak) in many countries.",
          tag: "Present Simple",
          tagColor: "blue",
          answer: "is spoken",
          explanation: "Present Simple Passive: is + V3"
        },
        {
          sentence: "This painting ___ (paint) in 1889.",
          tag: "Past Simple",
          tagColor: "secondary",
          answer: "was painted",
          explanation: "Past Simple Passive: was + V3 พร้อมเวลาระบุแน่นอน"
        },
        {
          sentence: "The road ___ (repair) at the moment.",
          tag: "Present Continuous",
          tagColor: "amber",
          answer: "is being repaired",
          explanation: "Present Continuous Passive: is + being + V3"
        },
        {
          sentence: "Active: Someone stole my bike. → Passive: My bike ___ (steal).",
          tag: "Conversion",
          tagColor: "purple",
          answer: "was stolen",
          explanation: "แปลงเป็น Past Simple Passive: was + V3"
        },
        {
          sentence: "This game ___ (play) by millions of people.",
          tag: "Present Simple",
          tagColor: "blue",
          answer: "is played",
          explanation: "Present Simple Passive: is + V3"
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
          sentence: "This phone ___ in China.",
          emoji: "📱",
          options: ["is made", "was made"],
          answer: "is made",
          explanation: "ข้อเท็จจริงทั่วไปใช้ Present Simple Passive"
        },
        {
          sentence: "This castle ___ 500 years ago.",
          emoji: "🏰",
          options: ["was built", "is built"],
          answer: "was built",
          explanation: "มีเวลาระบุแน่นอนในอดีต (500 years ago) ใช้ Past Simple Passive"
        },
        {
          sentence: "The car ___ right now in the garage.",
          emoji: "🚗",
          options: ["is being fixed", "is fixed"],
          answer: "is being fixed",
          explanation: "เน้นว่ากำลังถูกกระทำอยู่ตอนนี้ ใช้ Present Continuous Passive"
        },
        {
          sentence: "This bridge ___ in 2015.",
          emoji: "🌉",
          options: ["was completed", "is completed"],
          answer: "was completed",
          explanation: "มีเวลาระบุแน่นอนในอดีต ใช้ Past Simple Passive"
        },
        {
          sentence: "The trophy ___ by the winner right now.",
          emoji: "🏆",
          options: ["is being held", "is held"],
          answer: "is being held",
          explanation: "เหตุการณ์กำลังเกิดขึ้นตอนนี้ ใช้ Present Continuous Passive"
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
          wrong: "This room clean every day.",
          tag: "Present Simple",
          tagColor: "blue",
          options: ["This room is cleaned every day.", "This room cleans every day.", "This room being cleaned every day."],
          answer: "This room is cleaned every day.",
          explanation: "ต้องมี verb to be (is) ก่อน V3 เสมอในโครงสร้าง Passive"
        },
        {
          wrong: "This book wrote by a famous author.",
          tag: "Past Simple",
          tagColor: "secondary",
          options: ["This book was written by a famous author.", "This book is written by a famous author.", "This book writes by a famous author."],
          answer: "This book was written by a famous author.",
          explanation: "Past Simple Passive ต้องใช้ was/were + V3 ไม่ใช่กริยาช่อง 2"
        },
        {
          wrong: "The house is paint now.",
          tag: "Present Continuous",
          tagColor: "amber",
          options: ["The house is being painted now.", "The house is painted now.", "The house paints now."],
          answer: "The house is being painted now.",
          explanation: "Present Continuous Passive ต้องมี being: is + being + V3"
        },
        {
          wrong: "The bridge built by the workers.",
          tag: "Conversion",
          tagColor: "purple",
          options: ["The bridge was built by the workers.", "The bridge builds by the workers.", "The bridge is build by the workers."],
          answer: "The bridge was built by the workers.",
          explanation: "ต้องมี verb to be (was) ก่อน V3 เสมอ"
        },
        {
          wrong: "This game play by millions of people.",
          tag: "Present Simple",
          tagColor: "blue",
          options: ["This game is played by millions of people.", "This game plays by millions of people.", "This game was play by millions of people."],
          answer: "This game is played by millions of people.",
          explanation: "ต้องมี verb to be (is) ก่อน V3 เสมอ"
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
          sentence: "This medicine ___ made from natural herbs.",
          bank: ["is", "was", "are"],
          answer: "is",
          explanation: "ประธาน This medicine (เอกพจน์) ใช้ is สำหรับข้อเท็จจริงทั่วไป"
        },
        {
          sentence: "The pyramid ___ built thousands of years ago.",
          bank: ["was", "is", "were"],
          answer: "was",
          explanation: "มีเวลาระบุในอดีต ใช้ was + V3"
        },
        {
          sentence: "The report is being ___ right now.",
          bank: ["reviewed", "review", "reviews"],
          answer: "reviewed",
          explanation: "หลัง being ต้องใช้ V3 (reviewed)"
        },
        {
          sentence: "Active: Someone broke the window. → The window ___ broken.",
          bank: ["was", "is", "were"],
          answer: "was",
          explanation: "แปลงเป็น Past Simple Passive: was + V3"
        },
        {
          sentence: "These shoes ___ made in Vietnam.",
          bank: ["are", "is", "was"],
          answer: "are",
          explanation: "ประธาน These shoes (พหูพจน์) ใช้ are"
        }
      ]
    }
  ]
};
