const EXERCISE = {
  title: "Past Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Past",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "ฝึก Past Perfect, Used to/Would, Passive Voice และ Reported Speech",
  accentColor: "blue",
  contentPage: "c-past-tenses-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "By the time we arrived, the movie ___ already ___.",
          tag: "Past Perfect",
          tagColor: "blue",
          emoji: "🎬",
          options: ["has / started", "had / started", "was / starting", "did / start"],
          answer: "had / started",
          explanation: "เหตุการณ์ (หนังเริ่ม) เกิดก่อนเหตุการณ์อื่นในอดีต จึงใช้ Past Perfect: had + V3"
        },
        {
          sentence: "She ___ live in Chiang Mai before she moved to Bangkok.",
          tag: "Used to",
          tagColor: "secondary",
          emoji: "🏡",
          options: ["would", "used to", "was", "has"],
          answer: "used to",
          explanation: "used to ใช้กับสภาพในอดีต (live เป็น state) ส่วน would ใช้ได้เฉพาะการกระทำที่ทำซ้ำๆ"
        },
        {
          sentence: "The bridge ___ in 1998.",
          tag: "Passive",
          tagColor: "amber",
          emoji: "🌉",
          options: ["built", "was built", "has built", "was building"],
          answer: "was built",
          explanation: "Past Simple Passive: was/were + V3 ใช้กับเหตุการณ์ในอดีตที่มีเวลาระบุแน่นอน"
        },
        {
          sentence: "\"I am tired,\" she said. → She said (that) she ___ tired.",
          tag: "Reported Speech",
          tagColor: "purple",
          emoji: "💬",
          options: ["is", "was", "has been", "had"],
          answer: "was",
          explanation: "Present Simple (am) ถอยเป็น Past Simple (was) เมื่อเปลี่ยนเป็น Reported Speech"
        },
        {
          sentence: "The train ___ by the time we got to the station.",
          tag: "Past Perfect",
          tagColor: "blue",
          emoji: "🚆",
          options: ["left", "had left", "was leaving", "has left"],
          answer: "had left",
          explanation: "รถไฟออกไปก่อนที่เราจะไปถึง (เหตุการณ์แรก) จึงใช้ Past Perfect"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์รูปกริยาหรือคำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "She ___ (wait) for an hour when he finally came.",
          tag: "Past Perfect Continuous",
          tagColor: "blue",
          answer: "had been waiting",
          explanation: "เน้นระยะเวลาที่ต่อเนื่องก่อนอีกเหตุการณ์ในอดีต ใช้ Past Perfect Continuous"
        },
        {
          sentence: "My grandpa ___ (tell) us stories every night when we were kids.",
          tag: "Would",
          tagColor: "secondary",
          answer: "would tell",
          explanation: "would ใช้กับการกระทำที่ทำซ้ำๆ ในอดีต"
        },
        {
          sentence: "The letter ___ (send) yesterday.",
          tag: "Passive",
          tagColor: "amber",
          answer: "was sent",
          explanation: "Past Simple Passive: was/were + V3"
        },
        {
          sentence: "He said (that) he ___ (finish) the report the day before.",
          tag: "Reported Speech",
          tagColor: "purple",
          answer: "had finished",
          explanation: "Present Perfect ในคำพูดตรงถอยเป็น Past Perfect ใน Reported Speech"
        },
        {
          sentence: "The cake ___ (eat) before I arrived at the party.",
          tag: "Passive Perfect",
          tagColor: "blue",
          answer: "had been eaten",
          explanation: "Past Perfect Passive: had + been + V3 เมื่อเหตุการณ์เกิดก่อนอีกเหตุการณ์ในอดีต"
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
          sentence: "She ___ hungry because she hadn't eaten all day.",
          emoji: "🍽️",
          options: ["was", "had been"],
          answer: "was",
          explanation: "was (สภาพในอดีต) ตามด้วยเหตุผลที่ใช้ Past Perfect (hadn't eaten)"
        },
        {
          sentence: "We ___ go camping every summer when we were young.",
          emoji: "⛺",
          options: ["would", "were"],
          answer: "would",
          explanation: "would ใช้กับการกระทำที่ทำซ้ำๆ ในอดีต"
        },
        {
          sentence: "The house ___ in 1990.",
          emoji: "🏠",
          options: ["was built", "had built"],
          answer: "was built",
          explanation: "Past Simple Passive: was/were + V3"
        },
        {
          sentence: "He told me (that) he ___ to Japan the year before.",
          emoji: "🗾",
          options: ["had been", "was"],
          answer: "had been",
          explanation: "Past Simple (went) ในคำพูดตรงถอยเป็น Past Perfect (had been) ใน Reported Speech"
        },
        {
          sentence: "By 8 PM, she ___ all her homework.",
          emoji: "📚",
          options: ["had finished", "finished"],
          answer: "had finished",
          explanation: "By + เวลา บ่งบอกว่าเหตุการณ์เสร็จก่อนเวลานั้น ใช้ Past Perfect"
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
          wrong: "I would have a dog when I was a child.",
          tag: "Used to",
          tagColor: "secondary",
          options: ["I used to have a dog when I was a child.", "I would had a dog when I was a child.", "I use to have a dog when I was a child."],
          answer: "I used to have a dog when I was a child.",
          explanation: "ห้ามใช้ would กับสภาพ (state) เช่น have a dog ต้องใช้ used to แทน"
        },
        {
          wrong: "The house is being built in 1990.",
          tag: "Passive",
          tagColor: "amber",
          options: ["The house was built in 1990.", "The house has been built in 1990.", "The house builds in 1990."],
          answer: "The house was built in 1990.",
          explanation: "มีเวลาระบุแน่นอนในอดีต (1990) ต้องใช้ Past Simple Passive: was/were + V3"
        },
        {
          wrong: "By the time we arrived, the movie has started.",
          tag: "Past Perfect",
          tagColor: "blue",
          options: ["By the time we arrived, the movie had started.", "By the time we arrived, the movie started.", "By the time we arrived, the movie was starting."],
          answer: "By the time we arrived, the movie had started.",
          explanation: "เหตุการณ์เกิดก่อนอีกเหตุการณ์ในอดีต ต้องใช้ Past Perfect ไม่ใช่ Present Perfect"
        },
        {
          wrong: "She said (that) she is tired.",
          tag: "Reported Speech",
          tagColor: "purple",
          options: ["She said (that) she was tired.", "She said (that) she has tired.", "She said (that) she being tired."],
          answer: "She said (that) she was tired.",
          explanation: "Present Simple ในคำพูดตรงต้องถอยเป็น Past Simple ใน Reported Speech"
        },
        {
          wrong: "She had been wait for an hour when he came.",
          tag: "Past Perfect Continuous",
          tagColor: "blue",
          options: ["She had been waiting for an hour when he came.", "She has been waiting for an hour when he came.", "She was waiting for an hour when he came."],
          answer: "She had been waiting for an hour when he came.",
          explanation: "โครงสร้าง Past Perfect Continuous คือ had been + V-ing (waiting ไม่ใช่ wait)"
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
          sentence: "The train ___ by the time we got to the station.",
          bank: ["had left", "left", "has left"],
          answer: "had left",
          explanation: "เหตุการณ์เกิดก่อนอีกเหตุการณ์ในอดีต ใช้ Past Perfect"
        },
        {
          sentence: "When I was young, I ___ swim in the river every day.",
          bank: ["would", "was", "had"],
          answer: "would",
          explanation: "would ใช้กับการกระทำที่ทำซ้ำๆ ในอดีต"
        },
        {
          sentence: "The report ___ before the meeting started.",
          bank: ["had been finished", "was finished", "has been finished"],
          answer: "had been finished",
          explanation: "เหตุการณ์ (รายงานเสร็จ) เกิดก่อนอีกเหตุการณ์ในอดีต (ประชุมเริ่ม) ใช้ Past Perfect Passive"
        },
        {
          sentence: "He said (that) he ___ finished his homework.",
          bank: ["had", "has", "was"],
          answer: "had",
          explanation: "Present Perfect ในคำพูดตรงถอยเป็น Past Perfect ใน Reported Speech"
        },
        {
          sentence: "This novel ___ by a famous author in 1980.",
          bank: ["was written", "is written", "has written"],
          answer: "was written",
          explanation: "Past Simple Passive: was/were + V3 ใช้กับเหตุการณ์ในอดีตที่มีเวลาระบุแน่นอน"
        }
      ]
    }
  ]
};
