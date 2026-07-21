const EXERCISE = {
  title: "Modal Verbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🗝️",
  subtitle: "ฝึกทำแบบฝึกหัด Can และ Must แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-modal-verbs-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำ modal ที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "I ___ swim very well.",
          tag: "Can",
          tagColor: "blue",
          emoji: "🏊",
          options: ["can", "cans", "canning", "could"],
          answer: "can",
          explanation: "can ใช้บอกความสามารถ กริยาตามด้วย V1"
        },
        {
          sentence: "___ I go to the toilet, please?",
          tag: "Permission",
          tagColor: "secondary",
          emoji: "🙋",
          options: ["Can", "Must", "Do", "Am"],
          answer: "Can",
          explanation: "Can I...? ใช้ขออนุญาต"
        },
        {
          sentence: "You ___ wear a helmet when riding a bike.",
          tag: "Must",
          tagColor: "amber",
          emoji: "🪖",
          options: ["can", "must", "musts", "musting"],
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับ"
        },
        {
          sentence: "She ___ play the piano beautifully.",
          tag: "Can",
          tagColor: "blue",
          emoji: "🎹",
          options: ["can", "cans", "canned", "could"],
          answer: "can",
          explanation: "can ใช้กับทุกประธาน ไม่เติม s"
        },
        {
          sentence: "I ___ fly like a bird.",
          tag: "Can Negative",
          tagColor: "secondary",
          emoji: "🐦",
          options: ["can", "can't", "must", "mustn't"],
          answer: "can't",
          explanation: "can't ใช้บอกว่าทำไม่ได้ (ไม่มีความสามารถ)"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "My brother ___ (can) ride a bike.",
          tag: "Can",
          tagColor: "blue",
          answer: "can",
          explanation: "can ใช้บอกความสามารถ"
        },
        {
          sentence: "___ (can) you help me, please?",
          tag: "Permission",
          tagColor: "secondary",
          answer: "Can",
          explanation: "Can...? ใช้ขอความช่วยเหลือ/อนุญาต"
        },
        {
          sentence: "Students ___ (must) be quiet in the library.",
          tag: "Must",
          tagColor: "amber",
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับ"
        },
        {
          sentence: "We ___ (must) wash our hands before eating.",
          tag: "Must",
          tagColor: "amber",
          answer: "must",
          explanation: "must ใช้เหมือนกันกับทุกประธาน"
        },
        {
          sentence: "I ___ (can/not) swim in the deep water.",
          tag: "Can Negative",
          tagColor: "secondary",
          answer: "can't",
          explanation: "can't ใช้บอกว่าทำไม่ได้"
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
          sentence: "A fish ___ swim.",
          emoji: "🐟",
          options: ["can", "must"],
          answer: "can",
          explanation: "can ใช้บอกความสามารถ"
        },
        {
          sentence: "You ___ stop at a red light.",
          emoji: "🚦",
          options: ["must", "can"],
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับ/กฎ"
        },
        {
          sentence: "A bird ___ fly.",
          emoji: "🐦",
          options: ["can", "must"],
          answer: "can",
          explanation: "can ใช้บอกความสามารถของนก"
        },
        {
          sentence: "You ___ wear a seatbelt in the car.",
          emoji: "🚗",
          options: ["must", "can"],
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับด้านความปลอดภัย"
        },
        {
          sentence: "I ___ play the guitar.",
          emoji: "🎸",
          options: ["can", "must"],
          answer: "can",
          explanation: "can ใช้บอกความสามารถ"
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
          wrong: "She cans play the piano.",
          tag: "Can",
          tagColor: "blue",
          options: ["She can play the piano.", "She can plays the piano.", "She canning play the piano."],
          answer: "She can play the piano.",
          explanation: "หลัง can กริยาต้องเป็น V1 ไม่เติม s และ can เองก็ไม่เติม s"
        },
        {
          wrong: "You must to wear a helmet.",
          tag: "Must",
          tagColor: "amber",
          options: ["You must wear a helmet.", "You musts wear a helmet.", "You must wearing a helmet."],
          answer: "You must wear a helmet.",
          explanation: "หลัง must ต้องเป็น V1 เท่านั้น ไม่มี to"
        },
        {
          wrong: "I can not fly like a bird.",
          tag: "Can Negative",
          tagColor: "secondary",
          options: ["I can't fly like a bird.", "I cans not fly like a bird.", "I not can fly like a bird."],
          answer: "I can't fly like a bird.",
          explanation: "รูปย่อของ can not คือ can't (ติดกัน)"
        },
        {
          wrong: "Do I go to the toilet, please?",
          tag: "Permission",
          tagColor: "secondary",
          options: ["Can I go to the toilet, please?", "Am I go to the toilet, please?", "Must I go to the toilet, please?"],
          answer: "Can I go to the toilet, please?",
          explanation: "การขออนุญาตใช้ Can I...? ไม่ใช่ Do I...?"
        },
        {
          wrong: "Students must is quiet in the library.",
          tag: "Must",
          tagColor: "amber",
          options: ["Students must be quiet in the library.", "Students must are quiet in the library.", "Students musts be quiet in the library."],
          answer: "Students must be quiet in the library.",
          explanation: "หลัง must ต้องเป็น V1 (be) ไม่ผัน"
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
          sentence: "My dog ___ jump very high.",
          bank: ["can", "must", "cans"],
          answer: "can",
          explanation: "can ใช้บอกความสามารถ"
        },
        {
          sentence: "You ___ brush your teeth every day.",
          bank: ["must", "can", "musts"],
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับ"
        },
        {
          sentence: "___ I borrow your pencil?",
          bank: ["Can", "Must", "Do"],
          answer: "Can",
          explanation: "Can I...? ใช้ขออนุญาต"
        },
        {
          sentence: "I ___ speak French. It's too hard.",
          bank: ["can't", "can", "mustn't"],
          answer: "can't",
          explanation: "can't ใช้บอกว่าทำไม่ได้"
        },
        {
          sentence: "We ___ wear a uniform at school.",
          bank: ["must", "can", "musts"],
          answer: "must",
          explanation: "must ใช้บอกข้อบังคับที่โรงเรียนกำหนด"
        }
      ]
    }
  ]
};
