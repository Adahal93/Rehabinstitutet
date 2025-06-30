import React from 'react';
import './AuraChatClone.css';

export default function AuraChatClone() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <section className="py-20 px-4 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in fade-in-1">
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
              Modern <span style={{ background: 'linear-gradient(to right, #059669, #047857)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>fysioterapi</span> för dig
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Vi erbjuder professionella och moderna fysioterapitjänster både på klinik och online – alltid med individen eller företaget i fokus.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="services-parent flex flex-row flex-wrap justify-center items-start gap-8" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '32px' }}>
            {/* Service 1: Onlinebesök */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-2" style={{ minWidth: '350px', maxWidth: '400px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Onlinebesök</h3>
              <p className="text-gray-500 mb-6 flex-grow">Få professionell rådgivning och individanpassade rekommendationer oavsett var du befinner dig. Våra onlinekonsultationer är tillgängliga för alla – från kontorsarbetare med stel nacke till idrottare och motionärer med skador eller belastningsproblem. Genom videosamtal får du snabb hjälp av erfarna experter som kan ge vägledning kring smärta, rehabilitering, träning och förebyggande åtgärder. Boka en tid och ta första steget mot en smärtfri och starkare vardag!</p>
              <div className="flex items-center text-green-700 font-medium hover:underline cursor-pointer group">
                <span>Boka nu</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 2: Ergonomiföreläsning */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-3" style={{ minWidth: '350px', maxWidth: '400px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ergonomiföreläsning</h3>
              <p className="text-gray-500 mb-6 flex-grow">Vi erbjuder professionella ergonomikonsultationer för både företag och privatpersoner som vill skapa en hälsosam arbetsmiljö. Våra fysioterapeuter gör en noggrann genomgång av din arbetsplats och justerar den enligt ergonomiska riktlinjer. Vi erbjuder också en inspirerande ergonomiföreläsning som inkluderar råd baserade på aktuell forskning om hållning, träning, pauser i arbetet och deras koppling till vanliga besvär i kontorsmiljöer som ryggont, nackproblem, tennisarmbåge, musarm, axelbesvär och muskelspänningar.</p>
              <p className="text-gray-500 mb-6 flex-grow">Konsultationerna sker i Stockholmsområdet och leds av våra erfarna fysioterapeuter. Kontakta oss idag för att förbättra din arbetsmiljö, minska risken för skador och öka din produktivitet!</p>
              <div className="flex items-center text-green-700 font-medium hover:underline cursor-pointer group">
                <span>Läs mer</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 3: Hemrehab */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-4" style={{ minWidth: '350px', maxWidth: '400px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hemrehab</h3>
              <p className="text-gray-500 mb-6 flex-grow">Har du svårt att ta dig till rehabilitering eller föredrar att inte lämna hemmet? Vi erbjuder privat hemrehab för personer som behöver stöd i sin återhämtning, oavsett om du genomgått en operation, lider av långvariga besvär eller helt enkelt inte vill ta dig hemifrån. Våra erfarna fysioterapeuter kommer hem till dig och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.</p>
              <p className="text-gray-500 mb-6 flex-grow">Vi tar med den utrustning som behövs för att genomföra effektiv träning hemma och anpassar övningarna efter dina specifika behov.</p>
              <p className="text-gray-500 mb-6 flex-grow">Med vår hemrehab får du den individuella uppmärksamheten och det stöd du behöver för att återhämta dig på bästa sätt, utan att behöva lämna hemmet. Kontakta oss för att påbörja din rehabilitering hemma!</p>
              <div className="flex items-center text-green-700 font-medium hover:underline cursor-pointer group">
                <span>Läs mer om Hemrehab</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 4: Tränings- och rehabiliteringsprogram */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-5" style={{ minWidth: '350px', maxWidth: '400px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tränings- & rehabiliteringsprogram</h3>
              <p className="text-gray-500 mb-6 flex-grow">Om du söker träningsprogram eller rehabiliteringsprogram som är välutformade och baserade på aktuell forskning, har vi det du behöver. Våra program är skapade med ett teoretiskt ramverk som stöds av dagens senaste forskningsläge och är tillgängliga för onlineköp i PDF-format. Varje program kommer med text- och videoanvisningar för samtliga övningar, vilket gör det enkelt att följa och genomföra tränings- och rehabiliteringspass på egen hand. Utforska hela vårt utbud av professionellt utformade program i butiken och hitta det som passar just dig!</p>
              <div className="flex items-center text-green-700 font-medium hover:underline cursor-pointer group">
                <span>Se våra program</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center fade-in fade-in-6">
            <p className="mt-4 text-gray-500">Upptäck vilka tjänster som passar dig och din hälsa bäst</p>
          </div>
        </section>
      </div>
    );
  }