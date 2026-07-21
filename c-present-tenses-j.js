const CONTENT = {
  title: "Present Tenses",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "📘",
  subtitle: "Stative Verbs, Present Perfect และการใช้ Present Continuous สำหรับอนาคต",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ ทบทวน + Stative Verbs",
      cards: [
        {
          title: "ทบทวน Simple vs Continuous",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "**Present Simple** ใช้กับความจริง/นิสัย/กิจวัตร ส่วน **Present Continuous** ใช้กับสิ่งที่กำลังเกิดขึ้นตอนนี้ — แต่มีกริยาบางกลุ่มที่ **ไม่ใช้รูป Continuous** ได้เลย เรียกว่า **Stative Verbs**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Simple", sub: "fact / habit", color: "blue", body: "He **plays** tennis every week." },
                { word: "Continuous", sub: "happening now", color: "secondary", body: "He **is playing** tennis now." }
              ]
            }
          ]
        },
        {
          title: "Stative Verbs (กริยาที่ไม่ใช้ Continuous)",
          icon: "🚫",
          blocks: [
            {
              type: "explanation",
              text: "Stative verbs คือกริยาที่แสดง **ความรู้สึก ความคิด หรือสภาวะ** ไม่ใช่การกระทำ จึงมักไม่ใช้รูป **-ing**"
            },
            {
              type: "pills",
              items: [
                { text: "like", color: "blue" },
                { text: "love", color: "blue" },
                { text: "want", color: "blue" },
                { text: "know", color: "blue" },
                { text: "believe", color: "blue" },
                { text: "understand", color: "blue" },
                { text: "belong", color: "blue" },
                { text: "own", color: "blue" }
              ]
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "✅", sub: "ถูกต้อง", color: "green", body: "I **know** the answer." },
                { word: "❌", sub: "ผิด", color: "red", body: "~~I am knowing the answer.~~" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "ข้อยกเว้น: **think** และ **have** มีสองความหมาย — ถ้าแปลว่า *คิดเห็น/ครอบครอง* ห้ามใช้ -ing แต่ถ้าแปลว่า *กำลังคิดอยู่/กำลังทาน* ใช้ -ing ได้"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Present Perfect",
      cards: [
        {
          title: "Present Perfect คืออะไร?",
          icon: "🏆",
          blocks: [
            {
              type: "explanation",
              text: "**Present Perfect** (have/has + V3) ใช้พูดถึง **ประสบการณ์** ในอดีตที่ยังเชื่อมโยงกับปัจจุบัน โดยไม่เน้นว่าเกิดขึ้น **เมื่อไหร่**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["I / You / We / They", "have + V3", "I **have visited** Chiang Mai."],
                ["He / She / It", "has + V3", "She **has finished** her homework."]
              ]
            }
          ]
        },
        {
          title: "คำที่ใช้บ่อยกับ Present Perfect",
          icon: "🔑",
          blocks: [
            {
              type: "sva",
              rows: [
                { quantifier: "ever", rule: "เคย...ไหม (ใช้ในประโยคคำถาม)", example: "Have you **ever** been to Japan?" },
                { quantifier: "never", rule: "ไม่เคย", example: "I have **never** eaten durian." },
                { quantifier: "already", rule: "...แล้ว (ใช้ในประโยคบอกเล่า)", example: "She has **already** done her homework." },
                { quantifier: "yet", rule: "...หรือยัง / ยังไม่ (คำถาม/ปฏิเสธ)", example: "Have they finished **yet**?" },
                { quantifier: "just", rule: "เพิ่งจะ...", example: "I have **just** arrived home." }
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
                { en: "I **have** never **been** to Japan.", th: "ฉันไม่เคยไปญี่ปุ่น" },
                { en: "Have you finished your homework **yet**?", th: "เธอทำการบ้านเสร็จหรือยัง" },
                { en: "We **have already** watched this movie.", th: "เราดูหนังเรื่องนี้ไปแล้ว" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Perfect Continuous + อนาคต",
      cards: [
        {
          title: "Present Perfect Continuous (for/since)",
          icon: "⏳",
          blocks: [
            {
              type: "explanation",
              text: "**Present Perfect Continuous** (have/has been + V-ing) ใช้บอก **ระยะเวลา** ของการกระทำที่เริ่มในอดีตและ **ยังดำเนินอยู่**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "for", sub: "+ ระยะเวลา", color: "secondary", body: "for **two hours**, for **a week**" },
                { word: "since", sub: "+ จุดเริ่มต้น", color: "purple", body: "since **2020**, since **Monday**" }
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "I **have been studying** English **for** three years.", th: "ฉันเรียนภาษาอังกฤษมาสามปีแล้ว (และยังเรียนอยู่)" },
                { en: "She **has been living** here **since** 2019.", th: "เธออาศัยอยู่ที่นี่ตั้งแต่ปี 2019" }
              ]
            }
          ]
        },
        {
          title: "Present Continuous สำหรับอนาคต (Arrangement)",
          icon: "📅",
          blocks: [
            {
              type: "explanation",
              text: "เราสามารถใช้ **Present Continuous** พูดถึง **แผนในอนาคตที่นัดหมายไว้แน่นอนแล้ว** โดยมักมีคำระบุเวลาในอนาคตกำกับ"
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "We **are meeting** our teacher tomorrow at 9 AM.", th: "เราจะไปพบครูพรุ่งนี้ตอน 9 โมง" },
                { en: "I **am flying** to Bangkok next Friday.", th: "ฉันจะบินไปกรุงเทพฯ ศุกร์หน้า" }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              title: "ข้อสังเกต",
              text: "ต่างจาก Present Continuous ปกติตรงที่ต้องมี **เวลาในอนาคต** ระบุชัดเจน เช่น tomorrow, next week"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "I ___ what you mean.",
      tag: "Stative Verb",
      tagColor: "blue",
      emoji: "🤔",
      options: ["understand", "am understanding", "understands", "understanding"],
      answer: "understand",
      explanation: "understand เป็น stative verb ไม่ใช้รูป -ing"
    },
    {
      sentence: "___ you ever been to London?",
      tag: "Present Perfect",
      tagColor: "secondary",
      emoji: "✈️",
      options: ["Do", "Are", "Have", "Did"],
      answer: "Have",
      explanation: "ประโยคคำถาม Present Perfect ใช้ Have/Has ขึ้นต้น กับ ever แปลว่า 'เคย...ไหม'"
    },
    {
      sentence: "She has ___ finished her project.",
      tag: "Present Perfect",
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
      explanation: "Present Continuous ใช้พูดถึงแผนที่นัดหมายไว้แล้วในอนาคต เมื่อมีเวลาระบุชัดเจนเช่น tomorrow at 3 PM"
    }
  ]
};
