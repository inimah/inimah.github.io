export default function Section({ id, label, title, intro, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <p className="eyebrow">{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
