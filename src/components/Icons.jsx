// All SVG icons — industrial, geometric style
const icons = {
  phone: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  whatsapp: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12l-1 3.7 3.8-1A7.94 7.94 0 0 0 20 12a7.85 7.85 0 0 0-2.4-5.7zM12 18.5a6.55 6.55 0 0 1-3.3-.9l-.2-.1-2.2.6.6-2.1-.1-.2A6.5 6.5 0 1 1 18.5 12a6.57 6.57 0 0 1-6.5 6.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.5.1-.5.6-.7.8-.3.1-.5 0a5.6 5.6 0 0 1-1.6-1 6.13 6.13 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.5.5 0 0 0 0-.4c0-.1-.5-1.2-.6-1.6s-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.8 4.4 4.4 0 0 0 .9 2.3 9.5 9.5 0 0 0 3.7 3.2 4.46 4.46 0 0 0 2.1.4 1.8 1.8 0 0 0 1.2-.9 1.6 1.6 0 0 0 .1-.9c-.1 0-.2-.1-.4-.2z" />
    </svg>
  ),
  arrow: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  ),
  arrowR: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  download: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  ),
  shield: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
    </svg>
  ),
  truck: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 7h13v10H1zM14 10h5l3 3v4h-8zM5.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  ),
  clock: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  check: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12l5 5L20 7" />
    </svg>
  ),
  wrench: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 0 0 5.05 5.05L22 13.6 13.6 22l-2.25-2.25a4 4 0 0 0-5.05-5.05L4 12.4 12.4 4z" />
    </svg>
  ),
  medal: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="14" r="6" /><path d="M8 14l-3-9M16 14l3-9M9 5h6" />
    </svg>
  ),
  menu: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  x: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  fence: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4v16M10 4v16M16 4v16M22 4v16M4 8h18M4 16h18M4 4l3 2M10 4l3 2M16 4l3 2M22 4l-3-2" />
    </svg>
  ),
  spark: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

export default icons;
