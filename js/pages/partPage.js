import { PartCard } from "../components/PartCard.js";

const categoryDescriptions = {
  Kernkomponenten:
    "Kernkomponenten bestimmen die grundsätzliche Leistung, Stabilität und Aufrüstbarkeit eines PCs. Sie sollten immer gemeinsam geplant werden.",
  "Kabel und Stecker":
    "Kabel und Stecker wirken klein, entscheiden aber darüber, ob Strom, Daten und Signale zuverlässig dort ankommen, wo sie gebraucht werden.",
  "Netzwerk und Server":
    "Netzwerk- und Server-Themen betreffen Geschwindigkeit, Dauerbetrieb, Sicherheit, Backups und Zugriff von mehreren Geräten.",
  "Software und Systeme":
    "Software und Systeme verbinden Hardware mit Alltag: Betriebssystem, Treiber, Firmware, Updates und Datensicherung machen Hardware erst nutzbar.",
  "Peripherie und Erweiterung":
    "Peripherie und Erweiterungen beeinflussen Bedienung, Bild, Ton, Eingabe und zusätzliche Funktionen, die über den eigentlichen PC hinausgehen.",
  "Wartung und Aufbau":
    "Wartung und Aufbau sorgen dafür, dass der PC nicht nur startet, sondern über Jahre sauber, kühl und zuverlässig bleibt.",
};

const renderList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const renderDetailCards = (part) => {
  const generatedDetails = [
    {
      title: "Kategorie einordnen",
      text: `${part.name} gehört zur Kategorie „${part.category}“ und zum Unterthema „${part.subcategory}“. ${categoryDescriptions[part.category]}`,
    },
    {
      title: "Wichtige Entscheidung",
      text: `Bei ${part.name} solltest du besonders auf ${part.specs.slice(0, 3).join(", ")} achten. Diese Werte entscheiden meistens, ob das Thema zu deinem Build passt.`,
    },
    {
      title: "Praxisnutzen",
      text: `Im Alltag ist ${part.name} vor allem relevant für ${part.uses.slice(0, 4).join(", ")}. Wenn genau das dein Ziel ist, lohnt sich ein genauerer Blick.`,
    },
    {
      title: "Zusammenhang",
      text: `${part.name} funktioniert nie isoliert. Prüfe immer, welche anderen Teile, Kabel, Treiber oder Einstellungen davon abhängen.`,
    },
  ];

  return [...part.details, ...generatedDetails]
    .map(
      (detail) => `
        <article>
          <h3>${detail.title}</h3>
          <p>${detail.text}</p>
        </article>
      `,
    )
    .join("");
};

const renderSpecCards = (part) =>
  part.specs
    .map(
      (spec) => `
        <article>
          <h3>${spec}</h3>
          <p>
            Prüfe diesen Punkt im Datenblatt, im Mainboard-Handbuch oder auf der
            Herstellerseite. Bei ${part.name} kann genau dieser Wert über
            Leistung, Kompatibilität oder Wartbarkeit entscheiden.
          </p>
        </article>
      `,
    )
    .join("");

const renderCategoryPills = (part) => {
  const pills = [part.category, part.subcategory, part.tag, ...part.uses.slice(0, 3)];

  return pills.map((pill) => `<span>${pill}</span>`).join("");
};

export function renderPartPage(part, allParts) {
  const relatedPool = Object.values(allParts).filter((item) => item.name !== part.name);
  const sameCategory = relatedPool.filter((item) => item.category === part.category);
  const related = [...sameCategory, ...relatedPool]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
    .slice(0, 4)
    .map((item) => PartCard(item, "part"))
    .join("");

  const specs = renderList(part.specs);
  const uses = renderList(part.uses);
  const details = renderDetailCards(part);
  const specCards = renderSpecCards(part);
  const categoryPills = renderCategoryPills(part);

  return `
    <section class="part-hero">
      <img src="${part.image}" alt="${part.fullName}" />
      <div class="part-hero-copy">
        <p class="eyebrow">${part.tag}</p>
        <h1>${part.name}</h1>
        <p>${part.fullName}</p>
        <span>${part.category} / ${part.subcategory}</span>
      </div>
    </section>
    <section class="content-section">
      <div class="category-strip" aria-label="Kategorien und Einsatzbereiche">${categoryPills}</div>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Hauptaufgabe</p>
        <h2>${part.summary}</h2>
        <p>${part.purpose}</p>
      </div>
      <div class="info-panel">
        <h3>Wichtige Specs</h3>
        <ul>${specs}</ul>
        <h3>Typische Nutzung</h3>
        <ul>${uses}</ul>
      </div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Detailwissen</p>
        <h2>Mehr Informationen zu ${part.name}.</h2>
        <p>
          Diese Karten erklären Begriffe, Einordnung, Praxisnutzen und typische
          Entscheidungen rund um dieses Thema.
        </p>
      </div>
      <div class="detail-grid extended-detail-grid">${details}</div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Prüfliste</p>
        <h2>Darauf solltest du konkret achten.</h2>
        <p>
          Nutze diese Punkte als schnelle Kontrolle, bevor du ein Teil kaufst,
          ein Kabel anschließt oder eine Einstellung änderst.
        </p>
      </div>
      <div class="spec-grid">${specCards}</div>
    </section>
    <section class="warning-section">
      <p class="section-kicker">Wichtig zu wissen</p>
      <h2>${part.warning}</h2>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Kompatibilitätsfrage</p>
        <h2>Was muss mit ${part.name} zusammenspielen?</h2>
        <p>
          Vergleiche ${part.name} immer mit Mainboard, Stromversorgung,
          Gehäuse, Betriebssystem, Treibern und den angrenzenden Themen in
          derselben Kategorie.
        </p>
      </div>
      <div class="info-panel">
        <h3>Kurzer Realitätscheck</h3>
        <ul>
          <li>Passt die Bauform oder der Anschluss wirklich?</li>
          <li>Sind alle nötigen Kabel, Ports oder Treiber vorhanden?</li>
          <li>Gibt es genug Platz, Strom, Kühlung oder Bandbreite?</li>
          <li>Ist ein Backup oder eine Dokumentation sinnvoll?</li>
        </ul>
      </div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Verwandte Themen</p>
        <h2>Der PC funktioniert immer als Ganzes.</h2>
      </div>
      <div class="part-grid">${related}</div>
    </section>
  `;
}



