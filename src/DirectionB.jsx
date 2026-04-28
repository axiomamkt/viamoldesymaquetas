// DirectionB.jsx — Dramática · Editorial-industrial
// Layouts asimétricos, tipografía protagonista, contraste alto,
// imagen full-bleed, mezcla de cálido (madera/cobre) y frío (acero)

const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

function NavB({ onQuote, scrolled, accent }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(11,17,30,.78)' : 'rgba(11,17,30,.0)',
      backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,243,238,.1)' : '1px solid transparent',
      color: 'var(--vm-paper)',
      transition: 'all .3s',
    }}>
      <div className="vm-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
        <VMLogo size={32} dark />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {['Servicios', 'Portafolio', 'Proceso', 'Contacto'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 12, fontFamily: 'var(--vm-font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(245,243,238,.7)', padding: '8px 14px', borderRadius: 4,
            }}>{l}</a>
          ))}
          <button onClick={onQuote} style={{
            marginLeft: 18, padding: '12px 20px',
            background: accent, color: 'var(--vm-navy-950)',
            border: 'none', fontFamily: 'var(--vm-font-display)', fontWeight: 700,
            fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Cotizar <VMIcons.Arrow style={{ width: 14, height: 14 }} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroB({ onQuote, accent }) {
  return (
    <section style={{ position: 'relative', background: 'var(--vm-navy-950)', color: 'var(--vm-paper)', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Big "photo" placeholder full bleed */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a2236 0%, #0b111e 60%, #11192e 100%)' }} />
        <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(201,165,87,.18) 0%, transparent 55%)' }} />
        {/* CNC machine silhouette */}
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .25 }}>
          {/* Machine frame */}
          <rect x="900" y="180" width="640" height="500" stroke={accent} strokeWidth="1" fill="none" />
          <rect x="940" y="220" width="560" height="420" stroke="var(--vm-steel)" strokeWidth="1" fill="none" />
          {/* Spindle */}
          <line x1="1220" y1="220" x2="1220" y2="420" stroke={accent} strokeWidth="2" />
          <rect x="1200" y="380" width="40" height="60" stroke={accent} strokeWidth="2" fill="rgba(201,165,87,0.2)" />
          {/* Workpiece */}
          <rect x="1080" y="500" width="280" height="80" stroke="var(--vm-steel)" strokeWidth="1.5" fill="none" />
          <line x1="1080" y1="540" x2="1360" y2="540" stroke="var(--vm-steel)" strokeWidth="0.5" strokeDasharray="4 4" />
          {/* Tracks */}
          <line x1="940" y1="640" x2="1500" y2="640" stroke="var(--vm-steel)" strokeWidth="1" />
          {/* Dimension lines */}
          <line x1="940" y1="700" x2="1500" y2="700" stroke="var(--vm-steel)" strokeWidth="0.5" />
          <text x="1220" y="720" textAnchor="middle" fontSize="14" fill="var(--vm-steel)" fontFamily="var(--vm-font-mono)" letterSpacing="0.12em">1500 MM · CNC 5-AXIS</text>
          {/* Crosshair */}
          <circle cx="1220" cy="420" r="20" stroke={accent} strokeWidth="1" fill="none" />
          <line x1="1190" y1="420" x2="1250" y2="420" stroke={accent} strokeWidth="1" />
          <line x1="1220" y1="390" x2="1220" y2="450" stroke={accent} strokeWidth="1" />
        </svg>
      </div>

      {/* Side rail with dimensional marks */}
      <div style={{ position: 'absolute', left: 24, top: 100, bottom: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 3 }}>
        <div data-mono style={{ writingMode: 'vertical-rl', color: 'rgba(245,243,238,.4)', transform: 'rotate(180deg)' }}>VMM · LEÓN · GTO · MX</div>
        <div data-mono style={{ writingMode: 'vertical-rl', color: accent, transform: 'rotate(180deg)' }}>SCROLL ↓</div>
      </div>

      <div className="vm-container" style={{ position: 'relative', zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ marginBottom: 60, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 8, height: 8, background: accent, borderRadius: '50%' }} />
          <span data-mono style={{ color: accent }}>EST. 2018 · MARCA GTO · 50+ CLIENTES</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(56px, 11vw, 168px)', fontWeight: 900,
          letterSpacing: '-0.045em', lineHeight: 0.88,
          marginBottom: 48, textTransform: 'uppercase',
        }}>
          Moldes<br/>
          <span style={{ color: accent }}>de inyección</span><br/>
          <span style={{ fontWeight: 200, fontStyle: 'italic', textTransform: 'lowercase', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em', color: 'rgba(245,243,238,.85)' }}>para </span>
          <span style={{ borderBottom: `4px solid ${accent}`, paddingBottom: 4 }}>calzado</span>
          <span style={{ color: accent, fontFamily: 'var(--vm-font-mono)', fontSize: '0.4em', verticalAlign: 'top', marginLeft: 8, fontWeight: 400 }}>+</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'end' }}>
          <p style={{ fontSize: 20, color: 'rgba(245,243,238,.78)', maxWidth: 580, lineHeight: 1.45 }}>
            Diseñamos y fabricamos moldes técnicos para la industria del calzado mexicana. Siete años, +50 clientes, una sola obsesión: <span style={{ color: accent }}>precisión productiva</span>.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button onClick={onQuote} style={{
              padding: '18px 28px', background: accent, color: 'var(--vm-navy-950)',
              border: 'none', fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 15,
              letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 12,
              boxShadow: 'var(--vm-shadow-gold)',
            }}>
              Solicitar cotización <VMIcons.Arrow style={{ width: 18, height: 18 }} />
            </button>
            <a href="#portafolio" className="vm-btn vm-btn-outline">Ver portafolio</a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 32px', background: 'rgba(11,17,30,.6)', borderTop: '1px solid rgba(245,243,238,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <MarcaGTO size={36} mono={false} />
          <div>
            <div data-mono style={{ color: accent, fontSize: 10 }}>CERTIFICADO</div>
            <div style={{ fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 14 }}>Marca GTO Oficial</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          {[['+7', 'AÑOS'], ['+50', 'CLIENTES'], ['6', 'SERVICIOS']].map(s => (
            <div key={s[1]} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: 'var(--vm-font-display)', fontSize: 26, fontWeight: 800, color: accent }}>{s[0]}</span>
              <span data-mono style={{ color: 'rgba(245,243,238,.5)' }}>{s[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesB({ accent }) {
  const services = [
    { num: '01', icon: 'Mold', title: 'Moldes de inyección', desc: 'Nuestro corazón. Aceros H13, P20, 1.2738. De 1 a 16 cavidades. Diseño DFM antes de cortar el primer chip.', star: true },
    { num: '02', icon: 'CNC', title: 'Maquinado CNC', desc: 'Centros de 3, 4 y 5 ejes. Tolerancias ±0.01 mm cuando la geometría lo exige.' },
    { num: '03', icon: 'Cube3D', title: 'Diseño 3D / CAD', desc: 'Modelado paramétrico, simulación de flujo, validación de partibles.' },
    { num: '04', icon: 'Scan', title: 'Escaneo 3D', desc: 'Ingeniería inversa de piezas existentes. Mallas STL, nubes de puntos.' },
    { num: '05', icon: 'Print3D', title: 'Impresión 3D', desc: 'Prototipado funcional rápido en SLA, FDM y SLS.' },
    { num: '06', icon: 'Maqueta', title: 'Maquetas y prototipos', desc: 'Modelos físicos para presentación y validación de diseño.' },
  ];
  return (
    <section className="vm-section" id="servicios" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container">
        {/* Header asimétrico */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 80 }}>
          <div>
            <div data-mono style={{ color: accent, marginBottom: 24 }}>§ 02 · SERVICIOS</div>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              Seis<br/>capacidades.<br/><span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', fontWeight: 300, textTransform: 'none', color: accent }}>una</span> integración.
            </h2>
          </div>
          <div style={{ alignSelf: 'end' }}>
            <p style={{ fontSize: 19, color: 'var(--vm-muted)', maxWidth: 540, lineHeight: 1.45, marginBottom: 24 }}>
              Cubrimos el ciclo completo de fabricación: del escaneo o concepto hasta el primer disparo de inyección. Toda la ingeniería bajo el mismo techo en León.
            </p>
            <div className="vm-link" style={{ color: 'var(--vm-ink)' }}>Ver capacidades técnicas <VMIcons.Arrow style={{ width: 14, height: 14 }} /></div>
          </div>
        </div>

        {/* Grid mixto: card estrella full-width, otros más pequeños */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
          {/* Star card spans 6 cols */}
          <div style={{
            gridColumn: 'span 6',
            background: 'var(--vm-navy-950)', color: 'var(--vm-paper)',
            padding: 48, position: 'relative', overflow: 'hidden',
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center',
            border: `2px solid ${accent}`,
          }}>
            <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .4 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 18 }}>
                <span data-mono style={{ color: accent }}>01</span>
                <span data-mono style={{ background: accent, color: 'var(--vm-navy-950)', padding: '4px 10px', fontSize: 10 }}>SERVICIO ESTRELLA</span>
              </div>
              <h3 style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, lineHeight: 0.95, marginBottom: 18, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>
                Moldes de<br/><span style={{ color: accent }}>inyección.</span>
              </h3>
              <p style={{ fontSize: 17, color: 'rgba(245,243,238,.75)', maxWidth: 480, marginBottom: 28, lineHeight: 1.5 }}>
                Aceros H13, P20, 1.2738. De 1 a 16 cavidades. Diseño DFM antes de cortar el primer chip. Garantía de primer disparo.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['H13', 'P20', '1.2738', 'DFM', 'Multi-cavidad'].map(t => (
                  <span key={t} data-mono style={{ padding: '6px 12px', border: `1px solid ${accent}`, color: accent }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', color: 'var(--vm-steel)' }}>
              <VMMoldDiagram color="currentColor" accent={accent} style={{ width: '100%' }} />
            </div>
          </div>

          {/* Other cards: 2 cols each */}
          {services.slice(1).map(s => {
            const Icon = VMIcons[s.icon];
            return (
              <ServiceCardB key={s.num} service={s} Icon={Icon} accent={accent} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCardB({ service, Icon, accent }) {
  const [hover, setHover] = useStateB(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: 'span 2', background: hover ? 'var(--vm-navy-900)' : 'var(--vm-paper-2)',
        color: hover ? 'var(--vm-paper)' : 'var(--vm-ink)',
        padding: 32, minHeight: 280, position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        transition: 'all .25s', cursor: 'pointer', overflow: 'hidden',
      }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <span data-mono style={{ color: hover ? accent : 'var(--vm-muted)' }}>{service.num}</span>
          <Icon style={{ width: 36, height: 36, color: hover ? accent : 'var(--vm-ink)', transition: 'color .2s' }} />
        </div>
        <h3 style={{ fontSize: 22, marginBottom: 12, color: hover ? 'var(--vm-paper)' : 'var(--vm-ink)' }}>{service.title}</h3>
        <p style={{ fontSize: 13, color: hover ? 'rgba(245,243,238,.65)' : 'var(--vm-muted)', lineHeight: 1.55 }}>{service.desc}</p>
      </div>
      <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontFamily: 'var(--vm-font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: hover ? accent : 'var(--vm-ink)' }}>
        Ver detalle <VMIcons.Arrow style={{ width: 14, height: 14, transform: hover ? 'translateX(4px)' : 'translateX(0)', transition: 'transform .2s' }} />
      </div>
    </div>
  );
}

function ProcessB({ accent }) {
  const steps = [
    { n: '01', t: 'Consulta', d: 'Brief técnico, requerimientos, materiales.' },
    { n: '02', t: 'Diseño', d: 'CAD 3D, simulación, partibles.' },
    { n: '03', t: 'CNC', d: 'Maquinado en aceros premium.' },
    { n: '04', t: 'Pruebas', d: 'Pulido, ajuste, primer disparo.' },
    { n: '05', t: 'Entrega', d: 'Documentación + soporte.' },
  ];
  return (
    <section className="vm-section" id="proceso" style={{ background: 'var(--vm-navy-900)', color: 'var(--vm-paper)' }}>
      <div className="vm-container">
        <div style={{ marginBottom: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end' }}>
          <div>
            <div data-mono style={{ color: accent, marginBottom: 24 }}>§ 03 · PROCESO</div>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              Cinco pasos.<br/>Cero <span style={{ color: accent, fontStyle: 'italic', fontFamily: 'Georgia, serif', fontWeight: 300, textTransform: 'none' }}>sorpresas</span>.
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(245,243,238,.7)', maxWidth: 500, lineHeight: 1.5 }}>
            Cada etapa del proceso es transparente. Recibes reportes semanales, pruebas físicas y validaciones antes de avanzar.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              padding: '36px 28px',
              borderLeft: '1px solid rgba(245,243,238,.1)',
              borderRight: i === steps.length - 1 ? '1px solid rgba(245,243,238,.1)' : 'none',
              position: 'relative',
            }}>
              <div data-mono style={{ color: accent, fontSize: 11, marginBottom: 24 }}>{s.n}</div>
              <h3 style={{ fontSize: 28, marginBottom: 14, color: 'var(--vm-paper)', letterSpacing: '-0.01em' }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: 'rgba(245,243,238,.6)', lineHeight: 1.5 }}>{s.d}</p>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: 50, right: -8, color: accent, opacity: .6 }}>
                  <VMIcons.Arrow style={{ width: 16, height: 16 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioB({ accent }) {
  const projects = [
    { id: 1, title: 'Tacón clásico · Damas', cat: 'Calzado · Suela', year: '2025', spec: 'H13 · 4 cav.', kind: 'photo' },
    { id: 2, title: 'Plataforma EVA', cat: 'Calzado · Plataforma', year: '2024', spec: 'P20 · 2 cav.', kind: 'photo' },
    { id: 3, title: 'Cuña deportiva', cat: 'Calzado · Cuña', year: '2024', spec: '1.2738', kind: 'blueprint' },
    { id: 4, title: 'Carcasa industrial', cat: 'Industrial', year: '2024', spec: 'H13', kind: 'photo' },
    { id: 5, title: 'Suela técnica', cat: 'Calzado · Suela', year: '2023', spec: 'P20 · 8 cav.', kind: 'photo' },
    { id: 6, title: 'Tacón fashion', cat: 'Calzado · Tacón', year: '2025', spec: 'H13', kind: 'blueprint' },
    { id: 7, title: 'Componente automotriz', cat: 'Industrial', year: '2025', spec: '1.2738', kind: 'photo' },
    { id: 8, title: 'Suela infantil', cat: 'Calzado · Suela', year: '2024', spec: 'P20', kind: 'photo' },
  ];
  const [filter, setFilter] = useStateB('Todos');
  const filtered = projects.filter(p => filter === 'Todos' || p.cat.includes(filter));

  return (
    <section className="vm-section" id="portafolio" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container">
        {/* Editorial header */}
        <div style={{ marginBottom: 60 }}>
          <div data-mono style={{ color: accent, marginBottom: 24 }}>§ 04 · PORTAFOLIO</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'end' }}>
            <h2 style={{ fontSize: 'clamp(48px, 8vw, 132px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              Trabajo<br/><span style={{ color: accent }}>fabricado</span>.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--vm-muted)', lineHeight: 1.5 }}>
              Una selección curada de proyectos entregados a marcas mexicanas en los últimos años.
            </p>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {['Todos', 'Calzado', 'Industrial'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '10px 18px', fontSize: 11, fontFamily: 'var(--vm-font-mono)', letterSpacing: '0.12em',
              background: filter === f ? 'var(--vm-navy-900)' : 'transparent',
              color: filter === f ? 'var(--vm-paper)' : 'var(--vm-ink)',
              border: `1.5px solid ${filter === f ? 'var(--vm-navy-900)' : 'rgba(19,23,34,.2)'}`,
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all .15s',
            }}>{f} <span style={{ opacity: 0.5, marginLeft: 6 }}>{f === 'Todos' ? projects.length : projects.filter(p => p.cat.includes(f)).length}</span></button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          {filtered.map((p, i) => {
            // Dynamic spans
            const spanMap = [6, 6, 4, 4, 4, 7, 5, 6];
            const span = spanMap[i % spanMap.length];
            return (
              <div key={p.id} style={{ gridColumn: `span ${span}` }}>
                <PortfolioCardB project={p} accent={accent} />
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="#" className="vm-btn vm-btn-outline-dark">Ver portafolio completo →</a>
        </div>
      </div>
    </section>
  );
}

function PortfolioCardB({ project, accent }) {
  const [hover, setHover] = useStateB(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      position: 'relative', overflow: 'hidden', cursor: 'pointer',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform .25s ease',
    }}>
      <VMPlaceholder label={project.title} sub={project.cat} kind={project.kind} aspect="4/3" tags={[project.spec, project.year]} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hover ? 'rgba(11,17,30,.85)' : 'transparent',
        transition: 'background .25s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 24, pointerEvents: 'none',
      }}>
        <div style={{
          opacity: hover ? 1 : 0, transform: hover ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}>
          <div data-mono style={{ color: accent, marginBottom: 10 }}>{project.year} · {project.spec}</div>
          <div style={{ fontFamily: 'var(--vm-font-display)', fontWeight: 800, fontSize: 28, color: 'var(--vm-paper)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>{project.title}</div>
          <div style={{ color: 'rgba(245,243,238,.7)', fontSize: 13, marginTop: 8, marginBottom: 18 }}>{project.cat}</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: accent, fontFamily: 'var(--vm-font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: `1px solid ${accent}`, paddingBottom: 4 }}>
            Ver caso <VMIcons.Arrow style={{ width: 12, height: 12 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectorsB({ accent }) {
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper-2)' }}>
      <div className="vm-container">
        <div style={{ marginBottom: 50 }}>
          <div data-mono style={{ color: accent, marginBottom: 18 }}>§ 05 · SECTORES</div>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase', maxWidth: 920 }}>
            Hechos para el <span style={{ color: accent }}>calzado</span>. Listos para más.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 16 }}>
          <div style={{ background: 'var(--vm-navy-950)', color: 'var(--vm-paper)', padding: 48, position: 'relative', overflow: 'hidden', minHeight: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .4 }} />
            <div style={{ position: 'absolute', right: -40, bottom: -40, width: 380, opacity: .35, color: 'var(--vm-steel)' }}>
              <VMSoleDiagram color="currentColor" accent={accent} style={{ width: '100%' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <div data-mono style={{ color: accent, marginBottom: 16 }}>SECTOR PRINCIPAL · 80% DE NUESTRO TRABAJO</div>
              <h3 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: 22, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>Calzado mexicano</h3>
              <p style={{ fontSize: 17, color: 'rgba(245,243,238,.75)', maxWidth: 460, lineHeight: 1.55 }}>
                León es la capital del calzado en México y nosotros nacimos aquí. Conocemos el terreno: tiempos de producción, requerimientos de los inyectadores locales, exigencias estéticas de las marcas.
              </p>
            </div>
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 380 }}>
              {['Tacones', 'Plataformas', 'Suelas técnicas', 'Cuñas y EVA'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontFamily: 'var(--vm-font-display)', fontWeight: 600 }}>
                  <span style={{ width: 14, height: 1, background: accent }} /> {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <div style={{ background: 'var(--vm-paper)', padding: 36, position: 'relative' }}>
              <div data-mono style={{ color: 'var(--vm-muted)', marginBottom: 14 }}>SECUNDARIO</div>
              <h3 style={{ fontSize: 28, marginBottom: 12 }}>Industrial</h3>
              <p style={{ fontSize: 13, color: 'var(--vm-muted)', lineHeight: 1.55 }}>
                Carcasas, componentes técnicos, plásticos para automotriz ligera y consumo.
              </p>
            </div>
            <div style={{ background: 'var(--vm-navy-900)', color: 'var(--vm-paper)', padding: 36, position: 'relative' }}>
              <div data-mono style={{ color: accent, marginBottom: 14 }}>NUEVO</div>
              <h3 style={{ fontSize: 28, marginBottom: 12 }}>Médico / consumo</h3>
              <p style={{ fontSize: 13, color: 'rgba(245,243,238,.7)', lineHeight: 1.55 }}>
                Estamos abriendo cupo para proyectos de inyección de baja-media producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyB({ accent }) {
  const items = [
    { n: '01', t: 'Tecnología de punta', d: 'CNC 5 ejes, escáner industrial, software CAD/CAM profesional.' },
    { n: '02', t: 'Hijos del calzado', d: '+7 años en León. La capital mundial del calzado mexicano.' },
    { n: '03', t: 'Asesoría integral', d: 'De la idea al primer disparo. Acompañamiento técnico real.' },
    { n: '04', t: 'Marca GTO', d: 'Distintivo oficial de calidad guanajuatense.' },
  ];
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <div data-mono style={{ color: accent, marginBottom: 24 }}>§ 06 · POR QUÉ</div>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              Cuatro<br/>razones.<br/><span style={{ color: accent, fontStyle: 'italic', fontFamily: 'Georgia, serif', fontWeight: 300, textTransform: 'none' }}>una</span> palabra: <span style={{ color: accent }}>oficio</span>.
            </h2>
          </div>
          <div>
            {items.map((it, i) => (
              <div key={it.n} style={{
                padding: '40px 0', borderTop: 'var(--vm-border-2)',
                borderBottom: i === items.length - 1 ? 'var(--vm-border-2)' : 'none',
                display: 'grid', gridTemplateColumns: '80px 1fr', gap: 30,
              }}>
                <div data-mono style={{ color: accent }}>{it.n}</div>
                <div>
                  <h3 style={{ fontSize: 32, marginBottom: 12, letterSpacing: '-0.02em' }}>{it.t}</h3>
                  <p style={{ fontSize: 16, color: 'var(--vm-muted)', lineHeight: 1.55, maxWidth: 520 }}>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqB({ accent }) {
  const faqs = [
    { q: '¿Cuánto tiempo tarda fabricar un molde?', a: 'Depende de complejidad y cavidades. Un molde simple para suela tarda entre 4 y 6 semanas; uno multi-cavidad complejo puede tomar 8 a 12 semanas.' },
    { q: '¿Trabajan solo con sector calzado?', a: 'Es nuestra especialidad pero también atendemos desarrollo industrial general: piezas técnicas, carcasas, componentes plásticos para diversas industrias.' },
    { q: '¿Qué información necesitan para cotizar?', a: 'Idealmente: archivo CAD 3D (STEP/IGES) o pieza física para escanear, volumen estimado anual, material de inyección y plazo objetivo.' },
    { q: '¿Hacen envíos fuera de León?', a: 'Sí. Entregamos en toda la República Mexicana y coordinamos exportación cuando es necesario.' },
    { q: '¿Cuál es el proceso desde la primera consulta?', a: 'Cotización en 24-48 hrs, diseño y aprobación, fabricación con reportes semanales, ensamble, pruebas y entrega con documentación técnica.' },
  ];
  const [open, setOpen] = useStateB(0);
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper-2)' }}>
      <div className="vm-container" style={{ maxWidth: 980 }}>
        <div style={{ marginBottom: 60 }}>
          <div data-mono style={{ color: accent, marginBottom: 24 }}>§ 07 · FAQ</div>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
            Lo que más<br/>nos <span style={{ color: accent }}>preguntan</span>.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'var(--vm-border-2)' : 'none', borderBottom: 'var(--vm-border-2)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'transparent', border: 'none', textAlign: 'left',
                fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 22, color: 'var(--vm-ink)', cursor: 'pointer',
              }}>
                <span style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
                  <span data-mono style={{ color: accent }}>0{i + 1}</span>
                  {f.q}
                </span>
                <span style={{ color: accent, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s' }}>
                  <VMIcons.Plus style={{ width: 24, height: 24 }} />
                </span>
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
                <p style={{ paddingBottom: 28, color: 'var(--vm-muted)', fontSize: 17, lineHeight: 1.6, paddingLeft: 56, maxWidth: 760 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaB({ onQuote, accent }) {
  return (
    <section style={{ background: 'var(--vm-navy-950)', color: 'var(--vm-paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(201,165,87,.18) 0%, transparent 60%)' }} />
      <div className="vm-container" style={{ padding: '120px 32px', position: 'relative' }}>
        <div data-mono style={{ color: accent, marginBottom: 32 }}>§ 08 · SIGUIENTE PASO</div>
        <h2 style={{ fontSize: 'clamp(56px, 10vw, 168px)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.045em', textTransform: 'uppercase', marginBottom: 48 }}>
          Tu pieza<br/>
          <span style={{ color: accent }}>merece</span><br/>
          <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', fontWeight: 200, textTransform: 'none', color: 'rgba(245,243,238,.85)' }}>el mejor</span><br/>
          molde.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
          <p style={{ fontSize: 19, color: 'rgba(245,243,238,.7)', maxWidth: 520, lineHeight: 1.5 }}>
            Cotización en menos de 24 hrs hábiles. Sin compromiso, sin letra chica. Conversemos.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button onClick={onQuote} style={{
              padding: '20px 32px', background: accent, color: 'var(--vm-navy-950)',
              border: 'none', fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 12,
              boxShadow: 'var(--vm-shadow-gold)',
            }}>
              Solicitar cotización <VMIcons.Arrow style={{ width: 18, height: 18 }} />
            </button>
            <a href="https://wa.me/524770000000" target="_blank" className="vm-btn vm-btn-outline">
              <VMIcons.WhatsApp style={{ width: 16, height: 16 }} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterB({ accent }) {
  return (
    <footer style={{ background: 'var(--vm-ink)', color: 'rgba(245,243,238,.7)' }}>
      <div className="vm-container" style={{ padding: '60px 32px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 50 }}>
          <div>
            <VMLogo dark size={32} />
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.55, maxWidth: 320 }}>
              Fabricantes de moldes para inyección de plástico. León, Guanajuato.
            </p>
            <div style={{ marginTop: 18 }}><MarcaGTO size={48} /></div>
          </div>
          {[
            { t: 'Servicios', items: ['Moldes inyección', 'Maquinado CNC', 'Diseño 3D', 'Escaneo 3D', 'Impresión 3D'] },
            { t: 'Empresa', items: ['Quiénes somos', 'Portafolio', 'Proceso', 'Contacto'] },
            { t: 'Contacto', items: ['León, Guanajuato, MX', 'contacto@viamoldes.com', '+52 477 000 0000', 'L-V 8:00–18:00'] },
          ].map(col => (
            <div key={col.t}>
              <div data-mono style={{ color: accent, marginBottom: 16 }}>{col.t}</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {col.items.map(it => <div key={it} style={{ fontSize: 13 }}>{it}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(245,243,238,.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <div data-mono style={{ fontSize: 11, color: 'rgba(245,243,238,.5)' }}>© 2026 VÍA MOLDES Y MAQUETAS</div>
          <div style={{ display: 'flex', gap: 18, fontSize: 12 }}>
            <a href="#" style={{ color: 'rgba(245,243,238,.5)' }}>Aviso de privacidad</a>
            <a href="#" style={{ color: 'rgba(245,243,238,.5)' }}>Facebook</a>
            <a href="#" style={{ color: 'rgba(245,243,238,.5)' }}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DirectionB({ accent = 'var(--vm-gold)' }) {
  const [scrolled, setScrolled] = useStateB(false);
  const [quoteOpen, setQuoteOpen] = useStateB(false);
  const containerRef = useRefB(null);

  useEffectB(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 30);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vm" ref={containerRef} style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', background: 'var(--vm-paper)' }}>
      <NavB onQuote={() => setQuoteOpen(true)} scrolled={scrolled} accent={accent} />
      <HeroB onQuote={() => setQuoteOpen(true)} accent={accent} />
      <ServicesB accent={accent} />
      <ProcessB accent={accent} />
      <PortfolioB accent={accent} />
      <SectorsB accent={accent} />
      <WhyB accent={accent} />
      <FaqB accent={accent} />
      <CtaB onQuote={() => setQuoteOpen(true)} accent={accent} />
      <FooterB accent={accent} />
      <WhatsAppFAB />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}

window.DirectionB = DirectionB;
