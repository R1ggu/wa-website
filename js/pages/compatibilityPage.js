export function renderCompatibilityPage(parts) {
  const rows = Object.values(parts)
    .map(
      (part) => `
        <tr>
          <td>${part.name}</td>
          <td>${part.specs.slice(0, 3).join(", ")}</td>
          <td>${part.warning}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <section class="page-hero compatibility-hero">
      <p class="eyebrow">Kompatibilitaet</p>
      <h1>Pruefe die kleinen Details, bevor sie echte Probleme werden.</h1>
      <p>
        Kompatibilitaet bedeutet Sockel, Groessen, Kabel, Stecker, Strom,
        Firmware, Betriebssysteme, Netzwerk und Airflow gemeinsam zu denken.
      </p>
    </section>
    <section class="content-section">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Zu pruefende Specs</th>
              <th>Typischer Fehler</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}
