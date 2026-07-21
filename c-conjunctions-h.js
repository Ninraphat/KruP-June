const CONTENT = {
  title: "Conjunctions",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "Correlative Conjunction, Conjunctive Adverb และ Contrast/Concession ขั้นสูง",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Correlative Conjunction",
      cards: [
        {
          title: "คำเชื่อมที่มาเป็นคู่",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Correlative Conjunction** คือคำเชื่อมที่ **ใช้เป็นคู่เสมอ** เพื่อเชื่อมสิ่งที่มีน้ำหนักเท่ากัน"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คู่คำเชื่อม", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["both...and", "ทั้ง...และ", "She is **both** smart **and** kind."],
                ["either...or", "อย่างใดอย่างหนึ่ง", "You can have **either** tea **or** coffee."],
                ["neither...nor", "ไม่ทั้งสองอย่าง", "He likes **neither** tea **nor** coffee."],
                ["not only...but also", "ไม่เพียงแต่...แต่ยัง", "**Not only** did she pass the exam, **but** she also got the highest score."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "เมื่อ **not only** ขึ้นต้นประโยค ต้องใช้ **inversion** (สลับ subject-verb) เช่น **Not only did she...**"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Conjunctive Adverb",
      cards: [
        {
          title: "Adverb ที่ทำหน้าที่เชื่อมประโยค",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Conjunctive Adverb** ใช้เชื่อมสอง **independent clause** เข้าด้วยกัน โดยแสดงความสัมพันธ์เชิงเหตุผล ความขัดแย้ง หรือลำดับ"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "however", rule: "อย่างไรก็ตาม (contrast)", example: "He was tired; **however**, he kept working." },
                { quantifier: "therefore", rule: "ดังนั้น (result)", example: "It was raining; **therefore**, we stayed home." },
                { quantifier: "moreover", rule: "ยิ่งไปกว่านั้น (addition)", example: "The plan is risky; **moreover**, it's expensive." },
                { quantifier: "nevertheless", rule: "แม้กระนั้น (contrast)", example: "The task was hard; **nevertheless**, she completed it." },
                { quantifier: "furthermore", rule: "นอกจากนี้ (addition)", example: "He is smart; **furthermore**, he works hard." }
              ]
            }
          ]
        },
        {
          title: "Punctuation กับ Conjunctive Adverb",
          icon: "✍️",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อใช้ conjunctive adverb เชื่อมสอง independent clause ต้องใช้ **semicolon (;)** ก่อน และ **comma (,)** หลังคำเชื่อม"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["Clause 1; conjunctive adverb, Clause 2.", "He was tired**; however,** he kept working."]
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "⚠️",
              text: "ข้อควรระวัง: **ห้ามใช้ comma แทน semicolon** ระหว่างสอง independent clause (comma splice)"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Contrast/Concession ขั้นสูง",
      cards: [
        {
          title: "Whereas, Despite, Even Though",
          icon: "⚖️",
          blocks: [
            {
              type: "explanation",
              text: "คำเชื่อมเหล่านี้ใช้แสดง **ความขัดแย้ง/ยอมรับ** ในระดับที่ซับซ้อนขึ้น"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำเชื่อม", "ตามด้วย", "ตัวอย่าง"],
              rows: [
                ["whereas", "clause (S+V)", "I like tea, **whereas** she prefers coffee."],
                ["despite", "noun/gerund", "**Despite** the rain, we went out."],
                ["even though", "clause (S+V)", "**Even though** it was raining, we went out."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "จำง่ายๆ: **despite** ตามด้วย **noun/gerund** ส่วน **even though/whereas** ตามด้วย **clause เต็มรูป (S+V)**"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She is ___ smart ___ kind.",
      tag: "Correlative",
      tagColor: "blue",
      emoji: "🌟",
      options: ["both...and", "either...or", "neither...nor", "not only...but"],
      answer: "both...and",
      explanation: "both...and ใช้เชื่อมสองสิ่งที่เป็นจริงพร้อมกัน"
    },
    {
      sentence: "He was tired; ___, he kept working.",
      tag: "Conjunctive Adverb",
      tagColor: "secondary",
      emoji: "💪",
      options: ["however", "therefore", "moreover", "furthermore"],
      answer: "however",
      explanation: "however ใช้แสดงความขัดแย้ง (แม้จะเหนื่อยแต่ยังทำงานต่อ)"
    },
    {
      sentence: "It was raining; therefore___ we stayed home.",
      tag: "Punctuation",
      tagColor: "amber",
      emoji: "✍️",
      options: [",", ";", ".", ":"],
      answer: ",",
      explanation: "หลัง conjunctive adverb ต้องมี comma ก่อน clause ที่สอง"
    },
    {
      sentence: "___ the rain, we went out.",
      tag: "Despite",
      tagColor: "purple",
      emoji: "🌧️",
      options: ["Despite", "Even though", "Whereas", "However"],
      answer: "Despite",
      explanation: "despite ตามด้วย noun (the rain) ไม่ใช่ clause"
    },
    {
      sentence: "___ did she pass the exam, but she also got the highest score.",
      tag: "Correlative",
      tagColor: "blue",
      emoji: "🏆",
      options: ["Not only", "Both", "Either", "Neither"],
      answer: "Not only",
      explanation: "not only...but also ใช้ inversion เมื่อ not only ขึ้นต้นประโยค"
    }
  ]
};
