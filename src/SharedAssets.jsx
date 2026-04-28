// SharedAssets.jsx — placeholders, SVG técnicos, iconos
// Exposes: VMIcons, VMPlaceholder, VMBlueprint, VMMoldRender, VMLogo
// All shared between Direction A and Direction B.

const { useState, useEffect, useRef } = React;

// ─── Logo / Wordmark ──────────────────────────────────────────────
function VMLogo({ size = 36, dark = false, showText = true }) {
  const fg = dark ? 'var(--vm-paper)' : 'var(--vm-navy-900)';
  const accent = 'var(--vm-gold)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect x="1" y="1" width="38" height="38" rx="3" stroke={fg} strokeWidth="1.5" />
        <path d="M8 12 L20 28 L32 12" stroke={fg} strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
        <circle cx="20" cy="32" r="2" fill={accent} />
      </svg>
      {showText && (
        <div style={{ lineHeight: 1, fontFamily: 'var(--vm-font-display)' }}>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em', color: fg }}>VÍA</div>
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: dark ? 'rgba(245,243,238,.6)' : 'var(--vm-muted)', marginTop: 2 }}>MOLDES &amp; MAQUETAS</div>
        </div>
      )}
    </div>
  );
}

// ─── Marca GTO Badge ─────────────────────────────────────────────
function MarcaGTO({ size = 60, mono = false }) {
  const c = mono ? 'currentColor' : 'var(--vm-gold)';
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="28" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="30" cy="30" r="22" stroke={c} strokeWidth="0.5" fill="none" />
      <text x="30" y="26" textAnchor="middle" fontFamily="var(--vm-font-display)" fontWeight="800" fontSize="13" fill={c} letterSpacing="0.05em">GTO</text>
      <text x="30" y="38" textAnchor="middle" fontFamily="var(--vm-font-mono)" fontSize="5" fill={c} letterSpacing="0.18em">MARCA · OFICIAL</text>
      <path d="M14 44 L30 50 L46 44" stroke={c} strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// ─── Iconos industriales (line, 1.5px) ────────────────────────────
const VMIcons = {
  Mold: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <rect x="4" y="8" width="24" height="16" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <rect x="11" y="11" width="10" height="2" fill="currentColor" />
      <rect x="11" y="19" width="10" height="2" fill="currentColor" />
      <line x1="2" y1="6" x2="2" y2="26" />
      <line x1="30" y1="6" x2="30" y2="26" />
    </svg>
  ),
  CNC: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <rect x="3" y="4" width="26" height="20" />
      <line x1="3" y1="10" x2="29" y2="10" />
      <line x1="16" y1="10" x2="16" y2="20" />
      <circle cx="16" cy="20" r="2" fill="currentColor" />
      <line x1="10" y1="28" x2="22" y2="28" />
      <line x1="13" y1="24" x2="13" y2="28" />
      <line x1="19" y1="24" x2="19" y2="28" />
    </svg>
  ),
  Cube3D: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" {...props}>
      <path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z" />
      <path d="M16 4 L16 16 M4 10 L16 16 M28 10 L16 16 M16 16 L16 28" />
    </svg>
  ),
  Scan: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <path d="M4 8 V4 H8 M24 4 H28 V8 M28 24 V28 H24 M8 28 H4 V24" />
      <ellipse cx="16" cy="16" rx="9" ry="4" />
      <line x1="7" y1="16" x2="25" y2="16" strokeDasharray="2 2" />
    </svg>
  ),
  Print3D: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <rect x="4" y="6" width="24" height="14" />
      <line x1="10" y1="20" x2="10" y2="26" />
      <line x1="22" y1="20" x2="22" y2="26" />
      <line x1="6" y1="26" x2="26" y2="26" />
      <rect x="13" y="10" width="6" height="6" fill="currentColor" />
    </svg>
  ),
  Maqueta: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" {...props}>
      <path d="M16 4 L26 9 L26 21 L16 26 L6 21 L6 9 Z" />
      <path d="M6 9 L16 14 L26 9 M16 14 L16 26" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  Arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <path d="M5 12 H19 M14 7 L19 12 L14 17" />
    </svg>
  ),
  Plus: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Minus: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Close: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  ),
  WhatsApp: (props) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 2C8.27 2 2 8.27 2 16c0 2.49.65 4.83 1.79 6.86L2 30l7.31-1.92C11.27 29.32 13.58 30 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5c-2.18 0-4.21-.61-5.94-1.66l-.42-.25-4.34 1.14 1.16-4.23-.27-.43A11.45 11.45 0 014.5 16C4.5 9.66 9.66 4.5 16 4.5S27.5 9.66 27.5 16 22.34 27.5 16 27.5zm6.32-8.6c-.34-.17-2.04-1.01-2.36-1.13-.32-.12-.55-.17-.78.17-.23.34-.89 1.13-1.1 1.36-.2.23-.4.26-.74.09-.34-.17-1.45-.54-2.76-1.7-1.02-.91-1.7-2.04-1.91-2.38-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59l-.66-.01c-.23 0-.6.09-.91.43-.32.34-1.2 1.18-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.86 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.04-.83 2.32-1.64.29-.81.29-1.5.2-1.65-.09-.14-.31-.23-.65-.4z"/>
    </svg>
  ),
  Check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...props}>
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  ),
  Pin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 2 C8.13 2 5 5.13 5 9 c0 5.25 7 13 7 13 s7-7.75 7-13 c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

