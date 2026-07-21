const EXERCISE = {
  title: "Question Tags",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "❓",
  subtitle: "ฝึก Question Tag กับ Present/Past Simple, ประโยคปฏิเสธ และ Modal อื่นๆ",
  accentColor: "blue",
  contentPage: "c-question-tags-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือก Question Tag ที่ถูกต้อง",
      questions: [
        {
          sentence: "She likes coffee, ___?",
          tag: "Present Simple",
          tagColor: "blue",
          emoji: "☕",
          options: ["does she", "doesn't she", "isn't she", "is she"],
          answer: "doesn't she",
          explanation: "Present Simple บอกเล่า (likes) → tag ปฏิเสธ (doesn't she)"
        },
        {
          sentence: "They went to school, ___?",
          tag: "Past Simple",
          tagColor: "blue",
          emoji: "🏫",
          options: ["went they", "didn't they", "did they", "weren't they"],
          answer: "didn't they",
          explanation: "Past Simple บอกเล่า (went) → tag ปฏิเสธ (didn't they)"
        },
        {
          sentence: "She doesn't like coffee, ___?",
          tag: "Negative",
          tagColor: "secondary",
          emoji: "🚫",
          options: ["doesn't she", "does she", "isn't she", "is she"],
          answer: "does she",
          explanation: "ประโยคปฏิเสธ (doesn't like) → tag บอกเล่า (does she)"
        },
        {
          sentence: "You will help me, ___?",
          tag: "Modal",
          tagColor: "secondary",
          emoji: "🤝",
          options: ["will you", "won't you", "do you", "don't you"],
          answer: "won't you",
          explanation: "will บอกเล่า → tag ปฏิเสธ (won't you)"
        },
        {
          sentence: "They were happy, ___?",
          tag: "Was/Were",
          tagColor: "amber",
          emoji: "😊",
          options: ["were they", "weren't they", "was they", "wasn't they"],
          answer: "weren't they",
          explanation: "were บอกเล่า → tag ปฏิเสธ (weren't they)"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์ Question Tag ที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "He plays football, ___ (doesn't he)?",
          tag: "Present Simple",
          tagColor: "blue",
          answer: "doesn't he",
          explanation: "plays บอกเล่า → doesn't he"
        },
        {
          sentence: "She didn't call you, ___ (did she)?",
          tag: "Negative",
          tagColor: "secondary",
          answer: "did she",
          explanation: "ประโยคปฏิเสธ → tag บอกเล่า did she"
        },
        {
          sentence: "You should rest, ___ (shouldn't you)?",
          tag: "Modal",
          tagColor: "secondary",
          answer: "shouldn't you",
          explanation: "should บอกเล่า → shouldn't you"
        },
        {
          sentence: "He was late, ___ (wasn't he)?",
          tag: "Was/Were",
          tagColor: "amber",
          answer: "wasn't he",
          explanation: "was บอกเล่า → wasn't he"
        },
        {
          sentence: "We must finish this, ___ (mustn't we)?",
          tag: "Modal",
          tagColor: "secondary",
          answer: "mustn't we",
          explanation: "must บอกเล่า → mustn't we"
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
          sentence: "She eats vegetables, ___?",
          emoji: "🥦",
          options: ["doesn't she", "does she"],
          answer: "doesn't she",
          explanation: "eats บอกเล่า → doesn't she"
        },
        {
          sentence: "He didn't finish his homework, ___?",
          emoji: "📝",
          options: ["did he", "didn't he"],
          answer: "did he",
          explanation: "ประโยคปฏิเสธ → tag บอกเล่า did he"
        },
        {
          sentence: "You will come to the party, ___?",
          emoji: "🎉",
          options: ["won't you", "will you"],
          answer: "won't you",
          explanation: "will บอกเล่า → won't you"
        },
        {
          sentence: "They were at the beach, ___?",
          emoji: "🏖️",
          options: ["weren't they", "were they"],
          answer: "weren't they",
          explanation: "were บอกเล่า → weren't they"
        },
        {
          sentence: "We should leave now, ___?",
          emoji: "🚪",
          options: ["shouldn't we", "should we"],
          answer: "shouldn't we",
          explanation: "should บอกเล่า → shouldn't we"
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
          wrong: "She likes coffee, is she?",
          tag: "Present Simple",
          tagColor: "blue",
          options: ["She likes coffee, doesn't she?", "She likes coffee, does she?", "She likes coffee, isn't she?"],
          answer: "She likes coffee, doesn't she?",
          explanation: "Present Simple ใช้ do/does สร้าง tag ไม่ใช่ verb to be"
        },
        {
          wrong: "They went to school, went they?",
          tag: "Past Simple",
          tagColor: "blue",
          options: ["They went to school, didn't they?", "They went to school, did they?", "They went to school, weren't they?"],
          answer: "They went to school, didn't they?",
          explanation: "Past Simple บอกเล่า → tag ปฏิเสธด้วย didn't"
        },
        {
          wrong: "She doesn't like coffee, doesn't she?",
          tag: "Negative",
          tagColor: "secondary",
          options: ["She doesn't like coffee, does she?", "She doesn't like coffee, is she?", "She doesn't like coffee, did she?"],
          answer: "She doesn't like coffee, does she?",
          explanation: "ประโยคปฏิเสธต้องใช้ tag บอกเล่า (does she) ไม่ใช่ doesn't she"
        },
        {
          wrong: "You will help me, will you?",
          tag: "Modal",
          tagColor: "secondary",
          options: ["You will help me, won't you?", "You will help me, do you?", "You will help me, don't you?"],
          answer: "You will help me, won't you?",
          explanation: "will บอกเล่า → tag ปฏิเสธด้วย won't"
        },
        {
          wrong: "They were happy, was they?",
          tag: "Was/Were",
          tagColor: "amber",
          options: ["They were happy, weren't they?", "They were happy, were they?", "They were happy, wasn't they?"],
          answer: "They were happy, weren't they?",
          explanation: "ประธาน they ใช้คู่กับ were/weren't ไม่ใช่ was/wasn't"
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
          sentence: "He studies hard, ___?",
          bank: ["doesn't he", "does he", "isn't he"],
          answer: "doesn't he",
          explanation: "studies บอกเล่า → doesn't he"
        },
        {
          sentence: "You didn't call her, ___?",
          bank: ["did you", "didn't you", "do you"],
          answer: "did you",
          explanation: "ประโยคปฏิเสธ → tag บอกเล่า did you"
        },
        {
          sentence: "She must leave, ___?",
          bank: ["mustn't she", "must she", "doesn't she"],
          answer: "mustn't she",
          explanation: "must บอกเล่า → mustn't she"
        },
        {
          sentence: "He was tired, ___?",
          bank: ["wasn't he", "was he", "isn't he"],
          answer: "wasn't he",
          explanation: "was บอกเล่า → wasn't he"
        },
        {
          sentence: "We will win, ___?",
          bank: ["won't we", "will we", "don't we"],
          answer: "won't we",
          explanation: "will บอกเล่า → won't we"
        }
      ]
    }
  ]
};
