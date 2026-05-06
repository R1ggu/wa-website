export function PartCard(part, page = "home") {
  const href = page === "part" ? part.partHref : part.href;
  const searchText = [
    part.name,
    part.fullName,
    part.category,
    part.subcategory,
    part.tag,
    part.summary,
    part.specs.join(" "),
    part.uses.join(" "),
  ]
    .join(" ")
    .toLowerCase()
    .replaceAll('"', "&quot;");

  return `
    <article class="part-card" data-search-card data-search-text="${searchText}">
      <a href="${href}">
        <img src="${part.image}" alt="${part.fullName}" loading="lazy" />
        <div class="part-card-body">
          <div class="part-meta">
            <span class="part-index">${part.index}</span>
            <span class="part-category">${part.category}</span>
          </div>
          <h3>${part.name}</h3>
          <span class="part-subcategory">${part.subcategory}</span>
          <p>${part.summary}</p>
          <span class="text-link">Komponente oeffnen</span>
        </div>
      </a>
    </article>
  `;
}
