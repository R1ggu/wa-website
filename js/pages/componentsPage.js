import { PartCard } from "../components/PartCard.js";
import { SectionHeader } from "../components/SectionHeader.js";

export function renderComponentsPage(parts) {
  const partList = Object.values(parts);
  const cards = partList.map((part) => PartCard(part)).join("");
  const total = partList.length;
  const categories = Object.entries(
    partList.reduce((groups, part) => {
      groups[part.category] = groups[part.category] || [];
      groups[part.category].push(part);
      return groups;
    }, {}),
  )
    .map(
      ([category, items]) => `
        <article class="category-card">
          <span>${items.length} Themen</span>
          <h3>${category}</h3>
          <p>${items.map((item) => item.name).join(", ")}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section class="page-hero compact-hero">
      <p class="eyebrow">Komponentenbibliothek</p>
      <h1>Hardware, Kabel, Systeme und Netzwerk an einem Ort.</h1>
      <p>
        Suche nach CPU, GPU, Kabeln, Steckern, Server, Windows, Linux,
        Netzwerk, Treibern oder anderen PC-Themen.
      </p>
    </section>
    <section class="content-section">
      ${SectionHeader({
        kicker: "Kategorien",
        title: "Die Bibliothek ist in sinnvolle Bereiche aufgeteilt.",
        copy: "So erkennst du schneller, ob ein Thema zu Leistung, Verkabelung, Netzwerk, Software, Peripherie oder Wartung gehört.",
      })}
      <div class="category-overview">${categories}</div>
    </section>
    <section class="content-section">
      ${SectionHeader({
        kicker: "Alle Einträge",
        title: `${total} Themen mit eigenen Detailseiten.`,
        copy: "Das Suchfeld filtert live nach Namen, Kategorie, Nutzen, Specs und Beschreibung.",
      })}
      <div class="search-panel">
        <label for="component-search">Komponenten suchen</label>
        <input
          id="component-search"
          type="search"
          placeholder="z. B. CPU, SATA, Linux, Server, HDMI..."
          autocomplete="off"
          data-component-search
        />
        <span data-search-status>${total} Einträge gefunden</span>
      </div>
      <div class="part-grid">${cards}</div>
      <p class="empty-state" data-empty-state hidden>
        Kein Eintrag passt zu deiner Suche.
      </p>
    </section>
  `;
}



