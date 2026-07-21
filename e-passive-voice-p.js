const EXERCISE = {
  title: "Passive Voice",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Passive",
  titleAccent: "Voice",
  emoji: "🔄",
  subtitle: "ฝึกทำแบบฝึกหัด Passive Voice แบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-passive-voice-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "The cake ___ by my mom every Sunday.",
          tag: "Passive",
          tagColor: "blue",
          emoji: "🎂",
          options: ["make", "makes", "is made", "made"],
          answer: "is made",
          explanation: "ประธาน The cake (เอกพจน์) เป็นผู้ถูกกระทำ ใช้ is + V3 (made)"
        },
        {
          sentence: "These toys ___ in Thailand.",
          tag: "Passive",
          tagColor: "blue",
          emoji: "🧸",
          options: ["is made", "are made", "make", "makes"],
          answer: "are made",
          explanation: "ประธาน These toys (พหูพจน์) ใช้ are + V3 (made)"
        },
        {
          sentence: "The room ___ every day.",
          tag: "Passive",
          tagColor: "blue",
          emoji: "🧹",
          options: ["clean", "cleans", "is cleaned", "are cleaned"],
          answer: "is cleaned",
          explanation: "ประธาน The room (เอกพจน์) ใช้ is + V3 (cleaned)"
        },
        {
          sentence: "The letter is written ___ my sister.",
          tag: "By-agent",
          tagColor: "amber",
          emoji: "✉️",
          options: ["at", "by", "in", "on"],
          answer: "by",
          explanation: "ใช้ by ตามด้วยผู้กระทำเมื่ออยากบอกว่าใครเป็นคนทำ"
        },
        {
          sentence: "The board ___ by the teacher.",
          tag: "Passive",
          tagColor: "blue",
          emoji: "📋",
          options: ["clean", "is cleaned", "cleans", "are cleaned"],
          answer: "is cleaned",
          explanation: "ประธาน The board (เอกพจน์) ใช้ is + V3 (cleaned)"
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
          sentence: "The house ___ (clean) every week.",
          tag: "Passive",
          tagColor: "blue",
          answer: "is cleaned",
          explanation: "ประธาน The house (เอกพจน์) ใช้ is + V3"
        },
        {
          sentence: "These books ___ (write) by famous authors.",
          tag: "Passive",
          tagColor: "blue",
          answer: "are written",
          explanation: "ประธาน These books (พหูพจน์) ใช้ are + V3"
        },
        {
          sentence: "The car ___ (wash) every Saturday.",
          tag: "Passive",
          tagColor: "blue",
          answer: "is washed",
          explanation: "ประธาน The car (เอกพจน์) ใช้ is + V3"
        },
        {
          sentence: "This bread ___ (make) in the bakery.",
          tag: "Passive",
          tagColor: "blue",
          answer: "is made",
          explanation: "ประธาน This bread (เอกพจน์) ใช้ is + V3"
        },
        {
          sentence: "The garden ___ (water) by the gardener.",
          tag: "Passive",
          tagColor: "blue",
          answer: "is watered",
          explanation: "ประธาน The garden (เอกพจน์) ใช้ is + V3"
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
          sentence: "This cake ___ every birthday.",
          emoji: "🎂",
          options: ["is made", "make"],
          answer: "is made",
          explanation: "ประธาน This cake ใช้ is + V3 (made)"
        },
        {
          sentence: "These flowers ___ every morning.",
          emoji: "🌷",
          options: ["are watered", "water"],
          answer: "are watered",
          explanation: "ประธาน These flowers (พหูพจน์) ใช้ are + V3 (watered)"
        },
        {
          sentence: "This picture ___ by my sister.",
          emoji: "🖼️",
          options: ["is painted", "paint"],
          answer: "is painted",
          explanation: "ประธาน This picture ใช้ is + V3 (painted)"
        },
        {
          sentence: "These shoes ___ in Vietnam.",
          emoji: "👟",
          options: ["are made", "makes"],
          answer: "are made",
          explanation: "ประธาน These shoes (พหูพจน์) ใช้ are + V3 (made)"
        },
        {
          sentence: "This song ___ by a famous singer.",
          emoji: "🎵",
          options: ["is sung", "sing"],
          answer: "is sung",
          explanation: "ประธาน This song ใช้ is + V3 (sung)"
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
          wrong: "The cake make by my mom.",
          tag: "Passive",
          tagColor: "blue",
          options: ["The cake is made by my mom.", "The cake makes by my mom.", "The cake making by my mom."],
          answer: "The cake is made by my mom.",
          explanation: "ต้องมี verb to be (is) ก่อน V3 เสมอในโครงสร้าง Passive"
        },
        {
          wrong: "These toys is made in Thailand.",
          tag: "Passive",
          tagColor: "blue",
          options: ["These toys are made in Thailand.", "These toys was made in Thailand.", "These toys making in Thailand."],
          answer: "These toys are made in Thailand.",
          explanation: "ประธาน These toys (พหูพจน์) ต้องใช้ are ไม่ใช่ is"
        },
        {
          wrong: "The room are cleaned every day.",
          tag: "Passive",
          tagColor: "blue",
          options: ["The room is cleaned every day.", "The room clean every day.", "The room being cleaned every day."],
          answer: "The room is cleaned every day.",
          explanation: "ประธาน The room (เอกพจน์) ต้องใช้ is ไม่ใช่ are"
        },
        {
          wrong: "The letter is written on my sister.",
          tag: "By-agent",
          tagColor: "amber",
          options: ["The letter is written by my sister.", "The letter is written at my sister.", "The letter is written in my sister."],
          answer: "The letter is written by my sister.",
          explanation: "การบอกผู้กระทำใช้คำว่า by ไม่ใช่ on/at/in"
        },
        {
          wrong: "This bread make in the bakery.",
          tag: "Passive",
          tagColor: "blue",
          options: ["This bread is made in the bakery.", "This bread makes in the bakery.", "This bread made in the bakery."],
          answer: "This bread is made in the bakery.",
          explanation: "ต้องมี verb to be (is) ก่อน V3 เสมอ"
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
          sentence: "The window ___ cleaned every Friday.",
          bank: ["is", "are", "am"],
          answer: "is",
          explanation: "ประธาน The window (เอกพจน์) ใช้ is ก่อน V3"
        },
        {
          sentence: "These cookies ___ made by my grandma.",
          bank: ["are", "is", "am"],
          answer: "are",
          explanation: "ประธาน These cookies (พหูพจน์) ใช้ are ก่อน V3"
        },
        {
          sentence: "This song is ___ by a famous singer.",
          bank: ["sung", "sing", "sings"],
          answer: "sung",
          explanation: "หลัง is ต้องใช้ V3 (sung) ไม่ใช่ V1"
        },
        {
          sentence: "The book is written ___ a famous author.",
          bank: ["by", "at", "in"],
          answer: "by",
          explanation: "ใช้ by ตามด้วยผู้กระทำ"
        },
        {
          sentence: "The dishes are ___ every night.",
          bank: ["washed", "wash", "washes"],
          answer: "washed",
          explanation: "หลัง are ต้องใช้ V3 (washed)"
        }
      ]
    }
  ]
};
