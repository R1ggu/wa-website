export default function Hero({ site }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">{site.subtitle}</span>
        <h1>{site.title}</h1>
        <p>{site.description}</p>
        <p>{site.featuredNotice}</p>
      </div>
    </section>
  );
}
