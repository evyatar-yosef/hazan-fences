import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import FormField from '../components/FormField';
import Icons from '../components/Icons';
import { CONTACT_INFO } from '../data/siteData';
import './Contact.css';

const channels = [
  { icon: Icons.phone, label: "קווי", v: CONTACT_INFO.phone, sub: "מענה אנושי 07:00–19:00" },
  { icon: Icons.whatsapp, label: "וואטסאפ", v: CONTACT_INFO.whatsapp, sub: "הודעות 24/7" },
  { icon: Icons.clock, label: "חירום", v: CONTACT_INFO.emergency, sub: "סופ״ש וחגים בלבד" },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>צור קשר — חזן גדרות, מענה תוך 60 דקות</title>
        <meta name="description" content="יצירת קשר עם חזן גדרות — טלפון, וואטסאפ וטופס מקוון. מענה אנושי תוך 60 דקות בשעות העבודה. הצעת מחיר לאספקת גדרות לאתר בנייה, אירוע או תשתית." />
        <meta property="og:title" content="צור קשר | חזן גדרות" />
        <link rel="canonical" href="https://hazan-fences.co.il/contact" />
      </Helmet>
      <main>
      <PageHero
        eyebrow="CONTACT · צור קשר"
        title="מענה תוך"
        titleAccent="60 דקות."
        subtitle="בשעות העבודה, או בבוקר למחרת. ללא יוצא מן הכלל."
        breadcrumbs={["בית", "צור קשר"]}
      />

      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Channels */}
            <div className="contact-channels">
              <ScrollReveal>
                <div className="eyebrow mono">01 — CHANNELS</div>
                <h2 className="section-title" style={{ fontSize: 44 }}>דרכי <strong>יצירת קשר.</strong></h2>
              </ScrollReveal>
              <div className="contact-channel-list">
                {channels.map((c, i) => (
                  <div key={i} className="contact-channel">
                    <div className="contact-channel-icon">{c.icon(24)}</div>
                    <div className="contact-channel-info">
                      <div className="mono contact-channel-label">{c.label.toUpperCase()}</div>
                      <a href={`tel:${c.v}`} className="contact-channel-value" dir="ltr">{c.v}</a>
                      <div className="contact-channel-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-hq">
                <div className="eyebrow mono">HQ · מודיעין</div>
                <div className="contact-hq-address">{CONTACT_INFO.address}</div>
                <div className="contact-hq-detail">{CONTACT_INFO.addressDetail}</div>
                <div className="contact-hq-buttons">
                  <button className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: 12 }}>Waze</button>
                  <button className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: 12 }}>Google Maps</button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-section">
              <ScrollReveal>
                <div className="eyebrow mono">02 — FORM</div>
                <h2 className="section-title" style={{ fontSize: 44 }}>או <strong>השאירו פרטים.</strong></h2>
              </ScrollReveal>
              <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="contact-form-grid">
                  <FormField label="שם מלא" placeholder="ישראל ישראלי" name="name" />
                  <FormField label="טלפון" placeholder="050-0000000" name="phone" type="tel" />
                  <FormField label="דוא״ל" placeholder="you@example.com" full name="email" type="email" />
                  <FormField label="תחום עניין" placeholder="השכרה / רכישה / ייעוץ" name="interest" />
                  <FormField label="דחיפות" placeholder="מיידי / שבוע / חודש" name="urgency" />
                </div>
                <div className="form-field" style={{ gridColumn: '1 / -1', marginTop: 8 }}>
                  <label>
                    הערות
                    <textarea rows={4} placeholder="ספרו לנו על הפרויקט..." />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary contact-submit" id="contact-submit-btn">
                  שליחה ←
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-map">
        <div className="contact-map-inner">
          <div className="contact-map-grid" />
          <div className="contact-map-pin">
            <div className="contact-map-dot" />
            <div className="mono contact-map-coords">HAZAN HQ · 31.893°N 35.010°E</div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
