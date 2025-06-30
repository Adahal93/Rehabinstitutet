import React from 'react';
import './OmOssPage.css';
import adamImg from '../assets/images/adam_profil.png';
import antonImg from '../assets/images/anton_profil.png';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'ADAM CARLÉN',
    img: adamImg,
    description: 'Leg. Fysioterapeut\nMsc\nGrundare\n\nPågående specialistutbildning i fysisk aktivitet och idrottsmedicin\n\nFördjupad kunskap om besvär från senor och rehabilitering efter hjärnskakning\n\nadam@rehabinstitutet.se',
    link: '/team/adam'
  },
  {
    name: 'ANTON ZACKRISSON',
    img: antonImg,
    description: 'Leg. Fysioterapeut\nMsc\nGrundare\n\nPågående specialistutbildning i fysisk aktivitet och idrottsmedicin\n\nFördjupad kunskap om besvär från senor samt komplex smärtproblematik och smärtrehabilitering\n\nanton@rehabinstitutet.se',
    link: '/team/anton'
  }
];

function TeamPage() {
  return (
    <div className="omoss-root">
      <div className="omoss-container">
        <h1 className="omoss-title">Teamet</h1>
        <p className="omoss-intro">Möt personerna bakom Rehabinstitutet – två engagerade fysioterapeuter med bred kompetens och ett gemensamt mål: att hjälpa dig till ett aktivt och hållbart liv.</p>
        <div className="team-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '100%', maxWidth: 700, margin: '0 auto'}}>
          {team.map(member => (
            <div className="omoss-card" key={member.name} style={{alignItems: 'center', textAlign: 'center'}}>
              {member.name === 'ADAM CARLÉN' ? (
                <div style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(124,169,102,0.10)',
                  background: '#e5e7eb',
                  marginBottom: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={member.img} alt={member.name} style={{width: 220, height: 220, objectFit: 'cover', objectPosition: 'center 40%', borderRadius: '50%'}} />
                </div>
              ) : (
                <img src={member.img} alt={member.name} style={{width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center', marginBottom: 18, boxShadow: '0 4px 16px rgba(124,169,102,0.10)'}} />
              )}
              <h2 style={{marginBottom: 8}}>{member.name}</h2>
              <p style={{marginBottom: 18, whiteSpace: 'pre-line'}}>{member.description}</p>
              <Link to={member.link} className="omoss-btn omoss-btn-small">Läs mer</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage; 