const EXERCISE = {
  title: "Adverbs",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🏃",
  subtitle: "ฝึก Adverb of Time/Place, Degree, Irregular Adverbs และตำแหน่งในประโยค",
  accentColor: "blue",
  contentPage: "c-adverbs-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She speaks English very ___.",
          tag: "Irregular",
          tagColor: "blue",
          emoji: "🗣️",
          options: ["good", "well", "goodly", "best"],
          answer: "well",
          explanation: "good เป็น irregular adverb เปลี่ยนเป็น well ไม่ใช่ goodly"
        },
        {
          sentence: "This soup is ___ hot to eat.",
          tag: "Degree",
          tagColor: "secondary",
          emoji: "🍲",
          options: ["very", "too", "quite", "enough"],
          answer: "too",
          explanation: "too ใช้บอกว่ามากเกินไปในเชิงลบ (ร้อนเกินกว่าจะกินได้)"
        },
        {
          sentence: "He works ___ every day.",
          tag: "Irregular",
          tagColor: "blue",
          emoji: "💼",
          options: ["hardly", "hard", "harder", "hardest"],
          answer: "hard",
          explanation: "hard เป็น irregular adverb ไม่เปลี่ยนรูป (hardly มีความหมายต่างออกไป)"
        },
        {
          sentence: "I looked ___ for my keys.",
          tag: "Place",
          tagColor: "amber",
          emoji: "🔑",
          options: ["everywhere", "always", "quickly", "very"],
          answer: "everywhere",
          explanation: "everywhere เป็น adverb of place บอกสถานที่"
        },
        {
          sentence: "The box is big ___.",
          tag: "Degree",
          tagColor: "secondary",
          emoji: "📦",
          options: ["enough", "very", "too", "quite"],
          answer: "enough",
          explanation: "enough วางไว้หลัง adjective ต่างจาก very/too/quite"
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
          sentence: "I will finish my homework ___ (soon).",
          tag: "Time",
          tagColor: "blue",
          answer: "soon",
          explanation: "soon เป็น adverb of time"
        },
        {
          sentence: "The test was ___ (quite) difficult.",
          tag: "Degree",
          tagColor: "secondary",
          answer: "quite",
          explanation: "quite บอกระดับความเข้มข้นแบบค่อนข้าง"
        },
        {
          sentence: "He plays football ___ (good).",
          tag: "Irregular",
          tagColor: "blue",
          answer: "well",
          explanation: "good เป็น irregular adverb เปลี่ยนเป็น well"
        },
        {
          sentence: "I looked for my dog ___ (everywhere).",
          tag: "Place",
          tagColor: "amber",
          answer: "everywhere",
          explanation: "everywhere เป็น adverb of place"
        },
        {
          sentence: "This shirt is ___ (enough) big for me.",
          tag: "Degree",
          tagColor: "secondary",
          answer: "big enough",
          explanation: "enough วางไว้หลัง adjective"
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
          sentence: "He plays basketball very ___.",
          emoji: "🏀",
          options: ["well", "good"],
          answer: "well",
          explanation: "good เป็น irregular adverb เปลี่ยนเป็น well"
        },
        {
          sentence: "I will call you ___.",
          emoji: "📞",
          options: ["soon", "everywhere"],
          answer: "soon",
          explanation: "soon เป็น adverb of time"
        },
        {
          sentence: "This tea is ___ hot to drink.",
          emoji: "🍵",
          options: ["too", "enough"],
          answer: "too",
          explanation: "too ใช้บอกว่ามากเกินไปในเชิงลบ"
        },
        {
          sentence: "The room was ___ cold.",
          emoji: "🥶",
          options: ["quite", "always"],
          answer: "quite",
          explanation: "quite บอกระดับความเข้มข้น"
        },
        {
          sentence: "He trains ___ for the competition.",
          emoji: "🏋️",
          options: ["hard", "hardly"],
          answer: "hard",
          explanation: "hard เป็น irregular adverb ไม่เปลี่ยนรูป"
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
          wrong: "She speaks English very goodly.",
          tag: "Irregular",
          tagColor: "blue",
          options: ["She speaks English very well.", "She speaks English very good.", "She speaks English very best."],
          answer: "She speaks English very well.",
          explanation: "good เป็น irregular adverb เปลี่ยนเป็น well ไม่ใช่ goodly"
        },
        {
          wrong: "This box is enough big.",
          tag: "Degree",
          tagColor: "secondary",
          options: ["This box is big enough.", "This box is very enough big.", "This box is too enough big."],
          answer: "This box is big enough.",
          explanation: "enough ต้องวางหลัง adjective ไม่ใช่หน้า"
        },
        {
          wrong: "He works hardly every day. (meaning: he works with effort)",
          tag: "Irregular",
          tagColor: "blue",
          options: ["He works hard every day.", "He work hardly every day.", "He works harder every day."],
          answer: "He works hard every day.",
          explanation: "hard เป็น irregular adverb ไม่เปลี่ยนรูป hardly มีความหมายต่างออกไป (แทบจะไม่)"
        },
        {
          wrong: "I looked my keys everywhere for.",
          tag: "Place",
          tagColor: "amber",
          options: ["I looked everywhere for my keys.", "I looked for everywhere my keys.", "Everywhere I looked for my keys wrong."],
          answer: "I looked everywhere for my keys.",
          explanation: "ตำแหน่ง adverb of place ต้องเรียงให้ถูกต้องในประโยค"
        },
        {
          wrong: "This coffee is enough hot to drink now.",
          tag: "Degree",
          tagColor: "secondary",
          options: ["This coffee is too hot to drink now.", "This coffee is very hot enough to drink now.", "This coffee is hot too to drink now."],
          answer: "This coffee is too hot to drink now.",
          explanation: "too ใช้บอกว่ามากเกินไป (ร้อนเกินกว่าจะดื่มได้)"
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
          sentence: "She sings ___. (good)",
          bank: ["well", "good", "goodly"],
          answer: "well",
          explanation: "good เป็น irregular adverb เปลี่ยนเป็น well"
        },
        {
          sentence: "I will see you ___.",
          bank: ["soon", "everywhere", "enough"],
          answer: "soon",
          explanation: "soon เป็น adverb of time"
        },
        {
          sentence: "This shoe is small ___ for me.",
          bank: ["enough", "too", "very"],
          answer: "enough",
          explanation: "enough วางหลัง adjective (small enough)"
        },
        {
          sentence: "This test was ___ hard for beginners.",
          bank: ["too", "enough", "quite"],
          answer: "too",
          explanation: "too บอกว่ามากเกินไปในเชิงลบ"
        },
        {
          sentence: "He runs ___ every morning.",
          bank: ["fast", "fastly", "faster"],
          answer: "fast",
          explanation: "fast เป็น irregular adverb ไม่เปลี่ยนรูป"
        }
      ]
    }
  ]
};
