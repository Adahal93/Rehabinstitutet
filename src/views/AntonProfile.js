import React from 'react';
import './OmOssPage.css';
import antonImg from '../assets/images/anton_profil.png';

function AntonProfile() {
  return (
    <div className="omoss-root">
      <div className="omoss-container">
        {/* Top section with image and intro */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          background: 'linear-gradient(120deg, #f0f5e8 60%, #fafaf9 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 32px rgba(124,169,102,0.10)',
          padding: '36px 32px',
          marginBottom: 40,
          gap: 40,
          maxWidth: 900,
          margin: '0 auto 40px auto',
        }}>
          <img
            src={antonImg}
            alt="Anton Zackrisson"
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center',
              boxShadow: '0 4px 16px rgba(124,169,102,0.15)',
              border: '4px solid #fff',
              background: '#e5e7eb',
              flexShrink: 0
            }}
          />
          <div style={{flex: 1, minWidth: 0}}>
            <h1 className="omoss-title" style={{marginBottom: 8, textAlign: 'left'}}>ANTON ZACKRISSON</h1>
            <h2 style={{fontSize: '1.2rem', fontWeight: 500, color: '#7ca966', marginBottom: 18, textAlign: 'left', letterSpacing: '1px'}}>LEG. FYSIOTERAPEUT</h2>
            <p style={{marginBottom: 0, lineHeight: 1.7, textAlign: 'left', color: '#181818'}}>
              Anton är legitimerad fysioterapeut utbildad på Karolinska Institutet i Stockholm. Han har ett stort och brinnande intresse för träning och diagnostik. Parallellt med sitt arbete på Rehabinstitutet och Stockholms Rehabklinik City är Anton i slutskedet av att färdigställa sin masterexamen och specialistutbildning.
            </p>
          </div>
        </div>

        {/* Main content below */}
        <div className="omoss-card no-hover" style={{maxWidth: 800, margin: '0 auto'}}>
          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 0, color: '#181818'}}>FYSIOTERAPEUTISKT ARBETSSÄTT</h3>
          <p style={{marginBottom: 32, lineHeight: 1.7, textAlign: 'left'}}>
            Anton arbetar med ultraljudsdiagnostik och individuellt anpassad rehabilitering anknutet till led- och muskelrelaterade besvär. Anton har även en fördjupad kunskap inom mer komplex smärtproblematik och smärtrehabilitering.​
          </p>

          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 32, color: '#181818'}}>UTBILDNING OCH BAKGRUND</h3>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24, color: '#374151'}}>UTBILDNING​ OCH KUNSKAP</h4>
          <ul style={{marginBottom: 24, paddingLeft: 20, lineHeight: 1.6}}>
            <li>Idrottsskador & idrottsrehabilitering.</li>
            <li>Rehabilitering av långvarig smärtproblematik</li>
            <li>OMT Steg 1</li>
            <li>McKenzie/MDT.</li>
            <li>Flertalet kurser inom träning/fysiologi och behandling av led- och muskelrelaterade besvär</li>
            <li>Flertalet kurser inom muskuloskeletal ultraljudsdiagnostik</li>
          </ul>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24, color: '#374151'}}>ERFARENHET OCH BAKGRUND</h4>
          <ul style={{marginBottom: 32, paddingLeft: 20, lineHeight: 1.6}}>
            <li>Kandidat fysioterapeut på Karolinska institutet 2021</li>
            <li>Arbetat inom primärvården sedan 2021</li>
            <li>Pågående masterexamen på Umeå universitet</li>
            <li>Pågående specialistexamen i fysisk aktivitet och Idrottsmedicin</li>
            <li>Utbildad i muskuloskeletal ultraljudsdiagnostik genom Karolinska Institutet</li>
          </ul>

          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 32, color: '#181818'}}>Kontakt</h3>
          <p style={{marginBottom: 16, lineHeight: 1.7, textAlign: 'left'}}>
            Om du har några frågor till Anton kan du kontakta honom eller kliniken direkt.
          </p>
          <p style={{marginBottom: 8, lineHeight: 1.7, textAlign: 'left'}}>
            <strong>Email:</strong> anton@rehabinstitutet.se
          </p>
          <p style={{marginBottom: 24, lineHeight: 1.7, textAlign: 'left'}}>
            <strong>Telefon:</strong> 123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default AntonProfile; 