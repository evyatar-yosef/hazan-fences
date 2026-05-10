import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icons from './Icons';
import { NAV_ITEMS, CONTACT_INFO } from '../data/siteData';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="site-header">
      {/* Top Info Bar */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <div className="mono header-locations">מודיעין · תל אביב · חיפה · באר שבע</div>
          <div className="header-topbar-right mono">
            <span>EN</span>
            <span className="divider">│</span>
            <span>א-ה 07:00–19:00</span>
            <span className="divider">│</span>
            <span className="header-status">● זמין עכשיו</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <div className="container header-main-inner">
          <Link to="/" className="header-logo" aria-label="חזן גדרות — דף הבית">
            <Logo tone="light" />
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav desktop-only" aria-label="ניווט ראשי">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`header-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a href={`tel:${CONTACT_INFO.phone}`} className="header-phone mono desktop-only" dir="ltr">
              {CONTACT_INFO.phone.replace(/-/g, '·')}
            </a>
            <Link to="/contact" className="btn btn-blue header-cta desktop-only">
              הצעת מחיר
            </Link>
            <button
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
              aria-expanded={mobileOpen}
              id="mobile-menu-toggle"
            >
              {mobileOpen ? Icons.x(24) : Icons.menu(24)}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        <nav className="mobile-nav" aria-label="ניווט נייד">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href={`tel:${CONTACT_INFO.phone}`} className="mobile-phone mono" dir="ltr">
            {CONTACT_INFO.phone}
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            הצעת מחיר ←
          </Link>
        </div>
      </div>
    </header>
  );
}
