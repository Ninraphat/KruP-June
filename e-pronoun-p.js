// e-pronoun-p.js
// วิธีใช้: <script src="e-pronoun-p.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "Primary · Exercise · A1–A2",
  titleMain:   "Pronoun",
  titleAccent: "สรรพนาม",
  emoji:       "🌟",
  subtitle:    "50 ข้อ · 5 รูปแบบ · Subject, Object & Possessive Adjectives",
  accentColor: "blue",
  contentPage: "c-pronoun-p.html",

  /* ══════════════════════════════════════
     PARTS
  ══════════════════════════════════════ */
  parts: [

    /* ────────────────────────────────────
       PART 1 — MC (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "mc",
      label:       "Multiple Choice",
      title:       "Part 1 — Multiple Choice",
      description: "เลือก Pronoun ที่ถูกต้อง — Subject, Object, Possessive",
      icon:        "🔘",
      questions: [
        {
          emoji:       "👦",
          sentence:    "___ is my brother. He is ten years old.",
          answer:      "He",
          options:     ["He", "Him", "His", "They"],
          explanation: "ตำแหน่งประธาน + ผู้ชาย 1 คน → Subject Pronoun → He",
          tag: "Subject", tagColor: "blue"
        },
        {
          emoji:       "🎁",
          sentence:    "My teacher gave ___ a sticker today!",
          answer:      "me",
          options:     ["I", "me", "my", "we"],
          explanation: "กรรมของ gave → Object Pronoun → me",
          tag: "Object", tagColor: "primary"
        },
        {
          emoji:       "🎒",
          sentence:    "This is ___ bag. I bought it yesterday.",
          answer:      "my",
          options:     ["me", "I", "my", "mine"],
          explanation: "ตามด้วย Noun (bag) → Possessive Adjective → my",
          tag: "Possessive", tagColor: "purple"
        },
        {
          emoji:       "🐱",
          sentence:    "I have a cat. ___ name is Noodle.",
          answer:      "Its",
          options:     ["His", "Her", "Its", "Their"],
          explanation: "สัตว์ (cat) + ตามด้วย Noun (name) → Its",
          tag: "Possessive", tagColor: "purple"
        },
        {
          emoji:       "👧👦",
          sentence:    "Sara and Tom are my classmates. I sit next to ___.",
          answer:      "them",
          options:     ["they", "them", "their", "us"],
          explanation: "กรรมของ sit next to + หลายคน → Object Pronoun → them",
          tag: "Object", tagColor: "primary"
        },
        {
          emoji:       "🏫",
          sentence:    "___ school has a big library and a swimming pool.",
          answer:      "Our",
          options:     ["We", "Us", "Our", "Ours"],
          explanation: "ตามด้วย Noun (school) → Possessive Adjective → Our",
          tag: "Possessive", tagColor: "purple"
        },
        {
          emoji:       "🌸",
          sentence:    "Look at that flower! ___ is so pretty.",
          answer:      "It",
          options:     ["He", "She", "It", "They"],
          explanation: "แทนสิ่งของ (flower) + ตำแหน่งประธาน → Subject Pronoun → It",
          tag: "Subject", tagColor: "blue"
        },
        {
          emoji:       "📞",
          sentence:    "Please call ___ after school. I need to talk to you.",
          answer:      "me",
          options:     ["I", "me", "my", "mine"],
          explanation: "กรรมของ call → Object Pronoun → me",
          tag: "Object", tagColor: "primary"
        },
        {
          emoji:       "👩‍🍳",
          sentence:    "My mum is a great cook. ___ food is always delicious.",
          answer:      "Her",
          options:     ["She", "Her", "Hers", "His"],
          explanation: "ตามด้วย Noun (food) + ผู้หญิง → Possessive Adjective → Her",
          tag: "Possessive", tagColor: "purple"
        },
        {
          emoji:       "⚽",
          sentence:    "Tom and I play football every evening. ___ love it!",
          answer:      "We",
          options:     ["They", "We", "Us", "Our"],
          explanation: "Tom and I = We → Subject Pronoun ตำแหน่งประธาน → We",
          tag: "Subject", tagColor: "blue"
        }
      ]
    },

    /* ────────────────────────────────────
       PART 2 — Fill in (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "fill",
      label:       "Fill in",
      title:       "Part 2 — Fill in the Blank",
      description: "พิมพ์ Subject, Object หรือ Possessive Pronoun ที่ถูกต้อง",
      icon:        "✍️",
      questions: [
        {
          emoji:       "🐶",
          sentence:    "I have a dog. ___ loves playing in the garden.",
          answer:      "It",
          explanation: "แทน dog (สัตว์) + ตำแหน่งประธาน → It"
        },
        {
          emoji:       "👨‍👩‍👧",
          sentence:    "These are my parents. I love ___ very much.",
          answer:      "them",
          explanation: "กรรมของ love + หลายคน → them"
        },
        {
          emoji:       "🖊️",
          sentence:    "Tom left ___ pen on the desk.",
          answer:      "his",
          explanation: "ตามด้วย Noun (pen) + ผู้ชาย → his"
        },
        {
          emoji:       "👩‍🎓",
          sentence:    "___ is my favourite teacher. She teaches maths.",
          answer:      "She",
          explanation: "ตำแหน่งประธาน + ผู้หญิง → She"
        },
        {
          emoji:       "🏠",
          sentence:    "My friends and I live on the same street. ___ houses are next to each other.",
          answer:      "Our",
          explanation: "ตามด้วย Noun (houses) + พวกเรา → Our"
        },
        {
          emoji:       "🎂",
          sentence:    "Today is Sara's birthday. Can you give ___ this card?",
          answer:      "her",
          explanation: "กรรมของ give + ผู้หญิง → her"
        },
        {
          emoji:       "📱",
          sentence:    "I lost my phone. Has anyone seen ___?",
          answer:      "it",
          explanation: "กรรมของ seen + แทนสิ่งของ (phone) → it"
        },
        {
          emoji:       "🧑‍🤝‍🧑",
          sentence:    "Anna and Ben are twins. ___ look exactly the same!",
          answer:      "They",
          explanation: "ตำแหน่งประธาน + หลายคน → They"
        },
        {
          emoji:       "🦁",
          sentence:    "The lion opened ___ mouth and roared loudly.",
          answer:      "its",
          explanation: "ตามด้วย Noun (mouth) + สัตว์ → its"
        },
        {
          emoji:       "🙋",
          sentence:    "My dad always helps ___  with my homework.",
          answer:      "me",
          explanation: "กรรมของ helps → Object Pronoun → me"
        }
      ]
    },

    /* ────────────────────────────────────
       PART 3 — Picture Choice (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "picture",
      label:       "รูปภาพ",
      title:       "Part 3 — Picture Choice",
      description: "ดูรูป emoji และเลือก Pronoun ที่เหมาะสม",
      icon:        "🖼️",
      questions: [
        {
          emoji:       "👩",
          sentence:    "___ is a nurse. She works at the hospital.",
          answer:      "She",
          options:     ["He", "She", "It", "They"],
          explanation: "รูปผู้หญิง + ตำแหน่งประธาน → She"
        },
        {
          emoji:       "👦👦",
          sentence:    "Look at those boys! ___ are playing basketball.",
          answer:      "They",
          options:     ["He", "She", "It", "They"],
          explanation: "หลายคน + ตำแหน่งประธาน → They"
        },
        {
          emoji:       "🐘",
          sentence:    "The elephant lifted ___ trunk high.",
          answer:      "its",
          options:     ["his", "her", "its", "their"],
          explanation: "สัตว์ + ตามด้วย Noun (trunk) → its"
        },
        {
          emoji:       "🧒",
          sentence:    "My little brother is shy. Don't tease ___.",
          answer:      "him",
          options:     ["he", "him", "his", "her"],
          explanation: "กรรมของ tease + ผู้ชาย → him"
        },
        {
          emoji:       "👩‍👦",
          sentence:    "That is my mum and me. ___ go shopping every Saturday.",
          answer:      "We",
          options:     ["We", "They", "Us", "Our"],
          explanation: "my mum and I = We → Subject Pronoun → We"
        },
        {
          emoji:       "📚",
          sentence:    "These are ___ favourite books. I read them every night.",
          answer:      "my",
          options:     ["me", "I", "my", "mine"],
          explanation: "ตามด้วย Noun (books) → Possessive Adjective → my"
        },
        {
          emoji:       "🌙",
          sentence:    "The moon shines at night. ___ is very bright tonight.",
          answer:      "It",
          options:     ["He", "She", "It", "They"],
          explanation: "แทนสิ่งของในธรรมชาติ (moon) → It"
        },
        {
          emoji:       "🧒👧",
          sentence:    "Tom has a sister. ___ name is Lisa.",
          answer:      "Her",
          options:     ["His", "Her", "Its", "Their"],
          explanation: "ตามด้วย Noun (name) + ผู้หญิง (sister) → Her"
        },
        {
          emoji:       "👨‍👩‍👧‍👦",
          sentence:    "My family is big. I love ___ so much.",
          answer:      "them",
          options:     ["they", "them", "their", "us"],
          explanation: "กรรมของ love + หลายคน → them"
        },
        {
          emoji:       "🤴",
          sentence:    "The prince waved at the crowd. ___ smiled and waved back.",
          answer:      "They",
          options:     ["He", "She", "It", "They"],
          explanation: "the crowd = กลุ่มคน + ตำแหน่งประธาน → They"
        }
      ]
    },

    /* ────────────────────────────────────
       PART 4 — Fix Sentence (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "fix",
      label:       "แก้ประโยค",
      title:       "Part 4 — Spot the Mistake",
      description: "เลือกประโยคที่ถูกต้อง",
      icon:        "🔧",
      questions: [
        {
          wrong:       "Him is my best friend at school.",
          options:     [
            "Him is my best friend at school.",
            "He is my best friend at school.",
            "His is my best friend at school."
          ],
          answer:      "He is my best friend at school.",
          explanation: "ตำแหน่งประธาน → Subject Pronoun → He (ไม่ใช่ Him)"
        },
        {
          wrong:       "Can you help I with this exercise?",
          options:     [
            "Can you help I with this exercise?",
            "Can you help me with this exercise?",
            "Can you help my with this exercise?"
          ],
          answer:      "Can you help me with this exercise?",
          explanation: "กรรมของ help → Object Pronoun → me (ไม่ใช่ I)"
        },
        {
          wrong:       "This is she bag. She bought it last week.",
          options:     [
            "This is she bag.",
            "This is her bag.",
            "This is hers bag."
          ],
          answer:      "This is her bag.",
          explanation: "ตามด้วย Noun (bag) → Possessive Adjective → her"
        },
        {
          wrong:       "My dog is very playful. He tail never stops wagging.",
          options:     [
            "He tail never stops wagging.",
            "Its tail never stops wagging.",
            "Their tail never stops wagging."
          ],
          answer:      "Its tail never stops wagging.",
          explanation: "สัตว์ (dog) + ตามด้วย Noun (tail) → Its"
        },
        {
          wrong:       "Sara and me are best friends.",
          options:     [
            "Sara and me are best friends.",
            "Sara and I are best friends.",
            "Sara and my are best friends."
          ],
          answer:      "Sara and I are best friends.",
          explanation: "ตำแหน่งประธาน → I (ไม่ใช่ me) — Sara and I are..."
        },
        {
          wrong:       "My parents love I very much.",
          options:     [
            "My parents love I very much.",
            "My parents love me very much.",
            "My parents love my very much."
          ],
          answer:      "My parents love me very much.",
          explanation: "กรรมของ love → Object Pronoun → me"
        },
        {
          wrong:       "Look! There is a bird. She is singing on the tree.",
          options:     [
            "She is singing on the tree.",
            "He is singing on the tree.",
            "It is singing on the tree."
          ],
          answer:      "It is singing on the tree.",
          explanation: "สัตว์ที่ไม่รู้เพศ → It (ไม่ใช่ She หรือ He)"
        },
        {
          wrong:       "That is their house. Them live there with their grandma.",
          options:     [
            "Them live there with their grandma.",
            "They live there with their grandma.",
            "Their live there with their grandma."
          ],
          answer:      "They live there with their grandma.",
          explanation: "ตำแหน่งประธาน → Subject Pronoun → They (ไม่ใช่ Them)"
        },
        {
          wrong:       "We school has a big playground and a canteen.",
          options:     [
            "We school has a big playground.",
            "Our school has a big playground and a canteen.",
            "Us school has a big playground and a canteen."
          ],
          answer:      "Our school has a big playground and a canteen.",
          explanation: "ตามด้วย Noun (school) → Possessive Adjective → Our"
        },
        {
          wrong:       "I gave he my pencil because he forgot his.",
          options:     [
            "I gave he my pencil.",
            "I gave him my pencil because he forgot his.",
            "I gave his my pencil because he forgot him."
          ],
          answer:      "I gave him my pencil because he forgot his.",
          explanation: "กรรมของ gave → him | ตำแหน่งประธาน → he | ตามด้วย Noun (pencil) → his"
        }
      ]
    },

    /* ────────────────────────────────────
       PART 5 — Drag & Drop (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "drag",
      label:       "Drag & Drop",
      title:       "Part 5 — Drag & Drop",
      description: "ลากคำมาวางในช่องว่าง",
      icon:        "🧩",
      questions: [
        {
          sentence:    "___ is my favourite singer. I love her songs.",
          answer:      "She",
          bank:        ["She", "Her", "Hers", "They"],
          explanation: "ตำแหน่งประธาน + ผู้หญิง → She"
        },
        {
          sentence:    "My dad cooked dinner. I helped ___.",
          answer:      "him",
          bank:        ["he", "him", "his", "himself"],
          explanation: "กรรมของ helped + ผู้ชาย → him"
        },
        {
          sentence:    "The children lost ___ way in the park.",
          answer:      "their",
          bank:        ["they", "them", "their", "its"],
          explanation: "ตามด้วย Noun (way) + หลายคน → their"
        },
        {
          sentence:    "___ and Tom are on the same football team.",
          answer:      "I",
          bank:        ["I", "Me", "My", "Mine"],
          explanation: "ตำแหน่งประธาน (... and Tom are) → I (ไม่ใช่ Me)"
        },
        {
          sentence:    "The cat is hungry. Please feed ___.",
          answer:      "it",
          bank:        ["he", "she", "it", "them"],
          explanation: "กรรมของ feed + แทนสัตว์ → it"
        },
        {
          sentence:    "This is ___ new bicycle. I got it for my birthday!",
          answer:      "my",
          bank:        ["me", "I", "my", "mine"],
          explanation: "ตามด้วย Noun (bicycle) → Possessive Adjective → my"
        },
        {
          sentence:    "Sara forgot her lunch. Can you share yours with ___?",
          answer:      "her",
          bank:        ["she", "her", "hers", "his"],
          explanation: "กรรมของ with + ผู้หญิง → her"
        },
        {
          sentence:    "___ are going to the zoo on Saturday. Want to join us?",
          answer:      "We",
          bank:        ["We", "Us", "Our", "They"],
          explanation: "ตำแหน่งประธาน + พวกเรา → We"
        },
        {
          sentence:    "The bird opened ___ wings and flew away.",
          answer:      "its",
          bank:        ["his", "her", "its", "their"],
          explanation: "ตามด้วย Noun (wings) + สัตว์ → its"
        },
        {
          sentence:    "My friends are very funny. I always laugh with ___.",
          answer:      "them",
          bank:        ["they", "them", "their", "us"],
          explanation: "กรรมของ with + หลายคน → them"
        }
      ]
    }
  ]
};
