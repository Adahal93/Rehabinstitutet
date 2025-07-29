// Blog data file - Lägg till nya artiklar här
// För att lägga till en ny artikel, kopiera strukturen nedan och fyll i dina data

// Importera blog-bilder
// Lägg till dina bilder här när du har lagt till dem i src/assets/images/blog/
import running from '../assets/images/blog/running.webp';
import mri from '../assets/images/blog/mri.webp';
import shoulder_joint_pain from '../assets/images/blog/shoulder_joint_pain.webp';
import knee_joint_pain from '../assets/images/blog/knee_joint_pain.webp';
import shoulder_pain from '../assets/images/blog/shoulder_pain.webp';
import achilles_tendon_pain from '../assets/images/blog/achilles_tendon.webp';
import kettlebell_training from '../assets/images/blog/kettlebell_training.webp';
import hamstringsmärta from '../assets/images/blog/hamstringsmärta.webp';
import artros_knä from '../assets/images/blog/artros_knä.webp';
import who_guidelines from '../assets/images/blog/who_guidelines.webp';
import stretching1 from '../assets/images/blog/stretching1.webp';

// Funktion för att beräkna lästid baserat på antal ord
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Genomsnittlig läshastighet
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

// Funktion för att extrahera text från HTML för ordräkning
const extractTextFromHTML = (html) => {
  // Enkel regex-baserad metod för att extrahera text från HTML
  return html
    .replace(/<[^>]*>/g, '') // Ta bort alla HTML-taggar
    .replace(/&nbsp;/g, ' ') // Ersätt &nbsp; med mellanslag
    .replace(/&amp;/g, '&') // Ersätt &amp; med &
    .replace(/&lt;/g, '<') // Ersätt &lt; med <
    .replace(/&gt;/g, '>') // Ersätt &gt; med >
    .replace(/&quot;/g, '"') // Ersätt &quot; med "
    .replace(/&#39;/g, "'") // Ersätt &#39; med '
    .trim(); // Ta bort extra whitespace
};

// Funktion för att automatiskt hantera nya artiklar
const processNewArticle = (article) => {
  // Hitta nästa ID
  const nextId = Math.max(...blogPosts.map(post => post.id)) + 1;
  
  // Ta bort latest från alla befintliga artiklar
  blogPosts.forEach(post => {
    post.latest = false;
  });
  
  // Sätt den nya artikeln som latest och ge den rätt ID
  const processedArticle = {
    ...article,
    id: nextId,
    latest: true,
    readTime: calculateReadingTime(extractTextFromHTML(article.content))
  };
  
  return processedArticle;
};

// Funktion för att bearbeta artiklar så att de får ID 1, 2, 3 ... i ordning
const processAllArticlesSequential = (posts) => {
  // NY-artiklar först, sedan övriga
  const newArticles = posts.filter(p => p.id === "NY");
  const oldArticles = posts.filter(p => p.id !== "NY");
  const all = [...newArticles, ...oldArticles];

  return all.map((post, i) => ({
    ...post,
    id: i + 1,
    latest: i === 0,
    readTime: calculateReadingTime(extractTextFromHTML(post.content))
  }));
};

export const blogPosts = processAllArticlesSequential([
    {
        id: "NY",
        title: "Löparskador – de vanligaste och hur du undviker dem",
        excerpt: "Löpning är enkelt och effektivt, men också förknippat med skador. I den här artikeln går vi igenom de vanligaste löparskadorna – och hur du förebygger dem med rätt träning, belastning och återhämtning.",
        category: "GUIDE",
        author: "Anton Zackrisson",
        authorTitle: "Leg. Fysioterapeut",
        date: "2025-07-28",
        image: "https://source.unsplash.com/800x600/?running,injury,rehabilitation",
        featured: true,
        latest: true,
        tags: ["löparskador", "skadeförebyggande", "löpning", "rehabilitering"],
        content: `
          <h1>Löparskador – de vanligaste och hur du undviker dem</h1>
      
          <p>Löpning är en av de mest lättillgängliga och populära träningsformerna. Den förbättrar konditionen, stärker hjärtat och ger mental återhämtning. Men med löpning följer också en ökad risk för belastningsskador – särskilt om träningen inte planeras och balanseras rätt. I den här guiden går vi igenom de vanligaste löparskadorna och ger dig konkreta tips på hur du förebygger dem med rätt träning och belastningshantering.</p>
      
          <h2>Varför får man löparskador?</h2>
          <p>Majoriteten av löparskador är inte akuta, utan beror på upprepad belastning över tid – så kallade överbelastningsskador. De uppstår när vävnaden utsätts för mer belastning än vad den är redo för, utan tillräcklig återhämtning eller anpassning.</p>
      
          <p>Vanliga riskfaktorer:</p>
          <ul>
            <li>För snabb ökning av träningsvolym eller intensitet</li>
            <li>Otillräcklig styrka eller rörlighet</li>
            <li>Ensidig träning utan variation</li>
            <li>Brist på vila eller återhämtning</li>
            <li>Bristfälliga skor eller underlag</li>
          </ul>
      
          <h2>De vanligaste löparskadorna</h2>
      
          <h3>1. Löparknä (iliotibialbandssyndrom)</h3>
          <p>Lokaliserad smärta på utsidan av knäet, ofta vid längre löpning eller nedförsbacke. Beror ofta på irritation där senstråket glider över lårbenet.</p>
      
          <h3>2. Hälseneproblem (Achillestendinopati)</h3>
          <p>Smärta och stelhet i hälsenan, särskilt på morgonen eller efter aktivitet. Ofta relaterad till plötslig ökning av löpmängd eller löpning i backe. Läs mer i vårt <a href="/program/fot-och-achillesprogrammet">Fot- och achillesprogram</a>.</p>
      
          <h3>3. Benhinneinflammation (medialt tibiasyndrom)</h3>
          <p>Smärta på insidan av underbenet som förvärras vid löpning. Ofta kopplat till överbelastning eller felaktig löpteknik.</p>
      
          <h3>4. Plantarfasciit</h3>
          <p>Smärta under hälen eller hålfoten, särskilt vid första stegen på morgonen. Vanligt hos löpare med ökad mängd eller dåliga skor.</p>
      
          <h3>5. Hamstringsrelaterade besvär</h3>
          <p>Smärta i baksida lår, ofta vid acceleration eller snabba riktningsförändringar. Kan bero på nedsatt styrka, rörlighet eller koordination. Läs mer i vårt <a href="/program/hamstringprogrammet">Hamstringprogram</a>.</p>
      
          <h2>Så förebygger du löparskador</h2>
      
          <h3>1. Progressiv belastning</h3>
          <p>Öka inte mer än 10 % i total löpvolym per vecka. Variera intensitet, distans och underlag. Planera in återhämtningsveckor var 4:e till 5:e vecka.</p>
      
          <h3>2. Styrketräning – nyckeln till skadeprevention</h3>
          <p>Styrketräning minskar risken för överbelastning genom att stärka senor, muskler och skelett. Den förbättrar också löpekonomi och muskulär uthållighet.</p>
      
          <p>Fokusområden:</p>
          <ul>
            <li>Höft och säte (gluteus, hamstrings)</li>
            <li>Underben och fotled</li>
            <li>Kärnmuskulatur</li>
          </ul>
      
          <p>Prova vårt program <a href="/program/styrketraning-for-lopare">Styrketräning för löpare</a> som kombinerar evidensbaserade övningar med tydlig struktur och progression.</p>
      
          <h3>3. Variation och alternativ träning</h3>
          <p>Lägg in pass med cykling, simning eller styrka för att minska ensidig belastning. Det ger kroppen möjlighet att återhämta sig utan att du behöver stå still i din utveckling.</p>
      
          <h3>4. Vila och återhämtning</h3>
          <p>Minst en vilodag per vecka utan löpning. Sömn och bra kost är lika viktiga delar av träningen som själva passen. Smärta som inte går över med vila ska tas på allvar.</p>
      
          <h3>5. Teknik och utrustning</h3>
          <p>Löpteknik påverkar belastningen på kroppen. Att landa mjukt, ha en högre stegfrekvens (kadens) och undvika överdrivet kliv kan minska risken för skada. Investera också i bra löparskor som passar din fot och löpstil.</p>
      
          <h2>När du redan har fått en skada</h2>
          <p>Om du misstänker en överbelastningsskada: minska belastningen, identifiera orsaken och sätt in riktad rehabilitering. Tidig åtgärd ger snabbare återgång till löpning.</p>
      
          <p>Vi erbjuder <a href="/program/traningsprogram-3-dagar">3-dagars träningsprogram</a> som inkluderar styrka och rörlighet – anpassat för återgång till belastning. Du kan även använda vår <a href="/program/fot-och-achillesprogrammet">gratis löparmallsstart</a> för att strukturera träningen från grunden.</p>
      
          <h2>Vanliga missuppfattningar</h2>
          <ul>
            <li>“Lite smärta är alltid okej” – Smärta under och efter löpning bör inte ignoreras om den är ihållande eller ökar.</li>
            <li>“Stretch löser allt” – Stretching kan kännas skönt men förebygger inte skador i sig. Styrka och belastningshantering är viktigare.</li>
            <li>“Jag behöver bara springa mer för att bli bättre” – Mer är inte alltid bättre. Kvalitet, variation och återhämtning är avgörande.</li>
          </ul>
      
          <h2>Sammanfattning</h2>
          <p>Löparskador är vanliga, men ofta möjliga att förebygga med rätt strategi. Progressiv träning, styrka, vila och variation är grundstenarna. Genom att förstå kroppens signaler och skapa balans i träningen kan du springa smärtfritt och långsiktigt.</p>
      
          <p>Vill du ha en plan att följa? Prova <a href="/program/styrketraning-for-lopare">Styrketräning för löpare</a> eller våra <a href="/program/traningsprogram-4-dagar">flerdagarsprogram</a> som integrerar styrka och löpning på ett hållbart sätt.</p>
      
          <p><strong>Skriven av Anton Zackrisson, Leg. Fysioterapeut</strong></p>
        `
      },
    {
    id: 1,
    title: "Myter och fakta om stretching vid löpning",
    excerpt: "Behöver man verkligen stretcha före löpning? I den här artikeln reder vi ut vanliga myter och vad forskningen säger om stretching, uppvärmning och skaderisk.",
    category: "ARTIKEL",
    author: "Anton Zackrisson",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-28",
    image: stretching1,
    featured: false,
    latest: true,
    tags: ["stretching", "löpning", "myter", "uppvärmning"],
    content: `
          <h1>Myter och fakta om stretching vid löpning</h1>

    <p>Stretching före löpning har länge varit ett självklart inslag i mångas träningsrutin. Men behöver man verkligen stretcha innan man springer – eller är det bara en kvarleva från gamla träningsmyter? I den här artikeln går vi igenom vad forskningen faktiskt säger om stretching, uppvärmning och skaderisk för dig som löptränar.</p>

    <h2>Vad menar vi med stretching?</h2>
    <p>Stretching syftar oftast på statisk stretching, det vill säga att hålla en muskel i ett utsträckt läge under en viss tid (t.ex. 30 sekunder). Det kan också inkludera dynamisk stretching, där man rör sig kontrollerat genom ett rörelseomfång (t.ex. benpendlingar).</p>

    <h2>Vanliga myter om stretching</h2>

    <h3>“Stretching före träning minskar skaderisken”</h3>
    <p>Detta är en av de mest spridda träningsmyterna – men forskningen stödjer inte påståendet. Studier visar att statisk stretching före aktivitet inte minskar risken för skador och i vissa fall till och med kan försämra explosiv styrka och prestationsförmåga kortsiktigt.</p>

    <h3>“Stretching förhindrar träningsvärk”</h3>
    <p>Tyvärr – stretching har inte visat sig ha någon signifikant effekt på att minska träningsvärk (DOMS). Istället handlar träningsvärk mer om ovana rörelser och excentrisk belastning än om stelhet som kan “stretchas bort”.</p>

    <h3>“Man måste stretcha för att hålla sig rörlig”</h3>
    <p>Rörlighet påverkas av flera faktorer, bland annat styrka, nervsystemets tolerans och ledstruktur. Många uppnår lika bra eller bättre rörlighet genom funktionell styrketräning, till exempel genom att träna knäböj eller utfall med fullt rörelseomfång.</p>

    <h2>Vad säger forskningen?</h2>
    <p>En sammanställning från Cochrane och andra systematiska översikter pekar på att statisk stretching före löpning inte ger skyddande effekt mot skador. Däremot har dynamisk uppvärmning, med rörelser som efterliknar aktiviteten, visat positiva effekter på både prestation och skaderisk.</p>

    <p>Exempel på dynamiska uppvärmningsövningar:</p>
    <ul>
      <li>Benpendlingar framåt och åt sidan</li>
      <li>Gång med höga knän</li>
      <li>Utfallssteg med överkroppsvridning</li>
      <li>Skipping (korta, snabba löpsteg på stället)</li>
    </ul>

    <h2>Så bör du värma upp inför löpning</h2>
    <p>En bra uppvärmning inför löpning ska höja kroppstemperaturen, aktivera relevanta muskler och förbereda kroppen på rörelsemönstren som kommer. Här är ett enkelt upplägg:</p>
    <ol>
      <li>5–10 minuter rask gång eller lätt jogg</li>
      <li>2–3 dynamiska rörlighetsövningar (t.ex. benpendlingar)</li>
      <li>1–2 aktiveringsövningar (t.ex. höftlyft eller tåhävningar)</li>
    </ol>

    <p>Vill du ha ett färdigt upplägg med struktur för styrka och rörlighet kopplat till löpning kan vårt <a href="/program/styrketraning-for-lopare">Styrketräning för löpare</a> vara något för dig.</p>

    <h2>Finns det någon plats för stretching?</h2>
    <p>Absolut – men det handlar om rätt syfte och timing. Statisk stretching kan vara avslappnande efter ett pass eller användas specifikt vid nedsatt rörlighet. För den som till exempel har strama höftböjare eller inskränkt fotledsrörlighet kan stretching vara ett komplement – men bör inte ersätta funktionell träning.</p>

    <h2>Stretching som ritual</h2>
    <p>För många har stretching också en psykologisk funktion. Det kan signalera att träningen är slut, ge en känsla av kontroll eller lugn. Dessa effekter kan vara värdefulla i sig, men ska inte blandas ihop med påståenden om skaderisk och prestation.</p>

    <h2>Sammanfattning</h2>
    <p>Stretching är inte farligt – men det är inte heller den mirakelkur det en gång ansågs vara. Inför löpning är det bättre att fokusera på dynamisk uppvärmning och aktivering än på långvarig statisk stretching. Välj det som fyller en funktion för just dig, men basera dina val på kunskap snarare än myter.</p>

    <p>Vill du ha hjälp att komma igång med kompletterande styrka rekommenderar vi vårt <a href="/program/traningsprogram-3-dagar">Träningsprogram 3 dagar</a> eller <a href="/program/traningsprogram-4-dagar">Träningsprogram 4 dagar</a> beroende på din träningsvana.</p>

    <p><strong>Skriven av Anton Zackrisson, Leg. Fysioterapeut</strong></p>
  `
},
    {
    id: 2,
    title: "Hur du rehabiliterar hälseneinflammation med träning och stöd",
    excerpt: "Hälseneinflammation, eller tendinopati, är en vanlig åkomma hos aktiva personer. I den här artikeln går vi igenom hur du med rätt träning, tålamod och ibland inlägg kan återhämta dig och minska smärta.",
    category: "GUIDE",
    author: "Adam Carlén",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: achilles_tendon_pain,
    featured: true,
    latest: false,
    tags: ["hälsena","tendinopati","rehabilitering","träning","inlägg"],
    content: `
          <h1>Hur du rehabiliterar hälseneinflammation med träning och stöd</h1>
      
          <p>Smärta i hälsenan – ofta kallad <strong>hälseneinflammation</strong> eller mer korrekt <strong>Achillestendinopati</strong> – är ett vanligt problem bland löpare, idrottare och även hos mer stillasittande personer som ökat sin aktivitet. Men det är långt ifrån ett livslångt tillstånd. Rätt <strong>rehabilitering</strong> kan göra stor skillnad.</p>
      
          <h2>Vad är hälseneinflammation?</h2>
          <p>Det handlar inte om en klassisk inflammation, utan om en <strong>degenerativ process</strong> i senan där den utsatts för mer belastning än den tål. Vanliga symtom är:</p>
          <ul>
            <li>Smärta vid gång eller löpning</li>
            <li>Morgonstelhet i fotleden</li>
            <li>Ömhet vid tryck över senan</li>
            <li>Svullnad eller förtjockning av senan</li>
          </ul>
      
          <h2>Steg 1: Avlasta utan att vila helt</h2>
          <p>Det kan vara klokt att minska belastningen, men att helt vila är sällan en bra lösning. Fortsätt med lågintensiv aktivitet som promenader eller cykling om det inte ökar smärtan.</p>
      
          <h2>Steg 2: Påbörja strukturerad träning</h2>
          <p>Det mest evidensbaserade för att behandla <strong>tendinopati</strong> är <strong>styrketräning</strong> för senan. Vanligtvis används excentrisk eller tung långsam styrketräning. Här är ett exempel på en progressiv övning:</p>
      
          <h3>Excentriska tåhävningar</h3>
          <ul>
            <li>Stå med främre delen av foten på ett trappsteg</li>
            <li>Gå upp med hjälp av båda fötterna, sänk dig långsamt ned på det smärtande benet</li>
            <li>Utför 3x15 repetitioner, 1–2 gånger per dag</li>
          </ul>
      
          <p>All träning bör vara något obekväm men inte kraftigt smärtsam. Vår <a href="/traningsprogram/fot-och-achillesprogrammet">fot- och achillesprogram</a> guidar dig genom hela processen med videoanvisningar och tydlig struktur.</p>
      
          <h2>Steg 3: Anpassa belastningen gradvis</h2>
          <p>Efter 4–6 veckor kan du börja öka belastningen och inkludera mer funktionella övningar som:</p>
          <ul>
            <li>Enbens tåhävningar med vikt</li>
            <li>Hoppövningar (om smärtfri)</li>
            <li>Löpintervaller på mjukt underlag</li>
          </ul>
      
          <h2>Stödjande åtgärder – vad fungerar?</h2>
          <h3>Inlägg och ortopediska sulor</h3>
          <p>Personer med <strong>högt fotvalv</strong> eller <strong>uttalad pronation</strong> kan ibland ha nytta av formgjutna inlägg för att minska mekanisk stress på hälsenan. En tillfällig hälkudde som minskar senans dragspänning kan också ge lindring.</p>
      
          <p>Du hittar exempel på <a href="https://www.sportamore.com/se/product/rehband-achilles-pad-2-pack-black" target="_blank" rel="nofollow">stöd för hälsenan här</a>.</p>
      
          <h3>Tejpning</h3>
          <p>Kinesiotape eller sporttejp kan minska symtom tillfälligt, men har begränsad långtidseffekt. Använd som komplement, inte huvudstrategi.</p>
      
          <h2>När bör du söka hjälp?</h2>
          <p>Om du haft smärta i mer än 6 veckor trots egenvård, eller om du har svårt att belasta foten alls, rekommenderas bedömning av fysioterapeut. Vi erbjuder <a href="/kontakt">onlinekonsultationer</a> och kan hjälpa dig med individuell plan.</p>
      
          <h2>Vanliga misstag i rehabiliteringen</h2>
          <ul>
            <li><strong>För snabb stegring:</strong> Att börja springa för tidigt kan förvärra besvären.</li>
            <li><strong>Enbart passiva åtgärder:</strong> Vila, massage och stretch är inte tillräckligt i sig.</li>
            <li><strong>Inget tålamod:</strong> Senor svarar långsamt – ibland krävs 12 veckor eller mer för märkbar förbättring.</li>
          </ul>
      
          <h2>Sammanfattning</h2>
          <p>Hälseneinflammation, eller tendinopati, kräver aktiv och tålmodig <strong>rehabilitering</strong>. Med rätt <strong>träning</strong>, anpassad belastning och ibland hjälpmedel som <strong>inlägg</strong>, kan du återgå till en smärtfri vardag – och i många fall även till löpning eller idrott.</p>
      
          <p><em>Skriven av Adam Carlén, Leg. Fysioterapeut</em></p>
        `
    },
  {
    id: 3,
    title: "Hamstringsskador – varför de uppstår och hur du återhämtar dig",
    excerpt: "Hamstringsskador är vanliga, särskilt bland löpare och explosiva idrotter. I den här artikeln förklarar vi varför de uppstår, hur du rehabiliterar dem effektivt och vad du kan göra för att förebygga återfall.",
    category: "ARTIKEL",
    author: "Anton Zackrisson",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: hamstringsmärta,
    featured: false,
    latest: false,
    tags: ["hamstrings","muskelskada","rehabilitering","löpning"],
    content: `
    <h1>Hamstringsskador – varför de uppstår och hur du återhämtar dig</h1>
  
    <p>En stramning i baksida lår. Ett litet ryck. Eller en plötslig smärta som gör att du tvingas avbryta din löprunda eller sprint. <strong>Hamstringsskador</strong> är en av de vanligaste muskelskadorna inom idrott – särskilt bland löpare, fotbollsspelare och explosiva idrotter. Men varför uppstår de? Och hur kan du rehabilitera dig effektivt?</p>
  
    <h2>Vad är en hamstringsskada?</h2>
    <p>Hamstrings är en muskelgrupp på baksidan av låret som består av tre muskler: <em>biceps femoris, semitendinosus och semimembranosus</em>. Dessa muskler arbetar med att böja knäleden och extendera höften – alltså avgörande för löpning, hopp och acceleration.</p>
  
    <p>Skadan sker ofta vid explosiva moment, som en sprint eller en snabb riktningsförändring, där muskeln förlängs under belastning (excentriskt arbete). Vanliga symtom:</p>
    <ul>
      <li>Plötslig smärta i baksida lår</li>
      <li>Svullnad eller blåmärke</li>
      <li>Ömhet vid tryck eller stretch</li>
      <li>Nedsatt kraft eller rörelseomfång</li>
    </ul>
  
    <h2>Varför uppstår hamstringsskador?</h2>
    <p>Orsakerna är ofta multifaktoriella. Några vanliga riskfaktorer:</p>
    <ul>
      <li><strong>Dålig excentrisk styrka</strong> i hamstrings</li>
      <li><strong>Otillräcklig uppvärmning</strong> inför aktivitet</li>
      <li><strong>Muskelobalans</strong> mellan framsida och baksida lår</li>
      <li><strong>Otillräcklig återhämtning</strong> efter tidigare skada</li>
      <li><strong>Trötthet</strong> – särskilt i slutet av träning eller match</li>
    </ul>
  
    <h2>Akut hantering – vad gör du direkt efter skadan?</h2>
    <p>De första 24–72 timmarna efter en hamstringsskada är avgörande för att minska svullnad och smärta:</p>
    <ul>
      <li><strong>Avbryt aktiviteten</strong> direkt vid smärta</li>
      <li><strong>Kompression och högläge</strong> för att minska svullnad</li>
      <li><strong>Undvik aggressiv stretch</strong> och massage i det akuta skedet</li>
      <li><strong>Låt skadan vila – men inte för länge</strong></li>
    </ul>
  
    <p>Rörlighet och lätt aktivering bör påbörjas så snart smärtan tillåter – gärna under handledning av fysioterapeut.</p>
  
    <h2>Effektiv rehabilitering – steg för steg</h2>
    <p>För att minska risken för återfall (som är hög – upp till 30 %!) är det viktigt att rehabiliteringen är strukturerad och progressiv. Vi rekommenderar ett individuellt anpassat upplägg med fokus på:</p>
  
    <ol>
      <li><strong>Smärtfri rörlighetsträning</strong></li>
      <li><strong>Isolerad aktivering av hamstrings</strong> i kontrollerade positioner</li>
      <li><strong>Excentrisk träning</strong> (t.ex. nordic hamstring curls)</li>
      <li><strong>Funktionella övningar</strong> såsom höftlyft och step-ups</li>
      <li><strong>Stegrad löpning</strong> och idrottsspecifik träning</li>
    </ol>
  
    <p>Vårt <a href="https://www.rehabinstitutet.se/program/hamstringprogrammet" target="_blank">Hamstringprogram</a> är särskilt framtaget för att guida dig genom dessa faser – med video, struktur och evidensbaserade övningar.</p>
  
    <h2>När är jag redo att börja springa igen?</h2>
    <p>En vanlig fråga – men svaret är: <strong>det beror på funktion, inte bara tid</strong>. Du bör:</p>
    <ul>
      <li>Ha full rörlighet och styrka jämfört med det friska benet</li>
      <li>Inte ha smärta vid löpning, hopp eller hastighetsökning</li>
      <li>Ha genomfört stegrad löpträning utan reaktion</li>
    </ul>
  
    <p>Att börja springa för tidigt ökar risken för återfall – något vi ofta ser i kliniken. Var hellre noggrann än snabb.</p>
  
    <h2>Förebyggande träning – nyckeln till långsiktig hälsa</h2>
    <p>För dig som är löpare eller fotbollsspelare är förebyggande träning avgörande. Regelbunden excentrisk träning, såsom <strong>Nordic Hamstring</strong>, är starkt evidensbaserad för att minska risken för hamstringsskador.</p>
  
    <p>Vill du kombinera styrka och löpning? Då är vårt <a href="https://www.rehabinstitutet.se/program/styrketraning-for-lopare" target="_blank">program för styrketräning för löpare</a> ett bra val – både för prestation och skadeprevention.</p>
  
    <h2>Sammanfattning</h2>
    <p>Hamstringsskador är vanliga men går att rehabilitera effektivt med rätt strategi. Nyckeln ligger i gradvis återgång till aktivitet, stark excentrisk träning och att inte förhasta processen. Vill du ha en tydlig väg framåt? Då kan <a href="https://www.rehabinstitutet.se/program/hamstringprogrammet" target="_blank">Hamstringprogrammet</a> vara din bästa start.</p>
  
    <p><em>Skriven av Anton Zackrisson, Leg. Fysioterapeut</em></p>
    `
  },
  {
    id: 4,
    title: "Är kettlebellträning lika effektivt som traditionell styrketräning?",
    excerpt: "Kettlebellträning har blivit populärt – men kan det verkligen ersätta klassisk styrketräning med skivstång och maskiner? I den här artikeln jämför vi träningsformerna och går igenom för- och nackdelar.",
    category: "ARTIKEL",
    author: "Adam Carlén",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: kettlebell_training,
    featured: false,
    latest: false,
    tags: ["kettlebell","styrketräning","funktionell träning"],
    content: `
        <h1>Är kettlebellträning lika effektivt som traditionell styrketräning?</h1>
      
        <p>Kettlebells har blivit ett självklart inslag i många hemmagym och träningsanläggningar. Men frågan kvarstår: <strong>är kettlebellträning lika effektivt som traditionell styrketräning</strong> med hantlar, skivstänger och maskiner? Svaret beror på ditt mål – och hur du tränar.</p>
      
        <h2>Vad är kettlebellträning?</h2>
        <p>Kettlebellträning involverar ofta dynamiska rörelser som kombinerar styrka, explosivitet och uthållighet. Övningar som <em>kettlebell swings</em>, <em>clean & press</em> och <em>turkish get-up</em> är vanliga. Till skillnad från maskinträning tränar du nästan alltid flera muskelgrupper samtidigt och utmanar även balans och koordination.</p>
      
        <h2>Fördelar med kettlebellträning</h2>
        <ul>
          <li><strong>Funktionell träning:</strong> Rörelserna liknar vardagliga aktiviteter och förbättrar kroppens samarbete mellan muskler och leder</li>
          <li><strong>Tids- och platseffektivt:</strong> Ett redskap räcker långt och passen går att genomföra hemma</li>
          <li><strong>Förbättrad kondition och styrka:</strong> Kombinationen av tempo och belastning utmanar flera system samtidigt</li>
          <li><strong>Core-stabilitet:</strong> Nästan varje övning aktiverar bålmuskulaturen</li>
        </ul>
      
        <p>För dig som vill komma igång med ett strukturerat program, är vårt <a href="https://www.rehabinstitutet.se/program/kettlebellprogrammet" target="_blank">Kettlebellprogram</a> ett komplett upplägg för hela kroppen – anpassat för hemmet eller gymmet.</p>
      
        <h2>Vad säger forskningen?</h2>
        <p>Flera studier har undersökt effekten av kettlebellträning jämfört med traditionell styrketräning. Resultaten visar att:</p>
        <ul>
          <li>Kettlebellträning kan förbättra <strong>explosiv styrka</strong> (ex. vertikalhopp, svingkraft) lika bra som klassisk styrketräning</li>
          <li><strong>Konditionsförbättringar</strong> är ofta större vid kettlebellträning tack vare det högre tempot</li>
          <li><strong>Muskelhypertrofi (muskeltillväxt)</strong> är generellt större vid tung, traditionell styrketräning</li>
        </ul>
      
        <p>Slutsats: kettlebells är mycket effektiva – särskilt för funktionell styrka och allroundkondition. Vill du maximera muskeltillväxt kan traditionell styrketräning med högre belastning vara mer specifikt.</p>
      
        <h2>Traditionell styrketräning – styrkor och svagheter</h2>
        <p>Träning med skivstång och maskiner ger tydlig möjlighet till <strong>progressiv överbelastning</strong> – en nyckel för styrkeökning och muskeltillväxt. Det är också enklare att isolera specifika muskler.</p>
        <p>Nackdelen? Det kräver ofta gymmiljö, mer utrustning och tar mer tid i anspråk.</p>
      
        <h3>Vill du ha ett strukturerat upplägg med klassisk styrketräning?</h3>
        <p>Vi har två färdiga program som passar perfekt:</p>
        <ul>
          <li><a href="https://www.rehabinstitutet.se/program/traningsprogram-3-dagar" target="_blank">Träningsprogram 3 dagar</a> – perfekt för dig som vill börja styrketräna</li>
          <li><a href="https://www.rehabinstitutet.se/program/traningsprogram-4-dagar" target="_blank">Träningsprogram 4 dagar</a> – för dig som vill träna mer frekvent</li>
        </ul>
      
        <h2>Kombinera kettlebell och traditionell träning?</h2>
        <p>Det behöver inte vara ett antingen eller. Många idrottare och motionärer kombinerar kettlebellövningar som uppvärmning, core-träning eller finisher med klassisk styrketräning. Det kan också vara ett sätt att minska monotoni i träningen och öka motivationen.</p>
      
        <h2>Vem passar kettlebellträning för?</h2>
        <p>Kettlebellträning passar:</p>
        <ul>
          <li>Personer som vill träna hemma eller på liten yta</li>
          <li>De som prioriterar funktionell styrka, explosivitet och kondition</li>
          <li>Motionärer som tröttnat på traditionella gym</li>
          <li>Personer i rehabfas (med anpassning) – t.ex. axelrehab där kontroll och bålaktivering är viktig</li>
        </ul>
      
        <h2>Så kommer du igång</h2>
        <ol>
          <li>Välj en kettlebell som passar din nivå – hellre lite lättare i början</li>
          <li>Lär dig teknik – särskilt sving, press och marklyft</li>
          <li>Starta med 2–3 pass/vecka, 20–30 min per gång</li>
          <li>Följ ett färdigt program – <a href="https://www.rehabinstitutet.se/program/kettlebellprogrammet" target="_blank">vårt kettlebellprogram</a> är ett utmärkt alternativ</li>
        </ol>
      
        <h2>Sammanfattning</h2>
        <p>Kettlebellträning är ett utmärkt träningsverktyg – särskilt för dig som vill ha en funktionell, flexibel och tidseffektiv träning. Det kan inte ersätta all typ av traditionell styrketräning, men det kompletterar den mycket väl. För många är det också ett fullgott alternativ till gymträning – med mindre krav på utrustning och mer fokus på rörelse.</p>
      
        <p><em>Skriven av Adam Carlén, Leg. Fysioterapeut</em></p>
        `
  },
  {
    id: 5,
    title: "Hur mycket bör vi röra på oss enligt rekommendationer?",
    excerpt: "Hur mycket fysisk aktivitet behöver du egentligen för att må bra? Vi går igenom de svenska och internationella rörelseriktlinjerna och vad de innebär i praktiken – oavsett om du är nybörjare eller redan tränar regelbundet.",
    category: "GUIDE",
    author: "Anton Zackrisson",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: who_guidelines,
    featured: false,
    latest: false,
    tags: ["fysisk aktivitet","rörelseriktlinjer","hälsa","träning"],
    content: `
    <h1>Hur mycket bör vi röra på oss enligt rekommendationer?</h1>
  
    <p>Att fysisk aktivitet är bra för hälsan vet de flesta. Men exakt hur mycket behöver vi röra på oss för att få effekt? Och räcker det med att gå till jobbet eller ta trapporna? I den här artikeln går vi igenom de <strong>officiella rörelseriktlinjerna</strong> för vuxna enligt WHO och Folkhälsomyndigheten – och ger konkreta exempel på hur du kan uppnå dem i vardagen.</p>
  
    <h2>Varför finns det rekommendationer för fysisk aktivitet?</h2>
    <p>Rekommendationerna är baserade på vetenskaplig forskning om hur fysisk aktivitet påverkar <strong>hälsa, sjukdomsrisk, psykiskt välmående och livslängd</strong>. De fungerar som riktlinjer för både hälso- och sjukvården och individen. Målet är att hjälpa människor fatta informerade beslut om sin livsstil.</p>
  
    <h2>Grundläggande rörelseriktlinjer för vuxna (18–64 år)</h2>
    <p>De svenska och internationella rekommendationerna för fysisk aktivitet är i stort sett samstämmiga:</p>
  
    <ul>
      <li>Minst <strong>150–300 minuter måttlig intensitet</strong> per vecka <em>eller</em></li>
      <li><strong>75–150 minuter hög intensitet</strong> per vecka <em>eller</em></li>
      <li>En kombination av båda</li>
      <li><strong>Styrketräning minst 2 gånger per vecka</strong> – för större muskelgrupper</li>
      <li><strong>Minimera stillasittande</strong>. Regelbundna pauser från inaktivitet rekommenderas</li>
    </ul>
  
    <p>Exempel på <strong>måttlig intensitet</strong>: rask promenad, cykling i lugnt tempo, städa energiskt.<br/>
    Exempel på <strong>hög intensitet</strong>: löpning, spinning, HIIT-träning, sporter med puls.</p>
  
    <h2>Hur kan detta se ut i praktiken?</h2>
    <p>Det behöver inte vara komplicerat eller kräva gymkort. Här är några exempel på hur du kan få ihop din veckodos:</p>
  
    <h3>Exempel 1: Den vardagsaktive</h3>
    <ul>
      <li>30 min rask promenad 5 dagar i veckan</li>
      <li>2 pass hemmaträning med kroppsvikt (styrka)</li>
    </ul>
  
    <h3>Exempel 2: Den träningsvane</h3>
    <ul>
      <li>3 pass styrketräning (ex. <a href="https://www.rehabinstitutet.se/program/traningsprogram-3-dagar" target="_blank">Träningsprogram 3 dagar</a>)</li>
      <li>2 konditionspass (löpning, cykel eller HIIT)</li>
    </ul>
  
    <h3>Exempel 3: Den nyfikna nybörjaren</h3>
    <ul>
      <li>10 min promenad varje dag – lägg till tid varje vecka</li>
      <li>1 pass styrka i veckan, gärna med enkel utrustning hemma</li>
      <li>Gratis stöd? Ladda ner vår <a href="https://www.rehabinstitutet.se/gratis/lopmall" target="_blank">löparmallsstart</a></li>
    </ul>
  
    <h2>Vad säger forskningen?</h2>
    <p>Studier visar att även <strong>måttliga mängder rörelse</strong> har stor effekt på hälsa. Exempelvis kan 10 minuters rask promenad om dagen minska risken för hjärt-kärlsjukdomar. En gradvis ökning från inaktivitet ger större hälsoeffekt än att gå från "halvtränad" till elitnivå.</p>
  
    <h2>Fysisk aktivitet och psykisk hälsa</h2>
    <p>Utöver fysisk hälsa visar forskning att rörelse kan minska <strong>symtom på ångest och depression</strong>, förbättra sömn, kognition och livskvalitet. Ibland kan rörelse vara ett effektivt komplement till annan behandling.</p>
  
    <h2>Vanliga hinder – och hur du kan hantera dem</h2>
    <ul>
      <li><strong>Tidsbrist:</strong> Dela upp träningen – 3x10 minuter är lika bra som 1x30.</li>
      <li><strong>Ovana:</strong> Börja smått. All rörelse räknas.</li>
      <li><strong>Smärta/skador:</strong> Anpassa efter dagsform. Se vårt <a href="https://www.rehabinstitutet.se/gratis/trana-med-smarta" target="_blank">gratis dokument om att träna med smärta</a>.</li>
      <li><strong>Brist på motivation:</strong> Sätt konkreta mål och följ upp dina framsteg.</li>
    </ul>
  
    <h2>Är det farligt att röra sig för mycket?</h2>
    <p>För de allra flesta är svaret nej. Men det är viktigt att balansera <strong>träning och återhämtning</strong>. Lyssna på kroppens signaler. Vila är en del av processen – inte ett tecken på svaghet.</p>
  
    <h2>Vi hjälper dig komma igång</h2>
    <p>På Rehabinstitutet erbjuder vi färdiga träningsprogram som är enkla att följa, vetenskapligt baserade och skapade av fysioterapeuter. Vare sig du är nybörjare eller van att träna kan du hitta något som passar. Prova till exempel vårt <a href="https://www.rehabinstitutet.se/program/traningsprogram-4-dagar" target="_blank">4-dagars träningsprogram</a> om du vill ha en tydlig struktur att följa.</p>
  
    <h2>Sammanfattning</h2>
    <p>De officiella rekommendationerna för fysisk aktivitet syftar till att skapa en grund för god hälsa. Du behöver inte träna extremt – men <strong>någon form av rörelse varje dag</strong> gör stor skillnad. Börja där du är, och ta ett steg i taget.</p>
  
    <p><em>Skriven av Anton Zackrisson, Leg. Fysioterapeut</em></p>
    `
  },
  {
    id: 6,
    title: "MR-fynd hos friska personer – vad betyder det egentligen?",
    excerpt: "Många oroar sig för oväntade fynd vid MR-undersökningar, men vad betyder dessa egentligen om man inte har några symtom? Här reder vi ut begreppen och förklarar varför bilddiagnostik på friska personer kräver eftertanke.",
    category: "ARTIKEL",
    author: "Adam Carlén",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: mri,
    featured: false,
    latest: false,
    tags: ["MR-undersökning","diagnostik","bilddiagnostik","frisk person"],
    content: `
    <h1>MR-fynd hos friska personer – vad betyder det egentligen?</h1>
    
    <p>Att genomgå en magnetkameraundersökning (MR) kan kännas som ett sätt att "få alla svar". Många förväntar sig tydlighet, svart på vitt – antingen har man ett problem, eller så är man frisk. Men så enkelt är det inte. Forskning har gång på gång visat att många helt friska personer får oväntade fynd på sina MR-bilder – fynd som ibland skapar mer oro än klarhet.</p>
  
    <h2>MR-undersökning på symtomfria individer</h2>
    <p>Magnetresonanstomografi (MR) är ett fantastiskt verktyg inom modern diagnostik. Det kan visualisera mjukdelar, diskar, muskler, ligament och brosk med hög detaljrikedom. Men ju känsligare ett verktyg är, desto mer "ser" det – inklusive sådant som kanske inte har någon klinisk relevans.</p>
  
    <p>I studier där helt <strong>friska personer utan smärta eller funktionsnedsättning</strong> undersökts med MR, har man hittat en förvånansvärt hög förekomst av strukturella förändringar.</p>
  
    <h2>Exempel på vanliga fynd hos friska personer</h2>
    <ul>
      <li><strong>Ländrygg:</strong> Diskbråck hos upp till 30 % av friska personer</li>
      <li><strong>Nacke:</strong> Diskbuktningar hos över 50 % av individer över 40 år</li>
      <li><strong>Axel:</strong> Partiella rotatorcuffrupturer hos 20–25 % utan smärta</li>
      <li><strong>Knä:</strong> Meniskförändringar hos 40–60 % av vuxna utan knäbesvär</li>
    </ul>
  
    <p>Dessa fynd är alltså inte alltid tecken på sjukdom. De är ofta en del av det naturliga åldrandet och kroppens normala variation.</p>
  
    <h2>Vad är klinisk relevans?</h2>
    <p>Inom <strong>diagnostik</strong> skiljer man på strukturella förändringar och kliniskt relevanta förändringar. Ett diskbråck i ländryggen kan se dramatiskt ut på bild, men om individen är smärtfri och fungerar väl i vardagen, är fyndet kanske inte så viktigt.</p>
  
    <p>Det är här den kliniska undersökningen – det vi fysioterapeuter gör med händer, ögon och erfarenhet – blir ovärderlig. Vi sätter fynden i sitt sammanhang. Bilddiagnostik är ett verktyg, inte facit.</p>
  
    <h2>Risker med att överdiagnostisera</h2>
    <p>Att berätta för en frisk person att man hittat ett diskbråck, en meniskskada eller en rotatorcuffruptur kan skapa <strong>onödig oro, rädsla och felaktig självbild</strong>. Det kan också leda till överbehandling – exempelvis onödiga operationer eller långvarig sjukskrivning.</p>
  
    <p>Detta fenomen kallas ibland för "<strong>medicalization of normal</strong>" – när normala variationer i kroppen tolkas som sjukdom.</p>
  
    <h2>Så bör du tänka om du fått ett oväntat MR-fynd</h2>
    <ol>
      <li>Har du symtom? Om inte, finns oftast ingen anledning till oro.</li>
      <li>Rådgör med en legitimerad vårdgivare, gärna en <strong>fysioterapeut med erfarenhet av bilddiagnostik</strong>.</li>
      <li>Fokusera på funktion, inte bara på bilder. Hur mår du? Hur fungerar du i vardagen?</li>
      <li>Undvik att fastna i "skademodellen" om du är aktiv och symtomfri.</li>
    </ol>
  
    <h2>Fysioterapeutens roll i att tolka bilddiagnostik</h2>
    <p>Vi på <a href="https://www.rehabinstitutet.se" target="_blank">Rehabinstitutet.se</a> har lång erfarenhet av att hjälpa patienter tolka sina fynd och sätta dem i ett funktionellt sammanhang. Som legitimerade fysioterapeuter med specialistutbildning och kompetens inom muskuloskeletal ultraljudsdiagnostik förstår vi både <strong>anatomin och människan</strong> bakom bilden.</p>
  
    <p>Om du nyligen fått ett fynd från en MR-undersökning och är osäker på vad det betyder, kan du boka en <a href="https://www.rehabinstitutet.se/onlinekonsultation" target="_blank">onlinekonsultation</a> med oss för genomgång och planering.</p>
  
    <h2>Vill du jobba förebyggande?</h2>
    <p>Att träna smart och strukturerat minskar risken för smärta och funktionsnedsättning – oavsett vad bilder visar. Vi har flera program som hjälper dig bygga en stark kropp utifrån dina behov. Om du exempelvis vill stärka höft och knä, kan vårt <a href="https://www.rehabinstitutet.se/program/artrosprogrammet-knä-höft" target="_blank">artrosprogram för knä och höft</a> vara ett bra val – även för dig utan diagnos men med svaghet eller stelhet.</p>
  
    <h2>Sammanfattning</h2>
    <p>MR-fynd hos friska personer är vanliga. De speglar inte nödvändigtvis ett problem som behöver lösas, utan är ofta en del av kroppens naturliga variation. Diagnostik bör alltid kombineras med <strong>individens symtom, funktion och mål</strong>. Att tolka bilder utan att förstå helheten kan skapa mer skada än nytta.</p>
  
    <p><em>Skriven av Adam Carlén, Leg. Fysioterapeut</em></p>
    `
  },
  {
    id: 7,
    title: "Artros i knä och höft – vad hjälper enligt forskningen?",
    excerpt: "Vad säger forskningen om vad som verkligen hjälper vid artros i knä och höft? I denna artikel går vi igenom evidensläget kring träning, viktnedgång, kirurgi, kosttillskott och mer.",
    category: "ARTIKEL",
    author: "Anton Zackrisson",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: artros_knä,
    featured: true,
    latest: false,
    tags: ["artros","knäsmärta","höftsmärta","evidens"],
    content: `
      <h1>Artros i knä och höft – vad hjälper enligt forskningen?</h1>
  
      <p>Artros är den vanligaste ledsjukdomen i världen och drabbar ofta <strong>knä</strong> och <strong>höft</strong>. Symtom som smärta, stelhet och nedsatt funktion påverkar många människors livskvalitet. Men vad säger egentligen forskningen om vad som hjälper?</p>
  
      <h2>Vad är artros?</h2>
      <p>Artros är en degenerativ ledsjukdom där brosket successivt bryts ner. Det är en biologisk och mekanisk process där inflammation, ledvätskeobalans och förändringar i ben och muskler också spelar in.</p>
      <p>Vanliga symtom är:</p>
      <ul>
        <li>Smärta vid belastning (ex. gång, trappor)</li>
        <li>Morgonstelhet under 30 minuter</li>
        <li>Nedsatt rörlighet och styrka</li>
        <li>Knasande ljud eller känsla av instabilitet</li>
      </ul>
  
      <h2>Träning – den mest evidensbaserade behandlingen</h2>
      <p>Stark evidens visar att <strong>fysioterapi och strukturerad träning</strong> har positiv effekt på både smärta och funktion vid artros i knä och höft. Det handlar främst om styrketräning och funktionella övningar.</p>
  
      <h3>Hur fungerar det?</h3>
      <p>Träning förbättrar muskelfunktionen runt leden, vilket minskar belastningen på brosket och förbättrar stötdämpning. Det kan också påverka den inflammatoriska miljön i leden positivt.</p>
  
      <h3>Exempel på övningar:</h3>
      <ul>
        <li>Knäböj till stol</li>
        <li>Höftlyft (glute bridge)</li>
        <li>Sidogång med gummiband</li>
        <li>Step-up på låg höjd</li>
      </ul>
  
      <p>Vill du ha ett färdigt program med videoanvisningar och progression kan du testa vårt <a href="/traningsprogram/artrosprogrammet">artrosprogram för knä och höft</a>.</p>
  
      <h2>Viktnedgång – vid behov</h2>
      <p>Forskning visar att övervikt är en viktig riskfaktor för att utveckla artros och förvärrar symtomen. En viktnedgång på 5–10 % kan ge tydlig smärtlindring och förbättrad funktion, särskilt i knäleden.</p>
      <p>Det viktiga är inte att snabbt gå ner i vikt, utan att uppnå en hållbar livsstilsförändring där fysisk aktivitet och kostvanor går hand i hand.</p>
  
      <h2>Kirurgi – en sista utväg</h2>
      <p>Vid avancerad artros som inte svarar på träning och annan behandling kan ledprotes (ex. knä- eller höftplastik) bli aktuellt. Det är dock viktigt att först ha prövat icke-kirurgiska metoder i minst 3 månader.</p>
      <p>Rehabilitering före operation – så kallad <em>prehab</em> – kan förbättra återhämtningen efter operationen.</p>
  
      <h2>Kosttillskott – vad säger evidensen?</h2>
      <p>Glukosamin, kondroitin och kollagen är vanliga kosttillskott vid artros. Forskningen är blandad:</p>
      <ul>
        <li><strong>Glukosamin:</strong> Viss effekt på smärta i vissa studier, men inte stark evidens</li>
        <li><strong>Kollagen:</strong> Möjligtvis gynnsamt för broskmetabolism, men osäkert om det ger klinisk effekt</li>
        <li><strong>Omega-3:</strong> Antiinflammatoriskt, men liten evidens för effekt på artros specifikt</li>
      </ul>
      <p>Det går att testa kosttillskott under en period, men det bör ses som komplement – inte ersättning – till träning och livsstilsförändring.</p>
  
      <h2>Smärtlindring och stöd</h2>
      <p>Vid behov kan man använda:</p>
      <ul>
        <li>Paracetamol eller NSAID (ibuprofen, naproxen)</li>
        <li>Värme (ex. värmekudde eller varm dusch)</li>
        <li>Knäskydd eller käpp vid tyngre belastning</li>
      </ul>
      <p>Observera att långvarigt intag av NSAID kan ha biverkningar – diskutera med läkare vid behov.</p>
  
      <h2>Hur vet jag om det är artros?</h2>
      <p>Diagnosen baseras i första hand på symtom och klinisk undersökning. Röntgen används vid osäkerhet men korrelerar dåligt med symtomens svårighetsgrad. Det är alltså fullt möjligt att ha uttalad artros på röntgen utan smärta – och tvärtom.</p>
  
      <h2>Vanliga myter om artros</h2>
      <h3>"Man ska inte träna om det gör ont"</h3>
      <p>Träning kan ibland kännas obekväm, men lätt till måttlig smärta vid träning är normalt och inte farligt. Det viktiga är att du inte får ökade vilosmärtor efteråt.</p>
  
      <h3>"Det är för sent att börja träna när man har artros"</h3>
      <p>Det är aldrig för sent. Forskning visar att även personer över 75 år med måttlig till svår artros får nytta av strukturerad träning.</p>
  
      <h2>Hur kommer jag igång?</h2>
      <p>Om du är osäker på var du ska börja rekommenderar vi vårt <a href="/traningsprogram/artrosprogrammet">Artrosprogram för knä och höft</a>, utvecklat av fysioterapeuter. Det innehåller anpassningsbara nivåer, videoinstruktioner och progression över tid.</p>
  
      <p>Du kan också ladda ner vårt <a href="/gratis/trana-med-smarta">gratis dokument om att träna med smärta</a> för att få trygghet i hur du kan anpassa träning efter dagsform.</p>
  
      <h2>Sammanfattning</h2>
      <p><strong>Träning</strong> och <strong>viktnedgång</strong> är de två mest effektiva och evidensbaserade åtgärderna vid artros i knä och höft. Kirurgi kan vara ett alternativ senare, men bör föregås av minst 3 månaders aktiv behandling. Kosttillskott har viss men begränsad evidens, och smärtlindring kan behövas som stöd.</p>
      <p>Det viktigaste är att vara aktiv, ha tålamod och få stöd vid behov – oavsett var du befinner dig i din artrosresa.</p>
  
      <p><em>Skriven av Anton Zackrisson, Leg. Fysioterapeut</em></p>
    `
  },
  {
    id: 8,
    title: "Kan styrketräning förbättra prestationen hos löpare?",
    excerpt: "Många löpare undviker styrketräning i rädsla för att bli långsammare eller tyngre. Men vad säger forskningen om styrketräningens effekt på löpprestation och skaderisk?",
    category: "ARTIKEL",
    author: "Adam Carlén",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-27",
    image: running,
    featured: true,
    latest: false,
    tags: ["löpning","styrketräning","prestation","kondition"],
    content: `
    <h1>Kan styrketräning förbättra prestationen hos löpare?</h1>

    <p>Det är en vanlig missuppfattning bland löpare att styrketräning gör en tyngre, stelare och långsammare. Men faktum är att rätt typ av styrketräning kan ge stora fördelar för både <strong>prestation</strong> och skadeprevention inom <strong>löpning</strong>.</p>

    <h2>Vad säger forskningen?</h2>
    <p>En rad studier har visat att styrketräning kan förbättra <strong>löpekonomi</strong>, öka <strong>explosiv styrka</strong> och minska risken för överbelastningsskador. Exempelvis visade en systematisk översikt publicerad i <em>Sports Medicine</em> att styrketräning signifikant förbättrar löpares prestationsförmåga – särskilt i distanser från 3 km upp till maraton.</p>

    <h2>Fördelar med styrketräning för löpare</h2>
    <ul>
      <li><strong>Bättre löpekonomi:</strong> Genom att öka styrkan i säte, lår och vadmuskulatur krävs mindre energi per steg.</li>
      <li><strong>Minskad skaderisk:</strong> Många vanliga löparskador, såsom löparknä och benhinneinflammation, kan förebyggas med stabiliserande styrketräning.</li>
      <li><strong>Ökad maxstyrka:</strong> En starkare muskel arbetar relativt sett längre från sin maxkapacitet – vilket innebär mindre trötthet vid långdistanslöpning.</li>
      <li><strong>Förbättrad spänst och acceleration:</strong> Explosiv styrketräning har visat sig förbättra sprint och backlöpning.</li>
    </ul>

    <h2>Vanliga myter – och vad som stämmer</h2>
    <h3>"Styrketräning gör mig tung och långsam"</h3>
    <p>Det krävs ett betydande kaloriöverskott och specifik träning för att bygga volym. Med 2 pass i veckan och fokus på funktionell styrka är risken för oönskad viktuppgång minimal – samtidigt som prestationen förbättras.</p>

    <h3>"Jag blir stel av gymmet"</h3>
    <p>Rätt utförd styrketräning, gärna med full rörelsebana, kan faktiskt förbättra rörligheten. Studier visar att styrketräning kan ge liknande effekt som stretching när det gäller att bibehålla ledrörlighet.</p>

    <h2>Hur ska löpare styrketräna?</h2>
    <p>För löpare är det viktigt att fokusera på <strong>benstyrka</strong>, <strong>höftstabilitet</strong> och <strong>bålstyrka</strong>. Exempel på effektiva övningar:</p>
    <ul>
      <li>Knäböj</li>
      <li>Bulgarian split squat</li>
      <li>Höftlyft med en fot i marken</li>
      <li>Enbens tåhävningar</li>
      <li>Plankan och sidoplankan</li>
    </ul>

    <p>Vi har tagit fram ett <a href="/traningsprogram/styrketraning-for-lopare">styrketräningsprogram specifikt för löpare</a>, anpassat för att komplettera din löpträning utan att konkurrera med återhämtningen.</p>

    <h2>Hur ofta bör man träna?</h2>
    <p>2 styrkepass i veckan räcker för att uppnå effekt. Passa gärna på att lägga dem på vilodagar från löpningen eller efter kortare distanspass. Håll passen effektiva – 45 minuter räcker gott.</p>

    <h2>Kan man kombinera med konditionsträning?</h2>
    <p>Absolut. För optimal effekt bör styrketräning helst ske <em>efter</em> löppass – särskilt om målet är att förbättra konditionen. Att lägga styrkan på separata dagar fungerar ännu bättre om tiden tillåter.</p>

    <h2>Extratips: Undvik överträning</h2>
    <p>Styrketräning kan vara en fantastisk tillgång, men kom ihåg att det adderar belastning. Anpassa volym och intensitet efter hur mycket du springer. Vårt <a href="/gratis/lopmall-start">gratis löparprogram</a> hjälper dig att strukturera både kondition och styrka.</p>

    <h2>Produkter som kan underlätta</h2>
    <p>En <a href="https://www.proteinbolaget.se/sv/artiklar/kategori/traningsutrustning/styrketraning.html" target="_blank" rel="nofollow">justerbar kettlebell</a> eller miniband är perfekta redskap för hemmaträning och ett smidigt sätt att integrera styrka i vardagen.</p>

    <h2>Sammanfattning</h2>
    <p>Styrketräning är inte bara kompatibelt med löpning – det är ett kraftfullt verktyg för att springa längre, snabbare och med mindre risk för skada. Både prestation och hållbarhet förbättras när du vågar ta klivet in i gymmet – eller bara styrketränar hemma med rätt struktur.</p>

    <p><em>Skriven av Adam Carlén, Leg. Fysioterapeut</em></p>
    `
  },
  {
    id: 9,
    title: "Vanliga orsaker till smärta i rotatorcuffen och hur det kan behandlas",
    excerpt: "Rotatorcuffen är en vanlig källa till axelsmärta. I denna artikel går vi igenom vad rotatorcuffen är, vanliga orsaker till smärta och hur fysioterapi och träning kan hjälpa.",
    category: "ARTIKEL",
    author: "Anton Zackrisson",
    authorTitle: "Leg. Fysioterapeut",
    date: "2025-07-26",
    image: shoulder_pain,
    featured: true,
    latest: false,
    tags: ["axelsmärta","rotatorcuff","rehabilitering","fysioterapi"],
    content: `
<h1>Vanliga orsaker till smärta i rotatorcuffen och hur det kan behandlas</h1>

<p>Smärta i axeln är ett vanligt besvär, särskilt bland personer som är aktiva eller har arbeten som involverar upprepade rörelser över huvudet. En vanlig källa till axelsmärta är rotatorcuffen – en muskel- och sensamling som stabiliserar och styr axelleden. I denna artikel går vi igenom vanliga orsaker till smärta i rotatorcuffen, hur det diagnosticeras och vilka behandlingsalternativ som finns.</p>

<h2>Vad är rotatorcuffen?</h2>
<p>Rotatorcuffen består av fyra muskler: supraspinatus, infraspinatus, teres minor och subscapularis. Dessa muskler arbetar tillsammans för att hålla överarmsbenet stabilt i axelleden och möjliggöra rotation och lyft av armen. Skador på rotatorcuffen kan uppstå gradvis genom överanvändning eller akut vid till exempel fall eller tunga lyft.</p>

<h2>Vanliga orsaker till smärta i rotatorcuffen</h2>

<h3>1. Tendinopati (senförändringar)</h3>
<p>En av de vanligaste orsakerna till rotatorcuffsmärta är tendinopati, som innebär en överbelastning av senorna. Detta sker ofta vid upprepade eller långvariga rörelser, exempelvis vid sporter som simning eller tennis, eller vid arbete över axelhöjd. Tendinopati utvecklas ofta gradvis och kan ge molande värk, särskilt vid lyft och arbete med armen ovanför huvudet.</p>

<h3>2. Impingement (inklämningssyndrom)</h3>
<p>Impingement innebär att mjukdelar i axeln – ofta en sena från rotatorcuffen – kläms mellan överarmsbenet och ett benutskott i skulderbladet. Detta kan orsaka inflammation och smärta vid rörelser som att lyfta armen i sidled eller framåt.</p>

<h3>3. Partiella eller fullständiga senrupturer</h3>
<p>Vid större skador kan senan delvis eller helt brista. Det kan ske akut, ofta i samband med ett fall eller lyft, men kan också utvecklas gradvis vid långvarig tendinopati. Fullständig ruptur kan ge svårigheter att lyfta armen och en känsla av svaghet.</p>

<h3>4. Kalkaxel (kalcifierande tendinit)</h3>
<p>Vid kalkaxel bildas små kalkavlagringar i rotatorcuffens senor. Det kan orsaka intensiv smärta, särskilt i vissa rörelser. Orsaken är inte helt klarlagd, men det är vanligast hos personer mellan 30–60 år.</p>

<h2>Symtom att vara uppmärksam på</h2>
<ul>
  <li>Smärta vid lyft eller rotation av armen</li>
  <li>Svårighet att sova på den smärtande sidan</li>
  <li>Svaghet i axeln, särskilt vid arbete över huvudet</li>
  <li>Klickande eller knastrande ljud i axelleden</li>
</ul>

<h2>Hur ställs diagnosen?</h2>
<p>En fysioterapeut eller läkare gör en klinisk undersökning där rörelseförmåga, styrka och smärtmönster bedöms. I vissa fall kompletteras utredningen med <strong>ultraljud</strong> eller <strong>MR</strong> för att identifiera senförändringar eller rupturer. Det är dock viktigt att komma ihåg att vissa MR-fynd förekommer även hos smärtfria individer, vilket gör den kliniska undersökningen avgörande.</p>

<h2>Behandling av smärta i rotatorcuffen</h2>

<h3>1. Fysioterapi och individanpassad träning</h3>
<p>Det mest effektiva vid de flesta rotatorcuffbesvär är <strong>strukturerad rehabilitering</strong> som fokuserar på att förbättra styrka, koordination och rörlighet i axeln. Ett program bör vara gradvis stegrande och anpassat efter individens behov.</p>

<p>För dig som har återkommande axelbesvär kan vårt <a href="/program/axelprogrammet">Axelprogram</a> vara ett bra alternativ. Det är ett färdigt rehabprogram med videoinstruktioner och tydlig progression.</p>

<h3>2. Smärtlindring</h3>
<p>I den akuta fasen kan receptfria läkemedel som paracetamol eller NSAID användas för att minska smärta. Nedkylning och avlastning från provocerande aktiviteter kan också vara hjälpsamt.</p>

<h3>3. Ergonomiska förändringar</h3>
<p>Om besvären är arbetsrelaterade bör arbetsmoment som involverar upprepade lyft eller arbete ovanför axelhöjd ses över. Ergonomisk rådgivning och anpassning kan vara en viktig del av behandlingen.</p>

<h3>4. Injektion eller kirurgi (vid behov)</h3>
<p>Vid svåra eller långvariga besvär kan kortisoninjektion övervägas. I fall med större rupturer eller utebliven förbättring efter långvarig träning kan kirurgi vara aktuellt, men det är sällan förstahandsval.</p>

<h2>Kan jag träna med smärta?</h2>
<p>Ja – men med rätt upplägg. Måttlig smärta under träning är inte farligt, så länge den inte ökar över tid. För dig som är osäker på hur du ska komma igång har vi ett gratis dokument: <a href="/gratis/trana-med-smarta">Träna med smärta – riktlinjer</a>.</p>

<h2>Sammanfattning</h2>
<p>Smärta i rotatorcuffen är vanligt och kan ha flera orsaker, från överbelastning till bristningar. Med rätt diagnos, information och individanpassad träning har de flesta god prognos. Sök hjälp hos fysioterapeut för att komma igång med rätt behandling i tid.</p>

<p>Taggar: <strong>axelsmärta, rotatorcuff, rehabilitering, fysioterapi</strong></p>

<p><em>Skriven av Anton Zackrisson, Leg. Fysioterapeut</em></p>
`
  }
]);;;;

// Beräkna lästid för alla artiklar
export const blogPostsWithReadingTime = blogPosts;

// Funktion för att lägga till en ny artikel från din prompt
export const addNewArticleFromPrompt = (newArticle) => {
  // Kontrollera om artikeln har "NY" som ID
  if (newArticle.id === "NY") {
    const processedArticle = processNewArticle(newArticle);
    blogPosts.unshift(processedArticle); // Lägg till i början av arrayen
    return processedArticle;
  } else {
    // Om ID inte är "NY", lägg till som vanligt
    return addNewArticle(newArticle);
  }
};

// Exportera funktioner för att lägga till nya artiklar
export const addNewArticle = (article) => {
  const newId = Math.max(...blogPosts.map(post => post.id)) + 1;
  const newArticle = {
    ...article,
    id: newId,
    readTime: calculateReadingTime(extractTextFromHTML(article.content))
  };
  blogPosts.push(newArticle);
  return newArticle;
};

// Exportera funktion för att beräkna lästid för enskild text
export const getReadingTime = (htmlContent) => {
  const textContent = extractTextFromHTML(htmlContent);
  return calculateReadingTime(textContent);
};

// Funktion för att automatiskt fixa alla ID:n efter att du klistrat in en ny artikel
export const fixAllArticleIds = () => {
  // Hitta alla artiklar med "NY" som ID
  const newArticles = blogPosts.filter(p => p.id === "NY");
  const oldArticles = blogPosts.filter(p => p.id !== "NY");
  
  // Sätt NY-artiklar först, sedan övriga
  const allArticles = [...newArticles, ...oldArticles];
  
  // Uppdatera alla ID:n sekventiellt
  allArticles.forEach((article, index) => {
    article.id = index + 1;
    // Endast första artikeln (ID 1) ska ha latest: true
    article.latest = index === 0;
    article.readTime = calculateReadingTime(extractTextFromHTML(article.content));
  });
  
  // Uppdatera den ursprungliga blogPosts arrayen
  blogPosts.length = 0; // Rensa arrayen
  allArticles.forEach(article => blogPosts.push(article)); // Lägg till alla artiklar i rätt ordning
  
  console.log('✅ Alla artikel-ID:n har fixats automatiskt!');
  console.log('📝 Nyaste artikel (ID 1):', allArticles[0].title);
  console.log('📊 Totalt antal artiklar:', allArticles.length);
  
  return blogPosts;
};



// Funktion för att automatiskt fixa alla ID:n efter att du manuellt ändrat id: "NY" till id: 1
export const fixIdsAfterManualChange = () => {
  // Hitta alla artiklar som har samma ID (konflikt efter manuell ändring)
  const idCounts = {};
  blogPosts.forEach(post => {
    idCounts[post.id] = (idCounts[post.id] || 0) + 1;
  });
  
  // Om det finns dubletter av ID 1, fixa automatiskt
  if (idCounts[1] > 1) {
    console.log('🔧 Hittade dubletter av ID 1 - fixar automatiskt...');
    
    // Hitta alla artiklar med ID 1
    const articlesWithId1 = blogPosts.filter(p => p.id === 1);
    
    // Ta den första som den nya artikeln (den som var "NY")
    const newArticle = articlesWithId1[0];
    const otherArticles = blogPosts.filter(p => p.id !== 1);
    
    // Sätt den nya artikeln först, sedan alla andra
    const reorderedArticles = [newArticle, ...otherArticles];
    
    // Uppdatera alla ID:n sekventiellt
    reorderedArticles.forEach((article, index) => {
      article.id = index + 1;
      // Endast första artikeln (ID 1) ska ha latest: true
      article.latest = index === 0;
      article.readTime = calculateReadingTime(extractTextFromHTML(article.content));
    });
    
    // Uppdatera den ursprungliga blogPosts arrayen
    blogPosts.length = 0; // Rensa arrayen
    reorderedArticles.forEach(article => blogPosts.push(article)); // Lägg till alla artiklar i rätt ordning
    
    console.log('✅ ID-konflikter fixade automatiskt!');
    console.log('📝 Nyaste artikel (ID 1):', newArticle.title);
    console.log('📊 Totalt antal artiklar:', reorderedArticles.length);
    
    return blogPosts;
  }
  
  // Om inga konflikter, kör normal fixAllArticleIds
  return fixAllArticleIds();
};

// Exportera processNewArticle för manuell användning
export { processNewArticle }; 