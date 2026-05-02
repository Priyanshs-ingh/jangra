// Hero variants for Jangra Advertisement
const { useEffect, useState, useRef } = React;

// ─── Glowing 3D Signboard mockup (CSS/SVG) ───
function BrandOrb({ size = 64 }) {
  // Stylized brand mark inspired by the logo orb — blue→black gradient with gold A
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1d4ed8 35%, #0c1f5c 70%, #050a1f 100%)',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 0 0 1px rgba(212,164,55,0.5), 0 0 24px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
      position: 'relative',
      flexShrink: 0,
    }}>
      <div className="serif" style={{
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: size * 0.58,
        color: 'transparent',
        background: 'linear-gradient(180deg, #f0c75a, #d4a437 50%, #8a6a1f)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        textShadow: '0 0 12px rgba(212,164,55,0.5)',
        lineHeight: 1,
        transform: 'translateY(-2px)',
        filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.5))',
      }}>A</div>
    </div>
  );
}
window.BrandOrb = BrandOrb;

function Signboard({ variant = "luxe", text = "JANGRA", sub = "ADVERTISEMENT" }) {
  const tilt = useRef(null);
  useEffect(() => {
    const el = tilt.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rx = ((e.clientY - cy) / r.height) * -8;
      const ry = ((e.clientX - cx) / r.width) * 12;
      el.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transform = `perspective(1400px) rotateX(0deg) rotateY(0deg)`; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', display: 'grid', placeItems: 'center', padding: '40px 0' }}>
      {/* halo */}
      <div style={{
        position: 'absolute', width: '85%', height: '70%',
        background: 'radial-gradient(ellipse at center, rgba(212,164,55,0.32) 0%, rgba(212,164,55,0.08) 35%, transparent 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      <div ref={tilt} style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out',
        width: 'min(540px, 90%)',
        aspectRatio: '16 / 9',
      }}>
        {/* mounting brackets */}
        <div style={{ position: 'absolute', top: '-22px', left: '18%', width: '4px', height: '22px', background: 'linear-gradient(180deg, #2a2724, #444)', boxShadow: '1px 0 0 #1a1a1a' }} />
        <div style={{ position: 'absolute', top: '-22px', right: '18%', width: '4px', height: '22px', background: 'linear-gradient(180deg, #2a2724, #444)', boxShadow: '1px 0 0 #1a1a1a' }} />

        {/* board face */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #1a1815 0%, #0e0d0a 100%)',
          border: '2px solid #2a2724',
          borderRadius: '4px',
          boxShadow: `
            0 0 0 1px rgba(212,164,55,0.15),
            0 30px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(212,164,55,0.18),
            inset 0 1px 0 rgba(255,255,255,0.05)
          `,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          padding: '30px 40px',
          overflow: 'hidden',
        }}>
          {/* gold ornament line top */}
          <div style={{ width: '40%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a437, transparent)', marginBottom: '10px' }} />

          {/* main text */}
          <div className="serif" style={{
            fontSize: 'clamp(38px, 7vw, 78px)',
            fontWeight: 800,
            letterSpacing: '0.04em',
            background: 'linear-gradient(180deg, #ffe89a 0%, #f0c75a 30%, #d4a437 60%, #8a6a1f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(212,164,55,0.4)',
            filter: 'drop-shadow(0 0 14px rgba(240,199,90,0.5))',
            lineHeight: 1,
          }}>
            {text}
          </div>

          {/* subtext — red glow like the logo */}
          <div className="mono" style={{
            marginTop: '14px',
            fontSize: 'clamp(9px, 1.2vw, 12px)',
            letterSpacing: '0.5em',
            color: '#ff6b6b',
            textShadow: '0 0 8px rgba(230,57,70,0.7), 0 0 16px rgba(230,57,70,0.4)',
          }}>
            {sub}
          </div>

          {/* gold ornament line bottom */}
          <div style={{ width: '40%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a437, transparent)', marginTop: '14px' }} />

          {/* corner ornaments */}
          {['nw','ne','sw','se'].map(p => (
            <div key={p} style={{
              position: 'absolute',
              width: '14px', height: '14px',
              border: '1px solid #d4a437',
              borderRight: p.includes('e') ? 'none' : '1px solid #d4a437',
              borderLeft: p.includes('w') ? 'none' : '1px solid #d4a437',
              borderTop: p.includes('n') ? 'none' : '1px solid #d4a437',
              borderBottom: p.includes('s') ? 'none' : '1px solid #d4a437',
              top: p.includes('n') ? '12px' : 'auto',
              bottom: p.includes('s') ? '12px' : 'auto',
              left: p.includes('w') ? '12px' : 'auto',
              right: p.includes('e') ? '12px' : 'auto',
              opacity: 0.4,
            }} />
          ))}

          {/* gloss sweep */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* bottom shadow / floor reflection */}
        <div style={{
          position: 'absolute',
          left: '8%', right: '8%', bottom: '-30px',
          height: '30px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.7) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }} />
      </div>
    </div>
  );
}

// ─────  Hero V1 — Luxe Glossy  ─────
function HeroLuxe({ headline, sub, onQuote, onWork, phone }) {
  return (
    <section className="hero" id="home">
      {/* gold radial glow */}
      <div className="hero-bg-glow" style={{
        top: '-20%', right: '-10%',
        width: '900px', height: '900px',
        background: 'radial-gradient(circle, rgba(212,164,55,0.18) 0%, transparent 60%)',
        filter: 'blur(40px)',
      }} />
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(212,164,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,164,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="brand-rule"><span className="r"></span><span className="g"></span><span className="b"></span></div>
            <span className="mono" style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Est. 2008 · Gurgaon, Haryana</span>
          </div>
          <h1 className="serif" style={{
            margin: '24px 0 0',
            fontSize: 'clamp(46px, 6.4vw, 88px)',
            lineHeight: 1.02,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: 'var(--ivory)',
            textWrap: 'balance',
          }}>
            {headline.split('|').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="gold-ink" style={{ fontStyle: 'italic', fontWeight: 600 }}>{part}</span> : part}
              </React.Fragment>
            ))}
          </h1>
          <p style={{
            marginTop: '28px', maxWidth: '560px',
            fontSize: '17px', lineHeight: 1.6,
            color: 'var(--muted)',
          }}>
            {sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '40px', flexWrap: 'wrap' }}>
            <button onClick={onQuote} className="row" style={{
              padding: '17px 30px',
              background: 'var(--gold)', color: '#0a0a0a',
              fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.2s',
              boxShadow: '0 10px 30px rgba(212,164,55,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-bright)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get Free Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            <button onClick={onWork} style={{
              padding: '17px 30px',
              background: 'transparent', color: 'var(--ivory)',
              fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
              border: '1px solid rgba(212,164,55,0.4)',
              borderRadius: '2px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-bright)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,164,55,0.4)'; e.currentTarget.style.color = 'var(--ivory)'; }}
            >
              View Our Work
            </button>
          </div>

          {/* trust strip */}
          <div style={{ display: 'flex', gap: '50px', marginTop: '64px', flexWrap: 'wrap' }}>
            {[
              { n: '17', l: 'Years\nin business' },
              { n: '2.4K+', l: 'Signs\ndelivered' },
              { n: '48 hr', l: 'Express\nturnaround' },
            ].map((s, i) => (
              <div key={i}>
                <div className="serif gold-ink" style={{ fontSize: '38px', fontWeight: 600, lineHeight: 1, fontStyle: 'italic' }}>{s.n}</div>
                <div className="mono" style={{ marginTop: '8px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* signboard mockup */}
        <div>
          <Signboard text="JANGRA" sub="ADVERTISEMENT · GGN" />
        </div>
      </div>

      {/* scroll cue */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '40px',
        display: 'flex', alignItems: 'center', gap: '12px',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.24em',
        color: 'var(--muted-2)', textTransform: 'uppercase',
      }}>
        <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        Scroll to explore
      </div>

      {/* phone tag */}
      <div style={{
        position: 'absolute', bottom: '32px', right: '40px',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
        color: 'var(--gold)', letterSpacing: '0.08em',
      }}>
        Call · {phone}
      </div>
    </section>
  );
}

// ─────  Hero V2 — Editorial Restrained  ─────
function HeroEditorial({ headline, sub, onQuote, onWork, phone }) {
  return (
    <section className="hero" id="home" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px' }}>
        {/* top meta row */}
        <div className="between" style={{ paddingBottom: '40px', borderBottom: '1px solid var(--line-2)' }}>
          <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Vol. 17 · No. 04 · Spring Edition
          </div>
          <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Signage · Print · Fabrication
          </div>
        </div>

        {/* title block */}
        <div style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              The studio
            </div>
            <h1 className="serif" style={{
              margin: '32px 0 0',
              fontSize: 'clamp(56px, 8vw, 124px)',
              lineHeight: 0.92,
              fontWeight: 400,
              letterSpacing: '-0.035em',
              color: 'var(--ivory)',
            }}>
              Signs that<br/>
              <span style={{ fontStyle: 'italic', fontWeight: 500 }} className="gold-ink">whisper,</span><br/>
              not shout.
            </h1>
          </div>

          <div style={{ paddingTop: '12px' }}>
            <Signboard text="JANGRA" sub="EST. 2008" />
            <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: 1.6, color: 'var(--muted)', maxWidth: '420px' }}>
              {sub}
            </p>
            <div style={{ display: 'flex', gap: '28px', marginTop: '32px', alignItems: 'center' }}>
              <button onClick={onQuote} style={{
                padding: '14px 0',
                background: 'transparent', color: 'var(--gold)',
                fontWeight: 600, fontSize: '14px', letterSpacing: '0.04em',
                borderBottom: '1px solid var(--gold)',
                borderRadius: 0,
              }}>
                Request a quote &nbsp;→
              </button>
              <button onClick={onWork} style={{
                fontWeight: 500, fontSize: '14px', color: 'var(--muted)',
                letterSpacing: '0.04em',
              }}>
                See portfolio
              </button>
            </div>
          </div>
        </div>

        {/* footer band */}
        <div style={{ marginTop: '90px', paddingTop: '28px', borderTop: '1px solid var(--line-2)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {[
            ['Studio', 'Sector 14, Gurgaon\nHaryana, IN'],
            ['Hours', 'Mon–Sat\n09:00 — 19:00'],
            ['Contact', `${phone}\nhello@jangra.in`],
            ['Specialties', 'Acrylic · ACP · Laser\n3D Wallpaper · Flex'],
          ].map(([k, v], i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>{k}</div>
              <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────  Hero V3 — Bold Industrial  ─────
function HeroIndustrial({ headline, sub, onQuote, onWork, phone }) {
  return (
    <section className="hero" id="home" style={{ paddingTop: '90px' }}>
      {/* big offset gold block */}
      <div style={{
        position: 'absolute', top: '120px', right: '-180px',
        width: '600px', height: '600px',
        background: 'var(--gold)',
        opacity: 0.06,
        transform: 'rotate(15deg)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
          ◆ Jangra Advertisement / Gurgaon Signage Co.
        </div>

        {/* huge display headline */}
        <h1 className="display" style={{
          margin: 0,
          fontSize: 'clamp(80px, 14vw, 220px)',
          lineHeight: 0.85,
          color: 'var(--ivory)',
          letterSpacing: '-0.01em',
        }}>
          BIG SIGNS.<br/>
          <span style={{ color: 'var(--gold)' }}>BOLD BRANDS.</span><br/>
          <span style={{ WebkitTextStroke: '1.5px var(--gold)', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            BUILT IN GGN.
          </span>
        </h1>

        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--text)', maxWidth: '500px' }}>
              {sub}
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' }}>
              <button onClick={onQuote} className="row" style={{
                padding: '18px 32px',
                background: 'var(--gold)', color: '#0a0a0a',
                fontWeight: 800, fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase',
                borderRadius: 0,
              }}>
                ▸ Get Free Quote
              </button>
              <button onClick={onWork} style={{
                padding: '18px 32px',
                background: '#0a0a0a', color: 'var(--ivory)',
                fontWeight: 700, fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase',
                border: '1.5px solid var(--ivory)',
                borderRadius: 0,
              }}>
                View Work
              </button>
            </div>
          </div>
          <div style={{ marginTop: '-30px' }}>
            <Signboard text="JANGRA" sub="GURGAON · HR" />
          </div>
        </div>

        {/* ticker strip */}
        <div style={{
          marginTop: '70px',
          padding: '14px 0',
          borderTop: '1px solid var(--gold)', borderBottom: '1px solid var(--gold)',
          display: 'flex', gap: '50px',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.08em',
          color: 'var(--gold)',
          overflow: 'hidden', whiteSpace: 'nowrap',
        }}>
          {Array(2).fill().map((_, i) => (
            <React.Fragment key={i}>
              <span>★ FLEX PRINTING</span>
              <span>★ DIGITAL PRINT</span>
              <span>★ ACP CLADDING</span>
              <span>★ ACRYLIC SIGNAGE</span>
              <span>★ 3D WALLPAPER</span>
              <span>★ LASER CUTTING</span>
              <span>★ PVC BOARDS</span>
              <span>★ NEON LED</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HeroLuxe = HeroLuxe;
window.HeroEditorial = HeroEditorial;
window.HeroIndustrial = HeroIndustrial;
window.Signboard = Signboard;
