// Main App for Jangra Advertisement landing
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "luxe",
  "goldShade": "warm",
  "headline": "Signs that earn a | second look |.",
  "showTrustBadges": true,
  "density": "balanced"
}/*EDITMODE-END*/;

const GOLD_SHADES = {
  warm:    { gold: '#b08925', bright: '#d4a437', deep: '#6a5117', soft: '#8e6f1f' },
  champagne: { gold: '#9c8345', bright: '#c9b27a', deep: '#5e4d29', soft: '#7d6a3a' },
  rose:    { gold: '#a86e3f', bright: '#d49b6f', deep: '#6e4a2c', soft: '#8c5e3e' },
  bright:  { gold: '#c9a01f', bright: '#f5c842', deep: '#7d641a', soft: '#a07f1f' },
};

const PHONE = '+91 98765 43210';

function applyGoldShade(shade) {
  const c = GOLD_SHADES[shade] || GOLD_SHADES.warm;
  const r = document.documentElement;
  r.style.setProperty('--gold', c.gold);
  r.style.setProperty('--gold-bright', c.bright);
  r.style.setProperty('--gold-deep', c.deep);
  r.style.setProperty('--gold-soft', c.soft);
}

function Nav({ onQuote }) {
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className="nav" style={{ background: scrolled ? 'linear-gradient(180deg, rgba(28,23,20,0.96) 0%, rgba(20,16,14,0.96) 100%)' : 'linear-gradient(180deg, rgba(36,30,26,0.85) 0%, rgba(28,23,20,0.85) 100%)' }}>
      <a href="#home" className="logo" aria-label="Jangra home">
        <img src="uploads/00001.png" className="logo-img" alt="Jangra logo" />
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#voices">Voices</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <span className="nav-phone">{PHONE}</span>
        <button onClick={onQuote} className="nav-cta">Get Quote</button>
      </div>
    </nav>
  );
}

function QuoteModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useStateA({ name: '', phone: '', service: 'Signage' });
  const [busy, setBusy] = useStateA(false);
  const submit = async (e) => {
    e.preventDefault(); setBusy(true);
    await new Promise(r => setTimeout(r, 700));
    setBusy(false); onSubmit(form); onClose();
    setForm({ name: '', phone: '', service: 'Signage' });
  };
  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase' }}>
          ◆ 30-second quote
        </div>
        <h3 className="serif" style={{ margin: '14px 0 8px', fontSize: '34px', fontWeight: 500, color: 'var(--ivory)', lineHeight: 1.15 }}>
          Tell us your <em style={{ color: 'var(--gold)' }}>basics.</em>
        </h3>
        <p style={{ marginTop: '6px', color: 'var(--muted)', fontSize: '14px' }}>We'll WhatsApp a sketch & quote within 24 hours.</p>
        <form onSubmit={submit} style={{ marginTop: '28px' }}>
          <div className="field">
            <label>Your name</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required placeholder="Full name"/>
          </div>
          <div className="field">
            <label>Phone / WhatsApp</label>
            <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required placeholder="+91 ··· ··· ····"/>
          </div>
          <div className="field">
            <label>What do you need?</label>
            <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
              {['Signage','Flex Printing','ACP Cladding','Acrylic 3D','Laser Cutting','3D Wallpaper','Other'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <button type="submit" disabled={busy} className="submit-btn">
            {busy ? 'Sending...' : 'Send to WhatsApp →'}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [modal, setModal] = useStateA(false);
  const [toast, setToast] = useStateA('');
  const [animKey, setAnimKey] = useStateA(0);
  const [flashing, setFlashing] = useStateA(false);

  useEffectA(() => { applyGoldShade(tweaks.goldShade); }, [tweaks.goldShade]);

  // Re-mount hero with animation whenever variant changes
  useEffectA(() => { setAnimKey(k => k + 1); }, [tweaks.heroVariant]);

  // Subtle gold flash on shade change
  useEffectA(() => {
    setFlashing(true);
    const t = setTimeout(() => setFlashing(false), 900);
    return () => clearTimeout(t);
  }, [tweaks.goldShade]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3200);
  };

  const onQuoteSubmit = (data) => {
    showToast(`✓ Got it, ${data.name?.split(' ')[0] || 'thanks'}! We'll be in touch within 24 hours.`);
  };

  const onWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroProps = {
    headline: tweaks.headline,
    sub: 'From a single nameplate to a 40-foot ACP facade — flex printing, digital printing, PVC, ACP, acrylic signage, 3D wallpaper, laser work and more, fabricated in-house in Gurgaon.',
    onQuote: () => setModal(true),
    onWork,
    phone: PHONE,
  };

  const Hero = {
    luxe: window.HeroLuxe,
    editorial: window.HeroEditorial,
    industrial: window.HeroIndustrial,
  }[tweaks.heroVariant] || window.HeroLuxe;

  const TP = window.TweaksPanel;
  const TS = window.TweakSection;
  const TRadio = window.TweakRadio;
  const TText = window.TweakText;
  const TToggle = window.TweakToggle;
  const TSelect = window.TweakSelect;

  return (
    <div data-screen-label="Jangra Landing">
      <Nav onQuote={() => setModal(true)} />
      <div key={animKey} className={`hero-anim ${flashing ? 'gold-flash' : ''}`}>
        <Hero {...heroProps} />
      </div>
      <ServicesSection density={tweaks.density} />
      <GallerySection />
      <ProcessSection />
      <VoicesSection />
      <ContactSection phone={PHONE} onSubmit={onQuoteSubmit} />
      <FooterSection phone={PHONE} />

      <QuoteModal open={modal} onClose={() => setModal(false)} onSubmit={onQuoteSubmit} />

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>

      <TP title="Tweaks">
        <TS title="Hero variant">
          <TRadio
            value={tweaks.heroVariant}
            onChange={v => setTweak('heroVariant', v)}
            options={[
              { value: 'luxe', label: 'Luxe' },
              { value: 'editorial', label: 'Editorial' },
              { value: 'industrial', label: 'Industrial' },
            ]}
          />
        </TS>
        <TS title="Gold shade">
          <TRadio
            value={tweaks.goldShade}
            onChange={v => setTweak('goldShade', v)}
            options={[
              { value: 'warm', label: 'Warm' },
              { value: 'champagne', label: 'Champagne' },
              { value: 'rose', label: 'Rose' },
              { value: 'bright', label: 'Bright' },
            ]}
          />
        </TS>
        <TS title="Headline copy" subtitle="Use | to wrap the gold-italic phrase.">
          <TText value={tweaks.headline} onChange={v => setTweak('headline', v)} />
        </TS>
      </TP>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
