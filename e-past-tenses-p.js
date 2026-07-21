const EXERCISE = {
  title: "Past Tenses",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🕰️",
  subtitle: "ฝึกทำแบบฝึกหัด was/were, Regular และ Irregular Verbs",
  accentColor: "blue",
  contentPage: "c-past-tenses-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์รูปกริยาที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "He ___ (be) at school yesterday.",
          tag: "was/were",
          tagColor: "blue",
          answer: "was",
          explanation: "ประธาน He ใช้ was ในรูปอดีตของ verb to be"
        },
        {
          sentence: "They ___ (play) football last weekend.",
          tag: "Regular Verb",
          tagColor: "secondary",
          answer: "played",
          explanation: "play เป็น regular verb เติม -ed"
        },
        {
          sentence: "I ___ (see) a movie last night.",
          tag: "Irregular Verb",
          tagColor: "amber",
          answer: "saw",
          explanation: "see เป็น irregular verb เปลี่ยนเป็น saw ในอดีต"
        },
        {
          sentence: "We ___ (be) at the beach last summer.",
          tag: "was/were",
          tagColor: "blue",
          answer: "were",
          explanation: "ประธาน We (พหูพจน์) ใช้ were ในรูปอดีตของ verb to be"
        },
        {
          sentence: "My mom ___ (cook) dinner two hours ago.",
          tag: "Regular Verb",
          tagColor: "secondary",
          answer: "cooked",
          explanation: "cook เป็น regular verb เติม -ed"
        }
      ]
    },
    {
      type: "picture",
      label: "Picture Choice",
      icon: "🖼️",
      title: "เลือกคำตอบจากภาพ",
      description: "ดูอิโมจิและเลือกคำตอบที่ถูกต้อง",
      questions: [
        {
          sentence: "I ___ a big fish yesterday.",
          emoji: "🐟",
          options: ["catch", "caught"],
          answer: "caught",
          explanation: "catch เป็น irregular verb เปลี่ยนเป็น caught ในอดีต"
        },
        {
          sentence: "She ___ her homework last night.",
          emoji: "📝",
          options: ["do", "did"],
          answer: "did",
          explanation: "do เป็น irregular verb เปลี่ยนเป็น did ในอดีต"
        },
        {
          sentence: "We ___ at home last Sunday.",
          emoji: "🏠",
          options: ["were", "are"],
          answer: "were",
          explanation: "ประธาน We ใช้ were ในรูปอดีตของ verb to be"
        },
        {
          sentence: "He ___ his bike yesterday afternoon.",
          emoji: "🚲",
          options: ["ride", "rode"],
          answer: "rode",
          explanation: "ride เป็น irregular verb เปลี่ยนเป็น rode ในอดีต"
        },
        {
          sentence: "They ___ soccer last weekend.",
          emoji: "⚽",
          options: ["play", "played"],
          answer: "played",
          explanation: "play เป็น regular verb เติม -ed"
        }
      ]
    },
    {
      type: "fix",
      label: "Spot the Mistake",
      icon: "🔍",
      title: "หาที่ผิด",
      description: "เลือกประโยคที่ถูกต้อง",
      questions: [
        {
          wrong: "I is at home yesterday.",
          tag: "was/were",
          tagColor: "blue",
          options: ["I was at home yesterday.", "I were at home yesterday.", "I am at home yesterday."],
          answer: "I was at home yesterday.",
          explanation: "ประธาน I ต้องใช้ was ไม่ใช่ is หรือ were"
        },
        {
          wrong: "She watchs TV last night.",
          tag: "Regular Verb",
          tagColor: "secondary",
          options: ["She watched TV last night.", "She watchs TV last night.", "She watching TV last night."],
          answer: "She watched TV last night.",
          explanation: "watch เป็น regular verb ต้องเติม -ed เมื่อพูดถึงอดีต ไม่ใช่เติม s"
        },
        {
          wrong: "We was at the beach last summer.",
          tag: "was/were",
          tagColor: "blue",
          options: ["We were at the beach last summer.", "We is at the beach last summer.", "We are at the beach last summer."],
          answer: "We were at the beach last summer.",
          explanation: "ประธาน We (พหูพจน์) ต้องใช้ were ไม่ใช่ was"
        },
        {
          wrong: "I goed to the zoo last week.",
          tag: "Irregular Verb",
          tagColor: "amber",
          options: ["I went to the zoo last week.", "I go to the zoo last week.", "I going to the zoo last week."],
          answer: "I went to the zoo last week.",
          explanation: "go เป็น irregular verb เปลี่ยนเป็น went ไม่เติม -ed"
        },
        {
          wrong: "She eated a mango yesterday.",
          tag: "Irregular Verb",
          tagColor: "amber",
          options: ["She ate a mango yesterday.", "She eats a mango yesterday.", "She eating a mango yesterday."],
          answer: "She ate a mango yesterday.",
          explanation: "eat เป็น irregular verb เปลี่ยนเป็น ate ไม่เติม -ed"
        }
      ]
    },
    {
      type: "drag",
      label: "Drag & Drop",
      icon: "🧩",
      title: "ลากคำมาเติม",
      description: "ลากคำจากคลังคำมาใส่ในช่องว่างให้ถูกต้อง",
      questions: [
        {
          sentence: "I ___ my friends at the park yesterday.",
          bank: ["met", "meet", "meets"],
          answer: "met",
          explanation: "meet เป็น irregular verb เปลี่ยนเป็น met ในอดีต"
        },
        {
          sentence: "She ___ a letter to her friend last week.",
          bank: ["wrote", "write", "writes"],
          answer: "wrote",
          explanation: "write เป็น irregular verb เปลี่ยนเป็น wrote ในอดีต"
        },
        {
          sentence: "We ___ very tired after the trip.",
          bank: ["were", "was", "are"],
          answer: "were",
          explanation: "ประธาน We (พหูพจน์) ใช้ were ในรูปอดีตของ verb to be"
        },
        {
          sentence: "He ___ his room this morning.",
          bank: ["cleaned", "cleans", "clean"],
          answer: "cleaned",
          explanation: "clean เป็น regular verb เติม -ed"
        },
        {
          sentence: "They ___ a nice trip to Chiang Mai.",
          bank: ["had", "have", "has"],
          answer: "had",
          explanation: "have เป็น irregular verb เปลี่ยนเป็น had ในอดีต"
        }
      ]
    }
  ]
};
