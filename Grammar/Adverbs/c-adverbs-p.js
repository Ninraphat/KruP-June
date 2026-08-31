const CONTENT = {
  title: "Adverbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🏃",
  subtitle: "เรียนรู้ Adverb of Manner และ Frequency แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Adverb of Manner",
      cards: [
        {
          title: "Adverb คืออะไร?",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Adverb of Manner** บอก **ลักษณะการกระทำ** ว่าทำอย่างไร ส่วนใหญ่เกิดจาก **adjective + ly**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Adjective", "Adverb", "ตัวอย่าง"],
              rows: [
                ["slow", "**slowly**", "He walks **slowly**."],
                ["quick", "**quickly**", "She runs **quickly**."],
                ["careful", "**carefully**", "He drives **carefully**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "จำง่ายๆ: ส่วนใหญ่แค่เติม **-ly** ท้าย adjective ก็จะกลายเป็น adverb"
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
                { en: "She runs **quickly**.", th: "เธอวิ่งเร็ว" },
                { en: "He speaks **loudly**.", th: "เขาพูดเสียงดัง" },
                { en: "The turtle walks **slowly**.", th: "เต่าเดินช้าๆ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Adverb of Frequency",
      cards: [
        {
          title: "บอกความถี่",
          icon: "🔁",
          blocks: [
            {
              type: "explanation",
              text: "**Adverb of Frequency** บอกว่า **ทำบ่อยแค่ไหน** เช่น always, usually, sometimes, never"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "always", rule: "100% ทำเสมอ", example: "I **always** brush my teeth." },
                { quantifier: "usually", rule: "80% ทำบ่อย", example: "She **usually** walks to school." },
                { quantifier: "sometimes", rule: "50% บางครั้ง", example: "We **sometimes** eat pizza." },
                { quantifier: "never", rule: "0% ไม่เคยเลย", example: "He **never** lies." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "Adverb of Frequency มักวางไว้ **หน้ากริยาหลัก** เช่น I **always** brush..."
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
                { en: "I **always** brush my teeth.", th: "ฉันแปรงฟันเสมอ" },
                { en: "She **usually** wakes up early.", th: "เธอมักตื่นแต่เช้า" },
                { en: "We **sometimes** watch movies.", th: "เราดูหนังบางครั้ง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ตำแหน่งของ Adverb",
      cards: [
        {
          title: "วางไว้ตรงไหน?",
          icon: "📍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Manner", sub: "หลังกริยา", color: "blue", body: "She runs **quickly**.\n\n(adverb อยู่หลังกริยา)" },
                { word: "Frequency", sub: "หน้ากริยาหลัก", color: "secondary", body: "I **always** brush my teeth.\n\n(adverb อยู่หน้ากริยาหลัก)" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "quickly", color: "blue" },
                { text: "slowly", color: "blue" },
                { text: "always", color: "secondary" },
                { text: "never", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "[hl:blue]Manner adverb[/hl] มักอยู่ **หลังกริยา** — [hl:secondary]Frequency adverb[/hl] มักอยู่ **หน้ากริยาหลัก**"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She runs ___.",
      tag: "Manner",
      tagColor: "blue",
      emoji: "🏃",
      options: ["quick", "quickly", "quicker", "quickest"],
      answer: "quickly",
      explanation: "Adverb of Manner บอกลักษณะการวิ่ง เติม -ly"
    },
    {
      sentence: "I ___ brush my teeth.",
      tag: "Frequency",
      tagColor: "secondary",
      emoji: "🦷",
      options: ["always", "quickly", "slowly", "carefully"],
      answer: "always",
      explanation: "always เป็น adverb of frequency บอกความถี่ 100%"
    },
    {
      sentence: "He drives ___.",
      tag: "Manner",
      tagColor: "blue",
      emoji: "🚗",
      options: ["careful", "carefully", "carefuller", "carefullest"],
      answer: "carefully",
      explanation: "adjective careful + ly = carefully"
    },
    {
      sentence: "We ___ eat pizza on weekends.",
      tag: "Frequency",
      tagColor: "secondary",
      emoji: "🍕",
      options: ["sometimes", "slowly", "quickly", "loudly"],
      answer: "sometimes",
      explanation: "sometimes เป็น adverb of frequency บอกความถี่ 50%"
    },
    {
      sentence: "The turtle walks ___.",
      tag: "Manner",
      tagColor: "blue",
      emoji: "🐢",
      options: ["slow", "slowly", "slower", "slowest"],
      answer: "slowly",
      explanation: "adjective slow + ly = slowly"
    }
  ]
};
