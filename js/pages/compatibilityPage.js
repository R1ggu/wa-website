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
      <p class="eyebrow">Compatibility</p>
      <h1>Check the boring details before they become real problems.</h1>
      <p>
        Compatibility is mostly about sockets, sizes, connectors, power,
        firmware support, and airflow. This table gives you a fast review pass.
      </p>
    </section>
    <section class="content-section">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Specs to check</th>
              <th>Common mistake</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}
