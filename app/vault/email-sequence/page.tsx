'use client';

import { Mail } from 'lucide-react';

export default function VaultEmailSequence() {
  const emails = [
    {
      number: 1,
      name: 'Welcome + Quiz Teaser',
      timing: 'Immediately',
      subject: 'One question: Who are you when nobody\'s watching?',
      purpose: 'Set the tone, introduce the framework'
    },
    {
      number: 2,
      name: 'The Quiz',
      timing: '+24 hours',
      subject: 'Quick 3-minute quiz (this might surprise you)',
      purpose: 'Drive engagement, qualify interest'
    },
    {
      number: 3,
      name: 'Reading Offer',
      timing: '+48 hours',
      subject: 'What your numbers say about what you\'re going through',
      purpose: 'Introduce numerology reading offer'
    },
    {
      number: 4,
      name: 'Proof + Social',
      timing: '+72 hours',
      subject: 'Real men, real work, real transformation',
      purpose: 'Social proof and testimonials'
    },
    {
      number: 5,
      name: 'Urgency (Soft)',
      timing: '2-3 days before launch',
      subject: 'The Vault opens in 48 hours',
      purpose: 'Create gentle urgency'
    },
    {
      number: 6,
      name: 'Launch Day',
      timing: 'Launch day morning',
      subject: 'The door is open',
      purpose: 'Direct offer to join'
    },
    {
      number: 7,
      name: 'Final Follow-Up',
      timing: '+3-4 days after launch',
      subject: 'Are you in or are you out?',
      purpose: 'Final ask, clean decision'
    }
  ];

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', lineHeight: '1.6', color: '#1a1a1a', background: '#fff' }}>
      {/* HERO */}
      <header style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '40px', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>
            Vault Launch Email Sequence
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            7 emails from quiz signup to conversion
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>The Sequence</h2>
          
          {emails.map((email) => (
            <div 
              key={email.number}
              style={{ 
                marginBottom: '30px', 
                padding: '25px', 
                background: '#f9f9f9', 
                borderRadius: '8px', 
                borderLeft: '4px solid #1a1a1a' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 5px 0' }}>
                    Email {email.number}: {email.name}
                  </h3>
                  <p style={{ margin: 0, color: '#999', fontSize: '14px' }}>
                    <Mail size={14} style={{ display: 'inline', marginRight: '5px' }} />
                    {email.timing}
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  <strong>Subject:</strong> {email.subject}
                </p>
              </div>
              
              <div>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  <strong>Purpose:</strong> {email.purpose}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>How It Works</h2>
          
          <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: 0 }}>1. Drive Traffic to Landing Page</h3>
            <p>TikTok, LinkedIn, DMs, ads → Vault landing page (call to get details)</p>
          </div>

          <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: 0 }}>2. Collect Email</h3>
            <p>Name + Email form on landing page triggers Email 1 immediately</p>
          </div>

          <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: 0 }}>3. Nurture with Quiz</h3>
            <p>Email 2 engages them with the 3-minute quiz (qualification + engagement)</p>
          </div>

          <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: 0 }}>4. Offer → Conversion → Launch</h3>
            <p>Emails 3-7 guide them from reading offer → Vault membership at launch</p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>Rules</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              Don't repeat the same CTA 3 times in a row
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              If they click a link, pause the sequence and resume if they don't convert
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              If they open but don't click, continue as normal
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              If they unsubscribe, respect it
            </li>
          </ul>
        </section>

        <section style={{ borderTop: '1px solid #f0f0f0', paddingTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '700' }}>View Full Sequence</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>Complete copy for all 7 emails available in Command Center docs</p>
          <button 
            style={{ padding: '16px 40px', background: '#1a1a1a', color: 'white', borderRadius: '4px', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer' }}
            onMouseOver={(e) => e.currentTarget.style.background = '#000'}
            onMouseOut={(e) => e.currentTarget.style.background = '#1a1a1a'}
          >
            View Full Copy →
          </button>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#999', fontSize: '14px', background: '#f9f9f9', marginTop: '60px' }}>
        <p>Gentlemen's Vault Email Strategy | Quiz → Reading → Launch</p>
      </footer>
    </div>
  );
}
