const EXERCISE = {
  title: "Conditional Sentences",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Conditional",
  titleAccent: "Sentences",
  emoji: "🎓",
  subtitle: "ฝึก Second/Third Conditional, Mixed Conditionals และ Wish/If only",
  accentColor: "blue",
  contentPage: "c-conditional-sentences-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "If I ___ more time, I would travel the world.",
          tag: "Second Conditional",
          tagColor: "blue",
          emoji: "🌍",
          options: ["have", "had", "will have", "would have"],
          answer: "had",
          explanation: "Second Conditional: If + Past Simple, would + V1"
        },
        {
          sentence: "If she had studied harder, she ___ the exam.",
          tag: "Third Conditional",
          tagColor: "secondary",
          emoji: "📝",
          options: ["would pass", "would have passed", "passed", "will pass"],
          answer: "would have passed",
          explanation: "Third Conditional: If + Past Perfect, would have + V3"
        },
        {
          sentence: "If I ___ rich, I would buy a big house.",
          tag: "Second Conditional",
          tagColor: "blue",
          emoji: "🏠",
          options: ["am", "was", "were", "will be"],
          answer: "were",
          explanation: "Second Conditional formal form ใช้ were กับทุกประธาน"
        },
        {
          sentence: "If I had known about the party, I ___ come.",
          tag: "Third Conditional",
          tagColor: "secondary",
          emoji: "🎉",
          options: ["would", "would have", "will", "had"],
          answer: "would have",
          explanation: "Third Conditional main clause: would have + V3 (came)"
        },
        {
          sentence: "I wish I ___ harder for the test last week.",
          tag: "Wish",
          tagColor: "purple",
          emoji: "🌠",
          options: ["study", "studied", "had studied", "would study"],
          answer: "had studied",
          explanation: "wish + Past Perfect ใช้แสดงความเสียดายต่อเหตุการณ์ในอดีต"
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
          sentence: "If I ___ (be) you, I would apologize.",
          tag: "Second Conditional",
          tagColor: "blue",
          answer: "were",
          explanation: "Second Conditional formal form ใช้ were กับทุกประธาน"
        },
        {
          sentence: "If he ___ (not/miss) the flight, he would have arrived on time.",
          tag: "Third Conditional",
          tagColor: "secondary",
          answer: "hadn't missed",
          explanation: "Third Conditional negative: If + hadn't + V3"
        },
        {
          sentence: "If I ___ (win) the lottery, I would buy a house.",
          tag: "Second Conditional",
          tagColor: "blue",
          answer: "won",
          explanation: "Second Conditional: If + Past Simple, would + V1"
        },
        {
          sentence: "If they ___ (leave) earlier, they wouldn't have missed the train.",
          tag: "Third Conditional",
          tagColor: "secondary",
          answer: "had left",
          explanation: "Third Conditional: If + Past Perfect, would have + V3"
        },
        {
          sentence: "If I had studied medicine, I ___ (be) a doctor now.",
          tag: "Mixed Conditional",
          tagColor: "purple",
          answer: "would be",
          explanation: "Mixed Conditional: เงื่อนไขในอดีต (Past Perfect) ส่งผลต่อปัจจุบัน (would + V1)"
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
          sentence: "If I had wings, I ___ fly.",
          emoji: "🦅",
          options: ["would", "will"],
          answer: "would",
          explanation: "Second Conditional (สมมติที่ไม่จริง) ใช้ would ไม่ใช่ will"
        },
        {
          sentence: "If she had trained harder, she ___ the race.",
          emoji: "🏃",
          options: ["would have won", "would win"],
          answer: "would have won",
          explanation: "Third Conditional main clause: would have + V3"
        },
        {
          sentence: "I wish I ___ a bigger house.",
          emoji: "🏡",
          options: ["had", "have"],
          answer: "had",
          explanation: "wish + Past Simple แสดงความปรารถนาเกี่ยวกับปัจจุบัน"
        },
        {
          sentence: "If it hadn't rained, we ___ a picnic.",
          emoji: "🧺",
          options: ["would have had", "would have"],
          answer: "would have had",
          explanation: "Third Conditional: would have + V3 (had)"
        },
        {
          sentence: "If I ___ the lottery, I would travel the world.",
          emoji: "🎫",
          options: ["won", "win"],
          answer: "won",
          explanation: "Second Conditional If-clause ใช้ Past Simple"
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
          wrong: "If I have more time, I would travel the world.",
          tag: "Second Conditional",
          tagColor: "blue",
          options: ["If I had more time, I would travel the world.", "If I had more time, I will travel the world.", "If I have more time, I will travel the world."],
          answer: "If I had more time, I would travel the world.",
          explanation: "Second Conditional If-clause ต้องใช้ Past Simple (had) ไม่ใช่ Present Simple"
        },
        {
          wrong: "If she had studied harder, she would pass the exam.",
          tag: "Third Conditional",
          tagColor: "secondary",
          options: ["If she had studied harder, she would have passed the exam.", "If she studied harder, she would have passed the exam.", "If she had studied harder, she will pass the exam."],
          answer: "If she had studied harder, she would have passed the exam.",
          explanation: "Third Conditional main clause ต้องใช้ would have + V3 ไม่ใช่ would + V1"
        },
        {
          wrong: "If I was you, I would apologize.",
          tag: "Second Conditional",
          tagColor: "blue",
          options: ["If I were you, I would apologize.", "If I am you, I would apologize.", "If I be you, I would apologize."],
          answer: "If I were you, I would apologize.",
          explanation: "Second Conditional formal form ใช้ were กับทุกประธาน รวมถึง I"
        },
        {
          wrong: "I wish I study harder last week.",
          tag: "Wish",
          tagColor: "purple",
          options: ["I wish I had studied harder last week.", "I wish I studied harder last week.", "I wish I would study harder last week."],
          answer: "I wish I had studied harder last week.",
          explanation: "wish เกี่ยวกับอดีตต้องใช้ Past Perfect (had studied)"
        },
        {
          wrong: "If they left earlier, they wouldn't have missed the train.",
          tag: "Third Conditional",
          tagColor: "secondary",
          options: ["If they had left earlier, they wouldn't have missed the train.", "If they had left earlier, they don't miss the train.", "If they leave earlier, they wouldn't have missed the train."],
          answer: "If they had left earlier, they wouldn't have missed the train.",
          explanation: "Third Conditional If-clause ต้องใช้ Past Perfect (had left)"
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
          sentence: "If I ___ a bird, I would fly away.",
          bank: ["were", "am", "was"],
          answer: "were",
          explanation: "Second Conditional formal form ใช้ were กับทุกประธาน"
        },
        {
          sentence: "If he had worked harder, he ___ promoted.",
          bank: ["would have been", "would be", "will be"],
          answer: "would have been",
          explanation: "Third Conditional main clause: would have + V3 (been)"
        },
        {
          sentence: "I wish I ___ more languages.",
          bank: ["spoke", "speak", "had spoken"],
          answer: "spoke",
          explanation: "wish + Past Simple แสดงความปรารถนาเกี่ยวกับปัจจุบัน"
        },
        {
          sentence: "If she ___ harder, she would have gotten the job.",
          bank: ["had tried", "tried", "tries"],
          answer: "had tried",
          explanation: "Third Conditional If-clause ใช้ Past Perfect"
        },
        {
          sentence: "If I had taken that job, I ___ rich now.",
          bank: ["would be", "would have been", "will be"],
          answer: "would be",
          explanation: "Mixed Conditional: เงื่อนไขในอดีตส่งผลต่อปัจจุบัน ใช้ would + V1"
        }
      ]
    }
  ]
};
