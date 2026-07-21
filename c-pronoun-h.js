// c-pronoun-h.js
// วิธีใช้: <script src="c-pronoun-h.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "High School · Grammar · B1–B2",
  titleMain:   "Pronoun",
  titleAccent: "ขั้นสูง",
  emoji:       "🎯",
  subtitle:    "ครบทุก Pronoun ขั้นสูง + PAT/O-NET cases ใน 5 ขั้นตอน",
  accentColor: "blue",

  quizLabel: "✏️ Mini Quiz",
  quizIntro: "ครอบคลุม whom, non-defining, cleft, reciprocal + PAT level",

  /* ══════════════════════════════════════
     SECTIONS
  ══════════════════════════════════════ */
  sections: [

    /* ────────────────────────────────────
       SECTION 1 — ทบทวน + whom
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ ทบทวน + whom",
      cards: [
        {
          title: "🔁 ทบทวนจาก Junior High",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["ประเภท", "คำ", "หน้าที่"],
              rows: [
                ["Subject",      "[hl:blue]I / you / he / she / it / we / they[/hl]",      "ประธาน — วางหน้า Verb"],
                ["Object",       "[hl:primary]me / you / him / her / it / us / them[/hl]", "กรรม — วางหลัง Verb / Prep"],
                ["Poss. Adj.",   "[hl:purple]my / your / his / her / its / our / their[/hl]", "ตามด้วย Noun เสมอ"],
                ["Poss. Pro.",   "[hl:purple]mine / yours / his / hers / ours / theirs[/hl]","ไม่ตาม Noun"],
                ["Reflexive",    "[hl:amber]myself / yourself / himself / herself / itself / ourselves / themselves[/hl]", "ประธาน = กรรม / เน้นย้ำ"],
                ["Relative",     "[hl:blue]who / which / that / whose[/hl]",                 "เชื่อมประโยค"],
                ["Indefinite",   "[hl:green]some- / any- / no- + one/body/thing/where[/hl]","ไม่ระบุเจาะจง + SVA เอกพจน์"]
              ]
            }
          ]
        },
        {
          title: "🆕 whom — Formal Object Relative Pronoun",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**whom** = รูป Object ของ **who** — ใช้ในภาษาเขียน/ทางการ\nทดสอบง่ายๆ: ถ้าแทนได้ด้วย **him/her/them** → ใช้ **whom**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ทดสอบ", "ผล", "ใช้คำ"],
              rows: [
                [
                  { main: "The teacher taught **___ / he**.", note: "ลองแทนดู: he taught? him taught?" },
                  "he ✅ → ประธาน",
                  "The teacher **who** taught me..."
                ],
                [
                  { main: "I met **___ / him**.", note: "ลองแทนดู: I met he? I met him?" },
                  "him ✅ → กรรม",
                  "The man **whom** I met..."
                ]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                {
                  en: "The scientist **who** discovered the vaccine won the Nobel Prize.",
                  th: "who = ประธานของ discovered → ใช้ who ✅"
                },
                {
                  en: "The scientist **whom** I admire most retired last year.",
                  th: "whom = กรรมของ admire (I admire him) → ใช้ whom ✅"
                },
                {
                  en: "The teacher to **whom** I owe my success was Mrs. Somjai.",
                  th: "Prep + whom (formal) — ไม่เขียน 'to who'"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "PAT shortcut: him/her/them → whom",
              text: "The person [hl:blue]who / whom[/hl] I called was busy.\n→ I called **him** ✅ → กรรม → **whom**\nThe person **whom** I called was busy. ✅"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — Defining vs Non-defining
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ Defining vs Non-defining",
      cards: [
        {
          title: "🔍 Defining Relative Clause — จำเป็นต้องมี",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**Defining** = ประโยคย่อยที่ **ขาดไม่ได้** — ช่วยบอกว่าหมายถึงอันไหน\n**ไม่ใส่ comma** | ใช้ who / which / **that** ได้ทุกตัว"
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                {
                  en: "The book **that / which** I read last week was amazing.",
                  th: "ถ้าตัดส่วนนี้ออก → 'The book was amazing' — ไม่รู้ว่าเล่มไหน!"
                },
                {
                  en: "Students **who / that** study hard will succeed.",
                  th: "ระบุว่า 'นักเรียนกลุ่มไหน' — ขาดไม่ได้"
                }
              ]
            }
          ]
        },
        {
          title: "💬 Non-defining Relative Clause — ให้ข้อมูลเพิ่ม",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "**Non-defining** = ประโยคย่อยที่ **ตัดทิ้งได้** — แค่เพิ่มข้อมูล\n**ใส่ comma** เสมอ | **ห้ามใช้ that** | ห้ามใช้ในประโยคปฏิเสธ/คำถาม"
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                {
                  en: "My sister, **who** lives in London, is a doctor.",
                  th: "ตัดส่วน who lives in London ออก → 'My sister is a doctor' ยังสมบูรณ์"
                },
                {
                  en: "Bangkok, **which** is the capital of Thailand, has great food.",
                  th: "Bangkok มีแค่เมืองเดียว — non-defining"
                },
                {
                  en: "❌ My sister, **that** lives in London, is a doctor.",
                  th: "ผิด — non-defining ห้ามใช้ that"
                }
              ]
            }
          ]
        },
        {
          title: "⚖️ เปรียบเทียบ Defining vs Non-defining",
          titleColor: "blue",
          blocks: [
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "blue",
                  word: "Defining",
                  sub: "ไม่มี comma | ใช้ that ได้",
                  body: "The student **who** passed is Tom.\n(มีหลายคน — ระบุว่าคนไหน)"
                },
                {
                  color: "purple",
                  word: "Non-defining",
                  sub: "มี comma | ห้ามใช้ that",
                  body: "Tom, **who** passed, is my friend.\n(Tom คนเดียว — แค่บอกเพิ่ม)"
                }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "จุดสอบ PAT: that ห้ามใช้ใน Non-defining",
              text: "❌ The Eiffel Tower, **that** is in Paris, is beautiful.\n✅ The Eiffel Tower, **which** is in Paris, is beautiful."
            }
          ]
        },
        {
          title: "✂️ Contact Clause — ละ Relative Pronoun ได้",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "เมื่อ Relative Pronoun ทำหน้าที่ **Object** ใน Defining clause → **ละได้**\n(ประธานคือ Subject ต้องคงไว้)"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["เต็ม", "ละ Relative Pronoun", "หมายเหตุ"],
              rows: [
                [
                  "The book **that** I read was great.",
                  "The book **∅** I read was great. ✅",
                  "that = Object → ละได้"
                ],
                [
                  "The man **who** called me was polite.",
                  "❌ The man **∅** called me... (ผิด)",
                  "who = Subject → ละไม่ได้"
                ],
                [
                  "The movie **(that)** we watched was funny.",
                  "The movie we watched was funny. ✅",
                  "ละ that (Object) ได้"
                ]
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — one/ones + Distributive + Reciprocal
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ one / Distributive / Reciprocal",
      cards: [
        {
          title: "🔢 one / ones — ใช้แทน Noun",
          titleColor: "green",
          blocks: [
            {
              type: "explanation",
              text: "**one / ones** ใช้แทน Noun ที่พูดถึงไปแล้ว เพื่อหลีกเลี่ยงการซ้ำ\n**one** = เอกพจน์ | **ones** = พหูพจน์"
            },
            {
              type: "examples",
              borderColor: "green",
              items: [
                {
                  en: "I need a pen. Do you have **one**?",
                  th: "one แทน 'a pen'"
                },
                {
                  en: "I don't like these shoes. I prefer the blue **ones**.",
                  th: "ones แทน 'shoes'"
                },
                {
                  en: "This shirt is nice, but the red **one** is nicer.",
                  th: "one แทน 'shirt'"
                }
              ]
            },
            {
              type: "alert",
              color: "green",
              icon: "💡",
              title: "ใช้ Adjective นำหน้า one/ones ได้",
              text: "Which dress do you want? — The long [hl:green]one[/hl].\nWhich shoes? — The leather [hl:green]ones[/hl]."
            }
          ]
        },
        {
          title: "📊 Distributive Pronouns — each / either / neither",
          titleColor: "amber",
          blocks: [
            {
              type: "explanation",
              text: "ใช้กับ **2 สิ่ง** เท่านั้น — Verb ตามเป็น **เอกพจน์เสมอ**"
            },
            {
              type: "table",
              headerColor: "amber",
              headers: ["คำ", "ความหมาย", "Verb", "ตัวอย่าง"],
              rows: [
                [
                  "[hl:amber]each[/hl]",
                  "แต่ละอัน (ทีละหนึ่ง)",
                  { badge: "sg", text: "เอกพจน์" },
                  "[hl:amber]Each[/hl] of them **has** a role."
                ],
                [
                  "[hl:amber]either[/hl]",
                  "อันใดอันหนึ่งใน 2",
                  { badge: "sg", text: "เอกพจน์" },
                  "[hl:amber]Either[/hl] answer **is** correct."
                ],
                [
                  "[hl:amber]neither[/hl]",
                  "ไม่ทั้งสองเลย",
                  { badge: "sg", text: "เอกพจน์" },
                  "[hl:amber]Neither[/hl] of them **was** right."
                ]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "either/neither ใช้กับ 2 สิ่งเท่านั้น — มากกว่านั้นใช้ any/none",
              text: "[hl:amber]Either[/hl] of the two routes **is** fine. ✅\n[hl:green]Any[/hl] of the three routes **is** fine. ✅\n[hl:amber]Neither[/hl] of them **was** selected. ✅\n[hl:red]None[/hl] of the three **was/were** selected. ✅"
            }
          ]
        },
        {
          title: "🔄 Reciprocal Pronouns — each other / one another",
          titleColor: "secondary",
          blocks: [
            {
              type: "explanation",
              text: "ใช้เมื่อ **2 คนขึ้นไปกระทำต่อกัน** — ต่างจาก Reflexive ที่กระทำต่อตัวเอง"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "secondary",
                  word: "each other",
                  sub: "2 คน",
                  body: "Tom and Sara love **each other**.\n(Tom รัก Sara / Sara รัก Tom)"
                },
                {
                  color: "blue",
                  word: "one another",
                  sub: "3 คนขึ้นไป (formal)",
                  body: "The team members respect **one another**.\n(ทุกคนในทีมเคารพซึ่งกันและกัน)"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                {
                  en: "They looked at **each other** and smiled.",
                  th: "พวกเขามองหน้ากันและยิ้ม"
                },
                {
                  en: "The students encouraged **one another** during the exam.",
                  th: "นักเรียนให้กำลังใจซึ่งกันและกันระหว่างสอบ"
                },
                {
                  en: "❌ They hurt **themselves**. vs ✅ They hurt **each other**.",
                  th: "themselves = ทำร้ายตัวเอง | each other = ทำร้ายกัน"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 4 — Preparatory it + Cleft
    ──────────────────────────────────── */
    {
      id: 4,
      label: "4️⃣ Preparatory it & Cleft",
      cards: [
        {
          title: "🎭 Preparatory it — it เป็นประธานหลอก",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "**Preparatory it** (หรือ Dummy it) ใช้ **it** เป็นประธานหลอก เพื่อเลื่อนประธานจริงไปไว้ท้ายประโยค\nทำให้ประโยคฟังดูเป็นธรรมชาติมากขึ้น"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["ประโยคปกติ (awkward)", "ใช้ Preparatory it (natural)"],
              rows: [
                [
                  "To study abroad is exciting.",
                  "[hl:purple]It[/hl] is exciting **to study abroad**."
                ],
                [
                  "That she passed is surprising.",
                  "[hl:purple]It[/hl] is surprising **that she passed**."
                ],
                [
                  "Swimming every day is important.",
                  "[hl:purple]It[/hl] is important **to swim every day**."
                ]
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "📌",
              title: "Pattern ที่พบบ่อย",
              text: "**It is + adj + to-V**: [hl:purple]It[/hl] is important **to read** widely.\n**It is + adj + that-clause**: [hl:purple]It[/hl] is essential **that** students attend class.\n**It seems/appears that**: [hl:purple]It[/hl] seems **that** he forgot."
            }
          ]
        },
        {
          title: "🎯 Cleft Sentence — เน้นส่วนใดส่วนหนึ่ง",
          titleColor: "primary",
          blocks: [
            {
              type: "explanation",
              text: "**Cleft Sentence** ใช้ **It was... that/who** เพื่อ **เน้นย้ำ** ส่วนที่ต้องการ\nเปลี่ยนโฟกัสของประโยคได้"
            },
            {
              type: "table",
              headerColor: "primary",
              headers: ["ประโยคเดิม", "Cleft — เน้นส่วนต่างๆ"],
              rows: [
                [
                  "Tom broke the window yesterday.",
                  "[hl:primary]It was **Tom**[/hl] **who** broke the window. (เน้นคน)"
                ],
                [
                  "Tom broke the window yesterday.",
                  "[hl:primary]It was **the window**[/hl] **that** Tom broke. (เน้นสิ่งของ)"
                ],
                [
                  "Tom broke the window yesterday.",
                  "[hl:primary]It was **yesterday**[/hl] **that** Tom broke the window. (เน้นเวลา)"
                ]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "who vs that ใน Cleft",
              text: "เน้น **คน** → It was Tom [hl:blue]who[/hl] did it.\nเน้น **สิ่งอื่นๆ** → It was the car [hl:primary]that[/hl] he bought.\nทั้งคู่ถูกต้อง ใช้แทนกันได้ในภาษาพูด"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 5 — SVA Advanced + PAT Quick Ref
    ──────────────────────────────────── */
    {
      id: 5,
      label: "5️⃣ SVA + PAT Quick Ref",
      cards: [
        {
          title: "⚖️ SVA กับ Pronoun ขั้นสูง",
          titleColor: "amber",
          blocks: [
            {
              type: "sva",
              rows: [
                {
                  quantifier: "each / either / neither",
                  rule: "→ **Verb เอกพจน์** เสมอ",
                  example: "[hl:amber]Each[/hl] of them **has** a task. | [hl:amber]Neither[/hl] **is** correct."
                },
                {
                  quantifier: "both",
                  rule: "→ **Verb พหูพจน์** เสมอ",
                  example: "[hl:blue]Both[/hl] of them **have** arrived."
                },
                {
                  quantifier: "everyone / someone / no one",
                  rule: "→ **Verb เอกพจน์** เสมอ",
                  example: "[hl:green]Everyone[/hl] **is** ready. | [hl:red]No one[/hl] **knows**."
                },
                {
                  quantifier: "none of the + plural",
                  rule: "→ Singular หรือ Plural ยอมรับได้ทั้งคู่",
                  example: "[hl:red]None[/hl] of them **was / were** present."
                },
                {
                  quantifier: "one of the + plural",
                  rule: "→ **Verb เอกพจน์** (ประธานคือ one)",
                  example: "[hl:green]One[/hl] of the students **has** won the prize."
                }
              ]
            }
          ]
        },
        {
          title: "🎯 PAT Quick Reference",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["Pronoun", "Verb", "จำสั้นๆ"],
              rows: [
                ["**who** (Subject)", { badge: "sg", text: "ตาม Noun" }, "who = Subject → Verb ตาม Noun นั้น"],
                ["**whom** (Object)", { badge: "sg", text: "ตาม Noun" }, "him/her/them → whom"],
                ["**that**", { badge: "sg", text: "ตาม Noun" }, "ใช้ใน Defining เท่านั้น"],
                ["**which** (Non-defining)", { badge: "sg", text: "ตาม Noun" }, "ใส่ comma + ห้ามใช้ that"],
                ["**each / either / neither**", { badge: "sg", text: "เอกพจน์" }, "always singular"],
                ["**both**", { badge: "pl", text: "พหูพจน์" }, "always plural"],
                ["**everyone / someone / nobody**", { badge: "sg", text: "เอกพจน์" }, "always singular"],
                ["**none of the** + plural", { badge: "both", text: "ทั้งคู่ได้" }, "ยืดหยุ่น sg หรือ pl"]
              ]
            },
            {
              type: "alert",
              color: "red",
              icon: "🎯",
              title: "3 จุดสอบ PAT ที่ผิดบ่อยที่สุด",
              text: "1. My sister, [hl:red]that[/hl] lives in London... ❌ → ใช้ [hl:blue]who[/hl] (Non-defining)\n2. The man [hl:red]who[/hl] I met was kind. → ควรเป็น [hl:blue]whom[/hl] (formal/PAT)\n3. [hl:red]Everyone are[/hl] ready. ❌ → [hl:blue]Everyone is[/hl] ready. ✅"
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
      sentence: "The professor ___ lecture I attended was brilliant.",
      answer: "whose",
      options: ["who", "whom", "whose", "which"],
      explanation: "แสดงเจ้าของ (lecture ของ professor) → whose",
      tag: "Relative", tagColor: "blue"
    },
    {
      sentence: "The scientist ___ I most admire retired last year.",
      answer: "whom",
      options: ["who", "whom", "whose", "that"],
      explanation: "I admire him → กรรม → whom (formal Object Relative)",
      tag: "whom", tagColor: "blue"
    },
    {
      sentence: "My father, ___ is a doctor, works at Bangkok Hospital.",
      answer: "who",
      options: ["who", "which", "that", "whose"],
      explanation: "Non-defining clause + คน → who (ห้ามใช้ that)",
      tag: "Non-defining", tagColor: "purple"
    },
    {
      sentence: "___ is essential that students read widely.",
      answer: "It",
      options: ["It", "This", "That", "There"],
      explanation: "Preparatory it → It is essential that...",
      tag: "Prep it", tagColor: "purple"
    },
    {
      sentence: "___ was the heavy rain that caused the flooding.",
      answer: "It",
      options: ["It", "This", "That", "There"],
      explanation: "Cleft sentence: It was... that → เน้น the heavy rain",
      tag: "Cleft", tagColor: "primary"
    },
    {
      sentence: "Tom and Sara have known ___ since childhood.",
      answer: "each other",
      options: ["each other", "one another", "themselves", "them"],
      explanation: "2 คน กระทำต่อกัน → each other",
      tag: "Reciprocal", tagColor: "secondary"
    },
    {
      sentence: "I don't like this design. Can I see a different ___?",
      answer: "one",
      options: ["one", "ones", "it", "that"],
      explanation: "แทน 'design' (เอกพจน์) → one",
      tag: "one/ones", tagColor: "green"
    },
    {
      sentence: "___ of the two candidates is suitable for the position.",
      answer: "Neither",
      options: ["Neither", "None", "Both", "Either"],
      explanation: "2 คน ทั้งคู่ไม่เหมาะ → Neither + singular verb (is)",
      tag: "Distributive", tagColor: "amber"
    },
    {
      sentence: "The novel (___) she wrote became a bestseller.",
      answer: "that",
      options: ["that", "which", "who", "∅ (ละได้)"],
      explanation: "Defining + Object → ละได้ หรือใช้ that/which ก็ได้ → ∅ (ละได้)",
      tag: "Contact Clause", tagColor: "blue"
    },
    {
      sentence: "Everyone in the class ___ expected to submit the assignment.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "Everyone → Indefinite Pronoun → Verb เอกพจน์ → is",
      tag: "SVA", tagColor: "amber"
    },
    {
      sentence: "It was ___ who scored the winning goal in the final.",
      answer: "he",
      options: ["he", "him", "his", "himself"],
      explanation: "Cleft: It was... who — ตำแหน่งประธาน → Subject Pronoun → he",
      tag: "Cleft", tagColor: "primary"
    },
    {
      sentence: "The team members encouraged ___ throughout the competition.",
      answer: "one another",
      options: ["each other", "one another", "themselves", "each one"],
      explanation: "สมาชิกในทีม (มากกว่า 2 คน) กระทำต่อกัน → one another",
      tag: "Reciprocal", tagColor: "secondary"
    }
  ]
};
