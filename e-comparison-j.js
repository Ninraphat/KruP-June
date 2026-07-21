const EXERCISE = {
  title: "Comparison",
  badge: "มัธยมต้น ม.1-3 · A2-B1",
  titleMain: "Comparison",
  titleAccent: "",
  emoji: "⚖️",
  subtitle: "ฝึก As...As, Less...Than และ Fewer vs Less",
  accentColor: "blue",
  contentPage: "c-comparison-j.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกคำที่ถูกต้องให้เข้ากับประโยค",
      questions: [
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
    },
    {
      type: "fill",
      label: "Fill in the Blank",
      icon: "✍️",
      title: "เติมคำในช่องว่าง",
      description: "พิมพ์คำที่ถูกต้องลงในช่องว่าง",
      questions: [
        {
          sentence: "She is as ___ (tall) as her brother.",
          tag: "As...As",
          tagColor: "blue",
          answer: "tall",
          explanation: "as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "This movie is not as ___ (exciting) as the last one.",
          tag: "Not As...As",
          tagColor: "blue",
          answer: "exciting",
          explanation: "not as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "This road is ___ (less) dangerous than that one.",
          tag: "Less Than",
          tagColor: "secondary",
          answer: "less",
          explanation: "less + adjective + than ใช้บอกว่าน้อยกว่า"
        },
        {
          sentence: "There are ___ (fewer) students in this class than last year.",
          tag: "Fewer",
          tagColor: "amber",
          answer: "fewer",
          explanation: "students นับได้ ต้องใช้ fewer"
        },
        {
          sentence: "I drink ___ (less) coffee than my sister.",
          tag: "Less",
          tagColor: "amber",
          answer: "less",
          explanation: "coffee นับไม่ได้ ต้องใช้ less"
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
          sentence: "His painting is as ___ as mine.",
          emoji: "🎨",
          options: ["good", "better"],
          answer: "good",
          explanation: "as...as ใช้ adjective รูปเดิม (good ไม่ใช่ better)"
        },
        {
          sentence: "This soup is not as ___ as that one.",
          emoji: "🍲",
          options: ["spicy", "spicier"],
          answer: "spicy",
          explanation: "not as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "This backpack is ___ expensive than that one.",
          emoji: "🎒",
          options: ["less", "fewer"],
          answer: "less",
          explanation: "less + adjective + than ใช้บอกว่าน้อยกว่า"
        },
        {
          sentence: "I have ___ pencils than my friend.",
          emoji: "✏️",
          options: ["fewer", "less"],
          answer: "fewer",
          explanation: "pencils นับได้ ต้องใช้ fewer"
        },
        {
          sentence: "We have ___ milk than we need.",
          emoji: "🥛",
          options: ["less", "fewer"],
          answer: "less",
          explanation: "milk นับไม่ได้ ต้องใช้ less"
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
          wrong: "My car is as faster as yours.",
          tag: "As...As",
          tagColor: "blue",
          options: ["My car is as fast as yours.", "My car is as fast than yours.", "My car is fast as yours."],
          answer: "My car is as fast as yours.",
          explanation: "as...as ใช้ adjective รูปเดิม ไม่เติม -er"
        },
        {
          wrong: "This bag is not as heavier as that one.",
          tag: "Not As...As",
          tagColor: "blue",
          options: ["This bag is not as heavy as that one.", "This bag is not heavy as that one.", "This bag is not as heavy than that one."],
          answer: "This bag is not as heavy as that one.",
          explanation: "not as...as ใช้ adjective รูปเดิม ไม่เติม -er"
        },
        {
          wrong: "This test is fewer difficult than the last one.",
          tag: "Less Than",
          tagColor: "secondary",
          options: ["This test is less difficult than the last one.", "This test is less difficult as the last one.", "This test is fewer difficulter than the last one."],
          answer: "This test is less difficult than the last one.",
          explanation: "less ใช้กับ adjective ไม่ใช่ fewer (fewer ใช้กับคำนามนับได้)"
        },
        {
          wrong: "She has less books than I do.",
          tag: "Fewer",
          tagColor: "amber",
          options: ["She has fewer books than I do.", "She has few books than I do.", "She has more less books than I do."],
          answer: "She has fewer books than I do.",
          explanation: "books นับได้ ต้องใช้ fewer ไม่ใช่ less"
        },
        {
          wrong: "We have fewer time than expected.",
          tag: "Less",
          tagColor: "amber",
          options: ["We have less time than expected.", "We have few time than expected.", "We have lesser time than expected."],
          answer: "We have less time than expected.",
          explanation: "time นับไม่ได้ ต้องใช้ less ไม่ใช่ fewer"
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
          sentence: "This dress is as ___ as that one.",
          bank: ["pretty", "prettier", "prettiest"],
          answer: "pretty",
          explanation: "as...as ใช้ adjective รูปเดิม"
        },
        {
          sentence: "This class is ___ crowded than mine.",
          bank: ["less", "fewer", "least"],
          answer: "less",
          explanation: "less + adjective + than"
        },
        {
          sentence: "I have ___ friends than my brother.",
          bank: ["fewer", "less", "least"],
          answer: "fewer",
          explanation: "friends นับได้ ต้องใช้ fewer"
        },
        {
          sentence: "This town has ___ pollution than the city.",
          bank: ["less", "fewer", "least"],
          answer: "less",
          explanation: "pollution นับไม่ได้ ต้องใช้ less"
        },
        {
          sentence: "This shirt is not as ___ as that one.",
          bank: ["colorful", "colorfuler", "more colorful"],
          answer: "colorful",
          explanation: "not as...as ใช้ adjective รูปเดิม"
        }
      ]
    }
  ]
};
