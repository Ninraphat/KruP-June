const CONTENT = {
  title: "Reported Speech",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "💬",
  subtitle: "เรียนรู้การเล่าคำพูดของคนอื่นแบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Reported Speech คืออะไร?",
      cards: [
        {
          title: "การเล่าคำพูดของคนอื่น",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเราอยาก **เล่าให้คนอื่นฟังว่าใครพูดอะไร** โดยไม่พูดคำพูดเดิมเป๊ะๆ เราเรียกว่า **Reported Speech** ใช้กริยา **said** นำหน้า"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Direct Speech", sub: "คำพูดตรงๆ", color: "blue", body: "She said, **\"I am happy.\"**" },
                { word: "Reported Speech", sub: "คำพูดที่เล่าต่อ", color: "secondary", body: "She said **(that) she was happy.**" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ การเปลี่ยน Present → Past",
      cards: [
        {
          title: "Backshift แบบง่าย",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเล่าคำพูดของคนอื่น กริยาที่เป็น **Present Simple** ต้องเปลี่ยนเป็น **Past Simple** เรียกว่า **backshift** (ถอยเวลา)"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำพูดเดิม (Direct)", "คำพูดที่เล่า (Reported)"],
              rows: [
                ["\"I **am** happy.\"", "She said (that) she **was** happy."],
                ["\"I **like** pizza.\"", "He said (that) he **liked** pizza."],
                ["\"I **have** a dog.\"", "She said (that) she **had** a dog."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "จำง่ายๆ: am/is/are → **was/were**, like/likes → **liked**, have/has → **had**"
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
                { en: "She said, \"I am happy.\" → She **said (that) she was happy**.", th: "เธอพูดว่า \"ฉันมีความสุข\" → เธอบอกว่าเธอมีความสุข" },
                { en: "He said, \"I like pizza.\" → He **said he liked pizza**.", th: "เขาพูดว่า \"ฉันชอบพิซซ่า\" → เขาบอกว่าเขาชอบพิซซ่า" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ฝึกใช้ Said",
      cards: [
        {
          title: "โครงสร้าง Said (that)",
          icon: "🔧",
          blocks: [
            {
              type: "explanation",
              text: "ในระดับนี้เราใช้ **said (that) + ประโยค** เท่านั้น คำว่า **that** จะใส่หรือไม่ใส่ก็ได้ ความหมายเหมือนกัน"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "said (that)", rule: "เล่าสิ่งที่คนอื่นพูด", example: "Tom **said (that)** he **was** tired." },
                { quantifier: "am/is → was", rule: "verb to be เปลี่ยนเป็นอดีต", example: "\"I **am** hungry.\" → He said he **was** hungry." },
                { quantifier: "V1/V-s → V2", rule: "กริยาทั่วไปเปลี่ยนเป็นอดีต", example: "\"I **play** football.\" → She said she **played** football." }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "said (that)", color: "blue" },
                { text: "am/is → was", color: "secondary" },
                { text: "are → were", color: "secondary" },
                { text: "like → liked", color: "amber" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "ในระดับนี้ใช้แค่ [hl:blue]said[/hl] นำหน้า และเปลี่ยนกริยาให้เป็น **อดีต** เท่านั้น"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "\"I am happy,\" she said. → She said (that) she ___ happy.",
      tag: "Backshift",
      tagColor: "blue",
      emoji: "😊",
      options: ["is", "was", "am", "be"],
      answer: "was",
      explanation: "am เปลี่ยนเป็น was เมื่อเล่าคำพูด"
    },
    {
      sentence: "\"I like pizza,\" he said. → He said (that) he ___ pizza.",
      tag: "Backshift",
      tagColor: "blue",
      emoji: "🍕",
      options: ["like", "likes", "liked", "liking"],
      answer: "liked",
      explanation: "like เปลี่ยนเป็น liked เมื่อเล่าคำพูด"
    },
    {
      sentence: "\"I have a dog,\" she said. → She said (that) she ___ a dog.",
      tag: "Backshift",
      tagColor: "blue",
      emoji: "🐶",
      options: ["have", "has", "had", "having"],
      answer: "had",
      explanation: "have เปลี่ยนเป็น had เมื่อเล่าคำพูด"
    },
    {
      sentence: "\"I am tired,\" Tom said. → Tom ___ (that) he was tired.",
      tag: "Said",
      tagColor: "secondary",
      emoji: "😴",
      options: ["say", "says", "said", "saying"],
      answer: "said",
      explanation: "เล่าคำพูดของคนอื่นในอดีตใช้ said"
    },
    {
      sentence: "\"I play football,\" she said. → She said she ___ football.",
      tag: "Backshift",
      tagColor: "blue",
      emoji: "⚽",
      options: ["play", "plays", "played", "playing"],
      answer: "played",
      explanation: "play เปลี่ยนเป็น played เมื่อเล่าคำพูด"
    }
  ]
};
