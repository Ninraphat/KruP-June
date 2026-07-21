const EXERCISE = {
  title: "Present Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "📘",
  subtitle: "ฝึก Stative Verbs, Present Perfect และ Present Continuous สำหรับอนาคต",
  accentColor: "blue",
  contentPage: "c-present-tenses-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาหรือคำที่เข้ากับประโยค",
      questions: [
        {
          sentence: "I ___ what you mean.",
          tag: "Stative",
          tagColor: "blue",
          emoji: "🤔",
          options: ["understand", "am understanding", "understands", "understanding"],
          answer: "understand",
          explanation: "understand เป็น stative verb ไม่ใช้รูป -ing"
        },
        {
          sentence: "___ you ever been to London?",
          tag: "Perfect",
          tagColor: "secondary",
          emoji: "✈️",
          options: ["Do", "Are", "Have", "Did"],
          answer: "Have",
          explanation: "ประโยคคำถาม Present Perfect ใช้ Have/Has ขึ้นต้น กับ ever แปลว่า 'เคย...ไหม'"
        },
        {
          sentence: "She has ___ finished her project.",
          tag: "Perfect",
          tagColor: "secondary",
          emoji: "📊",
          options: ["yet", "already", "for", "since"],
          answer: "already",
          explanation: "already ใช้ในประโยคบอกเล่า แปลว่า 'แล้ว'"
        },
        {
          sentence: "They have been waiting ___ two hours.",
          tag: "Perfect Continuous",
          tagColor: "purple",
          emoji: "⏰",
          options: ["since", "for", "ago", "yet"],
          answer: "for",
          explanation: "for ใช้กับระยะเวลา (two hours) ส่วน since ใช้กับจุดเริ่มต้น"
        },
        {
          sentence: "I ___ to the dentist tomorrow at 3 PM.",
          tag: "Future Arrangement",
          tagColor: "amber",
          emoji: "📅",
          options: ["go", "went", "am going", "have gone"],
          answer: "am going",
          explanation: "Present Continuous ใช้พูดถึงแผนที่นัดหมายไว้แล้วในอนาคตเมื่อมีเวลาระบุชัดเจน"
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
          sentence: "This bag ___ (belong) to my sister.",
          tag: "Stative",
          tagColor: "blue",
          answer: "belongs",
          explanation: "belong เป็น stative verb ไม่ใช้ -ing ประธาน This bag เอกพจน์เติม s"
        },
        {
          sentence: "We have ___ (already/for) done our homework.",
          tag: "Perfect",
          tagColor: "secondary",
          answer: "already",
          explanation: "already ใช้ในประโยคบอกเล่า แปลว่า 'แล้ว' ไม่ใช่ for ที่ใช้กับระยะเวลา"
        },
        {
          sentence: "She has been living here ___ (for/since) 2019.",
          tag: "Perfect Continuous",
          tagColor: "purple",
          answer: "since",
          explanation: "since ใช้กับจุดเริ่มต้นของเวลา เช่น ปี 2019"
        },
        {
          sentence: "I have ___ (never/yet) eaten durian.",
          tag: "Perfect",
          tagColor: "secondary",
          answer: "never",
          explanation: "never แปลว่า 'ไม่เคย' ใช้ในประโยคบอกเล่าเชิงปฏิเสธ"
        },
        {
          sentence: "We ___ (meet) our teacher tomorrow at 9 AM.",
          tag: "Future Arrangement",
          tagColor: "amber",
          answer: "are meeting",
          explanation: "ใช้ Present Continuous พูดถึงแผนที่นัดหมายไว้แล้วในอนาคต"
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
          sentence: "I ___ this song. It's beautiful.",
          emoji: "🎵",
          options: ["love", "am loving"],
          answer: "love",
          explanation: "love เป็น stative verb แสดงความรู้สึก ไม่ใช้รูป -ing"
        },
        {
          sentence: "She ___ her homework already.",
          emoji: "✅",
          options: ["has finished", "finished since"],
          answer: "has finished",
          explanation: "Present Perfect + already ใช้บอกว่าทำเสร็จแล้ว"
        },
        {
          sentence: "He ___ for the bus for 20 minutes.",
          emoji: "🚌",
          options: ["has been waiting", "waits"],
          answer: "has been waiting",
          explanation: "Present Perfect Continuous เน้นระยะเวลาที่ทำต่อเนื่อง (20 minutes)"
        },
        {
          sentence: "This box ___ to me.",
          emoji: "📦",
          options: ["belongs", "is belonging"],
          answer: "belongs",
          explanation: "belong เป็น stative verb ไม่ใช้ -ing"
        },
        {
          sentence: "We ___ to the beach next weekend.",
          emoji: "🏖️",
          options: ["are going", "go"],
          answer: "are going",
          explanation: "Present Continuous ใช้พูดถึงแผนที่นัดหมายไว้แล้วในอนาคต (next weekend)"
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
          wrong: "I am knowing the answer.",
          tag: "Stative",
          tagColor: "blue",
          options: ["I know the answer.", "I knows the answer.", "I am know the answer."],
          answer: "I know the answer.",
          explanation: "know เป็น stative verb ไม่ใช้รูป -ing"
        },
        {
          wrong: "Have you finish your homework yet?",
          tag: "Perfect",
          tagColor: "secondary",
          options: ["Have you finished your homework yet?", "Did you finished your homework yet?", "Have you finishing your homework yet?"],
          answer: "Have you finished your homework yet?",
          explanation: "โครงสร้าง Present Perfect ต้องเป็น have/has + V3"
        },
        {
          wrong: "She has been studying English since three years.",
          tag: "Perfect Continuous",
          tagColor: "purple",
          options: ["She has been studying English for three years.", "She has study English since three years.", "She is studying English since three years."],
          answer: "She has been studying English for three years.",
          explanation: "for ใช้กับระยะเวลา (three years) ส่วน since ใช้กับจุดเริ่มต้นของเวลา"
        },
        {
          wrong: "I have ever been to Japan.",
          tag: "Perfect",
          tagColor: "secondary",
          options: ["I have never been to Japan.", "I have been ever to Japan.", "I ever have been to Japan."],
          answer: "I have never been to Japan.",
          explanation: "ever ใช้ในประโยคคำถาม ส่วนประโยคบอกเล่าเชิงปฏิเสธใช้ never"
        },
        {
          wrong: "We meet our teacher tomorrow at 9 AM.",
          tag: "Future Arrangement",
          tagColor: "amber",
          options: ["We are meeting our teacher tomorrow at 9 AM.", "We meets our teacher tomorrow at 9 AM.", "We met our teacher tomorrow at 9 AM."],
          answer: "We are meeting our teacher tomorrow at 9 AM.",
          explanation: "แผนที่นัดหมายไว้แล้วในอนาคตใช้ Present Continuous ไม่ใช่ Present Simple"
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
          sentence: "I ___ a headache right now.",
          bank: ["have", "am having", "has"],
          answer: "have",
          explanation: "have ในความหมาย 'ป่วยเป็น/มีอาการ' เป็น stative ไม่ใช้ -ing"
        },
        {
          sentence: "She has ___ visited Paris three times.",
          bank: ["already", "since", "for"],
          answer: "already",
          explanation: "already ใช้กับ Present Perfect ในประโยคบอกเล่า"
        },
        {
          sentence: "We have known each other ___ we were kids.",
          bank: ["since", "for", "already"],
          answer: "since",
          explanation: "since ใช้กับจุดเริ่มต้นของเวลา (we were kids)"
        },
        {
          sentence: "Have you ___ tried Thai food?",
          bank: ["ever", "never", "yet"],
          answer: "ever",
          explanation: "ever ใช้ในประโยคคำถาม แปลว่า 'เคย...ไหม'"
        },
        {
          sentence: "I ___ my grandma this Sunday.",
          bank: ["am visiting", "visit", "visits"],
          answer: "am visiting",
          explanation: "Present Continuous ใช้พูดถึงแผนที่นัดหมายไว้แล้วในอนาคต (this Sunday)"
        }
      ]
    }
  ]
};
