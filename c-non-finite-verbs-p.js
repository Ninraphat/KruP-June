const CONTENT = {
  title: "Non-Finite Verbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🔤",
  subtitle: "เรียนรู้ V-ing และ to + V1 แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Gerund (V-ing)",
      cards: [
        {
          title: "Gerund คืออะไร?",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Gerund** คือกริยาที่เติม **-ing** แล้วทำหน้าที่เหมือน **คำนาม** ใช้เป็นประธานของประโยค หรือใช้หลังกริยาบางคำ เช่น **like, love, enjoy, hate**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ตำแหน่ง", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["เป็นประธาน", "V-ing + ...", "**Swimming** is fun."],
                ["หลัง like/love/enjoy/hate", "S + like/love/enjoy/hate + V-ing", "I **like swimming**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "จำง่ายๆ: กริยาความรู้สึก (like, love, enjoy, hate) ตามด้วย **V-ing** เสมอ"
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
                { en: "I **like swimming**.", th: "ฉันชอบว่ายน้ำ" },
                { en: "She **enjoys reading** books.", th: "เธอสนุกกับการอ่านหนังสือ" },
                { en: "**Playing** football is exciting.", th: "การเล่นฟุตบอลน่าตื่นเต้น" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Infinitive (to + V1)",
      cards: [
        {
          title: "Infinitive คืออะไร?",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**Infinitive** คือ **to + V1** ใช้หลังกริยาบางคำ เช่น **want, need, would like** เพื่อบอกว่าต้องการทำอะไร"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["กริยานำหน้า", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["want", "want + to + V1", "I **want to play**."],
                ["need", "need + to + V1", "She **needs to study**."],
                ["would like", "would like + to + V1", "We **would like to go** home."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "จำง่ายๆ: กริยาแสดงความต้องการ (want, need, would like) ตามด้วย **to + V1** เสมอ"
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
                { en: "She **wants to eat** ice cream.", th: "เธอต้องการกินไอศกรีม" },
                { en: "I **need to go** to school.", th: "ฉันต้องไปโรงเรียน" },
                { en: "They **would like to watch** a movie.", th: "พวกเขาอยากดูหนัง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ เปรียบเทียบ",
      cards: [
        {
          title: "Gerund vs Infinitive",
          icon: "🔍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "V-ing",
                  sub: "หลัง like/love/enjoy/hate",
                  color: "blue",
                  body: "I **like reading**.\n\nShe **enjoys dancing**."
                },
                {
                  word: "to + V1",
                  sub: "หลัง want/need/would like",
                  color: "secondary",
                  body: "I **want to read**.\n\nShe **needs to dance**."
                }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "like + V-ing", color: "blue" },
                { text: "love + V-ing", color: "blue" },
                { text: "enjoy + V-ing", color: "blue" },
                { text: "want + to V1", color: "secondary" },
                { text: "need + to V1", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "[hl:blue]ความรู้สึก[/hl] (like/love/enjoy/hate) ใช้ V-ing — [hl:secondary]ความต้องการ[/hl] (want/need) ใช้ to + V1"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I like ___ football with my friends.",
      tag: "Gerund",
      tagColor: "blue",
      emoji: "⚽",
      options: ["play", "playing", "to play", "played"],
      answer: "playing",
      explanation: "like ตามด้วย V-ing (gerund)"
    },
    {
      sentence: "She wants ___ ice cream.",
      tag: "Infinitive",
      tagColor: "secondary",
      emoji: "🍦",
      options: ["eat", "eating", "to eat", "ate"],
      answer: "to eat",
      explanation: "want ตามด้วย to + V1 (infinitive)"
    },
    {
      sentence: "___ books is fun.",
      tag: "Gerund",
      tagColor: "blue",
      emoji: "📚",
      options: ["Read", "Reading", "To read", "Reads"],
      answer: "Reading",
      explanation: "V-ing ใช้เป็นประธานของประโยคได้"
    },
    {
      sentence: "I need ___ to school now.",
      tag: "Infinitive",
      tagColor: "secondary",
      emoji: "🏫",
      options: ["go", "going", "to go", "went"],
      answer: "to go",
      explanation: "need ตามด้วย to + V1"
    },
    {
      sentence: "He enjoys ___ his bike.",
      tag: "Gerund",
      tagColor: "blue",
      emoji: "🚲",
      options: ["ride", "riding", "to ride", "rode"],
      answer: "riding",
      explanation: "enjoy ตามด้วย V-ing (gerund)"
    }
  ]
};
