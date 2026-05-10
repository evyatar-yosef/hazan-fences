import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import { PHOTOS, CATEGORIES } from '../data/siteData';
import './Category.css';

const PRODUCTS = [
  { id: "F-CON-2410", name: "גדר בנייה כבדה 2.4×1מ׳", height: "2.4 מ׳", material: "פלדה מגולוונת", weight: "32 ק״ג", photo: PHOTOS.construction1 },
  { id: "F-CON-2010", name: "גדר בנייה סטנדרטית 2×1מ׳", height: "2.0 מ׳", material: "פלדה מגולוונת", weight: "26 ק״ג", photo: PHOTOS.construction2 },
  { id: "F-CON-1808", name: "גדר בנייה קלה 1.8×0.8מ׳", height: "1.8 מ׳", material: "פלדה צבועה", weight: "18 ק״ג", photo: PHOTOS.construction3 },
  { id: "F-CON-2412", name: "גדר היקפית מוגברת", height: "2.4 מ׳", material: "פלדה כבדה", weight: "38 ק״ג", photo: PHOTOS.crane },
  { id: "F-CON-3010", name: "גדר ביטחונית 3×1מ׳", height: "3.0 מ׳", material: "פלדה מחוזקת", weight: "45 ק״ג", photo: PHOTOS.fenceNight },
  { id: "F-CON-2010S", name: "גדר עם בסיס בטון", height: "2.0 מ׳", material: "פלדה + בטון", weight: "78 ק״ג", photo: PHOTOS.site1 },
];

const FILTERS = [
  { t: "גובה", opts: ["1.8 מ׳", "2.0 מ׳", "2.4 מ׳", "3.0 מ׳"] },
  { t: "חומר", opts: ["פלדה מגולוונת", "פלדה צבועה", "פלדה כבדה"] },
  { t: "סוג שימוש", opts: ["השכרה", "רכישה", "ארוך טווח"] },
];

const FAQS = [
  { q: "כמה זמן לוקח לקבל אספקה?", a: "ברוב המקרים 24 שעות מאישור הזמנה. במצבי חירום — תוך 4 שעות מאזור המרכז." },
  { q: "האם הגדרות עומדות בתקן ישראלי?", a: "כן. כל הגדרות שלנו עומדות בת״י 4273 ומיוצרות תחת ISO 9001:2015." },
  { q: "מה מינימום הכמות להזמנה?", a: "אין מינימום למוצר אך יש מינימום חיוב חודשי של 1,800 ₪. מתחת לזה נמליץ על פתרון פרטי." },
  { q: "האם מחיר ההשכרה כולל התקנה?", a: "התקנה ופירוק הם תוספת אופציונלית של 8% ו-4% בהתאמה. ללקוחות חוזרים — כלול." },
  { q: "מה קורה אם הגדר ניזוקה באתר?", a: "בלאי סביר כלול. נזק חריג מחויב לפי טבלת מחיר. ביטוח מורחב — תוספת של 3%." },
];

