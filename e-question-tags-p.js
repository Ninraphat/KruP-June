const EXERCISE = {
  title: "Question Tags",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Question",
  titleAccent: "Tags",
  emoji: "❓",
  subtitle: "ฝึกทำแบบฝึกหัด Question Tag กับ Verb to be และ Can",
  accentColor: "blue",
  contentPage: "c-question-tags-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือก Question Tag ที่ถูกต้อง",
      questions: [
        {
          sentence: "She is happy, ___?",
          tag: "Verb to be",
          tagColor: "blue",
          emoji: "😊",
          options: ["isn't she", "is she", "isn't it", "aren't she"],
          answer: "isn't she",
          explanation: "is (บอกเล่า) → isn't she (tag ปฏิเสธ)"
        },
        {
          sentence: "They are students, ___?",
          tag: "Verb to be",
          tagColor: "blue",
          emoji: "🎓",
          options: ["are they", "aren't they", "isn't they", "don't they"],
          answer: "aren't they",
          explanation: "are (บอกเล่า) → aren't they (tag ปฏิเสธ)"
        },
        {
          sentence: "You can swim, ___?",
          tag: "Can",
          tagColor: "secondary",
          emoji: "🏊",
          options: ["can you", "can't you", "don't you", "aren't you"],
          answer: "can't you",
          explanation: "can (บอกเล่า) → can't you (tag ปฏิเสธ)"
        },
        {
          sentence: "He can speak English, ___?",
          tag: "Can",
          tagColor: "secondary",
          emoji: "🗣️",
          options: ["can he", "can't he", "does he", "isn't he"],
          answer: "can't he",
          explanation: "can (บอกเล่า) → can't he (tag ปฏิเสธ)"
        },
        {
          sentence: "We are friends, ___?",
          tag: "Verb to be",
          tagColor: "blue",
          emoji: "🤝",
          options: ["are we", "aren't we", "isn't we", "don't we"],
          answer: "aren't we",
          explanation: "are (บอกเล่า) → aren't we (tag ปฏิเสธ)"
        }
      ]
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์ Question Tag ที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "He is tall, ___ (isn't he)?",
          tag: "Verb to be",
          tagColor: "blue",
          answer: "isn't he",
          explanation: "is (บอกเล่า) → isn't he"
        },
        {
          sentence: "You are hungry, ___ (aren't you)?",
          tag: "Verb to be",
          tagColor: "blue",
          answer: "aren't you",
          explanation: "are (บอกเล่า) → aren't you"
        },
        {
          sentence: "She can dance, ___ (can't she)?",
          tag: "Can",
          tagColor: "secondary",
          answer: "can't she",
          explanation: "can (บอกเล่า) → can't she"
        },
        {
          sentence: "It is a cat, ___ (isn't it)?",
          tag: "Verb to be",
          tagColor: "blue",
          answer: "isn't it",
          explanation: "is (บอกเล่า) → isn't it"
        },
        {
          sentence: "They can jump high, ___ (can't they)?",
          tag: "Can",
          tagColor: "secondary",
          answer: "can't they",
          explanation: "can (บอกเล่า) → can't they"
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
          sentence: "The cat is cute, ___?",
          emoji: "🐱",
          options: ["isn't it", "is it"],
          answer: "isn't it",
          explanation: "is (บอกเล่า) → isn't it"
        },
        {
          sentence: "You can ride a bike, ___?",
          emoji: "🚲",
          options: ["can't you", "can you"],
          answer: "can't you",
          explanation: "can (บอกเล่า) → can't you"
        },
        {
          sentence: "The flowers are pretty, ___?",
          emoji: "🌸",
          options: ["aren't they", "are they"],
          answer: "aren't they",
          explanation: "are (บอกเล่า) → aren't they"
        },
        {
          sentence: "He can play the piano, ___?",
          emoji: "🎹",
          options: ["can't he", "can he"],
          answer: "can't he",
          explanation: "can (บอกเล่า) → can't he"
        },
        {
          sentence: "She is a doctor, ___?",
          emoji: "👩‍⚕️",
          options: ["isn't she", "is she"],
          answer: "isn't she",
          explanation: "is (บอกเล่า) → isn't she"
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
          wrong: "She is happy, is she?",
          tag: "Verb to be",
          tagColor: "blue",
          options: ["She is happy, isn't she?", "She is happy, aren't she?", "She is happy, doesn't she?"],
          answer: "She is happy, isn't she?",
          explanation: "is บอกเล่า ต้องใช้ tag ปฏิเสธ isn't she ไม่ใช่ is she"
        },
        {
          wrong: "They are students, isn't they?",
          tag: "Verb to be",
          tagColor: "blue",
          options: ["They are students, aren't they?", "They are students, are they?", "They are students, don't they?"],
          answer: "They are students, aren't they?",
          explanation: "are ใช้คู่กับ aren't ไม่ใช่ isn't"
        },
        {
          wrong: "You can swim, do you?",
          tag: "Can",
          tagColor: "secondary",
          options: ["You can swim, can't you?", "You can swim, can you?", "You can swim, aren't you?"],
          answer: "You can swim, can't you?",
          explanation: "can บอกเล่า ต้องใช้ tag ปฏิเสธ can't you"
        },
        {
          wrong: "He can speak English, isn't he?",
          tag: "Can",
          tagColor: "secondary",
          options: ["He can speak English, can't he?", "He can speak English, doesn't he?", "He can speak English, can he?"],
          answer: "He can speak English, can't he?",
          explanation: "can ใช้คู่กับ can't ไม่ใช่ isn't"
        },
        {
          wrong: "We are friends, are we?",
          tag: "Verb to be",
          tagColor: "blue",
          options: ["We are friends, aren't we?", "We are friends, isn't we?", "We are friends, don't we?"],
          answer: "We are friends, aren't we?",
          explanation: "are บอกเล่า ต้องใช้ tag ปฏิเสธ aren't we"
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
          sentence: "The dog is big, ___?",
          bank: ["isn't it", "is it", "doesn't it"],
          answer: "isn't it",
          explanation: "is บอกเล่า → isn't it"
        },
        {
          sentence: "You are my friend, ___?",
          bank: ["aren't you", "are you", "isn't you"],
          answer: "aren't you",
          explanation: "are บอกเล่า → aren't you"
        },
        {
          sentence: "She can sing, ___?",
          bank: ["can't she", "can she", "isn't she"],
          answer: "can't she",
          explanation: "can บอกเล่า → can't she"
        },
        {
          sentence: "They are happy, ___?",
          bank: ["aren't they", "are they", "isn't they"],
          answer: "aren't they",
          explanation: "are บอกเล่า → aren't they"
        },
        {
          sentence: "I can run fast, ___?",
          bank: ["can't I", "can I", "am I not"],
          answer: "can't I",
          explanation: "can บอกเล่า → can't I"
        }
      ]
    }
  ]
};
