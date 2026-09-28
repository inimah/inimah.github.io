import Section from './Section.jsx';
import { publications, talks } from '../data/profile.js';
import { formatMonth } from '../utils.js';

// Recent updates are derived from the publication and talk lists,
// so they stay in sync automatically.
const items = [
  ...publications.map((p) => ({ date: p.date, kind: 'Paper', text: `${p.title} — ${p.short} ${p.year}`, url: p.links[0]?.url })),
  ...talks.map((t) => ({ date: t.date, kind: 'Talk', text: t.title, url: t.links[0]?.url })),
]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 5);

export default function News() {
  return (
    <Section id="news" label="Updates" title="Recent highlights" className="band">
      <ul className="news-list">
        {items.map((n) => (
          <li key={n.date + n.text}>
            <time dateTime={n.date}>{formatMonth(n.date)}</time>
            <span className={`tag tag-${n.kind.toLowerCase()}`}>{n.kind}</span>
            <a href={n.url} target="_blank" rel="noopener noreferrer">
              {n.text}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
