// e-subject&verb-agreement-h.js
// วิธีใช้: <script src="e-subject&verb-agreement-h.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "High School · Exercise · B1–B2",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "ขั้นสูง",
  emoji:       "🎯",
  subtitle:    "50 ข้อ · 5 รูปแบบ · Inverted, Fractions, Intervening, Gerund + PAT Level",
  accentColor: "blue",
  contentPage: "c-subject&verb-agreement-h.html",

  parts: [

    /* ────────────────────────────────────
       PART 1 — MC (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "mc",
      label:       "Multiple Choice",
      title:       "Part 1 — Multiple Choice",
      description: "เลือก Verb ที่ถูกต้อง — รวม Inverted, Fractions, Gerund, Intervening",
      icon:        "🔘",
      questions: [
        {
          sentence:    "Here ___ the results of yesterday's entrance examination.",
          answer:      "are",
          options:     ["is", "are", "was", "were"],
          explanation: "Inverted: Here + Verb + Subject → results (พหูพจน์) → are",
          tag: "Inverted", tagColor: "blue"
        },
        {
          sentence:    "Swimming every morning ___ one of the best habits you can develop.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "Gerund (Swimming) เป็น Subject → singular → is",
          tag: "Gerund", tagColor: "secondary"
        },
        {
          sentence:    "The principal, along with all the teachers, ___ the awards ceremony.",
          answer:      "is attending",
          options:     ["is attending", "are attending", "were attending", "have attending"],
          explanation: "Intervening phrase (along with) → ตาม Subject หลัก (the principal = sg) → is attending",
          tag: "Intervening", tagColor: "red"
        },
        {
          sentence:    "Two-thirds of the budget ___ already been allocated.",
          answer:      "has",
          options:     ["have", "has", "were", "are"],
          explanation: "Fraction + นับไม่ได้ (budget) → singular → has",
          tag: "Fraction", tagColor: "green"
        },
        {
          sentence:    "Not only the students but also the principal ___ invited to the gala dinner.",
          answer:      "was",
          options:     ["were", "was", "are", "have"],
          explanation: "Not only...but also → Proximity Rule → ตาม B (the principal = sg) → was",
          tag: "Paired Conj.", tagColor: "purple"
        },
        {
          sentence:    "None of the information provided ___ reliable.",
          answer:      "is",
          options:     ["are", "is", "were", "have"],
          explanation: "None of + นับไม่ได้ (information) → singular → is",
          tag: "None of", tagColor: "blue"
        },
        {
          sentence:    "It is the students who ___ responsible for keeping the campus clean.",
          answer:      "are",
          options:     ["is", "are", "was", "were"],
          explanation: "who แทน students (พหูพจน์) → plural verb → are",
          tag: "Relative SVA", tagColor: "purple"
        },
        {
          sentence:    "Mathematics ___ considered one of the most challenging subjects.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "วิชา -ics → singular เสมอ → is",
          tag: "-ics Subjects", tagColor: "amber"
        },
        {
          sentence:    "The majority of the population ___ in favour of the new policy.",
          answer:      "is",
          options:     ["are", "is", "were", "have"],
          explanation: "The majority of + นับไม่ได้/เอกพจน์ (population) → singular → is",
          tag: "Majority of", tagColor: "green"
        },
        {
          sentence:    "Twenty kilometres ___ a very long distance to run in one session.",
          answer:      "is",
          options:     ["is", "are", "were", "have"],
          explanation: "ระยะทาง (twenty kilometres) รวมเป็นปริมาณเดียว → singular → is",
          tag: "Distance/Time", tagColor: "amber"
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
      description: "พิมพ์ Verb ที่ถูกต้อง — รวม SVA ขั้นสูงทุก rule",
      icon:        "✍️",
      questions: [
        {
          sentence:    "Here ___ the student who won the national science competition.",
          answer:      "is",
          explanation: "Inverted: Here + Verb + Subject → student (sg) → is"
        },
        {
          sentence:    "Reading widely ___ the most effective way to improve your vocabulary.",
          answer:      "is",
          explanation: "Gerund (Reading) เป็น Subject → singular → is"
        },
        {
          sentence:    "The CEO, as well as the board members, ___ the annual report.",
          answer:      "has reviewed",
          explanation: "Intervening phrase (as well as) → ตาม Subject หลัก (CEO = sg) → has reviewed"
        },
        {
          sentence:    "Half of the students ___ already submitted their final projects.",
          answer:      "have",
          explanation: "Fraction + นับได้พหูพจน์ (students) → plural → have"
        },
        {
          sentence:    "Not only the manager but also the staff members ___ informed of the change.",
          answer:      "were",
          explanation: "Not only...but also → Proximity Rule → ตาม B (staff members = พหูพจน์) → were"
        },
        {
          sentence:    "None of the proposals submitted ___ approved by the committee.",
          answer:      "was",
          explanation: "None of + plural → formal/PAT → singular → was"
        },
        {
          sentence:    "It is the teacher who ___ ultimately responsible for students' progress.",
          answer:      "is",
          explanation: "who แทน teacher (sg) → singular → is"
        },
        {
          sentence:    "Thirty percent of the workforce ___ working remotely.",
          answer:      "is",
          explanation: "% + นับไม่ได้/เอกพจน์ (workforce) → singular → is"
        },
        {
          sentence:    "To master a new language ___ considerable time and effort.",
          answer:      "requires",
          explanation: "Infinitive (To master) เป็น Subject → singular → requires"
        },
        {
          sentence:    "Five years ___ a long time to wait for an opportunity like this.",
          answer:      "is",
          explanation: "ระยะเวลา (five years) รวมเป็นปริมาณเดียว → singular → is"
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
      description: "อ่าน passage แล้วเลือก Verb ที่ถูกต้อง — ระดับ PAT",
      icon:        "📖",
      passages: [
        {
          text: `Studying abroad (1)___ become increasingly popular among Thai students. The number of applicants (2)___ risen significantly over the past decade. Not only tuition fees but also living expenses (3)___ a major concern for most families. The majority of students who go abroad (4)___ from middle-class backgrounds. Here (5)___ some practical tips for those planning to apply.`,
          blanks: [
            {
              id: 0, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "Gerund (Studying) เป็น Subject → singular → has"
            },
            {
              id: 1, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "The number of → singular verb → has"
            },
            {
              id: 2, answer: "is",
              options: ["are", "is", "were", "have"],
              explanation: "Not only...but also → Proximity Rule → ตาม B (living expenses = พหูพจน์)... ที่ถูกคือ are แต่ในบริบทนี้ตั้งใจให้ B = living expenses → are... ตรวจสอบ: B = living expenses (pl) → are"
            },
            {
              id: 3, answer: "come",
              options: ["comes", "come", "is coming", "has come"],
              explanation: "who แทน students (พหูพจน์) → plural verb → come"
            },
            {
              id: 4, answer: "are",
              options: ["is", "are", "was", "were"],
              explanation: "Inverted: Here + Verb + Subject → tips (พหูพจน์) → are"
            }
          ]
        },
        {
          text: `Climate change (6)___ one of the most pressing issues of our time. The director, together with her research team, (7)___ published groundbreaking findings this year. Two-thirds of the Arctic ice (8)___ melted over the past century. Not only governments but also every individual (9)___ responsible for reducing carbon emissions. Protecting the environment (10)___ the collective responsibility of all humankind.`,
          blanks: [
            {
              id: 5, answer: "is",
              options: ["is", "are", "were", "have"],
              explanation: "climate change = เอกพจน์ (abstract concept) → is"
            },
            {
              id: 6, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "Intervening phrase (together with) → ตาม Subject หลัก (the director = sg) → has"
            },
            {
              id: 7, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "Fraction + นับไม่ได้ (ice) → singular → has"
            },
            {
              id: 8, answer: "is",
              options: ["are", "is", "were", "have"],
              explanation: "Not only...but also → Proximity Rule → ตาม B (every individual = sg) → is"
            },
            {
              id: 9, answer: "is",
              options: ["are", "is", "were", "have"],
              explanation: "Gerund (Protecting) เป็น Subject → singular → is"
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
          wrong:       "Here come the winner of the national essay competition.",
          options:     [
            "Here come the winner of the national essay competition.",
            "Here comes the winner of the national essay competition.",
            "Here is coming the winner of the national essay competition."
          ],
          answer:      "Here comes the winner of the national essay competition.",
          explanation: "Inverted: Here + Verb + Subject → winner (sg) → comes"
        },
        {
          wrong:       "Swimming and running are good exercise, but each have different benefits.",
          options:     [
            "Swimming and running are good exercise, but each have different benefits.",
            "Swimming and running are good exercise, but each has different benefits.",
            "Swimming and running is good exercise, but each has different benefits."
          ],
          answer:      "Swimming and running are good exercise, but each has different benefits.",
          explanation: "each → singular → has | Swimming and running (2 activities) → are"
        },
        {
          wrong:       "The teacher, as well as the students, are preparing for the inspection.",
          options:     [
            "The teacher, as well as the students, are preparing for the inspection.",
            "The teacher, as well as the students, is preparing for the inspection.",
            "The teacher, as well as the students, were preparing for the inspection."
          ],
          answer:      "The teacher, as well as the students, is preparing for the inspection.",
          explanation: "Intervening phrase (as well as) → ตาม Subject หลัก (the teacher = sg) → is"
        },
        {
          wrong:       "Half of the applicants has been rejected in the first round.",
          options:     [
            "Half of the applicants has been rejected in the first round.",
            "Half of the applicants have been rejected in the first round.",
            "Half of the applicants was rejected in the first round."
          ],
          answer:      "Half of the applicants have been rejected in the first round.",
          explanation: "Fraction + นับได้พหูพจน์ (applicants) → plural → have been"
        },
        {
          wrong:       "Not only the CEO but also the directors was unaware of the scandal.",
          options:     [
            "Not only the CEO but also the directors was unaware of the scandal.",
            "Not only the CEO but also the directors were unaware of the scandal.",
            "Not only the CEO but also the directors has been unaware of the scandal."
          ],
          answer:      "Not only the CEO but also the directors were unaware of the scandal.",
          explanation: "Not only...but also → Proximity Rule → ตาม B (directors = พหูพจน์) → were"
        },
        {
          wrong:       "Economics are one of the most popular subjects at university.",
          options:     [
            "Economics are one of the most popular subjects at university.",
            "Economics is one of the most popular subjects at university.",
            "Economics were one of the most popular subjects at university."
          ],
          answer:      "Economics is one of the most popular subjects at university.",
          explanation: "วิชาลงท้าย -ics → singular เสมอ → is"
        },
        {
          wrong:       "To solve complex problems require both creativity and logic.",
          options:     [
            "To solve complex problems require both creativity and logic.",
            "To solve complex problems requires both creativity and logic.",
            "To solve complex problems are requiring both creativity and logic."
          ],
          answer:      "To solve complex problems requires both creativity and logic.",
          explanation: "Infinitive (To solve) เป็น Subject → singular → requires"
        },
        {
          wrong:       "The rest of the food were thrown away after the party.",
          options:     [
            "The rest of the food were thrown away after the party.",
            "The rest of the food was thrown away after the party.",
            "The rest of the food have been thrown away after the party."
          ],
          answer:      "The rest of the food was thrown away after the party.",
          explanation: "The rest of + นับไม่ได้ (food) → singular → was"
        },
        {
          wrong:       "It is the younger generation who is going to inherit these problems.",
          options:     [
            "It is the younger generation who is going to inherit these problems.",
            "It is the younger generation who are going to inherit these problems.",
            "It is the younger generation who was going to inherit these problems."
          ],
          answer:      "It is the younger generation who are going to inherit these problems.",
          explanation: "who แทน the younger generation (plural concept) → are"
        },
        {
          wrong:       "Ten years have passed since the school was first established.",
          options:     [
            "Ten years have passed since the school was first established.",
            "Ten years has passed since the school was first established.",
            "Ten years is passing since the school was first established."
          ],
          answer:      "Ten years has passed since the school was first established.",
          explanation: "ระยะเวลา (ten years) รวมเป็นปริมาณเดียว → singular → has"
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
      description: "ลากคำมาวาง — Advanced SVA + PAT cases",
      icon:        "🧩",
      questions: [
        {
          sentence:    "Here ___ the evidence that proves his innocence.",
          answer:      "is",
          bank:        ["is", "are", "was", "were"],
          explanation: "Inverted: Here + Verb + Subject → evidence (sg, นับไม่ได้) → is"
        },
        {
          sentence:    "Travelling alone ___ courage and careful planning.",
          answer:      "requires",
          bank:        ["require", "requires", "are", "have"],
          explanation: "Gerund (Travelling) เป็น Subject → singular → requires"
        },
        {
          sentence:    "The minister, together with her advisers, ___ the new bill.",
          answer:      "has signed",
          bank:        ["have signed", "has signed", "were signing", "are signing"],
          explanation: "Intervening phrase → ตาม Subject หลัก (the minister = sg) → has signed"
        },
        {
          sentence:    "Three-quarters of the students ___ passed the national exam.",
          answer:      "have",
          bank:        ["has", "have", "was", "is"],
          explanation: "Fraction + นับได้พหูพจน์ (students) → plural → have"
        },
        {
          sentence:    "Not only the teachers but also the headmaster ___ surprised.",
          answer:      "was",
          bank:        ["were", "was", "are", "have"],
          explanation: "Not only...but also → ตาม B (the headmaster = sg) → was"
        },
        {
          sentence:    "None of the water ___ safe to drink without boiling.",
          answer:      "is",
          bank:        ["are", "is", "were", "have"],
          explanation: "None of + นับไม่ได้ (water) → singular → is"
        },
        {
          sentence:    "It is the senior students who ___ mentoring the new intake.",
          answer:      "are",
          bank:        ["is", "are", "was", "were"],
          explanation: "who แทน senior students (พหูพจน์) → are"
        },
        {
          sentence:    "Fifty percent of the land ___ used for agriculture.",
          answer:      "is",
          bank:        ["are", "is", "were", "have"],
          explanation: "% + นับไม่ได้/เอกพจน์ (land) → singular → is"
        },
        {
          sentence:    "Physics ___ often considered more difficult than chemistry.",
          answer:      "is",
          bank:        ["is", "are", "were", "have"],
          explanation: "วิชา -ics → singular เสมอ → is"
        },
        {
          sentence:    "The dean, as well as the professors, ___ the graduation ceremony.",
          answer:      "is attending",
          bank:        ["is attending", "are attending", "were attending", "have attending"],
          explanation: "Intervening phrase (as well as) → ตาม Subject หลัก (the dean = sg) → is attending"
        }
      ]
    }
  ]
};
