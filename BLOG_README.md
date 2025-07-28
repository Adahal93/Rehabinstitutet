# Blog System - Användarguide

## Hur du lägger till nya artiklar

### 🚀 **Manuell hantering (Rekommenderat)**

För att lägga till en ny artikel manuellt:

1. **Använd din prompt** med Gemini/ChatGPT för att generera en artikel
2. **Klistra in artikeln** direkt i `blogData.js` med `id: "NY"`
3. **Ändra manuellt** `id: "NY"` till `id: 1`
4. **Kör automatisk fixning** via terminalen eller spara filen

**Exempel:**
```javascript
{
  id: "NY", // Lägg till med "NY" först
  title: "Din artikeltitel",
  excerpt: "Kort sammanfattning",
  category: "ARTIKEL",
  author: "Adam Carlén",
  authorTitle: "Leg. Fysioterapeut",
  date: "2025-01-20",
  image: "https://source.unsplash.com/800x600/?fitness",
  featured: false,
  latest: true,
  tags: ["tag1", "tag2"],
  content: `<p>Din HTML-innehåll...</p>`
}
```

**Efter att du ändrat till `id: 1`:**
```javascript
{
  id: 1, // Ändra manuellt från "NY" till 1
  title: "Din artikeltitel",
  // ... resten av artikeldata
}
```

### 🔧 **Automatisk ID-fixning**

Efter att du ändrat `id: "NY"` till `id: 1`, kör detta kommando i terminalen:

**📋 Kommandot:**
```bash
node fix-blog-ids.js
```

**📍 Var du kör kommandot:**
1. Öppna Terminal (eller Command Prompt på Windows)
2. Navigera till projektmappen: `cd /Users/adamhallqvist/Library/CloudStorage/OneDrive-Privat/Skrivbord/KODNING/rehabinstitutet`
3. Kör kommandot ovan

**Vad händer automatiskt:**
- ✅ Din nya artikel (tidigare `id: "NY"`) får `id: 1`
- ✅ Den tidigare artikeln med `id: 1` får `id: 2`
- ✅ Den tidigare artikeln med `id: 2` får `id: 3`
- ✅ Och så vidare genom hela kedjan
- ✅ `latest: true` sätts på din nya artikel
- ✅ Alla andra artiklar får `latest: false`
- ✅ Lästid beräknas automatiskt

### 📝 **Steg-för-steg process:**

1. **Lägg till artikel** med `id: "NY"` högst upp i `blogPosts` arrayen
2. **Ändra manuellt** `id: "NY"` till `id: 1`
3. **Spara filen**
4. **Kör automatisk fixning** via terminalen
5. **Gå till `http://localhost:3000/blog`** för att se resultatet

### 🎯 **Viktiga punkter:**

- **Använd alltid `id: "NY"`** när du klistrar in nya artiklar
- **Ändra manuellt till `id: 1`** efter att du klistrat in artikeln
- **Kör automatisk fixning** för att flytta alla andra artiklar ner ett steg
- **Systemet fixar automatiskt** alla ID-konflikter och `latest` flaggor

### Artikelstruktur

```javascript
{
  id: 9, // Unikt ID (använd nästa nummer i sekvensen)
  title: "Din artikeltitel här",
  excerpt: "Kort sammanfattning av artikeln som visas i förhandsvisningen",
  category: "ARTIKEL", // ARTIKEL, GUIDE, eller NEWS
  author: "Adam Carlén", // eller "Anton Zackrisson"
  authorTitle: "Leg. Fysioterapeut",
  date: "2025-01-20", // ÅÅÅÅ-MM-DD format
  image: "https://images.unsplash.com/photo-...", // Bild-URL
  featured: false, // true om artikeln ska visas i featured sidebar
  latest: false, // true för den senaste artikeln (endast en kan vara latest)
  tags: ["tag1", "tag2", "tag3"], // Relevanta taggar
  content: `
    <p>Din HTML-innehåll här...</p>
    
    <h2>Underrubrik</h2>
    
    <p>Mer text...</p>
    
    <ul>
      <li>Lista 1</li>
      <li>Lista 2</li>
    </ul>
  `
}
```

