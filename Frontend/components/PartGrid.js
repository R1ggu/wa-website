export default function PartGrid({ parts }) {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Hardware-Komponenten</h2>
          <p className="muted">Die wichtigsten PC-Teile, Anschlüsse, Systeme und Wartungsthemen in einer kompakten Übersicht.</p>
        </div>
      </div>
      <div className="grid">
        {parts.map((part) => (
          <article className="card" key={part.id}>
            {part.image && <img className="part-image" src={part.image} alt={part.fullName} />}
            <div className="card-top">
              <h3>{part.name}</h3>
              <span className="badge">{part.category}</span>
            </div>
            <strong>{part.fullName}</strong>
            <p>{part.summary}</p>
            <div className="specs">
              {part.specs.map((spec) => (
                <span key={spec}>{spec}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
