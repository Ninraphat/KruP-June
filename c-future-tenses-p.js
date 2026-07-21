const CONTENT = {
  title: "Future Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🔮",
  subtitle: "เรียนรู้การพูดถึงสิ่งที่จะเกิดขึ้นในอนาคตแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Will + V1",
      cards: [
        {
          title: "Will คืออะไร?",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**will + V1** ใช้พูดถึงสิ่งที่จะเกิดขึ้นในอนาคต เช่น การ **ตัดสินใจทันที**, การ **สัญญา** หรือการ **คาดเดา**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["I / You / We / They / He / She / It", "will + V1", "I **will help** you."],
                ["ย่อ", "'ll + V1", "I**'ll** help you."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "tomorrow, next week, next year, soon, tonight"
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "I **will help** you with your homework.", th: "ฉันจะช่วยเธอทำการบ้าน" },
                { en: "She **will call** you tonight.", th: "เธอจะโทรหาเธอคืนนี้" },
                { en: "It **will rain** tomorrow.", th: "พรุ่งนี้ฝนจะตก" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Be going to + V1",
      cards: [
        {
          title: "Be going to คืออะไร?",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**be going to + V1** ใช้พูดถึง **แผนหรือความตั้งใจ** ที่วางไว้ล่วงหน้าก่อนพูด โครงสร้างคือ **is/am/are + going to + V1**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประธาน", "Verb to be", "ตัวอย่าง"],
              rows: [
                ["I", "am", "I **am going to** visit my grandma."],
                ["He / She / It", "is", "He **is going to** buy a new bike."],
                ["You / We / They", "are", "We **are going to** watch a movie."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ใช้ **be going to** เมื่อเรา **วางแผนไว้แล้ว** ก่อนที่จะพูด ไม่ใช่ตัดสินใจสดๆ ตอนนั้น"
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "We **are going to visit** grandma tomorrow.", th: "เราจะไปเยี่ยมคุณยายพรุ่งนี้" },
                { en: "I **am going to** buy a new bag next month.", th: "ฉันจะซื้อกระเป๋าใหม่เดือนหน้า" },
                { en: "They **are going to** play football this evening.", th: "พวกเขาจะไปเล่นฟุตบอลตอนเย็นนี้" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ทบทวนและเปรียบเทียบ",
      cards: [
        {
          title: "Will vs Be going to",
          icon: "🔍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Will",
                  sub: "ตัดสินใจทันที / สัญญา",
                  color: "blue",
                  body: "I**'ll** answer the phone.\n\nนึกขึ้นได้ตอนนั้นเลย"
                },
                {
                  word: "Going to",
                  sub: "แผนที่วางไว้แล้ว",
                  color: "secondary",
                  body: "I**'m going to** visit grandma.\n\nวางแผนไว้ล่วงหน้า"
                }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "will", color: "blue" },
                { text: "tomorrow", color: "blue" },
                { text: "going to", color: "secondary" },
                { text: "next week", color: "secondary" },
                { text: "soon", color: "blue" },
                { text: "tonight", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "ถ้า **นึกขึ้นได้ตอนนั้น** ใช้ [hl:blue]will[/hl] — ถ้า **วางแผนไว้ก่อนแล้ว** ใช้ [hl:secondary]going to[/hl]"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
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
};
