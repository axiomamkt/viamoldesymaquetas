// DirectionA.jsx — Sobria · Retícula estricta · Editorial-industrial
// Tipografía dominante, layout estructurado, dorado discreto
// Exposes: DirectionA component (the full landing as a single React component)

const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

// Sticky nav with scroll behavior
function NavA({ onQuote, scrolled, accent }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(245,243,238,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
      borderBottom: scrolled ? 'var(--vm-border-1)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div className="vm-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <VMLogo size={32} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Servicios', 'Portafolio', 'Proceso', 'Quiénes somos'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s|ó/g, m => m === 'ó' ? 'o' : '-')}`} style={{
              fontSize: 13, fontFamily: 'var(--vm-font-display)', fontWeight: 500,
              letterSpacing: '0.04em', color: 'var(--vm-ink-2)',
            }}>{l}</a>
          ))}
          <button className="vm-btn vm-btn-primary" onClick={onQuote} style={{ padding: '10px 18px', fontSize: 12, background: accent }}>
            Cotizar <VMIcons.Arrow style={{ width: 14, height: 14 }} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroA({ onQuote, accent }) {
  return (
    <section style={{ position: 'relative', background: 'var(--vm-navy-900)', color: 'var(--vm-paper)', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .8 }} />
      {/* Big mold diagram bg */}
      <div style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', width: 720, opacity: .14, color: 'var(--vm-steel)', pointerEvents: 'none' }}>
        <VMMoldDiagram color="currentColor" accent={accent} />
      </div>

      <div className="vm-container" style={{ position: 'relative', zIndex: 2, padding: '120px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: 60, alignItems: 'end' }}>
          <div>
            <div data-mono style={{ color: accent, marginBottom: 28, display: 'flex', gap: 18, alignItems: 'center' }}>
              <span>León · Guanajuato · MX</span>
              <span style={{ width: 24, height: 1, background: accent }} />
              <span>EST. 2018</span>
            </div>
            <h1 style={{ fontSize: 'var(--vm-fs-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.96, marginBottom: 28 }}>
              Moldes de inyección<br/>
              <span style={{ color: accent, fontStyle: 'italic', fontWeight: 400 }}>diseñados</span> para la industria del calzado.
            </h1>
            <p style={{ fontSize: 19, color: 'rgba(245,243,238,.72)', maxWidth: 560, marginBottom: 40, lineHeight: 1.5 }}>
              Fabricantes con +7 años de experiencia y más de 50 clientes en México. Maquinado CNC, diseño 3D y prototipado bajo el distintivo Marca GTO.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="vm-btn vm-btn-primary" onClick={onQuote} style={{ background: accent }}>
                Solicitar cotización <VMIcons.Arrow style={{ width: 16, height: 16 }} />
              </button>
              <a href="#portafolio" className="vm-btn vm-btn-outline">Ver portafolio</a>
            </div>
          </div>

          {/* Floating GTO badge card */}
          <div style={{
            background: 'rgba(245,243,238,.06)', border: '1px solid rgba(245,243,238,.14)',
            padding: 24, position: 'relative', backdropFilter: 'blur(8px)',
          }}>
            <div className="vm-tick vm-tick-tl" style={{ color: accent }} />
            <div className="vm-tick vm-tick-tr" style={{ color: accent }} />
            <div className="vm-tick vm-tick-bl" style={{ color: accent }} />
            <div className="vm-tick vm-tick-br" style={{ color: accent }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <MarcaGTO size={48} />
              <div>
                <div data-mono style={{ color: accent, marginBottom: 4 }}>CERTIFICADO</div>
                <div style={{ fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 16 }}>Marca GTO</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(245,243,238,.6)', lineHeight: 1.5 }}>
              Distintivo oficial otorgado a empresas guanajuatenses con altos estándares de calidad y trayectoria.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom dimension strip */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 32px', borderTop: '1px solid rgba(245,243,238,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div data-mono style={{ color: 'rgba(245,243,238,.5)' }}>SCROLL ↓ ESPECIFICACIONES</div>
        <div data-mono style={{ color: 'rgba(245,243,238,.5)' }}>VMM · 01/12</div>
      </div>
    </section>
  );
}

function StatsA({ accent }) {
  const stats = [
    ['+7', 'AÑOS', 'Trayectoria fabricando moldes en Guanajuato'],
    ['+50', 'CLIENTES', 'Empresas confían en nuestros procesos'],
    ['6', 'SERVICIOS', 'Soluciones técnicas integrales'],
    ['100%', 'NACIONAL', 'Cobertura en sector calzado'],
  ];
  return (
    <section style={{ background: 'var(--vm-navy-950)', color: 'var(--vm-paper)', borderTop: '1px solid rgba(245,243,238,.08)' }}>
      <div className="vm-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '40px 28px',
              borderRight: i < 3 ? '1px solid rgba(245,243,238,.08)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--vm-font-display)', fontSize: 56, fontWeight: 800, color: accent, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>
                {s[0]}
              </div>
              <div data-mono style={{ color: 'rgba(245,243,238,.6)', marginBottom: 8 }}>{s[1]}</div>
              <div style={{ fontSize: 13, color: 'rgba(245,243,238,.6)', lineHeight: 1.4 }}>{s[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesA({ accent }) {
  const services = [
    { id: 1, num: '01', icon: 'Mold', title: 'Moldes de inyección', desc: 'Fabricación de moldes nuevos y mantenimiento. Aceros H13, P20, 1.2738 según requerimiento.', star: true, tags: ['ESTRELLA'] },
    { id: 2, num: '02', icon: 'CNC', title: 'Maquinado CNC', desc: '3, 4 y 5 ejes. Tolerancias de hasta ±0.01 mm para aplicaciones críticas.' },
    { id: 3, num: '03', icon: 'Cube3D', title: 'Diseño 3D', desc: 'Modelado paramétrico en SolidWorks. Validación de partibles y línea de partición.' },
    { id: 4, num: '04', icon: 'Scan', title: 'Escaneo 3D', desc: 'Ingeniería inversa de piezas existentes. Mallas STL y nubes de puntos.' },
    { id: 5, num: '05', icon: 'Print3D', title: 'Impresión 3D', desc: 'Prototipos funcionales en SLA, FDM y SLS para validación temprana.' },
    { id: 6, num: '06', icon: 'Maqueta', title: 'Maquetas', desc: 'Modelos físicos y prototipos a escala para presentación y validación de cliente.' },
  ];
  return (
    <section className="vm-section" id="servicios" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 60, alignItems: 'end' }}>
          <div>
            <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>SERVICIOS · 06</div>
            <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>Capacidades técnicas integrales</h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--vm-muted)', maxWidth: 480 }}>
            Cubrimos el ciclo completo: desde el escaneo o diseño inicial hasta el molde productivo y el primer disparo de inyección.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(19,23,34,.1)', border: 'var(--vm-border-1)' }}>
          {services.map(s => {
            const Icon = VMIcons[s.icon];
            return (
              <div key={s.id} style={{
                background: s.star ? 'var(--vm-navy-900)' : 'var(--vm-paper)',
                color: s.star ? 'var(--vm-paper)' : 'var(--vm-ink)',
                padding: 36, position: 'relative',
                gridColumn: s.star ? 'span 1' : 'span 1',
                minHeight: 280,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'background .2s',
              }}
              onMouseEnter={e => { if (!s.star) e.currentTarget.style.background = 'var(--vm-paper-2)'; }}
              onMouseLeave={e => { if (!s.star) e.currentTarget.style.background = 'var(--vm-paper)'; }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                    <div data-mono style={{ color: s.star ? accent : 'var(--vm-muted)' }}>{s.num}</div>
                    <Icon style={{ width: 36, height: 36, color: s.star ? accent : 'var(--vm-ink)' }} />
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 12, color: s.star ? 'var(--vm-paper)' : 'var(--vm-ink)' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: s.star ? 'rgba(245,243,238,.7)' : 'var(--vm-muted)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
                  <div className="vm-link" style={{ color: s.star ? accent : 'var(--vm-ink)', fontSize: 12 }}>
                    Ver detalle <VMIcons.Arrow style={{ width: 14, height: 14 }} />
                  </div>
                  {s.star && (
                    <span data-mono style={{ background: accent, color: 'var(--vm-navy-950)', padding: '4px 8px', fontSize: 9 }}>SERVICIO ESTRELLA</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessA({ accent }) {
  const steps = [
    { n: '01', t: 'Consulta inicial', d: 'Análisis del proyecto, requerimientos técnicos, materiales y volumen.' },
    { n: '02', t: 'Diseño 3D', d: 'Modelado CAD, simulación de flujo y validación de línea de partición.' },
    { n: '03', t: 'Maquinado CNC', d: 'Fabricación del molde en aceros de alta resistencia, programación CAM.' },
    { n: '04', t: 'Ensamble y pruebas', d: 'Pulido, ajuste de partibles, primer disparo de prueba y validación.' },
    { n: '05', t: 'Entrega y soporte', d: 'Documentación técnica, capacitación y soporte post-venta.' },
  ];
  return (
    <section className="vm-section" id="proceso" style={{ background: 'var(--vm-paper-2)' }}>
      <div className="vm-container">
        <div style={{ marginBottom: 60, maxWidth: 720 }}>
          <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>PROCESO DE TRABAJO</div>
          <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>De la idea al primer disparo, 5 etapas controladas.</h2>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 28, left: '5%', right: '5%', height: 1, background: 'rgba(19,23,34,.2)', zIndex: 0 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, position: 'relative', zIndex: 1 }}>
            {steps.map((s, i) => (
              <div key={i}>
                <div style={{
                  width: 56, height: 56, background: 'var(--vm-navy-900)', color: accent,
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 18,
                  borderRadius: '50%', marginBottom: 24,
                  boxShadow: '0 0 0 6px var(--vm-paper-2)',
                }}>{s.n}</div>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{s.t}</h3>
                <p style={{ fontSize: 13, color: 'var(--vm-muted)', lineHeight: 1.5 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioA({ accent }) {
  const projects = [
    { id: 1, title: 'Tacón clásico', cat: 'Calzado · Suela', year: '2025', spec: 'H13 · 4 cav.', big: true, kind: 'photo' },
    { id: 2, title: 'Plataforma EVA', cat: 'Calzado · Plataforma', year: '2024', spec: 'P20', kind: 'photo' },
    { id: 3, title: 'Cuña deportiva', cat: 'Calzado · Cuña', year: '2024', spec: '1.2738', kind: 'photo' },
    { id: 4, title: 'Carcasa industrial', cat: 'Industrial', year: '2024', spec: 'H13', kind: 'blueprint' },
    { id: 5, title: 'Suela técnica', cat: 'Calzado · Suela', year: '2023', spec: 'P20 · 2 cav.', kind: 'photo' },
    { id: 6, title: 'Tacón fashion', cat: 'Calzado · Tacón', year: '2025', spec: 'H13', kind: 'photo' },
  ];
  return (
    <section className="vm-section" id="portafolio" style={{ background: 'var(--vm-navy-950)', color: 'var(--vm-paper)' }}>
      <div className="vm-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 60, alignItems: 'end' }}>
          <div>
            <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>PORTAFOLIO · SELECCIÓN</div>
            <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>+50 proyectos<br/>fabricados.</h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'rgba(245,243,238,.7)', marginBottom: 20 }}>
              Una muestra del trabajo desarrollado para marcas nacionales del sector calzado y aplicaciones industriales.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Todos', 'Calzado', 'Industrial', '2025', '2024'].map((f, i) => (
                <button key={f} style={{
                  padding: '8px 14px', fontSize: 11, fontFamily: 'var(--vm-font-mono)', letterSpacing: '0.1em',
                  background: i === 0 ? accent : 'transparent', color: i === 0 ? 'var(--vm-navy-950)' : 'var(--vm-paper)',
                  border: `1px solid ${i === 0 ? accent : 'rgba(245,243,238,.2)'}`,
                  textTransform: 'uppercase',
                }}>{f}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
          {projects.map((p, i) => (
            <PortfolioCardA key={p.id} project={p} index={i} accent={accent} />
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="#" className="vm-btn vm-btn-outline">Ver portafolio completo →</a>
        </div>
      </div>
    </section>
  );
}

function PortfolioCardA({ project, index, accent }) {
  const [hover, setHover] = useStateA(false);
  // Span: big card spans 3 cols x 2 rows; others span 2 cols
  const span = project.big ? { gridColumn: 'span 3', gridRow: 'span 2' } : { gridColumn: 'span 2' };
  return (
    <div style={{ ...span, position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <VMPlaceholder label={project.title} sub={project.cat} kind={project.kind} aspect={project.big ? '4/3' : '4/3'} tags={[project.spec]} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hover ? 'rgba(11,17,30,.78)' : 'transparent',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 20, transition: 'background .25s', pointerEvents: 'none',
      }}>
        <div style={{
          opacity: hover ? 1 : 0, transform: hover ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all .25s ease',
        }}>
          <div data-mono style={{ color: accent, marginBottom: 8 }}>{project.year} · {project.spec}</div>
          <div style={{ fontFamily: 'var(--vm-font-display)', fontWeight: 700, fontSize: 22, color: 'var(--vm-paper)' }}>{project.title}</div>
          <div style={{ color: 'rgba(245,243,238,.7)', fontSize: 13, marginTop: 4 }}>{project.cat}</div>
        </div>
      </div>
    </div>
  );
}

function SectorsA({ accent }) {
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container">
        <div style={{ marginBottom: 50 }}>
          <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>SECTORES</div>
          <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>Especialistas en calzado, abiertos a la industria.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          {/* Calzado - main */}
          <div style={{ background: 'var(--vm-navy-900)', color: 'var(--vm-paper)', padding: 40, position: 'relative', overflow: 'hidden', minHeight: 380 }}>
            <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .4 }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', color: accent, opacity: .4 }}>
              <VMSoleDiagram color="var(--vm-steel)" accent={accent} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ position: 'relative', maxWidth: 460 }}>
              <div data-mono style={{ color: accent, marginBottom: 16 }}>SECTOR PRINCIPAL</div>
              <h3 style={{ fontSize: 'var(--vm-fs-h2)', marginBottom: 18 }}>Sector calzado</h3>
              <p style={{ fontSize: 16, color: 'rgba(245,243,238,.75)', marginBottom: 28, lineHeight: 1.55 }}>
                León es la capital del calzado en México. Conocemos el terreno: trabajamos con fábricas locales para tacones, plataformas, suelas, cuñas y componentes técnicos.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 360 }}>
                {['Tacones', 'Plataformas', 'Suelas', 'Cuñas'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(245,243,238,.85)' }}>
                    <span style={{ width: 6, height: 6, background: accent, borderRadius: '50%' }} /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: 'var(--vm-paper-2)', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 380 }}>
            <div>
              <div data-mono style={{ color: 'var(--vm-muted)', marginBottom: 16 }}>SECUNDARIO</div>
              <h3 style={{ fontSize: 28, marginBottom: 14 }}>Desarrollo industrial</h3>
              <p style={{ fontSize: 14, color: 'var(--vm-muted)', lineHeight: 1.55 }}>
                Aplicaciones diversas: piezas técnicas, carcasas, componentes plásticos para industria automotriz ligera y bienes de consumo.
              </p>
            </div>
            <div className="vm-link" style={{ color: 'var(--vm-ink)', fontSize: 12 }}>
              Hablemos de tu proyecto <VMIcons.Arrow style={{ width: 14, height: 14 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyA({ accent }) {
  const items = [
    { n: '01', t: 'Tecnología de punta', d: 'CNC de 5 ejes, escáner 3D industrial y software CAD/CAM de gama profesional.' },
    { n: '02', t: 'Especialistas en calzado', d: '+7 años enfocados en moldes para industria del calzado en León.' },
    { n: '03', t: 'Asesoría técnica integral', d: 'Acompañamiento desde la idea hasta el primer disparo de producción.' },
    { n: '04', t: 'Marca GTO certificada', d: 'Distintivo oficial que avala calidad, formalidad y origen guanajuatense.' },
  ];
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper-2)' }}>
      <div className="vm-container">
        <div style={{ marginBottom: 50, maxWidth: 720 }}>
          <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>POR QUÉ ELEGIRNOS</div>
          <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>4 razones técnicas, una sola promesa.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(19,23,34,.1)', border: 'var(--vm-border-1)' }}>
          {items.map(it => (
            <div key={it.n} style={{ background: 'var(--vm-paper)', padding: 32, minHeight: 240 }}>
              <div style={{ fontFamily: 'var(--vm-font-display)', fontSize: 56, fontWeight: 200, color: accent, lineHeight: 1, marginBottom: 24, letterSpacing: '-0.04em' }}>{it.n}</div>
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{it.t}</h3>
              <p style={{ fontSize: 13, color: 'var(--vm-muted)', lineHeight: 1.55 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqA({ accent }) {
  const faqs = [
    { q: '¿Cuánto tiempo tarda fabricar un molde?', a: 'Depende de complejidad y cavidades. Un molde simple para suela tarda entre 4 y 6 semanas; uno multi-cavidad complejo puede tomar 8 a 12 semanas.' },
    { q: '¿Trabajan solo con sector calzado?', a: 'Es nuestra especialidad pero también atendemos desarrollo industrial general: piezas técnicas, carcasas, componentes plásticos para diversas industrias.' },
    { q: '¿Qué información necesitan para cotizar?', a: 'Idealmente: archivo CAD 3D (STEP/IGES) o pieza física para escanear, volumen estimado anual, material de inyección y plazo objetivo.' },
    { q: '¿Hacen envíos fuera de León?', a: 'Sí. Entregamos en toda la República Mexicana y coordinamos exportación cuando es necesario.' },
    { q: '¿Cuál es el proceso desde la primera consulta?', a: 'Cotización en 24-48 hrs, diseño y aprobación, fabricación con reportes semanales, ensamble, pruebas y entrega con documentación técnica.' },
  ];
  const [open, setOpen] = useStateA(0);
  return (
    <section className="vm-section" style={{ background: 'var(--vm-paper)' }}>
      <div className="vm-container" style={{ maxWidth: 920 }}>
        <div style={{ marginBottom: 50 }}>
          <div className="vm-eyebrow" style={{ color: accent, marginBottom: 18 }}>PREGUNTAS FRECUENTES</div>
          <h2 style={{ fontSize: 'var(--vm-fs-h1)' }}>Lo que más nos preguntan.</h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderTop: 'var(--vm-border-2)', borderBottom: i === faqs.length - 1 ? 'var(--vm-border-2)' : 'none' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'transparent', border: 'none', textAlign: 'left',
                fontFamily: 'var(--vm-font-display)', fontWeight: 600, fontSize: 19, color: 'var(--vm-ink)',
              }}>
                <span style={{ display: 'flex', gap: 18, alignItems: 'baseline' }}>
                  <span data-mono style={{ color: accent }}>0{i + 1}</span>
                  {f.q}
                </span>
                <span style={{ color: accent, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s' }}>
                  <VMIcons.Plus style={{ width: 22, height: 22 }} />
                </span>
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease',
              }}>
                <p style={{ paddingBottom: 24, color: 'var(--vm-muted)', fontSize: 16, lineHeight: 1.6, paddingLeft: 56, maxWidth: 720 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaA({ onQuote, accent }) {
  return (
    <section style={{ background: 'var(--vm-navy-900)', color: 'var(--vm-paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="vm-techgrid" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
      <div className="vm-container" style={{ padding: '100px 32px', position: 'relative', textAlign: 'center' }}>
        <div className="vm-eyebrow" style={{ color: accent, marginBottom: 24, justifyContent: 'center', display: 'inline-flex' }}>SIGUIENTE PASO</div>
        <h2 style={{ fontSize: 'var(--vm-fs-display)', marginBottom: 32, maxWidth: 900, margin: '0 auto 32px' }}>
          ¿Listo para comenzar<br/>tu <span style={{ color: accent, fontStyle: 'italic', fontWeight: 400 }}>proyecto</span>?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(245,243,238,.7)', maxWidth: 540, margin: '0 auto 36px' }}>
          Cotización en 24 hrs hábiles. Sin compromiso.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="vm-btn vm-btn-primary" onClick={onQuote} style={{ background: accent }}>
            Solicitar cotización <VMIcons.Arrow style={{ width: 16, height: 16 }} />
          </button>
          <a href="https://wa.me/524770000000" target="_blank" className="vm-btn vm-btn-outline">
            <VMIcons.WhatsApp style={{ width: 16, height: 16 }} /> WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterA({ accent }) {
  return (
    <footer style={{ background: 'var(--vm-navy-950)', color: 'rgba(245,243,238,.7)', borderTop: '1px solid rgba(245,243,238,.08)' }}>
      <div className="vm-container" style={{ padding: '60px 32px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 50 }}>
          <div>
            <VMLogo dark size={32} />
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.55, maxWidth: 320 }}>
              Fabricantes de moldes para inyección de plástico. León, Guanajuato. +7 años especializados en sector calzado.
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
          <div data-mono style={{ fontSize: 11, color: 'rgba(245,243,238,.5)' }}>© 2026 VÍA MOLDES Y MAQUETAS · TODOS LOS DERECHOS RESERVADOS</div>
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

// ─── Main DirectionA composite ────────────────────────────────────
function DirectionA({ accent = 'var(--vm-gold)' }) {
  const [scrolled, setScrolled] = useStateA(false);
  const [quoteOpen, setQuoteOpen] = useStateA(false);
  const containerRef = useRefA(null);

  useEffectA(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 30);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vm" ref={containerRef} style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', background: 'var(--vm-paper)' }}>
      <NavA onQuote={() => setQuoteOpen(true)} scrolled={scrolled} accent={accent} />
      <HeroA onQuote={() => setQuoteOpen(true)} accent={accent} />
      <StatsA accent={accent} />
      <ServicesA accent={accent} />
      <ProcessA accent={accent} />
      <PortfolioA accent={accent} />
      <SectorsA accent={accent} />
      <WhyA accent={accent} />
      <FaqA accent={accent} />
      <CtaA onQuote={() => setQuoteOpen(true)} accent={accent} />
      <FooterA accent={accent} />
      <WhatsAppFAB />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}

window.DirectionA = DirectionA;
