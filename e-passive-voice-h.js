const EXERCISE = {
  title: "Passive Voice",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🎓",
  subtitle: "ฝึก Passive ทุก Tense, Modal + Passive, Causative Form",
  accentColor: "blue",
  contentPage: "c-passive-voice-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "The work ___ already ___.",
          tag: "Present Perfect",
          tagColor: "blue",
          emoji: "✅",
          options: ["has / finished", "has / been finished", "is / finished", "was / finished"],
          answer: "has / been finished",
          explanation: "Present Perfect Passive: has/have + been + V3"
        },
        {
          sentence: "The bridge ___ before winter.",
          tag: "Modal Passive",
          tagColor: "secondary",
          emoji: "🌉",
          options: ["must repair", "must be repaired", "must repaired", "must being repaired"],
          answer: "must be repaired",
          explanation: "Modal + Passive: modal + be + V3"
        },
        {
          sentence: "This car needs ___.",
          tag: "Infinitive Passive",
          tagColor: "amber",
          emoji: "🚗",
          options: ["to fix", "to be fixed", "fixing", "fixed"],
          answer: "to be fixed",
          explanation: "Passive with infinitive: to be + V3"
        },
        {
          sentence: "I ___ my car ___ yesterday.",
          tag: "Causative",
          tagColor: "purple",
          emoji: "🔧",
          options: ["had / wash", "had / washed", "have / washed", "washed / had"],
          answer: "had / washed",
          explanation: "Causative form: had + object + V3 (ให้คนอื่นทำให้)"
        },
        {
          sentence: "It ___ that the theory is correct.",
          tag: "Academic Passive",
          tagColor: "blue",
          emoji: "📚",
          options: ["believes", "is believed", "believed", "is believing"],
          answer: "is believed",
          explanation: "Impersonal passive ในงานวิชาการ: It is believed/said/thought that..."
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
          sentence: "The report ___ (submit) before the deadline.",
          tag: "Past Perfect",
          tagColor: "blue",
          answer: "had been submitted",
          explanation: "Past Perfect Passive: had + been + V3"
        },
        {
          sentence: "The results ___ (announce) tomorrow.",
          tag: "Future Simple",
          tagColor: "secondary",
          answer: "will be announced",
          explanation: "Future Simple Passive: will + be + V3"
        },
        {
          sentence: "This issue ___ (should/discuss) carefully.",
          tag: "Modal Passive",
          tagColor: "amber",
          answer: "should be discussed",
          explanation: "Modal + Passive: should + be + V3"
        },
        {
          sentence: "She ___ her hair ___ (cut) last week.",
          tag: "Causative",
          tagColor: "purple",
          answer: "had / cut",
          explanation: "Causative form: had + object + V3"
        },
        {
          sentence: "This book is worth ___ (read).",
          tag: "Gerund Passive",
          tagColor: "blue",
          answer: "being read",
          explanation: "Passive with gerund: being + V3"
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
          sentence: "The project ___ by next Friday.",
          emoji: "📅",
          options: ["will have been completed", "will complete"],
          answer: "will have been completed",
          explanation: "Future Perfect Passive: will have been + V3"
        },
        {
          sentence: "This medicine ___ after meals.",
          emoji: "💊",
          options: ["should be taken", "should take"],
          answer: "should be taken",
          explanation: "Modal + Passive: should + be + V3"
        },
        {
          sentence: "I ___ my house ___ last month.",
          emoji: "🏠",
          options: ["had / painted", "had / paint"],
          answer: "had / painted",
          explanation: "Causative form: had + object + V3"
        },
        {
          sentence: "This dress needs ___.",
          emoji: "👗",
          options: ["to be ironed", "to iron"],
          answer: "to be ironed",
          explanation: "Passive with infinitive: to be + V3"
        },
        {
          sentence: "It ___ that the ancient city was destroyed by an earthquake.",
          emoji: "🏛️",
          options: ["is believed", "believes"],
          answer: "is believed",
          explanation: "Impersonal passive ในงานวิชาการ: It is believed that..."
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
          wrong: "The work has finished already.",
          tag: "Present Perfect",
          tagColor: "blue",
          options: ["The work has already been finished.", "The work is already finished been.", "The work has already finish."],
          answer: "The work has already been finished.",
          explanation: "Present Perfect Passive ต้องมี been: has/have + been + V3"
        },
        {
          wrong: "The bridge must repaired before winter.",
          tag: "Modal Passive",
          tagColor: "secondary",
          options: ["The bridge must be repaired before winter.", "The bridge must being repaired before winter.", "The bridge must repair before winter."],
          answer: "The bridge must be repaired before winter.",
          explanation: "Modal + Passive ต้องมี be: modal + be + V3"
        },
        {
          wrong: "This car needs fix.",
          tag: "Infinitive Passive",
          tagColor: "amber",
          options: ["This car needs to be fixed.", "This car needs to fix.", "This car needs fixed."],
          answer: "This car needs to be fixed.",
          explanation: "Passive with infinitive ต้องเป็น to be + V3"
        },
        {
          wrong: "I had washed my car yesterday by someone else.",
          tag: "Causative",
          tagColor: "purple",
          options: ["I had my car washed yesterday.", "I have my car washed yesterday.", "I washed had my car yesterday."],
          answer: "I had my car washed yesterday.",
          explanation: "Causative form: had + object + V3 ไม่ใช่ had + V3 ของตัวเอง"
        },
        {
          wrong: "It believes that the theory is correct.",
          tag: "Academic Passive",
          tagColor: "blue",
          options: ["It is believed that the theory is correct.", "It believed that the theory is correct.", "It is believing that the theory is correct."],
          answer: "It is believed that the theory is correct.",
          explanation: "Impersonal passive ต้องเป็น It is + V3 + that..."
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
          sentence: "The report ___ been checked twice.",
          bank: ["has", "have", "had"],
          answer: "has",
          explanation: "ประธานเอกพจน์ (The report) ใช้ has ใน Present Perfect Passive"
        },
        {
          sentence: "This problem can ___ solved easily.",
          bank: ["be", "being", "been"],
          answer: "be",
          explanation: "Modal + Passive: modal + be + V3"
        },
        {
          sentence: "She got her nails ___ yesterday.",
          bank: ["done", "do", "doing"],
          answer: "done",
          explanation: "Causative form: get + object + V3"
        },
        {
          sentence: "This essay is worth ___ published.",
          bank: ["being", "be", "been"],
          answer: "being",
          explanation: "Passive with gerund: being + V3"
        },
        {
          sentence: "It is ___ that the bridge will collapse soon.",
          bank: ["said", "say", "saying"],
          answer: "said",
          explanation: "Impersonal passive: It is + V3 + that..."
        }
      ]
    }
  ]
};
