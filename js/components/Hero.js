export function Hero() {
  return `
    <section class="hero">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80"
        alt="Computer hardware and development workspace"
      />
      <div class="hero-content">
        <p class="eyebrow">Interactive Hardware Guide</p>
        <h1>Build smarter PCs by understanding every part.</h1>
        <p class="hero-copy">
          Hardware Atlas explains CPUs, GPUs, memory, storage, power, cooling,
          cases, compatibility, and build planning in one organized static site.
        </p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button primary" href="components.html">Explore components</a>
          <a class="button secondary" href="build-guide.html">Plan a build</a>
        </div>
      </div>
      <div class="hero-facts" aria-label="Site facts">
        <div><strong>8</strong><span>Component pages</span></div>
        <div><strong>4</strong><span>Planning views</span></div>
        <div><strong>0</strong><span>Build tools required</span></div>
      </div>
    </section>
  `;
}
