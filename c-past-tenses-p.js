const CONTENT = {
  title: "Past Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🕰️",
  subtitle: "เรียนรู้การพูดถึงเหตุการณ์ที่ผ่านไปแล้วแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Verb to be: was/were",
      cards: [
        {
          title: "Was / Were คืออะไร?",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "**was** และ **were** เป็นรูปอดีตของ **verb to be (is/am/are)** ใช้บอกว่า **เคยเป็น/เคยอยู่ที่ไหน** ในอดีต"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "รูปอดีต", "ตัวอย่าง"],
              rows: [
                ["I / He / She / It", "was", "I **was** at home yesterday."],
                ["You / We / They", "were", "They **were** at school."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "⏰",
              title: "คำสัญญาณ (Time Signals)",
              text: "yesterday, last night, last week, ago"
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
                { en: "We **were** happy at the party.", th: "เรามีความสุขที่งานปาร์ตี้" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Regular Verbs (-ed)",
      cards: [
        {
          title: "กริยาปกติ (Regular Verbs)",
          icon: "📝",
          blocks: [
            {
              type: "explanation",
              text: "กริยาปกติในอดีตจะ **เติม -ed** ท้ายคำ ใช้พูดถึงสิ่งที่ทำเสร็จไปแล้วในอดีต"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["กริยาปัจจุบัน", "กริยาอดีต", "ตัวอย่าง"],
              rows: [
                ["walk", "walked", "She **walked** to school."],
                ["watch", "watched", "He **watched** TV last night."],
                ["play", "played", "They **played** football."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "กริยาที่ลงท้ายด้วย e เติมแค่ **d** เช่น like → **liked**, love → **loved**"
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
                { en: "She **watched** TV last night.", th: "เธอดูทีวีเมื่อคืน" },
                { en: "I **played** with my friends yesterday.", th: "ฉันเล่นกับเพื่อนเมื่อวาน" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Irregular Verbs (คำที่พบบ่อย)",
      cards: [
        {
          title: "กริยาไม่ปกติ (Irregular Verbs)",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "กริยาไม่ปกติจะ **เปลี่ยนรูปคำ** ไม่เติม -ed ต้องจำเป็นคำๆ ไป — นี่คือกริยาที่ใช้บ่อยที่สุด"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "go", rule: "ไป → ไปแล้ว", example: "I **went** to the market." },
                { quantifier: "eat", rule: "กิน → กินแล้ว", example: "She **ate** breakfast." },
                { quantifier: "see", rule: "เห็น → เห็นแล้ว", example: "We **saw** a movie." },
                { quantifier: "have", rule: "มี → มีแล้ว", example: "He **had** a dog." },
                { quantifier: "come", rule: "มา → มาแล้ว", example: "They **came** to my house." }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "เคล็ดลับ",
              text: "ไม่มีสูตรตายตัว ต้อง **ท่องจำ** กริยาไม่ปกติทีละคำ ลองแต่งประโยคบ่อยๆ จะช่วยให้จำได้ดีขึ้น"
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "I **went** to the zoo last week.", th: "ฉันไปสวนสัตว์เมื่อสัปดาห์ที่แล้ว" },
                { en: "She **ate** a mango yesterday.", th: "เธอกินมะม่วงเมื่อวาน" },
                { en: "We **saw** elephants at the zoo.", th: "เราเห็นช้างที่สวนสัตว์" }
              ]
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I ___ at home yesterday.",
      tag: "was/were",
      tagColor: "blue",
      emoji: "🏠",
      options: ["am", "is", "was", "were"],
      answer: "was",
      explanation: "ประธาน I ใช้ was ในรูปอดีตของ verb to be"
    },
    {
      sentence: "She ___ TV last night.",
      tag: "Regular Verb",
      tagColor: "secondary",
      emoji: "📺",
      options: ["watch", "watches", "watched", "watching"],
      answer: "watched",
      explanation: "watch เป็น regular verb เติม -ed เมื่อพูดถึงอดีต"
    },
    {
      sentence: "We ___ happy at the party.",
      tag: "was/were",
      tagColor: "blue",
      emoji: "🎉",
      options: ["was", "were", "are", "is"],
      answer: "were",
      explanation: "ประธาน We (พหูพจน์) ใช้ were ในรูปอดีตของ verb to be"
    },
    {
      sentence: "I ___ to the zoo last week.",
      tag: "Irregular Verb",
      tagColor: "amber",
      emoji: "🦁",
      options: ["go", "goes", "went", "going"],
      answer: "went",
      explanation: "go เป็น irregular verb เปลี่ยนรูปเป็น went ในอดีต"
    },
    {
      sentence: "She ___ a mango yesterday.",
      tag: "Irregular Verb",
      tagColor: "amber",
      emoji: "🥭",
      options: ["eat", "eats", "ate", "eating"],
      answer: "ate",
      explanation: "eat เป็น irregular verb เปลี่ยนรูปเป็น ate ในอดีต"
    }
  ]
};
