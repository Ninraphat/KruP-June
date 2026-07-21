const EXERCISE = {
  title: "Question Tags",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "🎓",
  subtitle: "ฝึก Perfect Tenses, ข้อยกเว้นพิเศษ, Negative Words และ Intonation",
  accentColor: "blue",
  contentPage: "c-question-tags-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือก Question Tag ที่ถูกต้อง",
      questions: [
        {
          sentence: "You have finished, ___?",
          tag: "Perfect",
          tagColor: "blue",
          emoji: "✅",
          options: ["have you", "haven't you", "did you", "didn't you"],
          answer: "haven't you",
          explanation: "have บอกเล่า → tag ปฏิเสธ (haven't you)"
        },
        {
          sentence: "I am late, ___?",
          tag: "Exception",
          tagColor: "secondary",
          emoji: "⏰",
          options: ["am I not", "amn't I", "aren't I", "isn't I"],
          answer: "aren't I",
          explanation: "ข้อยกเว้นพิเศษ: I am ใช้ aren't I เป็น tag"
        },
        {
          sentence: "Let's go, ___?",
          tag: "Exception",
          tagColor: "secondary",
          emoji: "🚶",
          options: ["shall we", "will we", "don't we", "aren't we"],
          answer: "shall we",
          explanation: "ข้อยกเว้นพิเศษ: Let's ใช้ shall we เป็น tag"
        },
        {
          sentence: "Close the door, ___?",
          tag: "Imperative",
          tagColor: "amber",
          emoji: "🚪",
          options: ["do you", "will you", "aren't you", "don't you"],
          answer: "will you",
          explanation: "ประโยคคำสั่ง (Imperative) ใช้ will you เป็น tag"
        },
        {
          sentence: "She never lies, ___?",
          tag: "Negative Word",
          tagColor: "purple",
          emoji: "🤥",
          options: ["does she", "doesn't she", "is she", "isn't she"],
          answer: "does she",
          explanation: "never เป็นคำแฝงความหมายปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
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
          sentence: "She had left before we arrived, ___ (hadn't she)?",
          tag: "Perfect",
          tagColor: "blue",
          answer: "hadn't she",
          explanation: "had บอกเล่า → tag ปฏิเสธ hadn't she"
        },
        {
          sentence: "I'm right, ___ (aren't I)?",
          tag: "Exception",
          tagColor: "secondary",
          answer: "aren't I",
          explanation: "ข้อยกเว้นพิเศษ: I am ใช้ aren't I"
        },
        {
          sentence: "Open the window, ___ (will you)?",
          tag: "Imperative",
          tagColor: "amber",
          answer: "will you",
          explanation: "ประโยคคำสั่งใช้ will you เป็น tag"
        },
        {
          sentence: "Nothing happened, ___ (did it)?",
          tag: "Negative Word",
          tagColor: "purple",
          answer: "did it",
          explanation: "nothing เป็นคำแฝงปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
        },
        {
          sentence: "No one called, ___ (did they)?",
          tag: "Negative Word",
          tagColor: "purple",
          answer: "did they",
          explanation: "no one เป็นคำแฝงปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
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
          sentence: "You have seen this movie, ___?",
          emoji: "🎬",
          options: ["haven't you", "have you"],
          answer: "haven't you",
          explanation: "have บอกเล่า → haven't you"
        },
        {
          sentence: "Let's eat, ___?",
          emoji: "🍽️",
          options: ["shall we", "don't we"],
          answer: "shall we",
          explanation: "Let's ใช้ shall we เป็น tag"
        },
        {
          sentence: "Pass me the salt, ___?",
          emoji: "🧂",
          options: ["will you", "do you"],
          answer: "will you",
          explanation: "ประโยคคำสั่งใช้ will you"
        },
        {
          sentence: "She hardly eats meat, ___?",
          emoji: "🥗",
          options: ["does she", "doesn't she"],
          answer: "does she",
          explanation: "hardly เป็นคำแฝงปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
        },
        {
          sentence: "I'm your friend, ___?",
          emoji: "🤝",
          options: ["aren't I", "am I not"],
          answer: "aren't I",
          explanation: "ข้อยกเว้นพิเศษ: I am ใช้ aren't I"
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
          wrong: "You have finished, did you?",
          tag: "Perfect",
          tagColor: "blue",
          options: ["You have finished, haven't you?", "You have finished, have you?", "You have finished, didn't you?"],
          answer: "You have finished, haven't you?",
          explanation: "Present Perfect (have) ใช้คู่กับ haven't ไม่ใช่ did"
        },
        {
          wrong: "I am late, am I not?",
          tag: "Exception",
          tagColor: "secondary",
          options: ["I am late, aren't I?", "I am late, isn't I?", "I am late, amn't I?"],
          answer: "I am late, aren't I?",
          explanation: "รูปมาตรฐานคือ aren't I ไม่ใช่ am I not (แม้จะถูกหลักไวยากรณ์แต่ไม่เป็นธรรมชาติ)"
        },
        {
          wrong: "Let's go, don't we?",
          tag: "Exception",
          tagColor: "secondary",
          options: ["Let's go, shall we?", "Let's go, will we?", "Let's go, do we?"],
          answer: "Let's go, shall we?",
          explanation: "Let's ต้องใช้ shall we เป็น tag เสมอ"
        },
        {
          wrong: "Close the door, don't you?",
          tag: "Imperative",
          tagColor: "amber",
          options: ["Close the door, will you?", "Close the door, do you?", "Close the door, aren't you?"],
          answer: "Close the door, will you?",
          explanation: "ประโยคคำสั่งใช้ will you เป็น tag"
        },
        {
          wrong: "She never lies, doesn't she?",
          tag: "Negative Word",
          tagColor: "purple",
          options: ["She never lies, does she?", "She never lies, isn't she?", "She never lies, is she?"],
          answer: "She never lies, does she?",
          explanation: "never เป็นคำแฝงปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า (does she) ไม่ใช่ doesn't she"
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
          sentence: "They have arrived, ___?",
          bank: ["haven't they", "have they", "didn't they"],
          answer: "haven't they",
          explanation: "have บอกเล่า → haven't they"
        },
        {
          sentence: "Let's start, ___?",
          bank: ["shall we", "will we", "don't we"],
          answer: "shall we",
          explanation: "Let's ใช้ shall we เป็น tag"
        },
        {
          sentence: "Turn off the light, ___?",
          bank: ["will you", "do you", "don't you"],
          answer: "will you",
          explanation: "ประโยคคำสั่งใช้ will you เป็น tag"
        },
        {
          sentence: "He hardly ever smiles, ___?",
          bank: ["does he", "doesn't he", "is he"],
          answer: "does he",
          explanation: "hardly เป็นคำแฝงปฏิเสธ ดังนั้น tag ต้องเป็นบอกเล่า"
        },
        {
          sentence: "I'm not wrong, ___?",
          bank: ["am I", "aren't I", "isn't it"],
          answer: "am I",
          explanation: "ประโยคปฏิเสธ (I'm not) → tag บอกเล่า am I"
        }
      ]
    }
  ]
};
