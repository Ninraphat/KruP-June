// e-subject&verb-agreement-p.js
// วิธีใช้: <script src="e-subject&verb-agreement-p.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "Primary · Exercise · A1–A2",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "กริยาต้องตรงกับประธาน",
  emoji:       "⚖️",
  subtitle:    "50 ข้อ · 5 รูปแบบ · is/are, has/have, Verb+s, There is/are",
  accentColor: "blue",
  contentPage: "c-subject&verb-agreement-p.html",

  parts: [

    /* ────────────────────────────────────
       PART 1 — MC (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "mc",
      label:       "Multiple Choice",
      title:       "Part 1 — Multiple Choice",
      description: "เลือก Verb ที่ถูกต้องให้ตรงกับประธาน",
      icon:        "🔘",
      questions: [
        {
          emoji:       "🐶",
          sentence:    "My dog ___ very fast.",
          answer:      "runs",
          options:     ["run", "runs", "are running", "running"],
          explanation: "dog = It (เอกพจน์) → Verb+s → runs",
          tag: "Verb+s", tagColor: "primary"
        },
        {
          emoji:       "👧👦",
          sentence:    "Tom and Sara ___ in the same class.",
          answer:      "are",
          options:     ["is", "are", "was", "am"],
          explanation: "Tom + Sara = 2 คน → plural → are",
          tag: "is/are", tagColor: "blue"
        },
        {
          emoji:       "🐠",
          sentence:    "There ___ three fish in the bowl.",
          answer:      "are",
          options:     ["is", "are", "was", "have"],
          explanation: "three fish = พหูพจน์ → There are",
          tag: "There is/are", tagColor: "green"
        },
        {
          emoji:       "📚",
          sentence:    "She ___ a lot of books at home.",
          answer:      "has",
          options:     ["have", "has", "are", "is"],
          explanation: "She → has (have → has เมื่อประธานเป็น He/She/It)",
          tag: "has/have", tagColor: "blue"
        },
        {
          emoji:       "⚽",
          sentence:    "The boys ___ football every evening.",
          answer:      "play",
          options:     ["play", "plays", "is playing", "has played"],
          explanation: "The boys = They (พหูพจน์) → play (ไม่เติม s)",
          tag: "Verb+s", tagColor: "primary"
        },
        {
          emoji:       "🌟",
          sentence:    "There ___ a big star in the sky tonight.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "a big star = เอกพจน์ → There is",
          tag: "There is/are", tagColor: "green"
        },
        {
          emoji:       "🐱",
          sentence:    "My cat ___ on the sofa every afternoon.",
          answer:      "sleeps",
          options:     ["sleep", "sleeps", "are sleeping", "slept"],
          explanation: "cat = It (เอกพจน์) → Verb+s → sleeps",
          tag: "Verb+s", tagColor: "primary"
        },
        {
          emoji:       "👨‍👩‍👧",
          sentence:    "My family ___ very happy together.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "family = Collective Noun (กลุ่มเดียว) → is",
          tag: "is/are", tagColor: "blue"
        },
        {
          emoji:       "🎹",
          sentence:    "Tom and Lisa ___ the piano very well.",
          answer:      "play",
          options:     ["play", "plays", "is playing", "has played"],
          explanation: "Tom + Lisa = 2 คน → plural → play",
          tag: "Verb+s", tagColor: "primary"
        },
        {
          emoji:       "🥛",
          sentence:    "There ___ some milk in the fridge.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "milk = นับไม่ได้ (singular) → There is",
          tag: "There is/are", tagColor: "green"
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
      description: "พิมพ์ Verb ที่ถูกต้อง: is / are / has / have หรือ Verb+s",
      icon:        "✍️",
      questions: [
        {
          emoji:       "🐦",
          sentence:    "There ___ a bird on the roof.",
          answer:      "is",
          explanation: "a bird = เอกพจน์ → There is"
        },
        {
          emoji:       "👩‍🍳",
          sentence:    "My mum ___ dinner every evening.",
          answer:      "cooks",
          explanation: "mum = She (เอกพจน์) → Verb+s → cooks"
        },
        {
          emoji:       "🐘🐘",
          sentence:    "The elephants ___ very big animals.",
          answer:      "are",
          explanation: "elephants = พหูพจน์ → are"
        },
        {
          emoji:       "🎒",
          sentence:    "I ___ a new backpack for school.",
          answer:      "have",
          explanation: "I → have"
        },
        {
          emoji:       "🌸🌸🌸",
          sentence:    "There ___ many flowers in the garden.",
          answer:      "are",
          explanation: "many flowers = พหูพจน์ → There are"
        },
        {
          emoji:       "🏃",
          sentence:    "He ___ to school every morning.",
          answer:      "walks",
          explanation: "He → Verb+s → walks"
        },
        {
          emoji:       "🐕",
          sentence:    "My neighbour's dog ___ a lot.",
          answer:      "barks",
          explanation: "dog = It (เอกพจน์) → Verb+s → barks"
        },
        {
          emoji:       "👩‍👧",
          sentence:    "Sara and her mum ___ the same eyes.",
          answer:      "have",
          explanation: "Sara + mum = 2 คน → plural → have"
        },
        {
          emoji:       "📺",
          sentence:    "My dad ___ the news every night.",
          answer:      "watches",
          explanation: "dad = He → Verb+es → watches (ลงท้าย -ch)"
        },
        {
          emoji:       "☁️",
          sentence:    "There ___ some clouds in the sky today.",
          answer:      "are",
          explanation: "some clouds = พหูพจน์ → There are"
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
      description: "ดูรูป emoji แล้วเลือก Verb ที่ถูกต้อง",
      icon:        "🖼️",
      questions: [
        {
          emoji:       "🐱",
          sentence:    "The cat ___ on the mat.",
          answer:      "is sitting",
          options:     ["sit", "sits", "is sitting", "are sitting"],
          explanation: "cat = เอกพจน์ → is sitting (Present Continuous)"
        },
        {
          emoji:       "🐱🐱🐱",
          sentence:    "The cats ___ on the mat.",
          answer:      "are sitting",
          options:     ["is sitting", "are sitting", "sits", "sit"],
          explanation: "cats = พหูพจน์ → are sitting"
        },
        {
          emoji:       "🍎",
          sentence:    "There ___ an apple on the table.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "an apple = เอกพจน์ → There is"
        },
        {
          emoji:       "🍎🍊🍋",
          sentence:    "There ___ three fruits on the table.",
          answer:      "are",
          options:     ["is", "are", "was", "has"],
          explanation: "three fruits = พหูพจน์ → There are"
        },
        {
          emoji:       "👦",
          sentence:    "The boy ___ a red bicycle.",
          answer:      "has",
          options:     ["have", "has", "is", "are"],
          explanation: "boy = He (เอกพจน์) → has"
        },
        {
          emoji:       "👦👧",
          sentence:    "The children ___ red bicycles.",
          answer:      "have",
          options:     ["has", "have", "is", "are"],
          explanation: "children = พหูพจน์ → have"
        },
        {
          emoji:       "🌧️",
          sentence:    "It ___ a lot in the rainy season.",
          answer:      "rains",
          options:     ["rain", "rains", "are raining", "rained"],
          explanation: "It → Verb+s → rains"
        },
        {
          emoji:       "👩‍🎓👨‍🎓",
          sentence:    "The students ___ hard for their exams.",
          answer:      "study",
          options:     ["study", "studies", "is studying", "has studied"],
          explanation: "students = พหูพจน์ → study (ไม่เติม s)"
        },
        {
          emoji:       "🐶",
          sentence:    "My dog ___ a bone in the garden.",
          answer:      "has",
          options:     ["have", "has", "are", "is"],
          explanation: "dog = It (เอกพจน์) → has"
        },
        {
          emoji:       "👨‍👩‍👧‍👦",
          sentence:    "My grandparents ___ in Chiang Mai.",
          answer:      "live",
          options:     ["live", "lives", "is living", "has lived"],
          explanation: "grandparents = They (พหูพจน์) → live (ไม่เติม s)"
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
          wrong:       "She play football every day.",
          options:     ["She play football every day.", "She plays football every day.", "She is play football every day."],
          answer:      "She plays football every day.",
          explanation: "She → Verb+s → plays"
        },
        {
          wrong:       "There is many books on the shelf.",
          options:     ["There is many books on the shelf.", "There are many books on the shelf.", "There was many books on the shelf."],
          answer:      "There are many books on the shelf.",
          explanation: "many books = พหูพจน์ → There are"
        },
        {
          wrong:       "My parents is very kind.",
          options:     ["My parents is very kind.", "My parents are very kind.", "My parents was very kind."],
          answer:      "My parents are very kind.",
          explanation: "parents = พหูพจน์ → are"
        },
        {
          wrong:       "He have two sisters.",
          options:     ["He have two sisters.", "He has two sisters.", "He are two sisters."],
          answer:      "He has two sisters.",
          explanation: "He → has (ไม่ใช่ have)"
        },
        {
          wrong:       "The dog run very fast.",
          options:     ["The dog run very fast.", "The dog runs very fast.", "The dog are running very fast."],
          answer:      "The dog runs very fast.",
          explanation: "dog = It (เอกพจน์) → Verb+s → runs"
        },
        {
          wrong:       "There are a cat under the table.",
          options:     ["There are a cat under the table.", "There is a cat under the table.", "There were a cat under the table."],
          answer:      "There is a cat under the table.",
          explanation: "a cat = เอกพจน์ → There is"
        },
        {
          wrong:       "We plays games after school.",
          options:     ["We plays games after school.", "We play games after school.", "We is playing games after school."],
          answer:      "We play games after school.",
          explanation: "We → play (ไม่เติม s)"
        },
        {
          wrong:       "My sister have a beautiful dress.",
          options:     ["My sister have a beautiful dress.", "My sister has a beautiful dress.", "My sister are having a beautiful dress."],
          answer:      "My sister has a beautiful dress.",
          explanation: "sister = She (เอกพจน์) → has"
        },
        {
          wrong:       "The children plays in the park.",
          options:     ["The children plays in the park.", "The children play in the park.", "The children is playing in the park."],
          answer:      "The children play in the park.",
          explanation: "children = พหูพจน์ → play (ไม่เติม s)"
        },
        {
          wrong:       "Tom and I is going to the library.",
          options:     ["Tom and I is going to the library.", "Tom and I are going to the library.", "Tom and I was going to the library."],
          answer:      "Tom and I are going to the library.",
          explanation: "Tom and I = 2 คน → plural → are"
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
      description: "ลากคำมาวางในช่องว่างให้ถูกต้อง",
      icon:        "🧩",
      questions: [
        {
          sentence:    "My brother ___ the guitar every weekend. 🎸",
          answer:      "plays",
          bank:        ["play", "plays", "is", "are"],
          explanation: "brother = He (เอกพจน์) → Verb+s → plays"
        },
        {
          sentence:    "There ___ five students in the room. 🏫",
          answer:      "are",
          bank:        ["is", "are", "was", "were"],
          explanation: "five students = พหูพจน์ → There are"
        },
        {
          sentence:    "She ___ two younger sisters. 👧👧",
          answer:      "has",
          bank:        ["have", "has", "is", "are"],
          explanation: "She → has"
        },
        {
          sentence:    "The birds ___ in the tree every morning. 🐦🐦",
          answer:      "sing",
          bank:        ["sing", "sings", "is", "are"],
          explanation: "birds = พหูพจน์ → sing (ไม่เติม s)"
        },
        {
          sentence:    "There ___ a rainbow after the rain. 🌈",
          answer:      "is",
          bank:        ["is", "are", "were", "have"],
          explanation: "a rainbow = เอกพจน์ → There is"
        },
        {
          sentence:    "My mum and dad ___ very hard. 👨‍💼👩‍💼",
          answer:      "work",
          bank:        ["work", "works", "is", "are"],
          explanation: "mum + dad = 2 คน → plural → work"
        },
        {
          sentence:    "The sun ___ in the east every morning. ☀️",
          answer:      "rises",
          bank:        ["rise", "rises", "is", "are"],
          explanation: "sun = It (เอกพจน์) → Verb+s → rises"
        },
        {
          sentence:    "We ___ a big house near the park. 🏠",
          answer:      "have",
          bank:        ["have", "has", "is", "are"],
          explanation: "We → have"
        },
        {
          sentence:    "There ___ some sugar in the jar. 🍯",
          answer:      "is",
          bank:        ["is", "are", "were", "have"],
          explanation: "sugar = นับไม่ได้ (singular) → There is"
        },
        {
          sentence:    "My friends ___ me every weekend. 👫",
          answer:      "visit",
          bank:        ["visit", "visits", "is", "are"],
          explanation: "friends = They (พหูพจน์) → visit (ไม่เติม s)"
        }
      ]
    }
  ]
};
