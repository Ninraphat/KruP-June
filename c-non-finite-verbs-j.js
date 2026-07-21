const CONTENT = {
  title: "Non-Finite Verbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🔤",
  subtitle: "Gerund/Infinitive กับกริยากลุ่มตายตัว, Infinitive of Purpose และ Gerund หลัง Preposition",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ กริยาที่ตามด้วย Gerund",
      cards: [
        {
          title: "กริยากลุ่มที่ตามด้วย V-ing เสมอ",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "มีกริยาบางกลุ่มที่ **ต้องตามด้วย Gerund (V-ing) เสมอ** ไม่ว่าจะหมายถึงอะไรก็ตาม ต้องจำเป็นกลุ่มคำ"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "enjoy", rule: "สนุกกับการ...", example: "I **enjoy playing** video games." },
                { quantifier: "finish", rule: "ทำ...เสร็จ", example: "She **finished doing** her homework." },
                { quantifier: "avoid", rule: "หลีกเลี่ยงการ...", example: "He **avoids eating** junk food." },
                { quantifier: "mind", rule: "รังเกียจ/ไม่ชอบการ...", example: "Do you **mind opening** the window?" },
                { quantifier: "practice", rule: "ฝึกฝนการ...", example: "We **practice speaking** English." }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "เคล็ดลับ: ท่องจำกริยากลุ่มนี้เป็นชุด — enjoy, finish, avoid, mind, practice ล้วนตามด้วย **V-ing**"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ กริยาที่ตามด้วย Infinitive",
      cards: [
        {
          title: "กริยากลุ่มที่ตามด้วย to + V1 เสมอ",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "มีกริยาบางกลุ่มที่ **ต้องตามด้วย Infinitive (to + V1) เสมอ**"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "decide", rule: "ตัดสินใจที่จะ...", example: "I **decided to study** medicine." },
                { quantifier: "hope", rule: "หวังว่าจะ...", example: "She **hopes to travel** next year." },
                { quantifier: "plan", rule: "วางแผนที่จะ...", example: "We **plan to visit** Japan." },
                { quantifier: "promise", rule: "สัญญาว่าจะ...", example: "He **promised to help** me." },
                { quantifier: "want", rule: "ต้องการที่จะ...", example: "They **want to win** the game." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "เคล็ดลับ: ท่องจำกริยากลุ่มนี้เป็นชุด — decide, hope, plan, promise, want ล้วนตามด้วย **to + V1**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Infinitive of Purpose & Gerund หลัง Preposition",
      cards: [
        {
          title: "Infinitive of Purpose (เพื่อ...)",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**to + V1** สามารถใช้บอก **จุดประสงค์** ของการกระทำได้ แปลว่า **\"เพื่อจะ...\"**"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "I went to the store **to buy** some milk.", th: "ฉันไปร้านค้าเพื่อซื้อนม" },
                { en: "She woke up early **to catch** the bus.", th: "เธอตื่นแต่เช้าเพื่อทันรถเมล์" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              text: "ทดสอบง่ายๆ: ถ้าเติมคำว่า **\"เพื่อ\"** แล้วประโยคเข้าใจได้ นั่นคือ Infinitive of Purpose"
            }
          ]
        },
        {
          title: "Gerund หลัง Preposition",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อกริยาตามหลัง **คำบุพบท (preposition)** เช่น **in, on, about, before, after** ต้องใช้รูป **Gerund (V-ing)** เสมอ ไม่ใช้ infinitive"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Preposition", "ตัวอย่าง"],
              rows: [
                ["about", "I'm interested **in learning** Japanese."],
                ["before", "Wash your hands **before eating**."],
                ["after", "She felt tired **after running**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⚠️",
              text: "ข้อควรระวัง: หลัง preposition **ห้ามใช้ to + V1** ต้องใช้ **V-ing** เท่านั้น"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
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
};
