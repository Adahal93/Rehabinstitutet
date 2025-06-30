import React from 'react';
import './AuraChatClone.css';

export default function AuraChatClone() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <section className="py-20 px-4 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in fade-in-1">
            <span className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full font-medium">Våra tjänster</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">fysioterapi</span> för dig
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Vi erbjuder professionella och moderna fysioterapitjänster både på klinik och online – alltid med individen i fokus.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-8" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '32px' }}>
            {/* Service 1: Onlinebesök */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-2" style={{ minWidth: '280px', maxWidth: '320px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Onlinebesök</h3>
              <p className="text-gray-500 mb-6 flex-grow">Få professionell rådgivning och bedömning via videosamtal – enkelt, tryggt och smidigt hemifrån.</p>
              <div className="flex items-center text-indigo-600 font-medium hover:underline cursor-pointer group">
                <span>Boka nu</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 2: Ergonomiföreläsning */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-3" style={{ minWidth: '280px', maxWidth: '320px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ergonomiföreläsning</h3>
              <p className="text-gray-500 mb-6 flex-grow">Inspirerande föreläsningar om ergonomi och hälsa på arbetsplatsen – för en starkare och friskare arbetsdag.</p>
              <div className="flex items-center text-indigo-600 font-medium hover:underline cursor-pointer group">
                <span>Läs mer</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 3: Online Coaching/Rehab */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-4" style={{ minWidth: '280px', maxWidth: '320px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Coaching/Rehab</h3>
              <p className="text-gray-500 mb-6 flex-grow">Personlig coaching och rehabilitering online – vi följer dig genom hela din återhämtning och träning.</p>
              <div className="flex items-center text-indigo-600 font-medium hover:underline cursor-pointer group">
                <span>Boka samtal</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
            
            {/* Service 4: Tränings- och rehabiliteringsprogram */}
            <div className="service-hover bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm fade-in fade-in-5" style={{ minWidth: '280px', maxWidth: '320px', flex: '0 0 auto' }}>
              <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tränings- & rehabiliteringsprogram</h3>
              <p className="text-gray-500 mb-6 flex-grow">Skräddarsydda tränings- och rehabprogram anpassade efter dina behov, mål och förutsättningar.</p>
              <div className="flex items-center text-indigo-600 font-medium hover:underline cursor-pointer group">
                <span>Se exempel</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center fade-in fade-in-6">
            <a href="#" className="inline-block px-8 py-4 text-white bg-gradient-to-r from-indigo-500 to-sky-400 rounded-lg font-medium hover:opacity-90 transition shadow-lg">
              Boka din kostnadsfria konsultation
            </a>
            <p className="mt-4 text-gray-500">Upptäck vilka tjänster som passar dig och din hälsa bäst</p>
          </div>
        </section>
      </div>
    );
  }