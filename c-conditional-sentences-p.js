const CONTENT = {
  title: "Conditional Sentences",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🌦️",
  subtitle: "เรียนรู้ประโยค 'ถ้า...แล้ว...' แบบง่ายๆ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ If...then... คืออะไร?",
      cards: [
        {
          title: "ประโยคเงื่อนไข",
          icon: "📌",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเราอยากพูดว่า **\"ถ้า...แล้ว...\"** เราใช้คำว่า **If** ขึ้นต้นประโยค เพื่อบอกเงื่อนไขและผลลัพธ์ที่ตามมา"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ส่วนประกอบ", "หน้าที่", "ตัวอย่าง"],
              rows: [
                ["If-clause", "เงื่อนไข", "**If** you heat ice, ..."],
                ["Main clause", "ผลลัพธ์", "..., it **melts**."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "ประโยคนี้ใช้พูดถึง **ข้อเท็จจริง** หรือ **กฎทั่วไป** ที่เป็นจริงเสมอ เรียกว่า **Zero Conditional**"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Zero Conditional",
      cards: [
        {
          title: "โครงสร้าง Zero Conditional",
          icon: "🔧",
          blocks: [
            {
              type: "explanation",
              text: "**Zero Conditional** ใช้พูดถึง **ข้อเท็จจริงทางวิทยาศาสตร์** หรือ **สิ่งที่เกิดขึ้นเป็นประจำ** โครงสร้างคือ **If + Present Simple, Present Simple**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["If-clause", "Main clause"],
              rows: [
                ["If + Present Simple", "Present Simple"]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ทั้งสองส่วนของประโยคใช้ **Present Simple** เหมือนกันเสมอ ไม่มี will"
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
                { en: "**If** you **heat** ice, it **melts**.", th: "ถ้าคุณทำให้น้ำแข็งร้อน มันจะละลาย" },
                { en: "**If** it **rains**, we **stay** at home.", th: "ถ้าฝนตก เราจะอยู่บ้าน" },
                { en: "**If** you **mix** blue and yellow, you **get** green.", th: "ถ้าคุณผสมสีน้ำเงินกับสีเหลือง คุณจะได้สีเขียว" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ ฝึกใช้ในชีวิตประจำวัน",
      cards: [
        {
          title: "ตัวอย่างใกล้ตัว",
          icon: "🏠",
          blocks: [
            {
              type: "sva",
              rows: [
                { quantifier: "If + hot", rule: "อากาศร้อน", example: "**If** the weather **is** hot, we **wear** shorts." },
                { quantifier: "If + hungry", rule: "หิว", example: "**If** I **am** hungry, I **eat** a snack." },
                { quantifier: "If + tired", rule: "เหนื่อย", example: "**If** she **is** tired, she **sleeps** early." }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "If + Present Simple", color: "blue" },
                { text: "Present Simple", color: "secondary" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "🎯",
              title: "จำง่ายๆ",
              text: "[hl:blue]Zero Conditional[/hl] ใช้พูดถึงสิ่งที่ **เป็นจริงเสมอ** เหมือนกฎธรรมชาติ"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "If you heat ice, it ___.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "🧊",
      options: ["melt", "melts", "will melt", "melted"],
      answer: "melts",
      explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน เพราะเป็นข้อเท็จจริงเสมอ"
    },
    {
      sentence: "If it rains, we ___ at home.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "🌧️",
      options: ["stay", "stays", "will stay", "stayed"],
      answer: "stay",
      explanation: "Zero Conditional ใช้ Present Simple ทั้ง If-clause และ Main clause"
    },
    {
      sentence: "If you mix blue and yellow, you ___ green.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "🎨",
      options: ["get", "gets", "will get", "got"],
      answer: "get",
      explanation: "เป็นข้อเท็จจริงทั่วไป ใช้ Present Simple ทั้งสองส่วน"
    },
    {
      sentence: "If the weather is hot, we ___ shorts.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "☀️",
      options: ["wear", "wears", "will wear", "wore"],
      answer: "wear",
      explanation: "Zero Conditional ใช้ Present Simple ทั้งสองส่วน"
    },
    {
      sentence: "If I ___ hungry, I eat a snack.",
      tag: "Zero Conditional",
      tagColor: "blue",
      emoji: "🍎",
      options: ["am", "is", "will be", "was"],
      answer: "am",
      explanation: "ประธาน I ใช้ am ใน Present Simple สำหรับ If-clause"
    }
  ]
};
