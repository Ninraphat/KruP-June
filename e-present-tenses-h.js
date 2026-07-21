const EXERCISE = {
  title: "Present Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "ฝึก Perfect vs Perfect Continuous, Passive Voice และ Stative vs Dynamic ระดับสูง",
  accentColor: "blue",
  contentPage: "c-present-tenses-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "She ___ five reports this month, and she's not done yet.",
          tag: "Perfect",
          tagColor: "blue",
          emoji: "📄",
          options: ["wrote", "has written", "is writing", "writes"],
          answer: "has written",
          explanation: "เน้นผลลัพธ์/จำนวนที่ทำสำเร็จแล้วโดยไม่ระบุเวลาแน่นอน จึงใช้ Present Perfect"
        },
        {
          sentence: "I ___ Japan in 2022.",
          tag: "Past Simple",
          tagColor: "amber",
          emoji: "🗾",
          options: ["have visited", "visited", "have been visiting", "visit"],
          answer: "visited",
          explanation: "มีคำระบุเวลาแน่นอน 'in 2022' จึงต้องใช้ Past Simple ไม่ใช่ Present Perfect"
        },
        {
          sentence: "The new bridge ___ by the government right now.",
          tag: "Passive Continuous",
          tagColor: "secondary",
          emoji: "🌉",
          options: ["is built", "is being built", "has been built", "builds"],
          answer: "is being built",
          explanation: "Present Continuous Passive: is/am/are + being + V3 ใช้เมื่อเน้นว่ากำลังถูกกระทำอยู่ตอนนี้"
        },
        {
          sentence: "I ___ about changing my major these days.",
          tag: "Dynamic",
          tagColor: "purple",
          emoji: "💭",
          options: ["think", "am thinking", "thinks", "thought"],
          answer: "am thinking",
          explanation: "'think about' ในความหมาย 'กำลังใคร่ครวญ' เป็น dynamic ใช้ continuous ได้"
        },
        {
          sentence: "The announcement ___ already ___ to all students.",
          tag: "Passive Perfect",
          tagColor: "blue",
          emoji: "📢",
          options: ["has / sent", "is / sent", "has / been sent", "was / sent"],
          answer: "has / been sent",
          explanation: "Present Perfect Passive: has/have + been + V3"
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
          sentence: "She ___ (read) three books this week already.",
          tag: "Perfect",
          tagColor: "blue",
          answer: "has read",
          explanation: "เน้นผลลัพธ์/จำนวนที่ทำสำเร็จแล้ว ไม่ระบุเวลาแน่นอน จึงใช้ Present Perfect"
        },
        {
          sentence: "He ___ (graduate) from university last year.",
          tag: "Past Simple",
          tagColor: "amber",
          answer: "graduated",
          explanation: "มีคำระบุเวลาแน่นอน 'last year' จึงต้องใช้ Past Simple"
        },
        {
          sentence: "English ___ (speak) in many countries around the world.",
          tag: "Passive",
          tagColor: "secondary",
          answer: "is spoken",
          explanation: "Present Simple Passive: is/am/are + V3 ใช้กับข้อเท็จจริงทั่วไป"
        },
        {
          sentence: "This report ___ (review) by the committee right now.",
          tag: "Passive Continuous",
          tagColor: "secondary",
          answer: "is being reviewed",
          explanation: "Present Continuous Passive: is + being + V3 ใช้เมื่อเน้นว่ากำลังถูกกระทำอยู่"
        },
        {
          sentence: "She ___ (look) tired today; she needs some rest.",
          tag: "Stative",
          tagColor: "purple",
          answer: "looks",
          explanation: "look ในความหมาย 'ดูเหมือน' เป็น stative verb ไม่ใช้ -ing"
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
          sentence: "She ___ tired all afternoon; she needs a break.",
          emoji: "😴",
          options: ["has been working", "has worked"],
          answer: "has been working",
          explanation: "Present Perfect Continuous เน้นระยะเวลาที่ทำต่อเนื่อง (all afternoon)"
        },
        {
          sentence: "The car ___ by a mechanic at the moment.",
          emoji: "🚗",
          options: ["is being fixed", "is fixed"],
          answer: "is being fixed",
          explanation: "Present Continuous Passive ใช้เมื่อเน้นว่ากำลังถูกกระทำอยู่ตอนนี้"
        },
        {
          sentence: "I ___ a new phone. Mine is broken.",
          emoji: "📱",
          options: ["am having", "have"],
          answer: "am having",
          explanation: "'have' ในความหมาย 'กำลังจะซื้อ/รับ' (dynamic use) ใช้ continuous ได้"
        },
        {
          sentence: "This artwork ___ by a famous painter.",
          emoji: "🎨",
          options: ["was created", "is being created"],
          answer: "was created",
          explanation: "เหตุการณ์ในอดีตที่จบไปแล้ว (การสร้างเสร็จแล้ว) ใช้ Past Simple Passive"
        },
        {
          sentence: "I ___ a doctor tomorrow about my knee.",
          emoji: "🩺",
          options: ["am seeing", "see"],
          answer: "am seeing",
          explanation: "'see' ในความหมาย 'นัดพบ' เป็น dynamic use กับแผนในอนาคต"
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
          wrong: "I have seen him yesterday.",
          tag: "Perfect vs Past",
          tagColor: "amber",
          options: ["I saw him yesterday.", "I have saw him yesterday.", "I have been seeing him yesterday."],
          answer: "I saw him yesterday.",
          explanation: "มีคำระบุเวลาแน่นอน 'yesterday' ต้องใช้ Past Simple ไม่ใช่ Present Perfect"
        },
        {
          wrong: "The report is reviewing by the manager now.",
          tag: "Passive",
          tagColor: "secondary",
          options: ["The report is being reviewed by the manager now.", "The report has reviewed by the manager now.", "The report reviews by the manager now."],
          answer: "The report is being reviewed by the manager now.",
          explanation: "Present Continuous Passive ต้องมี being: is/am/are + being + V3"
        },
        {
          wrong: "She has been finishing the project already.",
          tag: "Perfect",
          tagColor: "blue",
          options: ["She has already finished the project.", "She has been finished the project already.", "She finished already the project."],
          answer: "She has already finished the project.",
          explanation: "เน้นผลลัพธ์ที่ทำเสร็จแล้ว ควรใช้ Present Perfect ธรรมดา ไม่ใช่ Continuous"
        },
        {
          wrong: "I am understanding the lesson now.",
          tag: "Stative",
          tagColor: "purple",
          options: ["I understand the lesson now.", "I understands the lesson now.", "I am understand the lesson now."],
          answer: "I understand the lesson now.",
          explanation: "understand เป็น stative verb แสดงสภาวะ ไม่ใช้รูป -ing"
        },
        {
          wrong: "The results has been announced already.",
          tag: "Passive Perfect",
          tagColor: "blue",
          options: ["The results have been announced already.", "The results has announced already.", "The results are being announced already."],
          answer: "The results have been announced already.",
          explanation: "ประธาน The results เป็นพหูพจน์ ต้องใช้ have ไม่ใช่ has"
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
          sentence: "He has been coding ___ six hours straight.",
          bank: ["for", "since", "already"],
          answer: "for",
          explanation: "for ใช้กับระยะเวลา (six hours) เน้นความต่อเนื่อง"
        },
        {
          sentence: "This bridge ___ in 1998.",
          bank: ["was built", "is being built", "has been built"],
          answer: "was built",
          explanation: "มีเวลาระบุแน่นอน (1998) และเหตุการณ์จบไปแล้ว ใช้ Past Simple Passive"
        },
        {
          sentence: "The new policy ___ by the board this week.",
          bank: ["is being discussed", "is discussed", "has discussed"],
          answer: "is being discussed",
          explanation: "Present Continuous Passive ใช้เมื่อเน้นว่ากำลังถูกกระทำอยู่ในช่วงนี้"
        },
        {
          sentence: "I ___ that this plan will work.",
          bank: ["believe", "am believing", "believes"],
          answer: "believe",
          explanation: "believe เป็น stative verb แสดงความเชื่อ ไม่ใช้รูป -ing"
        },
        {
          sentence: "We ___ dinner with the Smiths this Friday evening.",
          bank: ["are having", "have", "has"],
          answer: "are having",
          explanation: "'have' ในความหมาย 'รับประทาน/นัดหมาย' เป็น dynamic use กับแผนในอนาคต"
        }
      ]
    }
  ]
};
