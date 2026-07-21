// c-subject&verb-agreement-j.js
// วิธีใช้: <script src="c-subject&verb-agreement-j.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "Junior High · Grammar · A2–B1",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "การทำให้กริยาสอดคล้องกับประธาน",
  emoji:       "⚖️",
  subtitle:    "ครบทุก SVA rules ระดับ Junior ใน 4 ขั้นตอน",
  accentColor: "blue",

  quizLabel: "✏️ Mini Quiz",
  quizIntro: "ครอบคลุม Collective nouns, Indefinite pronouns, Compound subjects + Quantity expressions",

  sections: [

    /* ────────────────────────────────────
       SECTION 1 — ทบทวน + Collective Nouns
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ ทบทวน + Collective Nouns",
      cards: [
        {
          title: "🔁 ทบทวนพื้นฐาน SVA",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**กฎพื้นฐาน**: ประธาน **เอกพจน์** → Verb เอกพจน์ | ประธาน **พหูพจน์** → Verb พหูพจน์\nในปัจจุบันกาล — เพิ่ม **-s/-es** ที่ Verb เมื่อประธานเป็น He/She/It หรือ Noun เอกพจน์"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "Verb รูปปัจจุบัน", "ตัวอย่าง"],
              rows: [
                ["I",            "**play** (ไม่เติม s)",  "I [hl:blue]**play**[/hl] football."],
                ["You",          "**play**",               "You [hl:blue]**play**[/hl] well."],
                ["He / She / It","**plays** (เติม s)",     "She [hl:blue]**plays**[/hl] the piano."],
                ["We / They",    "**play**",               "They [hl:blue]**play**[/hl] together."],
                ["Noun เอกพจน์", "**plays**",              "The dog [hl:blue]**runs**[/hl] fast."],
                ["Noun พหูพจน์", "**play**",               "The dogs [hl:blue]**run**[/hl] fast."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "is/are/was/were + have/has",
              text: "The cat [hl:blue]**is**[/hl] hungry. | The cats [hl:blue]**are**[/hl] hungry.\nShe [hl:blue]**has**[/hl] a dog. | They [hl:blue]**have**[/hl] a dog.\nThere [hl:blue]**is**[/hl] a book. | There [hl:blue]**are**[/hl] books."
            }
          ]
        },
        {
          title: "👥 Collective Nouns — AmE vs BrE",
          titleColor: "secondary",
          blocks: [
            {
              type: "explanation",
              text: "**Collective Noun** = คำนามที่หมายถึงกลุ่ม เช่น team, family, class, government\nการใช้ Verb ขึ้นอยู่กับว่ามองเป็น **กลุ่มเดียว** หรือ **แยกทีละคน**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "blue",
                  word: "AmE — Singular",
                  sub: "มองเป็นกลุ่มเดียว",
                  body: "The team [hl:blue]**is**[/hl] ready to play.\nThe family [hl:blue]**lives**[/hl] in Bangkok.\nThe committee [hl:blue]**has**[/hl] decided."
                },
                {
                  color: "secondary",
                  word: "BrE — Plural",
                  sub: "มองเป็นสมาชิกแต่ละคน",
                  body: "The team [hl:secondary]**are**[/hl] warming up.\nThe family [hl:secondary]**are**[/hl] arguing.\nThe committee [hl:secondary]**have**[/hl] disagreed."
                }
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                {
                  en: "The class [hl:blue]**is**[/hl] large. (AmE — มองเป็นห้องเดียว)",
                  th: "ชั้นเรียนมีขนาดใหญ่ (AmE)"
                },
                {
                  en: "The class [hl:secondary]**are**[/hl] doing different things. (BrE — แต่ละคนทำต่างกัน)",
                  th: "นักเรียนกำลังทำสิ่งต่างๆ (BrE)"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "📌",
              title: "ข้อสอบไทยและ PAT นิยม AmE — ใช้ Singular",
              text: "The team [hl:blue]**is**[/hl] well-prepared. ✅ (นิยมใช้ในข้อสอบไทย)\nThe government [hl:blue]**has**[/hl] announced a new policy. ✅"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — Indefinite Pronouns + each/every
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ Indefinite & each/every",
      cards: [
        {
          title: "🌐 Indefinite Pronouns → Singular",
          titleColor: "green",
          blocks: [
            {
              type: "explanation",
              text: "Indefinite Pronouns ต่อไปนี้ใช้ **Verb เอกพจน์เสมอ** แม้จะดูเหมือนหมายถึงหลายคน"
            },
            {
              type: "compare",
              cols: 3,
              items: [
                {
                  color: "green",
                  word: "every-",
                  sub: "→ Singular",
                  body: "**everyone**\n**everybody**\n**everything**\n**everywhere**"
                },
                {
                  color: "blue",
                  word: "some-",
                  sub: "→ Singular",
                  body: "**someone**\n**somebody**\n**something**\n**somewhere**"
                },
                {
                  color: "red",
                  word: "no-",
                  sub: "→ Singular",
                  body: "**no one**\n**nobody**\n**nothing**\n**nowhere**"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "green",
              items: [
                {
                  en: "[hl:green]**Everyone**[/hl] in the class **is** welcome to join.",
                  th: "everyone → Singular → is ✅"
                },
                {
                  en: "[hl:blue]**Someone**[/hl] **has** left a bag here.",
                  th: "someone → Singular → has ✅"
                },
                {
                  en: "[hl:red]**Nobody**[/hl] **knows** the answer.",
                  th: "nobody → Singular → knows ✅"
                },
                {
                  en: "❌ Everyone **are** ready. → ✅ Everyone **is** ready.",
                  th: "ข้อผิดพลาดที่พบบ่อย"
                }
              ]
            }
          ]
        },
        {
          title: "🔢 each / every / either / neither → Singular",
          titleColor: "amber",
          blocks: [
            {
              type: "explanation",
              text: "คำเหล่านี้ตามด้วย **Noun เอกพจน์** และใช้ **Verb เอกพจน์** เสมอ"
            },
            {
              type: "table",
              headerColor: "amber",
              headers: ["คำ", "ความหมาย", "ตัวอย่าง"],
              rows: [
                [
                  "[hl:amber]**each**[/hl]",
                  "แต่ละ (มองทีละอัน)",
                  "[hl:amber]Each[/hl] student **has** a textbook."
                ],
                [
                  "[hl:amber]**every**[/hl]",
                  "ทุก (มองรวมหมด)",
                  "[hl:amber]Every[/hl] door **is** locked."
                ],
                [
                  "[hl:amber]**either**[/hl]",
                  "อันใดอันหนึ่งใน 2",
                  "[hl:amber]Either[/hl] answer **is** correct."
                ],
                [
                  "[hl:amber]**neither**[/hl]",
                  "ไม่ทั้งสองเลย",
                  "[hl:amber]Neither[/hl] option **was** good."
                ]
              ]
            },
            {
              type: "alert",
              color: "amber",
              icon: "⚡",
              title: "each of / either of / neither of + plural noun → Singular",
              text: "[hl:amber]Each of[/hl] the students **has** a locker. ✅\n[hl:amber]Either of[/hl] the answers **is** acceptable. ✅\n[hl:amber]Neither of[/hl] them **was** late. ✅\n❌ Each of the students **have**... (ผิด)"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — Compound Subjects
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ Compound Subjects",
      cards: [
        {
          title: "➕ A and B → Plural",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อเชื่อมประธาน 2 ตัวด้วย **and** → ถือเป็นประธาน **พหูพจน์** → ใช้ Verb พหูพจน์"
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                {
                  en: "Tom [hl:blue]**and**[/hl] Sara [hl:blue]**are**[/hl] best friends.",
                  th: "Tom + Sara = 2 คน → are"
                },
                {
                  en: "My mum [hl:blue]**and**[/hl] dad [hl:blue]**work**[/hl] in the same office.",
                  th: "mum + dad = 2 คน → work"
                },
                {
                  en: "Reading [hl:blue]**and**[/hl] writing [hl:blue]**are**[/hl] important skills.",
                  th: "Reading + writing = 2 กิจกรรม → are"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              title: "ข้อยกเว้น: and เชื่อมสิ่งที่เป็นหน่วยเดียวกัน",
              text: "**Bread and butter** [hl:blue]**is**[/hl] my favourite breakfast. (= อาหาร 1 อย่าง)\n**The captain and coach** [hl:blue]**is**[/hl] Mr. Smith. (= คนคนเดียว 2 บทบาท)"
            }
          ]
        },
        {
          title: "↔️ either...or / neither...nor — Proximity Rule",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "**Proximity Rule**: Verb ตาม **Subject ที่อยู่ใกล้กว่า** (ตัว B หรือตัวหลัง)"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["รูปแบบ", "Verb ตาม", "ตัวอย่าง"],
              rows: [
                [
                  "either **A** or **B**",
                  "**B** (ตัวหลัง)",
                  "Either Tom or his friends [hl:purple]**are**[/hl] coming."
                ],
                [
                  "either **A** or **B**",
                  "**B** (เอกพจน์)",
                  "Either his friends or Tom [hl:purple]**is**[/hl] coming."
                ],
                [
                  "neither **A** nor **B**",
                  "**B** (ตัวหลัง)",
                  "Neither Sara nor her brothers [hl:purple]**have**[/hl] arrived."
                ],
                [
                  "neither **A** nor **B**",
                  "**B** (เอกพจน์)",
                  "Neither the boys nor Sara [hl:purple]**has**[/hl] arrived."
                ]
              ]
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "purple",
                  word: "B = Plural",
                  sub: "→ Verb พหูพจน์",
                  body: "Either Tom or **his sisters** [hl:purple]**are**[/hl] cooking.\n(sisters = พหูพจน์ → are)"
                },
                {
                  color: "blue",
                  word: "B = Singular",
                  sub: "→ Verb เอกพจน์",
                  body: "Either his sisters or **Tom** [hl:blue]**is**[/hl] cooking.\n(Tom = เอกพจน์ → is)"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 4 — Quantity Expressions
    ──────────────────────────────────── */
    {
      id: 4,
      label: "4️⃣ Quantity Expressions",
      cards: [
        {
          title: "🔢 A number of vs The number of",
          titleColor: "primary",
          blocks: [
            {
              type: "explanation",
              text: "สองวลีนี้ดูคล้ายกันแต่ใช้ Verb ต่างกัน — จุดสอบบ่อยที่สุดในระดับ Junior!"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "primary",
                  word: "A number of",
                  sub: "+ plural noun → PLURAL verb",
                  body: "= หลาย / จำนวนหนึ่ง\n\n[hl:primary]A number of[/hl] students **have** failed.\n[hl:primary]A number of[/hl] cars **were** parked outside."
                },
                {
                  color: "blue",
                  word: "The number of",
                  sub: "+ plural noun → SINGULAR verb",
                  body: "= จำนวน (ตัวเลข)\n\n[hl:blue]The number of[/hl] students **has** increased.\n[hl:blue]The number of[/hl] cars **is** rising."
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "จำง่าย: A = หลาย (plural) / The = จำนวน (singular)",
              text: "[hl:primary]A number of[/hl] complaints **were** received. ✅\n[hl:blue]The number of[/hl] complaints **has** doubled. ✅\n❌ A number of students **has** failed.\n❌ The number of students **have** increased."
            }
          ]
        },
        {
          title: "📦 A lot of + ดูที่ Noun",
          titleColor: "secondary",
          blocks: [
            {
              type: "explanation",
              text: "**a lot of / lots of / plenty of** — Verb ขึ้นอยู่กับ **Noun ที่ตามมา**"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Expression + Noun", "Verb", "ตัวอย่าง"],
              rows: [
                [
                  "a lot of + **นับได้ pl**",
                  { badge: "pl", text: "พหูพจน์" },
                  "A lot of students [hl:secondary]**are**[/hl] absent today."
                ],
                [
                  "a lot of + **นับไม่ได้**",
                  { badge: "sg", text: "เอกพจน์" },
                  "A lot of water [hl:secondary]**was**[/hl] wasted."
                ],
                [
                  "lots of + **นับได้ pl**",
                  { badge: "pl", text: "พหูพจน์" },
                  "Lots of people [hl:secondary]**come**[/hl] here daily."
                ],
                [
                  "plenty of + **นับไม่ได้**",
                  { badge: "sg", text: "เอกพจน์" },
                  "Plenty of time [hl:secondary]**is**[/hl] available."
                ]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                {
                  en: "A lot of homework [hl:secondary]**was**[/hl] given today.",
                  th: "homework = นับไม่ได้ → singular → was"
                },
                {
                  en: "A lot of questions [hl:secondary]**were**[/hl] asked during the meeting.",
                  th: "questions = นับได้พหูพจน์ → plural → were"
                }
              ]
            },
            {
              type: "alert",
              color: "teal",
              icon: "💡",
              title: "สรุปกฎ Quantity Expressions",
              text: "**ดูที่ Noun หลัง of เสมอ**\n→ Noun นับได้พหูพจน์ = **plural verb**\n→ Noun นับไม่ได้ / เอกพจน์ = **singular verb**"
            }
          ]
        },
        {
          title: "📋 สรุป SVA ทั้งหมดระดับ Junior",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["Rule", "Verb", "จำสั้นๆ"],
              rows: [
                ["He / She / It / Singular noun", { badge: "sg", text: "เอกพจน์" }, "เติม -s/-es ที่ Verb"],
                ["We / They / Plural noun", { badge: "pl", text: "พหูพจน์" }, "ไม่เติม -s"],
                ["Collective noun (AmE)", { badge: "sg", text: "เอกพจน์" }, "the team is"],
                ["everyone / someone / nobody", { badge: "sg", text: "เอกพจน์" }, "Indefinite → singular"],
                ["each / every / either / neither", { badge: "sg", text: "เอกพจน์" }, "ทีละอัน → singular"],
                ["each/either/neither of + plural", { badge: "sg", text: "เอกพจน์" }, "of ไม่เปลี่ยน rule"],
                ["A and B", { badge: "pl", text: "พหูพจน์" }, "รวมประธาน → plural"],
                ["either A or B / neither A nor B", { badge: "both", text: "ตาม B" }, "Proximity Rule"],
                ["A number of + plural", { badge: "pl", text: "พหูพจน์" }, "= หลาย"],
                ["The number of + plural", { badge: "sg", text: "เอกพจน์" }, "= จำนวน"],
                ["a lot of + plural noun", { badge: "pl", text: "พหูพจน์" }, "ดูที่ Noun หลัง of"],
                ["a lot of + uncountable", { badge: "sg", text: "เอกพจน์" }, "ดูที่ Noun หลัง of"]
              ]
            }
          ]
        }
      ]
    }
  ],

  /* ══════════════════════════════════════
     QUIZ — 12 ข้อ
  ══════════════════════════════════════ */
  quiz: [
    {
      sentence: "The football team ___ practising hard for the final match.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "Collective noun (AmE) → singular → is",
      tag: "Collective", tagColor: "secondary"
    },
    {
      sentence: "Everyone in the school ___ excited about the sports day.",
      answer: "is",
      options: ["is", "are", "were", "have been"],
      explanation: "Everyone → Indefinite Pronoun → singular → is",
      tag: "Indefinite", tagColor: "green"
    },
    {
      sentence: "Each of the players ___ given a jersey before the game.",
      answer: "was",
      options: ["were", "was", "are", "have"],
      explanation: "each of + plural noun → singular verb → was",
      tag: "each of", tagColor: "amber"
    },
    {
      sentence: "Neither Tom nor his brothers ___ at home right now.",
      answer: "are",
      options: ["is", "are", "was", "has"],
      explanation: "Neither...nor → Proximity Rule → ตาม B (brothers = พหูพจน์) → are",
      tag: "Proximity", tagColor: "purple"
    },
    {
      sentence: "A number of students ___ failed to submit their assignments.",
      answer: "have",
      options: ["has", "have", "is", "was"],
      explanation: "A number of + plural → plural verb → have",
      tag: "A number of", tagColor: "primary"
    },
    {
      sentence: "The number of tourists visiting Thailand ___ increased every year.",
      answer: "has",
      options: ["have", "has", "were", "are"],
      explanation: "The number of → singular verb → has",
      tag: "The number of", tagColor: "blue"
    },
    {
      sentence: "A lot of homework ___ given to students every day.",
      answer: "is",
      options: ["are", "is", "were", "have"],
      explanation: "a lot of + นับไม่ได้ (homework) → singular → is",
      tag: "a lot of", tagColor: "secondary"
    },
    {
      sentence: "Either Sara or her parents ___ going to attend the meeting.",
      answer: "are",
      options: ["is", "are", "was", "has"],
      explanation: "Either...or → Proximity Rule → ตาม B (her parents = พหูพจน์) → are",
      tag: "Proximity", tagColor: "purple"
    },
    {
      sentence: "Nobody in my class ___ the answer to that question.",
      answer: "knows",
      options: ["know", "knows", "are knowing", "have known"],
      explanation: "Nobody → Indefinite Pronoun → singular → knows",
      tag: "Indefinite", tagColor: "green"
    },
    {
      sentence: "My mum and dad ___ both teachers at the same school.",
      answer: "are",
      options: ["is", "are", "was", "has"],
      explanation: "A and B = 2 คน → plural verb → are",
      tag: "A and B", tagColor: "blue"
    },
    {
      sentence: "Every student in every class ___ required to wear a uniform.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "every + Noun เอกพจน์ → singular verb → is",
      tag: "every", tagColor: "amber"
    },
    {
      sentence: "A lot of questions ___ raised during the discussion.",
      answer: "were",
      options: ["was", "were", "is", "has"],
      explanation: "a lot of + นับได้พหูพจน์ (questions) → plural verb → were",
      tag: "a lot of", tagColor: "secondary"
    }
  ]
};
