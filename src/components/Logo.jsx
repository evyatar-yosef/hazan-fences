export default function Logo({ tone = "light", compact = false }) {
  const fg = tone === "light" ? "#0b0d10" : "#ffffff";
  const accent = "#f39c12";

  if (compact) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <LogoMark fg={fg} accent={accent} size={36} />
      </div>
    );
  }

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <LogoMark fg={fg} accent={accent} size={44} />
      <div style={{ lineHeight: 0.95 }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em", color: fg }}>
          חזן<span style={{ color: accent }}>.</span>גדרות
        </div>
        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.22em", color: fg, opacity: 0.6, marginTop: 3 }}>
          HAZAN · FENCING SYSTEMS
        </div>
      </div>
    </div>
  );
}

function LogoMark({ fg = "#0b0d10", accent = "#f39c12", size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" style={{ display: "block" }}>
      <rect x="0" y="0" width="44" height="44" fill={fg} />
      <g>
        <rect x="0" y="36" width="44" height="8" fill={accent} />
        <g fill={fg}>
          <polygon points="0,36 6,36 0,44" />
          <polygon points="8,44 14,36 20,36 14,44" />
          <polygon points="22,44 28,36 34,36 28,44" />
          <polygon points="36,44 44,36 44,44" />
        </g>
      </g>
      <path d="M 8 8 L 8 30 M 36 8 L 36 30 M 8 8 L 36 8" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="square" />
      <rect x="7" y="7" width="4" height="4" fill={accent} />
      <rect x="33" y="7" width="4" height="4" fill={accent} />
    </svg>
  );
}
