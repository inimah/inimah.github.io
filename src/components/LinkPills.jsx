import { external } from '../utils.js';

export default function LinkPills({ links }) {
  if (!links?.length) return null;
  return (
    <div className="pills">
      {links.map((l) => (
        <a key={l.url} className="pill" href={l.url} {...external}>
          {l.label}
          <span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </div>
  );
}
