// e-pronoun-h.js
// วิธีใช้: <script src="e-pronoun-h.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "High School · Exercise · B1–B2",
  titleMain:   "Pronoun",
  titleAccent: "ขั้นสูง",
  emoji:       "🎯",
  subtitle:    "50 ข้อ · 5 รูปแบบ · whom, Non-defining, Cleft, Reciprocal + PAT Level",
  accentColor: "blue",
  contentPage: "c-pronoun-h.html",

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
      description: "เลือก Pronoun ที่ถูกต้อง — รวม whom, non-defining, cleft, SVA",
      icon:        "🔘",
      questions: [
        {
          sentence:    "The professor ___ I respect most has just retired.",
          answer:      "whom",
          options:     ["who", "whom", "whose", "that"],
          explanation: "I respect him → กรรม → whom (formal Object Relative)",
          tag: "whom", tagColor: "blue"
        },
        {
          sentence:    "My mother, ___ is a nurse, works night shifts.",
          answer:      "who",
          options:     ["who", "which", "that", "whose"],
          explanation: "Non-defining clause + คน → who (ห้ามใช้ that ใน non-defining)",
          tag: "Non-defining", tagColor: "purple"
        },
        {
          sentence:    "___ is surprising that nobody noticed the mistake.",
          answer:      "It",
          options:     ["It", "This", "That", "There"],
          explanation: "Preparatory it → It is surprising that...",
          tag: "Prep it", tagColor: "purple"
        },
        {
          sentence:    "The two friends have supported ___ through every difficulty.",
          answer:      "each other",
          options:     ["each other", "one another", "themselves", "them"],
          explanation: "2 คน กระทำต่อกัน → each other",
          tag: "Reciprocal", tagColor: "secondary"
        },
        {
          sentence:    "___ was the principal who announced the results.",
          answer:      "It",
          options:     ["It", "He", "She", "There"],
          explanation: "Cleft sentence: It was... who → เน้นคน",
          tag: "Cleft", tagColor: "primary"
        },
        {
          sentence:    "I don't like this colour. Can I try the darker ___?",
          answer:      "one",
          options:     ["one", "ones", "it", "that"],
          explanation: "แทน Noun เอกพจน์ (colour) → one",
          tag: "one/ones", tagColor: "green"
        },
        {
          sentence:    "___ of the two options suits our budget.",
          answer:      "Neither",
          options:     ["Neither", "None", "Both", "Either"],
          explanation: "2 ตัวเลือก ไม่มีอันไหนได้เลย → Neither + singular verb",
          tag: "Distributive", tagColor: "amber"
        },
        {
          sentence:    "The policy, ___ was introduced last year, has failed.",
          answer:      "which",
          options:     ["which", "that", "who", "what"],
          explanation: "Non-defining + สิ่งของ → which (ห้ามใช้ that + ใส่ comma)",
          tag: "Non-defining", tagColor: "purple"
        },
        {
          sentence:    "Everyone on the team ___ expected to contribute equally.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "Everyone → Singular → is",
          tag: "SVA", tagColor: "amber"
        },
        {
          sentence:    "One of the students ___ left a bag in the classroom.",
          answer:      "has",
          options:     ["have", "has", "are", "were"],
          explanation: "One of the + plural → ประธานคือ one → Singular verb → has",
          tag: "SVA", tagColor: "amber"
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
      description: "พิมพ์ Pronoun หรือ Verb ที่ถูกต้อง",
      icon:        "✍️",
      questions: [
        {
          sentence:    "The artist ___ paintings I admire most lives in Chiang Mai.",
          answer:      "whose",
          explanation: "แสดงเจ้าของ (paintings ของ artist) → whose"
        },
        {
          sentence:    "The man to ___ I spoke was very helpful.",
          answer:      "whom",
          explanation: "Prep + กรรม → to whom (formal)"
        },
        {
          sentence:    "Bangkok, ___ is the capital of Thailand, is very crowded.",
          answer:      "which",
          explanation: "Non-defining + สิ่งของ/สถานที่ → which"
        },
        {
          sentence:    "___ was the coach who motivated the team to win.",
          answer:      "It",
          explanation: "Cleft: It was... who → เน้นคน"
        },
        {
          sentence:    "The members of the group helped ___ prepare for the competition.",
          answer:      "one another",
          explanation: "มากกว่า 2 คน กระทำต่อกัน → one another"
        },
        {
          sentence:    "These jeans are too tight. Do you have looser ___?",
          answer:      "ones",
          explanation: "แทน Noun พหูพจน์ (jeans) → ones"
        },
        {
          sentence:    "___ of the three candidates was selected after the interview.",
          answer:      "None",
          explanation: "มากกว่า 2 คน ไม่มีใครได้รับเลือก → None (ไม่ใช่ Neither)"
        },
        {
          sentence:    "Neither of the two reports ___ submitted before the deadline.",
          answer:      "was",
          explanation: "neither of + plural noun → singular verb → was"
        },
        {
          sentence:    "___ is vital that all citizens follow the new regulations.",
          answer:      "It",
          explanation: "Preparatory it → It is vital that..."
        },
        {
          sentence:    "The book (___) she recommended is now out of stock.",
          answer:      "that",
          explanation: "Defining clause + Object → ใช้ that หรือ which หรือละได้"
        }
      ]
    },

    /* ────────────────────────────────────
       PART 3 — Context Passage (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "context",
      label:       "Context",
      title:       "Part 3 — Context Reading",
      description: "อ่าน passage แล้วเลือก Pronoun ที่ถูกต้อง",
      icon:        "📖",
      passages: [
        {
          text: `Dr Amara, (1)___ research on climate change has won international awards, gave a lecture at our university last week. She is someone to (2)___ all young scientists look up. (3)___ was her passion for the environment that inspired the entire audience. After the lecture, she and her colleague discussed (4)___ findings with students. (5)___ is clear that her work will shape the future of environmental policy.`,
          blanks: [
            {
              id: 0, answer: "whose",
              options: ["who", "whom", "whose", "which"],
              explanation: "แสดงเจ้าของ (research ของ Dr Amara) → whose"
            },
            {
              id: 1, answer: "whom",
              options: ["who", "whom", "whose", "that"],
              explanation: "look up to her → กรรม → to whom (formal)"
            },
            {
              id: 2, answer: "It",
              options: ["It", "This", "That", "There"],
              explanation: "Cleft sentence: It was her passion that... → เน้น her passion"
            },
            {
              id: 3, answer: "their",
              options: ["his", "her", "their", "its"],
              explanation: "she and her colleague (2 คน) → their findings (Possessive Adj)"
            },
            {
              id: 4, answer: "It",
              options: ["It", "This", "That", "There"],
              explanation: "Preparatory it → It is clear that..."
            }
          ]
        },
        {
          text: `Our school recently formed a debate team, the members of (6)___ come from every year group. The team, (7)___ has been practising for months, will compete nationally next week. Each of the members (8)___ assigned a different role. They have challenged (9)___ constantly to improve. (10)___ is hoped that they will bring home the trophy.`,
          blanks: [
            {
              id: 5, answer: "which",
              options: ["who", "whom", "which", "whose"],
              explanation: "the members of which = Non-defining, แทน the team (สิ่งของ) → which"
            },
            {
              id: 6, answer: "which",
              options: ["who", "which", "that", "whose"],
              explanation: "Non-defining clause + สิ่งของ (the team) → which (ใส่ comma)"
            },
            {
              id: 7, answer: "has been",
              options: ["has been", "have been", "were", "are"],
              explanation: "each of the members → singular → has been"
            },
            {
              id: 8, answer: "one another",
              options: ["each other", "one another", "themselves", "them"],
              explanation: "หลายคน (team members) กระทำต่อกัน → one another"
            },
            {
              id: 9, answer: "It",
              options: ["It", "This", "That", "There"],
              explanation: "Preparatory it → It is hoped that..."
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       PART 4 — PAT Tricky Fix (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "fix",
      label:       "PAT Tricky",
      title:       "Part 4 — Spot the Mistake",
      description: "เลือกประโยคที่ถูกต้อง — ระดับ PAT/O-NET",
      icon:        "🎯",
      questions: [
        {
          wrong:       "My brother, that lives in Tokyo, is an engineer.",
          options:     [
            "My brother, that lives in Tokyo, is an engineer.",
            "My brother, who lives in Tokyo, is an engineer.",
            "My brother who lives in Tokyo is an engineer."
          ],
          answer:      "My brother, who lives in Tokyo, is an engineer.",
          explanation: "Non-defining clause + คน + comma → who (ห้ามใช้ that)"
        },
        {
          wrong:       "The man who I met at the conference was very knowledgeable.",
          options:     [
            "The man who I met at the conference was very knowledgeable.",
            "The man whom I met at the conference was very knowledgeable.",
            "The man which I met at the conference was very knowledgeable."
          ],
          answer:      "The man whom I met at the conference was very knowledgeable.",
          explanation: "I met him → กรรม → whom (formal/PAT)"
        },
        {
          wrong:       "This is important to read widely.",
          options:     [
            "This is important to read widely.",
            "It is important to read widely.",
            "There is important to read widely."
          ],
          answer:      "It is important to read widely.",
          explanation: "Preparatory it → It is important to... (ไม่ใช่ This/There)"
        },
        {
          wrong:       "Neither of the two solutions are effective.",
          options:     [
            "Neither of the two solutions are effective.",
            "Neither of the two solutions is effective.",
            "None of the two solutions is effective."
          ],
          answer:      "Neither of the two solutions is effective.",
          explanation: "neither of + plural → singular verb → is (neither ใช้กับ 2 สิ่ง)"
        },
        {
          wrong:       "It was the coach who him trained won the championship.",
          options:     [
            "It was the coach who him trained won.",
            "It was the coach that trained them who won.",
            "It was the coach who trained them that won the championship."
          ],
          answer:      "It was the coach who trained them that won the championship.",
          explanation: "Cleft: It was [เน้น] who/that [ข้อมูล] → ไม่ซ้อน who กับ him"
        },
        {
          wrong:       "The team members cheered themselves during the match.",
          options:     [
            "The team members cheered themselves during the match.",
            "The team members cheered each other during the match.",
            "The team members cheered one other during the match."
          ],
          answer:      "The team members cheered each other during the match.",
          explanation: "กระทำต่อกัน (ไม่ใช่ตัวเอง) → each other | one other ไม่มีในภาษาอังกฤษ"
        },
        {
          wrong:       "Everyone in the group were asked to present their ideas.",
          options:     [
            "Everyone in the group were asked to present their ideas.",
            "Everyone in the group was asked to present their ideas.",
            "Everyone in the group was asked to present his ideas."
          ],
          answer:      "Everyone in the group was asked to present their ideas.",
          explanation: "Everyone → singular verb (was) | their ใช้แทน his/her ได้ในภาษาร่วมสมัย"
        },
        {
          wrong:       "I prefer the black shoes to the ones which are brown.",
          options:     [
            "I prefer the black shoes to the ones which are brown.",
            "I prefer the black shoes to the brown one.",
            "I prefer the black shoes to the brown ones."
          ],
          answer:      "I prefer the black shoes to the brown ones.",
          explanation: "แทน shoes (พหูพจน์) → ones | the brown ones กระชับกว่า"
        },
        {
          wrong:       "The Eiffel Tower, that stands in Paris, attracts millions of tourists.",
          options:     [
            "The Eiffel Tower, that stands in Paris, attracts millions.",
            "The Eiffel Tower, which stands in Paris, attracts millions of tourists.",
            "The Eiffel Tower which stands in Paris attracts millions of tourists."
          ],
          answer:      "The Eiffel Tower, which stands in Paris, attracts millions of tourists.",
          explanation: "Non-defining + สถานที่/สิ่งของ + comma → which (ห้ามใช้ that)"
        },
        {
          wrong:       "One of my friends have moved to Canada recently.",
          options:     [
            "One of my friends have moved to Canada recently.",
            "One of my friends has moved to Canada recently.",
            "One of my friend has moved to Canada recently."
          ],
          answer:      "One of my friends has moved to Canada recently.",
          explanation: "One of + plural noun → ประธานคือ one → singular verb → has"
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
      description: "ลากคำมาวางในช่องว่าง — Advanced + PAT cases",
      icon:        "🧩",
      questions: [
        {
          sentence:    "The author ___ novel I read last month is Thai.",
          answer:      "whose",
          bank:        ["who", "whom", "whose", "which"],
          explanation: "แสดงเจ้าของ (novel ของ author) → whose"
        },
        {
          sentence:    "She is the only person to ___ I can tell my secrets.",
          answer:      "whom",
          bank:        ["who", "whom", "whose", "that"],
          explanation: "to + กรรม → to whom (formal Prep + Object Relative)"
        },
        {
          sentence:    "Oxford, ___ is one of the oldest universities, is in England.",
          answer:      "which",
          bank:        ["which", "that", "who", "whose"],
          explanation: "Non-defining + สถานที่ → which (ใส่ comma, ห้ามใช้ that)"
        },
        {
          sentence:    "___ was the shortage of supplies that caused the delay.",
          answer:      "It",
          bank:        ["It", "This", "That", "There"],
          explanation: "Cleft: It was... that → เน้น the shortage of supplies"
        },
        {
          sentence:    "The athletes pushed ___ to the limit during training.",
          answer:      "one another",
          bank:        ["each other", "one another", "themselves", "each one"],
          explanation: "นักกีฬาหลายคน กระทำต่อกัน → one another"
        },
        {
          sentence:    "I have two pens but neither of them ___.",
          answer:      "works",
          bank:        ["work", "works", "working", "worked"],
          explanation: "neither of + plural → singular verb → works"
        },
        {
          sentence:    "___ is crucial that leaders communicate clearly with their teams.",
          answer:      "It",
          bank:        ["It", "This", "That", "There"],
          explanation: "Preparatory it → It is crucial that..."
        },
        {
          sentence:    "These earphones are broken. I need new ___.",
          answer:      "ones",
          bank:        ["one", "ones", "it", "them"],
          explanation: "แทน earphones (พหูพจน์) → ones"
        },
        {
          sentence:    "None of the evidence ___ sufficient to prove his guilt.",
          answer:      "was",
          bank:        ["was", "were", "is", "are"],
          explanation: "none of the + นับไม่ได้ → singular → was"
        },
        {
          sentence:    "The policy ___ the minister announced has been widely criticised.",
          answer:      "that",
          bank:        ["who", "whose", "that", "whom"],
          explanation: "Defining clause + Object (the minister announced it) → that หรือ which"
        }
      ]
    }
  ]
};
