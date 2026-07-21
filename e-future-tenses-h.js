const EXERCISE = {
  title: "Future Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Future",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "ฝึก Future Continuous, Future Perfect, Passive Voice และ First Conditional",
  accentColor: "blue",
  contentPage: "c-future-tenses-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "This time tomorrow, we ___ to Japan.",
          tag: "Future Continuous",
          tagColor: "secondary",
          emoji: "✈️",
          options: ["will fly", "will be flying", "fly", "have flown"],
          answer: "will be flying",
          explanation: "เน้นเหตุการณ์ที่กำลังดำเนินอยู่ ณ ช่วงเวลาหนึ่งในอนาคต ใช้ Future Continuous"
        },
        {
          sentence: "By next year, I ___ from university.",
          tag: "Future Perfect",
          tagColor: "purple",
          emoji: "🎓",
          options: ["will graduate", "will be graduating", "will have graduated", "graduate"],
          answer: "will have graduated",
          explanation: "เหตุการณ์จะเสร็จสิ้นก่อนจุดเวลาหนึ่งในอนาคต (by next year) ใช้ Future Perfect"
        },
        {
          sentence: "By 2027, she ___ for 10 years.",
          tag: "Future Perfect Continuous",
          tagColor: "amber",
          emoji: "👩‍🏫",
          options: ["will teach", "will have taught", "will have been teaching", "teaches"],
          answer: "will have been teaching",
          explanation: "เน้นระยะเวลาต่อเนื่องจนถึงจุดเวลาหนึ่งในอนาคต ใช้ Future Perfect Continuous"
        },
        {
          sentence: "The results ___ next week.",
          tag: "Passive",
          tagColor: "blue",
          emoji: "📢",
          options: ["will announce", "will be announced", "are announced", "will have announced"],
          answer: "will be announced",
          explanation: "Future Simple Passive: will be + V3"
        },
        {
          sentence: "If it ___ tomorrow, we will stay at home.",
          tag: "First Conditional",
          tagColor: "purple",
          emoji: "🌧️",
          options: ["rains", "will rain", "rained", "is raining"],
          answer: "rains",
          explanation: "ใน If-clause ของ First Conditional ต้องใช้ Present Simple ห้ามใช้ will"
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
          sentence: "At 8 PM tonight, I ___ (study) for my exam.",
          tag: "Future Continuous",
          tagColor: "secondary",
          answer: "will be studying",
          explanation: "เหตุการณ์กำลังดำเนินอยู่ ณ เวลาที่ระบุในอนาคต ใช้ Future Continuous"
        },
        {
          sentence: "By the time you arrive, I ___ (finish) cooking.",
          tag: "Future Perfect",
          tagColor: "purple",
          answer: "will have finished",
          explanation: "เหตุการณ์เสร็จก่อนอีกเหตุการณ์ในอนาคต ใช้ Future Perfect"
        },
        {
          sentence: "By 2030, they ___ (live) here for 20 years.",
          tag: "Future Perfect Continuous",
          tagColor: "amber",
          answer: "will have been living",
          explanation: "เน้นระยะเวลาต่อเนื่องจนถึงจุดเวลาในอนาคต ใช้ Future Perfect Continuous"
        },
        {
          sentence: "The new bridge ___ (build) next year.",
          tag: "Passive",
          tagColor: "blue",
          answer: "will be built",
          explanation: "Future Simple Passive: will be + V3"
        },
        {
          sentence: "If you ___ (study) hard, you will pass the exam.",
          tag: "First Conditional",
          tagColor: "purple",
          answer: "study",
          explanation: "ใน If-clause ของ First Conditional ต้องใช้ Present Simple"
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
          sentence: "At noon tomorrow, I ___ lunch with my friends.",
          emoji: "🍽️",
          options: ["will have", "will be having"],
          answer: "will be having",
          explanation: "เน้นเหตุการณ์ที่กำลังดำเนินอยู่ ณ เวลานั้นในอนาคต ใช้ Future Continuous"
        },
        {
          sentence: "By Friday, she ___ the report.",
          emoji: "📄",
          options: ["will have submitted", "will submit"],
          answer: "will have submitted",
          explanation: "เหตุการณ์เสร็จก่อนกำหนดเวลาในอนาคต ใช้ Future Perfect"
        },
        {
          sentence: "This house ___ next month.",
          emoji: "🏠",
          options: ["will be sold", "will sell"],
          answer: "will be sold",
          explanation: "บ้านถูกกระทำ (ถูกขาย) ใช้ Future Simple Passive: will be + V3"
        },
        {
          sentence: "By the time we retire, we ___ here for 30 years.",
          emoji: "🏢",
          options: ["will have been working", "will work"],
          answer: "will have been working",
          explanation: "เน้นระยะเวลาต่อเนื่องยาวนานจนถึงจุดในอนาคต ใช้ Future Perfect Continuous"
        },
        {
          sentence: "If she ___ early, she'll catch the bus.",
          emoji: "🚌",
          options: ["leaves", "will leave"],
          answer: "leaves",
          explanation: "If-clause ของ First Conditional ใช้ Present Simple"
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
          wrong: "This time tomorrow, we will flying to Japan.",
          tag: "Future Continuous",
          tagColor: "secondary",
          options: ["This time tomorrow, we will be flying to Japan.", "This time tomorrow, we are flying to Japan.", "This time tomorrow, we will flew to Japan."],
          answer: "This time tomorrow, we will be flying to Japan.",
          explanation: "โครงสร้าง Future Continuous ต้องมี be: will + be + V-ing"
        },
        {
          wrong: "By next year, I will graduate from university already.",
          tag: "Future Perfect",
          tagColor: "purple",
          options: ["By next year, I will have graduated from university.", "By next year, I graduated from university.", "By next year, I will be graduating from university."],
          answer: "By next year, I will have graduated from university.",
          explanation: "เหตุการณ์ที่เสร็จก่อนจุดเวลาหนึ่งในอนาคตต้องใช้ Future Perfect: will have + V3"
        },
        {
          wrong: "The results will announce next week.",
          tag: "Passive",
          tagColor: "blue",
          options: ["The results will be announced next week.", "The results are announcing next week.", "The results will have announce next week."],
          answer: "The results will be announced next week.",
          explanation: "ผลลัพธ์ถูกกระทำ (ถูกประกาศ) ต้องใช้ Passive: will be + V3"
        },
        {
          wrong: "If it will rain tomorrow, we will stay at home.",
          tag: "First Conditional",
          tagColor: "purple",
          options: ["If it rains tomorrow, we will stay at home.", "If it rain tomorrow, we will stay at home.", "If it is raining tomorrow, we will stay at home."],
          answer: "If it rains tomorrow, we will stay at home.",
          explanation: "ห้ามใช้ will ใน If-clause ของ First Conditional ต้องใช้ Present Simple เท่านั้น"
        },
        {
          wrong: "By 2027, she will have teach for 10 years.",
          tag: "Future Perfect Continuous",
          tagColor: "amber",
          options: ["By 2027, she will have been teaching for 10 years.", "By 2027, she will teach for 10 years.", "By 2027, she will has been teaching for 10 years."],
          answer: "By 2027, she will have been teaching for 10 years.",
          explanation: "โครงสร้าง Future Perfect Continuous คือ will have been + V-ing"
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
          sentence: "At 9 PM tonight, I ___ my favorite show.",
          bank: ["will be watching", "will watch", "watch"],
          answer: "will be watching",
          explanation: "เหตุการณ์กำลังดำเนินอยู่ ณ เวลาที่ระบุในอนาคต ใช้ Future Continuous"
        },
        {
          sentence: "By the end of this year, he ___ his novel.",
          bank: ["will have finished", "will finish", "finishes"],
          answer: "will have finished",
          explanation: "เหตุการณ์เสร็จก่อนจุดเวลาในอนาคต ใช้ Future Perfect"
        },
        {
          sentence: "The new policy ___ by the board next month.",
          bank: ["will be reviewed", "will review", "reviews"],
          answer: "will be reviewed",
          explanation: "นโยบายถูกกระทำ (ถูกทบทวน) ใช้ Future Simple Passive"
        },
        {
          sentence: "If you ___ hard, you will succeed.",
          bank: ["work", "will work", "worked"],
          answer: "work",
          explanation: "If-clause ของ First Conditional ใช้ Present Simple"
        },
        {
          sentence: "By 2030, they ___ in this city for 15 years.",
          bank: ["will have been living", "will live", "live"],
          answer: "will have been living",
          explanation: "เน้นระยะเวลาต่อเนื่องยาวนานจนถึงจุดในอนาคต ใช้ Future Perfect Continuous"
        }
      ]
    }
  ]
};
