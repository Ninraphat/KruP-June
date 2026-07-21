const CONTENT = {
  title: "Reported Speech",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "💬",
  subtitle: "Say vs Tell, Backshift ครบรูปแบบ และ Reported Yes/No Questions",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Say vs Tell",
      cards: [
        {
          title: "ความแตกต่างระหว่าง Say และ Tell",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "**Say** และ **Tell** ทั้งคู่แปลว่า **\"พูด/บอก\"** แต่ใช้ต่างกัน — **tell** ต้องมี **object (คนที่ถูกบอก)** ตามด้วยเสมอ ส่วน **say** ไม่จำเป็นต้องมี"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Say", sub: "ไม่ต้องมี object", color: "blue", body: "He **said** (that) he was tired." },
                { word: "Tell", sub: "ต้องมี object", color: "secondary", body: "He **told me** (that) he was tired." }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "ข้อควรระวัง: **ห้ามพูดว่า** ~~say me~~ ต้องใช้ **tell me** เท่านั้น (say ไม่มี object ตามหลังโดยตรง)"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Backshift ครบรูปแบบ",
      cards: [
        {
          title: "การเปลี่ยน Tense ในทุกรูปแบบ",
          icon: "🔄",
          blocks: [
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำพูดตรง (Direct)", "คำพูดรายงาน (Reported)"],
              rows: [
                ["Present Simple", "Past Simple"],
                ["Present Continuous", "Past Continuous"],
                ["Past Simple", "Past Perfect"],
                ["Present Perfect", "Past Perfect"]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "\"I **am** tired.\" → He **told me (that) he was** tired.", th: "\"ฉันเหนื่อย\" → เขาบอกฉันว่าเขาเหนื่อย" },
                { en: "\"I **went** to school.\" → She said she **had gone** to school.", th: "\"ฉันไปโรงเรียนแล้ว\" → เธอบอกว่าเธอไปโรงเรียนแล้ว" }
              ]
            }
          ]
        },
        {
          title: "Pronoun & Time/Place Change",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเล่าคำพูด ต้องเปลี่ยน **สรรพนาม** และ **คำบอกเวลา/สถานที่** ให้เข้ากับบริบทของผู้เล่าด้วย"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["คำพูดตรง", "คำพูดรายงาน"],
              rows: [
                ["I", "he/she"],
                ["today", "that day"],
                ["tomorrow", "the next day"],
                ["here", "there"],
                ["this", "that"]
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Reported Yes/No Questions",
      cards: [
        {
          title: "การรายงานคำถาม Yes/No",
          icon: "❓",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อรายงานคำถามที่ตอบ **Yes/No** ใช้ **if** หรือ **whether** เชื่อมประโยค โดย **เรียงประโยคแบบบอกเล่า** (ไม่ใช่ประโยคคำถาม) และไม่มีเครื่องหมาย ?"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำถามตรง (Direct)", "คำถามรายงาน (Reported)"],
              rows: [
                ["\"Do you like ice cream?\"", "She asked **if** I **liked** ice cream."],
                ["\"Are you tired?\"", "He asked **whether** I **was** tired."]
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "โครงสร้าง: **asked + if/whether + S + V** (เรียงประโยคปกติ ไม่ใช่ do/does/did นำหน้า)"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "He ___ me (that) he was tired.",
      tag: "Say vs Tell",
      tagColor: "blue",
      emoji: "😴",
      options: ["said", "told", "says", "tells"],
      answer: "told",
      explanation: "tell ต้องมี object (me) ตามหลัง ไม่ใช้ say"
    },
    {
      sentence: "\"I went to school,\" she said. → She said she ___ to school.",
      tag: "Backshift",
      tagColor: "secondary",
      emoji: "🏫",
      options: ["went", "goes", "had gone", "go"],
      answer: "had gone",
      explanation: "Past Simple เปลี่ยนเป็น Past Perfect เมื่อ backshift"
    },
    {
      sentence: "\"I will call you tomorrow,\" he said. → He said he would call me ___.",
      tag: "Time Change",
      tagColor: "amber",
      emoji: "📞",
      options: ["tomorrow", "the next day", "today", "yesterday"],
      answer: "the next day",
      explanation: "tomorrow เปลี่ยนเป็น the next day เมื่อเล่าคำพูด"
    },
    {
      sentence: "\"Do you like ice cream?\" she asked. → She asked ___ I liked ice cream.",
      tag: "Yes/No Question",
      tagColor: "purple",
      emoji: "🍦",
      options: ["that", "if", "what", "when"],
      answer: "if",
      explanation: "Reported Yes/No Question ใช้ if/whether เชื่อมประโยค"
    },
    {
      sentence: "\"I am here,\" he said. → He said he was ___.",
      tag: "Place Change",
      tagColor: "amber",
      emoji: "📍",
      options: ["here", "there", "this", "that"],
      answer: "there",
      explanation: "here เปลี่ยนเป็น there เมื่อเล่าคำพูด"
    }
  ]
};
