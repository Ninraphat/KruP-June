const CONTENT = {
  title: "Conjunctions",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🔗",
  subtitle: "Subordinating Conjunction, Time Conjunction, Comma Rules และ FANBOYS",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Subordinating Conjunction",
      cards: [
        {
          title: "คำเชื่อมประโยคย่อย",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Subordinating Conjunction** ใช้เชื่อม **main clause** กับ **subordinate clause** (ประโยคที่ไม่สมบูรณ์ในตัวเอง) เช่น because, when, if, although, while"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำเชื่อม", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["because", "เพราะว่า", "I stayed home **because** it was raining."],
                ["when", "เมื่อ", "I was cooking **when** she arrived."],
                ["if", "ถ้า", "**If** it rains, we will stay home."],
                ["although", "แม้ว่า", "**Although** she was tired, she finished her homework."],
                ["while", "ในขณะที่", "**While** I was reading, my brother was sleeping."]
              ]
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
                { en: "I stayed home **because** it was raining.", th: "ฉันอยู่บ้านเพราะฝนตก" },
                { en: "**Although** she was tired, she finished her homework.", th: "แม้ว่าเธอจะเหนื่อย เธอก็ทำการบ้านเสร็จ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Time Conjunction & Comma Rules",
      cards: [
        {
          title: "Before, After, As Soon As",
          icon: "🕐",
          blocks: [
            {
              type: "explanation",
              text: "**Time Conjunction** ใช้เชื่อมเหตุการณ์ตามลำดับเวลา"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "Wash your hands **before** you eat.", th: "ล้างมือก่อนกินข้าว" },
                { en: "**As soon as** I got home, it started to rain.", th: "ทันทีที่ฉันถึงบ้าน ฝนก็เริ่มตก" }
              ]
            }
          ]
        },
        {
          title: "Comma Rules เบื้องต้น",
          icon: "✍️",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อ **subordinate clause ขึ้นต้นประโยค** ต้องมี **comma (,)** คั่นก่อน main clause แต่ถ้า main clause ขึ้นต้นก่อน **ไม่ต้องมี comma**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Subordinate ก่อน", sub: "ต้องมี comma", color: "blue", body: "**Because** it was raining, I stayed home." },
                { word: "Main clause ก่อน", sub: "ไม่ต้องมี comma", color: "secondary", body: "I stayed home **because** it was raining." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ FANBOYS ครบชุด",
      cards: [
        {
          title: "Coordinating Conjunctions ทั้ง 7 คำ",
          icon: "🎯",
          blocks: [
            {
              type: "explanation",
              text: "**FANBOYS** เป็นคำย่อของ Coordinating Conjunction ทั้งหมด 7 คำ: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "for", rule: "เพราะว่า (formal)", example: "She left early, **for** she was tired." },
                { quantifier: "nor", rule: "ไม่...ก็ไม่ (negative)", example: "I don't like tea, **nor** do I like coffee." },
                { quantifier: "yet", rule: "แต่กระนั้น", example: "It's expensive, **yet** worth buying." }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "For", color: "blue" },
                { text: "And", color: "blue" },
                { text: "Nor", color: "secondary" },
                { text: "But", color: "secondary" },
                { text: "Or", color: "amber" },
                { text: "Yet", color: "amber" },
                { text: "So", color: "purple" }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "FANBOYS ทุกตัวเป็น **Coordinating Conjunction** เชื่อมสองประโยคที่มีน้ำหนักเท่ากัน"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I stayed home ___ it was raining.",
      tag: "Subordinating",
      tagColor: "blue",
      emoji: "🌧️",
      options: ["because", "and", "but", "or"],
      answer: "because",
      explanation: "because ใช้บอกเหตุผล"
    },
    {
      sentence: "___ she was tired, she finished her homework.",
      tag: "Subordinating",
      tagColor: "blue",
      emoji: "📚",
      options: ["Because", "Although", "When", "If"],
      answer: "Although",
      explanation: "although ใช้แสดงความขัดแย้ง (แม้ว่า)"
    },
    {
      sentence: "___ I got home, it started to rain.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "🏠",
      options: ["As soon as", "Because", "So", "But"],
      answer: "As soon as",
      explanation: "as soon as ใช้บอกว่าทันทีที่เหตุการณ์หนึ่งเกิดขึ้น"
    },
    {
      sentence: "___ it was raining, I stayed home.",
      tag: "Comma Rule",
      tagColor: "amber",
      emoji: "☔",
      options: ["Because,", "Because", "So", "And"],
      answer: "Because",
      explanation: "เมื่อ subordinate clause ขึ้นต้นประโยค ต้องมี comma หลัง clause นั้น ไม่ใช่หลังคำเชื่อม"
    },
    {
      sentence: "It's expensive, ___ worth buying.",
      tag: "FANBOYS",
      tagColor: "purple",
      emoji: "💰",
      options: ["yet", "nor", "for", "so"],
      answer: "yet",
      explanation: "yet แปลว่าแต่กระนั้น เป็นหนึ่งใน FANBOYS"
    }
  ]
};
