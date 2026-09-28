import { profile } from '../data/profile.js';
import { external } from '../utils.js';

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ');
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          <span className="accent">{first}</span> {rest.join(' ')}
        </h1>
        <p className="hero-lead">{profile.tagline}</p>
        <ul className="hero-affil">
          {profile.affiliations.map((a) => (
            <li key={a.org}>
              {a.text}{' '}
              <a href={a.url} {...external}>
                {a.org}
              </a>
            </li>
          ))}
        </ul>
        <div className="contact-row">
          {profile.links.map((l) => (
            <a key={l.url} className="btn" href={l.url} {...external}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <figure className="portrait">
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="202" height="202" />
        <figcaption>
          {profile.location}
        </figcaption>
      </figure>
    </section>
  );
}
