import { useState } from 'react';
import Section from './Section.jsx';
import { education, experience, awards, projects } from '../data/profile.js';

const TABS = [
  { id: 'experience', label: 'Experience', items: experience },
  { id: 'education', label: 'Education', items: education },
  { id: 'awards', label: 'Awards', items: awards },
  { id: 'projects', label: 'Research projects', items: projects },
];

export default function CV() {
  const [tab, setTab] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === tab);

  return (
    <Section id="cv" label="Curriculum vitae" title="Experience & education">
      <div className="tabs" role="tablist" aria-label="CV sections">
        {TABS.map((t) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            className={`chip ${tab === t.id ? 'is-active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ol className="timeline" id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`}>
        {current.items.map((it) => (
          <li key={it.title + it.period}>
            <span className="period">{it.period}</span>
            <div>
              <p className="entry-title">{it.title}</p>
              {it.org && <p className="muted">{it.org}</p>}
              {it.detail && <p>{it.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
