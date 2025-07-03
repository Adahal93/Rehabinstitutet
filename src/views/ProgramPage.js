import React, { useEffect, useState } from 'react';
import './ProgramPage.css';
import { CheckCircle, Check, X, ChevronDown, Download } from 'lucide-react';
import styrketraningForLopare from '../assets/images/styrketräning_för_löpare.png';
import hamstringprogrammet from '../assets/images/hamstringprogrammet.png';
import artrosprogramKna from '../assets/images/artrosprogram_knä.png';
import traningsprogram3ggr from '../assets/images/träningsprogram_3ggr_v.png';
import fotachillesProgram from '../assets/images/fotachilles-program.png';

const products = [
  {
    title: 'Styrketräning för löpare',
    img: styrketraningForLopare,
    desc: 'Ett 12-veckors program med styrkeövningar för att förbättra löpekonomi, maxhastighet, styrka och minska skaderisken.',
    features: [
      'Fokus på skadeprevention och löpekonomi',
      'Teoretiskt ramverk ingår'
    ],
    price: '399 kr',
  },
  {
    title: 'Hamstringprogrammet',
    img: hamstringprogrammet,
    desc: 'Specifikt utformat för att bli av med hamstringtendinopatier (smärta från senan) och förebygga skador i baksida lår – 12 veckors progressivt schema.',
    features: ['Rehab och prehab kombinerat'],
    price: '449 kr',
  },
  {
    title: 'Artrosprogrammet (knä och höft)',
    img: artrosprogramKna,
    desc: 'Beprövat 8-veckorsprogram utvecklat för att minska smärta och öka rörlighet vid artros i knä och höft.',
    features: ['Godkänt av fysioterapeuter'],
    price: '499 kr',
  },
  {
    title: 'Träningsprogram 3 gånger i veckan',
    img: traningsprogram3ggr,
    desc: 'Optimalt upplägg för dig som vill träna tre gånger i veckan med balans mellan styrka, kondition och rörlighet.',
    features: ['Perfekt för upptagna scheman'],
    price: '399 kr',
  },
  {
    title: 'Träningsprogram 4 gånger i veckan',
    img: traningsprogram3ggr,
    desc: 'Fyra välplanerade pass per vecka för dig som vill ta nästa steg – variation av styrka, core och kondition.',
    features: ['Både hemma & gymvänligt'],
    price: '449 kr',
  },
  {
    title: 'Fot- och Achillesprogrammet',
    img: fotachillesProgram,
    desc: 'Ett 6-veckorsprogram för att stärka fot och hälsena, förbättra balans och minska risken för överbelastningsskador.',
    features: ['Stegrande övningar med video'],
    price: '449 kr',
  },
];

const faqList = [
  {
    q: 'Hur får jag tillgång till mitt program?',
    a: 'Du får direkt tillgång till ditt program digitalt efter köp via e-post och på din personliga sida.'
  },
  {
    q: 'Kan jag återanvända programmet flera gånger?',
    a: 'Ja, du kan använda programmet hur många gånger du vill – det är ditt för alltid!'
  },
  {
    q: 'Kan jag få pengarna tillbaka?',
    a: 'Vi erbjuder 14 dagars öppet köp – kontakta oss så hjälper vi dig!'
  },
];

const featureTable = [
  ['Veckor', ['6','5','8','8','8','6']],
  ['Nivå', ['Alla','Alla','Alla','Nybörjare+','Erfaren','Alla']],
  ['Digital leverans', [true,true,true,true,true,true]],
  ['Videoinstruktioner', [true,true,true,false,false,true]],
  ['Personlig support', [false,false,true,false,false,true]],
];

const freeDocuments = [
  {
    title: 'Starta löpning',
    description: 'En guide för dig som vill börja löpa på ett säkert och lugnt sätt.',
    filename: 'starta-lopning.pdf',
    icon: '🏃‍♂️'
  },
  {
    title: 'Träna med smärta',
    description: 'Riktlinjer för dig som upplever smärta när du tränar.',
    filename: 'trana-med-smarta.pdf',
    icon: '💪'
  }
];

