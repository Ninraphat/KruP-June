const EXERCISE = {
  title: "Reported Speech",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "💬",
  subtitle: "ฝึก Say vs Tell, Backshift ครบรูปแบบ และ Reported Yes/No Questions",
  accentColor: "blue",
  contentPage: "c-reported-speech-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "He ___ me (that) he was tired.",
          tag: "Say vs Tell",
          tagColor: "blue",
          emoji: "😴",
          options: ["said", "told", "says", "tells"],
          answer: "told",
          explanation: "tell ต้องมี object (me) ตามหลัง ไม่ใช้ say"
        },
        {
          sentence: "\"I went to school,\" she said. → She said she ___ to school.",
          tag: "Backshift",
          tagColor: "secondary",
          emoji: "🏫",
          options: ["went", "goes", "had gone", "go"],
          answer: "had gone",
          explanation: "Past Simple เปลี่ยนเป็น Past Perfect เมื่อ backshift"
        },
        {
          sentence: "\"I will call you tomorrow,\" he said. → He said he would call me ___.",
          tag: "Time Change",
          tagColor: "amber",
          emoji: "📞",
          options: ["tomorrow", "the next day", "today", "yesterday"],
          answer: "the next day",
          explanation: "tomorrow เปลี่ยนเป็น the next day เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"Do you like ice cream?\" she asked. → She asked ___ I liked ice cream.",
          tag: "Yes/No Question",
          tagColor: "purple",
          emoji: "🍦",
          options: ["that", "if", "what", "when"],
          answer: "if",
          explanation: "Reported Yes/No Question ใช้ if/whether เชื่อมประโยค"
        },
        {
          sentence: "\"I am here,\" he said. → He said he was ___.",
          tag: "Place Change",
          tagColor: "amber",
          emoji: "📍",
          options: ["here", "there", "this", "that"],
          answer: "there",
          explanation: "here เปลี่ยนเป็น there เมื่อเล่าคำพูด"
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
          sentence: "She ___ (tell) me she was busy.",
          tag: "Say vs Tell",
          tagColor: "blue",
          answer: "told",
          explanation: "tell ต้องมี object ตามหลังเสมอ (told me)"
        },
        {
          sentence: "\"I have finished my homework,\" he said. → He said he ___ (have) finished his homework.",
          tag: "Backshift",
          tagColor: "secondary",
          answer: "had",
          explanation: "Present Perfect เปลี่ยนเป็น Past Perfect เมื่อ backshift"
        },
        {
          sentence: "\"I will see you today,\" she said. → She said she would see me ___ (today).",
          tag: "Time Change",
          tagColor: "amber",
          answer: "that day",
          explanation: "today เปลี่ยนเป็น that day เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"Are you okay?\" he asked. → He asked ___ I was okay.",
          tag: "Yes/No Question",
          tagColor: "purple",
          answer: "if",
          explanation: "Reported Yes/No Question ใช้ if/whether"
        },
        {
          sentence: "\"This is my book,\" she said. → She said ___ was her book.",
          tag: "Word Change",
          tagColor: "amber",
          answer: "that",
          explanation: "this เปลี่ยนเป็น that เมื่อเล่าคำพูด"
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
          sentence: "He ___ his friend that he was hungry.",
          emoji: "🍔",
          options: ["told", "said"],
          answer: "told",
          explanation: "tell ต้องมี object (his friend) ตามหลัง"
        },
        {
          sentence: "\"I am reading a book,\" she said. → She said she ___ reading a book.",
          emoji: "📖",
          options: ["was", "is"],
          answer: "was",
          explanation: "Present Continuous เปลี่ยนเป็น Past Continuous"
        },
        {
          sentence: "\"Do you have a pen?\" he asked. → He asked ___ I had a pen.",
          emoji: "✏️",
          options: ["if", "that"],
          answer: "if",
          explanation: "Reported Yes/No Question ใช้ if"
        },
        {
          sentence: "\"I will go tomorrow,\" she said. → She said she would go ___.",
          emoji: "📅",
          options: ["the next day", "tomorrow"],
          answer: "the next day",
          explanation: "tomorrow เปลี่ยนเป็น the next day"
        },
        {
          sentence: "\"I bought this here,\" he said. → He said he had bought that ___.",
          emoji: "📍",
          options: ["there", "here"],
          answer: "there",
          explanation: "here เปลี่ยนเป็น there"
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
          wrong: "He said me he was tired.",
          tag: "Say vs Tell",
          tagColor: "blue",
          options: ["He told me he was tired.", "He says me he was tired.", "He said to me he was tired already."],
          answer: "He told me he was tired.",
          explanation: "say ไม่มี object ตามหลังโดยตรง ต้องใช้ tell + object"
        },
        {
          wrong: "She said she went to school.",
          tag: "Backshift",
          tagColor: "secondary",
          options: ["She said she had gone to school.", "She said she goes to school.", "She said she has went to school."],
          answer: "She said she had gone to school.",
          explanation: "Past Simple เปลี่ยนเป็น Past Perfect เมื่อ backshift"
        },
        {
          wrong: "He said he would call me tomorrow. (reported the next day)",
          tag: "Time Change",
          tagColor: "amber",
          options: ["He said he would call me the next day.", "He said he will call me tomorrow.", "He said he would call me today."],
          answer: "He said he would call me the next day.",
          explanation: "tomorrow ต้องเปลี่ยนเป็น the next day เมื่อเล่าคำพูด"
        },
        {
          wrong: "She asked that I liked ice cream.",
          tag: "Yes/No Question",
          tagColor: "purple",
          options: ["She asked if I liked ice cream.", "She asked do I like ice cream.", "She asked I liked ice cream."],
          answer: "She asked if I liked ice cream.",
          explanation: "Reported Yes/No Question ต้องใช้ if/whether ไม่ใช่ that"
        },
        {
          wrong: "He said he was here.",
          tag: "Place Change",
          tagColor: "amber",
          options: ["He said he was there.", "He said he is here.", "He said he were here."],
          answer: "He said he was there.",
          explanation: "here ต้องเปลี่ยนเป็น there เมื่อเล่าคำพูด"
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
          sentence: "She ___ him that she was busy.",
          bank: ["told", "said", "tells"],
          answer: "told",
          explanation: "tell ต้องมี object ตามหลัง"
        },
        {
          sentence: "\"I am watching TV,\" he said. → He said he ___ watching TV.",
          bank: ["was", "is", "were"],
          answer: "was",
          explanation: "Present Continuous เปลี่ยนเป็น Past Continuous"
        },
        {
          sentence: "\"Are you busy?\" she asked. → She asked ___ I was busy.",
          bank: ["if", "that", "what"],
          answer: "if",
          explanation: "Reported Yes/No Question ใช้ if"
        },
        {
          sentence: "\"I saw you yesterday,\" he said. → He said he had seen me ___.",
          bank: ["the day before", "yesterday", "today"],
          answer: "the day before",
          explanation: "yesterday เปลี่ยนเป็น the day before เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"This is my pen,\" she said. → She said ___ was her pen.",
          bank: ["that", "this", "it"],
          answer: "that",
          explanation: "this เปลี่ยนเป็น that เมื่อเล่าคำพูด"
        }
      ]
    }
  ]
};