### Viktiga punkter:

1. **ID**: Använd nästa nummer i sekvensen (1, 2, 3, 4, 5...) eller "NY" för automatisk hantering
2. **Lästid**: Beräknas automatiskt baserat på antal ord (200 ord/minut)
3. **HTML-innehåll**: Använd vanliga HTML-taggar som `<p>`, `<h2>`, `<ul>`, `<li>`, `<strong>`, `<em>`, `<a>`
4. **Bilder**: Använd Unsplash-URLs eller lägg till bilder i `src/assets/images/`
5. **Featured**: Endast 3 artiklar kan vara featured samtidigt
6. **Latest**: Endast 1 artikel kan vara latest (senaste artikeln)

### Exempel på ny artikel:

```javascript
{
  id: 9,
  title: "Mobilitetsträning för bättre rörlighet",
  excerpt: "Övningar som förbättrar din rörlighet och minskar stelhet.",
  category: "NEWS",
  author: "Anton Zackrisson",
  authorTitle: "Leg. Fysioterapeut",
  date: "2024-12-10",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  featured: false,
  latest: false,
  tags: ["mobilitet", "rörlighet", "stretching"],
  content: `
    <p>Mobilitetsträning är viktigt för att behålla rörlighet och minska stelhet. I den här artikeln går vi igenom effektiva övningar.</p>

    <h2>Varför mobilitetsträning?</h2>

    <p>Regelbunden mobilitetsträning hjälper till att:</p>
    <ul>
      <li>Förbättra rörligheten</li>
      <li>Minska stelhet</li>
      <li>Förebygga skador</li>
      <li>Förbättra träningsprestationen</li>
    </ul>

    <h2>Bästa övningarna</h2>

    <p>Här är några effektiva mobilitetsövningar:</p>
    <ul>
      <li>Katt-kon</li>
      <li>Hip flexor stretch</li>
      <li>Thoracic rotation</li>
      <li>Ankle mobility</li>
    </ul>
  `
}
```

### Automatisk lästid

Systemet beräknar automatiskt lästiden baserat på antal ord i din artikel. Genomsnittshastigheten är satt till 200 ord per minut.

### Kategorier

- **ARTIKEL**: Längre, mer detaljerade artiklar
- **GUIDE**: Steg-för-steg guider och instruktioner
- **NEWS**: Kortare nyheter och uppdateringar

### Taggar

Använd relevanta taggar för att kategorisera dina artiklar. Exempel:
- fysisk aktivitet, rörelseriktlinjer, hälsa, träning
- smärta, träning, rehabilitering
- hemrehab, styrketräning, rörlighet

### Bilder

För bilder kan du använda:
1. Unsplash-URLs (som i exemplen)
2. Lägg till bilder i `src/assets/images/` och importera dem
3. Externa bild-URLs

### Spara och testa

Efter att du lagt till en ny artikel:
1. Spara filen `src/data/blogData.js`
2. Uppdatera webbläsaren
3. Gå till `/blog` för att se din nya artikel
4. Klicka på artikeln för att se den fullständiga versionen

### Tips

- Använd tydliga, beskrivande titlar
- Skriv korta, engagerande excerpts
- Använd relevanta taggar för bättre kategorisering
- Testa alltid din artikel efter att du lagt till den
- Håll en konsekvent struktur i dina artiklar

### 🔧 **Avancerad användning**

Om du vill använda funktionerna programmatiskt:

```javascript
import { addNewArticleFromPrompt, processNewArticle } from '../data/blogData';

// Lägg till artikel från prompt (automatisk hantering)
const newArticle = {
  id: "NY",
  title: "Min nya artikel",
  // ... resten av artikeldata
};
addNewArticleFromPrompt(newArticle);

// Manuell hantering
const processedArticle = processNewArticle(newArticle);
``` 