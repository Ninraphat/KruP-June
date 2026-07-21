const CONTENT = {
  title: "Present Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "☀️",
  subtitle: "เรียนรู้การใช้ Present Simple และ Present Continuous แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Present Simple",
      cards: [
        {
          title: "Present Simple คืออะไร?",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Present Simple** ใช้พูดถึงสิ่งที่เป็น **ความจริง**, **นิสัย** หรือสิ่งที่ทำ **เป็นประจำ** เช่น กิจวัตรประจำวัน หรือข้อเท็จจริงทั่วไป"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "รูปกริยา", "ตัวอย่าง"],
              rows: [
                ["I / You / We / They", { main: "V1 (กริยาช่องที่ 1)", note: "ไม่เติม s" }, "They **play** football."],
                ["He / She / It", { main: "V1 + s/es", note: "เติม s หรือ es" }, "She **plays** the piano."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "every day, every morning, always, usually, sometimes, never, on Mondays"
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
                { en: "She **brushes** her teeth every morning.", th: "เธอแปรงฟันทุกเช้า" },
                { en: "We **go** to school every day.", th: "เราไปโรงเรียนทุกวัน" },
                { en: "The sun **rises** in the east.", th: "ดวงอาทิตย์ขึ้นทางทิศตะวันออก" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Present Continuous",
      cards: [
        {
          title: "Present Continuous คืออะไร?",
          icon: "🏃",
          blocks: [
            {
              type: "explanation",
              text: "**Present Continuous** ใช้พูดถึงสิ่งที่ **กำลังเกิดขึ้นอยู่ตอนนี้** เท่านั้น โครงสร้างคือ **is/am/are + V-ing**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["ประธาน", "Verb to be", "ตัวอย่าง"],
              rows: [
                ["I", "am", "I **am reading** a book now."],
                ["He / She / It", "is", "He **is playing** football."],
                ["You / We / They", "are", "They **are eating** lunch."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "now, right now, at the moment, Look!, Listen!"
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
                { en: "Look! The dog **is running** in the garden.", th: "ดูสิ! สุนัขกำลังวิ่งอยู่ในสวน" },
                { en: "I **am doing** my homework now.", th: "ฉันกำลังทำการบ้านอยู่ตอนนี้" },
                { en: "They **are watching** TV right now.", th: "พวกเขากำลังดูทีวีอยู่ตอนนี้" }
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
          title: "Present Simple vs Present Continuous",
          icon: "🔍",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Simple",
                  sub: "ทำเป็นประจำ / ความจริง",
                  color: "blue",
                  body: "**every day**, usually\n\nShe **walks** to school."
                },
                {
                  word: "Continuous",
                  sub: "กำลังทำอยู่ตอนนี้",
                  color: "secondary",
                  body: "**now**, right now\n\nShe **is walking** to school."
                }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "every day", color: "blue" },
                { text: "usually", color: "blue" },
                { text: "always", color: "blue" },
                { text: "now", color: "secondary" },
                { text: "right now", color: "secondary" },
                { text: "at the moment", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "ถ้าเป็น **ประจำ** ใช้ [hl:blue]Simple[/hl] — ถ้าเป็น **ตอนนี้** ใช้ [hl:secondary]Continuous[/hl]"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She ___ to school every day.",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "🎒",
      options: ["walk", "walks", "is walking", "walking"],
      answer: "walks",
      explanation: "ประธาน She (เอกพจน์) ต้องเติม s ที่กริยาใน Present Simple"
    },
    {
      sentence: "Look! The baby ___ now.",
      tag: "Present Continuous",
      tagColor: "secondary",
      emoji: "👶",
      options: ["sleep", "sleeps", "is sleeping", "are sleeping"],
      answer: "is sleeping",
      explanation: "มีคำว่า 'now' และ 'Look!' บอกว่ากำลังเกิดขึ้นตอนนี้ ใช้ is + V-ing"
    },
    {
      sentence: "We ___ football every weekend.",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "⚽",
      options: ["play", "plays", "are playing", "playing"],
      answer: "play",
      explanation: "ประธาน We ไม่ต้องเติม s และมีคำว่า every weekend บ่งบอกความเป็นประจำ"
    },
    {
      sentence: "I ___ my homework right now.",
      tag: "Present Continuous",
      tagColor: "secondary",
      emoji: "📝",
      options: ["do", "does", "am doing", "is doing"],
      answer: "am doing",
      explanation: "ประธาน I ใช้ am + V-ing และมีคำว่า right now"
    },
    {
      sentence: "The sun ___ in the east.",
      tag: "Present Simple",
      tagColor: "blue",
      emoji: "🌞",
      options: ["rise", "rises", "is rising", "rising"],
      answer: "rises",
      explanation: "เป็นข้อเท็จจริงทั่วไป (fact) จึงใช้ Present Simple และเติม s เพราะ the sun เป็นเอกพจน์"
    }
  ]
};
