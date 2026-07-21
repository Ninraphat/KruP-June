const EXERCISE = {
  title: "Prepositions",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Prepositions",
  titleAccent: "",
  emoji: "📍",
  subtitle: "ฝึก Preposition of Movement, Time เพิ่มเติม และ Verb + Preposition",
  accentColor: "blue",
  contentPage: "c-prepositions-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "The cat jumped ___ the box.",
          tag: "Movement",
          tagColor: "blue",
          emoji: "📦",
          options: ["into", "out of", "through", "along"],
          answer: "into",
          explanation: "into ใช้บอกการเคลื่อนที่เข้าไปข้างใน"
        },
        {
          sentence: "I have lived here ___ five years.",
          tag: "Time",
          tagColor: "secondary",
          emoji: "🏠",
          options: ["since", "for", "during", "at"],
          answer: "for",
          explanation: "for ใช้กับระยะเวลา (five years)"
        },
        {
          sentence: "She has worked here ___ 2020.",
          tag: "Time",
          tagColor: "secondary",
          emoji: "💼",
          options: ["for", "since", "during", "in"],
          answer: "since",
          explanation: "since ใช้กับจุดเริ่มต้นของเวลา"
        },
        {
          sentence: "I ___ music every day.",
          tag: "Verb + Prep",
          tagColor: "amber",
          emoji: "🎵",
          options: ["listen to", "listen at", "listen for", "listen"],
          answer: "listen to",
          explanation: "listen ต้องตามด้วย to เสมอ"
        },
        {
          sentence: "Wash your hands before ___.",
          tag: "Prep + Gerund",
          tagColor: "purple",
          emoji: "🍽️",
          options: ["eat", "eating", "to eat", "ate"],
          answer: "eating",
          explanation: "หลัง preposition (before) ต้องใช้ V-ing เสมอ"
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
          sentence: "He ran ___ (out of) the burning building.",
          tag: "Movement",
          tagColor: "blue",
          answer: "out of",
          explanation: "out of ใช้บอกการเคลื่อนที่ออกจากข้างใน"
        },
        {
          sentence: "We drove ___ (through) the tunnel.",
          tag: "Movement",
          tagColor: "blue",
          answer: "through",
          explanation: "through ใช้บอกการเคลื่อนที่ผ่านตรงกลาง"
        },
        {
          sentence: "I fell asleep ___ (during) the movie.",
          tag: "Time",
          tagColor: "secondary",
          answer: "during",
          explanation: "during ใช้กับช่วงเวลา/เหตุการณ์"
        },
        {
          sentence: "We ___ (wait for) the bus every morning.",
          tag: "Verb + Prep",
          tagColor: "amber",
          answer: "wait for",
          explanation: "wait ต้องตามด้วย for เสมอ"
        },
        {
          sentence: "She felt tired after ___ (run).",
          tag: "Prep + Gerund",
          tagColor: "purple",
          answer: "running",
          explanation: "หลัง preposition (after) ต้องใช้ V-ing"
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
          sentence: "The dog ran ___ the park.",
          emoji: "🐕",
          options: ["into", "along"],
          answer: "into",
          explanation: "into ใช้บอกการเคลื่อนที่เข้าไปข้างใน"
        },
        {
          sentence: "They walked ___ the beach.",
          emoji: "🏖️",
          options: ["along", "into"],
          answer: "along",
          explanation: "along ใช้บอกการเดินไปตามแนว"
        },
        {
          sentence: "I ___ the picture on the wall.",
          emoji: "🖼️",
          options: ["look at", "look for"],
          answer: "look at",
          explanation: "look ต้องตามด้วย at เมื่อหมายถึงมองดู"
        },
        {
          sentence: "We arrived ___ the airport at noon.",
          emoji: "✈️",
          options: ["at", "to"],
          answer: "at",
          explanation: "arrive ตามด้วย at สำหรับสถานที่เล็ก เช่นสนามบิน"
        },
        {
          sentence: "She swam ___ the river.",
          emoji: "🏊",
          options: ["across", "into"],
          answer: "across",
          explanation: "across ใช้บอกการข้ามผ่าน"
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
          wrong: "The cat jumped in the box quickly moving.",
          tag: "Movement",
          tagColor: "blue",
          options: ["The cat jumped into the box.", "The cat jumped to the box.", "The cat jumped on the box moving."],
          answer: "The cat jumped into the box.",
          explanation: "การเคลื่อนที่เข้าไปข้างในใช้ into ไม่ใช่ in"
        },
        {
          wrong: "I have lived here since five years.",
          tag: "Time",
          tagColor: "secondary",
          options: ["I have lived here for five years.", "I have lived here during five years.", "I have lived here at five years."],
          answer: "I have lived here for five years.",
          explanation: "for ใช้กับระยะเวลา ส่วน since ใช้กับจุดเริ่มต้น"
        },
        {
          wrong: "She has worked here for 2020.",
          tag: "Time",
          tagColor: "secondary",
          options: ["She has worked here since 2020.", "She has worked here during 2020.", "She has worked here in 2020 for."],
          answer: "She has worked here since 2020.",
          explanation: "since ใช้กับจุดเริ่มต้นของเวลา (ปี 2020)"
        },
        {
          wrong: "I listen music every day.",
          tag: "Verb + Prep",
          tagColor: "amber",
          options: ["I listen to music every day.", "I listen at music every day.", "I listen for music every day."],
          answer: "I listen to music every day.",
          explanation: "listen ต้องตามด้วย to เสมอ"
        },
        {
          wrong: "Wash your hands before to eat.",
          tag: "Prep + Gerund",
          tagColor: "purple",
          options: ["Wash your hands before eating.", "Wash your hands before eat.", "Wash your hands before ate."],
          answer: "Wash your hands before eating.",
          explanation: "หลัง preposition ต้องใช้ V-ing ไม่ใช่ to + V1"
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
          sentence: "He walked ___ the crowded street.",
          bank: ["through", "into", "at"],
          answer: "through",
          explanation: "through ใช้บอกการเคลื่อนที่ผ่านตรงกลาง"
        },
        {
          sentence: "She has studied English ___ she was young.",
          bank: ["since", "for", "during"],
          answer: "since",
          explanation: "since ใช้กับจุดเริ่มต้นของเวลา"
        },
        {
          sentence: "They talked ___ the break.",
          bank: ["during", "for", "since"],
          answer: "during",
          explanation: "during ใช้กับช่วงเวลา/เหตุการณ์"
        },
        {
          sentence: "I ___ the answer before checking.",
          bank: ["look for", "look to", "look on"],
          answer: "look for",
          explanation: "look ต้องตามด้วย for เมื่อหมายถึงค้นหา"
        },
        {
          sentence: "She got tired after ___.",
          bank: ["swimming", "swim", "to swim"],
          answer: "swimming",
          explanation: "หลัง preposition (after) ต้องใช้ V-ing"
        }
      ]
    }
  ]
};
