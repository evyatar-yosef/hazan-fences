import PageHero from '../components/PageHero';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import Icons from '../components/Icons';
import { PHOTOS } from '../data/siteData';
import './Articles.css';

const posts = [
  { t: "איך בוחרים גדר לאתר בנייה? מדריך 2026", c: "מדריכים", d: "12 באפריל 2026", r: "8 דק׳", photo: PHOTOS.construction1 },
  { t: "תקן ישראלי 4273 — מה באמת חייבים לדעת", c: "רגולציה", d: "3 באפריל 2026", r: "5 דק׳", photo: PHOTOS.blueprint },
  { t: "גידור פסטיבל: לקחים מפסטיבל האביב", c: "מקרי בוחן", d: "28 במרץ 2026", r: "6 דק׳", photo: PHOTOS.event },
  { t: "כמה מטרים באמת צריך? מחשבון שימושי", c: "טיפים", d: "20 במרץ 2026", r: "4 דק׳", photo: PHOTOS.construction3 },
  { t: "איסכורית מול רשת — מה מתאים לאיזה פרויקט", c: "השוואות", d: "14 במרץ 2026", r: "7 דק׳", photo: PHOTOS.fenceMesh },
  { t: "10 טעויות נפוצות בהזמנת גדר זמנית", c: "טיפים", d: "6 במרץ 2026", r: "5 דק׳", photo: PHOTOS.site1 },
];

export default function Articles() {
  return (
    <main>
      <PageHero
        eyebrow="JOURNAL · מאמרים"
        title="מאמרים ומדריכים"
        titleAccent="מהשטח."
        subtitle="24 שנה של ידע. כל מה שרציתם לדעת על גידור — ולפעמים דברים שלא ידעתם שחשוב לשאול."
        photo={PHOTOS.blueprint}
        breadcrumbs={["בית", "מאמרים"]}
      />

      <section className="articles-content">
        <div className="container">
          <div className="articles-toolbar">
            <div className="articles-tabs">
              {["הכל", "מדריכים", "מקרי בוחן", "רגולציה", "טיפים", "השוואות"].map((t, i) => (
                <span key={t} className={`articles-tab ${i === 0 ? 'active' : ''}`}>{t}</span>
              ))}
            </div>
            <input className="articles-search" placeholder="חיפוש..." />
          </div>

          {/* Featured + sidebar */}
          <div className="articles-featured-layout">
            <ScrollReveal>
              <div className="articles-featured">
                <PhotoCard src={posts[0].photo} style={{ height: 460 }} />
                <div className="articles-featured-info">
                  <div className="articles-featured-tags mono">
                    <span className="articles-badge">FEATURED</span>
                    <span>{posts[0].c.toUpperCase()} · {posts[0].d}</span>
                  </div>
                  <h3 className="articles-featured-title">{posts[0].t}</h3>
                  <p className="articles-featured-desc">
                    שבעה פרמטרים שחייבים לבחון לפני שמזמינים גדר לאתר בנייה. גובה, עומק עמוד, שיטת העיגון, מרחק בין הגדרות, ועוד.
                  </p>
                  <div className="articles-read-more">קריאה מלאה {Icons.arrow(16)}</div>
                </div>
              </div>
            </ScrollReveal>
            <div className="articles-sidebar-list">
              {posts.slice(1, 4).map((post, i) => (
                <ScrollReveal key={i} delay={i + 1}>
                  <div className="articles-sidebar-item">
                    <PhotoCard src={post.photo} style={{ height: 130, width: 130, flexShrink: 0 }} />
                    <div>
                      <div className="mono articles-sidebar-cat">{post.c.toUpperCase()} · {post.r}</div>
                      <div className="articles-sidebar-title">{post.t}</div>
                      <div className="articles-sidebar-date">{post.d}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="articles-grid">
            {posts.slice(3).map((post, i) => (
              <ScrollReveal key={i}>
                <div className="articles-card">
                  <PhotoCard src={post.photo} style={{ height: 220 }} />
                  <div className="articles-card-info">
                    <div className="mono articles-card-cat">{post.c.toUpperCase()} · {post.r}</div>
                    <div className="articles-card-title">{post.t}</div>
                    <div className="articles-card-date">{post.d}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
