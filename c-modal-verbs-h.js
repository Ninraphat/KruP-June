const CONTENT = {
  title: "Modal Verbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🎓",
  subtitle: "Modal of Deduction, Modal + Perfect, Modal + Passive และ Past Modal",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Modal of Deduction (การคาดเดา)",
      cards: [
        {
          title: "ระดับความมั่นใจในการคาดเดา",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**Modal of Deduction** ใช้คาดเดาสิ่งที่เกิดขึ้น **ในปัจจุบัน** โดยแต่ละ modal แสดง **ระดับความมั่นใจ** ที่ต่างกัน"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Modal", "ความมั่นใจ", "ตัวอย่าง"],
              rows: [
                ["must be", "มั่นใจมาก (แน่นอน)", "She **must be** at home; the lights are on."],
                ["can't be", "มั่นใจมากว่าไม่ใช่", "He **can't be** at work; it's Sunday."],
                ["might/could be", "ไม่แน่ใจ/เป็นไปได้", "She **might be** in the library."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "🎯",
              title: "เทคนิคจำ",
              text: "[hl:blue]must[/hl] = มั่นใจว่าใช่ — [hl:secondary]can't[/hl] = มั่นใจว่าไม่ใช่ — [hl:purple]might/could[/hl] = ไม่แน่ใจ"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Modal + Perfect",
      cards: [
        {
          title: "การคาดเดา/เสียใจในอดีต",
          icon: "⏮️",
          blocks: [
            {
              type: "explanation",
              text: "**Modal + have + V3** ใช้พูดถึง **อดีต** ทั้งการคาดเดาเหตุการณ์ที่ผ่านไปแล้ว และการแสดงความเสียใจ/ตำหนิ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["must have + V3", "คาดเดาว่าเกิดขึ้นแน่นอน (อดีต)", "She **must have left** already; her car isn't here."],
                ["should have + V3", "ควรทำแต่ไม่ได้ทำ (เสียใจ)", "You **shouldn't have said** that to him."],
                ["could have + V3", "สามารถทำได้แต่ไม่ได้ทำ", "I **could have won**, but I gave up."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "She **must have left** already; her car isn't here.", th: "เธอต้องออกไปแล้วแน่ๆ รถของเธอไม่อยู่" },
                { en: "You **shouldn't have said** that to him.", th: "เธอไม่ควรพูดแบบนั้นกับเขาเลย (แต่พูดไปแล้ว)" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Modal + Passive & Past Modal",
      cards: [
        {
          title: "Modal + Passive",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประธานถูกกระทำร่วมกับ modal โครงสร้างคือ **modal + be + V3**"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "This report **must be checked** carefully.", th: "รายงานนี้ต้องถูกตรวจสอบอย่างระมัดระวัง" },
                { en: "The problem **should be solved** soon.", th: "ปัญหานี้ควรถูกแก้ไขในเร็วๆ นี้" }
              ]
            }
          ]
        },
        {
          title: "Past Modal: Would & Used to",
          icon: "🔁",
          blocks: [
            {
              type: "explanation",
              text: "**Would** ใช้พูดถึง **การกระทำที่เคยทำเป็นประจำในอดีต** ส่วน **used to** ใช้ได้ทั้งการกระทำและสภาพในอดีต"
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "When I was young, I **would visit** my grandma every Sunday.", th: "ตอนเด็กๆ ฉันเคยไปเยี่ยมคุณยายทุกวันอาทิตย์" },
                { en: "I **used to** live in Chiang Mai.", th: "ฉันเคยอาศัยอยู่ที่เชียงใหม่" }
              ]
            }
          ]
        },
        {
          title: "เปรียบเทียบ Must vs Have to vs Should",
          icon: "⚖️",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Must / Have to", sub: "จำเป็นต้องทำ", color: "blue", body: "You **must/have to** wear a seatbelt." },
                { word: "Should", sub: "คำแนะนำ (ไม่บังคับ)", color: "secondary", body: "You **should** exercise more." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "**Must/Have to** = จำเป็น (obligation) — **Should** = แนะนำ (advice) ความเข้มงวดต่างกันชัดเจน"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "The lights are on. She ___ be at home.",
      tag: "Deduction",
      tagColor: "blue",
      emoji: "🏠",
      options: ["must", "can't", "should", "might"],
      answer: "must",
      explanation: "must be ใช้เมื่อมั่นใจมากว่าเป็นความจริง"
    },
    {
      sentence: "She ___ already left; her car isn't here.",
      tag: "Modal Perfect",
      tagColor: "secondary",
      emoji: "🚗",
      options: ["must have", "must", "should have", "can have"],
      answer: "must have",
      explanation: "must have + V3 ใช้คาดเดาเหตุการณ์ในอดีตอย่างมั่นใจ"
    },
    {
      sentence: "You ___ that to him. It hurt his feelings.",
      tag: "Modal Perfect",
      tagColor: "secondary",
      emoji: "😔",
      options: ["shouldn't have said", "shouldn't say", "didn't say", "won't say"],
      answer: "shouldn't have said",
      explanation: "shouldn't have + V3 แสดงความเสียใจ/ตำหนิสิ่งที่ทำไปแล้ว"
    },
    {
      sentence: "This report ___ carefully before submission.",
      tag: "Modal Passive",
      tagColor: "amber",
      emoji: "📄",
      options: ["must check", "must be checked", "must checked", "must being checked"],
      answer: "must be checked",
      explanation: "Modal + Passive: modal + be + V3"
    },
    {
      sentence: "When I was young, I ___ visit my grandma every Sunday.",
      tag: "Past Modal",
      tagColor: "purple",
      emoji: "👵",
      options: ["would", "should", "must", "can"],
      answer: "would",
      explanation: "would ใช้พูดถึงการกระทำที่เคยทำเป็นประจำในอดีต"
    }
  ]
};
