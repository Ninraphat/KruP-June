const CONTENT = {
  title: "Non-Finite Verbs",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Non-Finite",
  titleAccent: "Verbs",
  emoji: "🎓",
  subtitle: "กริยาที่เปลี่ยนความหมาย, Participle Adjective, Participle Clause และ Perfect Gerund/Infinitive",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ กริยาที่เปลี่ยนความหมาย",
      cards: [
        {
          title: "Gerund vs Infinitive: ความหมายต่างกัน",
          icon: "🔀",
          blocks: [
            {
              type: "explanation",
              text: "กริยาบางคำสามารถตามด้วยทั้ง **Gerund** และ **Infinitive** ได้ แต่ **ความหมายเปลี่ยนไป** ต้องระวังให้มาก"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["กริยา", "+ V-ing", "+ to V1"],
              rows: [
                ["stop", "หยุดทำสิ่งนั้น", "หยุด (สิ่งอื่น) เพื่อไปทำสิ่งนี้"],
                ["remember", "จำได้ว่าเคยทำ (อดีต)", "จำที่จะต้องทำ (อนาคต)"],
                ["forget", "ลืมว่าเคยทำ", "ลืมที่จะต้องทำ"],
                ["try", "ลองทำดู", "พยายามทำ (ยากลำบาก)"],
                ["regret", "เสียใจกับสิ่งที่ทำไปแล้ว", "เสียใจที่ต้องแจ้ง (formal)"]
              ]
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "stop smoking", sub: "หยุดสูบบุหรี่", color: "blue", body: "He **stopped smoking**.\n\n(เลิกสูบบุหรี่แล้ว)" },
                { word: "stop to smoke", sub: "หยุดเพื่อไปสูบบุหรี่", color: "secondary", body: "He **stopped to smoke**.\n\n(หยุดทำอย่างอื่นเพื่อสูบบุหรี่)" }
              ]
            }
          ]
        },
        {
          title: "ตัวอย่างประโยค",
          icon: "✍️",
          blocks: [
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "I **regret telling** her the truth.", th: "ฉันเสียใจที่บอกความจริงกับเธอไป (ทำไปแล้ว)" },
                { en: "I **regret to tell** you that the flight is cancelled.", th: "ฉันเสียใจที่ต้องแจ้งว่าเที่ยวบินถูกยกเลิก (formal, กำลังจะพูด)" },
                { en: "I **remember meeting** him before.", th: "ฉันจำได้ว่าเคยพบเขามาก่อน" },
                { en: "**Remember to lock** the door.", th: "อย่าลืมล็อกประตูด้วยนะ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Present & Past Participle เป็น Adjective",
      cards: [
        {
          title: "-ing vs -ed Adjectives",
          icon: "🎭",
          blocks: [
            {
              type: "explanation",
              text: "**Present Participle (-ing)** ใช้อธิบาย **สิ่งที่ทำให้เกิดความรู้สึก** ส่วน **Past Participle (-ed)** ใช้อธิบาย **คนที่รู้สึก**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "-ing", sub: "สิ่งที่ทำให้รู้สึก", color: "blue", body: "The movie is **boring**.\n\n(หนังทำให้รู้สึกน่าเบื่อ)" },
                { word: "-ed", sub: "คนที่รู้สึก", color: "secondary", body: "I am **bored**.\n\n(ฉันรู้สึกเบื่อ)" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "boring / bored", color: "blue" },
                { text: "interesting / interested", color: "blue" },
                { text: "exciting / excited", color: "secondary" },
                { text: "tiring / tired", color: "secondary" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Participle Clause & Perfect Gerund/Infinitive",
      cards: [
        {
          title: "Participle Clause",
          icon: "🔗",
          blocks: [
            {
              type: "explanation",
              text: "**Participle Clause** คือประโยคย่อยที่ใช้ **V-ing หรือ V3 ขึ้นต้น** แทนการใช้ relative clause หรือ adverbial clause เต็มรูปแบบ ช่วยให้ประโยคกระชับขึ้น"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประเภท", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["Active meaning", "V-ing ...,", "**Walking** down the street, I saw an old friend."],
                ["Passive meaning", "V3 ...,", "**Written** in 1990, the book became a bestseller."]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "**Walking** down the street, I saw an old friend.", th: "ขณะเดินไปตามถนน ฉันเห็นเพื่อนเก่า" },
                { en: "**Written** by a famous author, the novel became popular.", th: "หนังสือเล่มนี้ถูกเขียนโดยนักเขียนที่มีชื่อเสียง จึงโด่งดัง" }
              ]
            }
          ]
        },
        {
          title: "Perfect Gerund/Infinitive",
          icon: "⏮️",
          blocks: [
            {
              type: "explanation",
              text: "**Perfect Gerund (having + V3)** และ **Perfect Infinitive (to have + V3)** ใช้เน้นว่าเหตุการณ์ **เกิดขึ้นก่อน** เหตุการณ์อื่น"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "**Having finished** his homework, he went out to play.", th: "หลังจากทำการบ้านเสร็จแล้ว เขาก็ออกไปเล่น" },
                { en: "She seems **to have left** already.", th: "ดูเหมือนเธอจะออกไปแล้ว" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "จำง่ายๆ",
              text: "[hl:blue]having + V3[/hl] และ [hl:secondary]to have + V3[/hl] เน้นว่าเหตุการณ์นั้น **เสร็จสิ้นไปแล้วก่อน** เหตุการณ์หลัก"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
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
};
