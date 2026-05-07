const commonsImage = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName).replaceAll("%20", "_")}`;

export const hardwareParts = {
  cpu: {
    index: "01",
    tag: "Rechenkern",
    name: "CPU",
    fullName: "Central Processing Unit",
    category: "Kernkomponenten",
    subcategory: "Prozessor",
    href: "parts/cpu.html",
    partHref: "cpu.html",
    image: commonsImage("Cpu 1.jpg"),
    summary:
      "Die CPU führt Befehle aus, koordiniert Programme und hält das Betriebssystem reaktionsschnell.",
    purpose:
      "Sie verarbeitet Spiellogik, Browser-Tabs, Code-Kompilierung, Hintergrunddienste, Dateikompression und viele Aufgaben, die nicht auf Spezialhardware ausgelagert werden.",
    specs: ["Kerne und Threads", "Boost-Takt", "Sockel", "Cache", "Leistungsaufnahme"],
    uses: ["Programmierung", "Office", "Simulation", "Streaming", "CPU-lastige Spiele"],
    warning:
      "Prüfe Sockel, Chipsatz und BIOS-Version. Eine schnelle CPU braucht trotzdem passende Kühlung und stabile Spannungsversorgung.",
    details: [
      {
        title: "Kerne und Threads",
        text: "Mehr Kerne helfen bei Multitasking, Rendering, virtuellen Maschinen und parallelen Builds. Für einfache Office-PCs reicht oft weniger.",
      },
      {
        title: "Sockel und Plattform",
        text: "Der CPU-Sockel entscheidet, welches Mainboard passt. Er bestimmt auch RAM-Generation, BIOS-Anforderungen und spätere Upgrade-Möglichkeiten.",
      },
      {
        title: "Wärme und Strom",
        text: "Moderne CPUs takten dynamisch. Gute Kühlung und ein solides Mainboard halten den Takt länger stabil.",
      },
    ],
  },
  gpu: {
    index: "02",
    tag: "Grafikmotor",
    name: "GPU",
    fullName: "Graphics Processing Unit",
    category: "Kernkomponenten",
    subcategory: "Grafikkarte",
    href: "parts/gpu.html",
    partHref: "gpu.html",
    image: commonsImage("A Complex Graphics Card.jpg"),
    summary:
      "Die GPU rendert Bilder und beschleunigt stark parallele Grafik-, Video- und Rechenaufgaben.",
    purpose:
      "Sie erzeugt Frames in Spielen, beschleunigt 3D-Ansichten, hilft beim Video-Encoding, treibt Monitore an und kann KI-Workloads beschleunigen.",
    specs: ["VRAM", "Leistungsaufnahme", "Kartenlänge", "Display-Ausgänge", "Raytracing"],
    uses: ["Gaming", "3D-Design", "Videoschnitt", "KI-Experimente", "Mehrere Monitore"],
    warning:
      "Miss das Gehäuse vorher aus. Moderne Grafikkarten können sehr lang, dick und stromhungrig sein.",
    details: [
      {
        title: "VRAM",
        text: "Videospeicher ist wichtig für hohe Auflösungen, Texturen, 3D-Szenen und kreative Projekte.",
      },
      {
        title: "PCIe und Strom",
        text: "Die GPU steckt im PCIe-x16-Slot und braucht je nach Modell zusätzliche 6-, 8- oder 12VHPWR-Stromstecker.",
      },
      {
        title: "Monitor-Ziel",
        text: "1080p, 1440p und 4K brauchen sehr unterschiedliche GPU-Leistung. Der Monitor entscheidet also mit.",
      },
    ],
  },
  ram: {
    index: "03",
    tag: "Arbeitsspeicher",
    name: "RAM",
    fullName: "Random Access Memory",
    category: "Kernkomponenten",
    subcategory: "Kurzzeitspeicher",
    href: "parts/ram.html",
    partHref: "ram.html",
    image: commonsImage("RAM Module (SDRAM-DDR4).jpg"),
    summary:
      "RAM speichert aktive Daten, damit die CPU viel schneller darauf zugreifen kann als auf eine SSD.",
    purpose:
      "Er hält viele Programme, Browser-Tabs, kreative Projekte und virtuelle Maschinen gleichzeitig flüssig.",
    specs: ["Kapazität", "DDR-Generation", "Takt", "Latenz", "Modulhöhe"],
    uses: ["Multitasking", "Creative Tools", "Virtuelle Maschinen", "Große Dateien", "Moderne Spiele"],
    warning:
      "DDR4 und DDR5 sind nicht austauschbar. Prüfe außerdem, ob hohe RAM-Module mit großen Luftkühlern kollidieren.",
    details: [
      {
        title: "Kapazität",
        text: "16 GB sind für einfache PCs solide, 32 GB sind heute sehr angenehm, 64 GB lohnen sich für VMs, Medienprojekte und schwere Workloads.",
      },
      {
        title: "Dual Channel",
        text: "Zwei passende Module liefern meist mehr Speicherbandbreite als ein einzelnes Modul gleicher Gesamtgröße.",
      },
      {
        title: "XMP und EXPO",
        text: "Viele RAM-Kits laufen erst nach Aktivierung des Speicherprofils im BIOS mit der beworbenen Geschwindigkeit.",
      },
    ],
  },
  storage: {
    index: "04",
    tag: "Datenschicht",
    name: "SSD / Speicher",
    fullName: "SSD und Massenspeicher",
    category: "Kernkomponenten",
    subcategory: "Langzeitspeicher",
    href: "parts/storage.html",
    partHref: "storage.html",
    image: commonsImage("Samsung 960 EVO NVME M.2 SSD by Daniel Aleksandersen.jpg"),
    summary:
      "Speicher hält Betriebssystem, Programme, Projekte, Fotos, Videos und Spiele auch nach dem Ausschalten bereit.",
    purpose:
      "Eine schnelle NVMe-SSD verkürzt Bootzeiten, Ladebildschirme, Projektstarts und große Dateiübertragungen.",
    specs: ["Kapazität", "NVMe oder SATA", "PCIe-Generation", "TBW", "Temperatur"],
    uses: ["Betriebssystem", "Game-Bibliothek", "Videoschnitt", "Projekte", "Backups"],
    warning:
      "Nicht jeder M.2-Slot unterstützt jeden Modus. Schau ins Mainboard-Handbuch, bevor du SATA-M.2, NVMe oder mehrere Laufwerke planst.",
    details: [
      {
        title: "NVMe vs. SATA",
        text: "NVMe nutzt PCIe-Lanes und ist deutlich schneller. SATA-SSDs sind für günstige Massenspeicher trotzdem noch brauchbar.",
      },
      {
        title: "Kapazitätsplanung",
        text: "Plane neben Windows oder Linux genug Platz für Programme, Spiele, Arbeitsdateien und Reserven für Updates ein.",
      },
      {
        title: "Kühlung",
        text: "Schnelle M.2-SSDs können warm werden. Mainboard-Heatsinks helfen bei langen Transfers.",
      },
    ],
  },
  motherboard: {
    index: "05",
    tag: "Systemplattform",
    name: "Mainboard",
    fullName: "Motherboard / Mainboard",
    category: "Kernkomponenten",
    subcategory: "Verbindungsplattform",
    href: "parts/motherboard.html",
    partHref: "motherboard.html",
    image: commonsImage("Motherboard (4313245815).jpg"),
    summary:
      "Das Mainboard verbindet alle Teile und entscheidet, welche CPUs, RAM-Module, Slots und Anschlüsse möglich sind.",
    purpose:
      "Es verteilt Strom, routet Daten, bietet Rückseitenanschlüsse und verbindet Lüfter, Speicher, Frontpanel und Erweiterungskarten.",
    specs: ["Sockel", "Chipsatz", "VRM", "RAM-Support", "Erweiterungsslots"],
    uses: ["Upgrades", "Anschlüsse", "Speichererweiterung", "Overclocking", "Kompakte Builds"],
    warning:
      "Ein zu schwaches Board kann eine starke CPU ausbremsen. Achte auf VRM, BIOS, Ports und nicht nur auf den Sockel.",
    details: [
      {
        title: "Formfaktor",
        text: "ATX, microATX und Mini-ITX bestimmen Gehäusegröße, Slot-Anzahl und wie eng der Aufbau wird.",
      },
      {
        title: "VRM",
        text: "Die Spannungswandler versorgen die CPU. Bei starken Prozessoren ist ihre Qualität wichtiger als viele Deko-Features.",
      },
      {
        title: "Header",
        text: "USB-Frontpanel, Audio, RGB, Lüfter und Power-Knopf brauchen passende Header auf dem Board.",
      },
    ],
  },
  psu: {
    index: "06",
    tag: "Stromversorgung",
    name: "Netzteil",
    fullName: "Power Supply Unit",
    category: "Kernkomponenten",
    subcategory: "Strom",
    href: "parts/psu.html",
    partHref: "psu.html",
    image: commonsImage("Full modular ATX power supply unit.jpg"),
    summary:
      "Das Netzteil wandelt Steckdosenstrom in stabile Spannungen für die internen PC-Komponenten um.",
    purpose:
      "Es versorgt CPU, GPU, Laufwerke, Mainboard, Lüfter und Zubehör und schützt den PC vor instabiler Stromversorgung.",
    specs: ["Wattzahl", "Effizienz", "Kabel", "Modularität", "Garantie"],
    uses: ["Gaming-PCs", "Workstations", "Leise Builds", "Upgrades", "Starke GPUs"],
    warning:
      "Spare nicht am falschen Ende. Ein schlechtes Netzteil kann Abstürze, Spulenfiepen und echte Hardware-Schäden verursachen.",
    details: [
      {
        title: "Watt-Reserve",
        text: "Plane Reserve für Lastspitzen und spätere Upgrades ein. Zu knapp dimensionierte Netzteile laufen lauter und instabiler.",
      },
      {
        title: "Kabelmanagement",
        text: "Modulare Netzteile machen den Build sauberer, weil ungenutzte Kabel nicht im Luftstrom liegen.",
      },
      {
        title: "GPU-Stecker",
        text: "Prüfe PCIe-8-Pin, 12VHPWR oder 12V-2x6 genau. Adapter sollten nicht geknickt und nicht unter Spannung verbaut werden.",
      },
    ],
  },
  cooling: {
    index: "07",
    tag: "Thermik",
    name: "Kühlung",
    fullName: "Airflow und Wärmeabfuhr",
    category: "Kernkomponenten",
    subcategory: "Thermal Design",
    href: "parts/cooling.html",
    partHref: "cooling.html",
    image: commonsImage("Cooler Master Hyper 212 EVO - CPU Cooler with 120mm PWM Fan (RR-212E-20PK-R2).jpg"),
    summary:
      "Kühlung transportiert Wärme von CPU, GPU, SSD und Spannungswandlern weg, damit Leistung stabil bleibt.",
    purpose:
      "Lüfter, Kühlkörper, Radiatoren und Gehäuse-Airflow verhindern Thermal Throttling bei langen Lastphasen.",
    specs: ["Kühlerhöhe", "Radiator-Support", "Lüftergröße", "Lautstärke", "Airflow-Pfad"],
    uses: ["Leise Systeme", "Gaming", "Rendering", "Kompakt-PCs", "Overclocking"],
    warning:
      "Luft sollte klar ins Gehäuse hinein und wieder hinaus. Mehr Lüfter helfen nicht, wenn sie gegeneinander arbeiten.",
    details: [
      {
        title: "Luftkühlung",
        text: "Gute Tower-Kühler sind günstig, robust und für viele CPUs mehr als ausreichend.",
      },
      {
        title: "AIO-Wasserkühlung",
        text: "AIOs können hohe Spitzenlasten gut abfangen, brauchen aber Radiatorplatz und saubere Schlauchführung.",
      },
      {
        title: "Airflow",
        text: "Front und Boden eignen sich oft als Intake, Rückseite und Deckel als Exhaust. Staubfilter brauchen Reinigung.",
      },
    ],
  },
  case: {
    index: "08",
    tag: "Gehäuse",
    name: "Gehäuse",
    fullName: "Computer Chassis",
    category: "Kernkomponenten",
    subcategory: "Rahmen und Airflow",
    href: "parts/case.html",
    partHref: "case.html",
    image: commonsImage("Computer case 20170910.jpg"),
    summary:
      "Das Gehäuse hält alle Teile, beeinflusst Airflow, Lautstärke, Platzbedarf und Wartbarkeit.",
    purpose:
      "Es gibt dem Build Struktur, filtert Staub, führt Kabel, bietet Frontanschlüsse und entscheidet, wie leicht Upgrades werden.",
    specs: ["Mainboard-Größe", "GPU-Freiraum", "Kühler-Freiraum", "Lüfterplätze", "Front-I/O"],
    uses: ["Saubere Kabel", "Airflow", "Kompakte Builds", "Leise Builds", "Showcase-PCs"],
    warning:
      "Kleine Gehäuse sehen ordentlich aus, verzeihen aber schlechte Planung kaum. Prüfe GPU, Kühler, Radiator und Kabelraum.",
    details: [
      {
        title: "Clearance",
        text: "GPU-Länge, CPU-Kühlerhöhe und Radiatorstärke müssen gleichzeitig passen.",
      },
      {
        title: "Frontpanel",
        text: "USB-C, Audio und Power-Button brauchen passende Kabel zum Mainboard.",
      },
      {
        title: "Wartung",
        text: "Gute Staubfilter, abnehmbare Panels und Platz hinter dem Mainboard erleichtern Pflege und Umbau.",
      },
    ],
  },
  sataCable: {
    index: "09",
    tag: "Datenkabel",
    name: "SATA-Kabel",
    fullName: "Serial ATA Datenkabel",
    category: "Kabel und Stecker",
    subcategory: "Storage-Verbindung",
    href: "parts/sata-cable.html",
    partHref: "sata-cable.html",
    image: commonsImage("SATA cables (2026).jpg"),
    summary:
      "SATA-Kabel verbinden SATA-SSDs, HDDs und optische Laufwerke mit dem Mainboard.",
    purpose:
      "Sie übertragen Daten zwischen Laufwerk und Chipsatz. Für Strom braucht das Laufwerk zusätzlich ein SATA-Stromkabel vom Netzteil.",
    specs: ["SATA III", "Kabellänge", "Gerader Stecker", "Winkelstecker", "Mainboard-Port"],
    uses: ["2,5-Zoll-SSDs", "HDDs", "DVD-Laufwerke", "Günstige Massenspeicher", "Datenmigration"],
    warning:
      "SATA-Datenkabel und SATA-Stromkabel sehen unterschiedlich aus. Beide müssen korrekt sitzen.",
    details: [
      {
        title: "Daten vs. Strom",
        text: "Das schmale Kabel ist für Daten. Der breitere Stecker vom Netzteil liefert Strom.",
      },
      {
        title: "Winkelstecker",
        text: "In engen Gehäusen kann ein 90-Grad-Stecker helfen, Kabel sauber zu führen.",
      },
    ],
  },
  powerCables: {
    index: "10",
    tag: "Stromstecker",
    name: "PC-Stromkabel",
    fullName: "ATX, EPS und PCIe Stromkabel",
    category: "Kabel und Stecker",
    subcategory: "Power Delivery",
    href: "parts/power-cables.html",
    partHref: "power-cables.html",
    image: commonsImage("PowerSupplyUnit 24Pins.png"),
    summary:
      "Stromkabel versorgen Mainboard, CPU, GPU, Laufwerke und Zubehör mit den passenden Spannungen.",
    purpose:
      "ATX 24-Pin speist das Mainboard, EPS speist die CPU, PCIe-Kabel speisen die Grafikkarte und SATA-Strom versorgt Laufwerke.",
    specs: ["24-Pin ATX", "8-Pin EPS", "PCIe 6+2", "12VHPWR", "SATA Power"],
    uses: ["Mainboard", "CPU", "GPU", "SSDs", "Lüfter-Hubs"],
    warning:
      "Verwechsle CPU-EPS- und GPU-PCIe-Kabel nicht. Sie können ähnlich aussehen, sind aber anders belegt.",
    details: [
      {
        title: "Beschriftung lesen",
        text: "Viele modulare Netzteile beschriften Kabelenden. Die PSU-Seite gehört nur in das passende Netzteilmodell.",
      },
      {
        title: "Nicht mischen",
        text: "Modulare Kabel anderer Netzteile können andere Pinouts haben und Hardware zerstören.",
      },
    ],
  },
  pcieSlot: {
    index: "11",
    tag: "Erweiterung",
    name: "PCIe-Slot",
    fullName: "PCI Express Erweiterungssteckplatz",
    category: "Kabel und Stecker",
    subcategory: "Mainboard-Slot",
    href: "parts/pcie-slot.html",
    partHref: "pcie-slot.html",
    image: commonsImage("Pci Express Slot.png"),
    summary:
      "PCIe-Slots nehmen Grafikkarten, Soundkarten, Netzwerkkarten, Capture-Karten und Speicheradapter auf.",
    purpose:
      "Sie stellen schnelle Datenleitungen zwischen CPU, Chipsatz und Erweiterungskarten bereit.",
    specs: ["x1", "x4", "x8", "x16", "PCIe Generation"],
    uses: ["GPU", "Soundkarte", "10G-Netzwerk", "Capture Card", "M.2-Adapter"],
    warning:
      "Ein langer Slot ist nicht immer elektrisch voll angebunden. Lies die Lane-Aufteilung im Handbuch.",
    details: [
      {
        title: "Lane-Anzahl",
        text: "x16 bietet viele Datenleitungen, x1 reicht für kleinere Karten. Manche Slots teilen sich Lanes mit M.2-Slots.",
      },
      {
        title: "Mechanisch vs. elektrisch",
        text: "Ein physischer x16-Slot kann elektrisch nur x4 angebunden sein.",
      },
    ],
  },
  usbPorts: {
    index: "12",
    tag: "Peripherie",
    name: "USB-Ports",
    fullName: "USB-A, USB-C und interne USB-Header",
    category: "Kabel und Stecker",
    subcategory: "Externe Anschlüsse",
    href: "parts/usb-ports.html",
    partHref: "usb-ports.html",
    image: commonsImage("USB-Connector-Standard.jpg"),
    summary:
      "USB verbindet Maus, Tastatur, Headset, Controller, externe SSDs, Kameras und viele andere Geräte.",
    purpose:
      "USB überträgt Daten und Strom. Je nach Version unterscheiden sich Geschwindigkeit, Ladeleistung und Steckerform.",
    specs: ["USB-A", "USB-C", "USB 3.x", "Thunderbolt", "Frontpanel-Header"],
    uses: ["Maus", "Tastatur", "Externe SSD", "Headset", "Webcam"],
    warning:
      "USB-C bedeutet nicht automatisch hohe Geschwindigkeit. Die Version und der Controller sind entscheidend.",
    details: [
      {
        title: "Frontpanel",
        text: "Front-USB am Gehäuse braucht passende interne Header auf dem Mainboard.",
      },
      {
        title: "Strom",
        text: "Einige Ports liefern mehr Ladeleistung als andere. Für externe SSDs ist stabile Stromversorgung wichtig.",
      },
    ],
  },
  ethernet: {
    index: "13",
    tag: "Netzwerk",
    name: "Ethernet / RJ45",
    fullName: "Kabelgebundene Netzwerkverbindung",
    category: "Netzwerk und Server",
    subcategory: "LAN",
    href: "parts/ethernet.html",
    partHref: "ethernet.html",
    image: commonsImage("Cat-5e Ethernet network cable RJ45 end connectors.jpg"),
    summary:
      "Ethernet verbindet PCs, Router, Switches, NAS und Server stabil über Netzwerkkabel.",
    purpose:
      "Eine LAN-Verbindung bietet niedrige Latenz, gute Stabilität und hohe Geschwindigkeit für Gaming, Backups und Streaming.",
    specs: ["1 Gbit/s", "2,5 Gbit/s", "10 Gbit/s", "Cat5e", "Cat6"],
    uses: ["Gaming", "NAS", "Server", "Homeoffice", "Streaming"],
    warning:
      "Kabelkategorie, Switch und Netzwerkkarte müssen die Zielgeschwindigkeit gemeinsam unterstützen.",
    details: [
      {
        title: "RJ45",
        text: "Der typische LAN-Stecker rastet mit einer kleinen Nase ein und nutzt verdrillte Adernpaare.",
      },
      {
        title: "Kabelkategorien",
        text: "Cat5e reicht für 1 Gbit/s, Cat6 oder besser ist für längere und schnellere Verbindungen sinnvoll.",
      },
    ],
  },
  displayPorts: {
    index: "14",
    tag: "Bildausgabe",
    name: "HDMI / DisplayPort",
    fullName: "Monitor- und TV-Anschlüsse",
    category: "Kabel und Stecker",
    subcategory: "Videoausgabe",
    href: "parts/hdmi-displayport.html",
    partHref: "hdmi-displayport.html",
    image: commonsImage("DisplayPort (connector).PNG"),
    summary:
      "HDMI und DisplayPort übertragen Bild und Ton von GPU, Mainboard oder Laptop zum Monitor.",
    purpose:
      "Sie entscheiden mit, welche Auflösung, Bildrate, HDR-Funktionen und Adaptive-Sync-Features nutzbar sind.",
    specs: ["HDMI 2.1", "DisplayPort 1.4", "DisplayPort 2.x", "HDR", "Variable Refresh Rate"],
    uses: ["Monitore", "Fernseher", "Gaming", "Mehrschirm-Setups", "Projektoren"],
    warning:
      "Nicht jedes Kabel kann jede Auflösung und Bildrate. 4K mit hoher Hz-Zahl braucht passende Versionen.",
    details: [
      {
        title: "DisplayPort",
        text: "Am PC ist DisplayPort oft die beste Wahl für hohe Bildraten und Adaptive Sync.",
      },
      {
        title: "HDMI",
        text: "HDMI ist besonders verbreitet bei TVs, Konsolen, Beamern und Wohnzimmer-Setups.",
      },
    ],
  },
  m2Slot: {
    index: "15",
    tag: "Direktspeicher",
    name: "M.2-Slot",
    fullName: "M.2 Anschluss für SSDs und Erweiterungen",
    category: "Kabel und Stecker",
    subcategory: "Storage-Slot",
    href: "parts/m2-slot.html",
    partHref: "m2-slot.html",
    image: commonsImage("Samsung 960 EVO NVME M.2 SSD by Daniel Aleksandersen.jpg"),
    summary:
      "M.2-Slots nehmen kompakte SSDs oder Funkmodule direkt auf dem Mainboard auf.",
    purpose:
      "Sie sparen Kabel, bieten hohe NVMe-Geschwindigkeit und können je nach Slot SATA- oder PCIe-Signale nutzen.",
    specs: ["M-Key", "B-Key", "2280", "PCIe 4.0", "PCIe 5.0"],
    uses: ["NVMe-SSD", "WLAN-Modul", "Kompakt-PC", "Laptop", "Schneller Systemdatenträger"],
    warning:
      "M.2 beschreibt nur die Bauform. Ob SATA oder NVMe unterstützt wird, steht im Mainboard-Handbuch.",
    details: [
      {
        title: "Längen",
        text: "2280 ist sehr verbreitet: 22 mm breit und 80 mm lang. Kleine Systeme nutzen oft 2230 oder 2242.",
      },
      {
        title: "Lane-Sharing",
        text: "Manche M.2-Slots deaktivieren SATA-Ports oder teilen PCIe-Lanes mit anderen Slots.",
      },
    ],
  },
  biosUefi: {
    index: "16",
    tag: "Firmware",
    name: "BIOS / UEFI",
    fullName: "Mainboard-Firmware",
    category: "Software und Systeme",
    subcategory: "Startsystem",
    href: "parts/bios-uefi.html",
    partHref: "bios-uefi.html",
    image: commonsImage("BIOS Setup First Time.jpg"),
    summary:
      "BIOS bzw. UEFI startet den PC, erkennt Hardware und stellt Grundfunktionen vor dem Betriebssystem bereit.",
    purpose:
      "Dort stellst du Boot-Reihenfolge, RAM-Profile, Lüfterkurven, Sicherheitsfunktionen und manchmal CPU-Limits ein.",
    specs: ["Boot Mode", "XMP / EXPO", "Secure Boot", "TPM", "BIOS Flashback"],
    uses: ["Windows-Installation", "Linux-Installation", "RAM-Tuning", "Lüfterkurven", "Hardware-Erkennung"],
    warning:
      "BIOS-Updates nur mit stabiler Stromversorgung und passender Datei durchführen. Ein falsches Update kann das Board blockieren.",
    details: [
      {
        title: "UEFI-Modus",
        text: "Moderne Betriebssysteme nutzen UEFI mit GPT-Partitionen. Legacy-Modus ist meist nur für alte Systeme wichtig.",
      },
      {
        title: "Secure Boot",
        text: "Secure Boot hilft gegen manipulierte Bootloader, kann aber bei manchen Linux-Setups zusätzliche Schritte erfordern.",
      },
    ],
  },
  windows: {
    index: "17",
    tag: "Betriebssystem",
    name: "Windows",
    fullName: "Microsoft Windows",
    category: "Software und Systeme",
    subcategory: "Desktop-OS",
    href: "parts/windows.html",
    partHref: "windows.html",
    image: commonsImage("Microsoft Windows 11.png"),
    summary:
      "Windows ist das verbreitete Desktop-Betriebssystem für Gaming, Office, Schule, Treiber und viele Programme.",
    purpose:
      "Es verwaltet Hardware, Benutzeroberfläche, Programme, Updates, Treiber, Speicher, Sicherheit und Gaming-Funktionen.",
    specs: ["Edition", "Lizenz", "Treiber", "Updates", "Secure Boot / TPM"],
    uses: ["Gaming", "Office", "Schule", "Creative Apps", "Hardware-Tools"],
    warning:
      "Vor der Installation Treiber, Lizenz, Backup und Windows-11-Anforderungen wie TPM und Secure Boot prüfen.",
    details: [
      {
        title: "Treiber",
        text: "GPU-, Chipsatz-, Audio- und Netzwerktreiber entscheiden oft über Stabilität und Leistung.",
      },
      {
        title: "Updates",
        text: "Windows Update liefert Sicherheitspatches, kann aber große Versionsupdates brauchen. Backups sind davor sinnvoll.",
      },
    ],
  },
  linux: {
    index: "18",
    tag: "Betriebssystem",
    name: "Linux",
    fullName: "Linux-Distributionen",
    category: "Software und Systeme",
    subcategory: "Desktop und Server",
    href: "parts/linux.html",
    partHref: "linux.html",
    image: commonsImage("Kali Linux Desktop.png"),
    summary:
      "Linux ist ein freies Betriebssystem-Ökosystem für Server, Entwicklung, Datenschutz und flexible Desktop-Setups.",
    purpose:
      "Distributionen wie Ubuntu, Fedora, Debian oder Arch stellen Kernel, Paketverwaltung, Desktop und Systemdienste bereit.",
    specs: ["Distribution", "Kernel", "Paketmanager", "Desktop Environment", "Dateisystem"],
    uses: ["Server", "Programmierung", "Container", "Datenschutz", "Alte Hardware"],
    warning:
      "Prüfe vorher WLAN, GPU-Treiber, Spezialsoftware und Spielekompatibilität. Nicht jede Windows-App läuft direkt.",
    details: [
      {
        title: "Distribution",
        text: "Ubuntu ist einsteigerfreundlich, Debian stabil, Fedora aktuell, Arch sehr flexibel.",
      },
      {
        title: "Terminal",
        text: "Viele Linux-Aufgaben lassen sich komfortabel per Terminal automatisieren, besonders auf Servern.",
      },
    ],
  },
  server: {
    index: "19",
    tag: "Infrastruktur",
    name: "Server",
    fullName: "Server-Hardware und Dienste",
    category: "Netzwerk und Server",
    subcategory: "Dauerbetrieb",
    href: "parts/server.html",
    partHref: "server.html",
    image: commonsImage("Server Rack (54126210834).jpg"),
    summary:
      "Server stellen Dienste wie Webseiten, Dateien, Datenbanken, Backups oder virtuelle Maschinen dauerhaft bereit.",
    purpose:
      "Sie sind für Zuverlässigkeit, Netzwerkzugriff, Speicher, Fernwartung und Dauerlast ausgelegt.",
    specs: ["ECC-RAM", "RAID", "Redundante Netzteile", "Remote Management", "Uptime"],
    uses: ["Webhosting", "NAS", "Datenbanken", "Virtualisierung", "Backups"],
    warning:
      "Server brauchen Kühlung, Strombudget, Backups und Sicherheitsupdates. Dauerbetrieb ist mehr als nur alter PC im Keller.",
    details: [
      {
        title: "Home Server",
        text: "Ein kleiner Heimserver kann Dateien, Medien, Backups, DNS oder Smart-Home-Dienste bereitstellen.",
      },
      {
        title: "Rechenzentrum",
        text: "Rack-Server priorisieren Wartbarkeit, Fernzugriff, Redundanz und hohe Packungsdichte.",
      },
    ],
  },
  networkSwitch: {
    index: "20",
    tag: "LAN-Verteilung",
    name: "Netzwerk-Switch",
    fullName: "Ethernet Switch",
    category: "Netzwerk und Server",
    subcategory: "Netzwerk-Hub",
    href: "parts/network-switch.html",
    partHref: "network-switch.html",
    image: commonsImage("Network Device (Switch).jpg"),
    summary:
      "Ein Switch verbindet mehrere kabelgebundene Geräte in einem lokalen Netzwerk.",
    purpose:
      "Er verteilt Datenpakete gezielt zwischen PCs, Servern, NAS, Access Points, Druckern und Routern.",
    specs: ["Port-Anzahl", "1G / 2,5G / 10G", "PoE", "Managed", "VLAN"],
    uses: ["Heimnetz", "NAS", "Serverrack", "Büros", "Access Points"],
    warning:
      "Ein Switch erhöht nicht automatisch die Internetgeschwindigkeit. Er verbessert vor allem lokale Verbindungen.",
    details: [
      {
        title: "Managed vs. unmanaged",
        text: "Unmanaged ist einfach. Managed bietet VLANs, Monitoring, Port-Konfiguration und mehr Kontrolle.",
      },
      {
        title: "PoE",
        text: "Power over Ethernet versorgt Access Points, Kameras oder VoIP-Telefone direkt über das Netzwerkkabel.",
      },
    ],
  },
  router: {
    index: "21",
    tag: "Internet-Gateway",
    name: "Router",
    fullName: "Heimrouter und Gateway",
    category: "Netzwerk und Server",
    subcategory: "Routing",
    href: "parts/router.html",
    partHref: "router.html",
    image: commonsImage("Netgear N300 wireless router n01.jpg"),
    summary:
      "Der Router verbindet dein lokales Netzwerk mit dem Internet und verteilt IP-Adressen.",
    purpose:
      "Er übernimmt NAT, Firewall-Grundschutz, DHCP, DNS-Weiterleitung, WLAN und oft auch Telefonie oder VPN.",
    specs: ["WAN-Port", "LAN-Ports", "WLAN-Standard", "Firewall", "VPN"],
    uses: ["Internet", "WLAN", "Portfreigaben", "Smart Home", "VPN"],
    warning:
      "Standardpasswörter und alte Firmware sind ein Risiko. Router sollten regelmäßig aktualisiert werden.",
    details: [
      {
        title: "DHCP",
        text: "DHCP vergibt IP-Adressen automatisch, damit neue Geräte ohne Handarbeit ins Netzwerk kommen.",
      },
      {
        title: "Firewall",
        text: "Die Router-Firewall blockiert viele eingehende Verbindungen aus dem Internet.",
      },
    ],
  },
  wifi: {
    index: "22",
    tag: "Funknetz",
    name: "WLAN / Wi-Fi",
    fullName: "Drahtloses Netzwerk",
    category: "Netzwerk und Server",
    subcategory: "Wireless",
    href: "parts/wifi.html",
    partHref: "wifi.html",
    image: commonsImage("Wireless router, internal components (LevelOne WBR-6002).jpg"),
    summary:
      "WLAN verbindet Geräte ohne Netzwerkkabel und ist bequem für Laptops, Smartphones und mobile Hardware.",
    purpose:
      "Access Points senden Funknetze, Clients verbinden sich über 2,4 GHz, 5 GHz oder 6 GHz.",
    specs: ["Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 6E", "Wi-Fi 7", "Antenne"],
    uses: ["Laptop", "Smartphone", "Tablet", "Smart Home", "Gäste-WLAN"],
    warning:
      "Wände, Nachbarnetze und Entfernung können WLAN stark bremsen. Für Gaming und Server ist LAN oft stabiler.",
    details: [
      {
        title: "Frequenzbänder",
        text: "2,4 GHz reicht weiter, 5 GHz ist schneller, 6 GHz ist moderner und oft freier.",
      },
      {
        title: "Mesh",
        text: "Mesh-Systeme können große Wohnungen besser abdecken, brauchen aber gute Positionierung.",
      },
    ],
  },
  soundCard: {
    index: "23",
    tag: "Audio",
    name: "Soundkarte",
    fullName: "Interne oder externe Audio-Hardware",
    category: "Peripherie und Erweiterung",
    subcategory: "Audio",
    href: "parts/sound-card.html",
    partHref: "sound-card.html",
    image: commonsImage("Sound card 2.jpg"),
    summary:
      "Soundkarten verbessern oder erweitern Audio-Ein- und Ausgänge eines PCs.",
    purpose:
      "Sie bieten bessere Wandler, mehr Anschlüsse, Surround-Ausgabe, Mikrofonvorverstärker oder optische Audioports.",
    specs: ["DAC", "ADC", "SNR", "Kopfhörerverstärker", "Treiber"],
    uses: ["Headsets", "Musikproduktion", "Streaming", "Surround", "Optischer Ausgang"],
    warning:
      "Viele Mainboards haben bereits brauchbaren Sound. Eine Soundkarte lohnt sich vor allem bei konkreten Audio-Anforderungen.",
    details: [
      {
        title: "Intern oder extern",
        text: "Externe USB-Audiointerfaces sind oft besser gegen Störgeräusche im PC geschützt.",
      },
      {
        title: "Anschlüsse",
        text: "Achte auf Klinke, Line-In, optisch, XLR oder MIDI je nach Einsatzzweck.",
      },
    ],
  },
  thermalPaste: {
    index: "24",
    tag: "Wärmeübergang",
    name: "Wärmeleitpaste",
    fullName: "Thermal Paste",
    category: "Wartung und Aufbau",
    subcategory: "Kühlermontage",
    href: "parts/thermal-paste.html",
    partHref: "thermal-paste.html",
    image: commonsImage("Thermal Paste 9648.jpg"),
    summary:
      "Wärmeleitpaste füllt mikroskopische Unebenheiten zwischen CPU und Kühler.",
    purpose:
      "Sie verbessert den Wärmeübergang, damit der Kühler Hitze effizienter abführen kann.",
    specs: ["Menge", "Viskosität", "Leitfähigkeit", "Haltbarkeit", "Reinigung"],
    uses: ["CPU-Kühler", "GPU-Wartung", "Laptop-Service", "Temperaturverbesserung", "Neuaufbau"],
    warning:
      "Zu viel Paste kann verschmieren, zu wenig kann Hotspots erzeugen. Ein kleiner Punkt in der Mitte reicht oft.",
    details: [
      {
        title: "Auftragen",
        text: "Bei Desktop-CPUs funktioniert ein erbsengroßer Punkt meist gut, weil der Kühler den Druck verteilt.",
      },
      {
        title: "Erneuern",
        text: "Nach mehreren Jahren, hohen Temperaturen oder Kühlerwechsel kann neue Paste sinnvoll sein.",
      },
    ],
  },
  fanHeaders: {
    index: "25",
    tag: "Lüftersteuerung",
    name: "Fan-Header",
    fullName: "3-Pin und 4-Pin Lüfteranschlüsse",
    category: "Kabel und Stecker",
    subcategory: "Kühlungsanschluss",
    href: "parts/fan-headers.html",
    partHref: "fan-headers.html",
    image: commonsImage("Atx computer motherboard with cpu and fan.jpg"),
    summary:
      "Fan-Header verbinden Gehäuse- und CPU-Lüfter mit dem Mainboard.",
    purpose:
      "Sie liefern Strom und steuern Drehzahlen über Spannung oder PWM, damit der PC kühl und leise bleibt.",
    specs: ["3-Pin DC", "4-Pin PWM", "Ampere-Limit", "CPU_FAN", "SYS_FAN"],
    uses: ["CPU-Lüfter", "Gehäuselüfter", "Lüfter-Hub", "AIO-Pumpe", "Airflow-Steuerung"],
    warning:
      "Überschreite nicht das Stromlimit eines Headers. Viele Lüfter gehören an einen Hub mit eigener Stromversorgung.",
    details: [
      {
        title: "PWM",
        text: "4-Pin-PWM regelt die Drehzahl genauer, während die Spannung stabil bleiben kann.",
      },
      {
        title: "CPU_FAN",
        text: "Der CPU_FAN-Header sollte belegt sein, sonst melden viele Mainboards beim Start einen Fehler.",
      },
    ],
  },
  monitor: {
    index: "26",
    tag: "Ausgabe",
    name: "Monitor",
    fullName: "Bildschirm",
    category: "Peripherie und Erweiterung",
    subcategory: "Anzeige",
    href: "parts/monitor.html",
    partHref: "monitor.html",
    image: commonsImage("Computer monitor.jpg"),
    summary:
      "Der Monitor entscheidet, wie du die Leistung des PCs wirklich siehst: Auflösung, Bildrate, Farben und Größe.",
    purpose:
      "Er zeigt Desktop, Spiele, Videos und kreative Projekte an und bestimmt, ob die GPU eher 1080p, 1440p oder 4K bedienen muss.",
    specs: ["Auflösung", "Hz", "Paneltyp", "Farbraum", "Adaptive Sync"],
    uses: ["Gaming", "Office", "Bildbearbeitung", "Coding", "Streaming"],
    warning:
      "Ein starker PC fühlt sich mit schlechtem Monitor schlechter an. Plane Display und GPU zusammen.",
    details: [
      {
        title: "Bildrate",
        text: "144 Hz oder mehr wirken in Spielen und beim Scrollen flüssiger, brauchen aber auch passende GPU-Leistung.",
      },
      {
        title: "Panel",
        text: "IPS ist oft farbstark, VA hat guten Kontrast, OLED bietet perfekte Schwarzwerte, braucht aber Burn-in-Bewusstsein.",
      },
    ],
  },
  keyboard: {
    index: "27",
    tag: "Eingabe",
    name: "Tastatur",
    fullName: "Keyboard",
    category: "Peripherie und Erweiterung",
    subcategory: "Eingabegerät",
    href: "parts/keyboard.html",
    partHref: "keyboard.html",
    image: commonsImage("Computer keyboard.png"),
    summary:
      "Die Tastatur ist das wichtigste Eingabegerät für Schreiben, Programmieren, Shortcuts und viele Spiele.",
    purpose:
      "Layout, Schalter, Lautstärke, Größe und Ergonomie beeinflussen den Alltag stärker, als man beim PC-Kauf oft denkt.",
    specs: ["Layout", "Switches", "Formfaktor", "N-Key Rollover", "Funk oder Kabel"],
    uses: ["Schreiben", "Programmieren", "Gaming", "Shortcuts", "Office"],
    warning:
      "Achte auf deutsches oder Schweizer Layout, wenn du Umlaute, Sonderzeichen und gewohnte Tastenpositionen brauchst.",
    details: [
      {
        title: "Mechanisch vs. Membran",
        text: "Mechanische Tastaturen haben einzelne Schalter und sind oft langlebiger, aber nicht automatisch besser für jeden.",
      },
      {
        title: "Formfaktor",
        text: "Fullsize hat Nummernblock, TKL spart Platz, 60 Prozent ist minimalistisch und braucht mehr Tastenkombinationen.",
      },
    ],
  },
  mouse: {
    index: "28",
    tag: "Eingabe",
    name: "Maus",
    fullName: "Computer Mouse",
    category: "Peripherie und Erweiterung",
    subcategory: "Zeigegerät",
    href: "parts/mouse.html",
    partHref: "mouse.html",
    image: commonsImage("A computer mouse.jpg"),
    summary:
      "Die Maus steuert Cursor, Kamera, Auswahl und Präzision in Desktop- und Gaming-Anwendungen.",
    purpose:
      "Sensor, Gewicht, Form, Tasten und Gleitverhalten entscheiden, wie angenehm und genau sich der PC bedienen lässt.",
    specs: ["Sensor", "DPI", "Gewicht", "Polling Rate", "Ergonomie"],
    uses: ["Gaming", "Office", "Grafikarbeit", "CAD", "Alltag"],
    warning:
      "DPI ist nicht alles. Form, Gewicht und Sensorqualität sind meist wichtiger als extreme Zahlen auf der Verpackung.",
    details: [
      {
        title: "Grip",
        text: "Palm, claw und fingertip grip fühlen sich mit unterschiedlichen Mausformen besser an.",
      },
      {
        title: "Kabel oder Funk",
        text: "Moderne Funkmäuse können sehr schnell sein, brauchen aber Akku- oder Batteriemanagement.",
      },
    ],
  },
  drivers: {
    index: "29",
    tag: "Software-Brücke",
    name: "Treiber",
    fullName: "Device Drivers",
    category: "Software und Systeme",
    subcategory: "Hardware-Kommunikation",
    href: "parts/drivers.html",
    partHref: "drivers.html",
    image: commonsImage("Hardware is disabled.png"),
    summary:
      "Treiber übersetzen zwischen Betriebssystem und Hardware, damit Geräte korrekt funktionieren.",
    purpose:
      "GPU, Chipsatz, Audio, Netzwerk, Drucker und Spezialgeräte brauchen passende Software-Schichten für Funktionen und Leistung.",
    specs: ["Chipsatztreiber", "GPU-Treiber", "Audio", "LAN / WLAN", "Firmware"],
    uses: ["Windows", "Linux", "Gaming", "Stabilität", "Neue Hardware"],
    warning:
      "Installiere Treiber am besten vom Hersteller oder über vertrauenswürdige Paketquellen. Random Driver-Updater sind riskant.",
    details: [
      {
        title: "GPU-Treiber",
        text: "Grafiktreiber bringen oft Performance- und Kompatibilitätsupdates für neue Spiele und Anwendungen.",
      },
      {
        title: "Chipsatz",
        text: "Chipsatztreiber helfen dem Betriebssystem, Stromsparfunktionen, USB, PCIe und Scheduling korrekt zu nutzen.",
      },
    ],
  },
  backup: {
    index: "30",
    tag: "Datenschutz",
    name: "Backup",
    fullName: "Datensicherung",
    category: "Software und Systeme",
    subcategory: "Sicherheit",
    href: "parts/backup.html",
    partHref: "backup.html",
    image: commonsImage("External hard drives.jpg"),
    summary:
      "Backups schützen deine Daten vor Defekten, Fehlern, Diebstahl, Ransomware und versehentlichem Löschen.",
    purpose:
      "Sie kopieren wichtige Dateien auf externe Laufwerke, NAS, Server oder Cloud-Speicher und machen Wiederherstellung möglich.",
    specs: ["3-2-1-Regel", "Versionierung", "Externe Platte", "NAS", "Cloud"],
    uses: ["Fotos", "Dokumente", "Projekte", "Server", "Systemabbilder"],
    warning:
      "Ein Backup, das nie getestet wurde, ist nur eine Hoffnung. Prüfe regelmäßig, ob Wiederherstellung wirklich klappt.",
    details: [
      {
        title: "3-2-1-Regel",
        text: "Drei Kopien, zwei verschiedene Medien, eine Kopie außer Haus: Das ist eine solide Backup-Grundregel.",
      },
      {
        title: "Versionierung",
        text: "Versionen helfen, wenn Dateien schon vor Tagen beschädigt oder versehentlich geändert wurden.",
      },
    ],
  },
};



