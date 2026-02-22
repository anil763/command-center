'use client';

export default function VaultLanding() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', lineHeight: '1.6', color: '#1a1a1a', background: '#fff' }}>
      {/* HERO */}
      <header style={{ padding: '80px 20px 60px', textAlign: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>
            Gentlemen's Vault
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            A private space for men who are done pretending and ready to do the real work.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* WHAT IS IT */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>What is Gentlemen's Vault?</h2>
          <p>You're successful on paper but hollow inside. You've built the career, the life, the image. And something is breaking.</p>
          <p>Maybe it's a relationship that fell apart. Maybe your kids don't actually know you. Maybe you just looked in the mirror one day and didn't recognize the man staring back.</p>
          <p>That crack in the facade isn't a breakdown. It's an awakening.</p>
          <p>Gentlemen's Vault is a private community for men going through this—men who are tired of performing and ready to be honest. Not therapy. Not coaching. A space where you can say the unsayable and not be alone in it.</p>
        </section>
        
        {/* WHAT'S INSIDE */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>What's Inside</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', margin: '40px 0' }}>
            <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
              <h3 style={{ fontSize: '18px', marginTop: 0, marginBottom: '15px', fontWeight: '600' }}>🎥 Deep Content</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Video frameworks on the masculine mask, awakening, and the 3 blocks that keep men stuck.</p>
            </div>
            <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
              <h3 style={{ fontSize: '18px', marginTop: 0, marginBottom: '15px', fontWeight: '600' }}>💬 Live Calls</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Monthly calls where we go beyond surface. Real conversation. Hot seats. No BS.</p>
            </div>
            <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #1a1a1a' }}>
              <h3 style={{ fontSize: '18px', marginTop: 0, marginBottom: '15px', fontWeight: '600' }}>🤝 Brotherhood</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>A community of men doing honest work. What's shared here stays here.</p>
            </div>
          </div>
        </section>
        
        {/* THE FRAMEWORK */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>The Framework: Three Blocks Keeping Men Stuck</h2>
          
          <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: '600' }}>1. The Shield</h3>
          <p>The emotional armor you built to survive. It protected you. Now it's imprisoning you. You can't feel. You can't ask for help. You can't be seen.</p>
          
          <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: '600' }}>2. The Story</h3>
          <p>The narrative you've been telling yourself about who you are and what you deserve. "I'm not the kind of guy who talks about feelings." "I should be further along." These aren't truths. They're inherited scripts.</p>
          
          <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: '600' }}>3. The Silence</h3>
          <p>The absence of honest male connection. You have colleagues, buddies, maybe a good relationship. But you have no one you can tell the truth to. That isolation is killing you.</p>
          
          <p style={{ marginTop: '30px', fontWeight: '600' }}>The Vault exists to help you dismantle all three.</p>
        </section>
        
        {/* PRICE */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>Join the Vault</h2>
          <p><strong>$44/month</strong> (Master Number pricing)</p>
          <p>Founding members: $39/month for the first 20 who join.</p>
          <p style={{ marginTop: '30px', color: '#666' }}>Cancel anytime. No lock-in. But if you join, commit to showing up. The Vault only works if you do.</p>
        </section>
        
        {/* CTA */}
        <div style={{ background: '#f0f0f0', padding: '60px 20px', textAlign: 'center', marginTop: '60px', marginLeft: '-20px', marginRight: '-20px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>Ready?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>The door opens March 1, 2026.</p>
          
          <form style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                placeholder="First Name" 
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', fontFamily: 'inherit' }}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="email" 
                placeholder="Email" 
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', fontFamily: 'inherit' }}
                required
              />
            </div>
            <button 
              type="submit" 
              style={{ display: 'inline-block', padding: '16px 40px', background: '#1a1a1a', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.background = '#000'}
              onMouseOut={(e) => e.currentTarget.style.background = '#1a1a1a'}
            >
              Get the Details
            </button>
          </form>
          
          <p style={{ marginTop: '30px', color: '#999', fontSize: '14px' }}>We'll send you the link, the full details, and updates as we approach launch.</p>
        </div>

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#999', fontSize: '14px' }}>
        <p>Gentlemen's Vault | A community for men waking up</p>
        <p style={{ marginTop: '10px' }}>© 2026 The Spiritual Technologist</p>
      </footer>
    </div>
  );
}
