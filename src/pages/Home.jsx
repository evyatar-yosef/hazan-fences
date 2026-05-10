import { Link } from 'react-router-dom';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import FormField from '../components/FormField';
import Icons from '../components/Icons';
import { PHOTOS, CATEGORIES, CLIENTS, PROJECTS, STATS, PROCESS_STEPS, CONTACT_INFO } from '../data/siteData';
import './Home.css';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialSection />
      <ClientsSection />
      <CtaFormSection />
    </main>
  );
}

/* ===== HERO ===== */
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-top">
          <ScrollReveal>
            <div className="eyebrow mono">∎ FENCING · GIDDUR · גידור</div>
            <h1 className="hero-title">
              גדרות.<br />
              <strong>מקצה לקצה.</strong>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="hero-subtitle">
              חזן פתרונות בתנועה מתכננים, מייצרים, משכירים, מתקינים ומפרקים גדרות לאתרי בנייה, אירועים ותשתיות — ברחבי הארץ, מאז 2002.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">קבל הצעת מחיר ←</Link>
              <Link to="/category" className="btn btn-secondary">צפייה במוצרים</Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-media">
          <PhotoCard
            src={PHOTOS.heroSite}
            style={{ height: 520, width: '100%' }}
            overlay="linear-gradient(180deg, transparent 60%, rgba(11,13,16,0.4))"
          >
            <div className="hero-caption mono">
              <div className="hero-caption-num">PROJECT № 1,847</div>
              <div className="hero-caption-text">מגדלי אקרו · תל אביב · 2,400 מ׳</div>
            </div>
            <div className="hero-dots mono">
              {["01", "02", "03", "04"].map((n, i) => (
                <div key={n} className={`hero-dot ${i === 0 ? 'active' : ''}`}>{n}</div>
              ))}
            </div>
          </PhotoCard>

          {/* Stats Strip */}
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="hero-stat-number">{s.n}</div>
                <div className="hero-stat-label mono">{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== MARQUEE ===== */
function MarqueeSection() {
  const items = [
    "אספקה ב-24 שעות", "תקן 4273", "מלאי 40,000 מ׳", "4 צוותי התקנה ארציים",
    "מענה 24/7", "ביטוח מלא", "24 שנות ותק", "מ-2002",
  ];
  return (
    <div className="marquee-section">
      <div className="marquee-track mono">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="marquee-item">
            {it}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== CATEGORIES ===== */
function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <ScrollReveal>
            <div className="eyebrow mono">02 — CATALOG</div>
            <h2 className="section-title">קטלוג <strong>הגדרות.</strong></h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="section-subtitle">
              תשע קטגוריות ראשיות, למעלה מ-60 מוצרים במלאי — כולם מיוצרים לפי תקן ישראלי ובדוקים לבטיחות העבודה.
            </p>
          </ScrollReveal>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map((c, i) => (
            <ScrollReveal key={c.id} delay={Math.min(i % 3 + 1, 5)}>
              <Link to="/category" className="category-card">
                <PhotoCard src={c.photo} style={{ height: 260 }} />
                <div className="category-card-info">
                  <div>
                    <div className="mono category-card-code">0{i + 1} · {c.code}</div>
                    <div className="category-card-name">{c.name}</div>
                    <div className="category-card-desc">{c.desc}</div>
                  </div>
                  <div className="category-card-arrow">{Icons.arrow(20)}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PROCESS ===== */
function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow mono">03 — PROCESS</div>
          <h2 className="section-title">
            ארבעה צעדים.<br /><strong>אפס הפתעות.</strong>
          </h2>
        </ScrollReveal>
        <div className="process-grid">
          {PROCESS_STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i + 1}>
              <div className="process-step">
                <div className="process-step-num mono">{s.n}</div>
                <div className="process-step-title">{s.t}</div>
                <div className="process-step-desc">{s.d}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PROJECTS ===== */
function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <ScrollReveal>
            <div className="eyebrow mono">04 — PROJECTS</div>
            <h2 className="section-title">פרויקטים <strong>נבחרים.</strong></h2>
          </ScrollReveal>
          <Link to="/projects" className="projects-link">
            כל הפרויקטים {Icons.arrow(14)}
          </Link>
        </div>

        <div className="projects-featured">
          <PhotoCard
            src={PROJECTS[0].photo}
            style={{ height: 480 }}
            overlay="linear-gradient(180deg, transparent 40%, rgba(11,13,16,0.85))"
          >
            <div className="project-featured-info">
              <div className="mono project-tag">FEATURED · #{String(PROJECTS[0].id).padStart(4, '0')}</div>
              <div className="project-featured-name">{PROJECTS[0].name}</div>
              <div className="project-featured-meta">{PROJECTS[0].client} · {PROJECTS[0].scope} · {PROJECTS[0].dur}</div>
            </div>
          </PhotoCard>
          <div className="projects-featured-side">
            {PROJECTS.slice(1, 3).map(p => (
              <PhotoCard
                key={p.id}
                src={p.photo}
                style={{ height: '100%', minHeight: 228 }}
                overlay="linear-gradient(180deg, transparent 50%, rgba(11,13,16,0.85))"
              >
                <div className="project-small-info">
                  <div className="mono project-tag">#{String(p.id).padStart(4, '0')} · {p.type}</div>
                  <div className="project-small-name">{p.name}</div>
                </div>
              </PhotoCard>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {PROJECTS.slice(3, 6).map(p => (
            <ScrollReveal key={p.id}>
              <div className="project-card">
                <PhotoCard src={p.photo} style={{ height: 220 }} />
                <div className="project-card-info">
                  <div className="mono project-card-tag">#{String(p.id).padStart(4, '0')} · {p.type}</div>
                  <div className="project-card-name">{p.name}</div>
                  <div className="project-card-meta">{p.client} · {p.scope}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIAL ===== */
function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-grid-bg" />
      <div className="container testimonial-content">
        <ScrollReveal>
          <div className="testimonial-quote">"</div>
          <div className="testimonial-text">
            עבדנו עם חזן על 6 פרויקטים בשלוש השנים האחרונות.<br />
            <strong>פעם אחת לא הייתה בעיה של לוחות זמנים.</strong><br />
            זה לא משהו שאני יכול להגיד על ספקים אחרים.
          </div>
          <div className="testimonial-author">
            <div className="testimonial-avatar">ר.ל</div>
            <div className="testimonial-author-info">
              <div className="testimonial-name">רוני לוי</div>
              <div className="testimonial-role mono">מנהל פרויקטים · שיכון ובינוי</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== CLIENTS ===== */
function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-label mono">בין לקוחותינו — 1,800+ פרויקטים</div>
        <div className="clients-grid">
          {CLIENTS.map((c, i) => (
            <div key={i} className="client-item">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CTA FORM ===== */
function CtaFormSection() {
  return (
    <section className="cta-section">
      <div className="container cta-grid">
        <ScrollReveal>
          <div className="cta-info">
            <div className="eyebrow mono">05 — GET A QUOTE</div>
            <h2 className="section-title">בואו <strong>נתחיל.</strong></h2>
            <p className="cta-subtitle">
              ספרו לנו על הפרויקט, ואנחנו נחזור אליכם עם הצעת מחיר מלאה תוך שעה. ללא התחייבות.
            </p>
            <div className="cta-contact-lines">
              <InfoRow label="טלפון" value={CONTACT_INFO.phone} dir="ltr" />
              <InfoRow label="וואטסאפ" value={CONTACT_INFO.whatsapp} dir="ltr" />
              <InfoRow label="דוא״ל" value={CONTACT_INFO.email} dir="ltr" />
              <InfoRow label="כתובת" value={CONTACT_INFO.address} dir="rtl" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cta-form-grid">
              <FormField label="שם מלא" placeholder="ישראל ישראלי" name="name" />
              <FormField label="טלפון" placeholder="050-0000000" name="phone" type="tel" />
              <FormField label="דוא״ל" placeholder="you@example.com" full name="email" type="email" />
              <FormField label="סוג פרויקט" placeholder="אתר בנייה / אירוע / תשתית" name="project_type" />
              <FormField label="אורך מוערך" placeholder="250 מ׳" name="length" />
              <FormField label="תאריך התחלה" placeholder="01/05/2026" name="start_date" />
              <FormField label="משך ההשכרה" placeholder="3 חודשים" name="duration" />
              <FormField label="הערות" placeholder="שטח משופע, צריך אישור" full name="notes" />
            </div>
            <button type="submit" className="btn btn-primary cta-submit" id="cta-submit-btn">
              שלח ← קבל הצעה תוך שעה
            </button>
            <div className="cta-consent mono">
              בלחיצה אני מסכים לקבל תשובה באמצעי שהזנתי
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InfoRow({ label, value, dir = "rtl" }) {
  return (
    <div className="info-row">
      <div className="info-row-label mono">{label}</div>
      <div className="info-row-value" dir={dir}>{value}</div>
    </div>
  );
}
