const EXERCISE = {
  title: "Prepositions",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "ฝึก Adjective + Preposition, Dependent Preposition, Phrasal Verb และ Complex Prepositional Phrase",
  accentColor: "blue",
  contentPage: "c-prepositions-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She is good ___ solving problems.",
          tag: "Adjective + Prep",
          tagColor: "blue",
          emoji: "🧩",
          options: ["at", "in", "on", "for"],
          answer: "at",
          explanation: "good ต้องตามด้วย at เสมอ"
        },
        {
          sentence: "It ___ on the weather.",
          tag: "Dependent Prep",
          tagColor: "secondary",
          emoji: "🌦️",
          options: ["depends", "consists", "relies", "waits"],
          answer: "depends",
          explanation: "depend ต้องตามด้วย on เสมอ (depend on)"
        },
        {
          sentence: "Don't ___ on your dreams.",
          tag: "Phrasal Verb",
          tagColor: "amber",
          emoji: "💭",
          options: ["give up", "look up", "put off", "wait for"],
          answer: "give up",
          explanation: "give up แปลว่ายอมแพ้"
        },
        {
          sentence: "___ are you waiting for?",
          tag: "Ending Prep",
          tagColor: "purple",
          emoji: "❓",
          options: ["Who", "Whom", "For who", "About who"],
          answer: "Who",
          explanation: "รูปแบบไม่เป็นทางการวาง preposition ท้ายประโยค: Who...for?"
        },
        {
          sentence: "___ the rain, we went out.",
          tag: "Complex Phrase",
          tagColor: "blue",
          emoji: "🌧️",
          options: ["In spite of", "According to", "Because of", "In terms of"],
          answer: "In spite of",
          explanation: "In spite of แปลว่าแม้ว่า ใช้แสดงความขัดแย้ง"
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
          sentence: "I'm worried ___ (about) the exam results.",
          tag: "Adjective + Prep",
          tagColor: "blue",
          answer: "about",
          explanation: "worried ต้องตามด้วย about เสมอ"
        },
        {
          sentence: "The team ___ (consist) of ten players.",
          tag: "Dependent Prep",
          tagColor: "secondary",
          answer: "consists",
          explanation: "consist ต้องตามด้วย of เสมอ (consist of)"
        },
        {
          sentence: "I need to ___ (look up) this word in a dictionary.",
          tag: "Phrasal Verb",
          tagColor: "amber",
          answer: "look up",
          explanation: "look up แปลว่าค้นหาข้อมูล"
        },
        {
          sentence: "What are you thinking ___ (about)?",
          tag: "Ending Prep",
          tagColor: "purple",
          answer: "about",
          explanation: "รูปแบบไม่เป็นทางการวาง preposition ท้ายประโยค"
        },
        {
          sentence: "___ (according to) the report, sales increased.",
          tag: "Complex Phrase",
          tagColor: "blue",
          answer: "According to",
          explanation: "According to แปลว่าตามที่...บอก"
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
          sentence: "He is afraid ___ heights.",
          emoji: "🏔️",
          options: ["of", "at"],
          answer: "of",
          explanation: "afraid ต้องตามด้วย of เสมอ"
        },
        {
          sentence: "He apologized ___ being late.",
          emoji: "⏰",
          options: ["for", "of"],
          answer: "for",
          explanation: "apologize ต้องตามด้วย for เสมอ"
        },
        {
          sentence: "We ___ the meeting until next week.",
          emoji: "📅",
          options: ["put off", "look up"],
          answer: "put off",
          explanation: "put off แปลว่าเลื่อนออกไป"
        },
        {
          sentence: "___ are you talking to?",
          emoji: "💬",
          options: ["Who", "Whom formal"],
          answer: "Who",
          explanation: "รูปแบบไม่เป็นทางการใช้ Who...to? ท้ายประโยค"
        },
        {
          sentence: "The project is good ___ cost efficiency.",
          emoji: "💰",
          options: ["in terms of", "in spite of"],
          answer: "in terms of",
          explanation: "in terms of แปลว่าในแง่ของ"
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
          wrong: "She is good in solving problems.",
          tag: "Adjective + Prep",
          tagColor: "blue",
          options: ["She is good at solving problems.", "She is good on solving problems.", "She is good for solving problems."],
          answer: "She is good at solving problems.",
          explanation: "good ต้องตามด้วย at เสมอ ไม่ใช่ in"
        },
        {
          wrong: "It depends of the weather.",
          tag: "Dependent Prep",
          tagColor: "secondary",
          options: ["It depends on the weather.", "It depends in the weather.", "It depends for the weather."],
          answer: "It depends on the weather.",
          explanation: "depend ต้องตามด้วย on เสมอ ไม่ใช่ of"
        },
        {
          wrong: "Don't give in on your dreams.",
          tag: "Phrasal Verb",
          tagColor: "amber",
          options: ["Don't give up on your dreams.", "Don't give on up your dreams.", "Don't given up on your dreams."],
          answer: "Don't give up on your dreams.",
          explanation: "phrasal verb ที่ถูกต้องคือ give up ไม่ใช่ give in ในบริบทนี้"
        },
        {
          wrong: "For who are you waiting? (informal context)",
          tag: "Ending Prep",
          tagColor: "purple",
          options: ["Who are you waiting for?", "Whom you are waiting for?", "Who for are you waiting?"],
          answer: "Who are you waiting for?",
          explanation: "รูปแบบไม่เป็นทางการวาง preposition ท้ายประโยค ไม่ใช่ต้นประโยค"
        },
        {
          wrong: "In spite of the rain, but we went out.",
          tag: "Complex Phrase",
          tagColor: "blue",
          options: ["In spite of the rain, we went out.", "Despite of the rain, but we went out.", "In spite the rain, we went out."],
          answer: "In spite of the rain, we went out.",
          explanation: "In spite of ไม่ต้องมี but ตามหลัง เพราะทำหน้าที่เชื่อมความขัดแย้งอยู่แล้ว"
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
          sentence: "She is proud ___ her achievements.",
          bank: ["of", "in", "at"],
          answer: "of",
          explanation: "proud ต้องตามด้วย of เสมอ"
        },
        {
          sentence: "What's the reason ___ your absence?",
          bank: ["for", "of", "at"],
          answer: "for",
          explanation: "reason ต้องตามด้วย for เสมอ"
        },
        {
          sentence: "I need to ___ this issue with my manager.",
          bank: ["look into", "look up", "give up"],
          answer: "look into",
          explanation: "look into แปลว่าตรวจสอบ/สืบสวนเรื่องราว"
        },
        {
          sentence: "___ heights, she's afraid of spiders too.",
          bank: ["In addition to", "In spite of", "According to"],
          answer: "In addition to",
          explanation: "In addition to แปลว่านอกจากนี้ยัง..."
        },
        {
          sentence: "___ the news report, the economy is improving.",
          bank: ["According to", "In terms of", "In spite of"],
          answer: "According to",
          explanation: "According to แปลว่าตามที่...รายงาน"
        }
      ]
    }
  ]
};
