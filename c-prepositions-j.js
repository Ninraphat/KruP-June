const CONTENT = {
  title: "Prepositions",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "📍",
  subtitle: "Preposition of Movement, Time เพิ่มเติม และ Verb + Preposition",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Preposition of Movement",
      cards: [
        {
          title: "บอกทิศทางการเคลื่อนไหว",
          icon: "🚶",
          blocks: [
            {
              type: "explanation",
              text: "**Preposition of Movement** ใช้บอก **ทิศทาง/การเคลื่อนที่** เช่น to, into, out of, through, across, along"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Preposition", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["to", "ไปยัง", "She walked **to** school."],
                ["into", "เข้าไปข้างใน", "The cat jumped **into** the box."],
                ["out of", "ออกจากข้างใน", "He ran **out of** the room."],
                ["through", "ผ่านเข้าไปตรงกลาง", "We drove **through** the tunnel."],
                ["across", "ข้ามผ่าน", "She swam **across** the river."],
                ["along", "ไปตามแนว", "They walked **along** the beach."]
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
                { en: "The cat jumped **into** the box.", th: "แมวกระโดดเข้าไปในกล่อง" },
                { en: "We walked **across** the bridge.", th: "เราเดินข้ามสะพาน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Preposition of Time เพิ่มเติม",
      cards: [
        {
          title: "For/Since, During, Before/After",
          icon: "🕐",
          blocks: [
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Preposition", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                ["for", "+ ระยะเวลา", "I have lived here **for** five years."],
                ["since", "+ จุดเริ่มต้น", "She has worked here **since** 2020."],
                ["during", "+ ช่วงเวลา/เหตุการณ์", "I fell asleep **during** the movie."],
                ["before/after", "ก่อน/หลัง", "Wash your hands **before** eating."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "I have lived here **for** five years.", th: "ฉันอาศัยอยู่ที่นี่มาห้าปีแล้ว" },
                { en: "She called me **during** the meeting.", th: "เธอโทรหาฉันระหว่างที่กำลังประชุม" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Verb + Preposition & Preposition + Gerund",
      cards: [
        {
          title: "กริยาที่ต้องมี Preposition เฉพาะ",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "กริยาบางคำ **ต้องตามด้วย preposition เฉพาะ** เสมอ ต้องจำเป็นคู่ๆ"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "listen to", rule: "ฟัง...", example: "I **listen to** music every day." },
                { quantifier: "look at", rule: "มองดู...", example: "She **looked at** the picture." },
                { quantifier: "wait for", rule: "รอ...", example: "We **waited for** the bus." },
                { quantifier: "arrive at/in", rule: "มาถึง...", example: "They **arrived at** the station." }
              ]
            }
          ]
        },
        {
          title: "Preposition + Gerund เบื้องต้น",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อกริยาตามหลัง **preposition** ต้องใช้รูป **Gerund (V-ing)** เสมอ ไม่ใช้ infinitive"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "Wash your hands **before eating**.", th: "ล้างมือก่อนกินข้าว" },
                { en: "She felt tired **after running**.", th: "เธอรู้สึกเหนื่อยหลังจากวิ่ง" }
              ]
            },
            {
              type: "alert",
              color: "purple",
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
      sentence: "The cat jumped ___ the box.",
      tag: "Movement",
      tagColor: "blue",
      emoji: "📦",
      options: ["into", "out of", "through", "along"],
      answer: "into",
      explanation: "into ใช้บอกการเคลื่อนที่เข้าไปข้างใน"
    },
    {
      sentence: "I have lived here ___ five years.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "🏠",
      options: ["since", "for", "during", "at"],
      answer: "for",
      explanation: "for ใช้กับระยะเวลา (five years)"
    },
    {
      sentence: "She has worked here ___ 2020.",
      tag: "Time",
      tagColor: "secondary",
      emoji: "💼",
      options: ["for", "since", "during", "in"],
      answer: "since",
      explanation: "since ใช้กับจุดเริ่มต้นของเวลา"
    },
    {
      sentence: "I ___ music every day.",
      tag: "Verb + Prep",
      tagColor: "amber",
      emoji: "🎵",
      options: ["listen to", "listen at", "listen for", "listen"],
      answer: "listen to",
      explanation: "listen ต้องตามด้วย to เสมอ"
    },
    {
      sentence: "Wash your hands before ___.",
      tag: "Prep + Gerund",
      tagColor: "purple",
      emoji: "🍽️",
      options: ["eat", "eating", "to eat", "ate"],
      answer: "eating",
      explanation: "หลัง preposition (before) ต้องใช้ V-ing เสมอ"
    }
  ]
};
