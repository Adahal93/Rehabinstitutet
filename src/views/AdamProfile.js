import React from 'react';
import './OmOssPage.css';
import adamImg from '../assets/images/adam_profil.png';

function AdamProfile() {
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
          <div style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(124,169,102,0.15)',
            border: '4px solid #fff',
            background: '#e5e7eb',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={adamImg}
              alt="Adam Carlén"
              style={{
                width: 220,
                height: 220,
                objectFit: 'cover',
                objectPosition: 'center 0%',
                borderRadius: '50%',
              }}
            />
          </div>
          <div style={{flex: 1, minWidth: 0}}>
            <h1 className="omoss-title" style={{marginBottom: 8, textAlign: 'left'}}>ADAM CARLÉN</h1>
            <h2 style={{fontSize: '1.2rem', fontWeight: 500, color: '#7ca966', marginBottom: 18, textAlign: 'left', letterSpacing: '1px'}}>LEG. FYSIOTERAPEUT</h2>
            <p style={{marginBottom: 0, lineHeight: 1.7, textAlign: 'left', color: '#181818'}}>
              Adam är legitimerad fysioterapeut med en mastersexamen riktad mot diagnostik och idrottsmedicin. Adam tog sin grundexamen på Karolinska Institutet i Stockholm och påbörjade direkt sina studier för en mastersexamen. Mastersexamen studerades under 4 års tid på sidan av sitt kliniska arbete. Han har ett stort och brinnande intresse för sitt yrke, särskilt diagnostik och rehab. Parallellt med sitt arbete på Rehabinstitutet och SATS Spårvagnshallarna har Adam i slutskedet av att färdigställa sin specialistutbildning med inriktning på fysisk aktivitet och idrottsmedicin.
            </p>
          </div>
        </div>

        {/* Main content below */}
        <div className="omoss-card no-hover" style={{maxWidth: 800, margin: '0 auto'}}>
          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 0, color: '#181818'}}>FYSIOTERAPEUTISKT ARBETSSÄTT</h3>
          <p style={{marginBottom: 24, lineHeight: 1.7, textAlign: 'left'}}>
            I sitt arbete med patienter använder sig Adam av en kombination av olika tekniker och åtgärder så som träning, utbildning och manuella tekniker noga applicerade utifrån patientens individuella problem och aktuell diagnos. Han är även utbildad inom muskuloskeletal ultraljudsdiagnostik och använder verktyget flitigt i sin bedömning.
          </p>
          <p style={{marginBottom: 32, lineHeight: 1.7, textAlign: 'left', fontStyle: 'italic'}}>
            Adam har också fördjupad kunskap om besvär från senor och rehabilitering efter hjärnskakning
          </p>

          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 32, color: '#181818'}}>UTBILDNING OCH BAKGRUND</h3>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24, color: '#374151'}}>Utbildning och Kunskap</h4>
          <ul style={{marginBottom: 24, paddingLeft: 20, lineHeight: 1.6}}>
            <li>Idrottsskador & idrottsrehabilitering</li>
            <li>Löparskador</li>
            <li>Hjärnskakning- och yrselrehabilitering</li>
            <li>OMT Steg 1</li>
            <li>McKenzie/MDT</li>
            <li>Flertalet kurser inom träning/fysiologi och behandling av led- och muskelrelaterade besvär</li>
            <li>Flertalet kurser inom muskuloskeletal ultraljudsdiagnostik</li>
          </ul>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24, color: '#374151'}}>Erfarenhet och Bakgrund</h4>
          <ul style={{marginBottom: 32, paddingLeft: 20, lineHeight: 1.6}}>
            <li>Kandidat fysioterapeut på Karolinska institutet 2021</li>
            <li>Arbetat inom primärvården sedan 2021</li>
            <li>Pågående masterexamen på Umeå universitet 2021-2025</li>
            <li>Pågående specialistexamen i fysisk aktivitet och Idrottsmedicin</li>
            <li>Utbildad i muskuloskeletal ultraljudsdiagnostik genom Karolinska Institutet</li>
          </ul>

          <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: 16, marginTop: 32, color: '#181818'}}>Kontakt</h3>
          <p style={{marginBottom: 16, lineHeight: 1.7, textAlign: 'left'}}>
            Om du har några frågor till Adam kan du kontakta honom eller kliniken direkt.
          </p>
          <p style={{marginBottom: 8, lineHeight: 1.7, textAlign: 'left'}}>
            <strong>Email:</strong> adam@rehabinstitutet.se
          </p>
          <p style={{marginBottom: 24, lineHeight: 1.7, textAlign: 'left'}}>
            <strong>Telefon:</strong> 123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdamProfile; 