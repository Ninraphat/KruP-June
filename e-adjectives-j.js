const EXERCISE = {
  title: "Adjectives",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎨",
  subtitle: "ฝึก Comparative/Superlative ครบกฎ, Order of Adjectives และ As...As",
  accentColor: "blue",
  contentPage: "c-adjectives-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "This movie is ___ than that one.",
          tag: "Comparative",
          tagColor: "blue",
          emoji: "🎬",
          options: ["boring", "more boring", "most boring", "boringer"],
          answer: "more boring",
          explanation: "คำยาว (boring มี 2 พยางค์) ใช้ more นำหน้า"
        },
        {
          sentence: "My car is as ___ as yours.",
          tag: "As...As",
          tagColor: "amber",
          emoji: "🚗",
          options: ["fast", "faster", "fastest", "more fast"],
          answer: "fast",
          explanation: "as...as ใช้ adjective รูปเดิม ไม่เติม -er"
        },
        {
          sentence: "This restaurant is ___ than that one.",
          tag: "Irregular",
          tagColor: "secondary",
          emoji: "🍽️",
          options: ["gooder", "better", "best", "more good"],
          answer: "better",
          explanation: "good เป็น irregular adjective เปลี่ยนเป็น better"
        },
        {
          sentence: "She has a ___ house. (beautiful, small)",
          tag: "Order",
          tagColor: "purple",
          emoji: "🏠",
          options: ["small beautiful", "beautiful small", "small small beautiful", "beautifully small"],
          answer: "beautiful small",
          explanation: "ลำดับ Adjective: Opinion (beautiful) มาก่อน Size (small)"
        },
        {
          sentence: "The movie was so ___ that I fell asleep.",
          tag: "Participle",
          tagColor: "blue",
          emoji: "😴",
          options: ["boring", "bored", "bore", "bores"],
          answer: "boring",
          explanation: "-ing ใช้อธิบายสิ่งที่ทำให้เกิดความรู้สึกน่าเบื่อ"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์รูปคำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "This exam is ___ (bad) than the last one.",
          tag: "Irregular",
          tagColor: "secondary",
          answer: "worse",
          explanation: "bad เป็น irregular adjective เปลี่ยนเป็น worse"
        },
        {
          sentence: "This city is as ___ (crowded) as Bangkok.",
          tag: "As...As",
          tagColor: "amber",
          answer: "crowded",
          explanation: "as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "She bought a ___ (old, small) bicycle.",
          tag: "Order",
          tagColor: "purple",
          answer: "small old",
          explanation: "ลำดับ Adjective: Size (small) มาก่อน Age (old)"
        },
        {
          sentence: "I was ___ (excite) about the trip.",
          tag: "Participle",
          tagColor: "blue",
          answer: "excited",
          explanation: "-ed ใช้อธิบายคนที่รู้สึก"
        },
        {
          sentence: "This puzzle is ___ (easy) than that one.",
          tag: "Comparative",
          tagColor: "blue",
          answer: "easier",
          explanation: "พยัญชนะ+y เปลี่ยน y เป็น ier"
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
          sentence: "This game is ___ than that one.",
          emoji: "🎮",
          options: ["more exciting", "excitinger"],
          answer: "more exciting",
          explanation: "คำยาวใช้ more นำหน้า"
        },
        {
          sentence: "His painting is as ___ as mine.",
          emoji: "🎨",
          options: ["good", "better"],
          answer: "good",
          explanation: "as...as ใช้ adjective รูปเดิม (good ไม่ใช่ better)"
        },
        {
          sentence: "She wore a ___ dress. (red, beautiful)",
          emoji: "👗",
          options: ["beautiful red", "red beautiful"],
          answer: "beautiful red",
          explanation: "ลำดับ Adjective: Opinion (beautiful) มาก่อน Color (red)"
        },
        {
          sentence: "The roller coaster was really ___.",
          emoji: "🎢",
          options: ["exciting", "excited"],
          answer: "exciting",
          explanation: "-ing อธิบายสิ่งที่ทำให้เกิดความรู้สึกตื่นเต้น"
        },
        {
          sentence: "This weather is ___ than yesterday.",
          emoji: "🌦️",
          options: ["worse", "badder"],
          answer: "worse",
          explanation: "bad เป็น irregular adjective เปลี่ยนเป็น worse"
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
          wrong: "This restaurant is gooder than that one.",
          tag: "Irregular",
          tagColor: "secondary",
          options: ["This restaurant is better than that one.", "This restaurant is more good than that one.", "This restaurant is goodest than that one."],
          answer: "This restaurant is better than that one.",
          explanation: "good เป็น irregular adjective เปลี่ยนเป็น better ไม่ใช่ gooder"
        },
        {
          wrong: "My car is as faster as yours.",
          tag: "As...As",
          tagColor: "amber",
          options: ["My car is as fast as yours.", "My car is as fast than yours.", "My car is fast as yours."],
          answer: "My car is as fast as yours.",
          explanation: "as...as ใช้ adjective รูปเดิม ไม่เติม -er"
        },
        {
          wrong: "She has a small beautiful house.",
          tag: "Order",
          tagColor: "purple",
          options: ["She has a beautiful small house.", "She has a house small beautiful.", "She has a small house beautiful."],
          answer: "She has a beautiful small house.",
          explanation: "ลำดับ Adjective: Opinion (beautiful) มาก่อน Size (small)"
        },
        {
          wrong: "I am boring right now.",
          tag: "Participle",
          tagColor: "blue",
          options: ["I am bored right now.", "I am bore right now.", "I am to bore right now."],
          answer: "I am bored right now.",
          explanation: "-ed ใช้อธิบายคนที่รู้สึก (ฉันรู้สึกเบื่อ) ไม่ใช่ -ing"
        },
        {
          wrong: "This movie is more bad than that one.",
          tag: "Irregular",
          tagColor: "secondary",
          options: ["This movie is worse than that one.", "This movie is badder than that one.", "This movie is more worse than that one."],
          answer: "This movie is worse than that one.",
          explanation: "bad เป็น irregular adjective เปลี่ยนเป็น worse ไม่ใช้ more bad"
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
          sentence: "This test was ___ than I expected.",
          bank: ["easier", "easy", "easiest"],
          answer: "easier",
          explanation: "พยัญชนะ+y เปลี่ยน y เป็น ier"
        },
        {
          sentence: "Her cooking is as ___ as her mother's.",
          bank: ["delicious", "more delicious", "most delicious"],
          answer: "delicious",
          explanation: "as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "He bought an ___ car. (old, expensive)",
          bank: ["expensive old", "old expensive", "expensively old"],
          answer: "expensive old",
          explanation: "ลำดับ Adjective: Opinion (expensive) มาก่อน Age (old)"
        },
        {
          sentence: "I was ___ by the ending of the movie.",
          bank: ["surprised", "surprising", "surprise"],
          answer: "surprised",
          explanation: "-ed ใช้อธิบายคนที่รู้สึกประหลาดใจ"
        },
        {
          sentence: "This road is ___ than that one.",
          bank: ["worse", "badder", "more bad"],
          answer: "worse",
          explanation: "bad เป็น irregular adjective เปลี่ยนเป็น worse"
        }
      ]
    }
  ]
};
