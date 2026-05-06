export const hardwareParts = {
  cpu: {
    index: "01",
    tag: "Processing Core",
    name: "CPU",
    fullName: "Central Processing Unit",
    href: "parts/cpu.html",
    partHref: "cpu.html",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    summary:
      "The CPU executes instructions, coordinates the operating system, and keeps applications responsive.",
    purpose:
      "It handles game logic, browser work, code compilation, background services, file compression, and many everyday calculations that do not belong on specialized hardware.",
    specs: ["Cores and threads", "Boost clock", "Socket", "Cache size", "Power draw"],
    uses: ["Programming", "Office work", "Simulation", "Streaming", "CPU-heavy games"],
    warning:
      "Check motherboard socket and BIOS support before buying. A fast chip still needs cooling and power delivery that can keep up.",
  },
  gpu: {
    index: "02",
    tag: "Visual Engine",
    name: "GPU",
    fullName: "Graphics Processing Unit",
    href: "parts/gpu.html",
    partHref: "gpu.html",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80",
    summary:
      "The GPU renders graphics and accelerates highly parallel visual or compute workloads.",
    purpose:
      "It draws game frames, speeds up 3D viewports, helps video encoders, supports AI workloads, and drives high-resolution displays.",
    specs: ["VRAM capacity", "Board power", "Cooler size", "Display outputs", "Ray tracing support"],
    uses: ["Gaming", "3D design", "Video editing", "AI experiments", "Multi-monitor setups"],
    warning:
      "Measure the case before ordering. Modern graphics cards can be long, thick, and surprisingly demanding on the power supply.",
  },
  ram: {
    index: "03",
    tag: "Working Memory",
    name: "RAM",
    fullName: "Random Access Memory",
    href: "parts/ram.html",
    partHref: "ram.html",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1200&q=80",
    summary:
      "RAM stores active data so the CPU can reach it far faster than data saved on an SSD.",
    purpose:
      "It keeps multitasking smooth, allows large browser sessions, supports creative applications, and gives virtual machines room to breathe.",
    specs: ["Capacity", "DDR generation", "Speed", "Latency", "Module height"],
    uses: ["Multitasking", "Creative tools", "Virtual machines", "Large files", "Modern games"],
    warning:
      "DDR4 and DDR5 are not interchangeable. Also check whether tall memory modules collide with a large air cooler.",
  },
  storage: {
    index: "04",
    tag: "Data Layer",
    name: "Storage",
    fullName: "SSD and Mass Storage",
    href: "parts/storage.html",
    partHref: "storage.html",
    image:
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Storage keeps the operating system, applications, projects, photos, videos, and games available after power-off.",
    purpose:
      "Fast NVMe storage shortens boot times, reduces loading screens, improves large file transfers, and makes everyday work feel snappier.",
    specs: ["Capacity", "NVMe or SATA", "PCIe generation", "Endurance rating", "Thermal behavior"],
    uses: ["Operating systems", "Game libraries", "Video files", "Project archives", "Backups"],
    warning:
      "Not every M.2 slot supports every drive mode. Read the motherboard manual before choosing SATA M.2, NVMe, or multiple drives.",
  },
  motherboard: {
    index: "05",
    tag: "System Backbone",
    name: "Motherboard",
    fullName: "Mainboard Platform",
    href: "parts/motherboard.html",
    partHref: "motherboard.html",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "The motherboard connects the whole system and decides which CPUs, memory, slots, and ports the build can use.",
    purpose:
      "It routes data between components, distributes power, exposes rear I/O, and provides headers for fans, storage, lighting, and front-panel controls.",
    specs: ["Socket", "Chipset", "VRM quality", "Memory support", "Expansion slots"],
    uses: ["Upgrade planning", "Connectivity", "Storage expansion", "Overclocking", "Small form factor builds"],
    warning:
      "A cheap board can limit an expensive CPU. Look at power delivery, BIOS features, and rear ports instead of only the socket name.",
  },
  psu: {
    index: "06",
    tag: "Power Control",
    name: "PSU",
    fullName: "Power Supply Unit",
    href: "parts/psu.html",
    partHref: "psu.html",
    image:
      "https://images.unsplash.com/photo-1624705013726-8cb4f9415f40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "The PSU converts wall power into stable voltages that internal computer hardware can safely use.",
    purpose:
      "It powers the CPU, graphics card, drives, motherboard, fans, and accessories while protecting the system from electrical instability.",
    specs: ["Wattage", "Efficiency rating", "Cable connectors", "Modularity", "Warranty"],
    uses: ["Gaming PCs", "Workstations", "Quiet builds", "Future upgrades", "High-end GPUs"],
    warning:
      "Avoid no-name power supplies. A bad PSU can create instability, noise, shutdowns, and component damage.",
  },
  cooling: {
    index: "07",
    tag: "Thermal Balance",
    name: "Cooling",
    fullName: "Airflow and Thermal Control",
    href: "parts/cooling.html",
    partHref: "cooling.html",
    image:
      "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Cooling moves heat away from the CPU, GPU, storage, and voltage regulators so performance stays stable.",
    purpose:
      "Fans, heatsinks, radiators, and case airflow prevent thermal throttling during long gaming, rendering, or compiling sessions.",
    specs: ["Cooler height", "Radiator support", "Fan size", "Noise level", "Airflow path"],
    uses: ["Quiet systems", "Gaming", "Rendering", "Compact PCs", "Overclocking"],
    warning:
      "Air should enter and leave the case in a clear path. More fans are not always better when they fight each other.",
  },
  case: {
    index: "08",
    tag: "Physical Frame",
    name: "Case",
    fullName: "Computer Chassis",
    href: "parts/case.html",
    partHref: "case.html",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "The case holds every part in place and determines airflow, noise, clearance, desk footprint, and upgrade comfort.",
    purpose:
      "It gives the build structure, provides front-panel controls, filters dust, manages cables, and decides how easy the system is to maintain.",
    specs: ["Motherboard size", "GPU clearance", "Cooler clearance", "Fan mounts", "Front I/O"],
    uses: ["Clean cable routing", "Airflow planning", "Compact builds", "Quiet builds", "Showcase systems"],
    warning:
      "Small cases look neat but punish bad planning. Confirm the GPU, cooler, radiator, and cable space before buying.",
  },
};
