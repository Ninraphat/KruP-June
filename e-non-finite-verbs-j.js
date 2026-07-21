const EXERCISE = {
  title: "Non-Finite Verbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🔤",
  subtitle: "ฝึกกริยากลุ่มตายตัว, Infinitive of Purpose และ Gerund หลัง Preposition",
  accentColor: "blue",
  contentPage: "c-non-finite-verbs-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She finished ___ her homework.",
          tag: "Gerund",
          tagColor: "blue",
          emoji: "📝",
          options: ["do", "doing", "to do", "did"],
          answer: "doing",
          explanation: "finish เป็นกริยาที่ตามด้วย V-ing เสมอ"
        },
        {
          sentence: "We plan ___ Japan next year.",
          tag: "Infinitive",
          tagColor: "secondary",
          emoji: "🗾",
          options: ["visit", "visiting", "to visit", "visited"],
          answer: "to visit",
          explanation: "plan เป็นกริยาที่ตามด้วย to + V1 เสมอ"
        },
        {
          sentence: "I went to the store ___ some milk.",
          tag: "Purpose",
          tagColor: "amber",
          emoji: "🥛",
          options: ["buy", "buying", "to buy", "bought"],
          answer: "to buy",
          explanation: "Infinitive of Purpose ใช้ to + V1 เพื่อบอกจุดประสงค์ (แปลว่า 'เพื่อ')"
        },
        {
          sentence: "I'm interested in ___ Japanese.",
          tag: "After Preposition",
          tagColor: "purple",
          emoji: "🎌",
          options: ["learn", "learning", "to learn", "learned"],
          answer: "learning",
          explanation: "หลัง preposition (in) ต้องใช้ V-ing เสมอ"
        },
        {
          sentence: "He avoids ___ junk food.",
          tag: "Gerund",
          tagColor: "blue",
          emoji: "🍔",
          options: ["eat", "eating", "to eat", "ate"],
          answer: "eating",
          explanation: "avoid เป็นกริยาที่ตามด้วย V-ing เสมอ"
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
          sentence: "Do you mind ___ (open) the window?",
          tag: "Gerund",
          tagColor: "blue",
          answer: "opening",
          explanation: "mind เป็นกริยาที่ตามด้วย V-ing เสมอ"
        },
        {
          sentence: "He promised ___ (help) me with my project.",
          tag: "Infinitive",
          tagColor: "secondary",
          answer: "to help",
          explanation: "promise เป็นกริยาที่ตามด้วย to + V1 เสมอ"
        },
        {
          sentence: "She woke up early ___ (catch) the bus.",
          tag: "Purpose",
          tagColor: "amber",
          answer: "to catch",
          explanation: "Infinitive of Purpose บอกจุดประสงค์ของการกระทำ"
        },
        {
          sentence: "Wash your hands before ___ (eat).",
          tag: "After Preposition",
          tagColor: "purple",
          answer: "eating",
          explanation: "หลัง preposition (before) ต้องใช้ V-ing"
        },
        {
          sentence: "We practice ___ (speak) English every day.",
          tag: "Gerund",
          tagColor: "blue",
          answer: "speaking",
          explanation: "practice เป็นกริยาที่ตามด้วย V-ing เสมอ"
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
          sentence: "I hope ___ Japan someday.",
          emoji: "🗾",
          options: ["to visit", "visiting"],
          answer: "to visit",
          explanation: "hope เป็นกริยาที่ตามด้วย to + V1"
        },
        {
          sentence: "She avoids ___ coffee at night.",
          emoji: "☕",
          options: ["drinking", "to drink"],
          answer: "drinking",
          explanation: "avoid เป็นกริยาที่ตามด้วย V-ing"
        },
        {
          sentence: "He went to the shop ___ some bread.",
          emoji: "🍞",
          options: ["to buy", "buying"],
          answer: "to buy",
          explanation: "Infinitive of Purpose บอกจุดประสงค์ (เพื่อซื้อขนมปัง)"
        },
        {
          sentence: "I'm good at ___ pictures.",
          emoji: "🎨",
          options: ["drawing", "to draw"],
          answer: "drawing",
          explanation: "หลัง preposition (at) ต้องใช้ V-ing"
        },
        {
          sentence: "They decided ___ their trip.",
          emoji: "✈️",
          options: ["to cancel", "cancelling"],
          answer: "to cancel",
          explanation: "decide เป็นกริยาที่ตามด้วย to + V1"
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
          wrong: "She finished to do her homework.",
          tag: "Gerund",
          tagColor: "blue",
          options: ["She finished doing her homework.", "She finished do her homework.", "She finishes to do her homework."],
          answer: "She finished doing her homework.",
          explanation: "finish ตามด้วย V-ing เสมอ ไม่ใช่ to + V1"
        },
        {
          wrong: "We plan visiting Japan next year.",
          tag: "Infinitive",
          tagColor: "secondary",
          options: ["We plan to visit Japan next year.", "We plan visit Japan next year.", "We plans to visit Japan next year."],
          answer: "We plan to visit Japan next year.",
          explanation: "plan ตามด้วย to + V1 เสมอ ไม่ใช่ V-ing"
        },
        {
          wrong: "I went to the store buying some milk.",
          tag: "Purpose",
          tagColor: "amber",
          options: ["I went to the store to buy some milk.", "I went to the store buy some milk.", "I went to the store for buying some milk."],
          answer: "I went to the store to buy some milk.",
          explanation: "Infinitive of Purpose ใช้ to + V1 ไม่ใช่ V-ing"
        },
        {
          wrong: "I'm interested in to learn Japanese.",
          tag: "After Preposition",
          tagColor: "purple",
          options: ["I'm interested in learning Japanese.", "I'm interested to learning Japanese.", "I'm interested learn Japanese."],
          answer: "I'm interested in learning Japanese.",
          explanation: "หลัง preposition (in) ต้องใช้ V-ing ไม่ใช่ to + V1"
        },
        {
          wrong: "He avoids to eat junk food.",
          tag: "Gerund",
          tagColor: "blue",
          options: ["He avoids eating junk food.", "He avoid to eat junk food.", "He avoids eat junk food."],
          answer: "He avoids eating junk food.",
          explanation: "avoid ตามด้วย V-ing เสมอ ไม่ใช่ to + V1"
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
          sentence: "He promised ___ on time.",
          bank: ["to arrive", "arriving", "arrive"],
          answer: "to arrive",
          explanation: "promise ตามด้วย to + V1"
        },
        {
          sentence: "She enjoys ___ to music.",
          bank: ["listening", "to listen", "listen"],
          answer: "listening",
          explanation: "enjoy ตามด้วย V-ing"
        },
        {
          sentence: "I called my friend ___ him about the party.",
          bank: ["to tell", "telling", "tell"],
          answer: "to tell",
          explanation: "Infinitive of Purpose บอกจุดประสงค์"
        },
        {
          sentence: "Thank you for ___ me.",
          bank: ["helping", "to help", "help"],
          answer: "helping",
          explanation: "หลัง preposition (for) ต้องใช้ V-ing"
        },
        {
          sentence: "They hope ___ the competition.",
          bank: ["to win", "winning", "win"],
          answer: "to win",
          explanation: "hope ตามด้วย to + V1"
        }
      ]
    }
  ]
};
