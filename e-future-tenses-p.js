const EXERCISE = {
  title: "Future Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🔮",
  subtitle: "ฝึกทำแบบฝึกหัด Will และ Be going to",
  accentColor: "blue",
  contentPage: "c-future-tenses-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "The phone is ringing! I ___ answer it.",
          tag: "Will",
          tagColor: "blue",
          emoji: "📞",
          options: ["will", "am going to", "am", "was"],
          answer: "will",
          explanation: "ตัดสินใจทันที ณ ตอนนั้น จึงใช้ will"
        },
        {
          sentence: "We ___ visit grandma tomorrow. We already planned it.",
          tag: "Going to",
          tagColor: "secondary",
          emoji: "👵",
          options: ["will", "are going to", "was", "did"],
          answer: "are going to",
          explanation: "เป็นแผนที่วางไว้ล่วงหน้าแล้ว จึงใช้ be going to"
        },
        {
          sentence: "I think it ___ rain tomorrow.",
          tag: "Will",
          tagColor: "blue",
          emoji: "🌧️",
          options: ["will", "am going to", "is", "was"],
          answer: "will",
          explanation: "การคาดเดาใช้ will"
        },
        {
          sentence: "She ___ buy a new bike next month.",
          tag: "Going to",
          tagColor: "secondary",
          emoji: "🚲",
          options: ["will", "is going to", "was", "did"],
          answer: "is going to",
          explanation: "ประธาน She ใช้ is going to สำหรับแผนที่ตั้งใจไว้"
        },
        {
          sentence: "I promise I ___ help you with your homework.",
          tag: "Will",
          tagColor: "blue",
          emoji: "🤝",
          options: ["will", "am going to", "am", "do"],
          answer: "will",
          explanation: "การสัญญาใช้ will"
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
          sentence: "I ___ (help) you carry the bags. Give them to me.",
          tag: "Will",
          tagColor: "blue",
          answer: "will help",
          explanation: "ตัดสินใจทันทีตอนที่พูด ใช้ will"
        },
        {
          sentence: "We ___ (go) to the beach next weekend. We already booked a hotel.",
          tag: "Going to",
          tagColor: "secondary",
          answer: "are going to go",
          explanation: "เป็นแผนที่วางไว้แล้ว ใช้ be going to"
        },
        {
          sentence: "I ___ (call) you tonight.",
          tag: "Will",
          tagColor: "blue",
          answer: "will call",
          explanation: "การสัญญาใช้ will"
        },
        {
          sentence: "He ___ (watch) a movie this evening. He already has the ticket.",
          tag: "Going to",
          tagColor: "secondary",
          answer: "is going to watch",
          explanation: "มีการเตรียมการล่วงหน้า (มีตั๋วแล้ว) ใช้ be going to"
        },
        {
          sentence: "Look at the sky! It ___ (rain) soon.",
          tag: "Going to",
          tagColor: "secondary",
          answer: "is going to rain",
          explanation: "มีหลักฐานตรงหน้า (ท้องฟ้า) ใช้ be going to สำหรับการคาดเดา"
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
          sentence: "I ___ eat this cake. It looks delicious!",
          emoji: "🍰",
          options: ["will", "am going to"],
          answer: "will",
          explanation: "ตัดสินใจทันทีตอนเห็นเค้ก ใช้ will"
        },
        {
          sentence: "We ___ to the zoo tomorrow. It's already planned.",
          emoji: "🦁",
          options: ["will go", "are going"],
          answer: "are going",
          explanation: "เป็นแผนที่ตั้งใจไว้แล้ว ใช้ be going to (are going)"
        },
        {
          sentence: "I think she ___ win the race.",
          emoji: "🏃",
          options: ["will", "is going to"],
          answer: "will",
          explanation: "การคาดเดาความคิดเห็นทั่วไปใช้ will"
        },
        {
          sentence: "He ___ to buy this toy. He already has the money ready.",
          emoji: "🧸",
          options: ["will", "is going"],
          answer: "is going",
          explanation: "แผนที่เตรียมไว้แล้ว (มีเงินพร้อม) ใช้ be going to"
        },
        {
          sentence: "It's cold! I ___ close the window.",
          emoji: "🪟",
          options: ["will", "am going to"],
          answer: "will",
          explanation: "ตัดสินใจทันทีตอนรู้สึกหนาว ใช้ will"
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
          wrong: "I going to help you tomorrow.",
          tag: "Going to",
          tagColor: "secondary",
          options: ["I am going to help you tomorrow.", "I will going to help you tomorrow.", "I is going to help you tomorrow."],
          answer: "I am going to help you tomorrow.",
          explanation: "ต้องมี verb to be (am) ก่อน going to เสมอ"
        },
        {
          wrong: "She will helps you with your homework.",
          tag: "Will",
          tagColor: "blue",
          options: ["She will help you with your homework.", "She wills help you with your homework.", "She will helping you with your homework."],
          answer: "She will help you with your homework.",
          explanation: "หลัง will กริยาต้องเป็น V1 เสมอ ไม่เติม s"
        },
        {
          wrong: "We is going to visit grandma tomorrow.",
          tag: "Going to",
          tagColor: "secondary",
          options: ["We are going to visit grandma tomorrow.", "We will going to visit grandma tomorrow.", "We going to visit grandma tomorrow."],
          answer: "We are going to visit grandma tomorrow.",
          explanation: "ประธาน We (พหูพจน์) ต้องใช้ are ไม่ใช่ is"
        },
        {
          wrong: "I think it will raining tomorrow.",
          tag: "Will",
          tagColor: "blue",
          options: ["I think it will rain tomorrow.", "I think it will rains tomorrow.", "I think it is will rain tomorrow."],
          answer: "I think it will rain tomorrow.",
          explanation: "หลัง will กริยาต้องเป็น V1 เท่านั้น ไม่เติม -ing"
        },
        {
          wrong: "He going to buy a new bike next month.",
          tag: "Going to",
          tagColor: "secondary",
          options: ["He is going to buy a new bike next month.", "He will going to buy a new bike next month.", "He are going to buy a new bike next month."],
          answer: "He is going to buy a new bike next month.",
          explanation: "ประธาน He (เอกพจน์) ต้องมี is ก่อน going to"
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
          sentence: "I ___ carry your bag for you.",
          bank: ["will", "am going", "is"],
          answer: "will",
          explanation: "ตัดสินใจช่วยเหลือทันทีตอนนั้น ใช้ will"
        },
        {
          sentence: "They ___ going to play football this evening.",
          bank: ["are", "will", "is"],
          answer: "are",
          explanation: "ประธาน They (พหูพจน์) ใช้ are ก่อน going to"
        },
        {
          sentence: "I promise I ___ be there on time.",
          bank: ["will", "am going", "was"],
          answer: "will",
          explanation: "การสัญญาใช้ will"
        },
        {
          sentence: "She ___ going to buy a new bag next month.",
          bank: ["is", "are", "will"],
          answer: "is",
          explanation: "ประธาน She (เอกพจน์) ใช้ is ก่อน going to"
        },
        {
          sentence: "Look at the clouds! It ___ going to rain.",
          bank: ["is", "will", "are"],
          answer: "is",
          explanation: "ประธาน It ใช้ is ก่อน going to สำหรับการคาดเดาจากหลักฐาน"
        }
      ]
    }
  ]
};
