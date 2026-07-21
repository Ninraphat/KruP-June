const CONTENT = {
  title: "Past Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🕰️",
  subtitle: "ทบทวน Past Simple, Negative/Question และเรียนรู้ Past Continuous",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน Past Simple",
      cards: [
        {
          title: "Regular vs Irregular Verbs",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**Past Simple** ใช้พูดถึงเหตุการณ์ที่ **เกิดขึ้นและจบไปแล้วในอดีต** กริยาแบ่งเป็น 2 กลุ่ม: **Regular** (เติม -ed) และ **Irregular** (เปลี่ยนรูปไม่ตายตัว)"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภท", "กฎ", "ตัวอย่าง"],
              rows: [
                ["Regular", { main: "V1 + ed", note: "เติม ed ท้ายกริยา" }, "walk → **walked**"],
                ["Irregular", { main: "เปลี่ยนรูปเฉพาะคำ", note: "ต้องจำเป็นคำๆ ไป" }, "go → **went**, eat → **ate**"]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "yesterday, last night/week/year, ago, in 2020"
            }
          ]
        },
        {
          title: "Negative & Question Form",
          icon: "❓",
          blocks: [
            {
              type: "explanation",
              text: "ประโยคปฏิเสธและคำถามใน Past Simple ใช้ **did/didn't** ช่วย โดยกริยาหลักกลับเป็น **V1** เสมอ (ไม่ผัน)"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["รูปประโยค", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["บอกเล่า", "S + V2", "She **watched** TV."],
                ["ปฏิเสธ", "S + did not (didn't) + V1", "She **didn't watch** TV."],
                ["คำถาม", "Did + S + V1 ?", "**Did** she **watch** TV?"]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "ข้อควรระวัง: เมื่อมี did/didn't แล้ว **ห้ามผันกริยาซ้ำ** เช่น She didn't ~~watched~~ → She didn't **watch**"
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
                { en: "I **was** at home yesterday.", th: "ฉันอยู่บ้านเมื่อวาน" },
                { en: "She **didn't go** to school last Monday.", th: "เธอไม่ได้ไปโรงเรียนเมื่อวันจันทร์ที่แล้ว" },
                { en: "**Did** you **finish** your homework?", th: "เธอทำการบ้านเสร็จหรือยัง" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Past Continuous",
      cards: [
        {
          title: "Past Continuous คืออะไร?",
          icon: "🏃",
          blocks: [
            {
              type: "explanation",
              text: "**Past Continuous** ใช้พูดถึงเหตุการณ์ที่ **กำลังดำเนินอยู่ ณ ช่วงเวลาหนึ่งในอดีต** โครงสร้างคือ **was/were + V-ing**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "Verb to be", "ตัวอย่าง"],
              rows: [
                ["I / He / She / It", "was", "I **was reading** a book at 8 PM."],
                ["You / We / They", "were", "They **were playing** football."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "at that time, at 8 PM last night, while, when"
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
                { en: "I **was doing** my homework at 7 PM last night.", th: "ฉันกำลังทำการบ้านอยู่ตอน 1 ทุ่มเมื่อคืน" },
                { en: "They **were watching** a movie at that time.", th: "พวกเขากำลังดูหนังอยู่ตอนนั้น" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Past Continuous vs Past Simple",
      cards: [
        {
          title: "เหตุการณ์ที่ถูกขัดจังหวะ (Interrupted Action)",
          icon: "🔍",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อมี **เหตุการณ์หนึ่งกำลังเกิดขึ้น (Past Continuous)** แล้วถูก **เหตุการณ์สั้นๆ แทรกเข้ามา (Past Simple)** เราจะใช้ทั้งสอง tense ร่วมกัน โดยมี **when** และ **while** เป็นตัวเชื่อม"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Past Continuous",
                  sub: "เหตุการณ์ยาว/กำลังเกิด",
                  color: "blue",
                  body: "I **was watching** TV\n\nมักใช้กับ **while**"
                },
                {
                  word: "Past Simple",
                  sub: "เหตุการณ์สั้น/แทรกเข้ามา",
                  color: "secondary",
                  body: "the phone **rang**\n\nมักใช้กับ **when**"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "I **was watching** TV **when** the phone **rang**.", th: "ฉันกำลังดูทีวีอยู่ตอนที่โทรศัพท์ดัง" },
                { en: "**While** she **was cooking**, her brother **was doing** homework.", th: "ขณะที่เธอกำลังทำอาหาร น้องชายของเธอกำลังทำการบ้านอยู่" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "when + Past Simple", color: "secondary" },
                { text: "while + Past Continuous", color: "blue" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "[hl:blue]While[/hl] = สองเหตุการณ์ **ยาว** เกิดพร้อมกัน — [hl:secondary]When[/hl] = เหตุการณ์ **สั้น** แทรกเข้ามาระหว่างเหตุการณ์ยาว"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She ___ to school yesterday.",
      tag: "Past Simple",
      tagColor: "blue",
      emoji: "🚶",
      options: ["walk", "walked", "walks", "was walking"],
      answer: "walked",
      explanation: "walk เป็น regular verb เติม -ed และมีคำว่า yesterday บ่งบอกอดีต"
    },
    {
      sentence: "___ you finish your homework last night?",
      tag: "Question",
      tagColor: "secondary",
      emoji: "❓",
      options: ["Do", "Did", "Were", "Was"],
      answer: "Did",
      explanation: "ประโยคคำถาม Past Simple ใช้ Did ขึ้นต้น กริยาหลักกลับเป็น V1"
    },
    {
      sentence: "I ___ eat breakfast this morning.",
      tag: "Negative",
      tagColor: "amber",
      emoji: "🚫",
      options: ["don't", "didn't", "wasn't", "not"],
      answer: "didn't",
      explanation: "ประโยคปฏิเสธ Past Simple ใช้ didn't + V1"
    },
    {
      sentence: "They ___ football at 5 PM yesterday.",
      tag: "Past Continuous",
      tagColor: "blue",
      emoji: "⚽",
      options: ["play", "played", "were playing", "are playing"],
      answer: "were playing",
      explanation: "มีเวลาระบุชัดเจน (5 PM yesterday) แสดงว่ากำลังทำอยู่ ณ ช่วงเวลานั้น จึงใช้ Past Continuous"
    },
    {
      sentence: "I was cooking dinner ___ the phone rang.",
      tag: "Interrupted Action",
      tagColor: "purple",
      emoji: "📞",
      options: ["while", "when", "since", "for"],
      answer: "when",
      explanation: "when ใช้เชื่อมเหตุการณ์สั้นที่แทรกเข้ามาระหว่างเหตุการณ์ยาว (the phone rang เป็นเหตุการณ์สั้น)"
    }
  ]
};
