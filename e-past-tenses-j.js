const EXERCISE = {
  title: "Past Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🕰️",
  subtitle: "ฝึก Negative/Question, Past Continuous และ Interrupted Action",
  accentColor: "blue",
  contentPage: "c-past-tenses-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "She ___ to school yesterday.",
          tag: "Past Simple",
          tagColor: "blue",
          emoji: "🚶",
          options: ["walk", "walked", "walks", "was walking"],
          answer: "walked",
          explanation: "walk เป็น regular verb เติม -ed และมีคำว่า yesterday บ่งบอกอดีต"
        },
        {
          sentence: "___ you finish your homework last night?",
          tag: "Question",
          tagColor: "secondary",
          emoji: "❓",
          options: ["Do", "Did", "Were", "Was"],
          answer: "Did",
          explanation: "ประโยคคำถาม Past Simple ใช้ Did ขึ้นต้น กริยาหลักกลับเป็น V1"
        },
        {
          sentence: "I ___ eat breakfast this morning.",
          tag: "Negative",
          tagColor: "amber",
          emoji: "🚫",
          options: ["don't", "didn't", "wasn't", "not"],
          answer: "didn't",
          explanation: "ประโยคปฏิเสธ Past Simple ใช้ didn't + V1"
        },
        {
          sentence: "They ___ football at 5 PM yesterday.",
          tag: "Past Continuous",
          tagColor: "blue",
          emoji: "⚽",
          options: ["play", "played", "were playing", "are playing"],
          answer: "were playing",
          explanation: "มีเวลาระบุชัดเจน (5 PM yesterday) แสดงว่ากำลังทำอยู่ ณ ช่วงเวลานั้น จึงใช้ Past Continuous"
        },
        {
          sentence: "I was cooking dinner ___ the phone rang.",
          tag: "Interrupted Action",
          tagColor: "purple",
          emoji: "📞",
          options: ["while", "when", "since", "for"],
          answer: "when",
          explanation: "when ใช้เชื่อมเหตุการณ์สั้นที่แทรกเข้ามาระหว่างเหตุการณ์ยาว"
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
          sentence: "She ___ (not/go) to school last Monday.",
          tag: "Negative",
          tagColor: "amber",
          answer: "didn't go",
          explanation: "ประโยคปฏิเสธ Past Simple: didn't + V1"
        },
        {
          sentence: "___ (you/see) that movie last week?",
          tag: "Question",
          tagColor: "secondary",
          answer: "Did you see",
          explanation: "ประโยคคำถาม Past Simple: Did + S + V1"
        },
        {
          sentence: "I ___ (read) a book at 8 PM last night.",
          tag: "Past Continuous",
          tagColor: "blue",
          answer: "was reading",
          explanation: "มีเวลาระบุชัดเจน (8 PM last night) บ่งบอกว่ากำลังทำอยู่ ณ เวลานั้น"
        },
        {
          sentence: "While she ___ (cook), her brother was doing homework.",
          tag: "Past Continuous",
          tagColor: "blue",
          answer: "was cooking",
          explanation: "while ใช้กับเหตุการณ์ยาวสองเหตุการณ์ที่เกิดพร้อมกัน ใช้ Past Continuous ทั้งคู่"
        },
        {
          sentence: "He ___ (break) his leg while he was playing football.",
          tag: "Interrupted Action",
          tagColor: "purple",
          answer: "broke",
          explanation: "เหตุการณ์สั้นที่แทรกเข้ามา (broke his leg) ใช้ Past Simple ร่วมกับ Past Continuous"
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
          sentence: "I ___ TV when my mom came home.",
          emoji: "📺",
          options: ["watched", "was watching"],
          answer: "was watching",
          explanation: "เหตุการณ์ยาวที่กำลังเกิดอยู่ก่อนถูกขัดจังหวะ ใช้ Past Continuous"
        },
        {
          sentence: "___ she call you yesterday?",
          emoji: "📞",
          options: ["Did", "Was"],
          answer: "Did",
          explanation: "ประโยคคำถาม Past Simple ใช้ Did ขึ้นต้น"
        },
        {
          sentence: "He ___ his bike when it started to rain.",
          emoji: "🚲",
          options: ["rode", "was riding"],
          answer: "was riding",
          explanation: "เหตุการณ์ยาวที่กำลังดำเนินอยู่ ก่อนถูกขัดจังหวะโดยฝนตก"
        },
        {
          sentence: "They ___ finish the project on time.",
          emoji: "🚫",
          options: ["didn't", "wasn't"],
          answer: "didn't",
          explanation: "ประโยคปฏิเสธ Past Simple ใช้ didn't + V1"
        },
        {
          sentence: "While I ___ dinner, my sister was studying.",
          emoji: "🍳",
          options: ["cooked", "was cooking"],
          answer: "was cooking",
          explanation: "while ใช้กับสองเหตุการณ์ยาวที่เกิดพร้อมกัน ใช้ Past Continuous"
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
          wrong: "She didn't went to school yesterday.",
          tag: "Negative",
          tagColor: "amber",
          options: ["She didn't go to school yesterday.", "She don't went to school yesterday.", "She wasn't go to school yesterday."],
          answer: "She didn't go to school yesterday.",
          explanation: "หลัง didn't กริยาหลักต้องเป็น V1 ไม่ผัน (go ไม่ใช่ went)"
        },
        {
          wrong: "Did you finished your homework?",
          tag: "Question",
          tagColor: "secondary",
          options: ["Did you finish your homework?", "Did you finishes your homework?", "Were you finish your homework?"],
          answer: "Did you finish your homework?",
          explanation: "หลัง Did กริยาหลักต้องเป็น V1 ไม่ผัน (finish ไม่ใช่ finished)"
        },
        {
          wrong: "I readed a book at 8 PM last night.",
          tag: "Past Continuous",
          tagColor: "blue",
          options: ["I was reading a book at 8 PM last night.", "I reading a book at 8 PM last night.", "I am reading a book at 8 PM last night."],
          answer: "I was reading a book at 8 PM last night.",
          explanation: "อีกทั้ง read เป็น irregular verb (read ไม่เปลี่ยนรูปสะกด) และเวลาชัดเจนบ่งบอกว่ากำลังเกิดขึ้น ใช้ Past Continuous"
        },
        {
          wrong: "I was watching TV while the phone rang.",
          tag: "Interrupted Action",
          tagColor: "purple",
          options: ["I was watching TV when the phone rang.", "I watched TV while the phone rang.", "I am watching TV when the phone rang."],
          answer: "I was watching TV when the phone rang.",
          explanation: "when ใช้เชื่อมเหตุการณ์สั้นที่แทรกเข้ามา (the phone rang) ไม่ใช่ while"
        },
        {
          wrong: "While she was cooking, her brother did homework.",
          tag: "Past Continuous",
          tagColor: "blue",
          options: ["While she was cooking, her brother was doing homework.", "While she cooked, her brother was doing homework.", "While she is cooking, her brother did homework."],
          answer: "While she was cooking, her brother was doing homework.",
          explanation: "while ใช้กับสองเหตุการณ์ยาวที่เกิดพร้อมกัน ต้องใช้ Past Continuous ทั้งสองประโยค"
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
          sentence: "___ they play football yesterday?",
          bank: ["Did", "Was", "Were"],
          answer: "Did",
          explanation: "ประโยคคำถาม Past Simple ใช้ Did ขึ้นต้น"
        },
        {
          sentence: "She ___ finish her homework last night.",
          bank: ["didn't", "wasn't", "don't"],
          answer: "didn't",
          explanation: "ประโยคปฏิเสธ Past Simple ใช้ didn't + V1"
        },
        {
          sentence: "I ___ my homework when my friend called me.",
          bank: ["was doing", "did", "do"],
          answer: "was doing",
          explanation: "เหตุการณ์ยาวที่กำลังเกิดขึ้นก่อนถูกขัดจังหวะ ใช้ Past Continuous"
        },
        {
          sentence: "___ she call you yesterday?",
          bank: ["Did", "Were", "Was"],
          answer: "Did",
          explanation: "ประโยคคำถาม Past Simple ใช้ Did ขึ้นต้น"
        },
        {
          sentence: "___ she was cooking, her brother was reading.",
          bank: ["While", "When", "Since"],
          answer: "While",
          explanation: "while ใช้เชื่อมสองเหตุการณ์ยาวที่เกิดพร้อมกัน"
        }
      ]
    }
  ]
};
