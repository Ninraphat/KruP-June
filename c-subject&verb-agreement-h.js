// c-subject&verb-agreement-h.js
// วิธีใช้: <script src="c-subject&verb-agreement-h.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "High School · Grammar · B1–B2",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "ขั้นสูง",
  emoji:       "⚖️",
  subtitle:    "ครบทุก SVA rules ขั้นสูง + PAT/O-NET cases ใน 5 ขั้นตอน",
  accentColor: "blue",

  quizLabel: "✏️ Mini Quiz",
  quizIntro: "ครอบคลุม Inverted, Fractions, Intervening phrases + PAT level",

  sections: [

    /* ────────────────────────────────────
       SECTION 1 — ทบทวน + None of
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ ทบทวน + None of",
      cards: [
        {
          title: "🔁 ทบทวนจาก Junior High",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["Rule", "Verb", "ตัวอย่าง"],
              rows: [
                ["each / every / either / neither", { badge: "sg", text: "เอกพจน์" }, "Each student **has** a book."],
                ["everyone / someone / nobody", { badge: "sg", text: "เอกพจน์" }, "Everyone **is** ready."],
                ["A and B", { badge: "pl", text: "พหูพจน์" }, "Tom and Sara **are** here."],
                ["either A or B / neither A nor B", { badge: "both", text: "ตาม B" }, "Neither Tom nor his friends **are** coming."],
                ["A number of + plural", { badge: "pl", text: "พหูพจน์" }, "A number of students **have** failed."],
                ["The number of + plural", { badge: "sg", text: "เอกพจน์" }, "The number of cars **has** increased."],
                ["Collective noun (AmE)", { badge: "sg", text: "เอกพจน์" }, "The team **is** ready."],
                ["Collective noun (BrE)", { badge: "pl", text: "พหูพจน์" }, "The team **are** playing well."]
              ]
            }
          ]
        },
        {
          title: "🆕 None of — ยืดหยุ่นได้ทั้งคู่",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**none of** + plural noun → ยอมรับได้ทั้ง **singular** และ **plural** verb\nทั้งคู่ถูกต้องตามมาตรฐาน — แต่ PAT มักยอมรับ **singular** มากกว่า"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "green",
                  word: "Singular ✅",
                  sub: "formal / PAT นิยม",
                  body: "None of the students **was** absent.\nNone of the evidence **is** convincing.\nNone of them **has** arrived."
                },
                {
                  color: "blue",
                  word: "Plural ✅",
                  sub: "informal / BrE นิยม",
                  body: "None of the students **were** absent.\nNone of the reports **are** accurate.\nNone of them **have** arrived."
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "None of + นับไม่ได้ → Singular เสมอ",
              text: "None of the water [hl:green]**was**[/hl] wasted. ✅\nNone of the information [hl:green]**is**[/hl] accurate. ✅\n❌ None of the water **were** wasted."
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — Inverted + Relative Clause
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ Inverted & Relative Clause",
      cards: [
        {
          title: "🔄 Inverted Sentences",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "ประโยคที่ **Verb วางหน้า Subject** — Verb ต้องตาม Subject จริงๆ ที่อยู่หลัง Verb\nพบบ่อยกับ **Here / There + Verb + Subject**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["โครงสร้าง", "ตัวอย่าง", "หมายเหตุ"],
              rows: [
                [
                  "Here + **Verb** + Subject",
                  "Here [hl:blue]**comes**[/hl] the bus.",
                  "bus = เอกพจน์ → comes"
                ],
                [
                  "Here + **Verb** + Subject",
                  "Here [hl:blue]**come**[/hl] the students.",
                  "students = พหูพจน์ → come"
                ],
                [
                  "There + **Verb** + Subject",
                  "There [hl:blue]**goes**[/hl] my chance.",
                  "my chance = เอกพจน์ → goes"
                ],
                [
                  "Negative Adverb + **Verb** + Subject",
                  "Never [hl:blue]**has**[/hl] she spoken like that.",
                  "she = เอกพจน์ → has"
                ]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "อย่าหลงกับ Here/There — ดู Subject จริงๆ",
              text: "Here [hl:blue]**comes**[/hl] the bus. ✅ (bus = เอกพจน์)\nHere [hl:blue]**come**[/hl] the students. ✅ (students = พหูพจน์)\n❌ Here comes the students."
            }
          ]
        },
        {
          title: "🔗 Relative Clause SVA",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อ **who / which / that** เป็นประธานของ Relative Clause\nVerb ใน Relative Clause ต้องตาม **Antecedent** (Noun ที่ who/which/that แทน)"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["ประโยค", "Antecedent", "Verb"],
              rows: [
                [
                  "The student who [hl:purple]**studies**[/hl] hard will succeed.",
                  "student (เอกพจน์)",
                  { badge: "sg", text: "studies" }
                ],
                [
                  "Students who [hl:purple]**study**[/hl] hard will succeed.",
                  "Students (พหูพจน์)",
                  { badge: "pl", text: "study" }
                ],
                [
                  "It is the students who [hl:purple]**are**[/hl] responsible.",
                  "students (พหูพจน์)",
                  { badge: "pl", text: "are" }
                ],
                [
                  "It is the teacher who [hl:purple]**is**[/hl] responsible.",
                  "teacher (เอกพจน์)",
                  { badge: "sg", text: "is" }
                ]
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "📌",
              title: "จุดสอบ: one of the + plural + who/that",
              text: "One of the students who [hl:purple]**study**[/hl] hard is Tom.\n→ who แทน students (พหูพจน์) → study ✅\nThe one who [hl:purple]**studies**[/hl] hard is Tom.\n→ who แทน one (เอกพจน์) → studies ✅"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — Fractions + of-expressions
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ Fractions & of-expressions",
      cards: [
        {
          title: "📊 Fractions / Percentages / Majority",
          titleColor: "green",
          blocks: [
            {
              type: "explanation",
              text: "**กฎง่ายๆ: ดูที่ Noun หลัง of**\n- Noun นับได้พหูพจน์ → **Verb พหูพจน์**\n- Noun นับไม่ได้ / เอกพจน์ → **Verb เอกพจน์**"
            },
            {
              type: "table",
              headerColor: "green",
              headers: ["Expression", "Noun หลัง of", "Verb", "ตัวอย่าง"],
              rows: [
                [
                  "Half of",
                  "students (นับได้ pl)",
                  { badge: "pl", text: "พหูพจน์" },
                  "Half of the students [hl:green]**have**[/hl] submitted."
                ],
                [
                  "Half of",
                  "the milk (นับไม่ได้)",
                  { badge: "sg", text: "เอกพจน์" },
                  "Half of the milk [hl:green]**has**[/hl] gone bad."
                ],
                [
                  "Two-thirds of",
                  "the land (นับไม่ได้)",
                  { badge: "sg", text: "เอกพจน์" },
                  "Two-thirds of the land [hl:green]**is**[/hl] flooded."
                ],
                [
                  "40% of",
                  "employees (นับได้ pl)",
                  { badge: "pl", text: "พหูพจน์" },
                  "40% of employees [hl:green]**work**[/hl] from home."
                ],
                [
                  "The majority of",
                  "people (นับได้ pl)",
                  { badge: "pl", text: "พหูพจน์" },
                  "The majority of people [hl:green]**agree**[/hl]."
                ],
                [
                  "The rest of",
                  "the food (นับไม่ได้)",
                  { badge: "sg", text: "เอกพจน์" },
                  "The rest of the food [hl:green]**was**[/hl] thrown away."
                ]
              ]
            }
          ]
        },
        {
          title: "📐 of-expressions สรุปรวม",
          titleColor: "green",
          blocks: [
            {
              type: "examples",
              borderColor: "green",
              items: [
                {
                  en: "A large number of workers [hl:green]**have**[/hl] been laid off.",
                  th: "A large number of + plural → พหูพจน์"
                },
                {
                  en: "A large amount of money [hl:green]**was**[/hl] donated.",
                  th: "A large amount of + นับไม่ได้ → เอกพจน์"
                },
                {
                  en: "The minority of voters [hl:green]**supports**[/hl] the policy.",
                  th: "The minority of + นับได้ pl → พหูพจน์ (หรือ sg ก็ได้)"
                },
                {
                  en: "Three-quarters of the budget [hl:green]**has**[/hl] been spent.",
                  th: "Fraction + นับไม่ได้ → เอกพจน์"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "สรุปกฎ: ดูที่ Noun หลัง of เสมอ",
              text: "[hl:green]Fraction/% + of + **plural noun**[/hl] → **plural verb**\n[hl:green]Fraction/% + of + **uncountable/singular noun**[/hl] → **singular verb**"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 4 — Titles + Intervening + Gerund
    ──────────────────────────────────── */
    {
      id: 4,
      label: "4️⃣ Titles, Phrases & Gerunds",
      cards: [
        {
          title: "📚 Titles / Names / Subjects → Singular",
          titleColor: "amber",
          blocks: [
            {
              type: "explanation",
              text: "สิ่งต่อไปนี้แม้ดูเหมือน **พหูพจน์** แต่ใช้ **Verb เอกพจน์** เสมอ"
            },
            {
              type: "table",
              headerColor: "amber",
              headers: ["ประเภท", "ตัวอย่าง", "เหตุผล"],
              rows: [
                [
                  "วิชาเรียน",
                  "**Mathematics** [hl:amber]**is**[/hl] my favourite subject.",
                  "ชื่อวิชา = หน่วยเดียว"
                ],
                [
                  "โรค / แนวคิด",
                  "**Economics** [hl:amber]**affects**[/hl] everyone.",
                  "ลงท้าย -ics = singular"
                ],
                [
                  "ชื่อหนังสือ/ภาพยนตร์",
                  "**\"The Turtles\"** [hl:amber]**is**[/hl] a great novel.",
                  "ชื่อเรื่อง = 1 ชิ้นงาน"
                ],
                [
                  "ชื่อประเทศ/องค์กร",
                  "**The United Nations** [hl:amber]**has**[/hl] responded.",
                  "= องค์กรเดียว"
                ],
                [
                  "ระยะเวลา / เงิน / ระยะทาง",
                  "**Ten years** [hl:amber]**is**[/hl] a long time.",
                  "= ปริมาณรวม หน่วยเดียว"
                ],
                [
                  "ระยะเวลา / เงิน / ระยะทาง",
                  "**Five kilometres** [hl:amber]**is**[/hl] too far to walk.",
                  "= ปริมาณรวม หน่วยเดียว"
                ]
              ]
            }
          ]
        },
        {
          title: "🔌 Intervening Phrases — อย่าหลงกับวลีคั่น",
          titleColor: "red",
          blocks: [
            {
              type: "explanation",
              text: "วลีที่คั่นระหว่างประธานและ Verb **ไม่มีผลต่อ SVA**\nVerb ยังคงตาม **Subject หลัก** เสมอ"
            },
            {
              type: "table",
              headerColor: "red",
              headers: ["Intervening Phrase", "ตัวอย่าง"],
              rows: [
                [
                  "**as well as**",
                  "The teacher, as well as her students, [hl:red]**is**[/hl] attending. ✅"
                ],
                [
                  "**along with**",
                  "The CEO, along with his managers, [hl:red]**was**[/hl] present. ✅"
                ],
                [
                  "**together with**",
                  "Sara, together with Tom, [hl:red]**has**[/hl] submitted. ✅"
                ],
                [
                  "**in addition to**",
                  "The report, in addition to annexes, [hl:red]**needs**[/hl] revision. ✅"
                ],
                [
                  "**including / excluding**",
                  "Everyone, including the teachers, [hl:red]**was**[/hl] surprised. ✅"
                ]
              ]
            },
            {
              type: "alert",
              color: "red",
              icon: "⚠️",
              title: "as well as ≠ and",
              text: "Tom [hl:red]**and**[/hl] Sara **are** here. (and = รวมประธาน → plural)\nTom, [hl:red]**as well as**[/hl] Sara, [hl:red]**is**[/hl] here. ✅ (as well as = คั่น → ตาม Tom)"
            }
          ]
        },
        {
          title: "🏃 Gerund / Infinitive as Subject → Singular",
          titleColor: "secondary",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อ **Gerund (-ing)** หรือ **Infinitive (to+V)** ทำหน้าที่เป็น **Subject** → ใช้ **Verb เอกพจน์** เสมอ"
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                {
                  en: "[hl:secondary]**Swimming**[/hl] every day **is** good for your health.",
                  th: "Swimming = Gerund Subject → is"
                },
                {
                  en: "[hl:secondary]**Reading**[/hl] novels **improves** your vocabulary.",
                  th: "Reading = Gerund Subject → improves"
                },
                {
                  en: "[hl:secondary]**To err**[/hl] is human; to forgive is divine.",
                  th: "To err = Infinitive Subject → is"
                },
                {
                  en: "[hl:secondary]**Travelling**[/hl] alone **requires** courage.",
                  th: "Travelling = Gerund Subject → requires"
                },
                {
                  en: "[hl:secondary]**Eating**[/hl] too much sugar **causes** health problems.",
                  th: "Eating = Gerund Subject → causes"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              title: "Gerund Subject เสมอเป็นเอกพจน์",
              text: "[hl:secondary]Swimming[/hl] **is** fun. ✅\n❌ Swimming **are** fun.\n[hl:secondary]To study[/hl] hard **pays** off. ✅\n❌ To study hard **pay** off."
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 5 — Not only...but also + PAT Ref
    ──────────────────────────────────── */
    {
      id: 5,
      label: "5️⃣ Paired Conjunctions + PAT",
      cards: [
        {
          title: "🔀 Paired Conjunctions — Proximity Rule",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "**Proximity Rule**: เมื่อใช้ paired conjunction → **Verb ตาม Subject ที่ใกล้กว่า** (ตัวหลัง)"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["Conjunction", "Verb ตาม", "ตัวอย่าง"],
              rows: [
                [
                  "**either A or B**",
                  "B (ตัวหลัง)",
                  "Either the students or the teacher [hl:purple]**is**[/hl] responsible."
                ],
                [
                  "**neither A nor B**",
                  "B (ตัวหลัง)",
                  "Neither Tom nor his friends [hl:purple]**are**[/hl] coming."
                ],
                [
                  "**not only A but also B**",
                  "B (ตัวหลัง)",
                  "Not only Tom but also his sisters [hl:purple]**are**[/hl] invited."
                ],
                [
                  "**not A but B**",
                  "B (ตัวหลัง)",
                  "Not the teachers but the student [hl:purple]**is**[/hl] at fault."
                ]
              ]
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                {
                  en: "Not only the manager but also the employees [hl:purple]**were**[/hl] surprised.",
                  th: "B = employees (พหูพจน์) → were"
                },
                {
                  en: "Either the parents or the child [hl:purple]**needs**[/hl] counselling.",
                  th: "B = child (เอกพจน์) → needs"
                },
                {
                  en: "Neither the students nor the teacher [hl:purple]**was**[/hl] informed.",
                  th: "B = teacher (เอกพจน์) → was"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "Tip: สลับ A และ B เพื่อหลีกเลี่ยงความงุ่มง่าม",
              text: "Neither the manager nor the staff **was** informed. (ฟังดูแปลก)\n→ สลับ: Neither the staff nor the manager [hl:purple]**was**[/hl] informed. (ดีกว่า)"
            }
          ]
        },
        {
          title: "🎯 PAT Quick Reference — SVA ทั้งหมด",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["Rule", "Verb", "จำสั้นๆ"],
              rows: [
                ["each / every / either / neither", { badge: "sg", text: "เอกพจน์" }, "ทีละอัน → singular"],
                ["everyone / someone / nobody / no one", { badge: "sg", text: "เอกพจน์" }, "Indefinite → singular"],
                ["both", { badge: "pl", text: "พหูพจน์" }, "ทั้งคู่ → plural"],
                ["A number of + plural", { badge: "pl", text: "พหูพจน์" }, "= หลาย → plural"],
                ["The number of + plural", { badge: "sg", text: "เอกพจน์" }, "= จำนวน → singular"],
                ["Fraction/% + plural noun", { badge: "pl", text: "พหูพจน์" }, "ดูที่ Noun หลัง of"],
                ["Fraction/% + uncountable", { badge: "sg", text: "เอกพจน์" }, "ดูที่ Noun หลัง of"],
                ["None of + plural", { badge: "both", text: "ทั้งคู่ได้" }, "sg นิยมใน formal"],
                ["Gerund / Infinitive as Subject", { badge: "sg", text: "เอกพจน์" }, "Swimming is / To err is"],
                ["Intervening phrases (as well as…)", { badge: "sg", text: "ตาม Subject หลัก" }, "วลีคั่นไม่มีผล"],
                ["Not only A but also B", { badge: "both", text: "ตาม B" }, "Proximity Rule"],
                ["-ics subjects / Titles", { badge: "sg", text: "เอกพจน์" }, "Mathematics is / 10 years is"],
                ["Here/There + Verb + Subject", { badge: "both", text: "ตาม Subject จริง" }, "Inverted → ดู Subject"]
              ]
            },
            {
              type: "alert",
              color: "red",
              icon: "🎯",
              title: "3 จุดสอบ PAT ที่ผิดบ่อยที่สุด",
              text: "1. The teacher, as well as students, [hl:red]**is**[/hl] present. ✅ (ไม่ใช่ are)\n2. Not only Tom but also his sisters [hl:red]**are**[/hl] invited. ✅ (ตาม sisters)\n3. Swimming [hl:red]**is**[/hl] good exercise. ✅ (ไม่ใช่ are)"
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
      sentence: "None of the evidence ___ sufficient to convict him.",
      answer: "was",
      options: ["was", "were", "is", "are"],
      explanation: "None of + นับไม่ได้ (evidence) → singular → was",
      tag: "None of", tagColor: "blue"
    },
    {
      sentence: "Here ___ the results of the final examination.",
      answer: "are",
      options: ["is", "are", "was", "were"],
      explanation: "Inverted: Here + Verb + Subject → results (พหูพจน์) → are",
      tag: "Inverted", tagColor: "blue"
    },
    {
      sentence: "It is the students who ___ responsible for the project.",
      answer: "are",
      options: ["is", "are", "was", "were"],
      explanation: "who แทน students (พหูพจน์) → plural verb → are",
      tag: "Relative SVA", tagColor: "purple"
    },
    {
      sentence: "Three-quarters of the budget ___ already been spent.",
      answer: "has",
      options: ["have", "has", "were", "are"],
      explanation: "Fraction + นับไม่ได้ (budget) → singular → has",
      tag: "Fraction", tagColor: "green"
    },
    {
      sentence: "Not only the teachers but also the principal ___ invited to the ceremony.",
      answer: "was",
      options: ["were", "was", "are", "have"],
      explanation: "Not only...but also → ตาม B (the principal = เอกพจน์) → was",
      tag: "Paired Conj.", tagColor: "purple"
    },
    {
      sentence: "___ every day keeps the doctor away. (Exercise)",
      answer: "Exercising",
      options: ["Exercising", "Exercise", "Exercises", "To exercising"],
      explanation: "Gerund เป็น Subject → Exercising (ไม่ต้องใส่ Verb+s เพราะ Gerund เป็นประธาน)",
      tag: "Gerund", tagColor: "secondary"
    },
    {
      sentence: "The director, along with the producers, ___ the film tonight.",
      answer: "is presenting",
      options: ["is presenting", "are presenting", "were presenting", "have presenting"],
      explanation: "Intervening phrase (along with) → ตาม Subject หลัก (the director = เอกพจน์) → is presenting",
      tag: "Intervening", tagColor: "red"
    },
    {
      sentence: "Economics ___ one of the most important subjects in high school.",
      answer: "is",
      options: ["is", "are", "were", "have been"],
      explanation: "วิชาลงท้าย -ics → เอกพจน์เสมอ → is",
      tag: "Titles/-ics", tagColor: "amber"
    },
    {
      sentence: "Forty percent of the students ___ submitted their assignments.",
      answer: "have",
      options: ["has", "have", "is", "was"],
      explanation: "% + นับได้พหูพจน์ (students) → plural verb → have",
      tag: "Percentage", tagColor: "green"
    },
    {
      sentence: "The manager, as well as the staff, ___ expected to attend.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "as well as = intervening phrase → ตาม Subject หลัก (the manager = sg) → is",
      tag: "Intervening", tagColor: "red"
    },
    {
      sentence: "Ten years ___ a very long time to wait for someone.",
      answer: "is",
      options: ["is", "are", "were", "have been"],
      explanation: "ระยะเวลา (ten years) รวมเป็นปริมาณเดียว → singular → is",
      tag: "Time/Distance", tagColor: "amber"
    },
    {
      sentence: "Neither the committee members nor the chairman ___ informed of the change.",
      answer: "was",
      options: ["were", "was", "are", "have"],
      explanation: "Neither...nor → Proximity Rule → ตาม B (the chairman = เอกพจน์) → was",
      tag: "Paired Conj.", tagColor: "purple"
    }
  ]
};
