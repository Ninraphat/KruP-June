const EXERCISE = {
  title: "Non-Finite Verbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🎓",
  subtitle: "ฝึกกริยาเปลี่ยนความหมาย, Participle Adjective, Participle Clause และ Perfect Gerund/Infinitive",
  accentColor: "blue",
  contentPage: "c-non-finite-verbs-h.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปประโยคที่เหมาะสมกับบริบท",
      questions: [
        {
          sentence: "I regret ___ her the truth. (I already told her)",
          tag: "Meaning Change",
          tagColor: "blue",
          emoji: "💬",
          options: ["telling", "to tell", "tell", "told"],
          answer: "telling",
          explanation: "regret + V-ing = เสียใจกับสิ่งที่ทำไปแล้ว"
        },
        {
          sentence: "The movie was so ___ that I fell asleep.",
          tag: "Participle Adjective",
          tagColor: "secondary",
          emoji: "😴",
          options: ["boring", "bored", "bore", "bores"],
          answer: "boring",
          explanation: "-ing ใช้อธิบายสิ่งที่ทำให้เกิดความรู้สึก (หนังทำให้รู้สึกน่าเบื่อ)"
        },
        {
          sentence: "___ down the street, I saw an old friend.",
          tag: "Participle Clause",
          tagColor: "purple",
          emoji: "🚶",
          options: ["Walk", "Walking", "Walked", "To walk"],
          answer: "Walking",
          explanation: "Participle Clause ใช้ V-ing ขึ้นต้นประโยคเมื่อประธานเป็นผู้กระทำ"
        },
        {
          sentence: "___ his homework, he went out to play.",
          tag: "Perfect Gerund",
          tagColor: "amber",
          emoji: "📚",
          options: ["Finishing", "Having finished", "Finished", "To finish"],
          answer: "Having finished",
          explanation: "Perfect Gerund (having + V3) เน้นว่าเหตุการณ์นี้เกิดขึ้นก่อนเหตุการณ์หลัก"
        },
        {
          sentence: "Remember ___ the door before you leave!",
          tag: "Meaning Change",
          tagColor: "blue",
          emoji: "🚪",
          options: ["locking", "to lock", "locked", "lock"],
          answer: "to lock",
          explanation: "remember + to V1 = จำที่จะต้องทำ (สิ่งที่ยังไม่ได้ทำ)"
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
          sentence: "He stopped ___ (smoke) two years ago. (he doesn't smoke anymore)",
          tag: "Meaning Change",
          tagColor: "blue",
          answer: "smoking",
          explanation: "stop + V-ing = หยุดทำสิ่งนั้น (เลิกสูบบุหรี่)"
        },
        {
          sentence: "I was ___ (excite) about the trip.",
          tag: "Participle Adjective",
          tagColor: "secondary",
          answer: "excited",
          explanation: "-ed ใช้อธิบายคนที่รู้สึก"
        },
        {
          sentence: "___ (Write) by a famous author, the book became a bestseller.",
          tag: "Participle Clause",
          tagColor: "purple",
          answer: "Written",
          explanation: "Participle Clause ใช้ V3 เมื่อประธานเป็นผู้ถูกกระทำ (passive meaning)"
        },
        {
          sentence: "She seems ___ (leave) already.",
          tag: "Perfect Infinitive",
          tagColor: "amber",
          answer: "to have left",
          explanation: "Perfect Infinitive (to have + V3) เน้นว่าเหตุการณ์เกิดขึ้นก่อนหน้า"
        },
        {
          sentence: "I remember ___ (meet) him before. (a memory from the past)",
          tag: "Meaning Change",
          tagColor: "blue",
          answer: "meeting",
          explanation: "remember + V-ing = จำได้ว่าเคยทำ (อดีต)"
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
          sentence: "The roller coaster ride was really ___.",
          emoji: "🎢",
          options: ["exciting", "excited"],
          answer: "exciting",
          explanation: "-ing อธิบายสิ่งที่ทำให้เกิดความรู้สึกตื่นเต้น"
        },
        {
          sentence: "He tried ___ the door, but it was locked.",
          emoji: "🚪",
          options: ["to open", "opening"],
          answer: "to open",
          explanation: "try + to V1 = พยายามทำสิ่งที่ยากลำบาก"
        },
        {
          sentence: "___ tired, she decided to rest.",
          emoji: "😴",
          options: ["Feeling", "Felt"],
          answer: "Feeling",
          explanation: "Participle Clause ใช้ V-ing เมื่อประธานเป็นผู้กระทำ/รู้สึก"
        },
        {
          sentence: "___ his work, he left the office.",
          emoji: "💼",
          options: ["Having finished", "Finished"],
          answer: "Having finished",
          explanation: "Perfect Gerund เน้นว่าทำงานเสร็จก่อนออกจากออฟฟิศ"
        },
        {
          sentence: "I'm ___ in this subject.",
          emoji: "📖",
          options: ["interested", "interesting"],
          answer: "interested",
          explanation: "-ed ใช้อธิบายคนที่รู้สึก (ฉันรู้สึกสนใจ)"
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
          wrong: "I regret to tell her the truth yesterday. (already told her)",
          tag: "Meaning Change",
          tagColor: "blue",
          options: ["I regret telling her the truth yesterday.", "I regret told her the truth yesterday.", "I regretted to tell her the truth yesterday."],
          answer: "I regret telling her the truth yesterday.",
          explanation: "regret + V-ing = เสียใจกับสิ่งที่ทำไปแล้ว ไม่ใช่ to + V1"
        },
        {
          wrong: "I am boring right now.",
          tag: "Participle Adjective",
          tagColor: "secondary",
          options: ["I am bored right now.", "I am bore right now.", "I am to bore right now."],
          answer: "I am bored right now.",
          explanation: "-ed ใช้อธิบายคนที่รู้สึก (ฉันรู้สึกเบื่อ) ไม่ใช่ -ing"
        },
        {
          wrong: "Walk down the street, I saw an old friend.",
          tag: "Participle Clause",
          tagColor: "purple",
          options: ["Walking down the street, I saw an old friend.", "Walked down the street, I saw an old friend.", "To walk down the street, I saw an old friend."],
          answer: "Walking down the street, I saw an old friend.",
          explanation: "Participle Clause ใช้ V-ing เมื่อประธานเป็นผู้กระทำ ไม่ใช่ V1"
        },
        {
          wrong: "Finish his homework, he went out to play.",
          tag: "Perfect Gerund",
          tagColor: "amber",
          options: ["Having finished his homework, he went out to play.", "Finished his homework, he went out to play.", "To finish his homework, he went out to play."],
          answer: "Having finished his homework, he went out to play.",
          explanation: "Perfect Gerund (having + V3) เน้นว่าเหตุการณ์นี้เกิดขึ้นก่อนเหตุการณ์หลัก"
        },
        {
          wrong: "Remember locking the door before you leave!",
          tag: "Meaning Change",
          tagColor: "blue",
          options: ["Remember to lock the door before you leave!", "Remember lock the door before you leave!", "Remembered locking the door before you leave!"],
          answer: "Remember to lock the door before you leave!",
          explanation: "remember + to V1 = จำที่จะต้องทำ (สิ่งที่ยังไม่ได้ทำ) ไม่ใช่ V-ing"
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
          sentence: "He stopped ___ to answer his phone. (he was walking, then he paused)",
          bank: ["to walk", "walking", "walk"],
          answer: "to walk",
          explanation: "stop + to V1 = หยุดสิ่งหนึ่งเพื่อไปทำอีกสิ่งหนึ่ง"
        },
        {
          sentence: "The news was very ___.",
          bank: ["surprising", "surprised", "surprise"],
          answer: "surprising",
          explanation: "-ing อธิบายสิ่งที่ทำให้เกิดความรู้สึกประหลาดใจ"
        },
        {
          sentence: "___ by the loud noise, the baby began to cry.",
          bank: ["Frightened", "Frightening", "Frighten"],
          answer: "Frightened",
          explanation: "Participle Clause ใช้ V3 เมื่อประธานเป็นผู้ถูกกระทำ (passive meaning)"
        },
        {
          sentence: "He claims ___ the mountain alone.",
          bank: ["to have climbed", "having climbed", "climbed"],
          answer: "to have climbed",
          explanation: "Perfect Infinitive (to have + V3) เน้นว่าเหตุการณ์เกิดขึ้นก่อนหน้า"
        },
        {
          sentence: "I'll never forget ___ my first day at school.",
          bank: ["having", "to have", "have"],
          answer: "having",
          explanation: "forget + V-ing = ลืมสิ่งที่เคยเกิดขึ้น (ความทรงจำ)"
        }
      ]
    }
  ]
};
