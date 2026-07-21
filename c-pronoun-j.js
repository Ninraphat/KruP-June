// c-pronoun-j.js
// วิธีใช้: ใส่ <script src="c-pronoun-j.js"></script> ก่อน </body> ใน c-template.html

const CONTENT = {

  /* ── META ── */
  title:       "Pronoun",
  badge:       "Junior High · Grammar · A2–B1",
  titleMain:   "Pronoun",
  titleAccent: "สรรพนาม",
  emoji:       "👤",
  subtitle:    "เรียนรู้สรรพนามทุกประเภทใน 4 ขั้นตอน",
  accentColor: "secondary",   // primary | secondary | purple | blue | green | amber | red

  /* ── STEP LABELS (ชื่อบนปุ่ม nav) ── */
  // label จะแสดงบนปุ่ม step nav — ใส่ emoji นำหน้าได้
  quizLabel: "✏️ Mini Quiz",
  quizIntro: "เลือก Pronoun ที่ถูกต้องในแต่ละประโยค",

  /* ══════════════════════════════════════
     SECTIONS
  ══════════════════════════════════════ */
  sections: [

    /* ────────────────────────────────────
       SECTION 1 — Subject & Object Pronouns
    ──────────────────────────────────── */
    {
      id: 1,
      label: "1️⃣ Subject & Object",
      cards: [
        {
          title: "📌 Subject Pronouns — ประธาน",
          titleColor: "secondary",
          blocks: [
            {
              type: "explanation",
              text: "**Subject Pronoun** ทำหน้าที่เป็น **ประธาน** ของประโยค — วางไว้หน้า Verb เสมอ"
            },
            {
              type: "table",
              headerColor: "secondary",
              headers: ["Person", "Singular (เอกพจน์)", "Plural (พหูพจน์)"],
              rows: [
                ["1st — ผู้พูด", "[hl:secondary]I[/hl]", "[hl:secondary]we[/hl]"],
                ["2nd — ผู้ฟัง", "[hl:secondary]you[/hl]", "[hl:secondary]you[/hl]"],
                ["3rd — ผู้ถูกพูดถึง", "[hl:secondary]he / she / it[/hl]", "[hl:secondary]they[/hl]"]
              ]
            },
            {
              type: "examples",
              borderColor: "secondary",
              items: [
                { en: "[hl:secondary]She[/hl] is a doctor.", th: "เธอเป็นหมอ" },
                { en: "[hl:secondary]They[/hl] play football every Saturday.", th: "พวกเขาเล่นฟุตบอลทุกวันเสาร์" },
                { en: "[hl:secondary]We[/hl] are going to the museum.", th: "พวกเราจะไปพิพิธภัณฑ์" }
              ]
            }
          ]
        },
        {
          title: "📌 Object Pronouns — กรรม",
          titleColor: "primary",
          blocks: [
            {
              type: "explanation",
              text: "**Object Pronoun** ทำหน้าที่เป็น **กรรม** — วางหลัง Verb หรือ Preposition"
            },
            {
              type: "table",
              headerColor: "primary",
              headers: ["Subject", "Object", "ตัวอย่าง"],
              rows: [
                ["I",       "[hl:primary]me[/hl]",   "Call [hl:primary]me[/hl] later."],
                ["you",     "[hl:primary]you[/hl]",   "I like [hl:primary]you[/hl]."],
                ["he",      "[hl:primary]him[/hl]",   "I saw [hl:primary]him[/hl] yesterday."],
                ["she",     "[hl:primary]her[/hl]",   "Tell [hl:primary]her[/hl] the news."],
                ["it",      "[hl:primary]it[/hl]",    "I found [hl:primary]it[/hl]."],
                ["we",      "[hl:primary]us[/hl]",    "Help [hl:primary]us[/hl], please."],
                ["they",    "[hl:primary]them[/hl]",  "I know [hl:primary]them[/hl] well."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "⚡",
              title: "จุดสอบบ่อย: Subject vs Object",
              text: "[hl:secondary]She[/hl] loves [hl:primary]him[/hl]. ✅ (Subject → Object)\n❌ Her loves he. (ผิด — สลับที่ผิด)"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 2 — Possessive
    ──────────────────────────────────── */
    {
      id: 2,
      label: "2️⃣ Possessive",
      cards: [
        {
          title: "🏷️ Possessive Adjective vs Pronoun",
          titleColor: "purple",
          blocks: [
            {
              type: "explanation",
              text: "คำแสดงความเป็นเจ้าของมี **2 แบบ** — ต้องไม่สับสน!"
            },
            {
              type: "compare",
              cols: 2,
              items: [
                {
                  color: "purple",
                  word: "Possessive Adjective",
                  sub: "ตามด้วย Noun เสมอ",
                  body: "[hl:purple]my[/hl] book, [hl:purple]your[/hl] car,\n[hl:purple]his[/hl] bag, [hl:purple]her[/hl] phone,\n[hl:purple]its[/hl] tail, [hl:purple]our[/hl] house, [hl:purple]their[/hl] team"
                },
                {
                  color: "blue",
                  word: "Possessive Pronoun",
                  sub: "ใช้แทน Noun — ไม่ตาม Noun",
                  body: "[hl:blue]mine[/hl], [hl:blue]yours[/hl],\n[hl:blue]his[/hl], [hl:blue]hers[/hl],\n[hl:blue]ours[/hl], [hl:blue]theirs[/hl]"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "purple",
              items: [
                { en: "This is [hl:purple]my[/hl] book. → This book is [hl:blue]mine[/hl].", th: "นี่คือหนังสือของฉัน" },
                { en: "Is that [hl:purple]your[/hl] car? → Is that car [hl:blue]yours[/hl]?", th: "นั่นรถของคุณไหม?" },
                { en: "I forgot [hl:purple]my[/hl] pen. Can I borrow [hl:blue]yours[/hl]?", th: "ฉันลืมปากกา ขอยืมของคุณได้ไหม?" }
              ]
            },
            {
              type: "alert",
              color: "red",
              icon: "⚠️",
              title: "ห้ามใช้ apostrophe กับ Possessive Pronoun!",
              text: "✅ [hl:blue]its[/hl] tail (Possessive Adj)\n❌ it's tail (it's = it is — ผิด!)\n✅ The decision is [hl:blue]theirs[/hl].\n❌ their's (ไม่มีคำนี้)"
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 3 — Reflexive & Relative
    ──────────────────────────────────── */
    {
      id: 3,
      label: "3️⃣ Reflexive & Relative",
      cards: [
        {
          title: "🔄 Reflexive Pronouns — สรรพนามสะท้อน",
          titleColor: "amber",
          blocks: [
            {
              type: "explanation",
              text: "ใช้เมื่อ **ประธานและกรรมเป็นคนเดียวกัน** หรือเน้นย้ำ"
            },
            {
              type: "table",
              headerColor: "amber",
              headers: ["Pronoun", "Reflexive", "ตัวอย่าง"],
              rows: [
                ["I",    "**myself**",     "I hurt [hl:amber]myself[/hl]."],
                ["you",  "**yourself**",   "Be [hl:amber]yourself[/hl]!"],
                ["he",   "**himself**",    "He taught [hl:amber]himself[/hl] guitar."],
                ["she",  "**herself**",    "She made it [hl:amber]herself[/hl]."],
                ["it",   "**itself**",     "The cat cleaned [hl:amber]itself[/hl]."],
                ["we",   "**ourselves**",  "We enjoyed [hl:amber]ourselves[/hl]."],
                ["they", "**themselves**", "They introduced [hl:amber]themselves[/hl]."]
              ]
            },
            {
              type: "alert",
              color: "yellow",
              icon: "💡",
              title: "2 การใช้งาน",
              text: "**1. Reflexive** (กรรมสะท้อนกลับ): She cut [hl:amber]herself[/hl]. — เธอตัดตัวเอง\n**2. Emphatic** (เน้นย้ำ): I made this cake [hl:amber]myself[/hl]. — ฉันทำเค้กนี้เอง"
            }
          ]
        },
        {
          title: "🔗 Relative Pronouns พื้นฐาน",
          titleColor: "blue",
          blocks: [
            {
              type: "explanation",
              text: "ใช้เชื่อมประโยคหลักกับประโยครอง — บอกว่า **คนไหน / อะไร / ที่ไหน**"
            },
            {
              type: "table",
              headerColor: "blue",
              headers: ["คำ", "ใช้กับ", "ตัวอย่าง"],
              rows: [
                [
                  { main: "**who**", note: "ใช้กับคน" },
                  "คน (people)",
                  "The teacher [hl:blue]who[/hl] taught me was great."
                ],
                [
                  { main: "**which**", note: "ใช้กับสิ่งของ/สัตว์" },
                  "สิ่งของ / สัตว์",
                  "The book [hl:blue]which[/hl] I read was interesting."
                ],
                [
                  { main: "**that**", note: "ใช้กับคนหรือสิ่งของ" },
                  "คน / สิ่งของ",
                  "The phone [hl:blue]that[/hl] she bought was expensive."
                ],
                [
                  { main: "**whose**", note: "แสดงความเป็นเจ้าของ" },
                  "แสดงเจ้าของ",
                  "The student [hl:blue]whose[/hl] bag was stolen cried."
                ]
              ]
            }
          ]
        }
      ]
    },

    /* ────────────────────────────────────
       SECTION 4 — Indefinite Pronouns
    ──────────────────────────────────── */
    {
      id: 4,
      label: "4️⃣ Indefinite",
      cards: [
        {
          title: "🌐 Indefinite Pronouns",
          titleColor: "green",
          blocks: [
            {
              type: "explanation",
              text: "ใช้เมื่อ **ไม่ระบุชัดเจน** ว่าหมายถึงคนหรือสิ่งใด — Verb ตามเสมอเป็น **เอกพจน์**"
            },
            {
              type: "compare",
              cols: 3,
              items: [
                {
                  color: "green",
                  word: "some-",
                  sub: "บอกเล่า",
                  body: "**someone** / somebody\n**something**\n**somewhere**"
                },
                {
                  color: "primary",
                  word: "any-",
                  sub: "คำถาม / ปฏิเสธ",
                  body: "**anyone** / anybody\n**anything**\n**anywhere**"
                },
                {
                  color: "red",
                  word: "no-",
                  sub: "ปฏิเสธ (Verb บอกเล่า)",
                  body: "**no one** / nobody\n**nothing**\n**nowhere**"
                }
              ]
            },
            {
              type: "examples",
              borderColor: "green",
              items: [
                { en: "[hl:green]Someone[/hl] left a bag here.", th: "มีคนบางคนทิ้งกระเป๋าไว้ที่นี่" },
                { en: "Is there [hl:primary]anything[/hl] I can help with?", th: "มีอะไรที่ฉันช่วยได้ไหม?" },
                { en: "[hl:red]Nobody[/hl] knows the answer.", th: "ไม่มีใครรู้คำตอบ" },
                { en: "I can't find my keys [hl:primary]anywhere[/hl].", th: "ฉันหากุญแจไม่เจอที่ไหนเลย" }
              ]
            },
            {
              type: "alert",
              color: "purple",
              icon: "📌",
              title: "SVA: Indefinite Pronoun → Verb เอกพจน์เสมอ",
              text: "[hl:green]Everyone[/hl] **is** ready. ✅\n[hl:red]Nobody[/hl] **knows[/hl]. ✅\n❌ Everyone are ready. (ผิด)"
            }
          ]
        }
      ]
    }
  ],

  /* ══════════════════════════════════════
     QUIZ
  ══════════════════════════════════════ */
  quiz: [
    {
      sentence: "___ is my best friend. We go to the same school.",
      answer: "He",
      options: ["He", "Him", "His", "Himself"],
      explanation: "ตำแหน่งประธาน → Subject Pronoun → He",
      tag: "Subject",
      tagColor: "secondary"
    },
    {
      sentence: "My mum gave ___ a birthday present.",
      answer: "me",
      options: ["I", "me", "my", "myself"],
      explanation: "กรรมของ gave → Object Pronoun → me",
      tag: "Object",
      tagColor: "primary"
    },
    {
      sentence: "Is this your book? No, it's not ___. It's Sara's.",
      answer: "mine",
      options: ["my", "mine", "me", "myself"],
      explanation: "ใช้แทน my book ไม่มี Noun ตาม → Possessive Pronoun → mine",
      tag: "Possessive",
      tagColor: "purple"
    },
    {
      sentence: "The dog hurt ___ while playing in the garden.",
      answer: "itself",
      options: ["him", "it", "itself", "themselves"],
      explanation: "ประธาน (the dog = it) ทำกรรมตัวเอง → Reflexive → itself",
      tag: "Reflexive",
      tagColor: "amber"
    },
    {
      sentence: "The student ___ won the prize is in my class.",
      answer: "who",
      options: ["who", "which", "whose", "whom"],
      explanation: "ขยายคน (the student) → who",
      tag: "Relative",
      tagColor: "blue"
    },
    {
      sentence: "___ knocked on the door, but I didn't know who it was.",
      answer: "Someone",
      options: ["Anyone", "Someone", "No one", "Everyone"],
      explanation: "ประโยคบอกเล่า + ไม่รู้ว่าใคร → Someone",
      tag: "Indefinite",
      tagColor: "green"
    },
    {
      sentence: "She made the dress ___. No one helped her.",
      answer: "herself",
      options: ["her", "she", "herself", "hers"],
      explanation: "เน้นว่าทำเอง (Emphatic) → herself",
      tag: "Reflexive",
      tagColor: "amber"
    },
    {
      sentence: "I can't find my wallet ___. It's gone!",
      answer: "anywhere",
      options: ["somewhere", "anywhere", "nowhere", "everywhere"],
      explanation: "ปฏิเสธ (can't) + สถานที่ → anywhere",
      tag: "Indefinite",
      tagColor: "green"
    },
    {
      sentence: "The book ___ cover is torn belongs to the library.",
      answer: "whose",
      options: ["who", "which", "whose", "that"],
      explanation: "แสดงความเป็นเจ้าของ (cover ของหนังสือ) → whose",
      tag: "Relative",
      tagColor: "blue"
    },
    {
      sentence: "Tom and I went to the mall. ___ bought a lot of things.",
      answer: "We",
      options: ["We", "Us", "Our", "Ourselves"],
      explanation: "Tom and I = We → Subject Pronoun ตำแหน่งประธาน → We",
      tag: "Subject",
      tagColor: "secondary"
    }
  ]
};
