const CONTENT = {
  title: "Modal Verbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🗝️",
  subtitle: "Should, May/Might, Have to และความแตกต่างของ Must vs Have to",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Should (คำแนะนำ)",
      cards: [
        {
          title: "Should คืออะไร?",
          icon: "💬",
          blocks: [
            {
              type: "explanation",
              text: "**Should** ใช้ให้ **คำแนะนำ** ว่าควรทำหรือไม่ควรทำอะไร โครงสร้างคือ **should/shouldn't + V1**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["รูปประโยค", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["บอกเล่า", "S + should + V1", "You **should study** harder."],
                ["ปฏิเสธ", "S + shouldn't + V1", "You **shouldn't stay up** late."],
                ["คำถาม", "Should + S + V1?", "**Should** I **call** her?"]
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
                { en: "You **should study** harder.", th: "เธอควรตั้งใจเรียนให้มากขึ้น" },
                { en: "You **shouldn't eat** too much junk food.", th: "เธอไม่ควรกินอาหารขยะมากเกินไป" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ May / Might",
      cards: [
        {
          title: "May/Might: ขออนุญาต & ความเป็นไปได้",
          icon: "🎲",
          blocks: [
            {
              type: "explanation",
              text: "**May** ใช้ **ขออนุญาตอย่างสุภาพ** และ **บอกความเป็นไปได้** ส่วน **Might** ใช้บอกความเป็นไปได้ที่ **ไม่แน่นอน/น้อยกว่า May**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "May", sub: "ขออนุญาต / เป็นไปได้", color: "blue", body: "**May I** come in?\n\nIt **may rain** later." },
                { word: "Might", sub: "เป็นไปได้ (ไม่แน่นอน)", color: "secondary", body: "It **might rain** later.\n\n(ไม่แน่ใจเท่า may)" }
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "**May I** use your phone?", th: "ฉันขอใช้โทรศัพท์ของเธอได้ไหม" },
                { en: "It **might rain** this afternoon.", th: "บ่ายนี้อาจจะฝนตก" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Have to & Must vs Have to",
      cards: [
        {
          title: "Have to / Don't have to",
          icon: "📋",
          blocks: [
            {
              type: "explanation",
              text: "**Have to** ใช้บอก **ความจำเป็น** (คล้าย must) ส่วน **don't have to** ใช้บอกว่า **ไม่จำเป็นต้องทำ** (ต่างจาก mustn't ที่แปลว่าห้ามทำ)"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประธาน", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["I/You/We/They", "have to + V1", "I **have to finish** my homework."],
                ["He/She/It", "has to + V1", "She **has to wake up** early."],
                ["ปฏิเสธ", "don't/doesn't have to + V1", "You **don't have to come** if you're busy."]
              ]
            }
          ]
        },
        {
          title: "Must vs Have to",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**Must** และ **Have to** ทั้งคู่แปลว่า **\"ต้อง\"** แต่ต่างกันที่แหล่งที่มาของความจำเป็น"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Must", sub: "ความรู้สึกส่วนตัว/กฎที่พูดเอง", color: "blue", body: "I **must call** my mom.\n\n(ฉันรู้สึกว่าต้องทำเอง)" },
                { word: "Have to", sub: "กฎ/ข้อบังคับจากภายนอก", color: "secondary", body: "I **have to wear** a uniform.\n\n(โรงเรียนบังคับ)" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "⚠️",
              title: "ข้อควรระวัง",
              text: "**mustn't** (ห้ามทำ) ≠ **don't have to** (ไม่จำเป็นต้องทำ) — ความหมายต่างกันมาก อย่าสับสน!"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "You ___ study harder to pass the exam.",
      tag: "Should",
      tagColor: "blue",
      emoji: "📚",
      options: ["should", "shoulds", "shouldn't", "may"],
      answer: "should",
      explanation: "should ใช้ให้คำแนะนำ"
    },
    {
      sentence: "___ I use your phone, please?",
      tag: "May",
      tagColor: "blue",
      emoji: "📱",
      options: ["May", "Must", "Should", "Have"],
      answer: "May",
      explanation: "May I...? ใช้ขออนุญาตอย่างสุภาพ"
    },
    {
      sentence: "I ___ finish my homework tonight.",
      tag: "Have to",
      tagColor: "secondary",
      emoji: "📝",
      options: ["has to", "have to", "having to", "had to"],
      answer: "have to",
      explanation: "ประธาน I ใช้ have to"
    },
    {
      sentence: "It ___ rain this afternoon. I'm not sure.",
      tag: "Might",
      tagColor: "secondary",
      emoji: "🌧️",
      options: ["may", "might", "must", "should"],
      answer: "might",
      explanation: "might ใช้บอกความเป็นไปได้ที่ไม่แน่นอน"
    },
    {
      sentence: "It's a holiday, so you ___ wake up early.",
      tag: "Don't have to",
      tagColor: "purple",
      emoji: "😴",
      options: ["mustn't", "don't have to", "shouldn't", "can't"],
      answer: "don't have to",
      explanation: "don't have to = ไม่จำเป็นต้องทำ (ต่างจาก mustn't ที่แปลว่าห้ามทำ)"
    }
  ]
};
