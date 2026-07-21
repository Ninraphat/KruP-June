const CONTENT = {
  title: "Past Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "Past Perfect, Used to/Would, Passive Voice และ Reported Speech",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Past Perfect & Past Perfect Continuous",
      cards: [
        {
          title: "Past Perfect คืออะไร?",
          icon: "⏮️",
          blocks: [
            {
              type: "explanation",
              text: "**Past Perfect** (had + V3) ใช้พูดถึงเหตุการณ์ที่ **เกิดขึ้นก่อน** อีกเหตุการณ์หนึ่งในอดีต — เป็น 'อดีตของอดีต'"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["Past Perfect", "had + V3", "By the time we arrived, the movie **had started**."],
                ["Past Perfect Continuous", "had been + V-ing", "She **had been waiting** for an hour when he came."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "by the time, before, after, already, just, when"
            }
          ]
        },
        {
          title: "Past Simple vs Past Perfect (ลำดับเหตุการณ์)",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อพูดถึง **สองเหตุการณ์ในอดีต** เหตุการณ์ที่เกิด **ก่อน** ใช้ **Past Perfect** ส่วนเหตุการณ์ที่เกิด **ทีหลัง** ใช้ **Past Simple**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Past Perfect", sub: "เกิดก่อน", color: "blue", body: "The train **had left**\n\n(เหตุการณ์แรก)" },
                { word: "Past Simple", sub: "เกิดทีหลัง", color: "secondary", body: "when we **arrived**\n\n(เหตุการณ์ที่สอง)" }
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**By the time** we arrived, the movie **had** already **started**.", th: "ตอนที่เรามาถึง หนังเริ่มไปแล้ว" },
                { en: "The train **had left** by the time we got to the station.", th: "รถไฟออกไปแล้วก่อนที่เราจะไปถึงสถานี" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "ข้อสอบชอบออก",
              text: "ใช้ **already** และ **by the time** เป็นตัวช่วยสังเกตว่าต้องใช้ Past Perfect กับเหตุการณ์ที่เกิดก่อน"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Used to / Would",
      cards: [
        {
          title: "พูดถึงอดีตที่เคยทำเป็นประจำ",
          icon: "🔁",
          blocks: [
            {
              type: "explanation",
              text: "**Used to** และ **Would** ใช้พูดถึง **นิสัย/สภาพที่เคยเป็นในอดีต แต่ปัจจุบันไม่เป็นแล้ว** โดย **used to** ใช้ได้ทั้งการกระทำและสภาพ ส่วน **would** ใช้ได้เฉพาะการกระทำที่ทำซ้ำๆ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["รูปแบบ", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                ["used to + V1", "การกระทำและสภาพ", "She **used to live** in Chiang Mai."],
                ["would + V1", "การกระทำที่ทำซ้ำๆ เท่านั้น", "We **would play** in the park every Sunday."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "ห้ามใช้ **would** กับสภาพ (state) เช่น ~~I would have a dog~~ ต้องใช้ **I used to have a dog** แทน"
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
                { en: "She **used to** live in Chiang Mai before she moved to Bangkok.", th: "เธอเคยอาศัยอยู่ที่เชียงใหม่ก่อนย้ายมากรุงเทพฯ" },
                { en: "My grandpa **would tell** us stories every night.", th: "ปู่ของฉันเคยเล่านิทานให้เราฟังทุกคืน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Passive Voice & Reported Speech",
      cards: [
        {
          title: "Past Tenses ใน Passive Voice",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประธานเป็นผู้ **ถูกกระทำ** ในอดีต เราใช้โครงสร้าง **was/were + V3**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง Passive", "ตัวอย่าง"],
              rows: [
                ["Past Simple", "was/were + V3", "The letter **was sent** yesterday."],
                ["Past Continuous", "was/were + being + V3", "The house **was being built** last year."],
                ["Past Perfect", "had + been + V3", "The report **had been finished** before the meeting."]
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "The bridge **was built** in 1998.", th: "สะพานนี้ถูกสร้างขึ้นในปี 1998" },
                { en: "The cake **had been eaten** before I arrived.", th: "เค้กถูกกินไปแล้วก่อนที่ฉันจะมาถึง" }
              ]
            }
          ]
        },
        {
          title: "Reported Speech เบื้องต้น",
          icon: "💬",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเล่าคำพูดของคนอื่น (Reported Speech) กริยาต้อง **ถอยไปหนึ่งขั้นในอดีต** (Backshift): Present Simple → Past Simple, Present Perfect → Past Perfect"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["คำพูดเดิม (Direct)", "คำพูดรายงาน (Reported)"],
              rows: [
                ["\"I **am** tired,\" she said.", "She said (that) she **was** tired."],
                ["\"I **have finished**,\" he said.", "He said (that) he **had finished**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              title: "หลักการง่ายๆ",
              text: "**Present → Past** และ **Past → Past Perfect** เมื่อเปลี่ยนจากคำพูดตรงเป็นคำพูดรายงาน"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "By the time we arrived, the movie ___ already ___.",
      tag: "Past Perfect",
      tagColor: "blue",
      emoji: "🎬",
      options: ["has / started", "had / started", "was / starting", "did / start"],
      answer: "had / started",
      explanation: "เหตุการณ์ (หนังเริ่ม) เกิดก่อนเหตุการณ์อื่นในอดีต (เรามาถึง) จึงใช้ Past Perfect: had + V3"
    },
    {
      sentence: "She ___ live in Chiang Mai before she moved to Bangkok.",
      tag: "Used to",
      tagColor: "secondary",
      emoji: "🏡",
      options: ["would", "used to", "was", "has"],
      answer: "used to",
      explanation: "used to ใช้กับสภาพในอดีต (live เป็น state) ส่วน would ใช้ได้เฉพาะการกระทำที่ทำซ้ำๆ"
    },
    {
      sentence: "The bridge ___ in 1998.",
      tag: "Passive",
      tagColor: "amber",
      emoji: "🌉",
      options: ["built", "was built", "has built", "was building"],
      answer: "was built",
      explanation: "Past Simple Passive: was/were + V3 ใช้กับเหตุการณ์ในอดีตที่มีเวลาระบุแน่นอน"
    },
    {
      sentence: "\"I am tired,\" she said. → She said (that) she ___ tired.",
      tag: "Reported Speech",
      tagColor: "purple",
      emoji: "💬",
      options: ["is", "was", "has been", "had"],
      answer: "was",
      explanation: "Present Simple (am) ถอยเป็น Past Simple (was) เมื่อเปลี่ยนเป็น Reported Speech"
    },
    {
      sentence: "The train ___ by the time we got to the station.",
      tag: "Past Perfect",
      tagColor: "blue",
      emoji: "🚆",
      options: ["left", "had left", "was leaving", "has left"],
      answer: "had left",
      explanation: "รถไฟออกไปก่อนที่เราจะไปถึง (เหตุการณ์แรก) จึงใช้ Past Perfect"
    }
  ]
};
