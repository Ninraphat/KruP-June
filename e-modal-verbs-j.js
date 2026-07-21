const EXERCISE = {
  title: "Modal Verbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🗝️",
  subtitle: "ฝึก Should, May/Might, Have to และ Must vs Have to",
  accentColor: "blue",
  contentPage: "c-modal-verbs-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำ modal ที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "You ___ study harder to pass the exam.",
          tag: "Should",
          tagColor: "blue",
          emoji: "📚",
          options: ["should", "shoulds", "shouldn't", "may"],
          answer: "should",
          explanation: "should ใช้ให้คำแนะนำ"
        },
        {
          sentence: "___ I use your phone, please?",
          tag: "May",
          tagColor: "blue",
          emoji: "📱",
          options: ["May", "Must", "Should", "Have"],
          answer: "May",
          explanation: "May I...? ใช้ขออนุญาตอย่างสุภาพ"
        },
        {
          sentence: "I ___ finish my homework tonight.",
          tag: "Have to",
          tagColor: "secondary",
          emoji: "📝",
          options: ["has to", "have to", "having to", "had to"],
          answer: "have to",
          explanation: "ประธาน I ใช้ have to"
        },
        {
          sentence: "It ___ rain this afternoon. I'm not sure.",
          tag: "Might",
          tagColor: "secondary",
          emoji: "🌧️",
          options: ["may", "might", "must", "should"],
          answer: "might",
          explanation: "might ใช้บอกความเป็นไปได้ที่ไม่แน่นอน"
        },
        {
          sentence: "It's a holiday, so you ___ wake up early.",
          tag: "Don't have to",
          tagColor: "purple",
          emoji: "😴",
          options: ["mustn't", "don't have to", "shouldn't", "can't"],
          answer: "don't have to",
          explanation: "don't have to = ไม่จำเป็นต้องทำ (ต่างจาก mustn't ที่แปลว่าห้ามทำ)"
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
          sentence: "You ___ (shouldn't) eat too much junk food.",
          tag: "Should Negative",
          tagColor: "blue",
          answer: "shouldn't",
          explanation: "shouldn't ใช้แนะนำว่าไม่ควรทำ"
        },
        {
          sentence: "___ (may) I come in?",
          tag: "May",
          tagColor: "blue",
          answer: "May",
          explanation: "May I...? ใช้ขออนุญาตอย่างสุภาพ"
        },
        {
          sentence: "She ___ (has to) wake up early every day.",
          tag: "Have to",
          tagColor: "secondary",
          answer: "has to",
          explanation: "ประธาน She (เอกพจน์) ใช้ has to"
        },
        {
          sentence: "It ___ (might) snow tomorrow. I'm not sure.",
          tag: "Might",
          tagColor: "secondary",
          answer: "might",
          explanation: "might ใช้บอกความเป็นไปได้ที่ไม่แน่นอน"
        },
        {
          sentence: "You ___ (don't have to) bring your own lunch; it's provided.",
          tag: "Don't have to",
          tagColor: "purple",
          answer: "don't have to",
          explanation: "don't have to = ไม่จำเป็นต้องทำ"
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
          sentence: "You ___ see a doctor if you feel sick.",
          emoji: "🏥",
          options: ["should", "must"],
          answer: "should",
          explanation: "should ใช้ให้คำแนะนำ"
        },
        {
          sentence: "___ I open the window? It's hot.",
          emoji: "🪟",
          options: ["May", "Should"],
          answer: "May",
          explanation: "May I...? ใช้ขออนุญาตอย่างสุภาพ"
        },
        {
          sentence: "I ___ finish this report by Friday.",
          emoji: "📊",
          options: ["have to", "may"],
          answer: "have to",
          explanation: "have to ใช้บอกความจำเป็น"
        },
        {
          sentence: "She ___ be at the party. I'm not certain.",
          emoji: "🎉",
          options: ["might", "should"],
          answer: "might",
          explanation: "might ใช้บอกความเป็นไปได้ที่ไม่แน่นอน"
        },
        {
          sentence: "It's Saturday, so we ___ go to school.",
          emoji: "🏫",
          options: ["don't have to", "mustn't"],
          answer: "don't have to",
          explanation: "don't have to = ไม่จำเป็นต้องทำ ไม่ใช่ห้ามทำ"
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
          wrong: "You should to study harder.",
          tag: "Should",
          tagColor: "blue",
          options: ["You should study harder.", "You shoulds study harder.", "You should studying harder."],
          answer: "You should study harder.",
          explanation: "หลัง should ไม่มี to ต้องเป็น V1 ตรงๆ"
        },
        {
          wrong: "Can I use your phone? (very polite, formal request)",
          tag: "May",
          tagColor: "blue",
          options: ["May I use your phone?", "Do I use your phone?", "Am I use your phone?"],
          answer: "May I use your phone?",
          explanation: "May สุภาพกว่า Can เมื่อขออนุญาตอย่างเป็นทางการ"
        },
        {
          wrong: "She have to wake up early.",
          tag: "Have to",
          tagColor: "secondary",
          options: ["She has to wake up early.", "She having to wake up early.", "She have to woke up early."],
          answer: "She has to wake up early.",
          explanation: "ประธาน She (เอกพจน์) ต้องใช้ has to ไม่ใช่ have to"
        },
        {
          wrong: "You mustn't bring your own lunch; it's provided. (meaning: not necessary)",
          tag: "Don't have to",
          tagColor: "purple",
          options: ["You don't have to bring your own lunch; it's provided.", "You not have to bring your own lunch; it's provided.", "You haven't to bring your own lunch; it's provided."],
          answer: "You don't have to bring your own lunch; it's provided.",
          explanation: "mustn't แปลว่าห้ามทำ ต่างจาก don't have to ที่แปลว่าไม่จำเป็นต้องทำ"
        },
        {
          wrong: "It may rains later. I'm not sure.",
          tag: "Might",
          tagColor: "secondary",
          options: ["It might rain later.", "It mights rain later.", "It might rains later."],
          answer: "It might rain later.",
          explanation: "หลัง might ต้องเป็น V1 (rain) ไม่ผัน"
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
          sentence: "You ___ drink more water every day.",
          bank: ["should", "must", "may"],
          answer: "should",
          explanation: "should ใช้ให้คำแนะนำ"
        },
        {
          sentence: "___ I ask you a question?",
          bank: ["May", "Must", "Should"],
          answer: "May",
          explanation: "May I...? ใช้ขออนุญาตอย่างสุภาพ"
        },
        {
          sentence: "We ___ pay for parking here.",
          bank: ["have to", "has to", "having to"],
          answer: "have to",
          explanation: "ประธาน We ใช้ have to"
        },
        {
          sentence: "He ___ come to the party. I'm not sure yet.",
          bank: ["might", "must", "should"],
          answer: "might",
          explanation: "might ใช้บอกความเป็นไปได้ที่ไม่แน่นอน"
        },
        {
          sentence: "Today is a holiday, so you ___ go to work.",
          bank: ["don't have to", "mustn't", "shouldn't"],
          answer: "don't have to",
          explanation: "don't have to = ไม่จำเป็นต้องทำ"
        }
      ]
    }
  ]
};
