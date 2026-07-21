const EXERCISE = {
  title: "Conjunctions",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Conjunctions",
  titleAccent: "",
  emoji: "🔗",
  subtitle: "ฝึกทำแบบฝึกหัดคำเชื่อม And, But, Or, So แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-conjunctions-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำเชื่อมที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "I like apples ___ bananas.",
          tag: "And",
          tagColor: "blue",
          emoji: "🍎",
          options: ["and", "but", "or", "so"],
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
        },
        {
          sentence: "She is small ___ strong.",
          tag: "But",
          tagColor: "secondary",
          emoji: "💪",
          options: ["and", "but", "or", "so"],
          answer: "but",
          explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน"
        },
        {
          sentence: "Do you want tea ___ coffee?",
          tag: "Or",
          tagColor: "amber",
          emoji: "☕",
          options: ["and", "but", "or", "so"],
          answer: "or",
          explanation: "or ใช้เชื่อมเมื่อมีทางเลือก"
        },
        {
          sentence: "It was raining, ___ we stayed home.",
          tag: "So",
          tagColor: "purple",
          emoji: "🌧️",
          options: ["and", "but", "or", "so"],
          answer: "so",
          explanation: "so ใช้บอกผลลัพธ์ที่ตามมา"
        },
        {
          sentence: "I have a cat ___ a dog.",
          tag: "And",
          tagColor: "blue",
          emoji: "🐱",
          options: ["and", "but", "or", "so"],
          answer: "and",
          explanation: "and ใช้เชื่อมสองสิ่งที่มีเพิ่มเติมกัน"
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
          sentence: "He is happy ___ (and) excited.",
          tag: "And",
          tagColor: "blue",
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
        },
        {
          sentence: "I want to play, ___ (but) I have homework.",
          tag: "But",
          tagColor: "secondary",
          answer: "but",
          explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน"
        },
        {
          sentence: "Do you want juice ___ (or) milk?",
          tag: "Or",
          tagColor: "amber",
          answer: "or",
          explanation: "or ใช้เชื่อมเมื่อมีทางเลือก"
        },
        {
          sentence: "I was hungry, ___ (so) I ate a snack.",
          tag: "So",
          tagColor: "purple",
          answer: "so",
          explanation: "so ใช้บอกผลลัพธ์ที่ตามมา"
        },
        {
          sentence: "She likes dogs ___ (and) cats.",
          tag: "And",
          tagColor: "blue",
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
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
          sentence: "I have a pencil ___ an eraser.",
          emoji: "✏️",
          options: ["and", "but"],
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
        },
        {
          sentence: "The cake is small ___ delicious.",
          emoji: "🍰",
          options: ["but", "and"],
          answer: "but",
          explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน (เล็กแต่อร่อย)"
        },
        {
          sentence: "Do you want a red ___ blue balloon?",
          emoji: "🎈",
          options: ["or", "and"],
          answer: "or",
          explanation: "or ใช้เชื่อมเมื่อมีทางเลือก"
        },
        {
          sentence: "I was tired, ___ I slept early.",
          emoji: "😴",
          options: ["so", "or"],
          answer: "so",
          explanation: "so ใช้บอกผลลัพธ์ที่ตามมา"
        },
        {
          sentence: "She has a ball ___ a bat.",
          emoji: "⚾",
          options: ["and", "or"],
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
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
          wrong: "I like apples but bananas.",
          tag: "And",
          tagColor: "blue",
          options: ["I like apples and bananas.", "I like apples or bananas wrong.", "I like apples so bananas."],
          answer: "I like apples and bananas.",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน ไม่ใช่ but"
        },
        {
          wrong: "She is small and strong meaning contrast.",
          tag: "But",
          tagColor: "secondary",
          options: ["She is small but strong.", "She is small or strong.", "She is small so strong."],
          answer: "She is small but strong.",
          explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน"
        },
        {
          wrong: "Do you want tea and coffee choice.",
          tag: "Or",
          tagColor: "amber",
          options: ["Do you want tea or coffee?", "Do you want tea but coffee?", "Do you want tea so coffee?"],
          answer: "Do you want tea or coffee?",
          explanation: "or ใช้เชื่อมเมื่อมีทางเลือก ไม่ใช่ and"
        },
        {
          wrong: "It was raining, but we stayed home result.",
          tag: "So",
          tagColor: "purple",
          options: ["It was raining, so we stayed home.", "It was raining, and we stayed home.", "It was raining, or we stayed home."],
          answer: "It was raining, so we stayed home.",
          explanation: "so ใช้บอกผลลัพธ์ที่ตามมา ไม่ใช่ but"
        },
        {
          wrong: "I have a cat or a dog. (meaning: I have both)",
          tag: "And",
          tagColor: "blue",
          options: ["I have a cat and a dog.", "I have a cat but a dog.", "I have a cat so a dog."],
          answer: "I have a cat and a dog.",
          explanation: "and ใช้เชื่อมสิ่งที่มีทั้งสองอย่าง"
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
          sentence: "I have a book ___ a pen.",
          bank: ["and", "but", "or"],
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
        },
        {
          sentence: "He is young ___ smart.",
          bank: ["but", "and", "so"],
          answer: "but",
          explanation: "but ใช้เชื่อมสิ่งที่ตรงข้ามกัน"
        },
        {
          sentence: "Do you want a cookie ___ a candy?",
          bank: ["or", "and", "so"],
          answer: "or",
          explanation: "or ใช้เชื่อมเมื่อมีทางเลือก"
        },
        {
          sentence: "I was sleepy, ___ I went to bed.",
          bank: ["so", "but", "or"],
          answer: "so",
          explanation: "so ใช้บอกผลลัพธ์ที่ตามมา"
        },
        {
          sentence: "She has pencils ___ crayons.",
          bank: ["and", "or", "but"],
          answer: "and",
          explanation: "and ใช้เชื่อมสิ่งที่เพิ่มเติมกัน"
        }
      ]
    }
  ]
};
