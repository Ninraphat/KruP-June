const EXERCISE = {
  title: "Present Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "☀️",
  subtitle: "ฝึกทำแบบฝึกหัด Present Simple และ Present Continuous",
  accentColor: "blue",
  contentPage: "c-present-tenses-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She ___ to school every day.",
          tag: "Simple",
          tagColor: "blue",
          emoji: "🎒",
          options: ["walk", "walks", "is walking", "walking"],
          answer: "walks",
          explanation: "ประธาน She (เอกพจน์) ต้องเติม s ที่กริยาใน Present Simple"
        },
        {
          sentence: "Look! The cat ___ on the sofa.",
          tag: "Continuous",
          tagColor: "secondary",
          emoji: "🐱",
          options: ["sleep", "sleeps", "is sleeping", "are sleeping"],
          answer: "is sleeping",
          explanation: "มีคำว่า 'Look!' บ่งบอกว่ากำลังเกิดขึ้นตอนนี้ ใช้ is + V-ing"
        },
        {
          sentence: "We ___ football every weekend.",
          tag: "Simple",
          tagColor: "blue",
          emoji: "⚽",
          options: ["play", "plays", "am playing", "playing"],
          answer: "play",
          explanation: "ประธาน We ไม่เติม s และมีคำว่า every weekend บ่งบอกความเป็นประจำ"
        },
        {
          sentence: "I ___ my homework right now.",
          tag: "Continuous",
          tagColor: "secondary",
          emoji: "📝",
          options: ["do", "does", "am doing", "is doing"],
          answer: "am doing",
          explanation: "ประธาน I ใช้ am + V-ing และมีคำว่า right now"
        },
        {
          sentence: "The sun ___ in the east.",
          tag: "Simple",
          tagColor: "blue",
          emoji: "🌞",
          options: ["rise", "rises", "is rising", "rising"],
          answer: "rises",
          explanation: "เป็นข้อเท็จจริงทั่วไป (fact) จึงใช้ Present Simple และเติม s เพราะ the sun เป็นเอกพจน์"
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
          sentence: "He ___ (brush) his teeth every morning.",
          tag: "Simple",
          tagColor: "blue",
          answer: "brushes",
          explanation: "ประธาน He (เอกพจน์) ต้องเติม es เพราะ brush ลงท้ายด้วย sh"
        },
        {
          sentence: "They ___ (eat) lunch now.",
          tag: "Continuous",
          tagColor: "secondary",
          answer: "are eating",
          explanation: "ประธาน They ใช้ are + V-ing และมีคำว่า now"
        },
        {
          sentence: "My mom ___ (cook) dinner every evening.",
          tag: "Simple",
          tagColor: "blue",
          answer: "cooks",
          explanation: "ประธาน My mom (เอกพจน์) เติม s และมีคำว่า every evening บ่งบอกความเป็นประจำ"
        },
        {
          sentence: "Look! The children ___ (play) in the park.",
          tag: "Continuous",
          tagColor: "secondary",
          answer: "are playing",
          explanation: "ประธาน The children (พหูพจน์) ใช้ are + V-ing และมีคำว่า Look! บ่งบอกว่ากำลังเกิดขึ้นตอนนี้"
        },
        {
          sentence: "I ___ (go) to school by bus every day.",
          tag: "Simple",
          tagColor: "blue",
          answer: "go",
          explanation: "ประธาน I ไม่เติม s และมีคำว่า every day บ่งบอกความเป็นประจำ"
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
          sentence: "The boy ___ a book now.",
          emoji: "📖",
          options: ["reads", "is reading"],
          answer: "is reading",
          explanation: "มีคำว่า 'now' บ่งบอกว่ากำลังเกิดขึ้นตอนนี้ ใช้ Present Continuous"
        },
        {
          sentence: "Birds ___ in the sky every day.",
          emoji: "🐦",
          options: ["fly", "are flying"],
          answer: "fly",
          explanation: "เป็นข้อเท็จจริงทั่วไป (fact) และมีคำว่า every day จึงใช้ Present Simple"
        },
        {
          sentence: "She ___ her bike right now.",
          emoji: "🚲",
          options: ["rides", "is riding"],
          answer: "is riding",
          explanation: "มีคำว่า 'right now' บ่งบอกว่ากำลังเกิดขึ้นตอนนี้ ใช้ Present Continuous"
        },
        {
          sentence: "We ___ dinner at 7 PM every night.",
          emoji: "🍽️",
          options: ["have", "are having"],
          answer: "have",
          explanation: "เป็นกิจวัตรประจำที่ทำเป็นประจำทุกคืน จึงใช้ Present Simple"
        },
        {
          sentence: "Listen! The baby ___.",
          emoji: "👶",
          options: ["cries", "is crying"],
          answer: "is crying",
          explanation: "มีคำว่า 'Listen!' บ่งบอกว่ากำลังเกิดขึ้นตอนนี้ ใช้ Present Continuous"
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
          wrong: "She walk to school every day.",
          tag: "Simple",
          tagColor: "blue",
          options: ["She walks to school every day.", "She is walk to school every day.", "She walking to school every day."],
          answer: "She walks to school every day.",
          explanation: "ประธาน She (เอกพจน์) ต้องเติม s ที่กริยา"
        },
        {
          wrong: "Look! The dog run in the garden.",
          tag: "Continuous",
          tagColor: "secondary",
          options: ["Look! The dog is running in the garden.", "Look! The dog runs in the garden.", "Look! The dog running in the garden."],
          answer: "Look! The dog is running in the garden.",
          explanation: "มีคำว่า 'Look!' ต้องใช้ Present Continuous: is + V-ing"
        },
        {
          wrong: "I is doing my homework now.",
          tag: "Continuous",
          tagColor: "secondary",
          options: ["I am doing my homework now.", "I are doing my homework now.", "I does my homework now."],
          answer: "I am doing my homework now.",
          explanation: "ประธาน I ต้องใช้ am ไม่ใช่ is"
        },
        {
          wrong: "They plays football every weekend.",
          tag: "Simple",
          tagColor: "blue",
          options: ["They play football every weekend.", "They is playing football every weekend.", "They playing football every weekend."],
          answer: "They play football every weekend.",
          explanation: "ประธาน They (พหูพจน์) ไม่เติม s ที่กริยา"
        },
        {
          wrong: "The sun rise in the east.",
          tag: "Simple",
          tagColor: "blue",
          options: ["The sun rises in the east.", "The sun is rising in the east.", "The sun rising in the east."],
          answer: "The sun rises in the east.",
          explanation: "ประธาน The sun (เอกพจน์) ต้องเติม s ที่กริยาสำหรับข้อเท็จจริงทั่วไป"
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
          sentence: "She ___ to music every evening.",
          bank: ["listens", "listen", "is listening"],
          answer: "listens",
          explanation: "ประธาน She (เอกพจน์) ต้องเติม s และมีคำว่า every evening บ่งบอกความเป็นประจำ"
        },
        {
          sentence: "Look! They ___ in the pool.",
          bank: ["swim", "swims", "are swimming"],
          answer: "are swimming",
          explanation: "ประธาน They (พหูพจน์) ใช้ are + V-ing และมีคำว่า Look! บ่งบอกว่ากำลังเกิดขึ้นตอนนี้"
        },
        {
          sentence: "My dad ___ the newspaper every morning.",
          bank: ["reads", "read", "is reading"],
          answer: "reads",
          explanation: "ประธาน My dad (เอกพจน์) เติม s และมีคำว่า every morning บ่งบอกความเป็นประจำ"
        },
        {
          sentence: "I ___ TV right now.",
          bank: ["am watching", "watch", "watches"],
          answer: "am watching",
          explanation: "ประธาน I ใช้ am + V-ing และมีคำว่า right now"
        },
        {
          sentence: "Cats ___ milk.",
          bank: ["like", "likes", "are liking"],
          answer: "like",
          explanation: "เป็นข้อเท็จจริงทั่วไป ประธาน Cats (พหูพจน์) ไม่เติม s"
        }
      ]
    }
  ]
};
