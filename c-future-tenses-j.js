const CONTENT = {
  title: "Future Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🔮",
  subtitle: "ทบทวน Will vs Going to, Negative/Question และการพูดถึงอนาคตแบบอื่นๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน Will vs Be going to",
      cards: [
        {
          title: "การคาดเดาแบบมีเหตุผล vs ตัดสินใจทันที",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**will** ใช้กับ **การตัดสินใจทันที** และ **การคาดเดาที่ไม่มีหลักฐานชัดเจน** ส่วน **be going to** ใช้กับ **แผนที่วางไว้แล้ว** และ **การคาดเดาที่มีหลักฐาน** ในปัจจุบัน"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Will",
                  sub: "ตัดสินใจทันที / คาดเดาทั่วไป",
                  color: "blue",
                  body: "I **think** it **will rain** tomorrow.\n\n(คาดเดาจากความคิดเห็น)"
                },
                {
                  word: "Going to",
                  sub: "แผนที่วางไว้ / คาดเดามีหลักฐาน",
                  color: "secondary",
                  body: "Look at those clouds! It **is going to rain**.\n\n(มีหลักฐานตรงหน้า)"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "เคล็ดลับ: ถ้ามี **หลักฐานที่เห็นตรงหน้า** (เช่น เมฆดำ) ใช้ **going to** แต่ถ้าเป็นแค่ **ความคิดเห็นส่วนตัว** ใช้ **will**"
            }
          ]
        },
        {
          title: "Negative & Question Form",
          icon: "❓",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["รูปแบบ", "Will", "Be going to"],
              rows: [
                ["ปฏิเสธ", "S + will not (won't) + V1", "S + is/am/are + not + going to + V1"],
                ["คำถาม", "Will + S + V1 ?", "Is/Am/Are + S + going to + V1 ?"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "I **won't** be late for class.", th: "ฉันจะไม่มาสายเข้าเรียน" },
                { en: "**Are** you **going to** join the trip?", th: "เธอจะไปทริปด้วยไหม" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Present Continuous สำหรับอนาคต",
      cards: [
        {
          title: "นัดหมายที่แน่นอนแล้ว (Arrangement)",
          icon: "📅",
          blocks: [
            {
              type: "explanation",
              text: "เราสามารถใช้ **Present Continuous** (is/am/are + V-ing) พูดถึง **แผนในอนาคตที่นัดหมายไว้แน่นอนแล้ว** โดยมักมีคำระบุเวลาในอนาคตกำกับ"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "We **are meeting** our teacher tomorrow at 9 AM.", th: "เราจะไปพบครูพรุ่งนี้ตอน 9 โมง" },
                { en: "I **am flying** to Bangkok next Friday.", th: "ฉันจะบินไปกรุงเทพฯ ศุกร์หน้า" }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              title: "ข้อสังเกต",
              text: "ต่างจาก be going to ตรงที่ Present Continuous มักใช้กับ **การนัดหมายที่มีคนอื่นเกี่ยวข้อง** (เช่น นัดพบ, จองตั๋ว) และมี **เวลาชัดเจน**"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Present Simple สำหรับตารางเวลา",
      cards: [
        {
          title: "Timetable & Schedule",
          icon: "🚆",
          blocks: [
            {
              type: "explanation",
              text: "เราใช้ **Present Simple** พูดถึงอนาคตได้เมื่อพูดถึง **ตารางเวลาที่แน่นอนตายตัว** เช่น เวลารถไฟ เที่ยวบิน หรือตารางเรียน"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "The train **leaves** at 9 AM tomorrow morning.", th: "รถไฟออกตอน 9 โมงเช้าพรุ่งนี้" },
                { en: "The movie **starts** at 7 PM tonight.", th: "หนังเริ่มฉายตอน 1 ทุ่มคืนนี้" },
                { en: "School **begins** next Monday.", th: "โรงเรียนเปิดเทอมวันจันทร์หน้า" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "will", color: "blue" },
                { text: "going to", color: "secondary" },
                { text: "Present Continuous (arrangement)", color: "amber" },
                { text: "Present Simple (timetable)", color: "purple" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "สรุปภาพรวม",
              text: "อนาคตพูดได้หลายแบบ: [hl:blue]will[/hl] = ตัดสินใจ/คาดเดา, [hl:secondary]going to[/hl] = แผน, Present Continuous = นัดหมาย, Present Simple = ตารางเวลาตายตัว"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "Look at those dark clouds! It ___ rain.",
      tag: "Going to",
      tagColor: "secondary",
      emoji: "☁️",
      options: ["will", "is going to", "is", "was"],
      answer: "is going to",
      explanation: "มีหลักฐานตรงหน้า (เมฆดำ) จึงใช้ be going to สำหรับการคาดเดา"
    },
    {
      sentence: "I ___ be late for the meeting. I promise.",
      tag: "Will Negative",
      tagColor: "blue",
      emoji: "🚫",
      options: ["won't", "am not going to", "don't", "not"],
      answer: "won't",
      explanation: "ประโยคปฏิเสธของ will คือ won't (will not)"
    },
    {
      sentence: "We ___ our teacher tomorrow at 9 AM. It's already arranged.",
      tag: "Present Continuous",
      tagColor: "amber",
      emoji: "📅",
      options: ["will meet", "meet", "are meeting", "met"],
      answer: "are meeting",
      explanation: "เป็นนัดหมายที่แน่นอนแล้ว ใช้ Present Continuous สำหรับอนาคต"
    },
    {
      sentence: "The train ___ at 9 AM tomorrow.",
      tag: "Timetable",
      tagColor: "purple",
      emoji: "🚆",
      options: ["will leave", "is leaving", "leaves", "left"],
      answer: "leaves",
      explanation: "ตารางเวลาที่แน่นอนตายตัวใช้ Present Simple แม้จะพูดถึงอนาคต"
    },
    {
      sentence: "___ you going to join the trip next week?",
      tag: "Going to Question",
      tagColor: "secondary",
      emoji: "🧳",
      options: ["Will", "Are", "Do", "Is"],
      answer: "Are",
      explanation: "ประโยคคำถามของ be going to ใช้ Is/Am/Are ขึ้นต้นตามประธาน"
    }
  ]
};
