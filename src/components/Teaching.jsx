import Section from './Section.jsx';
import { teaching, supervising } from '../data/profile.js';
import { external } from '../utils.js';

export default function Teaching() {
  return (
    <Section id="teaching" label="Teaching" title="Teaching & supervision">
      <div className="two-col">
        <div>
          <h3 className="sub-head">Teaching</h3>
          <ul className="entry-list">
            {teaching.map((t) => (
              <li key={t.title}>
                <p className="entry-title">{t.title}</p>
                <p className="muted">{t.type} · {t.venue}</p>
                <p>{t.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub-head">Supervision</h3>
          <ul className="entry-list">
            {supervising.map((s) => (
              <li key={s.title}>
                <p className="entry-title">
                  {s.url ? (
                    <a href={s.url} {...external}>
                      {s.title}
                    </a>
                  ) : (
                    s.title
                  )}
                </p>
                <p className="muted">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
