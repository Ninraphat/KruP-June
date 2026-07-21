const CONTENT = {
  title: "Future Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "Future Continuous, Future Perfect, Passive Voice และ First Conditional",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Future Continuous & Future Perfect",
      cards: [
        {
          title: "Future Continuous คืออะไร?",
          icon: "⏳",
          blocks: [
            {
              type: "explanation",
              text: "**Future Continuous** (will be + V-ing) ใช้พูดถึงเหตุการณ์ที่จะ **กำลังดำเนินอยู่ ณ ช่วงเวลาหนึ่งในอนาคต**"
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**This time tomorrow**, we **will be flying** to Japan.", th: "เวลานี้พรุ่งนี้ เราจะกำลังบินไปญี่ปุ่น" },
                { en: "She **will be studying** at 8 PM tonight.", th: "เธอจะกำลังอ่านหนังสืออยู่ตอน 2 ทุ่มคืนนี้" }
              ]
            }
          ]
        },
        {
          title: "Future Perfect & Future Perfect Continuous",
          icon: "🏁",
          blocks: [
            {
              type: "explanation",
              text: "**Future Perfect** (will have + V3) ใช้บอกว่าเหตุการณ์จะ **เสร็จสิ้นก่อน** จุดเวลาหนึ่งในอนาคต ส่วน **Future Perfect Continuous** (will have been + V-ing) เน้น **ระยะเวลา** ที่ทำต่อเนื่องมาจนถึงจุดนั้น"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Tense", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["Future Perfect", "will have + V3", "By next year, I **will have graduated**."],
                ["Future Perfect Continuous", "will have been + V-ing", "By 2027, she **will have been teaching** for 10 years."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "by the time, by next year, by 2030, this time tomorrow"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ เปรียบเทียบ 4 รูปแบบ Future",
      cards: [
        {
          title: "Future Simple vs Continuous vs Perfect vs Perfect Continuous",
          icon: "🔍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Future Simple",
                  sub: "จะทำ (เหตุการณ์เดียว)",
                  color: "blue",
                  body: "I **will finish** the report tomorrow."
                },
                {
                  word: "Future Continuous",
                  sub: "กำลังทำอยู่ ณ เวลานั้น",
                  color: "secondary",
                  body: "I **will be finishing** the report at 5 PM."
                },
                {
                  word: "Future Perfect",
                  sub: "จะเสร็จก่อนเวลานั้น",
                  color: "purple",
                  body: "I **will have finished** the report by 5 PM."
                },
                {
                  word: "Future Perfect Continuous",
                  sub: "เน้นระยะเวลาต่อเนื่อง",
                  color: "amber",
                  body: "I **will have been working** on it for 3 hours by 5 PM."
                }
              ]
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "By next year, I **will have graduated** from university.", th: "ภายในปีหน้า ฉันจะเรียนจบมหาวิทยาลัยแล้ว" },
                { en: "**This time tomorrow**, we **will be flying** to Japan.", th: "เวลานี้พรุ่งนี้ เราจะกำลังบินไปญี่ปุ่น" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "🎯",
              title: "เทคนิคจำ",
              text: "ดูว่าประโยคเน้น **เหตุการณ์เดียว** (Simple), **กำลังเกิด ณ เวลาหนึ่ง** (Continuous), **เสร็จก่อนเวลาหนึ่ง** (Perfect) หรือ **ระยะเวลาต่อเนื่อง** (Perfect Continuous)"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Passive Voice & First Conditional",
      cards: [
        {
          title: "Future Tenses ใน Passive Voice",
          icon: "🔄",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง Passive", "ตัวอย่าง"],
              rows: [
                ["Future Simple", "will be + V3", "The results **will be announced** next week."],
                ["Future Perfect", "will have been + V3", "The project **will have been completed** by Friday."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "The new bridge **will be built** next year.", th: "สะพานใหม่จะถูกสร้างขึ้นปีหน้า" },
                { en: "The report **will have been submitted** by the deadline.", th: "รายงานจะถูกส่งภายในกำหนดเวลา" }
              ]
            }
          ]
        },
        {
          title: "First Conditional + Future Simple",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "**First Conditional** ใช้พูดถึงเหตุการณ์ที่ **มีความเป็นไปได้จริงในอนาคต** โครงสร้างคือ **If + Present Simple, ... will + V1**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ส่วน If-clause", "ส่วน Main clause"],
              rows: [
                ["If + Present Simple", "will + V1"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "**If** it **rains** tomorrow, we **will stay** at home.", th: "ถ้าพรุ่งนี้ฝนตก เราจะอยู่บ้าน" },
                { en: "**If** you **study** hard, you **will pass** the exam.", th: "ถ้าเธอตั้งใจเรียน เธอจะสอบผ่าน" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "⚠️",
              text: "ข้อควรระวัง: ใน If-clause **ห้ามใช้ will** แม้จะพูดถึงอนาคต ต้องใช้ **Present Simple** เท่านั้น"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "This time tomorrow, we ___ to Japan.",
      tag: "Future Continuous",
      tagColor: "secondary",
      emoji: "✈️",
      options: ["will fly", "will be flying", "fly", "have flown"],
      answer: "will be flying",
      explanation: "เน้นเหตุการณ์ที่กำลังดำเนินอยู่ ณ ช่วงเวลาหนึ่งในอนาคต ใช้ Future Continuous"
    },
    {
      sentence: "By next year, I ___ from university.",
      tag: "Future Perfect",
      tagColor: "purple",
      emoji: "🎓",
      options: ["will graduate", "will be graduating", "will have graduated", "graduate"],
      answer: "will have graduated",
      explanation: "เหตุการณ์จะเสร็จสิ้นก่อนจุดเวลาหนึ่งในอนาคต (by next year) ใช้ Future Perfect"
    },
    {
      sentence: "By 2027, she ___ for 10 years.",
      tag: "Future Perfect Continuous",
      tagColor: "amber",
      emoji: "👩‍🏫",
      options: ["will teach", "will have taught", "will have been teaching", "teaches"],
      answer: "will have been teaching",
      explanation: "เน้นระยะเวลาต่อเนื่องจนถึงจุดเวลาหนึ่งในอนาคต ใช้ Future Perfect Continuous"
    },
    {
      sentence: "The results ___ next week.",
      tag: "Passive",
      tagColor: "blue",
      emoji: "📢",
      options: ["will announce", "will be announced", "are announced", "will have announced"],
      answer: "will be announced",
      explanation: "Future Simple Passive: will be + V3"
    },
    {
      sentence: "If it ___ tomorrow, we will stay at home.",
      tag: "First Conditional",
      tagColor: "purple",
      emoji: "🌧️",
      options: ["rains", "will rain", "rained", "is raining"],
      answer: "rains",
      explanation: "ใน If-clause ของ First Conditional ต้องใช้ Present Simple ห้ามใช้ will"
    }
  ]
};
