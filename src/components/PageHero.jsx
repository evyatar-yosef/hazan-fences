import { Link } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import ScrollReveal from './ScrollReveal';
import './PageHero.css';

export default function PageHero({ eyebrow, title, titleAccent, subtitle, photo, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumbs && (
          <div className="page-hero-breadcrumbs mono">
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                {i > 0 && <span className="breadcrumb-sep">/</span>}
                <span className={i === breadcrumbs.length - 1 ? 'breadcrumb-active' : ''}>
                  {i === 0 ? <Link to="/">{b}</Link> : b}
                </span>
              </span>
            ))}
          </div>
        )}
        <div className={`page-hero-content ${photo ? 'with-photo' : ''}`}>
          <ScrollReveal>
            <div className="eyebrow mono">∎ {eyebrow}</div>
            <h1 className="page-hero-title">
              {title}
              {titleAccent && <><br /><strong>{titleAccent}</strong></>}
            </h1>
            {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          </ScrollReveal>
          {photo && (
            <ScrollReveal delay={2}>
              <PhotoCard
                src={photo}
                style={{ height: 360, width: '100%' }}
                overlay="linear-gradient(180deg, transparent 60%, rgba(11,13,16,0.4))"
              >
                <div className="page-hero-photo-tag mono">HAZAN · 2026</div>
              </PhotoCard>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