export default function Category() {
  const cat = CATEGORIES[0];
  return (
    <>
      <Helmet>
        <title>קטלוג גדרות לאתרי בנייה — כל הסוגים והמחירים | חזן גדרות</title>
        <meta name="description" content="קטלוג גדרות זמניות לאתרי בנייה, אירועים ותשתיות. מעל מ-60 מוצרים, תקן ישראלי 4273, אספקה תוך 24 שעות. גדרות בנייה, איסכורית, רשת, אירועים ועוד." />
        <meta property="og:title" content="קטלוג גדרות — חזן גדרות" />
        <link rel="canonical" href="https://hazan-fences.co.il/category" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "כמה זמן לוקח לקבל אספקה?",
                "acceptedAnswer": { "@type": "Answer", "text": "ברוב המקרים 24 שעות מאישור הזמנה. במצבי חירום — תוך 4 שעות מאזור המרכז." }
              },
              {
                "@type": "Question",
                "name": "האם הגדרות עומדות בתקן ישראלי?",
                "acceptedAnswer": { "@type": "Answer", "text": "כן. כל הגדרות שלנו עומדות בת״י 4273 ומיוצרות תחת ISO 9001:2015." }
              },
              {
                "@type": "Question",
                "name": "מה מינימום הכמות להזמנה?",
                "acceptedAnswer": { "@type": "Answer", "text": "אין מינימום למוצר אך יש מינימום חיוב חודשי של 1,800 ₪." }
              },
              {
                "@type": "Question",
                "name": "האם מחיר ההשכרה כולל התקנה?",
                "acceptedAnswer": { "@type": "Answer", "text": "התקנה ופירוק הם תוספת אופציונלית של 8% ו-4% בהתאמה. ללקוחות חוזרים — כלול." }
              },
              {
                "@type": "Question",
                "name": "מה קורה אם הגדר ניזוקת באתר?",
                "acceptedAnswer": { "@type": "Answer", "text": "בלאי סביר כלול. נזק חריג מחויב לפי טבלת מחיר. ביטוח מורחב — תוספת של 3%." }
              }
            ]
          }
        `}</script>
      </Helmet>
      <main>
      <PageHero
        eyebrow={`CATEGORY · ${cat.code}`}
        title="גדרות"
        titleAccent="לאתרי בנייה."
        subtitle="גדרות כבדות לאתרי בנייה פעילים. עומדות בתקן ישראלי 4273, מיוצרות מפלדה מגולוונת, מתקבלות לאספקה תוך 24 שעות מהזמנה."
        breadcrumbs={["בית", "מוצרים", "גדרות לאתרי בנייה"]}
      />

      {/* Overview */}
      <section className="cat-overview">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="eyebrow mono">OVERVIEW</div>
          <p className="cat-overview-text">
            גדרות לאתרי בנייה הן הקו הראשון בבטיחות — מפרידות בין שטח עבודה פעיל לקהל, מגנות על ציוד ועובדים, ועומדות בדרישות מכון התקנים. אנחנו מחזיקים מלאי קבוע של למעלה מ-12,000 מטר רץ במגוון גבהים, מתאימים לכל סוג של אתר.
          </p>
        </div>
      </section>

      {/* Filters + Products Grid */}
      <section className="cat-products">
        <div className="container">
          <div className="cat-layout">
            {/* Sidebar */}
            <aside className="cat-sidebar">
              <div className="eyebrow mono">FILTERS · סינון</div>
              {FILTERS.map(f => (
                <div key={f.t} className="cat-filter-group">
                  <div className="cat-filter-title">{f.t}</div>
                  {f.opts.map((o, i) => (
                    <label key={o} className="cat-filter-option">
                      <div className={`cat-checkbox ${i === 0 ? 'checked' : ''}`}>
                        {i === 0 && <span>✓</span>}
                      </div>
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
              ))}
              <div className="cat-sidebar-cta">
                <div className="eyebrow mono">QUOTE</div>
                <div className="cat-sidebar-cta-title">צריך כמות גדולה?</div>
                <div className="cat-sidebar-cta-desc">הצעת מחיר מותאמת תוך שעה.</div>
                <Link to="/contact" className="btn btn-orange" style={{ width: '100%', marginTop: 16 }}>
                  לקבלת הצעה ←
                </Link>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="cat-main">
              <div className="cat-toolbar">
                <div className="cat-count mono">{PRODUCTS.length} מוצרים בקטגוריה</div>
                <div className="cat-sort mono">SORT · רלוונטיות ↓</div>
              </div>
              <div className="cat-product-grid">
                {PRODUCTS.map((prod) => (
                  <ScrollReveal key={prod.id}>
                    <Link to="/product" className="cat-product-card">
                      <PhotoCard src={prod.photo} style={{ height: 240 }}>
                        <div className="cat-product-id mono">{prod.id}</div>
                      </PhotoCard>
                      <div className="cat-product-info">
                        <div className="cat-product-name">{prod.name}</div>
                        <div className="cat-product-specs mono">
                          <span>{prod.height}</span>
                          <span className="cat-spec-sep">│</span>
                          <span>{prod.material}</span>
                        </div>
                        <div className="cat-product-link">
                          <span>פרטים נוספים</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cat-faq">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="eyebrow mono">FAQ — שאלות נפוצות</div>
          <h2 className="section-title">מה כדאי <strong>לדעת.</strong></h2>
          <div className="cat-faq-list">
            {FAQS.map((faq, i) => (
              <details key={i} className="cat-faq-item">
                <summary>
                  <span>{faq.q}</span>
                  <span className="cat-faq-icon">+</span>
                </summary>
                <div className="cat-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
