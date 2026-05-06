export function PartCard(part, page = "home") {
  const href = page === "part" ? part.partHref : part.href;

  return `
    <article class="part-card">
      <a href="${href}">
        <img src="${part.image}" alt="${part.fullName}" loading="lazy" />
        <div class="part-card-body">
          <span class="part-index">${part.index}</span>
          <h3>${part.name}</h3>
          <p>${part.summary}</p>
          <span class="text-link">Open component</span>
        </div>
      </a>
    </article>
  `;
}
