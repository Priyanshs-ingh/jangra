// Reusable sections for Jangra
const { useState: useStateS, useEffect: useEffectS } = React;

// ─── Service icons (simple geometric SVGs) ───
const svcIcons = {
  flex: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="10" width="32" height="22" rx="1"/><path d="M10 16h24M10 22h18M10 28h14"/></svg>,
  digital: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="8" y="14" width="28" height="20" rx="1"/><path d="M14 14V8h16v6M16 34v4h12v-4"/></svg>,
  acp: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="6" width="32" height="32" rx="1"/><path d="M6 16h32M6 26h32M16 6v32M26 6v32"/></svg>,
  acrylic: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M22 6 L38 14 L38 30 L22 38 L6 30 L6 14 Z"/><path d="M22 6v32M6 14l32 16M38 14L6 30" opacity="0.4"/></svg>,
  pvc: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 8h28v28H8z"/><path d="M14 14l16 16M30 14L14 30"/></svg>,
  laser: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="22" cy="22" r="6"/><path d="M22 4v8M22 32v8M4 22h8M32 22h8M9 9l5 5M30 30l5 5M35 9l-5 5M9 35l5-5"/></svg>,
  wallpaper: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 8h32v28H6z"/><circle cx="14" cy="16" r="2"/><circle cx="22" cy="22" r="2"/><circle cx="30" cy="16" r="2"/><circle cx="14" cy="28" r="2"/><circle cx="30" cy="28" r="2"/></svg>,
  neon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 30 Q8 14 22 14 Q36 14 36 30"/><circle cx="8" cy="32" r="2"/><circle cx="36" cy="32" r="2"/></svg>,
};

const services = [
  { id: 'flex', n: '01', t: 'Flex Printing', d: 'Outdoor hoardings, banners, and large-format flex up to 12 ft wide.', icon: 'flex', featured: true },
  { id: 'digital', n: '02', t: 'Digital Printing', d: 'High-resolution digital posters, brochures, business stationery.', icon: 'digital', accent: 'blue' },
  { id: 'acp', n: '03', t: 'ACP Cladding', d: 'Aluminium composite panel facades for shopfronts and corporate walls.', icon: 'acp' },
  { id: 'acrylic', n: '04', t: 'Acrylic Signage', d: 'Backlit 3D acrylic letters with crisp edges and even glow.', icon: 'acrylic' },
  { id: 'pvc', n: '05', t: 'PVC Boards', d: 'Lightweight PVC sign boards — weather-proof, indoor & outdoor.', icon: 'pvc' },
  { id: 'laser', n: '06', t: 'Laser Cutting', d: 'Precision laser-cut metal, acrylic, and wood lettering.', icon: 'laser', accent: 'red' },
  { id: 'wall', n: '07', t: '3D Wallpaper', d: 'Custom textured wallpaper installs for offices and showrooms.', icon: 'wallpaper' },
  { id: 'neon', n: '08', t: 'Neon LED', d: 'Programmable LED neon for retail, cafés, and event branding.', icon: 'neon' },
];

function ServicesSection({ density }) {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <div className="between" style={{ alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div className="eyebrow"><span>What we do · 02</span></div>
            <h2 className="section-title">Eight crafts.<br/>One <em>signed</em> finish.</h2>
          </div>
          <p className="section-lede" style={{ margin: 0 }}>
            From a 4×6 PVC nameplate to a 40-foot ACP shopfront — every job is handled in-house, from design and fabrication through installation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.id} className={`svc col-3 ${s.featured ? 'featured' : ''} ${s.accent === 'blue' ? 'brand-blue' : ''} ${s.accent === 'red' ? 'brand-red' : ''}`}>
              <div className="svc-num">— {s.n}</div>
              <div className="svc-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <div className="svc-icon">{svcIcons[s.icon]}</div>
              <div className="svc-title">{s.t}</div>
              <div className="svc-desc">{s.d}</div>
            </div>
          ))}
        </div>

        {/* materials strip */}
        <div style={{
          marginTop: '70px',
          padding: '28px 36px',
          background: 'linear-gradient(90deg, transparent, rgba(212,164,55,0.06), transparent)',
          border: '1px solid var(--line)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
        }}>
          <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Working materials
          </div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontSize: '12px', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em' }}>
            <span>3MM ACP</span><span>·</span>
            <span>5MM ACRYLIC</span><span>·</span>
            <span>SUNBOARD</span><span>·</span>
            <span>STAINLESS STEEL</span><span>·</span>
            <span>MS METAL</span><span>·</span>
            <span>VINYL</span><span>·</span>
            <span>FLEX 440 GSM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery placeholder tile ───
