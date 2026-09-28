import { profile } from '../data/profile.js';
import { external } from '../utils.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-links">
          {profile.links.map((l) => (
            <a key={l.url} href={l.url} {...external}>
              {l.label}
            </a>
          ))}
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
