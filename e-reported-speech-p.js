const EXERCISE = {
  title: "Reported Speech",
  badge: "ประถม 4-6 · A1-A2",
  titleMain: "Reported",
  titleAccent: "Speech",
  emoji: "💬",
  subtitle: "ฝึกทำแบบฝึกหัดการเล่าคำพูดของคนอื่นแบบง่ายๆ",
  accentColor: "blue",
  contentPage: "c-reported-speech-p.html",

  parts: [
    {
      type: "mc",
      label: "Multiple Choice",
      icon: "✅",
      title: "เลือกคำตอบที่ถูกต้อง",
      description: "เลือกรูปกริยาที่ถูกต้องให้เข้ากับประโยค",
      questions: [
        {
          sentence: "\"I am happy,\" she said. → She said (that) she ___ happy.",
          tag: "Backshift",
          tagColor: "blue",
          emoji: "😊",
          options: ["is", "was", "am", "be"],
          answer: "was",
          explanation: "am เปลี่ยนเป็น was เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"I like pizza,\" he said. → He said (that) he ___ pizza.",
          tag: "Backshift",
          tagColor: "blue",
          emoji: "🍕",
          options: ["like", "likes", "liked", "liking"],
          answer: "liked",
          explanation: "like เปลี่ยนเป็น liked เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"I have a dog,\" she said. → She said (that) she ___ a dog.",
          tag: "Backshift",
          tagColor: "blue",
          emoji: "🐶",
          options: ["have", "has", "had", "having"],
          answer: "had",
          explanation: "have เปลี่ยนเป็น had เมื่อเล่าคำพูด"
        },
        {
          sentence: "\"I am tired,\" Tom said. → Tom ___ (that) he was tired.",
          tag: "Said",
          tagColor: "secondary",
          emoji: "😴",
          options: ["say", "says", "said", "saying"],
          answer: "said",
          explanation: "เล่าคำพูดของคนอื่นในอดีตใช้ said"
        },
        {
          sentence: "\"I play football,\" she said. → She said she ___ football.",
          tag: "Backshift",
          tagColor: "blue",
          emoji: "⚽",
          options: ["play", "plays", "played", "playing"],
          answer: "played",
          explanation: "play เปลี่ยนเป็น played เมื่อเล่าคำพูด"
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
          sentence: "\"I am hungry,\" he said. → He said he ___ (be) hungry.",
          tag: "Backshift",
          tagColor: "blue",
          answer: "was",
          explanation: "am เปลี่ยนเป็น was"
        },
        {
          sentence: "\"I love reading,\" she said. → She said she ___ (love) reading.",
          tag: "Backshift",
          tagColor: "blue",
          answer: "loved",
          explanation: "love เปลี่ยนเป็น loved"
        },
        {
          sentence: "\"I have two cats,\" Anna said. → Anna ___ (say) she had two cats.",
          tag: "Said",
          tagColor: "secondary",
          answer: "said",
          explanation: "เล่าคำพูดใช้ said"
        },
        {
          sentence: "\"I want a new bike,\" he said. → He said he ___ (want) a new bike.",
          tag: "Backshift",
          tagColor: "blue",
          answer: "wanted",
          explanation: "want เปลี่ยนเป็น wanted"
        },
        {
          sentence: "\"I am at school,\" she said. → She said she ___ (be) at school.",
          tag: "Backshift",
          tagColor: "blue",
          answer: "was",
          explanation: "am เปลี่ยนเป็น was"
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
          sentence: "\"I am sleepy,\" she said. → She said she ___ sleepy.",
          emoji: "😴",
          options: ["was", "is"],
          answer: "was",
          explanation: "am เปลี่ยนเป็น was"
        },
        {
          sentence: "\"I like cats,\" he said. → He said he ___ cats.",
          emoji: "🐱",
          options: ["liked", "likes"],
          answer: "liked",
          explanation: "like เปลี่ยนเป็น liked"
        },
        {
          sentence: "\"I have a ball,\" Tom said. → Tom said he ___ a ball.",
          emoji: "⚽",
          options: ["had", "has"],
          answer: "had",
          explanation: "have เปลี่ยนเป็น had"
        },
        {
          sentence: "\"I am happy,\" she said. → She ___ she was happy.",
          emoji: "😊",
          options: ["said", "says"],
          answer: "said",
          explanation: "เล่าคำพูดของคนอื่นในอดีตใช้ said"
        },
        {
          sentence: "\"I eat rice,\" he said. → He said he ___ rice.",
          emoji: "🍚",
          options: ["ate", "eats"],
          answer: "ate",
          explanation: "eat เปลี่ยนเป็น ate เมื่อเล่าคำพูด"
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
          wrong: "She said she is happy.",
          tag: "Backshift",
          tagColor: "blue",
          options: ["She said she was happy.", "She said she am happy.", "She says she was happy."],
          answer: "She said she was happy.",
          explanation: "am/is เปลี่ยนเป็น was เมื่อเล่าคำพูด"
        },
        {
          wrong: "He said he likes pizza.",
          tag: "Backshift",
          tagColor: "blue",
          options: ["He said he liked pizza.", "He said he like pizza.", "He says he liked pizza."],
          answer: "He said he liked pizza.",
          explanation: "like เปลี่ยนเป็น liked เมื่อเล่าคำพูด"
        },
        {
          wrong: "She said she have a dog.",
          tag: "Backshift",
          tagColor: "blue",
          options: ["She said she had a dog.", "She said she has a dog.", "She say she had a dog."],
          answer: "She said she had a dog.",
          explanation: "have เปลี่ยนเป็น had เมื่อเล่าคำพูด"
        },
        {
          wrong: "Tom says he was tired yesterday.",
          tag: "Said",
          tagColor: "secondary",
          options: ["Tom said he was tired.", "Tom saying he was tired.", "Tom say he was tired."],
          answer: "Tom said he was tired.",
          explanation: "เล่าคำพูดในอดีตใช้ said ไม่ใช่ says"
        },
        {
          wrong: "She said she plays football.",
          tag: "Backshift",
          tagColor: "blue",
          options: ["She said she played football.", "She said she play football.", "She says she played football."],
          answer: "She said she played football.",
          explanation: "play เปลี่ยนเป็น played เมื่อเล่าคำพูด"
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
          sentence: "\"I am cold,\" he said. → He said he ___ cold.",
          bank: ["was", "is", "am"],
          answer: "was",
          explanation: "am เปลี่ยนเป็น was"
        },
        {
          sentence: "\"I love ice cream,\" she said. → She said she ___ ice cream.",
          bank: ["loved", "loves", "love"],
          answer: "loved",
          explanation: "love เปลี่ยนเป็น loved"
        },
        {
          sentence: "\"I have a cat,\" Mary said. → Mary ___ she had a cat.",
          bank: ["said", "says", "say"],
          answer: "said",
          explanation: "เล่าคำพูดใช้ said"
        },
        {
          sentence: "\"I want a toy,\" he said. → He said he ___ a toy.",
          bank: ["wanted", "wants", "want"],
          answer: "wanted",
          explanation: "want เปลี่ยนเป็น wanted"
        },
        {
          sentence: "\"I am happy,\" the boy said. → The boy said he ___ happy.",
          bank: ["was", "is", "be"],
          answer: "was",
          explanation: "am เปลี่ยนเป็น was"
        }
      ]
    }
  ]
};
