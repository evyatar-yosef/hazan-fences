import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import Icons from '../components/Icons';
import { PHOTOS, CATEGORIES } from '../data/siteData';
import './Product.css';

const product = {
  id: "F-CON-2410", name: "גדר בנייה כבדה 2.4×1מ׳", cat: "גדרות לאתרי בנייה",
  desc: "גדר היקפית כבדה לאתרי בנייה פעילים, עם רגליות מגולוונות וחיבורי מיתר מהירים. עומדת בתקן ישראלי 4273. בשימוש על ידי שיכון ובינוי, אשטרום ודניה סיבוס.",
};
const specs = [["גובה","2.4 מ׳"],["אורך פאנל","2.4 מ׳"],["משקל","32 ק״ג"],["חומר","פלדה מגולוונת חמה"],["עובי תיל","4 מ״מ"],["צפיפות רשת","75×150 מ״מ"],["סוג בסיס","פלסטיק/בטון"],["תקן","ת״י 4273"]];
const features = ["עמיד בתנאי שטח קשים — חום, גשם, רוח עד 80 קמ״ש","רגליות פלסטיק כבדות עם מילוי חצץ או בטון","חיבורי מיתר מהירים ללא כלים","מותאם לתקני בטיחות העבודה הישראליים","אריזה אנכית — חוסך 60% מנפח האחסון"];
const useCases = [
  { t: "אתרי בנייה היקפיים", d: "גידור מלא של אתר במגדלים ופרויקטים גדולים", photo: PHOTOS.construction1 },
  { t: "תשתיות וכבישים", d: "הפרדה בין שטח עבודה לתנועה פעילה", photo: PHOTOS.road },
  { t: "אתרי הריסה", d: "מניעת גישה לאזור עבודה מסוכן", photo: PHOTOS.crane },
];

export default function Product() {
  return (
    <main>
      {/* Breadcrumb + Product */}
      <section className="prod-hero">
        <div className="container">
          <div className="page-hero-breadcrumbs mono">
            <Link to="/">בית</Link><span className="breadcrumb-sep">/</span>
            <Link to="/category">מוצרים</Link><span className="breadcrumb-sep">/</span>
            <span>גדרות לאתרי בנייה</span><span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active">{product.id}</span>
          </div>
          <div className="prod-layout">
            <div className="prod-gallery">
              <PhotoCard src={PHOTOS.construction1} style={{ height: 540 }}>
                <div className="prod-stock mono">במלאי · 240 יח׳</div>
              </PhotoCard>
              <div className="prod-thumbs">
                {[PHOTOS.construction2, PHOTOS.construction3, PHOTOS.crane, PHOTOS.site1].map((src, i) => (
                  <PhotoCard key={i} src={src} style={{ height: 100 }} className={i === 0 ? 'prod-thumb-active' : ''} />
                ))}
              </div>
            </div>
            <div className="prod-info">
              <div className="eyebrow mono">{product.cat.toUpperCase()} · #{product.id}</div>
              <h1 className="prod-title">{product.name}</h1>
              <p className="prod-desc">{product.desc}</p>
              <div className="prod-buttons">
                <Link to="/contact" className="btn btn-primary">קבל הצעת מחיר ←</Link>
                <Link to="/rental" className="btn btn-secondary">להשכרה</Link>
                <button className="btn btn-secondary prod-pdf-btn">{Icons.download(14)} מפרט PDF</button>
              </div>
              <div className="prod-specs">
                <div className="eyebrow mono">SPECIFICATIONS · מפרט</div>
                <table className="prod-specs-table">
                  <tbody>
                    {specs.map(([k, v], i) => (
                      <tr key={i}><td className="mono">{k}</td><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="prod-features">
        <div className="container">
          <div className="prod-features-layout">
            <ScrollReveal>
              <div className="eyebrow mono">FEATURES</div>
              <h2 className="section-title" style={{ fontSize: 44, lineHeight: 1 }}>למה בוחרים <strong>בה.</strong></h2>
            </ScrollReveal>
            <div className="prod-features-list">
              {features.map((f, i) => (
                <ScrollReveal key={i} delay={i + 1}>
                  <div className="prod-feature-item">
                    <div className="mono prod-feature-num">0{i + 1}</div>
                    <div>{f}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="prod-usecases">
        <div className="container">
          <div className="eyebrow mono">USE CASES · שימושים נפוצים</div>
          <h2 className="section-title" style={{ fontSize: 44, lineHeight: 1, marginBottom: 48 }}>איפה <strong>פוגשים אותה.</strong></h2>
          <div className="prod-usecases-grid">
            {useCases.map((u, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <PhotoCard src={u.photo} style={{ height: 280 }} overlay="linear-gradient(180deg, transparent 50%, rgba(11,13,16,0.85))">
                  <div className="prod-usecase-info">
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--orange)' }}>0{i + 1}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>{u.t}</div>
                    <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>{u.d}</div>
                  </div>
                </PhotoCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="prod-related">
        <div className="container">
          <div className="eyebrow mono">RELATED · מוצרים קשורים</div>
          <h2 className="section-title" style={{ fontSize: 44, lineHeight: 1, marginBottom: 48 }}>עוד <strong>מהקטלוג.</strong></h2>
          <div className="prod-related-grid">
            {CATEGORIES.slice(0, 4).map((c, i) => (
              <Link to="/category" key={c.id} className="prod-related-card">
                <PhotoCard src={c.photo} style={{ height: 220 }} />
                <div style={{ paddingTop: 14 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em' }}>0{i + 1} · {c.code}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginTop: 6, color: 'var(--text)' }}>{c.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