// ─── Placeholder image (industrial / blueprint style) ─────────────
function VMPlaceholder({ label, sub, kind = 'photo', dark = false, aspect = '4/3', tags = [] }) {
  const palettes = {
    photo: { bg: '#1a2236', ink: '#9aa3ad', accent: '#c9a557' },
    blueprint: { bg: '#0e1628', ink: '#5b86b8', accent: '#9ec5ee' },
    paper: { bg: '#ebe7df', ink: '#5a6275', accent: '#b56a3a' },
  };
  const p = palettes[kind] || palettes.photo;
  return (
    <div style={{
      position: 'relative',
      aspectRatio: aspect,
      width: '100%',
      background: p.bg,
      color: p.ink,
      overflow: 'hidden',
      borderRadius: 'var(--vm-radius-sm)',
    }}>
      {/* tech grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${kind === 'paper' ? 'rgba(19,23,34,.05)' : 'rgba(255,255,255,.05)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${kind === 'paper' ? 'rgba(19,23,34,.05)' : 'rgba(255,255,255,.05)'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />
      {/* corner ticks */}
      <div style={{ position: 'absolute', top: 12, left: 12, color: p.accent }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 6 H6 V0" /></svg>
      </div>
      <div style={{ position: 'absolute', top: 12, right: 12, color: p.accent }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 6 H8 V0" /></svg>
      </div>
      <div style={{ position: 'absolute', bottom: 12, left: 12, color: p.accent }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 8 H6 V14" /></svg>
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 12, color: p.accent }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 8 H8 V14" /></svg>
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: 24,
      }}>
        <div style={{ fontFamily: 'var(--vm-font-mono)', fontSize: 10, letterSpacing: '0.2em', color: p.accent, marginBottom: 12, textTransform: 'uppercase' }}>
          [ IMG · {kind === 'photo' ? 'PHOTO' : kind === 'blueprint' ? 'BLUEPRINT' : 'TECH'} ]
        </div>
        <div style={{ fontFamily: 'var(--vm-font-display)', fontSize: 18, fontWeight: 600, color: kind === 'paper' ? 'var(--vm-ink)' : 'var(--vm-paper)', letterSpacing: '-0.01em', marginBottom: sub ? 6 : 0 }}>
          {label}
        </div>
        {sub && <div style={{ fontSize: 12, color: p.ink, maxWidth: 280 }}>{sub}</div>}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            {tags.map((t, i) => (
              <span key={i} style={{ fontFamily: 'var(--vm-font-mono)', fontSize: 9, padding: '3px 8px', border: `1px solid ${p.accent}`, color: p.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* footer dimensions stripe */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 22,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 14px',
        fontFamily: 'var(--vm-font-mono)', fontSize: 9, letterSpacing: '0.16em',
        color: p.ink, borderTop: `1px solid ${kind === 'paper' ? 'rgba(19,23,34,.1)' : 'rgba(255,255,255,.08)'}`,
        textTransform: 'uppercase',
      }}>
        <span>VM-{String(Math.abs((label || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 9999).padStart(4, '0')}</span>
        <span>SCALE 1:1</span>
      </div>
    </div>
  );
}

// ─── Mold technical SVG (decorative) ─────────────────────────────
function VMMoldDiagram({ color = 'currentColor', accent = 'var(--vm-gold)', style }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" style={style}>
      {/* Frame */}
      <rect x="20" y="40" width="360" height="200" stroke={color} strokeWidth="1" />
      {/* Mold halves */}
      <rect x="60" y="80" width="280" height="60" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="60" y="140" width="280" height="60" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Cavity */}
      <path d="M120 110 Q150 95 200 95 Q250 95 280 110 L280 130 Q250 145 200 145 Q150 145 120 130 Z" stroke={accent} strokeWidth="1.5" fill="none" />
      <path d="M120 150 Q150 165 200 165 Q250 165 280 150 L280 170 Q250 185 200 185 Q150 185 120 170 Z" stroke={accent} strokeWidth="1.5" fill="none" />
      {/* Sprue */}
      <line x1="200" y1="40" x2="200" y2="80" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="200" cy="80" r="3" fill={accent} />
      {/* Ejector pins */}
      {[100, 160, 240, 300].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="200" x2={x} y2="240" stroke={color} strokeWidth="0.8" />
          <circle cx={x} cy="200" r="2" fill={color} />
        </g>
      ))}
      {/* Dimension line */}
      <line x1="20" y1="20" x2="380" y2="20" stroke={color} strokeWidth="0.5" />
      <line x1="20" y1="15" x2="20" y2="25" stroke={color} strokeWidth="0.5" />
      <line x1="380" y1="15" x2="380" y2="25" stroke={color} strokeWidth="0.5" />
      <text x="200" y="14" textAnchor="middle" fontSize="8" fill={color} fontFamily="var(--vm-font-mono)" letterSpacing="0.1em">360 mm</text>

      {/* Side dimension */}
      <line x1="395" y1="40" x2="395" y2="240" stroke={color} strokeWidth="0.5" />
      <text x="392" y="145" textAnchor="end" fontSize="8" fill={color} fontFamily="var(--vm-font-mono)" letterSpacing="0.1em" transform="rotate(-90 392 145)">200 mm</text>

      {/* Labels */}
      <text x="30" y="70" fontSize="8" fill={accent} fontFamily="var(--vm-font-mono)" letterSpacing="0.12em">CAVITY · A</text>
      <text x="30" y="225" fontSize="8" fill={accent} fontFamily="var(--vm-font-mono)" letterSpacing="0.12em">CORE · B</text>
    </svg>
  );
}

// ─── Footwear sole / heel placeholder SVG ─────────────────────────
function VMSoleDiagram({ color = 'currentColor', accent = 'var(--vm-gold)', style }) {
  return (
    <svg viewBox="0 0 200 280" fill="none" style={style}>
      <path d="M70 30 Q100 25 130 35 Q150 45 152 90 Q148 130 145 170 Q142 220 130 250 Q100 262 70 250 Q58 220 55 170 Q52 130 48 90 Q50 45 70 30 Z"
        stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M80 50 Q100 48 120 52 Q130 90 125 150 Q120 210 100 240 Q80 210 75 150 Q70 90 80 50 Z"
        stroke={accent} strokeWidth="1" fill="none" strokeDasharray="2 2" />
      {/* Tread pattern */}
      {[80, 110, 140, 170, 200, 230].map((y, i) => (
        <line key={i} x1="65" y1={y} x2="135" y2={y} stroke={color} strokeWidth="0.5" opacity="0.5" />
      ))}
      {/* Crosshair */}
      <circle cx="100" cy="140" r="6" stroke={accent} strokeWidth="1" fill="none" />
      <line x1="92" y1="140" x2="108" y2="140" stroke={accent} strokeWidth="1" />
      <line x1="100" y1="132" x2="100" y2="148" stroke={accent} strokeWidth="1" />
      {/* Label */}
      <text x="100" y="20" textAnchor="middle" fontSize="8" fill={accent} fontFamily="var(--vm-font-mono)" letterSpacing="0.12em">SUELA · 7.5 MX</text>
    </svg>
  );
}

Object.assign(window, { VMLogo, MarcaGTO, VMIcons, VMPlaceholder, VMMoldDiagram, VMSoleDiagram });
