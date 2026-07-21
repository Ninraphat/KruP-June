const EXERCISE = {
  title: "Adverbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🎓",
  subtitle: "ฝึก Comparative/Superlative, Sentence Adverb, Degree ขั้นสูง และ Focusing Adverb",
  accentColor: "blue",
  contentPage: "c-adverbs-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "She performed ___ than her opponent.",
          tag: "Comparative",
          tagColor: "blue",
          emoji: "🏆",
          options: ["skillfully", "more skillfully", "most skillfully", "skillfullier"],
          answer: "more skillfully",
          explanation: "Adverb ที่ลงท้าย -ly ใช้ more นำหน้าเมื่อเปรียบเทียบ"
        },
        {
          sentence: "___, we arrived on time.",
          tag: "Sentence Adverb",
          tagColor: "secondary",
          emoji: "🍀",
          options: ["Fortunate", "Fortunately", "Fortune", "Fortunating"],
          answer: "Fortunately",
          explanation: "Sentence Adverb ขยายทั้งประโยค วางต้นประโยคตามด้วยจุลภาค"
        },
        {
          sentence: "That movie was ___ boring.",
          tag: "Degree",
          tagColor: "amber",
          emoji: "🎬",
          options: ["extremely", "very much", "too much", "quite much"],
          answer: "extremely",
          explanation: "extremely เป็น adverb of degree ขั้นสูง แปลว่าอย่างยิ่ง"
        },
        {
          sentence: "___ she knew the secret; no one else did.",
          tag: "Focusing",
          tagColor: "purple",
          emoji: "🤫",
          options: ["Only", "Very", "Too", "Quite"],
          answer: "Only",
          explanation: "Only เป็น focusing adverb เน้นว่ามีแค่เธอเท่านั้น"
        },
        {
          sentence: "I ___ forget this day.",
          tag: "Position",
          tagColor: "blue",
          emoji: "📅",
          options: ["never will", "will never", "will forget never", "never will forget"],
          answer: "will never",
          explanation: "Adverb of frequency วางหลัง modal verb (will) แต่หน้ากริยาหลัก"
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
          sentence: "He runs ___ (fast) than his brother.",
          tag: "Comparative",
          tagColor: "blue",
          answer: "faster",
          explanation: "fast เป็น irregular adverb เติม -er เมื่อเปรียบเทียบ"
        },
        {
          sentence: "___ (obvious), she was upset about the news.",
          tag: "Sentence Adverb",
          tagColor: "secondary",
          answer: "Obviously",
          explanation: "Sentence Adverb ขยายทั้งประโยค วางต้นประโยค"
        },
        {
          sentence: "I could ___ (barely) hear him over the noise.",
          tag: "Degree",
          tagColor: "amber",
          answer: "barely",
          explanation: "barely แปลว่าแทบจะไม่"
        },
        {
          sentence: "___ (even) the teacher was surprised by the result.",
          tag: "Focusing",
          tagColor: "purple",
          answer: "Even",
          explanation: "Even เป็น focusing adverb เน้นความประหลาดใจ"
        },
        {
          sentence: "She ___ (has/always) wanted to travel around the world.",
          tag: "Position",
          tagColor: "blue",
          answer: "has always",
          explanation: "adverb of frequency วางหลัง auxiliary verb (has) หน้ากริยาหลัก"
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
          sentence: "She dances ___ than anyone else in class.",
          emoji: "💃",
          options: ["more gracefully", "gracefully"],
          answer: "more gracefully",
          explanation: "Adverb ที่ลงท้าย -ly ใช้ more นำหน้าเมื่อเปรียบเทียบ"
        },
        {
          sentence: "___, the flight was delayed.",
          emoji: "✈️",
          options: ["Unfortunately", "Unfortunate"],
          answer: "Unfortunately",
          explanation: "Sentence Adverb ขยายทั้งประโยค"
        },
        {
          sentence: "The weather today is ___ hot.",
          emoji: "🌡️",
          options: ["extremely", "very much"],
          answer: "extremely",
          explanation: "extremely เป็น adverb of degree ขั้นสูง"
        },
        {
          sentence: "I like all subjects, ___ math.",
          emoji: "🔢",
          options: ["especially", "only"],
          answer: "especially",
          explanation: "especially เป็น focusing adverb เน้นความชอบพิเศษ"
        },
        {
          sentence: "He ___ eats fast food.",
          emoji: "🍔",
          options: ["rarely", "rare"],
          answer: "rarely",
          explanation: "rarely เป็น adverb of frequency แปลว่าแทบจะไม่"
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
          wrong: "She performed skillfullier than her opponent.",
          tag: "Comparative",
          tagColor: "blue",
          options: ["She performed more skillfully than her opponent.", "She performed skillfuller than her opponent.", "She performed most skillfully than her opponent."],
          answer: "She performed more skillfully than her opponent.",
          explanation: "Adverb ที่ลงท้าย -ly ต้องใช้ more นำหน้า ไม่เติม -er/-ier"
        },
        {
          wrong: "Fortunate, we arrived on time.",
          tag: "Sentence Adverb",
          tagColor: "secondary",
          options: ["Fortunately, we arrived on time.", "Fortune, we arrived on time.", "Fortunating, we arrived on time."],
          answer: "Fortunately, we arrived on time.",
          explanation: "Sentence Adverb ต้องเติม -ly (Fortunately ไม่ใช่ Fortunate)"
        },
        {
          wrong: "That movie was very extremely boring.",
          tag: "Degree",
          tagColor: "amber",
          options: ["That movie was extremely boring.", "That movie was too extremely boring.", "That movie was quite extremely boring."],
          answer: "That movie was extremely boring.",
          explanation: "ไม่ควรใช้ very ซ้ำกับ extremely เพราะซ้ำซ้อนความหมาย"
        },
        {
          wrong: "Only she the secret knew.",
          tag: "Focusing",
          tagColor: "purple",
          options: ["Only she knew the secret.", "She only the secret knew.", "Only knew she the secret."],
          answer: "Only she knew the secret.",
          explanation: "Focusing adverb (Only) ต้องวางตำแหน่งที่ถูกต้องในประโยค"
        },
        {
          wrong: "I will forget never this day.",
          tag: "Position",
          tagColor: "blue",
          options: ["I will never forget this day.", "I never will forget this day already.", "Never I will forget this day."],
          answer: "I will never forget this day.",
          explanation: "adverb of frequency (never) วางหลัง modal verb (will) หน้ากริยาหลัก"
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
          sentence: "He explained the topic ___ than the other teacher.",
          bank: ["more clearly", "clearly", "clearer"],
          answer: "more clearly",
          explanation: "Adverb ที่ลงท้าย -ly ใช้ more นำหน้า"
        },
        {
          sentence: "___, the team won the championship.",
          bank: ["Surprisingly", "Surprise", "Surprised"],
          answer: "Surprisingly",
          explanation: "Sentence Adverb ต้องเติม -ly"
        },
        {
          sentence: "The exam was ___ difficult for most students.",
          bank: ["fairly", "very much", "too much"],
          answer: "fairly",
          explanation: "fairly เป็น adverb of degree ขั้นสูง แปลว่าค่อนข้าง"
        },
        {
          sentence: "___ the manager approved the proposal.",
          bank: ["Even", "Only", "Very"],
          answer: "Even",
          explanation: "Even เป็น focusing adverb เน้นความน่าประหลาดใจ"
        },
        {
          sentence: "She ___ finished her project before the deadline.",
          bank: ["has already", "already has", "has finished already"],
          answer: "has already",
          explanation: "adverb of frequency วางหลัง auxiliary verb (has) หน้ากริยาหลัก"
        }
      ]
    }
  ]
};
