const CONTENT = {
  title: "Comparison",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "⚖️",
  subtitle: "As...As, Less...Than และ Fewer vs Less",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ As...As & Not As...As",
      cards: [
        {
          title: "การเปรียบเทียบเท่ากัน",
          icon: "⚖️",
          blocks: [
            {
              type: "explanation",
              text: "**as + adjective + as** ใช้เมื่อสองสิ่ง **เท่ากัน** ส่วน **not as + adjective + as** ใช้เมื่อ **ไม่เท่ากัน** (สิ่งแรกน้อยกว่า)"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"],
              rows: [
                ["as + adj + as", "เท่ากัน", "My car is **as fast as** yours."],
                ["not as + adj + as", "ไม่เท่ากัน (น้อยกว่า)", "This bag is **not as heavy as** that one."]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "This bag is **not as heavy as** that one.", th: "กระเป๋าใบนี้ไม่หนักเท่าใบนั้น" },
                { en: "She is **as tall as** her brother.", th: "เธอสูงเท่ากับพี่ชายของเธอ" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              text: "จำง่ายๆ: adjective ใน as...as ใช้ **รูปเดิม** ไม่เติม -er"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Less...Than",
      cards: [
        {
          title: "การบอกว่าน้อยกว่า",
          icon: "📉",
          blocks: [
            {
              type: "explanation",
              text: "**less + adjective + than** ใช้บอกว่าสิ่งหนึ่ง **น้อยกว่า/ด้อยกว่า** อีกสิ่งหนึ่งในลักษณะนั้นๆ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["โครงสร้าง", "ตัวอย่าง"],
              rows: [
                ["less + adj + than", "This test is **less difficult than** the last one."],
                ["comparative (-er/more)", "= This test is **easier than** the last one."]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "💡",
              text: "less...than คือมุมมองตรงข้ามกับ comparative -er/more"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Fewer vs Less",
      cards: [
        {
          title: "นับได้ vs นับไม่ได้",
          icon: "🔢",
          blocks: [
            {
              type: "explanation",
              text: "**Fewer** ใช้กับ **คำนามนับได้ (Countable)** ส่วน **Less** ใช้กับ **คำนามนับไม่ได้ (Uncountable)**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Fewer", sub: "นับได้ (พหูพจน์)", color: "blue", body: "**fewer books**\n\n**fewer people**" },
                { word: "Less", sub: "นับไม่ได้", color: "secondary", body: "**less water**\n\n**less time**" }
              ]
            },
            {
              type: "examples",
              borderColor: "amber",
              items: [
                { en: "She has **fewer books** than I do.", th: "เธอมีหนังสือน้อยกว่าฉัน" },
                { en: "We have **less time** than expected.", th: "เรามีเวลาน้อยกว่าที่คาดไว้" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "⚠️",
              title: "ข้อควรระวัง",
              text: "ห้ามใช้ ~~less books~~ เพราะ books นับได้ ต้องใช้ **fewer books**"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "My car is ___ as yours.",
      tag: "As...As",
      tagColor: "blue",
      emoji: "🚗",
      options: ["fast", "faster", "fastest", "more fast"],
      answer: "fast",
      explanation: "as...as ใช้ adjective รูปเดิม ไม่เติม -er"
    },
    {
      sentence: "This bag is not as ___ as that one.",
      tag: "Not As...As",
      tagColor: "blue",
      emoji: "🎒",
      options: ["heavy", "heavier", "heaviest", "more heavy"],
      answer: "heavy",
      explanation: "not as...as ใช้ adjective รูปเดิม"
    },
    {
      sentence: "This test is ___ difficult than the last one.",
      tag: "Less Than",
      tagColor: "secondary",
      emoji: "📝",
      options: ["less", "fewer", "least", "few"],
      answer: "less",
      explanation: "less + adjective + than ใช้บอกว่าน้อยกว่า"
    },
    {
      sentence: "She has ___ books than I do.",
      tag: "Fewer",
      tagColor: "amber",
      emoji: "📚",
      options: ["less", "fewer", "least", "little"],
      answer: "fewer",
      explanation: "books เป็นคำนามนับได้ ต้องใช้ fewer ไม่ใช่ less"
    },
    {
      sentence: "We have ___ time than expected.",
      tag: "Less",
      tagColor: "amber",
      emoji: "⏰",
      options: ["fewer", "less", "few", "many"],
      answer: "less",
      explanation: "time เป็นคำนามนับไม่ได้ ต้องใช้ less ไม่ใช่ fewer"
    }
  ]
};
