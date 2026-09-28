import Section from './Section.jsx';
import LinkPills from './LinkPills.jsx';
import { talks } from '../data/profile.js';
import { formatMonth } from '../utils.js';

export default function Talks() {
  return (
    <Section id="talks" label="Outreach" title="Talks & tutorials" className="band">
      <ul className="card-grid">
        {talks.map((t) => (
          <li key={t.title} className="card talk">
            <div className="meta">
              <span className="tag">{t.type}</span>
              <time dateTime={t.date}>{formatMonth(t.date)}</time>
            </div>
            <h3>{t.title}</h3>
            <p className="muted">
              {t.venue} · {t.location}
            </p>
            <LinkPills links={t.links} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
