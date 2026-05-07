export function renderImpressumPage() {
  return `
    <section class="page-hero compact-hero">
      <p class="eyebrow">Legal</p>
      <h1>Impressum</h1>
      <p>
        Angaben zum Anbieter, zur Kontaktaufnahme und zu den verwendeten
        Bildquellen.
      </p>
    </section>
    <section class="content-section legal-grid">
      <address>
        <strong>HardwareWissen</strong><br />
        Verantwortliche Person: Max Mustermann<br />
        Musterstrasse 12<br />
        8000 Zurich, Switzerland<br />
        Email: hello@example.com<br />
        Phone: +41 00 000 00 00
      </address>
      <div>
        <h2>Bildnachweise</h2>
        <p>
          Die Seite nutzt remote geladene Technikbilder, unter anderem von
          Wikimedia Commons. Für eine Veröffentlichung solltest du die jeweiligen
          Lizenzen und Namensnennungen sauber ergänzen.
        </p>
      </div>
    </section>
  `;
}



