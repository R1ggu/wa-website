import { PartCard } from "../components/PartCard.js";
import { SectionHeader } from "../components/SectionHeader.js";

export function renderComponentsPage(parts) {
  const cards = Object.values(parts)
    .map((part) => PartCard(part))
    .join("");
  const total = Object.values(parts).length;

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
        kicker: "Alle Eintraege",
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
        <span data-search-status>${total} Eintraege gefunden</span>
      </div>
      <div class="part-grid">${cards}</div>
      <p class="empty-state" data-empty-state hidden>
        Kein Eintrag passt zu deiner Suche.
      </p>
    </section>
  `;
}
