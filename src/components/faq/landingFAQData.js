// Kort FAQ-data för landningssidan - de vanligaste frågorna
// För att lägga till en ny fråga, kopiera strukturen nedan och fyll i dina data

// Länkar som matchar de faktiska routes i App.js
const LINKS = {
  achilles: "/program/fot-och-achillesprogrammet",
  hamstring: "/program/hamstringprogrammet",
  artros: "/program/artrosprogram-kna-och-hoft",
  lopare: "/program/styrketraning-for-lopare",
  dag3: "/program/traningsprogram-3-ggr",
  dag4: "/program/traningsprogram-4-ggr",
  program: "/program",
  kettlebell: "/program/kettlebell-programmet",
  ergonomi: "/ergonomi",
  prodKettlebells: "/training-equipment",
  prodBand: "/training-equipment",
  prodTraningsutrustning: "/training-equipment",
};

export const LANDING_FAQ_ITEMS = [
  {
    question: "Vad ingår i era digitala program?",
    answerHtml: `
<p>Våra program är byggda för att vara <strong>självförklarande</strong> och praktiska. Du får detaljerade veckoupplägg, videoanvisningar med teknikpunkter, skalningar för olika nivåer, samt tydliga kriterier för när du ska öka eller lätta på belastning.</p>
<p>Exempel: <a href="${LINKS.hamstring}">Hamstringprogrammet</a> för en säker återtåg efter skada, samt <a href="${LINKS.artros}">Artrosprogram knä/höft</a> med fokus på funktion och smärtlindring.</p>
    `,
  },
  {
    question: "Kan jag träna med artros i knä eller höft?",
    answerHtml: `
<p>Ja, de flesta med artros mår bättre av <strong>doserad träning</strong>. På sikt brukar vi rekommendera 2–3 pass per vecka med en belastning som utmanar. Ett gott riktmärke är att följa hur träningen påverkar dig dagen efter utförandet. Exempelvis är ökad smärta dagen efter träning ofta en indikation på att man gjort för mycket, tränat för hårt eller gjort övningar som är lite för avancerade för vad du för tillfället klarar av".</p>
<p>För en tydlig, trygg struktur kan du följa vårt <a href="${LINKS.artros}">Artrosprogram för knä/höft</a> som innehåller veckovisa upplägg och övningsfilmer.</p>
    `,
  },
  {
    question: "Vad behöver jag för hemmaträning?",
    answerHtml: `
<p>Du kommer långt med en enkel bas: en träningsmatta, ett par <strong>gummiband</strong> i olika motstånd och en <strong>kettlebell</strong> eller ett par <strong>justerbara hantlar</strong>. Detta täcker styrka, rörlighet och puls i de flesta nybörjar- och fortsättningsupplägg.</p>
<p>Vårt <a href="${LINKS.dag3}">3-dagarsprogram</a> är en utmärkt startpunkt. För att se vilka produkter vi rekommenderar, se <a href="${LINKS.prodTraningsutrustning}">rekommenderad träningsutrustning</a> där du hittar kvalitativa produkter för träning.</p>
    `,
  },
  {
    question: "Hur fungerar betalning och leverans?",
    answerHtml: `
<p>Du betalar smidigt på det enskilda programmets sida som finnes under <a href="${LINKS.program}">program</a>. Där får du direkt åtkomst via nedladdningslänk som skickas till e-post. Filerna är i PDF format och fungerar utmärkt på mobil, surfplatta och dator.</p>
<p>Osäker på vilket upplägg som passar? För normal styrketräning, titta exempelvis på <a href="${LINKS.dag3}">3-dagarsprogrammet</a> och <a href="${LINKS.dag4}">4-dagarsprogrammet</a>, eller har du en specifik skada du vill rehabilitera? Då erbjuder vi en hel del rehabiliteringsprogram som exempelvis <a href="${LINKS.hamstring}">Hamstringprogrammet</a> eller <a href="${LINKS.achilles}">Fot- och Achillesprogrammet</a>.</p>
    `,
  },
  {
    question: "Är styrketräning bra för löpare?",
    answerHtml: `
<p>Ja – välplanerad styrketräning förbättrar ofta löpekonomi, kraftöverföring och skadetålighet. Fokus ligger på höft- och knästräckare, bålstabilitet och vader/hamstrings.</p>
<p>I <a href="${LINKS.lopare}">Styrketräning för löpare</a> får du ett färdigt upplägg med progression, tester och videoanvisningar, samt tips för hur passen läggs i kalendern. Programmet är utformat för att träna 2 gånger i veckan, men kan även anpassas till en gång i veckan om det passar dig bättre.</p>
    `,
  },
  {
    question: "Kan ni hjälpa mig även om jag bor utomlands?",
    answerHtml: `
<p>Ja, våra digitala program och rådgivning är tillgängliga oavsett var du befinner dig. Du får direkt tillgång till materialet efter köp och kan följa uppläggen i din egen takt.</p>
<p>Är du ute efter en onlinekonsultation erbjuder vi givetvis det vart du än befinner dig i världen. Kontakta oss på info@rehabinstitutet.se för mer information.</p>
    `,
  },
];
