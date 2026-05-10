import PageHero from '../components/PageHero';
import PhotoCard from '../components/PhotoCard';
import ScrollReveal from '../components/ScrollReveal';
import { PHOTOS } from '../data/siteData';
import './About.css';

const values = [
  { n: "01", t: "אמינות", d: "מה שהסכמנו — זה מה שקורה. מחיר, זמן, איכות." },
  { n: "02", t: "מהירות", d: "אספקה ב-24 שעות. כי אתר סגור עולה כסף." },
  { n: "03", t: "מקצועיות", d: "מהנדסי בטיחות, מתקינים מוסמכים, רכבים ממוגנים." },
  { n: "04", t: "ותק", d: "24 שנה באותו תחום. ראינו את הכל." },
];
const team = [
  { name: "משה חזן", role: "מנכ״ל ומייסד" },
  { name: "יוסי כהן", role: "מנהל תפעול" },
  { name: "ענת לוי", role: "מנהלת מכירות" },
  { name: "אבי דרור", role: "ראש צוות התקנה" },
];
const certs = [
  { t: "תקן ישראלי 4273", d: "גדרות בטיחות" },
  { t: "ISO 9001:2015", d: "ניהול איכות" },
  { t: "ביטוח צד ג׳", d: "עד 10M ₪" },
  { t: "רישיון קבלן ג-100", d: "לעבודות גידור" },
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT · אודות"
        title="נוסדנו ב-2002."
        titleAccent="מאז לא עצרנו."
        subtitle="מאתר עבודה אחד בפתח תקווה ועד למעלה מ-1,800 פרויקטים ברחבי הארץ — חזן גדרות הוא סיפור של מחויבות יומיומית."
        photo={PHOTOS.team}
        breadcrumbs={["בית", "אודות"]}
      />

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-layout">
            <ScrollReveal>
              <div className="eyebrow mono">01 — SINCE 2002</div>
              <h2 className="section-title" style={{ fontSize: 48 }}>הסיפור<br /><strong>שלנו.</strong></h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="about-story-text">
                <p>חזן פתרונות בתנועה הוקמה בשנת 2002 על ידי משה חזן, מאחורי הקלעים של מאות אתרי בנייה שעמדו בפני אותה בעיה — גדר שלא הגיעה בזמן, גדר שנפלה אחרי יומיים, גדר שלא עמדה בתקן.</p>
                <p>ההחלטה הייתה פשוטה: לבנות חברה שפשוט עושה את זה נכון. מלאי מקומי, צוות מקצועי, התקנה לפי תקן, אספקה ב-24 שעות.</p>
                <p>24 שנה מאוחר יותר, אנחנו סופרים 1,847 פרויקטים, 40,000 מטר רץ של מלאי, 4 צוותי התקנה ארציים, ולקוחות חוזרים בכל יום עבודה.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="eyebrow mono">02 — VALUES</div>
          <h2 className="section-title">ארבעה ערכים. <strong>אפס פשרות.</strong></h2>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.n} delay={i + 1}>
                <div className="about-value">
                  <div className="mono about-value-num">{v.n}</div>
                  <div className="about-value-title">{v.t}</div>
                  <div className="about-value-desc">{v.d}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="eyebrow mono">03 — TEAM</div>
          <h2 className="section-title">הצוות <strong>שמאחורי הגדר.</strong></h2>
          <div className="about-team-grid">
            {team.map(m => (
              <ScrollReveal key={m.name}>
                <div className="about-team-member">
                  <PhotoCard src={PHOTOS.team} style={{ height: 320 }} />
                  <div className="about-team-info">
                    <div className="about-team-name">{m.name}</div>
                    <div className="mono about-team-role">{m.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-certs">
        <div className="container">
          <div className="about-certs-grid">
            {certs.map((c, i) => (
              <div key={i} className="about-cert">
                <div className="about-cert-title">{c.t}</div>
                <div className="mono about-cert-desc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
