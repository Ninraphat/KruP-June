const CONTENT = {
  title: "Adverbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🏃",
  subtitle: "Adverb of Time/Place, Degree, Irregular Adverbs และตำแหน่งในประโยค",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Adverb of Time & Place",
      cards: [
        {
          title: "บอกเวลาและสถานที่",
          icon: "🕐",
          blocks: [
            {
              type: "explanation",
              text: "**Adverb of Time** บอก **เมื่อไหร่** เหตุการณ์เกิดขึ้น ส่วน **Adverb of Place** บอก **ที่ไหน**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภท", "ตัวอย่างคำ", "ตัวอย่างประโยค"],
              rows: [
                ["Time", "yesterday, now, soon, today", "I will finish it **soon**."],
                ["Place", "here, there, everywhere", "I looked **everywhere** for my keys."]
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Adverb of Degree",
      cards: [
        {
          title: "บอกระดับความเข้มข้น",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "**Adverb of Degree** บอก **ระดับ/ความเข้มข้น** ของ adjective หรือ adverb อื่น เช่น very, too, quite, enough"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "very", rule: "มาก", example: "She speaks English **very** well." },
                { quantifier: "too", rule: "มากเกินไป (เชิงลบ)", example: "This coffee is **too** hot." },
                { quantifier: "quite", rule: "ค่อนข้าง", example: "The test was **quite** difficult." },
                { quantifier: "enough", rule: "พอ (วางหลัง adjective)", example: "The box is big **enough**." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "ข้อควรระวัง: **enough** วางไว้ **หลัง** adjective (big enough) ต่างจาก very/too/quite ที่วางไว้ **หน้า** adjective"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Irregular Adverbs & ตำแหน่งในประโยค",
      cards: [
        {
          title: "Irregular Adverbs",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "มี adverb บางคำที่ **ไม่ตามกฎ +ly** ต้องจำรูปพิเศษ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Adjective", "Adverb"],
              rows: [
                ["good", "**well**"],
                ["fast", "**fast** (ไม่เปลี่ยนรูป)"],
                ["hard", "**hard** (ไม่เปลี่ยนรูป)"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "She speaks English **very well**.", th: "เธอพูดภาษาอังกฤษได้ดีมาก" },
                { en: "He works **hard** every day.", th: "เขาทำงานหนักทุกวัน" }
              ]
            }
          ]
        },
        {
          title: "ตำแหน่งของ Adverb ในประโยค",
          icon: "📍",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["ตำแหน่ง", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                ["Front (หน้าประโยค)", "Adverb of Time", "**Yesterday**, I went shopping."],
                ["Mid (กลางประโยค)", "Adverb of Frequency", "I **usually** go to bed early."],
                ["End (ท้ายประโยค)", "Adverb of Manner/Place", "She sings **beautifully**."]
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She speaks English very ___.",
      tag: "Irregular",
      tagColor: "blue",
      emoji: "🗣️",
      options: ["good", "well", "goodly", "best"],
      answer: "well",
      explanation: "good เป็น irregular adverb เปลี่ยนเป็น well ไม่ใช่ goodly"
    },
    {
      sentence: "This soup is ___ hot to eat.",
      tag: "Degree",
      tagColor: "secondary",
      emoji: "🍲",
      options: ["very", "too", "quite", "enough"],
      answer: "too",
      explanation: "too ใช้บอกว่ามากเกินไปในเชิงลบ (ร้อนเกินกว่าจะกินได้)"
    },
    {
      sentence: "He works ___ every day.",
      tag: "Irregular",
      tagColor: "blue",
      emoji: "💼",
      options: ["hardly", "hard", "harder", "hardest"],
      answer: "hard",
      explanation: "hard เป็น irregular adverb ไม่เปลี่ยนรูป (hardly มีความหมายต่างออกไป)"
    },
    {
      sentence: "I looked ___ for my keys.",
      tag: "Place",
      tagColor: "amber",
      emoji: "🔑",
      options: ["everywhere", "always", "quickly", "very"],
      answer: "everywhere",
      explanation: "everywhere เป็น adverb of place บอกสถานที่"
    },
    {
      sentence: "The box is big ___.",
      tag: "Degree",
      tagColor: "secondary",
      emoji: "📦",
      options: ["enough", "very", "too", "quite"],
      answer: "enough",
      explanation: "enough วางไว้หลัง adjective ต่างจาก very/too/quite"
    }
  ]
};
