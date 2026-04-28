// QuoteModal.jsx — Modal de cotización con validación
// Shared between both directions

const { useState: useStateQ, useEffect: useEffectQ } = React;

function QuoteModal({ open, onClose }) {
  const [step, setStep] = useStateQ(1);
  const [form, setForm] = useStateQ({
    nombre: '', empresa: '', email: '', telefono: '',
    servicio: '', sector: 'calzado', volumen: '', plazo: '', mensaje: '',
  });
  const [errors, setErrors] = useStateQ({});
  const [submitted, setSubmitted] = useStateQ(false);

  useEffectQ(() => {
    if (open) { setStep(1); setSubmitted(false); setErrors({}); }
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const validate1 = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!form.empresa.trim()) e.empresa = 'Requerido';
    if (!form.email.trim()) e.email = 'Requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo no válido';
    if (!form.telefono.trim()) e.telefono = 'Requerido';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const validate2 = () => {
    const e = {};
    if (!form.servicio) e.servicio = 'Selecciona un servicio';
    if (!form.plazo) e.plazo = 'Selecciona un plazo';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (step === 1 && validate1()) setStep(2); else if (step === 2 && validate2()) setStep(3); };
  const submit = () => { setSubmitted(true); setStep(4); };

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const labelStyle = { fontFamily: 'var(--vm-font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--vm-muted)', textTransform: 'uppercase', marginBottom: 6, display: 'block' };
  const inputStyle = (err) => ({
    width: '100%', padding: '12px 14px', fontFamily: 'var(--vm-font-body)', fontSize: 15,
    background: 'var(--vm-paper)', border: `1.5px solid ${err ? '#c0392b' : 'rgba(19,23,34,.18)'}`,
    borderRadius: 'var(--vm-radius-sm)', color: 'var(--vm-ink)', outline: 'none',
    transition: 'border-color .15s',
  });
  const errStyle = { color: '#c0392b', fontSize: 11, marginTop: 4, fontFamily: 'var(--vm-font-mono)', letterSpacing: '0.05em' };

  const services = [
    { id: 'molde', label: 'Molde de inyección' },
    { id: 'cnc', label: 'Maquinado CNC' },
    { id: 'diseno', label: 'Diseño 3D' },
    { id: 'escaneo', label: 'Escaneo 3D' },
    { id: 'impresion', label: 'Impresión 3D' },
    { id: 'maqueta', label: 'Maqueta / Prototipo' },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(11,17,30,.72)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      animation: 'vmFadeIn .2s ease',
    }} onClick={onClose}>
      <style>{`@keyframes vmFadeIn{from{opacity:0}to{opacity:1}}@keyframes vmSlideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--vm-paper)', maxWidth: 640, width: '100%',
        maxHeight: '90vh', overflow: 'auto',
        borderRadius: 'var(--vm-radius-lg)', boxShadow: 'var(--vm-shadow-lg)',
        animation: 'vmSlideUp .3s cubic-bezier(0.22, 1, 0.36, 1)',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{ padding: '28px 32px 20px', borderBottom: 'var(--vm-border-1)', position: 'relative' }}>
          <button onClick={onClose} aria-label="Cerrar" style={{
            position: 'absolute', top: 20, right: 20,
            width: 36, height: 36, border: 'none', background: 'transparent',
            display: 'grid', placeItems: 'center', borderRadius: 'var(--vm-radius-sm)',
            color: 'var(--vm-muted)',
          }}>
            <VMIcons.Close style={{ width: 20, height: 20 }} />
          </button>
          <div data-mono style={{ color: 'var(--vm-gold)', marginBottom: 8 }}>
            COTIZACIÓN · PASO {Math.min(step, 3)}/3
          </div>
          <h2 style={{ fontSize: 28, color: 'var(--vm-ink)' }}>
            {step === 4 ? 'Cotización recibida' : step === 1 ? 'Cuéntanos sobre ti' : step === 2 ? 'Detalles del proyecto' : 'Confirma y envía'}
          </h2>
          {/* Progress bar */}
          {step <= 3 && (
            <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  flex: 1, height: 3,
                  background: i <= step ? 'var(--vm-gold)' : 'rgba(19,23,34,.1)',
                  transition: 'background .3s',
                }} />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px' }}>
          {step === 1 && (
            <div style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Nombre completo *</label>
                  <input style={inputStyle(errors.nombre)} value={form.nombre} onChange={e => set('nombre', e.target.value)} placeholder="Juan Pérez" />
                  {errors.nombre && <div style={errStyle}>! {errors.nombre}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Empresa *</label>
                  <input style={inputStyle(errors.empresa)} value={form.empresa} onChange={e => set('empresa', e.target.value)} placeholder="Nombre de tu empresa" />
                  {errors.empresa && <div style={errStyle}>! {errors.empresa}</div>}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Correo electrónico *</label>
                <input type="email" style={inputStyle(errors.email)} value={form.email} onChange={e => set('email', e.target.value)} placeholder="contacto@empresa.com" />
                {errors.email && <div style={errStyle}>! {errors.email}</div>}
              </div>
              <div>
                <label style={labelStyle}>Teléfono / WhatsApp *</label>
                <input style={inputStyle(errors.telefono)} value={form.telefono} onChange={e => set('telefono', e.target.value)} placeholder="+52 477 000 0000" />
                {errors.telefono && <div style={errStyle}>! {errors.telefono}</div>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gap: 20 }}>
              <div>
                <label style={labelStyle}>¿Qué servicio necesitas? *</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {services.map(s => (
                    <button key={s.id} onClick={() => set('servicio', s.id)} style={{
                      padding: '12px 14px', textAlign: 'left',
                      background: form.servicio === s.id ? 'var(--vm-navy-900)' : 'var(--vm-paper)',
                      color: form.servicio === s.id ? 'var(--vm-paper)' : 'var(--vm-ink)',
                      border: `1.5px solid ${form.servicio === s.id ? 'var(--vm-navy-900)' : 'rgba(19,23,34,.15)'}`,
                      borderRadius: 'var(--vm-radius-sm)',
                      fontFamily: 'var(--vm-font-display)', fontWeight: 500, fontSize: 14,
                      transition: 'all .15s',
                    }}>{s.label}</button>
                  ))}
                </div>
                {errors.servicio && <div style={errStyle}>! {errors.servicio}</div>}
              </div>

              <div>
                <label style={labelStyle}>Sector</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[{ id: 'calzado', l: 'Calzado' }, { id: 'industrial', l: 'Industrial' }, { id: 'otro', l: 'Otro' }].map(o => (
                    <button key={o.id} onClick={() => set('sector', o.id)} style={{
                      flex: 1, padding: '10px', fontSize: 13,
                      background: form.sector === o.id ? 'var(--vm-gold)' : 'transparent',
                      color: form.sector === o.id ? 'var(--vm-navy-950)' : 'var(--vm-ink)',
                      border: `1.5px solid ${form.sector === o.id ? 'var(--vm-gold)' : 'rgba(19,23,34,.15)'}`,
                      borderRadius: 'var(--vm-radius-sm)', fontFamily: 'var(--vm-font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{o.l}</button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Plazo deseado *</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[{ id: 'urgente', l: '< 4 sem' }, { id: 'normal', l: '4-8 sem' }, { id: 'flexible', l: '+ 8 sem' }].map(o => (
                    <button key={o.id} onClick={() => set('plazo', o.id)} style={{
                      flex: 1, padding: '10px', fontSize: 13,
                      background: form.plazo === o.id ? 'var(--vm-navy-900)' : 'transparent',
                      color: form.plazo === o.id ? 'var(--vm-paper)' : 'var(--vm-ink)',
                      border: `1.5px solid ${form.plazo === o.id ? 'var(--vm-navy-900)' : 'rgba(19,23,34,.15)'}`,
                      borderRadius: 'var(--vm-radius-sm)', fontFamily: 'var(--vm-font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{o.l}</button>
                  ))}
                </div>
                {errors.plazo && <div style={errStyle}>! {errors.plazo}</div>}
              </div>

              <div>
                <label style={labelStyle}>Detalles del proyecto</label>
                <textarea style={{ ...inputStyle(false), minHeight: 100, resize: 'vertical', fontFamily: 'var(--vm-font-body)' }} value={form.mensaje} onChange={e => set('mensaje', e.target.value)} placeholder="Describe la pieza, dimensiones aprox., volumen estimado..." />
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: 'grid', gap: 14 }}>
              <div data-mono style={{ color: 'var(--vm-muted)', marginBottom: 4 }}>RESUMEN</div>
              {[
                ['Contacto', `${form.nombre} · ${form.empresa}`],
                ['Email', form.email],
                ['Teléfono', form.telefono],
                ['Servicio', services.find(s => s.id === form.servicio)?.label || '—'],
                ['Sector', form.sector],
                ['Plazo', form.plazo],
                ['Detalles', form.mensaje || '—'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '10px 0', borderBottom: 'var(--vm-border-1)' }}>
                  <div data-mono style={{ color: 'var(--vm-muted)' }}>{k}</div>
                  <div style={{ color: 'var(--vm-ink)', fontSize: 14 }}>{v}</div>
                </div>
              ))}
              <div style={{ background: 'var(--vm-paper-2)', padding: 16, fontSize: 13, color: 'var(--vm-muted)', borderRadius: 'var(--vm-radius-sm)', borderLeft: '3px solid var(--vm-gold)' }}>
                Recibirás respuesta en menos de 24 hrs hábiles. Para urgencias, escríbenos por WhatsApp.
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '20px 0 10px' }}>
              <div style={{ width: 64, height: 64, background: 'var(--vm-gold)', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 20px', color: 'var(--vm-navy-950)' }}>
                <VMIcons.Check style={{ width: 32, height: 32 }} />
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 10, color: 'var(--vm-ink)' }}>¡Cotización enviada, {form.nombre.split(' ')[0]}!</h3>
              <p style={{ color: 'var(--vm-muted)', maxWidth: 380, margin: '0 auto 20px' }}>
                Nuestro equipo técnico revisará tu proyecto y te contactará en menos de 24 hrs hábiles.
              </p>
              <div data-mono style={{ color: 'var(--vm-gold)' }}>
                FOLIO · VM-{String(Date.now()).slice(-6)}
              </div>
            </div>
          )}
        </div>

        {/* Footer / actions */}
        {step <= 3 && (
          <div style={{ padding: '20px 32px 28px', borderTop: 'var(--vm-border-1)', display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}>
            <button onClick={step === 1 ? onClose : () => setStep(step - 1)} style={{
              background: 'transparent', border: 'none', color: 'var(--vm-muted)',
              fontFamily: 'var(--vm-font-display)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 0',
            }}>{step === 1 ? '← Cancelar' : '← Atrás'}</button>
            <button className="vm-btn vm-btn-primary" onClick={step === 3 ? submit : next}>
              {step === 3 ? 'Enviar cotización' : 'Continuar'} <VMIcons.Arrow style={{ width: 16, height: 16 }} />
            </button>
          </div>
        )}
        {step === 4 && (
          <div style={{ padding: '20px 32px 28px', borderTop: 'var(--vm-border-1)', display: 'flex', justifyContent: 'center' }}>
            <button className="vm-btn vm-btn-outline-dark" onClick={onClose}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── WhatsApp floating button ─────────────────────────────────────
function WhatsAppFAB() {
  return (
    <a href="https://wa.me/524770000000?text=Hola%2C%20me%20interesa%20cotizar%20un%20molde" target="_blank" rel="noopener" style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 50,
      width: 60, height: 60, borderRadius: '50%',
      background: 'var(--vm-whatsapp)', color: 'white',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 6px 20px rgba(37,211,102,.4), 0 2px 6px rgba(0,0,0,.2)',
      transition: 'transform .2s, box-shadow .2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
      <VMIcons.WhatsApp style={{ width: 30, height: 30 }} />
      <span style={{ position: 'absolute', top: 0, right: 0, width: 14, height: 14, background: '#c0392b', borderRadius: '50%', border: '2px solid var(--vm-paper)' }} />
    </a>
  );
}

Object.assign(window, { QuoteModal, WhatsAppFAB });
