import Section from './Section.jsx';
import { bio, interests, dissertation } from '../data/profile.js';
import { external } from '../utils.js';

export default function About() {
  return (
    <Section id="about" label="About" title="Short biography">
      <div className="about-grid">
        <div className="prose">
          {bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {dissertation && (
            <aside className="thesis card" aria-labelledby="thesis-title">
              <p className="eyebrow">
                {dissertation.label} · {dissertation.institution}
              </p>
              <h3 id="thesis-title">
                <a href={dissertation.url} {...external}>
                  {dissertation.title}
                </a>
              </h3>
              <p className="thesis-abstract">{dissertation.abstract}</p>
              <a className="btn btn-primary" href={dissertation.url} {...external}>
                Read the dissertation<span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </aside>
          )}
        </div>
        <ol className="interest-list" aria-label="Research interests">
          {interests.map((it, i) => (
            <li key={it.title} className="card">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
