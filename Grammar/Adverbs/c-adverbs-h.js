const CONTENT = {
  title: "Adverbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "Comparative/Superlative, Sentence Adverb, Degree ขั้นสูง และ Focusing Adverb",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Comparative/Superlative ของ Adverb",
      cards: [
        {
          title: "การเปรียบเทียบ Adverb",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "Adverb ส่วนใหญ่ (ที่ลงท้าย -ly) ใช้ **more/most** นำหน้าเมื่อเปรียบเทียบ ส่วน irregular adverb มีรูปพิเศษเหมือนเดิม"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Adverb", "Comparative", "Superlative"],
              rows: [
                ["carefully", "**more carefully**", "**most carefully**"],
                ["well", "**better**", "**best**"],
                ["badly", "**worse**", "**worst**"],
                ["fast", "**faster**", "**fastest**"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "She performed **more skillfully** than her opponent.", th: "เธอแสดงได้ชำนาญกว่าคู่แข่ง" },
                { en: "He runs **faster** than his brother.", th: "เขาวิ่งเร็วกว่าน้องชาย" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Sentence Adverb",
      cards: [
        {
          title: "Adverb ที่ขยายทั้งประโยค",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**Sentence Adverb** ใช้แสดง **ทัศนคติ/มุมมอง** ของผู้พูดต่อทั้งประโยค มักวางไว้ **ต้นประโยค** ตามด้วยเครื่องหมายจุลภาค"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "Fortunately", rule: "โชคดีที่...", example: "**Fortunately**, we arrived on time." },
                { quantifier: "Obviously", rule: "เห็นได้ชัดว่า...", example: "**Obviously**, she was upset." },
                { quantifier: "Honestly", rule: "พูดตรงๆ...", example: "**Honestly**, I don't like this plan." },
                { quantifier: "Surprisingly", rule: "น่าแปลกใจที่...", example: "**Surprisingly**, he passed the exam." }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "Sentence Adverb ขยาย **ทั้งประโยค** ไม่ใช่แค่กริยาตัวเดียว ต่างจาก adverb ทั่วไป"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Degree ขั้นสูง & Focusing Adverb",
      cards: [
        {
          title: "Adverb of Degree ขั้นสูง",
          icon: "📈",
          blocks: [
            {
              type: "table",
              headerColor: "secondary",
              headers: ["คำ", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["fairly", "ค่อนข้าง (กลางๆ)", "The movie was **fairly** good."],
                ["extremely", "อย่างยิ่ง", "It was **extremely** cold."],
                ["absolutely", "อย่างสมบูรณ์", "That's **absolutely** amazing."],
                ["barely", "แทบจะไม่", "I could **barely** hear him."]
              ]
            }
          ]
        },
        {
          title: "Focusing Adverb",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**Focusing Adverb** ใช้เน้น **ส่วนใดส่วนหนึ่ง** ของประโยคโดยเฉพาะ เช่น only, even, especially"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "**Only** she knew the answer.", th: "มีแค่เธอเท่านั้นที่รู้คำตอบ" },
                { en: "**Even** the teacher was surprised.", th: "แม้แต่คุณครูก็ยังประหลาดใจ" },
                { en: "I like all fruits, **especially** mangoes.", th: "ฉันชอบผลไม้ทุกชนิด โดยเฉพาะมะม่วง" }
              ]
            }
          ]
        },
        {
          title: "Position กับ Auxiliary/Modal Verb",
          icon: "📍",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อมี auxiliary verb หรือ modal verb ในประโยค adverb of frequency มักวาง **หลัง auxiliary/modal แต่หน้ากริยาหลัก**"
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "She **has always** wanted to travel.", th: "เธอต้องการเดินทางมาโดยตลอด" },
                { en: "I **will never** forget this day.", th: "ฉันจะไม่มีวันลืมวันนี้" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She performed ___ than her opponent.",
      tag: "Comparative",
      tagColor: "blue",
      emoji: "🏆",
      options: ["skillfully", "more skillfully", "most skillfully", "skillfullier"],
      answer: "more skillfully",
      explanation: "Adverb ที่ลงท้าย -ly ใช้ more นำหน้าเมื่อเปรียบเทียบ"
    },
    {
      sentence: "___, we arrived on time.",
      tag: "Sentence Adverb",
      tagColor: "secondary",
      emoji: "🍀",
      options: ["Fortunate", "Fortunately", "Fortune", "Fortunating"],
      answer: "Fortunately",
      explanation: "Sentence Adverb ขยายทั้งประโยค วางต้นประโยคตามด้วยจุลภาค"
    },
    {
      sentence: "That movie was ___ boring.",
      tag: "Degree",
      tagColor: "amber",
      emoji: "🎬",
      options: ["extremely", "very much", "too much", "quite much"],
      answer: "extremely",
      explanation: "extremely เป็น adverb of degree ขั้นสูง แปลว่าอย่างยิ่ง"
    },
    {
      sentence: "___ she knew the secret; no one else did.",
      tag: "Focusing",
      tagColor: "purple",
      emoji: "🤫",
      options: ["Only", "Very", "Too", "Quite"],
      answer: "Only",
      explanation: "Only เป็น focusing adverb เน้นว่ามีแค่เธอเท่านั้น"
    },
    {
      sentence: "I ___ forget this day.",
      tag: "Position",
      tagColor: "blue",
      emoji: "📅",
      options: ["never will", "will never", "will forget never", "never will forget"],
      answer: "will never",
      explanation: "Adverb of frequency วางหลัง modal verb (will) แต่หน้ากริยาหลัก"
    }
  ]
};
