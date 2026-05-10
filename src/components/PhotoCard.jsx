export default function PhotoCard({ src, alt = "", style, children, overlay, className = "" }) {
  return (
    <div className={`photo-card ${className}`} style={style}>
      <div
        className="photo-bg"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={alt}
      />
      {overlay && <div className="photo-overlay" style={{ background: overlay }} />}
      {children}
    </div>
  );
}
