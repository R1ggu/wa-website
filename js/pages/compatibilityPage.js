import { compatibilitySections, compatibilityWorkflow } from "../data/compatibilityData.js";

const renderCompatibilityCard = (section) => `
  <article class="compat-card">
    <span>${section.tag}</span>
    <h3>${section.title}</h3>
    <p>${section.summary}</p>
    <ul>${section.checks.map((check) => `<li>${check}</li>`).join("")}</ul>
  </article>
`;

const renderPartRow = (part) => `
  <tr>
    <td>
      <strong>${part.name}</strong>
      <span>${part.category}</span>
    </td>
    <td>${part.specs.join(", ")}</td>
    <td>${part.warning}</td>
  </tr>
`;

export function renderCompatibilityPage(parts) {
  const rows = Object.values(parts).map(renderPartRow).join("");
  const cards = compatibilitySections.map(renderCompatibilityCard).join("");
  const workflow = compatibilityWorkflow
    .map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${item}</li>`)
    .join("");

  return `
    <section class="page-hero compatibility-hero">
      <p class="eyebrow">Kompatibilität</p>
      <h1>Prüfe Sockel, Stecker, Größen und Software zusammen.</h1>
      <p>
        Kompatibilität bedeutet mehr als „passt in den Slot“. HardwareWissen
        zeigt dir, worauf du bei CPU-Sockel, RAM, GPU, Netzteil, Gehäuse,
        Betriebssystem, Treibern und Netzwerk achten solltest.
      </p>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Prüfreihenfolge</p>
        <h2>So gehst du vor, bevor du Teile kaufst.</h2>
        <p>
          Diese Reihenfolge verhindert die häufigsten Fehlkäufe. Die großen
          Plattformentscheidungen kommen zuerst, Kabel und Feinschliff danach.
        </p>
      </div>
      <ol class="compat-workflow">${workflow}</ol>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Ausführliche Checks</p>
        <h2>Die wichtigsten Kompatibilitätsbereiche.</h2>
        <p>
          Jeder Bereich enthält konkrete Punkte, die du im Datenblatt, im
          Mainboard-Handbuch oder auf der Herstellerseite prüfen solltest.
        </p>
      </div>
      <div class="compat-grid">${cards}</div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Themenmatrix</p>
        <h2>Kurzer Check für alle Bibliothekseinträge.</h2>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Teil</th>
              <th>Zu prüfende Werte</th>
              <th>Wichtigster Hinweis</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}



