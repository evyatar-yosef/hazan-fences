import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CATEGORIES, FOOTER_LINKS, CONTACT_INFO } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Logo tone="dark" />
            <p className="footer-desc">
              חזן פתרונות בתנועה — גידור מקצה לקצה. השכרה, מכירה, התקנה ופירוק לאתרי בנייה, אירועים ותשתיות מאז 2002.
            </p>
            <div className="footer-contact-info mono">
              <div className="footer-phone" dir="ltr">{CONTACT_INFO.phone.replace(/-/g, '·')}</div>
              <div className="footer-email">{CONTACT_INFO.email.toUpperCase()}</div>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer-col">
            <div className="footer-col-title mono">מוצרים</div>
            {CATEGORIES.slice(0, 6).map(c => (
              <Link key={c.id} to="/category" className="footer-link">{c.name}</Link>
            ))}
          </div>

          {/* SEO Links Column */}
          <div className="footer-col">
            <div className="footer-col-title mono">דפי SEO</div>
            {FOOTER_LINKS.slice(0, 6).map(l => (
              <span key={l} className="footer-link">{l}</span>
            ))}
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <div className="footer-col-title mono">יצירת קשר</div>
            <div className="footer-address">
              <div>{CONTACT_INFO.address}</div>
              <div dir="ltr" style={{ textAlign: "right" }}>{CONTACT_INFO.phone.replace(/-/g, '·')}</div>
              <div>{CONTACT_INFO.email}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mono">
          <span>© 2026 חזן פתרונות בתנועה</span>
          <span className="footer-bottom-links">
            <Link to="/">מדיניות פרטיות</Link>
            <span className="footer-dot"> · </span>
            <Link to="/">הצהרת נגישות</Link>
            <span className="footer-dot"> · </span>
            <Link to="/">תקנון</Link>
            <span className="footer-dot"> · </span>
            <Link to="/">מפת אתר</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
