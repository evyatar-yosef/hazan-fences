import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';
import ScrollReveal from '../components/ScrollReveal';
import { PHOTOS, CATEGORIES } from '../data/siteData';
import './Rental.css';

const SERVICES = [
  { t: "התקנה מלאה", price: "+8%", on: true },
  { t: "פירוק בסיום", price: "+4%", on: true },
  { t: "שלטי אזהרה", price: "+2%", on: false },
  { t: "תאורת שטח", price: "+5%", on: false },
  { t: "שער כניסה", price: "+12%", on: false },
  { t: "ביטוח מורחב", price: "+3%", on: false },
];

export default function Rental() {
  const [length, setLength] = useState(250);
  const [selectedType, setSelectedType] = useState(0);
  const [services, setServices] = useState(SERVICES.map(s => s.on));

  const basePrice = Math.round(length * 12.5);
  const extras = services.reduce((sum, on, i) => {
    if (!on) return sum;
    const pct = parseInt(SERVICES[i].price) / 100;
    return sum + Math.round(basePrice * pct);
  }, 0);
  const transport = 750;
  const total = basePrice + extras + transport;

  return (
    <>
      <Helmet>
        <title>מחשבון השכרת גדרות זמניות — מחיר מיידי | חזן גדרות</title>
        <meta name="description" content="חשב מחיר השכרת גדר זמנית לאתר הבנייה שלך בזמן אמתי. השכרת גדרות זמניות כוללת הובלה, התקנה ופירוק. הצעה רשמית תוך שעה." />
        <meta property="og:title" content="השכרת גדרות זמניות — מחשבון מחירים" />
        <link rel="canonical" href="https://hazan-fences.co.il/rental" />
      </Helmet>
      <main>
      <PageHero
        eyebrow="RENTAL · השכרה"
        title="מחשבון"
        titleAccent="השכרה."
        subtitle="מלאו את הפרטים ותקבלו הערכת מחיר מיידית. הצעה רשמית תישלח תוך שעה."
        photo={PHOTOS.fenceMesh}
        breadcrumbs={["בית", "להשכרה", "מחשבון"]}
      />

      <section className="rental-calc">
        <div className="container">
          <div className="rental-layout">
            {/* Form */}
            <form className="rental-form" onSubmit={e => e.preventDefault()}>
              <div className="eyebrow mono">STEP 1 / 3 · פרטי הפרויקט</div>

              <div className="mono rental-label">סוג הגדר</div>
              <div className="rental-type-grid">
                {CATEGORIES.slice(0, 6).map((c, i) => (
                  <div key={c.id}
                    className={`rental-type-card ${selectedType === i ? 'selected' : ''}`}
                    onClick={() => setSelectedType(i)}>
                    <div className="mono rental-type-code">{c.code}</div>
                    <div className="rental-type-name">{c.name}</div>
                  </div>
                ))}
              </div>

              <div className="rental-slider-section">
                <div className="rental-slider-header">
                  <div className="mono rental-label">אורך כולל (מ׳)</div>
                  <div className="rental-slider-value">{length}</div>
                </div>
                <input
                  type="range" min="50" max="1000" value={length}
                  onChange={e => setLength(Number(e.target.value))}
                  id="rental-length-slider"
                />
                <div className="rental-slider-marks mono">
                  <span>50 מ׳</span><span>500 מ׳</span><span>1,000+ מ׳</span>
                </div>
              </div>

              <div className="mono rental-label" style={{ marginTop: 32 }}>תאריכים</div>
              <div className="rental-dates-grid">
                <FormField label="תאריך התחלה" placeholder="01/05/2026" name="start" />
                <FormField label="תאריך סיום" placeholder="01/08/2026" name="end" />
              </div>

              <div className="mono rental-label" style={{ marginTop: 32 }}>שירותים נוספים</div>
              <div className="rental-services-grid">
                {SERVICES.map((a, i) => (
                  <div key={a.t}
                    className={`rental-service ${services[i] ? 'selected' : ''}`}
                    onClick={() => {
                      const next = [...services];
                      next[i] = !next[i];
                      setServices(next);
                    }}>
                    <div className="rental-service-left">
                      <div className={`rental-service-check ${services[i] ? 'checked' : ''}`}>
                        {services[i] && <span>✓</span>}
                      </div>
                      <span>{a.t}</span>
                    </div>
                    <div className="mono rental-service-price">{a.price}</div>
                  </div>
                ))}
              </div>

              <div className="rental-contact-fields">
                <FormField label="שם" placeholder="ישראל ישראלי" name="name" />
                <FormField label="טלפון" placeholder="050-0000000" name="phone" type="tel" />
                <FormField label="דוא״ל" placeholder="you@example.com" full name="email" type="email" />
                <FormField label="מיקום הפרויקט" placeholder="רחוב ההגנה 12, ראשל״צ" full name="location" />
              </div>

              <button type="submit" className="btn btn-primary rental-submit" id="rental-submit-btn">
                שליחה וקבלת הצעה רשמית ←
              </button>
            </form>

            {/* Price Estimate */}
            <div className="rental-sidebar">
              <ScrollReveal>
                <div className="rental-estimate">
                  <div className="eyebrow mono">ESTIMATE · הערכה חיה</div>
                  <div className="rental-estimate-label">הערכת מחיר חודשי</div>
                  <div className="rental-estimate-price">
                    <span className="rental-estimate-number">{total.toLocaleString()}</span>
                    <span className="rental-estimate-currency">₪</span>
                  </div>
                  <div className="mono rental-estimate-note">לא כולל מע״מ · לפני הנחת ותק</div>

                  <div className="rental-estimate-breakdown">
                    <div className="rental-line"><span>{CATEGORIES[selectedType].name} × {length} מ׳</span><span className="mono">{basePrice.toLocaleString()} ₪</span></div>
                    {SERVICES.map((s, i) => services[i] && (
                      <div key={s.t} className="rental-line"><span>{s.t} ({s.price})</span><span className="mono">{Math.round(basePrice * parseInt(s.price) / 100).toLocaleString()} ₪</span></div>
                    ))}
                    <div className="rental-line"><span>הובלה ושטח</span><span className="mono">{transport} ₪</span></div>
                  </div>

                  <div className="rental-estimate-disclaimer">
                    ⚡ הצעה זו היא הערכה. מחיר סופי מתקבל לאחר מדידה בשטח, בדרך כלל ללא שינוי של יותר מ-5%.
                  </div>
                </div>
              </ScrollReveal>

              <div className="rental-faq-card">
                <div className="eyebrow mono">FAQ</div>
                <div className="rental-faq-title">יש מחיר מינימום?</div>
                <div className="rental-faq-answer">כן, 1,800 ₪ לחודש. מתחת לזה נמליץ על חלופה פרטית.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
