const componentData = {
  cpu: {
    index: "01",
    tag: "Processing Core",
    name: "CPU",
    summary:
      "The CPU handles general-purpose calculations, logic, and system coordination across almost every program on the machine.",
    purpose:
      "It executes instructions, manages application tasks, and keeps the operating system responsive during work, browsing, and gaming.",
    specs: [
      "Core count for multitasking",
      "Clock speed for fast single-threaded work",
      "Socket compatibility with the motherboard",
    ],
    usage:
      "A strong CPU matters most for programming, office work, simulation, compiling code, and games that depend heavily on game logic.",
  },
  gpu: {
    index: "02",
    tag: "Visual Engine",
    name: "GPU",
    summary:
      "The GPU is built for massively parallel calculations, making it ideal for graphics, rendering, and compute-heavy visual tasks.",
    purpose:
      "It draws game scenes, accelerates creative software, and can offload specialized workloads such as AI inference or video encoding.",
    specs: [
      "Video memory capacity for textures and large scenes",
      "Power draw and connector requirements",
      "Physical size to fit inside the case",
    ],
    usage:
      "A good GPU is essential for gaming, 3D design, animation, machine learning workflows, and high-resolution multi-monitor setups.",
  },
  ram: {
    index: "03",
    tag: "Working Memory",
    name: "RAM",
    summary:
      "RAM stores data that active programs need right now, allowing the system to access it much faster than long-term storage.",
    purpose:
      "It keeps applications smooth while switching between tasks and prevents slowdowns when several programs are open at the same time.",
    specs: [
      "Capacity such as 16 GB or 32 GB",
      "Generation and speed, for example DDR4 or DDR5",
      "Available motherboard slots for future upgrades",
    ],
    usage:
      "More RAM helps with browser-heavy work, creative software, virtual machines, large spreadsheets, and modern games.",
  },
  storage: {
    index: "04",
    tag: "Data Layer",
    name: "Storage",
    summary:
      "Storage keeps the operating system, applications, documents, and games saved even after the computer is powered off.",
    purpose:
      "Fast SSD storage reduces boot time, accelerates loading screens, and makes large file transfers feel much quicker.",
    specs: [
      "Type, such as SATA SSD or NVMe SSD",
      "Capacity for your files, apps, and games",
      "Read and write speed for large workloads",
    ],
    usage:
      "Storage choices matter for anyone who installs many applications, edits media, or wants a faster day-to-day desktop experience.",
  },
  motherboard: {
    index: "05",
    tag: "System Backbone",
    name: "Motherboard",
    summary:
      "The motherboard connects all hardware parts together and decides which CPUs, memory types, and expansion options the build can support.",
    purpose:
      "It routes data, distributes power to components, and provides ports, slots, and headers for the rest of the system.",
    specs: [
      "CPU socket and chipset support",
      "Memory generation and maximum capacity",
      "Expansion slots, storage slots, and rear I/O ports",
    ],
    usage:
      "Choosing the right motherboard is important when planning upgrades, extra storage, add-in cards, or more advanced connectivity.",
  },
  psu: {
    index: "06",
    tag: "Power Control",
    name: "PSU",
    summary:
      "The PSU converts wall power into the stable voltages a computer's internal components need to run safely.",
    purpose:
      "It feeds electricity to every major part and protects the system when the hardware load rises under stress.",
    specs: [
      "Total wattage with room for future upgrades",
      "Efficiency rating such as 80 Plus Gold",
      "Required cables for GPU, CPU, and storage",
    ],
    usage:
      "A reliable PSU is critical for gaming systems, workstations, and any build using high-performance or power-hungry components.",
  },
  cooling: {
    index: "07",
    tag: "Thermal Balance",
    name: "Cooling",
    summary:
      "Cooling systems move heat away from components so the computer stays stable, quiet, and efficient during long sessions.",
    purpose:
      "Fans, heatsinks, and liquid coolers stop temperatures from climbing high enough to reduce performance or shorten hardware life.",
    specs: [
      "Cooler size and case compatibility",
      "Airflow direction across the full build",
      "Noise level under heavy load",
    ],
    usage:
      "Good cooling matters most for gaming PCs, rendering systems, overclocked builds, and compact cases with limited airflow.",
  },
};

const cards = document.querySelectorAll(".component-card");
const componentTag = document.querySelector("#component-tag");
const componentIndex = document.querySelector("#component-index");
const componentName = document.querySelector("#component-name");
const componentSummary = document.querySelector("#component-summary");
const componentPurpose = document.querySelector("#component-purpose");
const componentSpecs = document.querySelector("#component-specs");
const componentUsage = document.querySelector("#component-usage");

function renderComponent(key) {
  const component = componentData[key];

  if (!component) {
    return;
  }

  componentTag.textContent = component.tag;
  componentIndex.textContent = component.index;
  componentName.textContent = component.name;
  componentSummary.textContent = component.summary;
  componentPurpose.textContent = component.purpose;
  componentUsage.textContent = component.usage;
  componentSpecs.innerHTML = "";

  component.specs.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    componentSpecs.appendChild(li);
  });

  cards.forEach((card) => {
    const isActive = card.dataset.component === key;
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    renderComponent(card.dataset.component);
  });
});

renderComponent("cpu");
