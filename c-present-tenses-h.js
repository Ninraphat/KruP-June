const CONTENT = {
  title: "Present Tenses",
  badge: "มัธยมปลาย ม.4-6 · B1-B2",
  titleMain: "Present",
  titleAccent: "Tenses",
  emoji: "🎓",
  subtitle: "Perfect vs Perfect Continuous, Passive Voice และการใช้ในระดับวิชาการ",
  accentColor: "blue",
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือกคำตอบที่ถูกต้องให้ครบทุกข้อนะ",

  sections: [
    {
      id: 1,
      label: "1️⃣ Perfect vs Perfect Continuous",
      cards: [
        {
          title: "เน้นผลลัพธ์ vs เน้นระยะเวลา",
          icon: "⚖️",
          blocks: [
            {
              type: "explanation",
              text: "**Present Perfect** เน้น **ผลลัพธ์ / จำนวนที่ทำเสร็จ** ส่วน **Present Perfect Continuous** เน้น **กระบวนการ / ระยะเวลาที่ทำต่อเนื่อง** — บางครั้งใช้แทนกันได้ แต่ความหมายต่างกันเล็กน้อย"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  word: "Perfect",
                  sub: "ผลลัพธ์ / สำเร็จแล้ว",
                  color: "blue",
                  body: "I **have written** three reports.\n\n(เน้นว่าทำเสร็จไปแล้วกี่ชิ้น)"
                },
                {
                  word: "Perfect Continuous",
                  sub: "ระยะเวลา / ต่อเนื่อง",
                  color: "secondary",
                  body: "I **have been writing** reports all day.\n\n(เน้นว่าทำมานานแค่ไหน)"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "**Have** you **been waiting** long, or **have** you just **arrived**?", th: "คุณรอมานานหรือยัง หรือเพิ่งมาถึง" },
                { en: "She **has read** five books this month.", th: "เธออ่านหนังสือไปแล้ว 5 เล่มในเดือนนี้ (เน้นจำนวน)" },
                { en: "She **has been reading** all afternoon.", th: "เธออ่านหนังสือมาทั้งบ่าย (เน้นระยะเวลาต่อเนื่อง)" }
              ]
            }
          ]
        },
        {
          title: "Present Perfect vs Past Simple",
          icon: "🕰️",
          blocks: [
            {
              type: "explanation",
              text: "ข้อสอบมักทดสอบความแตกต่างนี้: **Present Perfect** ไม่ระบุเวลาที่แน่นอนและ **เชื่อมโยงกับปัจจุบัน** ส่วน **Past Simple** ใช้เมื่อ **ระบุเวลาที่แน่นอนในอดีต** และเหตุการณ์จบไปแล้ว"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                { word: "Present Perfect", sub: "ไม่ระบุเวลา / เชื่อมปัจจุบัน", color: "blue", body: "I **have visited** Japan.\n(ไม่บอกว่าเมื่อไหร่)" },
                { word: "Past Simple", sub: "ระบุเวลาแน่นอน", color: "amber", body: "I **visited** Japan **in 2022**.\n(บอกเวลาชัดเจน จบไปแล้ว)" }
              ]
            },
            {
              type: "pills",
              items: [
                { text: "yesterday", color: "amber" },
                { text: "last year", color: "amber" },
                { text: "in 2020", color: "amber" },
                { text: "ago", color: "amber" },
                { text: "ever / never", color: "blue" },
                { text: "already / yet", color: "blue" },
                { text: "so far", color: "blue" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "💡",
              title: "ข้อสอบชอบออก",
              text: "ถ้าในประโยคมีคำระบุเวลาแน่นอน (yesterday, in 2020, last week) → ต้องใช้ **Past Simple** เท่านั้น ห้ามใช้ Present Perfect"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "2️⃣ Present Tenses ใน Passive Voice",
      cards: [
        {
          title: "โครงสร้าง Passive Voice",
          icon: "🔄",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อประธานของประโยค **ถูกกระทำ** แทนที่จะเป็นผู้กระทำเอง เราเปลี่ยนเป็น Passive Voice โดยใช้ **verb to be + V3**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["Tense", "โครงสร้าง Passive", "ตัวอย่าง"],
              rows: [
                ["Present Simple", "is/am/are + V3", "The report **is checked** every week."],
                ["Present Continuous", "is/am/are + being + V3", "The report **is being reviewed** now."],
                ["Present Perfect", "has/have + been + V3", "The report **has been reviewed** already."]
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
              borderColor: "secondary",
              items: [
                { en: "This report **is being reviewed** by the committee this week.", th: "รายงานนี้กำลังถูกตรวจสอบโดยคณะกรรมการในสัปดาห์นี้" },
                { en: "English **is spoken** in many countries.", th: "ภาษาอังกฤษถูกใช้พูดในหลายประเทศ" },
                { en: "The results **have been announced** already.", th: "ผลลัพธ์ถูกประกาศออกมาแล้ว" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚠️",
              text: "Active: The committee **is reviewing** the report. → Passive: The report **is being reviewed** by the committee."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "3️⃣ Stative vs Dynamic ระดับสูง",
      cards: [
        {
          title: "กริยาที่มีสองความหมาย",
          icon: "🧠",
          blocks: [
            {
              type: "explanation",
              text: "บางกริยาเป็นได้ทั้ง **Stative** (สภาวะ) และ **Dynamic** (การกระทำ) ขึ้นอยู่กับความหมายที่ใช้ — ระดับนี้ต้องแยกแยะบริบทให้ได้"
            },
            {
              type: "sva",
              rows: [
                { quantifier: "think", rule: "คิดเห็น (stative) vs กำลังคิดใคร่ครวญ (dynamic)", example: "I **think** it's a good idea. / I **am thinking** about my future." },
                { quantifier: "have", rule: "ครอบครอง (stative) vs รับประทาน/ทำกิจกรรม (dynamic)", example: "She **has** a car. / She **is having** lunch." },
                { quantifier: "see", rule: "มองเห็น/เข้าใจ (stative) vs พบปะ/ออกเดท (dynamic)", example: "I **see** what you mean. / I **am seeing** a doctor tomorrow." },
                { quantifier: "look", rule: "ดูเหมือน (stative) vs กำลังมอง (dynamic)", example: "She **looks** tired. / She **is looking** at the photo." }
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "🎯",
              title: "เทคนิคการทำข้อสอบ",
              text: "ให้ดูว่ากริยานั้น **แสดงการกระทำที่มีจุดเริ่ม-จบชัดเจน** หรือไม่ ถ้าใช่ → ใช้ Continuous ได้ ถ้าเป็นแค่ **สภาวะ/ความรู้สึก** → ใช้ Simple เท่านั้น"
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      sentence: "She ___ five reports this month, and she's not done yet.",
      tag: "Present Perfect",
      tagColor: "blue",
      emoji: "📄",
      options: ["wrote", "has written", "is writing", "writes"],
      answer: "has written",
      explanation: "เน้นผลลัพธ์/จำนวนที่ทำสำเร็จแล้วโดยไม่ระบุเวลาแน่นอน จึงใช้ Present Perfect"
    },
    {
      sentence: "I ___ Japan in 2022.",
      tag: "Past Simple",
      tagColor: "amber",
      emoji: "🗾",
      options: ["have visited", "visited", "have been visiting", "visit"],
      answer: "visited",
      explanation: "มีคำระบุเวลาแน่นอน 'in 2022' จึงต้องใช้ Past Simple ไม่ใช่ Present Perfect"
    },
    {
      sentence: "The new bridge ___ by the government right now.",
      tag: "Passive - Continuous",
      tagColor: "secondary",
      emoji: "🌉",
      options: ["is built", "is being built", "has been built", "builds"],
      answer: "is being built",
      explanation: "Present Continuous Passive: is/am/are + being + V3 ใช้เมื่อเน้นว่ากำลังถูกกระทำอยู่ตอนนี้"
    },
    {
      sentence: "I ___ about changing my major these days.",
      tag: "Dynamic use",
      tagColor: "purple",
      emoji: "💭",
      options: ["think", "am thinking", "thinks", "thought"],
      answer: "am thinking",
      explanation: "'think about' ในความหมาย 'กำลังใคร่ครวญ' เป็น dynamic ใช้ continuous ได้ ต่างจาก 'think' ที่แปลว่าคิดเห็น (stative)"
    },
    {
      sentence: "The announcement ___ already ___ to all students.",
      tag: "Passive - Perfect",
      tagColor: "blue",
      emoji: "📢",
      options: ["has / sent", "is / sent", "has / been sent", "was / sent"],
      answer: "has / been sent",
      explanation: "Present Perfect Passive: has/have + been + V3 — 'has already been sent'"
    }
  ]
};
