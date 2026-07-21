const CONTENT = {
  title: "Prepositions",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "Adjective + Preposition, Dependent Preposition, Phrasal Verb และ Complex Prepositional Phrase",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Adjective + Preposition ครบระบบ",
      cards: [
        {
          title: "คำคุณศัพท์ที่ตามด้วยบุพบทเฉพาะ",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "Adjective บางคำ **ต้องตามด้วย preposition เฉพาะ** เสมอ ต้องจำเป็นคู่ๆ ให้ครบระบบ"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "interested in", rule: "สนใจใน...", example: "I'm **interested in** music." },
                { quantifier: "afraid of", rule: "กลัว...", example: "He is **afraid of** spiders." },
                { quantifier: "good at", rule: "เก่งใน...", example: "She is **good at** solving problems." },
                { quantifier: "proud of", rule: "ภูมิใจใน...", example: "They are **proud of** their team." },
                { quantifier: "worried about", rule: "กังวลเกี่ยวกับ...", example: "I'm **worried about** the exam." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Dependent Preposition & Phrasal Verb",
      cards: [
        {
          title: "Verb/Noun + Preposition เฉพาะคู่",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Dependent Preposition** คือ preposition ที่ **ผูกติดกับคำเฉพาะ** ไม่สามารถเปลี่ยนได้ตามใจชอบ"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำ", "Preposition", "ตัวอย่าง"],
              rows: [
                ["depend", "on", "It **depends on** the weather."],
                ["consist", "of", "The team **consists of** ten players."],
                ["apologize", "for", "He **apologized for** being late."],
                ["reason", "for", "What's the **reason for** your absence?"]
              ]
            }
          ]
        },
        {
          title: "Preposition ใน Phrasal Verb",
          icon: "⚡",
          blocks: [
            {
              type: "explanation",
              text: "**Phrasal Verb** คือ verb + preposition/particle ที่รวมกันแล้วมี **ความหมายใหม่** ต่างจากความหมายเดิม"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Phrasal Verb", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["look up", "ค้นหาข้อมูล", "I **looked up** the word in a dictionary."],
                ["give up", "ยอมแพ้", "Don't **give up** on your dreams."],
                ["put off", "เลื่อนออกไป", "We **put off** the meeting until Friday."]
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Preposition ท้ายประโยค & Complex Phrase",
      cards: [
        {
          title: "Preposition ท้ายประโยค",
          icon: "❓",
          blocks: [
            {
              type: "explanation",
              text: "ในประโยคคำถามหรือ relative clause แบบไม่เป็นทางการ **preposition สามารถวางท้ายประโยคได้** (Preposition Stranding)"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "**Who** are you waiting **for**?", th: "คุณกำลังรอใครอยู่" },
                { en: "**What** are you thinking **about**?", th: "คุณกำลังคิดถึงอะไรอยู่" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "รูปแบบทางการ (formal) จะย้าย preposition มาไว้หน้า wh-word แทน เช่น **About what** are you thinking?"
            }
          ]
        },
        {
          title: "Complex Prepositional Phrase",
          icon: "🧩",
          blocks: [
            {
              type: "explanation",
              text: "**Complex Prepositional Phrase** คือวลีที่ทำหน้าที่เหมือน preposition แต่ประกอบด้วยหลายคำ"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["วลี", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["in spite of", "แม้ว่า", "**In spite of** the rain, we went out."],
                ["according to", "ตามที่...บอก", "**According to** the report, sales increased."],
                ["in terms of", "ในแง่ของ", "The project is good **in terms of** cost."]
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
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
};
