const CONTENT = {
  title: "Question Tags",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "❓",
  subtitle: "เรียนรู้ Question Tag กับ Verb to be และ Can แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Question Tag คืออะไร?",
      cards: [
        {
          title: "หางคำถามท้ายประโยค",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Question Tag** คือ **คำถามสั้นๆ** ที่เติมท้ายประโยคบอกเล่า เพื่อ **ถามยืนยัน** สิ่งที่พูด แปลว่า **\"...ใช่ไหม\"**"
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "กฎง่ายๆ: ถ้าประโยคหลักเป็น **บอกเล่า** ตัว tag จะเป็น **ปฏิเสธ**"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Question Tag กับ Verb to be",
      cards: [
        {
          title: "Is/Am/Are → isn't/aren't",
          icon: "🔧",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "Verb to be", "Question Tag"],
              rows: [
                ["He/She/It", "is", "**isn't he/she/it?**"],
                ["You/We/They", "are", "**aren't you/we/they?**"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "She **is** happy, **isn't she**?", th: "เธอมีความสุข ใช่ไหม" },
                { en: "They **are** students, **aren't they**?", th: "พวกเขาเป็นนักเรียน ใช่ไหม" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Question Tag กับ Can",
      cards: [
        {
          title: "Can → can't",
          icon: "💪",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประโยคหลักมี **can** ตัว Question Tag จะใช้ **can't** ตามด้วยประธาน"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "You **can** swim, **can't you**?", th: "เธอว่ายน้ำได้ ใช่ไหม" },
                { en: "He **can** speak English, **can't he**?", th: "เขาพูดภาษาอังกฤษได้ ใช่ไหม" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "is → isn't", color: "blue" },
                { text: "are → aren't", color: "blue" },
                { text: "can → can't", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "บอกเล่า **(+)** → tag เป็น **ปฏิเสธ (-)** เสมอในระดับนี้"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She is happy, ___?",
      tag: "Verb to be",
      tagColor: "blue",
      emoji: "😊",
      options: ["isn't she", "is she", "isn't it", "aren't she"],
      answer: "isn't she",
      explanation: "is (บอกเล่า) → isn't she (tag ปฏิเสธ)"
    },
    {
      sentence: "They are students, ___?",
      tag: "Verb to be",
      tagColor: "blue",
      emoji: "🎓",
      options: ["are they", "aren't they", "isn't they", "don't they"],
      answer: "aren't they",
      explanation: "are (บอกเล่า) → aren't they (tag ปฏิเสธ)"
    },
    {
      sentence: "You can swim, ___?",
      tag: "Can",
      tagColor: "secondary",
      emoji: "🏊",
      options: ["can you", "can't you", "don't you", "aren't you"],
      answer: "can't you",
      explanation: "can (บอกเล่า) → can't you (tag ปฏิเสธ)"
    },
    {
      sentence: "He can speak English, ___?",
      tag: "Can",
      tagColor: "secondary",
      emoji: "🗣️",
      options: ["can he", "can't he", "does he", "isn't he"],
      answer: "can't he",
      explanation: "can (บอกเล่า) → can't he (tag ปฏิเสธ)"
    },
    {
      sentence: "We are friends, ___?",
      tag: "Verb to be",
      tagColor: "blue",
      emoji: "🤝",
      options: ["are we", "aren't we", "isn't we", "don't we"],
      answer: "aren't we",
      explanation: "are (บอกเล่า) → aren't we (tag ปฏิเสธ)"
    }
  ]
};
