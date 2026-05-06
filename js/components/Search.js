export function initComponentSearch() {
  const input = document.querySelector("[data-component-search]");

  if (!input) {
    return;
  }

  const cards = [...document.querySelectorAll("[data-search-card]")];
  const status = document.querySelector("[data-search-status]");
  const emptyState = document.querySelector("[data-empty-state]");

  const updateResults = () => {
    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const isVisible = card.dataset.searchText.includes(query);
      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (status) {
      status.textContent =
        visibleCount === 1 ? "1 Eintrag gefunden" : `${visibleCount} Einträge gefunden`;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  };

  input.addEventListener("input", updateResults);
  updateResults();
}



