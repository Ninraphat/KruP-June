const CONTENT = {
  title: "Passive Voice",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🎓",
  subtitle: "Passive ทุก Tense, Modal + Passive, Causative Form และ Academic Writing",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Passive ในทุก Tense",
      cards: [
        {
          title: "ตารางสรุป Passive ทุกรูปแบบ",
          icon: "📊",
          blocks: [
            {
              type: "explanation",
              text: "หลักการของ Passive คือ **นำ verb to be ของ tense นั้นๆ มา + V3** เสมอ ไม่ว่าจะเป็น tense ใดก็ตาม"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง Passive", "ตัวอย่าง"],
              rows: [
                ["Present Perfect", "has/have + been + V3", "The work **has been finished**."],
                ["Past Perfect", "had + been + V3", "The report **had been submitted** before the deadline."],
                ["Future Simple", "will + be + V3", "The results **will be announced** tomorrow."],
                ["Future Perfect", "will have been + V3", "The project **will have been completed** by Friday."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "🎯",
              title: "เทคนิคจำ",
              text: "สูตรตายตัว: [hl:blue]verb to be (ตาม tense)[/hl] + [hl:secondary]V3[/hl] เท่านั้น — Continuous เพิ่ม being, Perfect เพิ่ม been"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Modal + Passive",
      cards: [
        {
          title: "Modal Verbs กับ Passive Voice",
          icon: "⚙️",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อใช้ **Modal Verb** (can, must, should, will) ร่วมกับ Passive โครงสร้างคือ **modal + be + V3**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Modal", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["must", "must + be + V3", "The bridge **must be repaired** before winter."],
                ["should", "should + be + V3", "This issue **should be discussed** carefully."],
                ["can", "can + be + V3", "This problem **can be solved** easily."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "The bridge **must be repaired** before winter.", th: "สะพานต้องถูกซ่อมก่อนฤดูหนาว" },
                { en: "This medicine **should be taken** after meals.", th: "ยานี้ควรถูกรับประทานหลังอาหาร" }
              ]
            }
          ]
        },
        {
          title: "Passive with Infinitive/Gerund",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "Passive สามารถอยู่ในรูป **infinitive (to be + V3)** หรือ **gerund (being + V3)** ได้เช่นกัน"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "This car needs **to be fixed**.", th: "รถคันนี้ต้องได้รับการซ่อม" },
                { en: "This book is worth **being read**.", th: "หนังสือเล่มนี้คุ้มค่าที่จะได้รับการอ่าน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Causative Form & Reported Speech",
      cards: [
        {
          title: "Causative Form (have/get something done)",
          icon: "🛠️",
          blocks: [
            {
              type: "explanation",
              text: "**Causative form** ใช้เมื่อเรา **จ้างหรือให้คนอื่นทำสิ่งใดสิ่งหนึ่งให้เรา** โครงสร้างคือ **have/get + กรรม + V3**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["have + object + V3", "I **had my car washed** yesterday."],
                ["get + object + V3", "She **got her hair cut** last week."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "Causative form ต่างจาก Passive ตรงที่เน้นว่า **เราเป็นคนสั่ง/จ้างให้ทำ** ไม่ใช่แค่บอกว่าสิ่งนั้นถูกกระทำ"
            }
          ]
        },
        {
          title: "Passive ใน Reported Speech & Academic Writing",
          icon: "📝",
          blocks: [
            {
              type: "explanation",
              text: "Passive Voice นิยมใช้มากใน **งานเขียนเชิงวิชาการ** เพื่อเน้นข้อมูล/ผลลัพธ์มากกว่าตัวผู้กระทำ และใช้ใน **Reported Speech** เมื่อรายงานคำพูดที่เป็น Passive"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "It **is believed** that the theory is correct.", th: "เชื่อกันว่าทฤษฎีนี้ถูกต้อง" },
                { en: "He said that the results **had been checked** twice.", th: "เขาบอกว่าผลลัพธ์ถูกตรวจสอบสองครั้งแล้ว" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "must be done", color: "blue" },
                { text: "should be checked", color: "blue" },
                { text: "have something done", color: "secondary" },
                { text: "it is said that", color: "amber" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "The work ___ already ___.",
      tag: "Present Perfect",
      tagColor: "blue",
      emoji: "✅",
      options: ["has / finished", "has / been finished", "is / finished", "was / finished"],
      answer: "has / been finished",
      explanation: "Present Perfect Passive: has/have + been + V3"
    },
    {
      sentence: "The bridge ___ before winter.",
      tag: "Modal Passive",
      tagColor: "secondary",
      emoji: "🌉",
      options: ["must repair", "must be repaired", "must repaired", "must being repaired"],
      answer: "must be repaired",
      explanation: "Modal + Passive: modal + be + V3"
    },
    {
      sentence: "This car needs ___.",
      tag: "Infinitive Passive",
      tagColor: "amber",
      emoji: "🚗",
      options: ["to fix", "to be fixed", "fixing", "fixed"],
      answer: "to be fixed",
      explanation: "Passive with infinitive: to be + V3"
    },
    {
      sentence: "I ___ my car ___ yesterday.",
      tag: "Causative",
      tagColor: "purple",
      emoji: "🔧",
      options: ["had / wash", "had / washed", "have / washed", "washed / had"],
      answer: "had / washed",
      explanation: "Causative form: had + object + V3 (ให้คนอื่นทำให้)"
    },
    {
      sentence: "It ___ that the theory is correct.",
      tag: "Academic Passive",
      tagColor: "blue",
      emoji: "📚",
      options: ["believes", "is believed", "believed", "is believing"],
      answer: "is believed",
      explanation: "Impersonal passive ในงานวิชาการ: It is believed/said/thought that..."
    }
  ]
};
