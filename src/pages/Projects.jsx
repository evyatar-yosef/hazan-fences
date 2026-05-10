import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import { PHOTOS, PROJECTS } from '../data/siteData';
import './Projects.css';

export default function Projects() {
  const allProjects = [...PROJECTS, ...PROJECTS].slice(0, 12);
  return (
    <>
      <Helmet>
        <title>פרויקטים נבחרים — גידור אתרי בנייה ואירועים | חזן גדרות</title>
        <meta name="description" content="מעל מ-1,800 פרויקטי גידור בישראל. אתרי בנייה, תשתיות, אירועים ופסטיבלים. לקוחות כגון: שיכון ובינוי, אריאל, סולל בניין, פרויקטי רכבת." />
        <meta property="og:title" content="פרויקטים — חזן גדרות" />
        <link rel="canonical" href="https://hazan-fences.co.il/projects" />
      </Helmet>
      <main>
      <PageHero
        eyebrow="PROJECTS · פרויקטים"
        title="1,847 פרויקטים."
        titleAccent="בחרנו 24."
        subtitle="מאתרי בנייה בגובה 80 קומות ועד פסטיבלי תרבות במדבר — חזן גידרה את זה."
        photo={PHOTOS.crane}
        breadcrumbs={["בית", "פרויקטים"]}
      />

      <section className="proj-filters">
        <div className="container">
          <div className="proj-toolbar">
            <div className="proj-filter-buttons">
              {["הכל (24)", "בנייה (14)", "תשתיות (6)", "אירועים (4)"].map((t, i) => (
                <button key={t} className={`proj-filter-btn ${i === 0 ? 'active' : ''}`}>{t}</button>
              ))}
            </div>
            <div className="proj-sort mono">SORT · חדש ביותר ↓</div>
          </div>
        </div>
      </section>

      <section className="proj-grid-section">
        <div className="container">
          <div className="proj-grid">
            {allProjects.map((proj, i) => (
              <ScrollReveal key={i} delay={Math.min(i % 3 + 1, 3)}>
                <div className="proj-card">
                  <PhotoCard src={proj.photo} style={{ height: 240 }}>
                    <div className="proj-card-badge mono">{proj.type}</div>
                  </PhotoCard>
                  <div className="proj-card-info">
                    <div className="mono proj-card-meta">#{String(1800 + i).padStart(4, '0')} · {proj.client}</div>
                    <div className="proj-card-name">{proj.name}</div>
                    <div className="proj-card-details mono">
                      <div><div className="proj-detail-label">SCOPE</div><div className="proj-detail-value">{proj.scope}</div></div>
                      <div><div className="proj-detail-label">DURATION</div><div className="proj-detail-value">{proj.dur}</div></div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="proj-load-more">
            <button className="btn btn-secondary">טען עוד 12 פרויקטים ↓</button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