function PlaceholderTile({ label, h, accent = false, tone = 'gold' }) {
  const toneColor = tone === 'blue' ? 'var(--blue-bright)' : tone === 'red' ? 'var(--red)' : 'var(--gold)';
  const toneBg = tone === 'blue'
    ? `repeating-linear-gradient(45deg, #0e1226, #0e1226 8px, #131a36 8px, #131a36 16px)`
    : tone === 'red'
    ? `repeating-linear-gradient(45deg, #1a0d0f, #1a0d0f 8px, #221013 8px, #221013 16px)`
    : `repeating-linear-gradient(45deg, #1a1610, #1a1610 8px, #221c10 8px, #221c10 16px)`;
  return (
    <div style={{
      width: '100%', height: h,
      background: accent ? toneBg : `repeating-linear-gradient(45deg, #131311, #131311 8px, #181816 8px, #181816 16px)`,
      display: 'grid', placeItems: 'center',
      position: 'relative',
    }}>
      <div className="mono" style={{
        position: 'absolute', top: '14px', left: '14px',
        fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase',
        color: accent ? toneColor : 'var(--muted-2)',
      }}>
        IMG · {label.split('|')[1] || '01'}
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>
          {label.split('|')[0]}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '8px', height: '8px', background: accent ? toneColor : 'var(--muted-2)' }} />
    </div>
  );
}

const portfolio = [
  { tag: 'ACP', name: 'Royal Auto Showroom — Sector 32', span: 8, h: 360, label: 'Storefront facade · ACP cladding|01', accent: true, tone: 'gold' },
  { tag: 'NEON', name: 'Cafe Palette — Galleria Market', span: 4, h: 360, label: 'Neon channel letters|02', accent: true, tone: 'red' },
  { tag: 'ACRYLIC', name: 'Maple Leaf Dental Clinic', span: 4, h: 280, label: '3D acrylic backlit|03', accent: true, tone: 'blue' },
  { tag: 'FLEX', name: 'Construction Site Hoarding', span: 4, h: 280, label: 'Outdoor flex banner|04' },
  { tag: 'LASER', name: 'Lobby Wall — JMD Megapolis', span: 4, h: 280, label: 'Laser-cut metal lettering|05', accent: true, tone: 'gold' },
  { tag: 'WALL', name: 'Lounge — The Centrum', span: 6, h: 320, label: '3D textured wallpaper|06' },
  { tag: 'DIGITAL', name: 'Brand Merchandise Run', span: 6, h: 320, label: 'Digital print collateral|07', accent: true, tone: 'blue' },
];

