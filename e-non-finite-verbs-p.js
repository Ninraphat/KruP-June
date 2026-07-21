const EXERCISE = {
  title: "Non-Finite Verbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🔤",
  subtitle: "ฝึกทำแบบฝึกหัด Gerund และ Infinitive แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-non-finite-verbs-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "I like ___ football with my friends.",
          tag: "Gerund",
          tagColor: "blue",
          emoji: "⚽",
          options: ["play", "playing", "to play", "played"],
          answer: "playing",
          explanation: "like ตามด้วย V-ing (gerund)"
        },
        {
          sentence: "She wants ___ ice cream.",
          tag: "Infinitive",
          tagColor: "secondary",
          emoji: "🍦",
          options: ["eat", "eating", "to eat", "ate"],
          answer: "to eat",
          explanation: "want ตามด้วย to + V1 (infinitive)"
        },
        {
          sentence: "___ books is fun.",
          tag: "Gerund",
          tagColor: "blue",
          emoji: "📚",
          options: ["Read", "Reading", "To read", "Reads"],
          answer: "Reading",
          explanation: "V-ing ใช้เป็นประธานของประโยคได้"
        },
        {
          sentence: "I need ___ to school now.",
          tag: "Infinitive",
          tagColor: "secondary",
          emoji: "🏫",
          options: ["go", "going", "to go", "went"],
          answer: "to go",
          explanation: "need ตามด้วย to + V1"
        },
        {
          sentence: "He enjoys ___ his bike.",
          tag: "Gerund",
          tagColor: "blue",
          emoji: "🚲",
          options: ["ride", "riding", "to ride", "rode"],
          answer: "riding",
          explanation: "enjoy ตามด้วย V-ing (gerund)"
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
          sentence: "I love ___ (sing) songs.",
          tag: "Gerund",
          tagColor: "blue",
          answer: "singing",
          explanation: "love ตามด้วย V-ing"
        },
        {
          sentence: "She would like ___ (visit) her grandma.",
          tag: "Infinitive",
          tagColor: "secondary",
          answer: "to visit",
          explanation: "would like ตามด้วย to + V1"
        },
        {
          sentence: "We hate ___ (wait) in line.",
          tag: "Gerund",
          tagColor: "blue",
          answer: "waiting",
          explanation: "hate ตามด้วย V-ing"
        },
        {
          sentence: "He needs ___ (do) his homework.",
          tag: "Infinitive",
          tagColor: "secondary",
          answer: "to do",
          explanation: "need ตามด้วย to + V1"
        },
        {
          sentence: "___ (Dance) makes me happy.",
          tag: "Gerund",
          tagColor: "blue",
          answer: "Dancing",
          explanation: "V-ing ใช้เป็นประธานของประโยคได้"
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
          sentence: "I like ___ pictures.",
          emoji: "📷",
          options: ["taking", "to take"],
          answer: "taking",
          explanation: "like ตามด้วย V-ing"
        },
        {
          sentence: "She wants ___ a new dress.",
          emoji: "👗",
          options: ["buying", "to buy"],
          answer: "to buy",
          explanation: "want ตามด้วย to + V1"
        },
        {
          sentence: "He enjoys ___ football.",
          emoji: "⚽",
          options: ["playing", "to play"],
          answer: "playing",
          explanation: "enjoy ตามด้วย V-ing"
        },
        {
          sentence: "We need ___ some water.",
          emoji: "💧",
          options: ["drinking", "to drink"],
          answer: "to drink",
          explanation: "need ตามด้วย to + V1"
        },
        {
          sentence: "They love ___ in the pool.",
          emoji: "🏊",
          options: ["swimming", "to swim"],
          answer: "swimming",
          explanation: "love ตามด้วย V-ing"
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
          wrong: "I like play football.",
          tag: "Gerund",
          tagColor: "blue",
          options: ["I like playing football.", "I like to played football.", "I liking play football."],
          answer: "I like playing football.",
          explanation: "like ตามด้วย V-ing ไม่ใช่ V1 เฉยๆ"
        },
        {
          wrong: "She wants eating ice cream.",
          tag: "Infinitive",
          tagColor: "secondary",
          options: ["She wants to eat ice cream.", "She wants eat ice cream.", "She want to eat ice cream."],
          answer: "She wants to eat ice cream.",
          explanation: "want ตามด้วย to + V1 ไม่ใช่ V-ing"
        },
        {
          wrong: "Read books is fun.",
          tag: "Gerund",
          tagColor: "blue",
          options: ["Reading books is fun.", "To reading books is fun.", "Reads books is fun."],
          answer: "Reading books is fun.",
          explanation: "V-ing (Reading) ใช้เป็นประธานของประโยคได้ ไม่ใช่ V1"
        },
        {
          wrong: "I need going to school now.",
          tag: "Infinitive",
          tagColor: "secondary",
          options: ["I need to go to school now.", "I need go to school now.", "I needs to go to school now."],
          answer: "I need to go to school now.",
          explanation: "need ตามด้วย to + V1 ไม่ใช่ V-ing"
        },
        {
          wrong: "He enjoys to ride his bike.",
          tag: "Gerund",
          tagColor: "blue",
          options: ["He enjoys riding his bike.", "He enjoy to ride his bike.", "He enjoys ride his bike."],
          answer: "He enjoys riding his bike.",
          explanation: "enjoy ตามด้วย V-ing ไม่ใช่ to + V1"
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
          sentence: "I like ___ with my dog.",
          bank: ["playing", "to play", "play"],
          answer: "playing",
          explanation: "like ตามด้วย V-ing"
        },
        {
          sentence: "She wants ___ a new toy.",
          bank: ["to buy", "buying", "buy"],
          answer: "to buy",
          explanation: "want ตามด้วย to + V1"
        },
        {
          sentence: "We enjoy ___ movies.",
          bank: ["watching", "to watch", "watch"],
          answer: "watching",
          explanation: "enjoy ตามด้วย V-ing"
        },
        {
          sentence: "He needs ___ his room.",
          bank: ["to clean", "cleaning", "clean"],
          answer: "to clean",
          explanation: "need ตามด้วย to + V1"
        },
        {
          sentence: "___ is my favorite hobby.",
          bank: ["Drawing", "To draw", "Draw"],
          answer: "Drawing",
          explanation: "V-ing ใช้เป็นประธานของประโยคได้"
        }
      ]
    }
  ]
};
