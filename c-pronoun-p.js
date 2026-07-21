// c-pronoun-p.js
// วิธีใช้: <script src="c-pronoun-p.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "Primary · Grammar · A1–A2",
  titleMain:   "Pronoun",
  titleAccent: "สรรพนาม",
  emoji:       "👤",
  subtitle:    "เรียนรู้การใช้สรรพนามพื้นฐานใน 3 ขั้นตอน",
  accentColor: "blue",

  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือก Pronoun ที่ถูกต้อง มี emoji ช่วยบอกใบ้!",

  /* ══════════════════════════════════════
     SECTIONS
  ══════════════════════════════════════ */
  sections: [

    /* ────────────────────────────────────
       SECTION 1 — Subject Pronouns
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ Subject Pronouns",
      cards: [
        {
          title: "👤 Subject Pronoun คืออะไร?",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "**Subject Pronoun** คือคำที่ใช้แทนชื่อคน สัตว์ หรือสิ่งของ เมื่อมันทำหน้าที่เป็น **ประธาน** ของประโยค\nวางไว้ **หน้า Verb** เสมอ"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "blue",
                  word: "ไม่ใช้ Pronoun",
                  sub: "ซ้ำชื่อ — ฟังดูแปลก",
                  body: "**Tom** is my friend.\n**Tom** plays football.\n**Tom** likes pizza."
                },
                {
                  color: "green",
                  word: "ใช้ Pronoun",
                  sub: "ฟังดูเป็นธรรมชาติ ✅",
                  body: "**Tom** is my friend.\n**He** plays football.\n**He** likes pizza."
                }
              ]
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["หมายถึง", "Subject Pronoun", "ตัวอย่าง"],
              rows: [
                ["ฉัน / ผม",          "[hl:blue]I[/hl]",    "[hl:blue]I[/hl] am happy."],
                ["คุณ / เธอ",         "[hl:blue]you[/hl]",  "[hl:blue]You[/hl] are tall."],
                ["เขา (ผู้ชาย)",       "[hl:blue]he[/hl]",   "[hl:blue]He[/hl] is funny."],
                ["เธอ (ผู้หญิง)",      "[hl:blue]she[/hl]",  "[hl:blue]She[/hl] is kind."],
                ["มัน (สัตว์/สิ่งของ)", "[hl:blue]it[/hl]",   "[hl:blue]It[/hl] is big."],
                ["พวกเรา",            "[hl:blue]we[/hl]",   "[hl:blue]We[/hl] are students."],
                ["พวกเขา",            "[hl:blue]they[/hl]", "[hl:blue]They[/hl] are funny."]
              ]
            },
            {
              type: "examples",
              borderColor: "blue",
              items: [
                { en: "[hl:blue]I[/hl] love eating pizza! 🍕", th: "ฉันชอบกินพิซซ่า" },
                { en: "[hl:blue]She[/hl] is my best friend. 👧", th: "เธอเป็นเพื่อนสนิทของฉัน" },
                { en: "[hl:blue]They[/hl] play in the park every day. 🌳", th: "พวกเขาเล่นในสวนทุกวัน" },
                { en: "[hl:blue]It[/hl] is a very cute dog. 🐶", th: "มันเป็นสุนัขที่น่ารักมาก" }
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — Object Pronouns
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ Object Pronouns",
      cards: [
        {
          title: "🎯 Object Pronoun คืออะไร?",
          titleColor: "primary",
          blocks: [
            {
              type: "explanation",
              text: "**Object Pronoun** ใช้แทนคน สัตว์ หรือสิ่งของที่เป็น **กรรม** ของประโยค\nวางไว้ **หลัง Verb** หรือ **หลัง Preposition**"
            },
            {
              type: "table",
              headerColor: "primary",
              headers: ["Subject Pronoun", "→", "Object Pronoun", "ตัวอย่าง"],
              rows: [
                ["[hl:blue]I[/hl]",    "→", "[hl:primary]me[/hl]",   "Call [hl:primary]me[/hl]! 📞"],
                ["[hl:blue]you[/hl]",  "→", "[hl:primary]you[/hl]",  "I like [hl:primary]you[/hl]. 😊"],
                ["[hl:blue]he[/hl]",   "→", "[hl:primary]him[/hl]",  "Help [hl:primary]him[/hl]. 🙋‍♂️"],
                ["[hl:blue]she[/hl]",  "→", "[hl:primary]her[/hl]",  "I see [hl:primary]her[/hl]. 👀"],
                ["[hl:blue]it[/hl]",   "→", "[hl:primary]it[/hl]",   "I like [hl:primary]it[/hl]. 👍"],
                ["[hl:blue]we[/hl]",   "→", "[hl:primary]us[/hl]",   "Join [hl:primary]us[/hl]! 🤝"],
                ["[hl:blue]they[/hl]", "→", "[hl:primary]them[/hl]", "I know [hl:primary]them[/hl]. 👋"]
              ]
            },
            {
              type: "examples",
              borderColor: "primary",
              items: [
                { en: "My mum loves [hl:primary]me[/hl]. ❤️", th: "แม่รักฉัน" },
                { en: "I can see [hl:primary]them[/hl] in the garden. 🌷", th: "ฉันมองเห็นพวกเขาในสวน" },
                { en: "Can you help [hl:primary]us[/hl], please? 🙏", th: "ช่วยพวกเราได้ไหม?" },
                { en: "She gave [hl:primary]him[/hl] a birthday cake. 🎂", th: "เธอให้เค้กวันเกิดแก่เขา" }
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "จำง่ายๆ: Subject อยู่หน้า Verb / Object อยู่หลัง Verb",
              text: "[hl:blue]She[/hl] loves [hl:primary]him[/hl]. ✅\n❌ Her loves he. (ผิด — สลับที่)"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — Possessive Adjectives
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ Possessive Adjectives",
      cards: [
        {
          title: "🏷️ Possessive Adjective — แสดงความเป็นเจ้าของ",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "**Possessive Adjective** ใช้บอกว่าสิ่งนั้น **เป็นของใคร**\nต้องมี **Noun ตามหลังเสมอ** เช่น my bag, his pen, their house"
            },
            {
              type: "table",
              headerColor: "purple",
              headers: ["หมายถึง", "Possessive Adjective", "ตัวอย่าง"],
              rows: [
                ["ของฉัน",          "[hl:purple]my[/hl]",    "This is [hl:purple]my[/hl] book. 📚"],
                ["ของคุณ",          "[hl:purple]your[/hl]",  "Is this [hl:purple]your[/hl] pen? 🖊️"],
                ["ของเขา (ชาย)",    "[hl:purple]his[/hl]",   "That is [hl:purple]his[/hl] bag. 🎒"],
                ["ของเธอ (หญิง)",   "[hl:purple]her[/hl]",   "I like [hl:purple]her[/hl] dress. 👗"],
                ["ของมัน",          "[hl:purple]its[/hl]",   "The cat wags [hl:purple]its[/hl] tail. 🐱"],
                ["ของพวกเรา",       "[hl:purple]our[/hl]",   "[hl:purple]Our[/hl] school is big. 🏫"],
                ["ของพวกเขา",       "[hl:purple]their[/hl]", "[hl:purple]Their[/hl] dog is cute. 🐶"]
              ]
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "I forgot [hl:purple]my[/hl] homework again! 😅", th: "ฉันลืมการบ้านอีกแล้ว!" },
                { en: "[hl:purple]Her[/hl] cat is very fluffy and cute. 🐈", th: "แมวของเธอน่ารักมาก" },
                { en: "[hl:purple]Our[/hl] team won the football match! ⚽", th: "ทีมของเราชนะการแข่งขันฟุตบอล!" },
                { en: "The bird flapped [hl:purple]its[/hl] wings. 🐦", th: "นกกระพือปีกของมัน" }
              ]
            },
            {
              type: "alert",
              color: "teal",
              icon: "💡",
              title: "สรุปทุกคำในหน้าเดียว",
              text: "**Subject → Object → Possessive Adj**\n[hl:blue]I[/hl] → [hl:primary]me[/hl] → [hl:purple]my[/hl]\n[hl:blue]he[/hl] → [hl:primary]him[/hl] → [hl:purple]his[/hl]\n[hl:blue]she[/hl] → [hl:primary]her[/hl] → [hl:purple]her[/hl]\n[hl:blue]they[/hl] → [hl:primary]them[/hl] → [hl:purple]their[/hl]"
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
      emoji: "👦",
      sentence: "___ is my brother. He is 10 years old.",
      answer: "He",
      options: ["He", "Him", "His", "They"],
      explanation: "ตำแหน่งประธาน + ผู้ชาย 1 คน → Subject Pronoun → He",
      tag: "Subject", tagColor: "blue"
    },
    {
      emoji: "🎁",
      sentence: "My teacher gave ___ a gift today!",
      answer: "me",
      options: ["I", "me", "my", "mine"],
      explanation: "กรรมของ gave → Object Pronoun → me",
      tag: "Object", tagColor: "primary"
    },
    {
      emoji: "🎒",
      sentence: "This is not ___ bag. Mine is red.",
      answer: "my",
      options: ["me", "I", "my", "mine"],
      explanation: "ตามด้วย Noun (bag) → Possessive Adjective → my",
      tag: "Possessive", tagColor: "purple"
    },
    {
      emoji: "🐶",
      sentence: "I have a dog. ___ name is Brownie.",
      answer: "Its",
      options: ["His", "Her", "Its", "Their"],
      explanation: "สัตว์ (dog) เป็นเจ้าของ + ตามด้วย Noun (name) → Its",
      tag: "Possessive", tagColor: "purple"
    },
    {
      emoji: "👧👦",
      sentence: "Sara and Tom are my friends. I like ___.",
      answer: "them",
      options: ["they", "them", "their", "us"],
      explanation: "กรรมของ like + หลาย คน → Object Pronoun → them",
      tag: "Object", tagColor: "primary"
    },
    {
      emoji: "🏫",
      sentence: "___ school has a big swimming pool.",
      answer: "Our",
      options: ["We", "Us", "Our", "Ours"],
      explanation: "ตามด้วย Noun (school) → Possessive Adjective → Our",
      tag: "Possessive", tagColor: "purple"
    },
    {
      emoji: "🌸",
      sentence: "Look at that flower! ___ is so beautiful.",
      answer: "It",
      options: ["He", "She", "It", "They"],
      explanation: "แทนสิ่งของ (flower) → Subject Pronoun → It",
      tag: "Subject", tagColor: "blue"
    },
    {
      emoji: "📞",
      sentence: "Can you call ___ later? I need to talk to you.",
      answer: "me",
      options: ["I", "me", "my", "myself"],
      explanation: "กรรมของ call → Object Pronoun → me",
      tag: "Object", tagColor: "primary"
    },
    {
      emoji: "👩‍🍳",
      sentence: "My mum is a great cook. ___ food is delicious.",
      answer: "Her",
      options: ["She", "Her", "Hers", "His"],
      explanation: "ตามด้วย Noun (food) + ผู้หญิง → Possessive Adjective → Her",
      tag: "Possessive", tagColor: "purple"
    },
    {
      emoji: "⚽",
      sentence: "Tom and I play football. ___ love it!",
      answer: "We",
      options: ["They", "We", "Us", "Our"],
      explanation: "Tom and I = We → Subject Pronoun ตำแหน่งประธาน → We",
      tag: "Subject", tagColor: "blue"
    }
  ]
};
