const EXERCISE = {
  title: "Conjunctions",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🔗",
  subtitle: "ฝึก Subordinating Conjunction, Time Conjunction, Comma Rules และ FANBOYS",
  accentColor: "blue",
  contentPage: "c-conjunctions-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำเชื่อมที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "I stayed home ___ it was raining.",
          tag: "Subordinating",
          tagColor: "blue",
          emoji: "🌧️",
          options: ["because", "and", "but", "or"],
          answer: "because",
          explanation: "because ใช้บอกเหตุผล"
        },
        {
          sentence: "___ she was tired, she finished her homework.",
          tag: "Subordinating",
          tagColor: "blue",
          emoji: "📚",
          options: ["Because", "Although", "When", "If"],
          answer: "Although",
          explanation: "although ใช้แสดงความขัดแย้ง (แม้ว่า)"
        },
        {
          sentence: "___ I got home, it started to rain.",
          tag: "Time",
          tagColor: "secondary",
          emoji: "🏠",
          options: ["As soon as", "Because", "So", "But"],
          answer: "As soon as",
          explanation: "as soon as ใช้บอกว่าทันทีที่เหตุการณ์หนึ่งเกิดขึ้น"
        },
        {
          sentence: "___ it was raining, I stayed home.",
          tag: "Comma Rule",
          tagColor: "amber",
          emoji: "☔",
          options: ["Because,", "Because", "So", "And"],
          answer: "Because",
          explanation: "เมื่อ subordinate clause ขึ้นต้นประโยค ต้องมี comma หลัง clause นั้น ไม่ใช่หลังคำเชื่อม"
        },
        {
          sentence: "It's expensive, ___ worth buying.",
          tag: "FANBOYS",
          tagColor: "purple",
          emoji: "💰",
          options: ["yet", "nor", "for", "so"],
          answer: "yet",
          explanation: "yet แปลว่าแต่กระนั้น เป็นหนึ่งใน FANBOYS"
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
          sentence: "I was cooking ___ (when) she arrived.",
          tag: "Subordinating",
          tagColor: "blue",
          answer: "when",
          explanation: "when ใช้เชื่อมเหตุการณ์ที่เกิดขึ้นพร้อมกัน"
        },
        {
          sentence: "___ (While) I was reading, my brother was sleeping.",
          tag: "Subordinating",
          tagColor: "blue",
          answer: "While",
          explanation: "while ใช้เชื่อมสองเหตุการณ์ที่เกิดพร้อมกัน"
        },
        {
          sentence: "Wash your hands ___ (before) you eat.",
          tag: "Time",
          tagColor: "secondary",
          answer: "before",
          explanation: "before ใช้บอกลำดับเวลาก่อน"
        },
        {
          sentence: "I don't like tea, ___ (nor) do I like coffee.",
          tag: "FANBOYS",
          tagColor: "purple",
          answer: "nor",
          explanation: "nor ใช้เชื่อมประโยคปฏิเสธสองประโยค"
        },
        {
          sentence: "She left early, ___ (for) she was tired.",
          tag: "FANBOYS",
          tagColor: "purple",
          answer: "for",
          explanation: "for ใช้บอกเหตุผลแบบ formal"
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
          sentence: "I felt happy ___ I got the gift.",
          emoji: "🎁",
          options: ["when", "although"],
          answer: "when",
          explanation: "when ใช้เชื่อมเหตุการณ์ที่เกิดขึ้นพร้อมกัน"
        },
        {
          sentence: "___ it was cold, we went swimming.",
          emoji: "🏊",
          options: ["Although", "Because"],
          answer: "Although",
          explanation: "although ใช้แสดงความขัดแย้ง (แม้ว่าจะหนาว)"
        },
        {
          sentence: "___ I finish my homework, I will play games.",
          emoji: "🎮",
          options: ["As soon as", "Yet"],
          answer: "As soon as",
          explanation: "as soon as ใช้บอกว่าทันทีที่เหตุการณ์เกิดขึ้น"
        },
        {
          sentence: "I ate breakfast ___ I went to school.",
          emoji: "🍳",
          options: ["before", "so"],
          answer: "before",
          explanation: "before ใช้บอกลำดับเวลาก่อน"
        },
        {
          sentence: "He is quiet, ___ smart.",
          emoji: "🤫",
          options: ["yet", "nor"],
          answer: "yet",
          explanation: "yet แปลว่าแต่กระนั้น (เงียบแต่ฉลาด)"
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
          wrong: "I stayed home and it was raining. (meaning: reason)",
          tag: "Subordinating",
          tagColor: "blue",
          options: ["I stayed home because it was raining.", "I stayed home so it was raining.", "I stayed home but it was raining."],
          answer: "I stayed home because it was raining.",
          explanation: "because ใช้บอกเหตุผล ไม่ใช่ and"
        },
        {
          wrong: "Because it was raining I stayed home.",
          tag: "Comma Rule",
          tagColor: "amber",
          options: ["Because it was raining, I stayed home.", "Because, it was raining I stayed home.", "Because it was, raining I stayed home."],
          answer: "Because it was raining, I stayed home.",
          explanation: "เมื่อ subordinate clause ขึ้นต้นประโยค ต้องมี comma หลัง clause นั้น"
        },
        {
          wrong: "Although she was tired but she finished her homework.",
          tag: "Subordinating",
          tagColor: "blue",
          options: ["Although she was tired, she finished her homework.", "Although she was tired, but she finished her homework.", "She was tired although she finished her homework wrong."],
          answer: "Although she was tired, she finished her homework.",
          explanation: "ห้ามใช้ although และ but ซ้ำกันในประโยคเดียว"
        },
        {
          wrong: "I don't like tea, or do I like coffee.",
          tag: "FANBOYS",
          tagColor: "purple",
          options: ["I don't like tea, nor do I like coffee.", "I don't like tea, but do I like coffee.", "I don't like tea, so do I like coffee."],
          answer: "I don't like tea, nor do I like coffee.",
          explanation: "nor ใช้เชื่อมประโยคปฏิเสธสองประโยค ไม่ใช่ or"
        },
        {
          wrong: "As soon I got home, it started to rain.",
          tag: "Time",
          tagColor: "secondary",
          options: ["As soon as I got home, it started to rain.", "As soon that I got home, it started to rain.", "Soon as I got home, it started to rain."],
          answer: "As soon as I got home, it started to rain.",
          explanation: "โครงสร้างที่ถูกต้องคือ as soon as (มี as สองครั้ง)"
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
          sentence: "I will call you ___ I arrive.",
          bank: ["when", "although", "for"],
          answer: "when",
          explanation: "when ใช้เชื่อมเหตุการณ์ตามเวลา"
        },
        {
          sentence: "___ he studied hard, he failed the exam.",
          bank: ["Although", "Because", "So"],
          answer: "Although",
          explanation: "although ใช้แสดงความขัดแย้ง"
        },
        {
          sentence: "Lock the door ___ you leave.",
          bank: ["before", "so", "yet"],
          answer: "before",
          explanation: "before ใช้บอกลำดับเวลาก่อน"
        },
        {
          sentence: "She was sick, ___ she stayed home.",
          bank: ["so", "yet", "nor"],
          answer: "so",
          explanation: "so ใช้บอกผลลัพธ์ (เป็นหนึ่งใน FANBOYS)"
        },
        {
          sentence: "___ my brother was studying, I was watching TV.",
          bank: ["While", "Because", "If"],
          answer: "While",
          explanation: "while ใช้เชื่อมสองเหตุการณ์ที่เกิดพร้อมกัน"
        }
      ]
    }
  ]
};
