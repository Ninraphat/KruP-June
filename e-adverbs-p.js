const EXERCISE = {
  title: "Adverbs",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Adverbs",
  titleAccent: "",
  emoji: "🏃",
  subtitle: "ฝึกทำแบบฝึกหัด Adverb of Manner และ Frequency แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-adverbs-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "She runs ___.",
          tag: "Manner",
          tagColor: "blue",
          emoji: "🏃",
          options: ["quick", "quickly", "quicker", "quickest"],
          answer: "quickly",
          explanation: "Adverb of Manner บอกลักษณะการวิ่ง เติม -ly"
        },
        {
          sentence: "I ___ brush my teeth.",
          tag: "Frequency",
          tagColor: "secondary",
          emoji: "🦷",
          options: ["always", "quickly", "slowly", "carefully"],
          answer: "always",
          explanation: "always เป็น adverb of frequency บอกความถี่ 100%"
        },
        {
          sentence: "He drives ___.",
          tag: "Manner",
          tagColor: "blue",
          emoji: "🚗",
          options: ["careful", "carefully", "carefuller", "carefullest"],
          answer: "carefully",
          explanation: "adjective careful + ly = carefully"
        },
        {
          sentence: "We ___ eat pizza on weekends.",
          tag: "Frequency",
          tagColor: "secondary",
          emoji: "🍕",
          options: ["sometimes", "slowly", "quickly", "loudly"],
          answer: "sometimes",
          explanation: "sometimes เป็น adverb of frequency บอกความถี่ 50%"
        },
        {
          sentence: "The turtle walks ___.",
          tag: "Manner",
          tagColor: "blue",
          emoji: "🐢",
          options: ["slow", "slowly", "slower", "slowest"],
          answer: "slowly",
          explanation: "adjective slow + ly = slowly"
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
          sentence: "He speaks ___ (loud).",
          tag: "Manner",
          tagColor: "blue",
          answer: "loudly",
          explanation: "loud + ly = loudly"
        },
        {
          sentence: "She ___ (usual) walks to school.",
          tag: "Frequency",
          tagColor: "secondary",
          answer: "usually",
          explanation: "usually เป็น adverb of frequency"
        },
        {
          sentence: "The cat jumps ___ (quiet).",
          tag: "Manner",
          tagColor: "blue",
          answer: "quietly",
          explanation: "quiet + ly = quietly"
        },
        {
          sentence: "He ___ (never) lies to his friends.",
          tag: "Frequency",
          tagColor: "secondary",
          answer: "never",
          explanation: "never บอกความถี่ 0%"
        },
        {
          sentence: "She sings ___ (beautiful).",
          tag: "Manner",
          tagColor: "blue",
          answer: "beautifully",
          explanation: "beautiful + ly = beautifully"
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
          sentence: "The rabbit runs ___.",
          emoji: "🐰",
          options: ["fastly", "fast"],
          answer: "fast",
          explanation: "fast เป็นได้ทั้ง adjective และ adverb ไม่เติม -ly"
        },
        {
          sentence: "I ___ eat vegetables.",
          emoji: "🥦",
          options: ["sometimes", "quickly"],
          answer: "sometimes",
          explanation: "sometimes เป็น adverb of frequency"
        },
        {
          sentence: "The snail moves ___.",
          emoji: "🐌",
          options: ["slowly", "slow"],
          answer: "slowly",
          explanation: "slow + ly = slowly"
        },
        {
          sentence: "She ___ eats candy.",
          emoji: "🍬",
          options: ["never", "carefully"],
          answer: "never",
          explanation: "never เป็น adverb of frequency บอกความถี่ 0%"
        },
        {
          sentence: "He walks ___.",
          emoji: "🚶",
          options: ["carefully", "careful"],
          answer: "carefully",
          explanation: "careful + ly = carefully"
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
          wrong: "She runs quick.",
          tag: "Manner",
          tagColor: "blue",
          options: ["She runs quickly.", "She run quickly.", "She runs quicker."],
          answer: "She runs quickly.",
          explanation: "adverb of manner ต้องเติม -ly (quickly ไม่ใช่ quick)"
        },
        {
          wrong: "I brush always my teeth.",
          tag: "Frequency",
          tagColor: "secondary",
          options: ["I always brush my teeth.", "I brush my teeth always.", "Always I brush my teeth."],
          answer: "I always brush my teeth.",
          explanation: "adverb of frequency วางหน้ากริยาหลัก ไม่ใช่หลัง"
        },
        {
          wrong: "He drives careful.",
          tag: "Manner",
          tagColor: "blue",
          options: ["He drives carefully.", "He drive carefully.", "He drives more careful."],
          answer: "He drives carefully.",
          explanation: "careful + ly = carefully"
        },
        {
          wrong: "We eat pizza sometimes on weekends wrong order.",
          tag: "Frequency",
          tagColor: "secondary",
          options: ["We sometimes eat pizza on weekends.", "Sometimes we eat pizza on weekends wrong.", "We eat sometimes pizza."],
          answer: "We sometimes eat pizza on weekends.",
          explanation: "sometimes มักวางหน้ากริยาหลัก"
        },
        {
          wrong: "The turtle walks slow.",
          tag: "Manner",
          tagColor: "blue",
          options: ["The turtle walks slowly.", "The turtle walk slowly.", "The turtle walks slower."],
          answer: "The turtle walks slowly.",
          explanation: "slow + ly = slowly"
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
          sentence: "He sings ___.",
          bank: ["beautifully", "beautiful", "beauty"],
          answer: "beautifully",
          explanation: "beautiful + ly = beautifully"
        },
        {
          sentence: "I ___ watch TV at night.",
          bank: ["usually", "quickly", "carefully"],
          answer: "usually",
          explanation: "usually เป็น adverb of frequency"
        },
        {
          sentence: "The dog barks ___.",
          bank: ["loudly", "loud", "louder"],
          answer: "loudly",
          explanation: "loud + ly = loudly"
        },
        {
          sentence: "She ___ tells lies.",
          bank: ["never", "slowly", "quickly"],
          answer: "never",
          explanation: "never เป็น adverb of frequency"
        },
        {
          sentence: "The cat moves ___.",
          bank: ["quietly", "quiet", "quieter"],
          answer: "quietly",
          explanation: "quiet + ly = quietly"
        }
      ]
    }
  ]
};
