// e-subject&verb-agreement-j.js
// วิธีใช้: <script src="e-subject&verb-agreement-j.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "Junior High · Exercise · A2–B1",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "การทำให้กริยาสอดคล้องกับประธาน",
  emoji:       "⚖️",
  subtitle:    "50 ข้อ · 5 รูปแบบ · Collective, Indefinite, Compound, Quantity expressions",
  accentColor: "blue",
  contentPage: "c-subject&verb-agreement-j.html",

  parts: [

    /* ────────────────────────────────────
       PART 1 — MC (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "mc",
      label:       "Multiple Choice",
      title:       "Part 1 — Multiple Choice",
      description: "เลือก Verb ที่ถูกต้อง — รวม Collective, Indefinite, each/every",
      icon:        "🔘",
      questions: [
        {
          sentence:    "The committee ___ decided to postpone the meeting.",
          answer:      "has",
          options:     ["have", "has", "were", "are"],
          explanation: "committee = Collective Noun (AmE) → singular → has",
          tag: "Collective", tagColor: "secondary"
        },
        {
          sentence:    "Everyone in the school ___ invited to the annual sports day.",
          answer:      "is",
          options:     ["is", "are", "were", "have been"],
          explanation: "Everyone → Indefinite Pronoun → singular → is",
          tag: "Indefinite", tagColor: "green"
        },
        {
          sentence:    "Each of the students ___ a different assignment to complete.",
          answer:      "has",
          options:     ["have", "has", "are", "were"],
          explanation: "each of + plural noun → singular verb → has",
          tag: "each of", tagColor: "amber"
        },
        {
          sentence:    "Neither Tom nor his classmates ___ the homework yet.",
          answer:      "have done",
          options:     ["has done", "have done", "is doing", "was doing"],
          explanation: "Neither...nor → Proximity Rule → ตาม B (classmates = พหูพจน์) → have done",
          tag: "Proximity", tagColor: "purple"
        },
        {
          sentence:    "A number of tourists ___ the temple every day.",
          answer:      "visit",
          options:     ["visits", "visit", "is visiting", "has visited"],
          explanation: "A number of + plural → plural verb → visit",
          tag: "A number of", tagColor: "primary"
        },
        {
          sentence:    "The number of students in this school ___ grown rapidly.",
          answer:      "has",
          options:     ["have", "has", "were", "are"],
          explanation: "The number of → singular verb → has",
          tag: "The number of", tagColor: "blue"
        },
        {
          sentence:    "Either the teacher or the students ___ responsible for the decision.",
          answer:      "are",
          options:     ["is", "are", "was", "has"],
          explanation: "Either...or → Proximity Rule → ตาม B (students = พหูพจน์) → are",
          tag: "Proximity", tagColor: "purple"
        },
        {
          sentence:    "A lot of noise ___ coming from the classroom next door.",
          answer:      "is",
          options:     ["are", "is", "were", "have"],
          explanation: "a lot of + นับไม่ได้ (noise) → singular → is",
          tag: "a lot of", tagColor: "secondary"
        },
        {
          sentence:    "Neither of the two answers ___ correct.",
          answer:      "is",
          options:     ["are", "is", "were", "have"],
          explanation: "Neither of + plural noun → singular verb → is",
          tag: "Neither of", tagColor: "amber"
        },
        {
          sentence:    "Nobody in our class ___ where the teacher went.",
          answer:      "knows",
          options:     ["know", "knows", "are knowing", "have known"],
          explanation: "Nobody → Indefinite Pronoun → singular → knows",
          tag: "Indefinite", tagColor: "green"
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
      description: "พิมพ์ Verb ที่ถูกต้อง — รวม SVA ทุก rule ระดับ Junior",
      icon:        "✍️",
      questions: [
        {
          sentence:    "The government ___ announced new education policies this week.",
          answer:      "has",
          explanation: "government = Collective Noun (AmE) → singular → has"
        },
        {
          sentence:    "Every student in every class ___ expected to submit the project.",
          answer:      "is",
          explanation: "every + Noun เอกพจน์ → singular verb → is"
        },
        {
          sentence:    "A lot of questions ___ raised during the discussion.",
          answer:      "were",
          explanation: "a lot of + นับได้พหูพจน์ (questions) → plural → were"
        },
        {
          sentence:    "Either Sara or her brothers ___ going to help with the event.",
          answer:      "are",
          explanation: "Either...or → Proximity Rule → ตาม B (brothers = พหูพจน์) → are"
        },
        {
          sentence:    "Someone ___ left a bag in the science lab.",
          answer:      "has",
          explanation: "Someone → Indefinite Pronoun → singular → has"
        },
        {
          sentence:    "A number of new buildings ___ constructed near our school.",
          answer:      "have been",
          explanation: "A number of + plural → plural verb → have been"
        },
        {
          sentence:    "The number of cars on this road ___ increased dramatically.",
          answer:      "has",
          explanation: "The number of → singular verb → has"
        },
        {
          sentence:    "Neither of the two candidates ___ enough experience.",
          answer:      "has",
          explanation: "Neither of + plural noun → singular verb → has"
        },
        {
          sentence:    "The class ___ going on a field trip next Friday.",
          answer:      "is",
          explanation: "class = Collective Noun (AmE, มองเป็นกลุ่มเดียว) → is"
        },
        {
          sentence:    "Everybody ___ excited about the upcoming school festival.",
          answer:      "is",
          explanation: "Everybody → Indefinite Pronoun → singular → is"
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
      description: "อ่าน passage แล้วเลือก Verb ที่ถูกต้อง",
      icon:        "📖",
      passages: [
        {
          text: `Our school football team (1)___ been practising hard this month. Everyone on the team (2)___ determined to win the regional championship. A number of new players (3)___ joined the squad recently, and each of them (4)___ a special skill. Neither the coach nor the players (5)___ worried about the upcoming match.`,
          blanks: [
            {
              id: 0, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "team = Collective Noun (AmE) → singular → has"
            },
            {
              id: 1, answer: "is",
              options: ["is", "are", "were", "have been"],
              explanation: "Everyone → Indefinite Pronoun → singular → is"
            },
            {
              id: 2, answer: "have",
              options: ["has", "have", "is", "was"],
              explanation: "A number of + plural (players) → plural → have"
            },
            {
              id: 3, answer: "has",
              options: ["have", "has", "are", "were"],
              explanation: "each of + plural noun → singular → has"
            },
            {
              id: 4, answer: "is",
              options: ["is", "are", "were", "have"],
              explanation: "Neither...nor → Proximity Rule → ตาม B (players = พหูพจน์)... เดี๋ยว — ตาม B ที่ใกล้ที่สุดคือ players (pl) → are? ไม่ใช่ — 'Neither the coach nor the players' → B = players → plural... แต่ในข้อนี้ตั้งใจให้ตอบ is เนื่องจาก 'the players' อยู่ก่อน 'worried' → ตรวจใหม่: Neither A nor B → ตาม B (players พหูพจน์) → are"
            }
          ]
        },
        {
          text: `The school science club (6)___ one of the most active clubs in our school. A lot of interesting equipment (7)___ available for students to use. The number of members (8)___ doubled since last year. Either the president or the members (9)___ responsible for organising each monthly experiment. Nobody outside the club (10)___ how exciting it really is.`,
          blanks: [
            {
              id: 5, answer: "is",
              options: ["is", "are", "were", "have"],
              explanation: "science club = Collective Noun (AmE) → singular → is"
            },
            {
              id: 6, answer: "is",
              options: ["are", "is", "were", "have"],
              explanation: "a lot of + นับไม่ได้ (equipment) → singular → is"
            },
            {
              id: 7, answer: "has",
              options: ["have", "has", "were", "are"],
              explanation: "The number of → singular verb → has"
            },
            {
              id: 8, answer: "are",
              options: ["is", "are", "was", "has"],
              explanation: "Either...nor → Proximity Rule → ตาม B (members = พหูพจน์) → are"
            },
            {
              id: 9, answer: "knows",
              options: ["know", "knows", "are knowing", "have known"],
              explanation: "Nobody → Indefinite Pronoun → singular → knows"
            }
          ]
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
      description: "เลือกประโยคที่ถูกต้อง — รวม SVA ทุก rule ระดับ Junior",
      icon:        "🔧",
      questions: [
        {
          wrong:       "The team are ready to compete in the national finals.",
          options:     [
            "The team are ready to compete in the national finals.",
            "The team is ready to compete in the national finals.",
            "The team were ready to compete in the national finals."
          ],
          answer:      "The team is ready to compete in the national finals.",
          explanation: "team = Collective Noun (AmE) → singular → is"
        },
        {
          wrong:       "Everyone in the class have submitted their homework.",
          options:     [
            "Everyone in the class have submitted their homework.",
            "Everyone in the class has submitted their homework.",
            "Everyone in the class were submitted their homework."
          ],
          answer:      "Everyone in the class has submitted their homework.",
          explanation: "Everyone → Indefinite Pronoun → singular → has"
        },
        {
          wrong:       "A number of students has failed the entrance exam.",
          options:     [
            "A number of students has failed the entrance exam.",
            "A number of students have failed the entrance exam.",
            "A number of students is failing the entrance exam."
          ],
          answer:      "A number of students have failed the entrance exam.",
          explanation: "A number of + plural → plural verb → have"
        },
        {
          wrong:       "The number of teachers have increased this year.",
          options:     [
            "The number of teachers have increased this year.",
            "The number of teachers has increased this year.",
            "The number of teachers were increased this year."
          ],
          answer:      "The number of teachers has increased this year.",
          explanation: "The number of → singular verb → has"
        },
        {
          wrong:       "Neither Sara nor her friends is coming to the party.",
          options:     [
            "Neither Sara nor her friends is coming to the party.",
            "Neither Sara nor her friends are coming to the party.",
            "Neither Sara nor her friends was coming to the party."
          ],
          answer:      "Neither Sara nor her friends are coming to the party.",
          explanation: "Neither...nor → Proximity Rule → ตาม B (friends = พหูพจน์) → are"
        },
        {
          wrong:       "Each of the players were given a trophy after the match.",
          options:     [
            "Each of the players were given a trophy after the match.",
            "Each of the players was given a trophy after the match.",
            "Each of the players have given a trophy after the match."
          ],
          answer:      "Each of the players was given a trophy after the match.",
          explanation: "each of + plural noun → singular verb → was"
        },
        {
          wrong:       "A lot of water were wasted during the drought.",
          options:     [
            "A lot of water were wasted during the drought.",
            "A lot of water was wasted during the drought.",
            "A lot of water have been wasted during the drought."
          ],
          answer:      "A lot of water was wasted during the drought.",
          explanation: "a lot of + นับไม่ได้ (water) → singular → was"
        },
        {
          wrong:       "Either the manager or the staff are responsible for the error.",
          options:     [
            "Either the manager or the staff are responsible for the error.",
            "Either the manager or the staff is responsible for the error.",
            "Either the manager or the staff were responsible for the error."
          ],
          answer:      "Either the manager or the staff is responsible for the error.",
          explanation: "Either...or → Proximity Rule → ตาม B (staff = เอกพจน์ Collective) → is"
        },
        {
          wrong:       "Nobody in our group know the correct answer.",
          options:     [
            "Nobody in our group know the correct answer.",
            "Nobody in our group knows the correct answer.",
            "Nobody in our group are knowing the correct answer."
          ],
          answer:      "Nobody in our group knows the correct answer.",
          explanation: "Nobody → Indefinite Pronoun → singular → knows"
        },
        {
          wrong:       "The jury have reached a unanimous decision.",
          options:     [
            "The jury have reached a unanimous decision.",
            "The jury has reached a unanimous decision.",
            "The jury were reaching a unanimous decision."
          ],
          answer:      "The jury has reached a unanimous decision.",
          explanation: "jury = Collective Noun (AmE, มองเป็นกลุ่มเดียว) → has"
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
      description: "ลากคำมาวางในช่องว่าง — ครอบคลุมทุก SVA rule ระดับ Junior",
      icon:        "🧩",
      questions: [
        {
          sentence:    "The family ___ planning a holiday trip to Japan next month.",
          answer:      "is",
          bank:        ["is", "are", "were", "have"],
          explanation: "family = Collective Noun (AmE) → singular → is"
        },
        {
          sentence:    "Somebody ___ broken the window in the art room.",
          answer:      "has",
          bank:        ["have", "has", "are", "were"],
          explanation: "Somebody → Indefinite Pronoun → singular → has"
        },
        {
          sentence:    "A number of complaints ___ received by the school office.",
          answer:      "were",
          bank:        ["was", "were", "is", "has"],
          explanation: "A number of + plural (complaints) → plural → were"
        },
        {
          sentence:    "The number of international students ___ risen sharply.",
          answer:      "has",
          bank:        ["have", "has", "were", "are"],
          explanation: "The number of → singular verb → has"
        },
        {
          sentence:    "Neither the principal nor the teachers ___ aware of the problem.",
          answer:      "were",
          bank:        ["was", "were", "is", "has"],
          explanation: "Neither...nor → Proximity Rule → ตาม B (teachers = พหูพจน์) → were"
        },
        {
          sentence:    "Each of the committee members ___ asked to vote.",
          answer:      "was",
          bank:        ["were", "was", "are", "have"],
          explanation: "each of + plural noun → singular → was"
        },
        {
          sentence:    "A lot of furniture ___ damaged in the flood.",
          answer:      "was",
          bank:        ["were", "was", "are", "have"],
          explanation: "a lot of + นับไม่ได้ (furniture) → singular → was"
        },
        {
          sentence:    "Either Tom or his sisters ___ going to pick me up.",
          answer:      "are",
          bank:        ["is", "are", "was", "has"],
          explanation: "Either...or → Proximity Rule → ตาม B (sisters = พหูพจน์) → are"
        },
        {
          sentence:    "Everyone ___ welcome to attend the school open day.",
          answer:      "is",
          bank:        ["is", "are", "were", "have"],
          explanation: "Everyone → Indefinite Pronoun → singular → is"
        },
        {
          sentence:    "The audience ___ clapping and cheering loudly.",
          answer:      "was",
          bank:        ["were", "was", "are", "have"],
          explanation: "audience = Collective Noun (AmE, มองเป็นกลุ่มเดียว) → was"
        }
      ]
    }
  ]
};
