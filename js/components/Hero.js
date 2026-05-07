export function Hero() {
  return `
    <section class="hero">
      <img
        class="hero-image"
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Computer_case_20170910.jpg"
        alt="Geöffneter Computer mit sichtbaren Komponenten"
      />
      <div class="hero-content">
        <p class="eyebrow">Interaktiver Hardware-Guide</p>
        <h1>Verstehe PCs von der CPU bis zum Server.</h1>
        <p class="hero-copy">
          HardwareWissen erklärt Komponenten, Kabel, Stecker, Betriebssysteme,
          Netzwerk, Server, Kompatibilität und Aufbau in einer geordneten Website.
        </p>
        <div class="hero-actions" aria-label="Hauptaktionen">
          <a class="button primary" href="components.html">Bibliothek durchsuchen</a>
          <a class="button secondary" href="build-guide.html">Build planen</a>
          <a class="button secondary" href="#pro">Pro testen</a>
        </div>
      </div>
      <div class="hero-facts" aria-label="Website-Fakten">
        <div><strong>30</strong><span>Themen</span></div>
        <div><strong>22</strong><span>zusätzliche Unterthemen</span></div>
        <div><strong>1</strong><span>Live-Suche</span></div>
      </div>
    </section>
  `;
}



