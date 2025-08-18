// FAQ data file - Lägg till nya frågor och kategorier här
// För att lägga till en ny FAQ, kopiera strukturen nedan och fyll i dina data

// Länkar som matchar de faktiska routes i App.js
const LINKS = {
  kettlebell: "/program/kettlebell-programmet", // Kettlebell-program kommer att läggas till senare
  achilles: "/program/fot-och-achillesprogrammet",
  hamstring: "/program/hamstringprogrammet",
  artros: "/program/artrosprogram-kna-och-hoft",
  axel: "/program", // Axel-program finns inte än, pekar på programsidan
  lopare: "/program/styrketraning-for-lopare",
  dag3: "/program/traningsprogram-3-ggr",
  dag4: "/program/traningsprogram-4-ggr",
  smarta: "/program", // Träna med smärta finns som gratis dokument, pekar på programsidan
  ergonomi: "/ergonomi",
  prodKettlebells: "/training-equipment",
  prodBand: "/training-equipment",
};

export const FAQ_CATEGORIES = [
  {
    slug: "rehab-och-skador",
    title: "Rehabilitering & skador",
    items: [
      {
        question: "Kan jag träna med artros i knä eller höft?",
        answerHtml: `
<p>Ja, de flesta med artros mår bättre av <strong>doserad träning</strong>. Målet är att minska smärta, förbättra ledfunktion och öka vardagskapacitet utan att överbelasta. Vi brukar rekommendera 2–3 pass per vecka med låg till måttlig intensitet, där du följer principen "lagom trötthet, hanterbar ömhet". Tillfällig ökning av värk kan förekomma initialt men ska klinga av inom 24–48 timmar. Fokusera på styrka för lår- och sätesmuskulatur, rörlighet samt kortare konditionspass. Anpassa progression i små steg och utvärdera responsen.</p>
<p>För en tydlig, trygg struktur kan du följa vårt <a href="${LINKS.artros}">Artrosprogram för knä/höft</a> som innehåller veckovisa upplägg, övningsfilmer och råd för att skala upp eller ner belastning. Vid behov kan du komplettera med vår guide <a href="${LINKS.smarta}">Träna med smärta</a> för att navigera smärtvariationer.</p>
        `,
      },
      {
        question: "Hur länge tar återhämtning vid hamstringsskada?",
        answerHtml: `
<p>Återhämtningstiden varierar med skadans typ och omfattning, men många lättare bristningar återgår till normal träning inom 2–6 veckor, medan mer omfattande skador kan ta 8–12 veckor eller längre. Rehabilitering sker i faser: initial smärt- och svullnadskontroll, gradvis ökad belastning med fokuserad styrka (särskilt excentrisk/lengthened), löpteknisk återintroduktion samt sprint- och riktningsförändringar mot slutet. Objektiva kriterier (styrkesymmetri, tolerans för sprint, funktionella tester) styr återgång snarare än kalendertid.</p>
<p>Vårt <a href="${LINKS.hamstring}">Hamstringprogram</a> ger en tydlig progression med videoanvisningar, tester och riktlinjer för att trappa upp löpning. Använd gärna <a href="${LINKS.smarta}">Träna med smärta</a> som ramverk för att förstå "okej smärtnivåer" under upptrappning.</p>
        `,
      },
      {
        question: "Kan jag träna trots smärta?",
        answerHtml: `
<p>I många fall är svaret ja, men nyckeln är att <strong>dosera</strong> och att skilja på acceptabel träningsömhet och varningssignaler. Vi använder ofta en enkel skala: smärta upp till 3–4/10 under aktivitet kan vara okej om den klingar av inom 24–48 timmar och inte leder till successiv försämring vecka för vecka. Justera volym, intensitet, hastighet eller rörelsedjup innan du pausar helt. Lägg in vilodagar och följ en plan där progression sker i små steg.</p>
<p>I vår kostnadsfria guide <a href="${LINKS.smarta}">Träna med smärta</a> hittar du praktiska principer för att fatta beslut i stunden. Flera av våra program – t.ex. <a href="${LINKS.axel}">Axelprogrammet</a> och <a href="${LINKS.achilles}">Fot- & achillesprogrammet</a> – innehåller tydliga skalningar som hjälper dig fortsätta träna säkert.</p>
        `,
      },
    ],
  },
  {
    slug: "traningsprogram",
    title: "Träningsprogram",
    items: [
      {
        question: "3-dagars vs 4-dagars program – vad passar mig?",
        answerHtml: `
<p>Valet beror på din vardag, återhämtningsförmåga och mål. Ett <strong>3-dagarsprogram</strong> passar dig som vill ha tydlig struktur med tillräcklig vila mellan passen och goda chanser till progression även vid tight schema. Ett <strong>4-dagarsprogram</strong> ger högre träningsfrekvens, fler möjligheter att fördela volym (t.ex. under/över-kropp) och lite snabbare anpassning – förutsatt att sömn, stress och kost stödjer återhämtning.</p>
<p>Om du är osäker, börja med <a href="${LINKS.dag3}">Träningsprogram 3 dagar</a> och växla senare till <a href="${LINKS.dag4}">Träningsprogram 4 dagar</a> när kroppen känns redo. Du kan också kombinera med specifika upplägg som <a href="${LINKS.lopare}">Styrketräning för löpare</a> om ditt primära mål är löprelaterad prestation. Anpassa volym och intensitet per vecka baserat på hur du svarar.</p>
        `,
      },
      {
        question: "Är styrketräning bra för löpare?",
        answerHtml: `
<p>Ja – välplanerad styrketräning förbättrar ofta löpekonomi, kraftöverföring och skadetålighet. Fokus ligger på höft- och knästräckare, bålstabilitet och vader/hamstrings för att tåla belastning vid högre farter och volymer. Du behöver inte "bodybuildingvolym" för att få effekt; 2–3 kortare pass/vecka med tunga, tekniskt rena lyft eller väl valda hopp/plyo kan räcka. Periodisering intill löpblock och tävling minskar risken att styrkan "stör" löpkvaliteten.</p>
<p>I <a href="${LINKS.lopare}">Styrketräning för löpare</a> får du ett färdigt upplägg med progression, tester och videoanvisningar, samt tips för hur passen läggs i kalendern tillsammans med intervaller och långpass. För vardagsstyrka kan du kombinera med <a href="${LINKS.dag3}">3-dagars</a> eller <a href="${LINKS.dag4}">4-dagarsprogrammet</a>.</p>
        `,
      },
      {
        question: "Vad ingår i era digitala program?",
        answerHtml: `
<p>Våra program är byggda för att vara <strong>självförklarande</strong> och praktiska. Du får detaljerade veckoupplägg, videoanvisningar med teknikpunkter, skalningar för olika nivåer, samt tydliga kriterier för när du ska öka eller lätta på belastning. Programmen innehåller också råd om återhämtning, smärthantering och alternativa övningar om något inte känns bra.</p>
<p>Exempel: <a href="${LINKS.kettlebell}">Kettlebellprogrammet</a> för effektiv hemmaträning, <a href="${LINKS.hamstring}">Hamstringprogrammet</a> för säkert återtåg efter skada, samt <a href="${LINKS.artros}">Artrosprogram knä/höft</a> med fokus på funktion och smärtlindring. För dig som vill ha en bred bas rekommenderar vi <a href="${LINKS.dag3}">3-dagars</a> eller <a href="${LINKS.dag4}">4-dagars</a> uppläggen.</p>
        `,
      },
    ],
  },
  {
    slug: "utrustning-och-redskap",
    title: "Utrustning & redskap",
    items: [
      {
        question: "Vilken kettlebell vikt ska jag börja med?",
        answerHtml: `
<p>En bra startvikt beror på erfarenhet och övningsval. Som grov riktlinje väljer många nybörjare ca 8–12 kg för teknikövningar och 12–16 kg för grundlyft som goblet squat/sving (vuxna med viss träningsvana kan ofta börja något högre). Målet är att hitta en vikt som låter dig hålla god teknik i 8–12 repetitioner med sista 2–3 reps utmanande men kontrollerade. Prioritera kvalitet framför kvantitet.</p>
<p>I vårt <a href="${LINKS.kettlebell}">Kettlebellprogram</a> får du tydliga progressionssteg och säkerhetsråd. Behöver du köpa hem en kula? Se våra rekommenderade alternativ under <a href="${LINKS.prodKettlebells}">kettlebells</a>. För kompletterande styrka och rörlighet kan du kombinera med <a href="${LINKS.dag3}">3-dagarsprogrammet</a> eller <a href="${LINKS.dag4}">4-dagarsprogrammet</a>.</p>
        `,
      },
      {
        question: "Är gummiband effektiva för rehab?",
        answerHtml: `
<p>Ja, gummiband är ett flexibelt och kostnadseffektivt redskap för att dosera motstånd i många rehabiliteringsövningar. De lämpar sig väl för axel-, höft- och knäkontroll, och gör det enkelt att justera belastning via bandens tjocklek eller längd. Fördelen är att du kan träna hemma och gradvis öka svårighetsgraden utan stora inköp. Kombinera gärna med kroppsviktsövningar och, vid behov, fria vikter för att utveckla styrka i hela rörelsebanor.</p>
<p>Vi listar pålitliga band under <a href="${LINKS.prodBand}">gummiband</a>. Flera av våra program – t.ex. <a href="${LINKS.axel}">Axelprogrammet</a> och <a href="${LINKS.achilles}">Fot- & achillesprogrammet</a> – använder band i progressionerna och visar tydligt hur du anpassar svårighetsgrad.</p>
        `,
      },
      {
        question: "Vad behöver jag för hemmaträning?",
        answerHtml: `
<p>Du kommer långt med en enkel bas: en träningsmatta, ett par <strong>gummiband</strong> i olika motstånd och minst en <strong>kettlebell</strong>. Detta täcker styrka, rörlighet och puls i de flesta nybörjar- och fortsättningsupplägg. När du utvecklas kan du komplettera med en andra kettlebell, justerbara hantlar eller ett enkelt dragband för dörr. Prioritera utrymme och säkerhet: fria golvytor, bra skor eller barfota vid behov, och stabil förvaring av redskap.</p>
<p>Vårt <a href="${LINKS.kettlebell}">Kettlebellprogram</a> och <a href="${LINKS.dag3}">3-dagarsprogram</a> är utmärkta startpunkter. För inköp, se <a href="${LINKS.prodKettlebells}">rekommenderade kettlebells</a> och <a href="${LINKS.prodBand}">gummiband</a>. Behöver fot- eller hälsenestöd? Kolla <a href="${LINKS.achilles}">Fot- & achillesprogrammet</a> för specifika övningar.</p>
        `,
      },
    ],
  },
  {
    slug: "rehab-online-och-konsultation",
    title: "Rehab online & konsultation",
    items: [
      {
        question: "Fungerar rehab online lika bra som fysiska besök?",
        answerHtml: `
<p>För många besvär kan <strong>strukturerad online-rehab</strong> vara lika effektiv som fysisk uppföljning, särskilt när program, övningsinstruktioner och återkoppling är tydliga. Fördelen är tillgänglighet och kontinuitet: du kan träna där du är och få guidning när du behöver. Vid behov rekommenderar vi kompletterande fysisk bedömning (t.ex. vid osäker diagnos eller röda flaggor), men för vanliga överbelastningsproblem och återuppbyggnad är en digital plan ofta tillräcklig.</p>
<p>Våra program – exempelvis <a href="${LINKS.hamstring}">Hamstringprogrammet</a> och <a href="${LINKS.axel}">Axelprogrammet</a> – innehåller tydliga kriterier för progression, och vår guide <a href="${LINKS.smarta}">Träna med smärta</a> hjälper dig anpassa belastningen. Behöver du individuell rådgivning kan du boka en digital konsultation.</p>
        `,
      },
      {
        question: "Kan ni hjälpa mig även om jag bor utomlands?",
        answerHtml: `
<p>Ja, våra digitala program och rådgivning är tillgängliga oavsett var du befinner dig. Du får direkt tillgång till materialet efter köp och kan följa uppläggen i din egen takt. Vid tidszonsskillnader planerar vi kommunikationen så att du får återkoppling inom rimlig tid. Observera att vi inte erbjuder medicinsk diagnos eller behandling utanför svensk lagstiftning, men vi kan ge träningsråd och progression baserat på dina symptom och mål.</p>
<p>Börja gärna med ett program som passar din situation, t.ex. <a href="${LINKS.artros}">Artrosprogram knä/höft</a> eller <a href="${LINKS.kettlebell}">Kettlebellprogrammet</a>. Vid frågor om smärtstyrning, se <a href="${LINKS.smarta}">Träna med smärta</a>. Vid akuta eller allvarliga besvär ska du alltid söka lokal vård först.</p>
        `,
      },
      {
        question: "Ingår individuell anpassning?",
        answerHtml: `
<p>Våra program är designade för att passa många, men det finns alltid utrymme för individuell anpassning genom skalningar, alternativa övningar och tydliga kriterier för när du ska öka eller minska belastning. Om du vill ha mer skräddarsydd hjälp kan du boka en digital konsultation där vi går igenom din historik, mål och tillgänglig utrustning för att finjustera upplägget.</p>
<p>Som exempel kan <a href="${LINKS.lopare}">Styrketräning för löpare</a> kombineras med <a href="${LINKS.dag3}">3-dagarsprogrammet</a> eller <a href="${LINKS.dag4}">4-dagarsprogrammet</a> beroende på veckoschema. För akillestendinopati passar <a href="${LINKS.achilles}">Fot- & achillesprogrammet</a> där progressionen är tydligt doserad. Guiden <a href="${LINKS.smarta}">Träna med smärta</a> hjälper dig bedöma dag-till-dag-variationer.</p>
        `,
      },
    ],
  },
  {
    slug: "foretag-betalning-och-leverans",
    title: "Företag, betalning & leverans",
    items: [
      {
        question: "Hur bokar vi ergonomiföreläsning?",
        answerHtml: `
<p>Ni skickar en förfrågan via vår kontaktsida med önskat datum, målgrupp, format (på plats eller digitalt) och specifika behov. Vi återkommer med förslag på upplägg, omfattning och offert. Våra ergonomiföreläsningar kombinerar teori med praktiska råd, övningar och enkla rutiner för att skapa hållbara arbetsvanor. Vi kan även skräddarsy workshops för specifika roller (t.ex. kontor, lager, vård) och följa upp med material för implementering.</p>
<p>Läs mer om innehållet och exempel på upplägg här: <a href="${LINKS.ergonomi}">Ergonomi för företag</a>. Om ni vill knyta an till medarbetarnas hemmaträning kan vi inkludera tips med <a href="${LINKS.prodBand}">gummiband</a> och <a href="${LINKS.prodKettlebells}">kettlebells</a>, eller länka till relevanta program på sajten.</p>
        `,
      },
      {
        question: "Hur fungerar betalning och leverans av digitala program?",
        answerHtml: `
<p>Ni betalar smidigt i kassan och får direkt åtkomst via nedladdningslänk som skickas till e-post. Filerna är optimerade för att fungera på mobil, surfplatta och dator. Vi rekommenderar att spara en lokal kopia och skapa en enkel träningsmapp för att hålla ordning. Om något strular med leveransen – kontrollera spamfiltret och kontakta oss så hjälper vi till.</p>
<p>Osäker på vilket upplägg som passar? Titta på <a href="${LINKS.dag3}">3-dagarsprogrammet</a> och <a href="${LINKS.dag4}">4-dagarsprogrammet</a>, eller mer specifika alternativ som <a href="${LINKS.kettlebell}">Kettlebellprogrammet</a> och <a href="${LINKS.hamstring}">Hamstringprogrammet</a>. Vid frågor om smärtnivåer, se <a href="${LINKS.smarta}">Träna med smärta</a>.</p>
        `,
      },
      {
        question: "Gäller ångerrätt på digitala produkter?",
        answerHtml: `
<p>För digitalt innehåll som levereras omedelbart efter köp gäller normalt ingen ångerrätt enligt gällande konsumentregler, eftersom filen inte går att "lämna tillbaka". Vi vill ändå att du ska bli nöjd – kontakta oss vid oklarheter så ser vi vad vi kan göra. Vårt mål är att du ska få ett program som matchar dina behov och att du förstår hur du ska använda det säkert och effektivt.</p>
<p>Om du tvekar mellan alternativ kan du börja med <a href="${LINKS.dag3}">3-dagarsprogrammet</a> för att komma igång, eller läsa igenom uppläggen för <a href="${LINKS.artros}">Artrosprogram knä/höft</a> och <a href="${LINKS.lopare}">Styrketräning för löpare</a>. Guiden <a href="${LINKS.smarta}">Träna med smärta</a> kan ge extra trygghet under starten.</p>
        `,
      },
    ],
  },
];
