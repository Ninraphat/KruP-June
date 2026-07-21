const EXERCISE = {
  title: "Adjectives",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Adjectives",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "ฝึก Order of Adjectives ครบระบบ, Adjective + Preposition, Compound Adjective และ Gradable/Non-gradable",
  accentColor: "blue",
  contentPage: "c-adjectives-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "She bought a beautiful ___ antique wooden table.",
          tag: "Order",
          tagColor: "blue",
          emoji: "🪑",
          options: ["small", "the small", "smaller", "smallest"],
          answer: "small",
          explanation: "ลำดับ Adjective: Opinion(beautiful)-Size(small)-Age(antique)-Material(wooden)"
        },
        {
          sentence: "He is afraid ___ spiders.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          emoji: "🕷️",
          options: ["of", "in", "at", "for"],
          answer: "of",
          explanation: "afraid ตามด้วย of เสมอ"
        },
        {
          sentence: "She is good ___ math.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          emoji: "🔢",
          options: ["in", "at", "of", "for"],
          answer: "at",
          explanation: "good ตามด้วย at เสมอ"
        },
        {
          sentence: "He is a ___ author. (well known)",
          tag: "Compound",
          tagColor: "amber",
          emoji: "📚",
          options: ["well known", "well-known", "good known", "well-know"],
          answer: "well-known",
          explanation: "Compound Adjective เขียนด้วยขีด (-) เชื่อมคำ"
        },
        {
          sentence: "This diamond is ___ perfect.",
          tag: "Non-gradable",
          tagColor: "purple",
          emoji: "💎",
          options: ["very", "absolutely", "more", "most"],
          answer: "absolutely",
          explanation: "perfect เป็น non-gradable adjective ใช้ absolutely แทน very"
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
          sentence: "They are proud ___ (of) their achievements.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          answer: "of",
          explanation: "proud ตามด้วย of เสมอ"
        },
        {
          sentence: "She has a ___ (year, five, old) daughter.",
          tag: "Compound",
          tagColor: "amber",
          answer: "five-year-old",
          explanation: "Compound Adjective: number + noun เชื่อมด้วยขีด"
        },
        {
          sentence: "This painting is truly ___ (unique). (non-gradable)",
          tag: "Non-gradable",
          tagColor: "purple",
          answer: "unique",
          explanation: "unique เป็น non-gradable adjective ไม่ใช้ very นำหน้า"
        },
        {
          sentence: "He is married ___ (to) a famous actress.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          answer: "to",
          explanation: "married ตามด้วย to เสมอ"
        },
        {
          sentence: "She wore a ___ (blue, beautiful, silk) dress.",
          tag: "Order",
          tagColor: "blue",
          answer: "beautiful blue silk",
          explanation: "ลำดับ Adjective: Opinion(beautiful)-Color(blue)-Material(silk)"
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
          sentence: "This is a ___ singer. (world, famous)",
          emoji: "🎤",
          options: ["world-famous", "famous world"],
          answer: "world-famous",
          explanation: "Compound Adjective: noun + adjective เชื่อมด้วยขีด"
        },
        {
          sentence: "I'm interested ___ art.",
          emoji: "🎨",
          options: ["in", "at"],
          answer: "in",
          explanation: "interested ตามด้วย in เสมอ"
        },
        {
          sentence: "This gem is ___ flawless.",
          emoji: "💎",
          options: ["absolutely", "very"],
          answer: "absolutely",
          explanation: "flawless เป็น non-gradable adjective ใช้ absolutely"
        },
        {
          sentence: "She bought a ___ car. (red, new, sports)",
          emoji: "🚗",
          options: ["new red sports", "red new sports"],
          answer: "new red sports",
          explanation: "ลำดับ Adjective: Age(new)-Color(red)-Purpose(sports)"
        },
        {
          sentence: "He is very ___ heights.",
          emoji: "🏔️",
          options: ["afraid of", "afraid in"],
          answer: "afraid of",
          explanation: "afraid ตามด้วย of เสมอ"
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
          wrong: "She bought a small beautiful antique wooden table.",
          tag: "Order",
          tagColor: "blue",
          options: ["She bought a beautiful small antique wooden table.", "She bought a wooden antique small beautiful table.", "She bought a table beautiful small antique wooden."],
          answer: "She bought a beautiful small antique wooden table.",
          explanation: "ลำดับที่ถูกต้อง: Opinion(beautiful)-Size(small)-Age(antique)-Material(wooden)"
        },
        {
          wrong: "He is afraid at spiders.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          options: ["He is afraid of spiders.", "He is afraid on spiders.", "He is afraid for spiders."],
          answer: "He is afraid of spiders.",
          explanation: "afraid ต้องตามด้วย of เสมอ"
        },
        {
          wrong: "He is a well known author.",
          tag: "Compound",
          tagColor: "amber",
          options: ["He is a well-known author.", "He is a good-known author.", "He is a well knowing author."],
          answer: "He is a well-known author.",
          explanation: "Compound Adjective ต้องเขียนด้วยขีด (-) เชื่อมคำ"
        },
        {
          wrong: "This diamond is very perfect.",
          tag: "Non-gradable",
          tagColor: "purple",
          options: ["This diamond is absolutely perfect.", "This diamond is more perfect.", "This diamond is perfectest."],
          answer: "This diamond is absolutely perfect.",
          explanation: "perfect เป็น non-gradable adjective ห้ามใช้ very ใช้ absolutely แทน"
        },
        {
          wrong: "She is good in math.",
          tag: "Adjective + Prep",
          tagColor: "secondary",
          options: ["She is good at math.", "She is good on math.", "She is good for math."],
          answer: "She is good at math.",
          explanation: "good ต้องตามด้วย at เสมอ"
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
          sentence: "They are proud ___ their son's success.",
          bank: ["of", "in", "at"],
          answer: "of",
          explanation: "proud ตามด้วย of เสมอ"
        },
        {
          sentence: "She has a ___ voice. (world, famous)",
          bank: ["world-famous", "famous-world", "world famous voice"],
          answer: "world-famous",
          explanation: "Compound Adjective เชื่อมด้วยขีด"
        },
        {
          sentence: "This solution is ___ unique in the industry.",
          bank: ["absolutely", "very", "more"],
          answer: "absolutely",
          explanation: "unique เป็น non-gradable adjective ใช้ absolutely"
        },
        {
          sentence: "He wore a ___ jacket. (leather, black, old)",
          bank: ["old black leather", "black old leather", "leather black old"],
          answer: "old black leather",
          explanation: "ลำดับ Adjective: Age(old)-Color(black)-Material(leather)"
        },
        {
          sentence: "I'm not ___ heights, but I don't love them either.",
          bank: ["afraid of", "afraid in", "afraid at"],
          answer: "afraid of",
          explanation: "afraid ตามด้วย of เสมอ"
        }
      ]
    }
  ]
};
