const CONTENT = {
  title: "Adjectives",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "Order of Adjectives ครบระบบ, Adjective + Preposition, Compound Adjective และ Gradable/Non-gradable",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Order of Adjectives ครบระบบ",
      cards: [
        {
          title: "ลำดับ Adjective ทั้ง 8 ประเภท",
          icon: "🔢",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อใช้ adjective หลายตัวขยายคำนามเดียวกัน ลำดับที่ถูกต้องคือ: **Opinion → Size → Age → Shape → Color → Origin → Material → Purpose**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ลำดับ", "ประเภท", "ตัวอย่างคำ"],
              rows: [
                ["1", "Opinion", "beautiful, nice"],
                ["2", "Size", "small, big"],
                ["3", "Age", "old, new"],
                ["4", "Shape", "round, square"],
                ["5", "Color", "red, blue"],
                ["6", "Origin", "Thai, French"],
                ["7", "Material", "wooden, metal"],
                ["8", "Purpose", "sleeping (bag), running (shoes)"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "She bought a **beautiful small antique wooden** table.", th: "เธอซื้อโต๊ะไม้โบราณหลังเล็กที่สวยงาม" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ไม่ต้องใช้ adjective ครบทุกประเภทในประโยคเดียว แต่ถ้าใช้หลายตัว ต้องเรียงตามลำดับนี้"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Adjective + Preposition",
      cards: [
        {
          title: "คำคุณศัพท์ที่ตามด้วยบุพบทเฉพาะ",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "Adjective บางคำ **ต้องตามด้วย preposition เฉพาะ** เสมอ ต้องจำเป็นคู่ๆ"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "interested in", rule: "สนใจใน...", example: "I'm **interested in** music." },
                { quantifier: "afraid of", rule: "กลัว...", example: "He is **afraid of** spiders." },
                { quantifier: "good at", rule: "เก่งใน...", example: "She is **good at** math." },
                { quantifier: "proud of", rule: "ภูมิใจใน...", example: "They are **proud of** their team." },
                { quantifier: "married to", rule: "แต่งงานกับ...", example: "He is **married to** a doctor." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Compound Adjective & Gradable/Non-gradable",
      cards: [
        {
          title: "Compound Adjective",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Compound Adjective** คือ adjective ที่เกิดจาก **คำสองคำขึ้นไปเชื่อมกันด้วยขีด (-)** ทำหน้าที่เป็น adjective เดียว"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["adjective + noun-ed", "**blue-eyed** girl"],
                ["number + noun", "**five-year-old** boy"],
                ["adjective/adverb + V-ing/V3", "**well-known** author, **world-famous** singer"]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "He is a **well-known** author.", th: "เขาเป็นนักเขียนที่มีชื่อเสียง" },
                { en: "She has a **five-year-old** daughter.", th: "เธอมีลูกสาวอายุห้าขวบ" }
              ]
            }
          ]
        },
        {
          title: "Gradable vs Non-gradable Adjectives",
          icon: "⚖️",
          blocks: [
            {
              type: "explanation",
              text: "**Gradable adjectives** สามารถใช้ **very, more, most** ได้ ส่วน **Non-gradable (Absolute)** เช่น perfect, unique **ไม่ใช้ very** เพราะความหมายเต็มที่อยู่แล้ว"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Gradable", sub: "ใช้ very ได้", color: "blue", body: "**very good**\n\n**more beautiful**" },
                { word: "Non-gradable", sub: "ใช้ absolutely แทน very", color: "secondary", body: "**absolutely perfect**\n\n**absolutely unique**" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "⚠️",
              text: "ห้ามพูดว่า ~~very perfect~~ หรือ ~~very unique~~ — ใช้ **absolutely/completely** แทน"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She bought a beautiful ___ antique wooden table.",
      tag: "Order",
      tagColor: "blue",
      emoji: "🪑",
      options: ["small", "the small", "smaller", "smallest"],
      answer: "small",
      explanation: "ลำดับ Adjective: Opinion(beautiful)-Size(small)-Age(antique)-Material(wooden)"
    },
    {
      sentence: "He is afraid ___ spiders.",
      tag: "Adjective + Prep",
      tagColor: "secondary",
      emoji: "🕷️",
      options: ["of", "in", "at", "for"],
      answer: "of",
      explanation: "afraid ตามด้วย of เสมอ"
    },
    {
      sentence: "She is good ___ math.",
      tag: "Adjective + Prep",
      tagColor: "secondary",
      emoji: "🔢",
      options: ["in", "at", "of", "for"],
      answer: "at",
      explanation: "good ตามด้วย at เสมอ"
    },
    {
      sentence: "He is a ___ author. (well known)",
      tag: "Compound",
      tagColor: "amber",
      emoji: "📚",
      options: ["well known", "well-known", "good known", "well-know"],
      answer: "well-known",
      explanation: "Compound Adjective เขียนด้วยขีด (-) เชื่อมคำ"
    },
    {
      sentence: "This diamond is ___ perfect.",
      tag: "Non-gradable",
      tagColor: "purple",
      emoji: "💎",
      options: ["very", "absolutely", "more", "most"],
      answer: "absolutely",
      explanation: "perfect เป็น non-gradable adjective ใช้ absolutely แทน very"
    }
  ]
};
