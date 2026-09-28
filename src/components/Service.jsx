import Section from './Section.jsx';
import { reviewing, editorial, service } from '../data/profile.js';
import { external } from '../utils.js';

export default function Service() {
  return (
    <Section id="service" label="Community" title="Peer reviewing & service" className="band">
      <h3 className="sub-head">Scientific reviewer</h3>
      <ul className="card-grid review-grid">
        {reviewing.map((r) => (
          <li key={r.venue} className="card">
            <h4>{r.venue}</h4>
            {r.tracks && (
              <ul className="track-list">
                {r.tracks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {r.items && (
              <ul className="track-list">
                {r.items.map((i) => (
                  <li key={i.label}>
                    <a href={i.url} {...external}>
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="two-col service-cols">
        <div>
          <h3 className="sub-head">Editorial</h3>
          <ul className="entry-list">
            {editorial.map((e) => (
              <li key={e.venue}>
                <p className="entry-title">
                  {e.role} · {e.year}
                </p>
                <p className="muted">
                  <a href={e.url} {...external}>
                    {e.venue}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub-head">Roles & activities</h3>
          <ul className="timeline compact">
            {service.map((s) => (
              <li key={s.text}>
                <span className="period">{s.period}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
