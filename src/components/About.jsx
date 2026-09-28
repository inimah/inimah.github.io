import Section from './Section.jsx';
import { bio, interests } from '../data/profile.js';

export default function About() {
  return (
    <Section id="about" label="About" title="Short biography">
      <div className="about-grid">
        <div className="prose">
          {bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
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
