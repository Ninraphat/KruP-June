// e-pronoun-j.js
// วิธีใช้: ใส่ <script src="e-pronoun-j.js"></script> ก่อน </body> ใน e-template.html

const EXERCISE = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "Junior High · Exercise · A2–B1",
  titleMain:   "Pronoun",
  titleAccent: "สรรพนาม",
  emoji:       "🎯",
  subtitle:    "50 ข้อ · 5 รูปแบบ · Subject, Object, Possessive, Reflexive, Relative",
  accentColor: "secondary",  // primary | secondary | purple | blue | green | amber | red
  contentPage: "c-pronoun-j.html",  // ปุ่ม "ทบทวนเนื้อหา" จะลิงก์ไปที่นี่

  /* ══════════════════════════════════════
     PARTS
     type: "mc" | "fill" | "picture" | "context" | "fix" | "drag"
  ══════════════════════════════════════ */
  parts: [

    /* ────────────────────────────────────
       PART 1 — MC (10 ข้อ)
    ──────────────────────────────────── */
    {
      type:        "mc",
      label:       "Multiple Choice",
      title:       "Part 1 — Multiple Choice",
      description: "เลือก Pronoun ที่ถูกต้อง",
      icon:        "🔘",
      questions: [
        {
          sentence:    "___ is my best friend. We go to school together.",
          answer:      "He",
          options:     ["He", "Him", "His", "Himself"],
          explanation: "ตำแหน่งประธาน → Subject Pronoun → He",
          tag: "Subject", tagColor: "secondary"
        },
        {
          sentence:    "My teacher gave ___ a lot of homework today.",
          answer:      "us",
          options:     ["we", "us", "our", "ours"],
          explanation: "กรรมของ gave → Object Pronoun → us",
          tag: "Object", tagColor: "primary"
        },
        {
          sentence:    "That bag is not ___. Mine is blue.",
          answer:      "mine",
          options:     ["my", "mine", "me", "I"],
          explanation: "ใช้แทน Noun (my bag) → Possessive Pronoun → mine",
          tag: "Possessive", tagColor: "purple"
        },
        {
          sentence:    "She hurt ___ when she fell off her bike.",
          answer:      "herself",
          options:     ["her", "she", "herself", "hers"],
          explanation: "ประธาน (she) ทำกรรมตัวเอง → Reflexive → herself",
          tag: "Reflexive", tagColor: "amber"
        },
        {
          sentence:    "The boy ___ sits next to me is very funny.",
          answer:      "who",
          options:     ["who", "which", "whose", "whom"],
          explanation: "ขยายคน (the boy) → who",
          tag: "Relative", tagColor: "blue"
        },
        {
          sentence:    "___ called me last night, but I didn't recognize the voice.",
          answer:      "Someone",
          options:     ["Anyone", "Someone", "No one", "Everyone"],
          explanation: "ประโยคบอกเล่า ไม่รู้ว่าใคร → Someone",
          tag: "Indefinite", tagColor: "green"
        },
        {
          sentence:    "Is this ___ umbrella? You left it in the classroom.",
          answer:      "your",
          options:     ["you", "your", "yours", "yourself"],
          explanation: "ตามด้วย Noun (umbrella) → Possessive Adjective → your",
          tag: "Possessive", tagColor: "purple"
        },
        {
          sentence:    "The students painted the mural ___. No teacher helped them.",
          answer:      "themselves",
          options:     ["them", "they", "themselves", "theirs"],
          explanation: "เน้นว่าทำเอง → Emphatic Reflexive → themselves",
          tag: "Reflexive", tagColor: "amber"
        },
        {
          sentence:    "I can't hear ___. The music is too loud.",
          answer:      "anything",
          options:     ["something", "anything", "nothing", "everything"],
          explanation: "ปฏิเสธ (can't) → anything",
          tag: "Indefinite", tagColor: "green"
        },
        {
          sentence:    "The laptop ___ screen is cracked needs to be repaired.",
          answer:      "whose",
          options:     ["who", "which", "whose", "that"],
          explanation: "แสดงเจ้าของ (screen ของ laptop) → whose",
          tag: "Relative", tagColor: "blue"
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
      description: "พิมพ์ Pronoun ที่ถูกต้องลงในช่องว่าง",
      icon:        "✍️",
      questions: [
        {
          sentence:    "Tom forgot his pen. Can I lend ___ mine?",
          answer:      "him",
          explanation: "กรรมของ lend → Object Pronoun → him"
        },
        {
          sentence:    "My sister and I cleaned the house by ___.",
          answer:      "ourselves",
          explanation: "ทำด้วยตัวเอง (by + reflexive) → ourselves"
        },
        {
          sentence:    "This pen is not ___. I bought a red one.",
          answer:      "mine",
          explanation: "แทน Noun (my pen) ไม่มี Noun ตาม → mine"
        },
        {
          sentence:    "___ is knocking at the door. Can you check?",
          answer:      "Someone",
          explanation: "บอกเล่า ไม่รู้ใคร → Someone"
        },
        {
          sentence:    "The girl ___ won the race is my cousin.",
          answer:      "who",
          explanation: "ขยายคน (the girl) → who"
        },
        {
          sentence:    "I hurt ___ while cooking dinner last night.",
          answer:      "myself",
          explanation: "ประธาน (I) ทำกรรมตัวเอง → myself"
        },
        {
          sentence:    "She lost ___ keys. Now she can't get in.",
          answer:      "her",
          explanation: "ตามด้วย Noun (keys) → Possessive Adjective → her"
        },
        {
          sentence:    "The phone ___ Tom bought costs over 30,000 baht.",
          answer:      "that",
          explanation: "ขยายสิ่งของ (the phone) → that หรือ which"
        },
        {
          sentence:    "We enjoyed ___ at the theme park yesterday.",
          answer:      "ourselves",
          explanation: "ประธาน (we) ทำกรรมตัวเอง → ourselves"
        },
        {
          sentence:    "Is there ___ wrong? You look upset.",
          answer:      "something",
          explanation: "ประโยคคำถามที่คาดว่าใช่ / ห่วงใย → something (ไม่ใช่ anything)"
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
          text: `Last weekend, my friend Sara and (1)___ went to a new café. (2)___ was Sara's idea because she had heard great things about it. When we arrived, the café was quiet — (3)___ was there except a few people reading books. We sat down and ordered. The waiter (4)___ served us was very friendly. Sara took a photo of (5)___ coffee and posted it online.`,
          blanks: [
            {
              id: 0, answer: "I",
              options: ["I", "me", "my", "myself"],
              explanation: "ประธาน (Sara and I) → Subject Pronoun → I"
            },
            {
              id: 1, answer: "It",
              options: ["It", "This", "That", "Its"],
              explanation: "แทน 'going to the café' → It"
            },
            {
              id: 2, answer: "nobody",
              options: ["anybody", "somebody", "nobody", "everybody"],
              explanation: "ไม่มีใครอยู่ (ห้องเงียบ) → nobody (Verb บอกเล่า)"
            },
            {
              id: 3, answer: "who",
              options: ["who", "which", "whose", "whom"],
              explanation: "ขยายคน (the waiter) → who"
            },
            {
              id: 4, answer: "her",
              options: ["she", "her", "hers", "herself"],
              explanation: "ตามด้วย Noun (coffee) → Possessive Adjective → her"
            }
          ]
        },
        {
          text: `My classmates and (6)___ are doing a science project together. (7)___ topic is about climate change. Each member chose a part for (8)___. Tom, (9)___ loves doing research, collected all the data. The rest of us wrote the report (10)___.`,
          blanks: [
            {
              id: 5, answer: "I",
              options: ["I", "me", "my", "we"],
              explanation: "ประธาน (My classmates and I) → I"
            },
            {
              id: 6, answer: "Our",
              options: ["We", "Our", "Us", "Ours"],
              explanation: "ตามด้วย Noun (topic) → Possessive Adjective → Our"
            },
            {
              id: 7, answer: "themselves",
              options: ["them", "they", "themselves", "theirs"],
              explanation: "แต่ละคนรับผิดชอบส่วนของตัวเอง → themselves"
            },
            {
              id: 8, answer: "who",
              options: ["who", "which", "whose", "that"],
              explanation: "ขยายคน (Tom) → who"
            },
            {
              id: 9, answer: "ourselves",
              options: ["us", "we", "ourselves", "ours"],
              explanation: "เน้นว่าเขียนเอง (by ourselves) → ourselves"
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
      description: "เลือกประโยคที่ถูกต้อง",
      icon:        "🔧",
      questions: [
        {
          wrong:       "Him is my best friend.",
          options:     ["Him is my best friend.", "He is my best friend.", "His is my best friend."],
          answer:      "He is my best friend.",
          explanation: "ตำแหน่งประธาน → Subject Pronoun → He (ไม่ใช่ Him)"
        },
        {
          wrong:       "She taught herself to play the guitar.",
          options:     ["She taught herself to play the guitar.", "She taught her to play the guitar.", "She taught hers to play the guitar."],
          answer:      "She taught herself to play the guitar.",
          explanation: "ประโยคนี้ถูกต้องแล้ว — ประธาน (she) ทำกรรมตัวเอง → herself ✅"
        },
        {
          wrong:       "This is my book. That one is your.",
          options:     ["That one is your.", "That one is yours.", "That one is you."],
          answer:      "That one is yours.",
          explanation: "ไม่มี Noun ตาม → Possessive Pronoun → yours (ไม่ใช่ your)"
        },
        {
          wrong:       "The boy which won the prize is my brother.",
          options:     ["The boy which won the prize.", "The boy who won the prize.", "The boy whose won the prize."],
          answer:      "The boy who won the prize.",
          explanation: "ขยายคน → who (ไม่ใช่ which)"
        },
        {
          wrong:       "Nobody know the answer to this question.",
          options:     ["Nobody know the answer.", "Nobody knows the answer.", "Nobody are knowing the answer."],
          answer:      "Nobody knows the answer.",
          explanation: "nobody → Singular → Verb เอกพจน์ → knows"
        },
        {
          wrong:       "I and Tom went to the cinema last night.",
          options:     ["I and Tom went.", "Me and Tom went.", "Tom and I went to the cinema."],
          answer:      "Tom and I went to the cinema.",
          explanation: "สุภาพ: บอกชื่อคนอื่นก่อน + ประธาน → Tom and I"
        },
        {
          wrong:       "The phone that it screen is cracked is mine.",
          options:     ["The phone that it screen.", "The phone whose screen is cracked.", "The phone which screen is cracked."],
          answer:      "The phone whose screen is cracked.",
          explanation: "แสดงเจ้าของ → whose (ไม่ใช่ that it)"
        },
        {
          wrong:       "Someone left their bag here. Is it your?",
          options:     ["Is it your?", "Is it yours?", "Is it yourself?"],
          answer:      "Is it yours?",
          explanation: "ไม่มี Noun ตาม → Possessive Pronoun → yours"
        },
        {
          wrong:       "We enjoyed ourself at the party.",
          options:     ["We enjoyed ourself.", "We enjoyed ourselves.", "We enjoyed us."],
          answer:      "We enjoyed ourselves.",
          explanation: "ประธาน we → Reflexive พหูพจน์ → ourselves (ไม่ใช่ ourself)"
        },
        {
          wrong:       "Is there someone who can help me?",
          options:     ["Is there someone who can help me?", "Is there anyone who can help me?", "Is there no one who can help me?"],
          answer:      "Is there anyone who can help me?",
          explanation: "คำถามทั่วไป (ไม่ได้คาดว่ามี) → anyone (someone ใช้ได้แต่ anyone เหมาะกว่า)"
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
      description: "ลากคำมาวางในช่องว่างที่ถูกต้อง",
      icon:        "🧩",
      questions: [
        {
          sentence:    "___ and I are going to the library after school.",
          answer:      "She",
          bank:        ["She", "Her", "Hers", "Herself"],
          explanation: "ประธาน (She and I) → Subject Pronoun → She"
        },
        {
          sentence:    "Can you help ___? I can't carry all these boxes alone.",
          answer:      "me",
          bank:        ["I", "me", "my", "mine"],
          explanation: "กรรมของ help → Object Pronoun → me"
        },
        {
          sentence:    "The car ___ he bought last year is already broken.",
          answer:      "that",
          bank:        ["who", "whose", "that", "whom"],
          explanation: "ขยายสิ่งของ (the car) → that หรือ which"
        },
        {
          sentence:    "He lives by ___. No one else stays with him.",
          answer:      "himself",
          bank:        ["him", "his", "himself", "he"],
          explanation: "by himself = อยู่คนเดียว → Reflexive → himself"
        },
        {
          sentence:    "___ answered the question correctly. The class was impressed.",
          answer:      "Nobody",
          bank:        ["Anybody", "Nobody", "Somebody", "Everybody"],
          explanation: "ไม่มีใครตอบได้ → Nobody + Verb บอกเล่า (answered)"
        },
        {
          sentence:    "Is this pen ___? I found it on your desk.",
          answer:      "yours",
          bank:        ["you", "your", "yours", "yourself"],
          explanation: "ไม่มี Noun ตาม → Possessive Pronoun → yours"
        },
        {
          sentence:    "The scientist ___ discovered the vaccine won the Nobel Prize.",
          answer:      "who",
          bank:        ["who", "which", "whose", "what"],
          explanation: "ขยายคน (the scientist) → who"
        },
        {
          sentence:    "We were so tired that we couldn't enjoy ___ at the party.",
          answer:      "ourselves",
          bank:        ["us", "ours", "ourselves", "we"],
          explanation: "ประธาน we → กรรมตัวเอง → ourselves"
        },
        {
          sentence:    "There is ___ at the door. Go and see who it is.",
          answer:      "someone",
          bank:        ["anyone", "someone", "no one", "everyone"],
          explanation: "ประโยคบอกเล่า + มีคนมา → someone"
        },
        {
          sentence:    "The student ___ bag was stolen reported it to the teacher.",
          answer:      "whose",
          bank:        ["who", "which", "whose", "that"],
          explanation: "แสดงเจ้าของ (bag ของ student) → whose"
        }
      ]
    }
  ]
};
