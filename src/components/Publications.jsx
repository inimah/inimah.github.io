import { useMemo, useState } from 'react';
import Section from './Section.jsx';
import LinkPills from './LinkPills.jsx';
import { publications, me, profile } from '../data/profile.js';
import { external } from '../utils.js';

const FILTERS = ['All', 'Journal', 'Conference', 'Workshop'];

function Authors({ text }) {
  const i = text.indexOf(me);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="me">{me}</strong>
      {text.slice(i + me.length)}
    </>
  );
}

function Publication({ pub }) {
  const [showAbstract, setShowAbstract] = useState(false);
  return (
    <li className="pub card">
      <div className="pub-badge">
        <span>{pub.short}</span>
        <span className="pub-year">{pub.year}</span>
      </div>
      <div className="pub-body">
        <h3>
          <a href={pub.links[0].url} {...external}>
            {pub.title}
          </a>
        </h3>
        <p className="pub-authors">
          <Authors text={pub.authors} />
        </p>
        <p className="pub-venue">{pub.venue}</p>
        <div className="pub-actions">
          <LinkPills links={pub.links} />
          {pub.abstract && (
            <button type="button" className="pill pill-btn" aria-expanded={showAbstract} onClick={() => setShowAbstract((s) => !s)}>
              {showAbstract ? 'Hide abstract' : 'Abstract'}
            </button>
          )}
        </div>
        {showAbstract && <p className="pub-abstract">{pub.abstract}</p>}
      </div>
    </li>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState('All');
  const scholar = profile.links.find((l) => l.label === 'Google Scholar');

  const byYear = useMemo(() => {
    const list = publications.filter((p) => filter === 'All' || p.type === filter);
    const groups = new Map();
    list.forEach((p) => {
      if (!groups.has(p.year)) groups.set(p.year, []);
      groups.get(p.year).push(p);
    });
    return [...groups.entries()].sort((a, b) => b[0] - a[0]);
  }, [filter]);

  return (
    <Section
      id="publications"
      label="Research"
      title="Publications"
      intro={
        <>
          Selected papers. For the full list see{' '}
          <a href={scholar.url} {...external}>
            Google Scholar
          </a>
          .
        </>
      }
    >
      <div className="filters" role="group" aria-label="Filter publications by type">
        {FILTERS.map((f) => (
          <button key={f} type="button" className={`chip ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      {byYear.map(([year, pubs]) => (
        <div key={year} className="year-group">
          <h3 className="year-label">{year}</h3>
          <ol className="pub-list">
            {pubs.map((p) => (
              <Publication key={p.title} pub={p} />
            ))}
          </ol>
        </div>
      ))}
    </Section>
  );
}
