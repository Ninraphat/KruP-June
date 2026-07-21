const EXERCISE = {
  title: "Modal Verbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Modal",
  titleAccent: "Verbs",
  emoji: "🎓",
  subtitle: "ฝึก Modal of Deduction, Modal + Perfect, Modal + Passive และ Past Modal",
  accentColor: "blue",
  contentPage: "c-modal-verbs-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "The lights are on. She ___ be at home.",
          tag: "Deduction",
          tagColor: "blue",
          emoji: "🏠",
          options: ["must", "can't", "should", "might"],
          answer: "must",
          explanation: "must be ใช้เมื่อมั่นใจมากว่าเป็นความจริง"
        },
        {
          sentence: "She ___ already left; her car isn't here.",
          tag: "Modal Perfect",
          tagColor: "secondary",
          emoji: "🚗",
          options: ["must have", "must", "should have", "can have"],
          answer: "must have",
          explanation: "must have + V3 ใช้คาดเดาเหตุการณ์ในอดีตอย่างมั่นใจ"
        },
        {
          sentence: "You ___ that to him. It hurt his feelings.",
          tag: "Modal Perfect",
          tagColor: "secondary",
          emoji: "😔",
          options: ["shouldn't have said", "shouldn't say", "didn't say", "won't say"],
          answer: "shouldn't have said",
          explanation: "shouldn't have + V3 แสดงความเสียใจ/ตำหนิสิ่งที่ทำไปแล้ว"
        },
        {
          sentence: "This report ___ carefully before submission.",
          tag: "Modal Passive",
          tagColor: "amber",
          emoji: "📄",
          options: ["must check", "must be checked", "must checked", "must being checked"],
          answer: "must be checked",
          explanation: "Modal + Passive: modal + be + V3"
        },
        {
          sentence: "When I was young, I ___ visit my grandma every Sunday.",
          tag: "Past Modal",
          tagColor: "purple",
          emoji: "👵",
          options: ["would", "should", "must", "can"],
          answer: "would",
          explanation: "would ใช้พูดถึงการกระทำที่เคยทำเป็นประจำในอดีต"
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
          sentence: "He ___ (can't) be at work; it's Sunday.",
          tag: "Deduction",
          tagColor: "blue",
          answer: "can't",
          explanation: "can't be ใช้เมื่อมั่นใจมากว่าไม่ใช่ความจริง"
        },
        {
          sentence: "I ___ (could have) won, but I gave up.",
          tag: "Modal Perfect",
          tagColor: "secondary",
          answer: "could have",
          explanation: "could have + V3 แสดงว่าสามารถทำได้แต่ไม่ได้ทำ"
        },
        {
          sentence: "The problem ___ (should be) solved soon.",
          tag: "Modal Passive",
          tagColor: "amber",
          answer: "should be",
          explanation: "Modal + Passive: should + be + V3"
        },
        {
          sentence: "I ___ (used to) live in Chiang Mai.",
          tag: "Past Modal",
          tagColor: "purple",
          answer: "used to",
          explanation: "used to ใช้พูดถึงสภาพที่เคยเป็นในอดีต"
        },
        {
          sentence: "She ___ (might be) in the library. I'm not sure.",
          tag: "Deduction",
          tagColor: "blue",
          answer: "might be",
          explanation: "might be ใช้เมื่อไม่แน่ใจ/เป็นไปได้"
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
          sentence: "The ground is wet. It ___ have rained.",
          emoji: "🌧️",
          options: ["must", "might"],
          answer: "must",
          explanation: "must have ใช้เมื่อมั่นใจมากว่าเกิดขึ้นแล้ว (มีหลักฐานชัดเจน)"
        },
        {
          sentence: "I ___ have studied harder for that test.",
          emoji: "📝",
          options: ["should", "must"],
          answer: "should",
          explanation: "should have + V3 แสดงความเสียใจที่ไม่ได้ทำ"
        },
        {
          sentence: "This medicine ___ be taken after meals.",
          emoji: "💊",
          options: ["should be", "should"],
          answer: "should be",
          explanation: "Modal + Passive: should + be + V3"
        },
        {
          sentence: "My grandpa ___ tell us stories every night.",
          emoji: "📖",
          options: ["would", "should"],
          answer: "would",
          explanation: "would ใช้พูดถึงการกระทำที่เคยทำเป็นประจำในอดีต"
        },
        {
          sentence: "He isn't answering. He ___ be sleeping.",
          emoji: "😴",
          options: ["might", "must have"],
          answer: "might",
          explanation: "might be ใช้เมื่อไม่แน่ใจ/เป็นไปได้ในปัจจุบัน"
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
          wrong: "She must left already; her car isn't here.",
          tag: "Modal Perfect",
          tagColor: "secondary",
          options: ["She must have left already; her car isn't here.", "She must has left already; her car isn't here.", "She must be left already; her car isn't here."],
          answer: "She must have left already; her car isn't here.",
          explanation: "Modal + Perfect ต้องมี have: must + have + V3"
        },
        {
          wrong: "You shouldn't said that to him.",
          tag: "Modal Perfect",
          tagColor: "secondary",
          options: ["You shouldn't have said that to him.", "You shouldn't say that to him already.", "You shouldn't saying that to him."],
          answer: "You shouldn't have said that to him.",
          explanation: "shouldn't have + V3 ใช้แสดงความเสียใจ/ตำหนิสิ่งที่ทำไปแล้ว"
        },
        {
          wrong: "This report must checked carefully.",
          tag: "Modal Passive",
          tagColor: "amber",
          options: ["This report must be checked carefully.", "This report must checking carefully.", "This report must to be checked carefully."],
          answer: "This report must be checked carefully.",
          explanation: "Modal + Passive ต้องมี be: modal + be + V3"
        },
        {
          wrong: "When I was young, I would living with my grandparents.",
          tag: "Past Modal",
          tagColor: "purple",
          options: ["When I was young, I used to live with my grandparents.", "When I was young, I would live with my grandparents.", "When I was young, I would lived with my grandparents."],
          answer: "When I was young, I used to live with my grandparents.",
          explanation: "would ใช้ไม่ได้กับสภาพ (state) เช่น live with ต้องใช้ used to แทน"
        },
        {
          wrong: "He can't at work; it's Sunday.",
          tag: "Deduction",
          tagColor: "blue",
          options: ["He can't be at work; it's Sunday.", "He can't is at work; it's Sunday.", "He can't been at work; it's Sunday."],
          answer: "He can't be at work; it's Sunday.",
          explanation: "modal of deduction ต้องมี be: can't + be + ..."
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
          sentence: "I ___ have taken an umbrella; now I'm soaked.",
          bank: ["should have", "must have", "would"],
          answer: "should have",
          explanation: "should have + V3 แสดงความเสียใจที่ไม่ได้ทำ"
        },
        {
          sentence: "The window is broken. Someone ___ have thrown a ball.",
          bank: ["must", "should", "would"],
          answer: "must",
          explanation: "must have ใช้เมื่อมั่นใจมากว่าเกิดขึ้นแล้ว"
        },
        {
          sentence: "The bridge ___ be repaired before winter.",
          bank: ["must", "musts", "musting"],
          answer: "must",
          explanation: "Modal + Passive: must + be + V3"
        },
        {
          sentence: "When we were kids, we ___ play in the park every day.",
          bank: ["would", "should", "must"],
          answer: "would",
          explanation: "would ใช้พูดถึงการกระทำที่เคยทำเป็นประจำในอดีต"
        },
        {
          sentence: "She's not answering her phone. She ___ be busy.",
          bank: ["might", "must have", "should have"],
          answer: "might",
          explanation: "might be ใช้เมื่อไม่แน่ใจ/เป็นไปได้ในปัจจุบัน"
        }
      ]
    }
  ]
};
