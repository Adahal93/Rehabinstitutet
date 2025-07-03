import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroSection from './components/IntroSection';
import './App.css';
import './views/OmOssPage.css';
import Header from './views/Header';
import TeamPage from './views/TeamPage';
import AdamProfile from './views/AdamProfile';
import AntonProfile from './views/AntonProfile';
import TjansterPage from './views/TjansterPage';
import ErgonomiPage from './views/ErgonomiPage';
import OnlineVisitPage from './views/OnlineVisitPage';
import HemrehabPage from './views/HemrehabPage';
import CodepenPriceTable from './views/CodepenPriceTable';
import ProgramPage from './views/ProgramPage';
import KompetensPage from './views/KompetensPage';
import ContactSection from './views/ContactSection';

// Om Oss page with provided design
function OmOssPage() {
  return (
    <div className="omoss-root">
      <div className="omoss-container">
        <h1 className="omoss-title">Om Rehabinstitutet</h1>
        <p className="omoss-intro">
          Vi är två legitimerade fysioterapeuter med en gemensam vision: att skapa den bästa möjliga upplevelsen för patienter och företag. Vårt mål är att göra rehabilitering enkel, tillgänglig och engagerande – utan att kompromissa med kvalitet.
        </p>
        <div className="omoss-grid">
          <div className="omoss-card omoss-card-vision">
            <h2>Vår Vision</h2>
            <p>
              Välkommen till Rehabinstitutet – din partner på vägen tillbaka till ett aktivt liv. Rehabinstitutet grundades år 2025 av Adam Carlén och Anton Zackrisson, två passionerade Fysioterapeuter med en gemensam vision: Att stödja och vägleda människor till att återfå möjligheten till ett hälsosamt och aktivt liv.
            </p>
            <p>
              Vi på Rehabinstitutet tror på att vara mer än bara en plats för rehabilitering. Vi strävar efter att vara en bro mellan rehabilitering och friskvård, där vårt fokus ligger på att inte bara behandla skador, utan att också förebygga dem och främja övergripande hälsa och välbefinnande.
            </p>
            <p>
              Med vårt dedikerade team av experter inom fysioterapi, idrottsmedicin och träning skräddarsyr vi varje patients behandling för att möta individuella behov och mål. Oavsett om det handlar om att återvända till elitidrott eller att återuppta dagliga aktiviteter, strävar vi efter att maximera våra klienters potential och optimera deras återhämtning.
            </p>
            <p>
              Välkommen till Rehabinstitutet – där vi gör det möjligt att återfå det liv du saknar och optimera din prestation
            </p>
            <button className="omoss-btn">Läs mer om vår filosofi</button>
          </div>
          <div className="omoss-card">
            <h3>Vårt Team</h3>
            <p>
              Två Fysioterapeuter med ett brinnande intresse för rehabilitering, träning och forskning. Vi stöttar dig hela vägen till ett friskare liv.
            </p>
            <Link to="/team" className="omoss-btn omoss-btn-small">Läs mer om oss</Link>
          </div>
          <div className="omoss-card">
            <h3>Våra Tjänster</h3>
            <p>
              Online-rehabilitering, professionellt utformade träningsprogram,företagshälsa, workshops och utbildningar – alltid anpassade efter dina och din organisations behov.
            </p>
            <Link to="/tjanster" className="omoss-btn omoss-btn-small">Läs mer om tjänster</Link>
          </div>
          <div className="omoss-card">
            <h3>Vårt Arbetssätt</h3>
            <p>
              Vi jobbar nära våra patienter och företagskunder med tydliga mål, uppföljning och evidensbaserade metoder. Alltid med individen i fokus.
            </p>
          </div>
          <div className="omoss-card">
            <h3>Våra Kunder</h3>
            <p>
              Vi samarbetar med privatpersoner, företag och organisationer som vill satsa på hållbar hälsa och förebyggande arbete.
            </p>
          </div>
          <div className="omoss-card">
            <h3>Vår Effekt</h3>
            <p>
              Tillsammans skapar vi långsiktiga resultat för både individer och arbetsplatser – med ökad livskvalitet, minskad sjukfrånvaro och mer energi i vardagen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    function scrollToContact() {
      if (window.location.hash === '#contact') {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    scrollToContact();
    window.addEventListener('hashchange', scrollToContact);
    return () => window.removeEventListener('hashchange', scrollToContact);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IntroSection />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/adam" element={<AdamProfile />} />
          <Route path="/team/anton" element={<AntonProfile />} />
          <Route path="/tjanster" element={<TjansterPage />} />
          <Route path="/ergonomi" element={<ErgonomiPage />} />
          <Route path="/onlinebesok" element={<OnlineVisitPage />} />
          <Route path="/hemrehab" element={<HemrehabPage />} />
          <Route path="/codepen" element={<CodepenPriceTable />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/kompetens" element={<KompetensPage />} />
        </Routes>
        <ContactSection id="contact" />
      </div>
    </Router>
  );
}

export default App;