'use client';

import { Download } from 'lucide-react';

export default function VaultLeadMagnet() {
  const downloadPDF = () => {
    // In production, this would link to actual PDF
    alert('PDF download link would go here. Currently at: /public/vault-lead-magnet.pdf');
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', lineHeight: '1.6', color: '#1a1a1a', background: '#fff' }}>
      {/* HERO */}
      <header style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '40px', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>
            Your Numbers, Your Blueprint
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            The Essential Numerology Guide for Men in Transition
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>What You'll Learn</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              <strong>Your Life Path Number</strong> — Your core operating system and how you're wired
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              <strong>Your Personal Year Cycle</strong> — What season you're in right now and what it means
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              <strong>How to Read Your Blueprint</strong> — The real meaning behind your numbers
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              <strong>What It Means for You Right Now</strong> — In your transition and awakening
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>Why This Matters</h2>
          <p>Your numbers aren't your destiny. They're your design.</p>
          <p>Knowing your design means you can stop fighting yourself and start working with yourself. That's where real change begins.</p>
        </section>

        {/* DOWNLOAD CTA */}
        <section style={{ background: '#f0f0f0', padding: '40px', borderRadius: '8px', textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '700' }}>Get the Guide</h3>
          <p style={{ marginBottom: '30px', color: '#666' }}>Free PDF — 10 minutes to read</p>
          <button 
            onClick={downloadPDF}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 40px', background: '#1a1a1a', color: 'white', borderRadius: '4px', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer' }}
            onMouseOver={(e) => e.currentTarget.style.background = '#000'}
            onMouseOut={(e) => e.currentTarget.style.background = '#1a1a1a'}
          >
            <Download size={20} />
            Download PDF
          </button>
        </section>

        {/* NEXT STEP */}
        <section style={{ borderTop: '1px solid #f0f0f0', paddingTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '700' }}>Want to Go Deeper?</h3>
          <p>Book a private numerology reading with Anil. He'll look at your complete chart and show you exactly what your numbers are trying to tell you.</p>
          <button 
            style={{ padding: '16px 40px', background: '#1a1a1a', color: 'white', borderRadius: '4px', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}
            onMouseOver={(e) => e.currentTarget.style.background = '#000'}
            onMouseOut={(e) => e.currentTarget.style.background = '#1a1a1a'}
          >
            Book Your Reading
          </button>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#999', fontSize: '14px', background: '#f9f9f9', marginTop: '60px' }}>
        <p>Created for men waking up. For men ready to understand themselves.</p>
      </footer>
    </div>
  );
}
