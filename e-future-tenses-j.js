const EXERCISE = {
  title: "Future Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🔮",
  subtitle: "ฝึก Will vs Going to, Negative/Question, Arrangement และ Timetable",
  accentColor: "blue",
  contentPage: "c-future-tenses-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "Look at those dark clouds! It ___ rain.",
          tag: "Going to",
          tagColor: "secondary",
          emoji: "☁️",
          options: ["will", "is going to", "is", "was"],
          answer: "is going to",
          explanation: "มีหลักฐานตรงหน้า (เมฆดำ) จึงใช้ be going to สำหรับการคาดเดา"
        },
        {
          sentence: "I ___ be late for the meeting. I promise.",
          tag: "Will Negative",
          tagColor: "blue",
          emoji: "🚫",
          options: ["won't", "am not going to", "don't", "not"],
          answer: "won't",
          explanation: "ประโยคปฏิเสธของ will คือ won't (will not)"
        },
        {
          sentence: "We ___ our teacher tomorrow at 9 AM. It's already arranged.",
          tag: "Present Continuous",
          tagColor: "amber",
          emoji: "📅",
          options: ["will meet", "meet", "are meeting", "met"],
          answer: "are meeting",
          explanation: "เป็นนัดหมายที่แน่นอนแล้ว ใช้ Present Continuous สำหรับอนาคต"
        },
        {
          sentence: "The train ___ at 9 AM tomorrow.",
          tag: "Timetable",
          tagColor: "purple",
          emoji: "🚆",
          options: ["will leave", "is leaving", "leaves", "left"],
          answer: "leaves",
          explanation: "ตารางเวลาที่แน่นอนตายตัวใช้ Present Simple แม้จะพูดถึงอนาคต"
        },
        {
          sentence: "___ you going to join the trip next week?",
          tag: "Going to Question",
          tagColor: "secondary",
          emoji: "🧳",
          options: ["Will", "Are", "Do", "Is"],
          answer: "Are",
          explanation: "ประโยคคำถามของ be going to ใช้ Is/Am/Are ขึ้นต้นตามประธาน"
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
          sentence: "I ___ (not/be) late. I promise.",
          tag: "Will Negative",
          tagColor: "blue",
          answer: "won't be",
          explanation: "ประโยคปฏิเสธ will: won't + V1"
        },
        {
          sentence: "___ (she/go) to the party tonight? I'm not sure yet.",
          tag: "Will Question",
          tagColor: "blue",
          answer: "Will she go",
          explanation: "ประโยคคำถาม will: Will + S + V1"
        },
        {
          sentence: "We ___ (meet) the doctor tomorrow at 3 PM. It's already booked.",
          tag: "Present Continuous",
          tagColor: "amber",
          answer: "are meeting",
          explanation: "นัดหมายที่แน่นอนแล้วใช้ Present Continuous สำหรับอนาคต"
        },
        {
          sentence: "The movie ___ (start) at 7 PM tonight.",
          tag: "Timetable",
          tagColor: "purple",
          answer: "starts",
          explanation: "ตารางเวลาที่แน่นอนตายตัวใช้ Present Simple"
        },
        {
          sentence: "___ (you/going to) study abroad next year?",
          tag: "Going to Question",
          tagColor: "secondary",
          answer: "Are you going to",
          explanation: "ประโยคคำถาม be going to: Is/Am/Are + S + going to"
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
          sentence: "Look! The building ___ collapse!",
          emoji: "🏚️",
          options: ["will", "is going to"],
          answer: "is going to",
          explanation: "มีหลักฐานตรงหน้าที่เห็นได้ชัด ใช้ be going to สำหรับการคาดเดา"
        },
        {
          sentence: "I ___ eat meat anymore starting today.",
          emoji: "🥦",
          options: ["won't", "am not"],
          answer: "won't",
          explanation: "การตัดสินใจ/สัญญาเชิงปฏิเสธ ใช้ won't"
        },
        {
          sentence: "We ___ the dentist next Monday at 10 AM.",
          emoji: "🦷",
          options: ["are seeing", "will see"],
          answer: "are seeing",
          explanation: "เป็นนัดหมายที่แน่นอนแล้ว ใช้ Present Continuous"
        },
        {
          sentence: "The plane ___ at 6 AM tomorrow.",
          emoji: "✈️",
          options: ["departs", "will depart"],
          answer: "departs",
          explanation: "ตารางเวลาเที่ยวบินที่แน่นอนตายตัวใช้ Present Simple"
        },
        {
          sentence: "___ you going to the concert this weekend?",
          emoji: "🎤",
          options: ["Are", "Will"],
          answer: "Are",
          explanation: "ประโยคคำถามของ be going to ใช้ Are ขึ้นต้น"
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
          wrong: "I don't going to be late.",
          tag: "Going to Negative",
          tagColor: "secondary",
          options: ["I am not going to be late.", "I won't going to be late.", "I not going to be late."],
          answer: "I am not going to be late.",
          explanation: "ประโยคปฏิเสธของ be going to คือ is/am/are + not + going to"
        },
        {
          wrong: "Will she goes to the party?",
          tag: "Will Question",
          tagColor: "blue",
          options: ["Will she go to the party?", "Does she will go to the party?", "Will she going to the party?"],
          answer: "Will she go to the party?",
          explanation: "หลัง Will กริยาต้องเป็น V1 ไม่ผัน"
        },
        {
          wrong: "We meeting the doctor tomorrow at 3 PM.",
          tag: "Present Continuous",
          tagColor: "amber",
          options: ["We are meeting the doctor tomorrow at 3 PM.", "We meets the doctor tomorrow at 3 PM.", "We will meeting the doctor tomorrow at 3 PM."],
          answer: "We are meeting the doctor tomorrow at 3 PM.",
          explanation: "ต้องมี verb to be (are) ก่อน V-ing เสมอ"
        },
        {
          wrong: "The movie will starts at 7 PM tonight.",
          tag: "Timetable",
          tagColor: "purple",
          options: ["The movie starts at 7 PM tonight.", "The movie start at 7 PM tonight.", "The movie is start at 7 PM tonight."],
          answer: "The movie starts at 7 PM tonight.",
          explanation: "ตารางเวลาแน่นอนใช้ Present Simple ไม่ต้องใช้ will"
        },
        {
          wrong: "Are you going study abroad next year?",
          tag: "Going to Question",
          tagColor: "secondary",
          options: ["Are you going to study abroad next year?", "Do you going to study abroad next year?", "Are you go to study abroad next year?"],
          answer: "Are you going to study abroad next year?",
          explanation: "โครงสร้าง be going to ต้องมีคำว่า to เสมอ: going to + V1"
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
          sentence: "___ she going to the party tonight? I'm not sure.",
          bank: ["Will", "Is", "Are"],
          answer: "Will",
          explanation: "การคาดเดาที่ไม่แน่ใจ ใช้ will ในรูปคำถาม"
        },
        {
          sentence: "I ___ eat junk food anymore.",
          bank: ["won't", "am not", "don't"],
          answer: "won't",
          explanation: "การตัดสินใจเชิงปฏิเสธใช้ won't"
        },
        {
          sentence: "We ___ the manager tomorrow at 2 PM. It's confirmed.",
          bank: ["are meeting", "will meet", "meet"],
          answer: "are meeting",
          explanation: "นัดหมายที่แน่นอนแล้วใช้ Present Continuous"
        },
        {
          sentence: "The shop ___ at 8 AM every day.",
          bank: ["opens", "will open", "is opening"],
          answer: "opens",
          explanation: "ตารางเวลาที่แน่นอนตายตัวใช้ Present Simple"
        },
        {
          sentence: "___ you going to the workshop next week?",
          bank: ["Are", "Will", "Do"],
          answer: "Are",
          explanation: "ประโยคคำถามของ be going to ใช้ Are ขึ้นต้น"
        }
      ]
    }
  ]
};
