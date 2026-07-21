// c-subject&verb-agreement-p.js
// วิธีใช้: <script src="c-subject&verb-agreement-p.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Subject-Verb Agreement",
  badge:       "Primary · Grammar · A1–A2",
  titleMain:   "Subject-Verb Agreement",
  titleAccent: "กริยาต้องตรงกับประธาน",
  emoji:       "⚖️",
  subtitle:    "เรียนรู้การเลือกใช้กริยาให้ถูกต้องใน 3 ขั้นตอน",
  accentColor: "blue",

  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือก Verb ที่ถูกต้องให้ตรงกับประธาน มี emoji ช่วยบอกใบ้!",

  sections: [

    /* ────────────────────────────────────
       SECTION 1 — is/are + has/have
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ is / are และ has / have",
      cards: [
        {
          title: "💡 SVA คืออะไร?",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**Subject-Verb Agreement** = กริยาต้อง **ตรงกับ** ประธาน\nถ้าประธาน **1 คน/อัน** → ใช้ Verb รูป **เอกพจน์**\nถ้าประธาน **2+ คน/อัน** → ใช้ Verb รูป **พหูพจน์**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "blue",
                  word: "1 คน/อัน → is",
                  sub: "เอกพจน์ (Singular)",
                  body: "She [hl:blue]**is**[/hl] happy. 😊\nThe cat [hl:blue]**is**[/hl] cute. 🐱\nHe [hl:blue]**is**[/hl] my friend. 👦"
                },
                {
                  color: "secondary",
                  word: "2+ คน/อัน → are",
                  sub: "พหูพจน์ (Plural)",
                  body: "They [hl:secondary]**are**[/hl] happy. 😊😊\nThe cats [hl:secondary]**are**[/hl] cute. 🐱🐱\nWe [hl:secondary]**are**[/hl] friends. 👦👧"
                }
              ]
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["ประธาน", "ใช้", "ตัวอย่าง"],
              rows: [
                ["I",               "[hl:blue]**am**[/hl]",  "I [hl:blue]**am**[/hl] a student. 🎒"],
                ["He / She / It",   "[hl:blue]**is**[/hl]",  "She [hl:blue]**is**[/hl] kind. 👩"],
                ["Noun เอกพจน์",    "[hl:blue]**is**[/hl]",  "The dog [hl:blue]**is**[/hl] big. 🐶"],
                ["You / We / They", "[hl:secondary]**are**[/hl]", "They [hl:secondary]**are**[/hl] funny. 😄"],
                ["Noun พหูพจน์",    "[hl:secondary]**are**[/hl]", "The dogs [hl:secondary]**are**[/hl] big. 🐶🐶"]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "has vs have — ใช้เหมือน is/are!",
              text: "He / She / It / Noun เอกพจน์ → [hl:blue]**has**[/hl]\nI / You / We / They / Noun พหูพจน์ → [hl:secondary]**have**[/hl]\n\nShe [hl:blue]**has**[/hl] a cat. 🐱 | They [hl:secondary]**have**[/hl] cats. 🐱🐱"
            }
          ]
        },
        {
          title: "💬 ตัวอย่างประโยค",
          titleColor: "blue",
          blocks: [
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "My mum [hl:blue]**is**[/hl] a doctor. 👩‍⚕️", th: "mum = 1 คน → is" },
                { en: "My parents [hl:secondary]**are**[/hl] teachers. 👨‍🏫👩‍🏫", th: "parents = 2 คน → are" },
                { en: "The bird [hl:blue]**has**[/hl] beautiful wings. 🐦", th: "bird = 1 ตัว → has" },
                { en: "The birds [hl:secondary]**have**[/hl] beautiful wings. 🐦🐦", th: "birds = หลายตัว → have" },
                { en: "My dog [hl:blue]**is**[/hl] very playful. 🐶", th: "dog = 1 ตัว → is" },
                { en: "There [hl:blue]**is**[/hl] a cat on the sofa. 🐱", th: "a cat = 1 ตัว → is" },
                { en: "There [hl:secondary]**are**[/hl] three cats on the sofa. 🐱🐱🐱", th: "three cats = หลายตัว → are" }
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — He/She/It + Verb-s
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ He/She/It + Verb+s",
      cards: [
        {
          title: "🔤 เมื่อไหร่ต้องเติม -s/-es ที่ Verb?",
          titleColor: "primary",
          blocks: [
            {
              type: "explanation",
              text: "ในประโยคปัจจุบันกาล (Present Simple) เมื่อประธานเป็น **He / She / It** หรือ **Noun เอกพจน์**\n→ ต้องเติม **-s** หรือ **-es** ที่ท้าย Verb"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "primary",
                  word: "He/She/It → Verb+s",
                  sub: "เอกพจน์ — เติม s/es",
                  body: "She [hl:primary]**plays**[/hl] piano. 🎹\nHe [hl:primary]**runs**[/hl] fast. 🏃\nIt [hl:primary]**works**[/hl] well. ✅\nSara [hl:primary]**loves**[/hl] cats. ❤️"
                },
                {
                  color: "secondary",
                  word: "I/You/We/They → Verb",
                  sub: "พหูพจน์ — ไม่เติม s",
                  body: "I [hl:secondary]**play**[/hl] piano. 🎹\nThey [hl:secondary]**run**[/hl] fast. 🏃🏃\nWe [hl:secondary]**work**[/hl] together. 🤝\nThe boys [hl:secondary]**love**[/hl] cats. ❤️"
                }
              ]
            },
            {
              type: "table",
              headerColor: "primary",
              headers: ["Verb", "+ s/es", "กฎ"],
              rows: [
                ["play",  "[hl:primary]**plays**[/hl]",   "ปกติ → เติม -s"],
                ["run",   "[hl:primary]**runs**[/hl]",    "ปกติ → เติม -s"],
                ["watch", "[hl:primary]**watches**[/hl]", "ลงท้าย -ch → เติม -es"],
                ["go",    "[hl:primary]**goes**[/hl]",    "ลงท้าย -o → เติม -es"],
                ["study", "[hl:primary]**studies**[/hl]", "ลงท้าย -y (หลังพยัญชนะ) → เปลี่ยน y→i แล้วเติม -es"],
                ["have",  "[hl:primary]**has**[/hl]",     "พิเศษ — have → has"]
              ]
            }
          ]
        },
        {
          title: "💬 ตัวอย่างประโยค",
          titleColor: "primary",
          blocks: [
            {
              type: "examples",
              borderColor: "primary",
              items: [
                { en: "My brother [hl:primary]**plays**[/hl] football every day. ⚽", th: "brother = He → plays" },
                { en: "She [hl:primary]**studies**[/hl] very hard. 📚", th: "She → studies (y→ies)" },
                { en: "The train [hl:primary]**goes**[/hl] very fast. 🚄", th: "train = It → goes" },
                { en: "My dad [hl:primary]**watches**[/hl] TV every night. 📺", th: "dad = He → watches" },
                { en: "We [hl:secondary]**play**[/hl] games after school. 🎮", th: "We → play (ไม่เติม s)" },
                { en: "The children [hl:secondary]**study**[/hl] in the library. 📖", th: "children = They → study (ไม่เติม s)" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "จำง่าย: He/She/It + Verb+s เสมอ!",
              text: "He [hl:primary]**likes**[/hl] pizza. ✅ | ❌ He like pizza.\nShe [hl:primary]**has**[/hl] a dog. ✅ | ❌ She have a dog.\nIt [hl:primary]**runs**[/hl] fast. ✅ | ❌ It run fast."
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — There is/are + have/has
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ There is/are + สรุปรวม",
      cards: [
        {
          title: "📍 There is / There are",
          titleColor: "green",
          blocks: [
            {
              type: "explanation",
              text: "ใช้ **There is/are** เพื่อบอกว่า **มีอะไรอยู่ที่ไหน**\nดูที่ Noun ที่ตามหลัง — เอกพจน์ → **is** | พหูพจน์ → **are**"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "green",
                  word: "There is",
                  sub: "+ Noun เอกพจน์ (1 อัน)",
                  body: "There [hl:green]**is**[/hl] a dog in the garden. 🐶\nThere [hl:green]**is**[/hl] a book on the table. 📚\nThere [hl:green]**is**[/hl] an apple in my bag. 🍎"
                },
                {
                  color: "secondary",
                  word: "There are",
                  sub: "+ Noun พหูพจน์ (2+ อัน)",
                  body: "There [hl:secondary]**are**[/hl] two dogs in the garden. 🐶🐶\nThere [hl:secondary]**are**[/hl] five books on the table. 📚📚\nThere [hl:secondary]**are**[/hl] some apples in the bag. 🍎🍎"
                }
              ]
            },
            {
              type: "alert",
              color: "teal",
              icon: "💡",
              title: "There was / There were (อดีต)",
              text: "There [hl:green]**was**[/hl] a cat here yesterday. 🐱\nThere [hl:secondary]**were**[/hl] many cats here yesterday. 🐱🐱🐱"
            },
            {
              type: "examples",
              borderColor: "green",
              items: [
                { en: "There [hl:green]**is**[/hl] a bird in the tree. 🐦", th: "a bird = 1 ตัว → is" },
                { en: "There [hl:secondary]**are**[/hl] many flowers in the garden. 🌸", th: "many flowers = หลาย → are" },
                { en: "There [hl:green]**is**[/hl] some milk in the fridge. 🥛", th: "milk = นับไม่ได้ = เอกพจน์ → is" },
                { en: "There [hl:green]**was**[/hl] a party last night. 🎉", th: "อดีต + 1 งาน → was" }
              ]
            }
          ]
        },
        {
          title: "📋 สรุปรวมทุก SVA ระดับ Primary",
          titleColor: "blue",
          blocks: [
            {
              type: "quickref",
              headerColor: "blue",
              headers: ["ประธาน", "is/was", "are/were", "has", "have", "Verb+s"],
              rows: [
                ["I",                "am ✅", "–",    "–",   "✅",  "–"],
                ["He / She / It",    "✅",    "–",    "✅",  "–",   "✅"],
                ["Noun เอกพจน์",     "✅",    "–",    "✅",  "–",   "✅"],
                ["You / We / They",  "–",     "✅",   "–",   "✅",  "–"],
                ["Noun พหูพจน์",     "–",     "✅",   "–",   "✅",  "–"],
                ["There + เอกพจน์",  "✅",    "–",    "–",   "–",   "–"],
                ["There + พหูพจน์",  "–",     "✅",   "–",   "–",   "–"]
              ]
            },
            {
              type: "alert",
              color: "blue",
              icon: "🎯",
              title: "3 กฎที่ต้องจำให้ขึ้นใจ",
              text: "1. He / She / It + **is / has / Verb+s**\n2. We / They + **are / have / Verb (ไม่เติม s)**\n3. There **is** + เอกพจน์ | There **are** + พหูพจน์"
            }
          ]
        }
      ]
    }
  ],

  /* ══════════════════════════════════════
     QUIZ — 10 ข้อ
  ══════════════════════════════════════ */
  quiz: [
    {
      emoji: "🐶",
      sentence: "My dog ___ very fast.",
      answer: "runs",
      options: ["run", "runs", "are running", "running"],
      explanation: "dog = He/She/It → Verb+s → runs",
      tag: "Verb+s", tagColor: "primary"
    },
    {
      emoji: "👧👦",
      sentence: "My sister and brother ___ at school now.",
      answer: "are",
      options: ["is", "are", "was", "am"],
      explanation: "sister + brother = 2 คน → plural → are",
      tag: "is/are", tagColor: "blue"
    },
    {
      emoji: "🐠",
      sentence: "There ___ five fish in the tank.",
      answer: "are",
      options: ["is", "are", "was", "have"],
      explanation: "five fish = พหูพจน์ → There are",
      tag: "There is/are", tagColor: "green"
    },
    {
      emoji: "📚",
      sentence: "She ___ a lot of books at home.",
      answer: "has",
      options: ["have", "has", "are", "is"],
      explanation: "She → has (have → has)",
      tag: "has/have", tagColor: "blue"
    },
    {
      emoji: "⚽",
      sentence: "The boys ___ football in the park every evening.",
      answer: "play",
      options: ["play", "plays", "is playing", "has played"],
      explanation: "The boys = They (พหูพจน์) → play (ไม่เติม s)",
      tag: "Verb+s", tagColor: "primary"
    },
    {
      emoji: "🌟",
      sentence: "There ___ a star in the sky.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "a star = เอกพจน์ → There is",
      tag: "There is/are", tagColor: "green"
    },
    {
      emoji: "🐱",
      sentence: "My cat ___ on the sofa every afternoon.",
      answer: "sleeps",
      options: ["sleep", "sleeps", "are sleeping", "slept"],
      explanation: "cat = He/She/It → Verb+s → sleeps",
      tag: "Verb+s", tagColor: "primary"
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      sentence: "My family ___ very close. We love each other.",
      answer: "is",
      options: ["is", "are", "was", "have"],
      explanation: "family = Collective Noun (เป็นกลุ่มเดียว) → is",
      tag: "is/are", tagColor: "blue"
    },
    {
      emoji: "🎹",
      sentence: "Tom and Lisa ___ the piano very well.",
      answer: "play",
      options: ["play", "plays", "is playing", "has played"],
      explanation: "Tom and Lisa = 2 คน → plural → play",
      tag: "Verb+s", tagColor: "primary"
    },
    {
      emoji: "🥛",
      sentence: "There ___ some milk in the fridge.",
      answer: "is",
      options: ["is", "are", "were", "have"],
      explanation: "milk = นับไม่ได้ (singular) → There is",
      tag: "There is/are", tagColor: "green"
    }
  ]
};
