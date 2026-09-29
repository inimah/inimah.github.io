import Section from './Section.jsx';
import { openings, group } from '../data/profile.js';
import { external } from '../utils.js';

function Logo({ uni }) {
  if (uni.logo) return <img src={uni.logo} alt="" loading="lazy" />;
  return (
    <span className={`logo-fallback ${uni.short.length > 4 ? 'is-long' : ''}`} aria-hidden="true">
      {uni.short}
    </span>
  );
}

function GroupPanel() {
  return (
    <div className="group-panel card">
      <div className="group-head">
        <p className="eyebrow">Research group</p>
        <h3>
          <a href={group.url} {...external}>
            {group.name}
          </a>
        </h3>
        <p className="muted">{group.org}</p>
      </div>
      <p className="group-intro">{group.intro}</p>

      {group.graduates.length > 0 && (
        <div className="group-block">
          <h4 className="sub-head">Graduated students &amp; projects</h4>
          <ul className="grad-list">
            {group.graduates.map((g) => (
              <li key={g.name + g.project}>
                <span className="tag">
                  {g.level} · {g.year}
                </span>
                <div>
                  <p className="entry-title">{g.project}</p>
                  <p className="muted">
                    {g.name}, {g.university}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {group.universities.length > 0 && (
        <div className="group-block">
          <h4 className="sub-head">Collaborating universities</h4>
          <ul className="logo-row">
            {group.universities.map((u) => (
              <li key={u.name}>
                {u.url ? (
                  <a className="logo-tile" href={u.url} {...external} title={u.name} aria-label={u.name}>
                    <Logo uni={u} />
                  </a>
                ) : (
                  <span className="logo-tile" title={u.name} aria-label={u.name} role="img">
                    <Logo uni={u} />
                  </span>
                )}
                <span className="logo-name">{u.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Openings() {
  if (!openings.open) return null;
  return (
    <Section id="join" label="Join" title="Research opportunities">
      <div className="announce card">
        <div className="announce-head">
          <span className="announce-badge">
            <span className="dot" aria-hidden="true" />
            {openings.title}
          </span>
          <ul className="level-list">
            {openings.levels.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <p className="announce-intro">{openings.intro}</p>
        <h3 className="sub-head">Available research topics</h3>
        <ol className="topic-list">
          {openings.topics.map((t, i) => (
            <li key={t.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="entry-title">{t.title}</p>
                {t.text && <p className="muted">{t.text}</p>}
                <div className="topic-levels">
                  {t.levels.map((l) => (
                    <span key={l} className="tag">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        {openings.email && (
          <a className="btn btn-primary" href={`mailto:${openings.email}?subject=${encodeURIComponent('Research project (S1/S2)')}`}>
            Contact me about a project
          </a>
        )}
      </div>
      <GroupPanel />
    </Section>
  );
}
