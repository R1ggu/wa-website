export function renderImpressumPage() {
  return `
    <section class="page-hero compact-hero">
      <p class="eyebrow">Legal</p>
      <h1>Impressum</h1>
      <p>
        This is placeholder legal information for a static demo website.
        Replace it with the correct responsible person or company before publishing.
      </p>
    </section>
    <section class="content-section legal-grid">
      <address>
        <strong>Hardware Atlas Demo</strong><br />
        Responsible person: Max Mustermann<br />
        Musterstrasse 12<br />
        8000 Zurich, Switzerland<br />
        Email: hello@example.com<br />
        Phone: +41 00 000 00 00
      </address>
      <div>
        <h2>Image Credits</h2>
        <p>
          The page uses remotely hosted technology photos from public image
          providers such as Unsplash. Replace the URLs with your own licensed
          assets for production work.
        </p>
      </div>
    </section>
  `;
}