function GallerySection() {
  const tags = ['All', 'Signage', 'Print', 'Facade', 'Interior'];
  const [active, setActive] = useStateS('All');
  return (
    <section id="work" className="section-pad" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="between" style={{ alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div className="eyebrow"><span>Selected work · 03</span></div>
            <h2 className="section-title">Recent <em>installations</em></h2>
          </div>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            color: 'var(--gold)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
            paddingBottom: '4px', borderBottom: '1px solid var(--gold)',
          }}>
            Full archive (240+ projects) →
          </button>
        </div>

        <div className="gallery-tabs">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`tab ${active === t ? 'active' : ''}`}>{t}</button>
          ))}
        </div>

        <div className="gallery-grid">
          {portfolio.map((p, i) => (
            <div key={i} className="tile" style={{ gridColumn: `span ${p.span}` }}>
              <PlaceholderTile label={p.label} h={p.h} accent={p.accent} tone={p.tone} />
              <div className="tile-overlay">
                <div className="tile-tag" style={{ color: p.tone === 'blue' ? 'var(--blue-bright)' : p.tone === 'red' ? '#ff6b6b' : 'var(--gold)' }}>{p.tag}</div>
                <div className="tile-name">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ───
function ProcessSection() {
  const steps = [
    { n: '01', label: 'Brief', t: 'Site visit & sketch', d: 'We measure your space, photograph context, and sketch first concepts within 48 hours.' },
    { n: '02', label: 'Design', t: 'Mockups & approval', d: 'Photo-realistic renders. Up to three rounds of revisions on the final approved design.' },
    { n: '03', label: 'Build', t: 'In-house fabrication', d: 'Cut, weld, paint, assemble. Every piece is built in our 4,000 sq ft Sector 14 workshop.' },
    { n: '04', label: 'Install', t: 'Mount & power on', d: 'Our crew handles permits, mounting, wiring, and a 12-month finish warranty.' },
  ];
  return (
    <section id="process" className="section-pad">
      <div className="container">
        <div className="eyebrow"><span>How we work · 04</span></div>
        <h2 className="section-title">From <em>brief</em> to <em>built</em>.<br/>Four steps. No surprises.</h2>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{s.n}</div>
              <div className="step-label">— {s.label}</div>
              <div className="step-title">{s.t}</div>
              <div className="step-desc">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───
function VoicesSection() {
  const quotes = [
    {
      body: 'They turned the rough sketch on a napkin into a 32-foot ACP facade that finishes off our showroom perfectly. Crew was on time, on budget, and quietly professional.',
      name: 'Rohit Mehra',
      role: 'Owner, Royal Auto · Gurgaon',
      initial: 'R',
    },
    {
      body: 'The acrylic backlit signs look better than the renders — and the renders were already excellent. Our patients comment on the lobby every single week.',
      name: 'Dr. Priya Sharma',
      role: 'Maple Leaf Dental',
      initial: 'P',
    },
    {
      body: 'We needed forty laser-cut nameplates in three days for a corporate event. Jangra delivered in 36 hours with zero drama. They are now on speed dial.',
      name: 'Arjun Kapoor',
      role: 'Brand Lead, JMD Group',
      initial: 'A',
    },
  ];
  return (
    <section id="voices" className="section-pad">
      <div className="container">
        <div className="eyebrow"><span>Said about us · 05</span></div>
        <h2 className="section-title">Trusted across <em>Delhi-NCR</em></h2>
        <div className="quotes-row">
          {quotes.map((q, i) => (
            <div key={i} className="quote">
              <div className="quote-body">{q.body}</div>
              <div className="quote-meta">
                <div className="avatar">{q.initial}</div>
                <div>
                  <div className="qmeta-name">{q.name}</div>
                  <div className="qmeta-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Quote ───
function ContactSection({ phone, onSubmit }) {
  const [form, setForm] = useStateS({ name: '', phone: '', email: '', service: 'Acrylic Signage', size: '', notes: '' });
  const [busy, setBusy] = useStateS(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    await new Promise(r => setTimeout(r, 800));
    setBusy(false);
    onSubmit && onSubmit(form);
    setForm({ name: '', phone: '', email: '', service: 'Acrylic Signage', size: '', notes: '' });
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="eyebrow"><span>Get in touch · 06</span></div>
        <h2 className="section-title">Let's build your <em>signature</em>.</h2>
        <p className="section-lede">Tell us a little about your project — we'll send a free quote and concept sketch within 24 hours.</p>

        <div className="contact-grid">
          {/* left — info */}
          <div>
            <div className="contact-info-row">
              <div className="ci-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg></div>
              <div>
                <div className="ci-label">Phone & WhatsApp</div>
                <div className="ci-value">{phone}<br/><span style={{ color: 'var(--muted)', fontSize: '13px' }}>Mon–Sat · 9am – 7pm</span></div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="ci-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">hello@jangra.in<br/>orders@jangra.in</div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="ci-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div>
                <div className="ci-label">Workshop & Studio</div>
                <div className="ci-value">Plot 14B, Sector 14<br/>Gurgaon, Haryana 122001</div>
              </div>
            </div>

            {/* map placeholder */}
            <div style={{
              marginTop: '32px',
              height: '220px',
              background: 'repeating-linear-gradient(0deg, #0d0c09, #0d0c09 12px, #131210 12px, #131210 24px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(212,164,55,0.08) 60px, rgba(212,164,55,0.08) 61px)',
              border: '1px solid var(--line)',
              position: 'relative',
              display: 'grid', placeItems: 'center',
            }}>
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted-2)', position: 'absolute', top: '14px', left: '14px' }}>
                MAP · GURGAON SECTOR 14
              </div>
              <div style={{ width: '14px', height: '14px', background: 'var(--gold)', borderRadius: '50%', boxShadow: '0 0 0 6px rgba(212,164,55,0.18), 0 0 0 14px rgba(212,164,55,0.08)' }} />
            </div>
          </div>

          {/* right — form */}
          <form className="form-card" onSubmit={submit}>
            <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              ◆ Free quote in 24 hours
            </div>
            <div className="field-row">
              <div className="field">
                <label>Your name</label>
                <input value={form.name} onChange={e => set('name', e.target.value)} required placeholder="Rohit Mehra"/>
              </div>
              <div className="field">
                <label>Phone</label>
                <input value={form.phone} onChange={e => set('phone', e.target.value)} required placeholder="+91 ··· ··· ····"/>
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com"/>
            </div>
            <div className="field-row">
              <div className="field">
                <label>Service</label>
                <select value={form.service} onChange={e => set('service', e.target.value)}>
                  {['Flex Printing','Digital Printing','ACP Cladding','Acrylic Signage','PVC Boards','Laser Cutting','3D Wallpaper','Neon LED','Other'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Approx. size</label>
                <input value={form.size} onChange={e => set('size', e.target.value)} placeholder="e.g. 8 ft × 4 ft"/>
              </div>
            </div>
            <div className="field">
              <label>Project notes</label>
              <textarea value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Where, when, brand colors, anything else..."/>
            </div>
            <button type="submit" disabled={busy} className="submit-btn">
              {busy ? 'Sending...' : 'Request my free quote →'}
            </button>
            <div className="mono" style={{ marginTop: '14px', fontSize: '10px', color: 'var(--muted-2)', letterSpacing: '0.08em', textAlign: 'center' }}>
              No spam. We reply on WhatsApp within 4 hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FooterSection({ phone }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '20px' }}>
              <div className="logo-mark"><span className="orb-a">J</span></div>
              <div className="logo-text">
                <div className="name">Jangra</div>
                <div className="sub">ADVERTISEMENT</div>
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '280px' }}>
              Premium signage, fabrication, and large-format print. Operating from Sector 14, Gurgaon since 2008.
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
              {['IG', 'FB', 'WA', 'IN'].map(s => (
                <a key={s} href="#" style={{
                  width: '34px', height: '34px',
                  border: '1px solid var(--line)',
                  display: 'grid', placeItems: 'center',
                  fontSize: '10px', letterSpacing: '0.1em', fontWeight: 600,
                  color: 'var(--muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                >{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="foot-h">Services</div>
            <div className="foot-list">
              <a href="#services">Flex Printing</a>
              <a href="#services">Digital Printing</a>
              <a href="#services">ACP Cladding</a>
              <a href="#services">Acrylic Signage</a>
              <a href="#services">Laser Cutting</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Studio</div>
            <div className="foot-list">
              <a href="#work">Portfolio</a>
              <a href="#process">Our Process</a>
              <a href="#voices">Testimonials</a>
              <a href="#">Materials Guide</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Visit</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
              Plot 14B, Sector 14<br/>
              Gurgaon, Haryana 122001<br/><br/>
              <span style={{ color: 'var(--gold)', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.06em' }}>{phone}</span><br/>
              <span style={{ fontSize: '13px' }}>hello@jangra.in</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Jangra Advertisement · All work made in Gurgaon</div>
          <div>GST: 06AAACJ1234F1Z5 · Est. 2008</div>
        </div>
      </div>
    </footer>
  );
}

function BrandSpectrumSection() {
  const items = [
    { name: 'Midnight', value: '#0a0a0a', label: 'Surface', desc: 'The night canvas behind every glow.' },
    { name: 'Royal Blue', value: '#1d4ed8', label: 'Heritage', desc: 'From the orb — depth and trust.' },
    { name: 'Signal Red', value: '#e63946', label: 'Energy', desc: 'The accent that makes signs sing.' },
    { name: 'Studio Gold', value: '#d4a437', label: 'Craft', desc: 'The finish on every JANGRA piece.' },
  ];
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #060606 100%)', borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)' }}>
      <div className="container">
        <div className="between" style={{ alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div className="brand-rule" style={{ marginBottom: '14px' }}>
              <span className="r"></span><span className="g"></span><span className="b"></span>
            </div>
            <div className="eyebrow"><span>Our palette · 04½</span></div>
            <h2 className="section-title">Four colors.<br/>One <em>signature.</em></h2>
          </div>
          <p className="section-lede" style={{ margin: 0 }}>
            Every Jangra piece is built on this palette — pulled directly from our logo. We carry the whole spectrum into your project, so your brand reads consistent from a 4-inch nameplate to a 40-foot facade.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '70px', border: '1px solid var(--line-2)' }}>
          {items.map((c, i) => (
            <div key={i} style={{
              padding: '0',
              borderRight: i < items.length - 1 ? '1px solid var(--line-2)' : 'none',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                height: '180px',
                background: c.value,
                position: 'relative',
                boxShadow: c.name === 'Royal Blue' ? 'inset 0 -40px 80px rgba(59,130,246,0.4)' :
                           c.name === 'Signal Red' ? 'inset 0 -40px 80px rgba(255,107,107,0.3)' :
                           c.name === 'Studio Gold' ? 'inset 0 -40px 80px rgba(240,199,90,0.4)' :
                           'inset 0 -40px 80px rgba(212,164,55,0.08)',
              }}>
                <div className="mono" style={{ position: 'absolute', top: '14px', left: '14px', fontSize: '10px', letterSpacing: '0.18em', color: c.name === 'Midnight' ? 'var(--gold)' : 'rgba(0,0,0,0.7)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {c.label}
                </div>
                <div className="mono" style={{ position: 'absolute', bottom: '14px', right: '14px', fontSize: '11px', color: c.name === 'Midnight' ? 'var(--gold)' : 'rgba(0,0,0,0.85)', letterSpacing: '0.04em', fontWeight: 600 }}>
                  {c.value.toUpperCase()}
                </div>
              </div>
              <div style={{ padding: '24px 24px 30px', background: 'var(--bg)' }}>
                <div className="serif" style={{ fontSize: '22px', fontWeight: 500, color: 'var(--ivory)' }}>{c.name}</div>
                <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.BrandSpectrumSection = BrandSpectrumSection;
