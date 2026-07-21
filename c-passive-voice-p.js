const CONTENT = {
  title: "Passive Voice",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🔄",
  subtitle: "เรียนรู้ประโยคที่ประธานถูกกระทำแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Passive Voice คืออะไร?",
      cards: [
        {
          title: "ประธานที่ถูกกระทำ",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "ปกติเราพูดว่า **ใครทำอะไร** (Active) แต่บางครั้งเราอยากเน้นว่า **สิ่งนั้นถูกทำ** โดยไม่สนใจว่าใครทำ เรียกว่า **Passive Voice**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Active", sub: "ใครทำ", color: "blue", body: "My mom **makes** the cake." },
                { word: "Passive", sub: "อะไรถูกทำ", color: "secondary", body: "The cake **is made** by my mom." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ โครงสร้าง Passive Voice",
      cards: [
        {
          title: "is/am/are + V3",
          icon: "🔧",
          blocks: [
            {
              type: "explanation",
              text: "Passive Voice ในระดับนี้ใช้กับ **Present Simple** เท่านั้น โครงสร้างคือ **is/am/are + V3 (กริยาช่องที่ 3)**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "Verb to be", "ตัวอย่าง"],
              rows: [
                ["The cake / The book (เอกพจน์)", "is", "The cake **is made** every morning."],
                ["The rooms / The toys (พหูพจน์)", "are", "The toys **are cleaned** every week."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "V3 คือกริยาช่องที่ 3 เช่น make → **made**, clean → **cleaned**, write → **written**"
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
                { en: "The cake **is made** by my mom.", th: "เค้กถูกทำโดยแม่ของฉัน" },
                { en: "The room **is cleaned** every day.", th: "ห้องถูกทำความสะอาดทุกวัน" },
                { en: "These toys **are made** in Thailand.", th: "ของเล่นเหล่านี้ถูกผลิตในประเทศไทย" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ By + ผู้กระทำ",
      cards: [
        {
          title: "การบอกว่าใครเป็นคนทำ",
          icon: "👤",
          blocks: [
            {
              type: "explanation",
              text: "ถ้าอยากบอกว่า **ใครเป็นคนทำ** เราใช้คำว่า **by** ตามด้วยผู้กระทำ ต่อท้ายประโยค"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "by my mom", rule: "ผู้กระทำเป็นคน", example: "The cake is made **by my mom**." },
                { quantifier: "by the teacher", rule: "ผู้กระทำเป็นคน", example: "The board is cleaned **by the teacher**." },
                { quantifier: "in Thailand", rule: "บอกสถานที่ (ไม่ใช้ by)", example: "The toys are made **in Thailand**." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ไม่จำเป็นต้องใส่ by เสมอไป — ใส่เฉพาะเมื่ออยากเน้นว่า **ใครเป็นคนทำ**"
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
                { en: "The letter **is written** by my sister.", th: "จดหมายถูกเขียนโดยพี่สาวของฉัน" },
                { en: "The house **is cleaned** by my dad.", th: "บ้านถูกทำความสะอาดโดยพ่อของฉัน" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "is made", color: "blue" },
                { text: "is cleaned", color: "blue" },
                { text: "is written", color: "blue" },
                { text: "are made", color: "secondary" },
                { text: "by + ผู้กระทำ", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "The cake ___ by my mom every Sunday.",
      tag: "Passive",
      tagColor: "blue",
      emoji: "🎂",
      options: ["make", "makes", "is made", "made"],
      answer: "is made",
      explanation: "ประธาน The cake (เอกพจน์) เป็นผู้ถูกกระทำ ใช้ is + V3 (made)"
    },
    {
      sentence: "These toys ___ in Thailand.",
      tag: "Passive",
      tagColor: "blue",
      emoji: "🧸",
      options: ["is made", "are made", "make", "makes"],
      answer: "are made",
      explanation: "ประธาน These toys (พหูพจน์) ใช้ are + V3 (made)"
    },
    {
      sentence: "The room ___ every day.",
      tag: "Passive",
      tagColor: "blue",
      emoji: "🧹",
      options: ["clean", "cleans", "is cleaned", "are cleaned"],
      answer: "is cleaned",
      explanation: "ประธาน The room (เอกพจน์) ใช้ is + V3 (cleaned)"
    },
    {
      sentence: "The letter is written ___ my sister.",
      tag: "By-agent",
      tagColor: "amber",
      emoji: "✉️",
      options: ["at", "by", "in", "on"],
      answer: "by",
      explanation: "ใช้ by ตามด้วยผู้กระทำเมื่ออยากบอกว่าใครเป็นคนทำ"
    },
    {
      sentence: "The board ___ by the teacher.",
      tag: "Passive",
      tagColor: "blue",
      emoji: "📋",
      options: ["clean", "is cleaned", "cleans", "are cleaned"],
      answer: "is cleaned",
      explanation: "ประธาน The board (เอกพจน์) ใช้ is + V3 (cleaned)"
    }
  ]
};