export default function ProgramPage() {
  const [faqOpen, setFaqOpen] = useState(Array(faqList.length).fill(false));

  useEffect(() => {
    // Fade-in animation
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.classList.add('visible');
      });
    }, 200);
  }, []);

  const toggleFaq = idx => {
    setFaqOpen(open => open.map((v, i) => i === idx ? !v : v));
  };

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="program-root bg-[#f8fafc] min-h-screen">
      <section className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        <div className="text-center max-w-3xl mx-auto fade-in" style={{'--stagger':'100ms'}}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold mb-5 tracking-tight">Färdiga Tränings- & Rehabiliteringsprogram</h1>
          <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">Köp ett komplett program och kom igång direkt – allt är digitalt och tillgängligt för dig på sekunder.</p>
        </div>
      </section>
      <section className="px-8 pb-24 pt-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-10 text-center tracking-tight fade-in" style={{'--stagger':'200ms'}}>Våra Program</h2>
          <div className="program-products-row">
            {products.slice(0,3).map((p, i) => (
              <div className="product-card fade-in fade-in-stagger border border-slate-200 bg-white rounded-2xl shadow-sm p-7 flex flex-col transition-all duration-300 cursor-pointer" tabIndex={0} style={{'--stagger':`${300+i*50}ms`}} key={p.title}>
                <div className="product-card-image">
                  <img src={p.img} alt={p.title} />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{p.desc}</p>
                <ul className="product-features-list">
                  {p.features && p.features.map((f, idx) => (
                    <li key={idx} className="product-feature-item">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold tracking-tight text-cyan-700">{p.price}</span>
                  <button className="green-buy-btn px-5 py-2 text-lg">Köp nu</button>
                </div>
              </div>
            ))}
          </div>
          <div className="program-products-row">
            {products.slice(3,6).map((p, i) => (
              <div className="product-card fade-in fade-in-stagger border border-slate-200 bg-white rounded-2xl shadow-sm p-7 flex flex-col transition-all duration-300 cursor-pointer" tabIndex={0} style={{'--stagger':`${450+i*50}ms`}} key={p.title}>
                <div className="product-card-image">
                  <img src={p.img} alt={p.title} />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{p.desc}</p>
                <ul className="product-features-list">
                  {p.features && p.features.map((f, idx) => (
                    <li key={idx} className="product-feature-item">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold tracking-tight text-cyan-700">{p.price}</span>
                  <button className="green-buy-btn px-5 py-2 text-lg">Köp nu</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-8 pb-32 fade-in" style={{'--stagger':'600ms'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-semibold text-center mb-10 tracking-tight">Jämför våra program</h2>
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="text-left p-4">Funktion</th>
                    {products.map(p => (
                      <th className="text-center p-4" key={p.title}>{p.title.split(' ')[0]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {featureTable.map(([feature, vals], i) => (
                    <tr key={feature}>
                      <td className="p-4 font-medium">{feature}</td>
                      {vals.map((val, j) => (
                        <td className="p-4 text-center" key={j}>
                          {typeof val === 'boolean' ? (
                            val ? <Check className="w-4 h-4 mx-auto text-cyan-600" /> : <X className="w-4 h-4 mx-auto text-slate-300" />
                          ) : val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gratisdokument sektion */}
      <section className="px-8 pb-20 pt-12 fade-in" style={{'--stagger':'650ms'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-semibold text-center mb-4 tracking-tight">Gratis Dokument</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Ladda ner våra gratis PDF:er nedan för informativa och praktiska tips om träning, smärta och hälsa.
            Alla dokument är utvecklade av våra legitimerade fysioterapeuter.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {freeDocuments.map((doc, i) => (
              <div key={doc.title} className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-2xl">{doc.icon}</span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{doc.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed text-center">{doc.description}</p>
                <button 
                  onClick={() => handleDownload(doc.filename)}
                  className="download-btn w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Ladda ner PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="px-8 pb-24 fade-in" style={{'--stagger':'700ms'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold text-center mb-10 tracking-tight">Vanliga Frågor</h2>
          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6" key={faq.q}>
                <button className="faq-toggle-btn w-full" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform" style={{transform: faqOpen[i] ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </button>
                <div className={`faq-content mt-3 text-slate-600 text-sm${faqOpen[i] ? ' visible' : ' hidden'}`} style={{maxHeight: faqOpen[i] ? 300 : 0, opacity: faqOpen[i] ? 1 : 0}}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 