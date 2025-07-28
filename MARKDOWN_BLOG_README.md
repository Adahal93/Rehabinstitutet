# Markdown Blog System

Detta är det nya Markdown-baserade systemet för att hantera bloggartiklar. Det är mycket bättre för stora mängder artiklar (200-1000+).

## Nuvarande status

**⚠️ Markdown-systemet är implementerat men inte aktivt just nu.** Systemet använder för närvarande det gamla `blogData.js` systemet för att undvika kompatibilitetsproblem med webbläsaren. Markdown-funktionaliteten finns redo för framtida användning.

## Fördelar med Markdown-systemet

✅ **Skalbar** - fungerar bra oavsett antal artiklar  
✅ **Git-vänligt** - bra versionshantering  
✅ **Enkelt att skriva** - använd vanliga textredigerare  
✅ **SEO-vänligt** - enkelt att hantera metadata  
✅ **Billigt** - inga externa tjänster behövs  

## Hur man lägger till en ny artikel

### Steg 1: Skapa en ny Markdown-fil

Skapa en ny fil i `src/content/articles/` med namnet `article-[ID].md`

Exempel: `src/content/articles/article-3.md`

### Steg 2: Lägg till frontmatter (metadata)

I början av filen, lägg till metadata mellan `---`:

```markdown
---
id: 3
title: "Din artikelrubrik"
excerpt: "Kort sammanfattning av artikeln (max 300 tecken)"
category: "ARTIKEL"  # eller "GUIDE"
author: "Adam Carlén"  # eller "Anton Zackrisson"
authorTitle: "Leg. Fysioterapeut"
date: "2025-01-15"
image: "running"  # namn på bildfil utan .webp
featured: false
latest: false
tags: ["tag1", "tag2", "tag3"]
---
```

### Steg 3: Skriv innehållet

Efter frontmatter, skriv artikeln i Markdown-format:

```markdown
# Huvudrubrik

Inledande text...

## Underrubrik

Mer text...

### Mindre underrubrik

- Lista med punkter
- Flera punkter

**Fet text** och *kursiv text*

[Länk till annan sida](/länk)

*Skriven av Adam Carlén, Leg. Fysioterapeut*
```

### Steg 4: Lägg till bild

Lägg till din bild i `src/assets/images/blog/` och uppdatera `image` i frontmatter.

## Markdown-syntax

### Rubriker
```markdown
# H1 - Huvudrubrik
## H2 - Underrubrik  
### H3 - Mindre underrubrik
```

### Textformatering
```markdown
**Fet text**
*Kursiv text*
`kod`
```

### Listor
```markdown
- Punktlista
- Flera punkter

1. Numrerad lista
2. Andra punkten
```

### Länkar
```markdown
[Länktext](https://url.se)
[Intern länk](/sida)
```

### Bilder
```markdown
![Alt-text](bild.jpg)
```

## Hur du lägger till en ny artikel

### Steg 1: Skapa en ny Markdown-fil
Skapa en ny fil i `src/content/articles/` med namnet `article-[nummer].md`

### Steg 2: Använd rätt frontmatter-format
```markdown
---
id: "NY"
title: "Din artikelrubrik"
excerpt: "Kort beskrivning av artikeln..."
category: "ARTIKEL"
author: "Adam Carlén"
authorTitle: "Leg. Fysioterapeut"
date: "2025-01-27"
image: "kettlebell_training"
featured: true
latest: false
tags: ["tag1", "tag2", "tag3"]
---

# Din artikelrubrik

Här kommer din artikel i Markdown-format...
```

### Steg 3: Välj rätt bild
Använd en av följande bild-nycklar:
- `running`
- `mri`
- `shoulder_joint_pain`
- `knee_joint_pain`
- `shoulder_pain`
- `achilles_tendon_pain`
- `kettlebell_training`
- `hamstringsmärta`
- `artros_knä`
- `who_guidelines`

### Steg 4: Fixa ID:n automatiskt
Kör kommandot för att automatiskt tilldela rätt ID:n:
```bash
node fix-markdown-ids.js
```

Systemet kommer automatiskt att:
- Ge den nya artikeln ID 1
- Flytta alla andra artiklar ett steg ner
- Sätt `latest: true` på den nya artikeln

## Exempel på komplett artikel

Se `src/content/articles/article-1.md` för ett komplett exempel.

## Migration från gamla systemet

För att migrera befintliga artiklar till Markdown-format:

1. **Skapa Markdown-fil**: Skapa `src/content/articles/article-[ID].md`
2. **Konvertera innehåll**: Konvertera HTML-innehåll till Markdown
3. **Uppdatera loader**: När alla artiklar är migrerade, uppdatera `markdownArticles.js` att använda Markdown-filerna istället för `blogData.js`

### Exempel på konvertering

**Från HTML:**
```html
<h1>Rubrik</h1>
<p>Text med <strong>fet text</strong></p>
<ul><li>Punkt</li></ul>
```

**Till Markdown:**
```markdown
# Rubrik
Text med **fet text**
- Punkt
```

## Kommandon

### Fixa ID:n automatiskt
```bash
node fix-markdown-ids.js
```

### Starta utvecklingsservern
```bash
npm start
```

## Struktur

```
src/
├── content/
│   └── articles/
│       ├── article-1.md
│       ├── article-2.md
│       └── ...
├── assets/
│   └── images/
│       └── blog/
│           ├── running.webp
│           ├── mri.webp
│           └── ...
└── data/
    └── markdownArticles.js  # Loader för artiklar
```

## Tips för SEO

- Använd beskrivande titlar
- Lägg till relevanta tags
- Skriv bra excerpt
- Använd H1, H2, H3 korrekt
- Lägg till interna länkar

## Felsökning

### Artikel visas inte
- Kontrollera att filnamnet är korrekt
- Kontrollera frontmatter-syntax
- Starta om utvecklingsservern

### Bilder visas inte
- Kontrollera att bilden finns i `src/assets/images/blog/`
- Kontrollera att `image` i frontmatter matchar filnamnet (utan .webp)

### Markdown renderas inte
- Kontrollera att syntaxen är korrekt
- Använd standard Markdown-syntax 