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
      "Die CPU fuehrt Befehle aus, koordiniert Programme und haelt das Betriebssystem reaktionsschnell.",
    purpose:
      "Sie verarbeitet Spiellogik, Browser-Tabs, Code-Kompilierung, Hintergrunddienste, Dateikompression und viele Aufgaben, die nicht auf Spezialhardware ausgelagert werden.",
    specs: ["Kerne und Threads", "Boost-Takt", "Sockel", "Cache", "Leistungsaufnahme"],
    uses: ["Programmierung", "Office", "Simulation", "Streaming", "CPU-lastige Spiele"],
    warning:
      "Pruefe Sockel, Chipsatz und BIOS-Version. Eine schnelle CPU braucht trotzdem passende Kuehlung und stabile Spannungsversorgung.",
    details: [
      {
        title: "Kerne und Threads",
        text: "Mehr Kerne helfen bei Multitasking, Rendering, virtuellen Maschinen und parallelen Builds. Fuer einfache Office-PCs reicht oft weniger.",
      },
      {
        title: "Sockel und Plattform",
        text: "Der CPU-Sockel entscheidet, welches Mainboard passt. Er bestimmt auch RAM-Generation, BIOS-Anforderungen und spaetere Upgrade-Moeglichkeiten.",
      },
      {
        title: "Wärme und Strom",
        text: "Moderne CPUs takten dynamisch. Gute Kuehlung und ein solides Mainboard halten den Takt laenger stabil.",
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
    specs: ["VRAM", "Leistungsaufnahme", "Kartenlaenge", "Display-Ausgaenge", "Raytracing"],
    uses: ["Gaming", "3D-Design", "Videoschnitt", "KI-Experimente", "Mehrere Monitore"],
    warning:
      "Miss das Gehaeuse vorher aus. Moderne Grafikkarten koennen sehr lang, dick und stromhungrig sein.",
    details: [
      {
        title: "VRAM",
        text: "Videospeicher ist wichtig fuer hohe Aufloesungen, Texturen, 3D-Szenen und kreative Projekte.",
      },
      {
        title: "PCIe und Strom",
        text: "Die GPU steckt im PCIe-x16-Slot und braucht je nach Modell zusaetzliche 6-, 8- oder 12VHPWR-Stromstecker.",
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
      "Er haelt viele Programme, Browser-Tabs, kreative Projekte und virtuelle Maschinen gleichzeitig fluessig.",
    specs: ["Kapazitaet", "DDR-Generation", "Takt", "Latenz", "Modulhoehe"],
    uses: ["Multitasking", "Creative Tools", "Virtuelle Maschinen", "Grosse Dateien", "Moderne Spiele"],
    warning:
      "DDR4 und DDR5 sind nicht austauschbar. Pruefe ausserdem, ob hohe RAM-Module mit grossen Luftkuehlern kollidieren.",
    details: [
      {
        title: "Kapazitaet",
        text: "16 GB sind fuer einfache PCs solide, 32 GB sind heute sehr angenehm, 64 GB lohnen sich fuer VMs, Medienprojekte und schwere Workloads.",
      },
      {
        title: "Dual Channel",
        text: "Zwei passende Module liefern meist mehr Speicherbandbreite als ein einzelnes Modul gleicher Gesamtgroesse.",
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
    image: commonsImage("WesterDigital-Black-NVMe-SSD.jpg"),
    summary:
      "Speicher haelt Betriebssystem, Programme, Projekte, Fotos, Videos und Spiele auch nach dem Ausschalten bereit.",
    purpose:
      "Eine schnelle NVMe-SSD verkuerzt Bootzeiten, Ladebildschirme, Projektstarts und grosse Dateiuebertragungen.",
    specs: ["Kapazitaet", "NVMe oder SATA", "PCIe-Generation", "TBW", "Temperatur"],
    uses: ["Betriebssystem", "Game-Bibliothek", "Videoschnitt", "Projekte", "Backups"],
    warning:
      "Nicht jeder M.2-Slot unterstuetzt jeden Modus. Schau ins Mainboard-Handbuch, bevor du SATA-M.2, NVMe oder mehrere Laufwerke planst.",
    details: [
      {
        title: "NVMe vs. SATA",
        text: "NVMe nutzt PCIe-Lanes und ist deutlich schneller. SATA-SSDs sind fuer guenstige Massenspeicher trotzdem noch brauchbar.",
      },
      {
        title: "Kapazitaetsplanung",
        text: "Plane neben Windows oder Linux genug Platz fuer Programme, Spiele, Arbeitsdateien und Reserven fuer Updates ein.",
      },
      {
        title: "Kuehlung",
        text: "Schnelle M.2-SSDs koennen warm werden. Mainboard-Heatsinks helfen bei langen Transfers.",
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
      "Das Mainboard verbindet alle Teile und entscheidet, welche CPUs, RAM-Module, Slots und Anschluesse moeglich sind.",
    purpose:
      "Es verteilt Strom, routet Daten, bietet Rueckseitenanschluesse und verbindet Luefter, Speicher, Frontpanel und Erweiterungskarten.",
    specs: ["Sockel", "Chipsatz", "VRM", "RAM-Support", "Erweiterungsslots"],
    uses: ["Upgrades", "Anschluesse", "Speichererweiterung", "Overclocking", "Kompakte Builds"],
    warning:
      "Ein zu schwaches Board kann eine starke CPU ausbremsen. Achte auf VRM, BIOS, Ports und nicht nur auf den Sockel.",
    details: [
      {
        title: "Formfaktor",
        text: "ATX, microATX und Mini-ITX bestimmen Gehaeusegroesse, Slot-Anzahl und wie eng der Aufbau wird.",
      },
      {
        title: "VRM",
        text: "Die Spannungswandler versorgen die CPU. Bei starken Prozessoren ist ihre Qualitaet wichtiger als viele Deko-Features.",
      },
      {
        title: "Header",
        text: "USB-Frontpanel, Audio, RGB, Luefter und Power-Knopf brauchen passende Header auf dem Board.",
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
    image: commonsImage("ATX Computer power supply unit.jpg"),
    summary:
      "Das Netzteil wandelt Steckdosenstrom in stabile Spannungen fuer die internen PC-Komponenten um.",
    purpose:
      "Es versorgt CPU, GPU, Laufwerke, Mainboard, Luefter und Zubehoer und schuetzt den PC vor instabiler Stromversorgung.",
    specs: ["Wattzahl", "Effizienz", "Kabel", "Modularitaet", "Garantie"],
    uses: ["Gaming-PCs", "Workstations", "Leise Builds", "Upgrades", "Starke GPUs"],
    warning:
      "Spare nicht am falschen Ende. Ein schlechtes Netzteil kann Abstuerze, Spulenfiepen und echte Hardware-Schaeden verursachen.",
    details: [
      {
        title: "Watt-Reserve",
        text: "Plane Reserve fuer Lastspitzen und spaetere Upgrades ein. Zu knapp dimensionierte Netzteile laufen lauter und instabiler.",
      },
      {
        title: "Kabelmanagement",
        text: "Modulare Netzteile machen den Build sauberer, weil ungenutzte Kabel nicht im Luftstrom liegen.",
      },
      {
        title: "GPU-Stecker",
        text: "Pruefe PCIe-8-Pin, 12VHPWR oder 12V-2x6 genau. Adapter sollten nicht geknickt und nicht unter Spannung verbaut werden.",
      },
    ],
  },
  cooling: {
    index: "07",
    tag: "Thermik",
    name: "Kuehlung",
    fullName: "Airflow und Waermeabfuhr",
    category: "Kernkomponenten",
    subcategory: "Thermal Design",
    href: "parts/cooling.html",
    partHref: "cooling.html",
    image: commonsImage("Cooler Master Hyper 212 EVO - CPU Cooler with 120mm PWM Fan (RR-212E-20PK-R2).jpg"),
    summary:
      "Kuehlung transportiert Waerme von CPU, GPU, SSD und Spannungswandlern weg, damit Leistung stabil bleibt.",
    purpose:
      "Luefter, Kuehlkoerper, Radiatoren und Gehaeuse-Airflow verhindern Thermal Throttling bei langen Lastphasen.",
    specs: ["Kuehlerhoehe", "Radiator-Support", "Lueftergroesse", "Lautstaerke", "Airflow-Pfad"],
    uses: ["Leise Systeme", "Gaming", "Rendering", "Kompakt-PCs", "Overclocking"],
    warning:
      "Luft sollte klar ins Gehaeuse hinein und wieder hinaus. Mehr Luefter helfen nicht, wenn sie gegeneinander arbeiten.",
    details: [
      {
        title: "Luftkuehlung",
        text: "Gute Tower-Kuehler sind guenstig, robust und fuer viele CPUs mehr als ausreichend.",
      },
      {
        title: "AIO-Wasserkuehlung",
        text: "AIOs koennen hohe Spitzenlasten gut abfangen, brauchen aber Radiatorplatz und saubere Schlauchfuehrung.",
      },
      {
        title: "Airflow",
        text: "Front und Boden eignen sich oft als Intake, Rueckseite und Deckel als Exhaust. Staubfilter brauchen Reinigung.",
      },
    ],
  },
  case: {
    index: "08",
    tag: "Gehause",
    name: "Gehaeuse",
    fullName: "Computer Chassis",
    category: "Kernkomponenten",
    subcategory: "Rahmen und Airflow",
    href: "parts/case.html",
    partHref: "case.html",
    image: commonsImage("Computer case 20170910.jpg"),
    summary:
      "Das Gehaeuse haelt alle Teile, beeinflusst Airflow, Lautstaerke, Platzbedarf und Wartbarkeit.",
    purpose:
      "Es gibt dem Build Struktur, filtert Staub, fuehrt Kabel, bietet Frontanschluesse und entscheidet, wie leicht Upgrades werden.",
    specs: ["Mainboard-Groesse", "GPU-Freiraum", "Kuehler-Freiraum", "Luefterplaetze", "Front-I/O"],
    uses: ["Saubere Kabel", "Airflow", "Kompakte Builds", "Leise Builds", "Showcase-PCs"],
    warning:
      "Kleine Gehaeuse sehen ordentlich aus, verzeihen aber schlechte Planung kaum. Pruefe GPU, Kuehler, Radiator und Kabelraum.",
    details: [
      {
        title: "Clearance",
        text: "GPU-Laenge, CPU-Kuehlerhoehe und Radiatorstaerke muessen gleichzeitig passen.",
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
    image: commonsImage("SATA cable.jpg"),
    summary:
      "SATA-Kabel verbinden SATA-SSDs, HDDs und optische Laufwerke mit dem Mainboard.",
    purpose:
      "Sie uebertragen Daten zwischen Laufwerk und Chipsatz. Fuer Strom braucht das Laufwerk zusaetzlich ein SATA-Stromkabel vom Netzteil.",
    specs: ["SATA III", "Kabellaenge", "Gerader Stecker", "Winkelstecker", "Mainboard-Port"],
    uses: ["2,5-Zoll-SSDs", "HDDs", "DVD-Laufwerke", "Guensige Massenspeicher", "Datenmigration"],
    warning:
      "SATA-Datenkabel und SATA-Stromkabel sehen unterschiedlich aus. Beide muessen korrekt sitzen.",
    details: [
      {
        title: "Daten vs. Strom",
        text: "Das schmale Kabel ist fuer Daten. Der breitere Stecker vom Netzteil liefert Strom.",
      },
      {
        title: "Winkelstecker",
        text: "In engen Gehaeusen kann ein 90-Grad-Stecker helfen, Kabel sauber zu fuehren.",
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
    image: commonsImage("Sata power cable.JPG"),
    summary:
      "Stromkabel versorgen Mainboard, CPU, GPU, Laufwerke und Zubehoer mit den passenden Spannungen.",
    purpose:
      "ATX 24-Pin speist das Mainboard, EPS speist die CPU, PCIe-Kabel speisen die Grafikkarte und SATA-Strom versorgt Laufwerke.",
    specs: ["24-Pin ATX", "8-Pin EPS", "PCIe 6+2", "12VHPWR", "SATA Power"],
    uses: ["Mainboard", "CPU", "GPU", "SSDs", "Luefter-Hubs"],
    warning:
      "Verwechsle CPU-EPS- und GPU-PCIe-Kabel nicht. Sie koennen aehnlich aussehen, sind aber anders belegt.",
    details: [
      {
        title: "Beschriftung lesen",
        text: "Viele modulare Netzteile beschriften Kabelenden. Die PSU-Seite gehoert nur in das passende Netzteilmodell.",
      },
      {
        title: "Nicht mischen",
        text: "Modulare Kabel anderer Netzteile koennen andere Pinouts haben und Hardware zerstoeren.",
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
        text: "x16 bietet viele Datenleitungen, x1 reicht fuer kleinere Karten. Manche Slots teilen sich Lanes mit M.2-Slots.",
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
    subcategory: "Externe Anschluesse",
    href: "parts/usb-ports.html",
    partHref: "usb-ports.html",
    image: commonsImage("USB-Connector-Standard.jpg"),
    summary:
      "USB verbindet Maus, Tastatur, Headset, Controller, externe SSDs, Kameras und viele andere Geraete.",
    purpose:
      "USB uebertraegt Daten und Strom. Je nach Version unterscheiden sich Geschwindigkeit, Ladeleistung und Steckerform.",
    specs: ["USB-A", "USB-C", "USB 3.x", "Thunderbolt", "Frontpanel-Header"],
    uses: ["Maus", "Tastatur", "Externe SSD", "Headset", "Webcam"],
    warning:
      "USB-C bedeutet nicht automatisch hohe Geschwindigkeit. Die Version und der Controller sind entscheidend.",
    details: [
      {
        title: "Frontpanel",
        text: "Front-USB am Gehaeuse braucht passende interne Header auf dem Mainboard.",
      },
      {
        title: "Strom",
        text: "Einige Ports liefern mehr Ladeleistung als andere. Fuer externe SSDs ist stabile Stromversorgung wichtig.",
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
    image: commonsImage("Ethernet RJ45 connector p1160054.jpg"),
    summary:
      "Ethernet verbindet PCs, Router, Switches, NAS und Server stabil ueber Netzwerkkabel.",
    purpose:
      "Eine LAN-Verbindung bietet niedrige Latenz, gute Stabilitaet und hohe Geschwindigkeit fuer Gaming, Backups und Streaming.",
    specs: ["1 Gbit/s", "2,5 Gbit/s", "10 Gbit/s", "Cat5e", "Cat6"],
    uses: ["Gaming", "NAS", "Server", "Homeoffice", "Streaming"],
    warning:
      "Kabelkategorie, Switch und Netzwerkkarte muessen die Zielgeschwindigkeit gemeinsam unterstuetzen.",
    details: [
      {
        title: "RJ45",
        text: "Der typische LAN-Stecker rastet mit einer kleinen Nase ein und nutzt verdrillte Adernpaare.",
      },
      {
        title: "Kabelkategorien",
        text: "Cat5e reicht fuer 1 Gbit/s, Cat6 oder besser ist fuer laengere und schnellere Verbindungen sinnvoll.",
      },
    ],
  },
  displayPorts: {
    index: "14",
    tag: "Bildausgabe",
    name: "HDMI / DisplayPort",
    fullName: "Monitor- und TV-Anschluesse",
    category: "Kabel und Stecker",
    subcategory: "Videoausgabe",
    href: "parts/hdmi-displayport.html",
    partHref: "hdmi-displayport.html",
    image: commonsImage("HDMI-Connector.jpg"),
    summary:
      "HDMI und DisplayPort uebertragen Bild und Ton von GPU, Mainboard oder Laptop zum Monitor.",
    purpose:
      "Sie entscheiden mit, welche Aufloesung, Bildrate, HDR-Funktionen und Adaptive-Sync-Features nutzbar sind.",
    specs: ["HDMI 2.1", "DisplayPort 1.4", "DisplayPort 2.x", "HDR", "Variable Refresh Rate"],
    uses: ["Monitore", "Fernseher", "Gaming", "Mehrschirm-Setups", "Projektoren"],
    warning:
      "Nicht jedes Kabel kann jede Aufloesung und Bildrate. 4K mit hoher Hz-Zahl braucht passende Versionen.",
    details: [
      {
        title: "DisplayPort",
        text: "Am PC ist DisplayPort oft die beste Wahl fuer hohe Bildraten und Adaptive Sync.",
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
    fullName: "M.2 Anschluss fuer SSDs und Erweiterungen",
    category: "Kabel und Stecker",
    subcategory: "Storage-Slot",
    href: "parts/m2-slot.html",
    partHref: "m2-slot.html",
    image: commonsImage("1TB 2280 NVME SSD.jpg"),
    summary:
      "M.2-Slots nehmen kompakte SSDs oder Funkmodule direkt auf dem Mainboard auf.",
    purpose:
      "Sie sparen Kabel, bieten hohe NVMe-Geschwindigkeit und koennen je nach Slot SATA- oder PCIe-Signale nutzen.",
    specs: ["M-Key", "B-Key", "2280", "PCIe 4.0", "PCIe 5.0"],
    uses: ["NVMe-SSD", "WLAN-Modul", "Kompakt-PC", "Laptop", "Schneller Systemdatentraeger"],
    warning:
      "M.2 beschreibt nur die Bauform. Ob SATA oder NVMe unterstuetzt wird, steht im Mainboard-Handbuch.",
    details: [
      {
        title: "Laengen",
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
      "Dort stellst du Boot-Reihenfolge, RAM-Profile, Luefterkurven, Sicherheitsfunktionen und manchmal CPU-Limits ein.",
    specs: ["Boot Mode", "XMP / EXPO", "Secure Boot", "TPM", "BIOS Flashback"],
    uses: ["Windows-Installation", "Linux-Installation", "RAM-Tuning", "Luefterkurven", "Hardware-Erkennung"],
    warning:
      "BIOS-Updates nur mit stabiler Stromversorgung und passender Datei durchfuehren. Ein falsches Update kann das Board blockieren.",
    details: [
      {
        title: "UEFI-Modus",
        text: "Moderne Betriebssysteme nutzen UEFI mit GPT-Partitionen. Legacy-Modus ist meist nur fuer alte Systeme wichtig.",
      },
      {
        title: "Secure Boot",
        text: "Secure Boot hilft gegen manipulierte Bootloader, kann aber bei manchen Linux-Setups zusaetzliche Schritte erfordern.",
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
    image: commonsImage("Windows 11 logo.svg"),
    summary:
      "Windows ist das verbreitete Desktop-Betriebssystem fuer Gaming, Office, Schule, Treiber und viele Programme.",
    purpose:
      "Es verwaltet Hardware, Benutzeroberflaeche, Programme, Updates, Treiber, Speicher, Sicherheit und Gaming-Funktionen.",
    specs: ["Edition", "Lizenz", "Treiber", "Updates", "Secure Boot / TPM"],
    uses: ["Gaming", "Office", "Schule", "Creative Apps", "Hardware-Tools"],
    warning:
      "Vor der Installation Treiber, Lizenz, Backup und Windows-11-Anforderungen wie TPM und Secure Boot pruefen.",
    details: [
      {
        title: "Treiber",
        text: "GPU-, Chipsatz-, Audio- und Netzwerktreiber entscheiden oft ueber Stabilitaet und Leistung.",
      },
      {
        title: "Updates",
        text: "Windows Update liefert Sicherheitspatches, kann aber grosse Versionsupdates brauchen. Backups sind davor sinnvoll.",
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
    image: commonsImage("NewTux.svg"),
    summary:
      "Linux ist ein freies Betriebssystem-Oekosystem fuer Server, Entwicklung, Datenschutz und flexible Desktop-Setups.",
    purpose:
      "Distributionen wie Ubuntu, Fedora, Debian oder Arch stellen Kernel, Paketverwaltung, Desktop und Systemdienste bereit.",
    specs: ["Distribution", "Kernel", "Paketmanager", "Desktop Environment", "Dateisystem"],
    uses: ["Server", "Programmierung", "Container", "Datenschutz", "Alte Hardware"],
    warning:
      "Pruefe vorher WLAN, GPU-Treiber, Spezialsoftware und Spielekompatibilitaet. Nicht jede Windows-App laeuft direkt.",
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
      "Sie sind fuer Zuverlaessigkeit, Netzwerkzugriff, Speicher, Fernwartung und Dauerlast ausgelegt.",
    specs: ["ECC-RAM", "RAID", "Redundante Netzteile", "Remote Management", "Uptime"],
    uses: ["Webhosting", "NAS", "Datenbanken", "Virtualisierung", "Backups"],
    warning:
      "Server brauchen Kuehlung, Strombudget, Backups und Sicherheitsupdates. Dauerbetrieb ist mehr als nur alter PC im Keller.",
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
    image: commonsImage("Network switches.jpg"),
    summary:
      "Ein Switch verbindet mehrere kabelgebundene Geraete in einem lokalen Netzwerk.",
    purpose:
      "Er verteilt Datenpakete gezielt zwischen PCs, Servern, NAS, Access Points, Druckern und Routern.",
    specs: ["Port-Anzahl", "1G / 2,5G / 10G", "PoE", "Managed", "VLAN"],
    uses: ["Heimnetz", "NAS", "Serverrack", "Bueros", "Access Points"],
    warning:
      "Ein Switch erhoeht nicht automatisch die Internetgeschwindigkeit. Er verbessert vor allem lokale Verbindungen.",
    details: [
      {
        title: "Managed vs. unmanaged",
        text: "Unmanaged ist einfach. Managed bietet VLANs, Monitoring, Port-Konfiguration und mehr Kontrolle.",
      },
      {
        title: "PoE",
        text: "Power over Ethernet versorgt Access Points, Kameras oder VoIP-Telefone direkt ueber das Netzwerkkabel.",
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
      "Er uebernimmt NAT, Firewall-Grundschutz, DHCP, DNS-Weiterleitung, WLAN und oft auch Telefonie oder VPN.",
    specs: ["WAN-Port", "LAN-Ports", "WLAN-Standard", "Firewall", "VPN"],
    uses: ["Internet", "WLAN", "Portfreigaben", "Smart Home", "VPN"],
    warning:
      "Standardpasswoerter und alte Firmware sind ein Risiko. Router sollten regelmaessig aktualisiert werden.",
    details: [
      {
        title: "DHCP",
        text: "DHCP vergibt IP-Adressen automatisch, damit neue Geraete ohne Handarbeit ins Netzwerk kommen.",
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
      "WLAN verbindet Geraete ohne Netzwerkkabel und ist bequem fuer Laptops, Smartphones und mobile Hardware.",
    purpose:
      "Access Points senden Funknetze, Clients verbinden sich ueber 2,4 GHz, 5 GHz oder 6 GHz.",
    specs: ["Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 6E", "Wi-Fi 7", "Antenne"],
    uses: ["Laptop", "Smartphone", "Tablet", "Smart Home", "Gaeste-WLAN"],
    warning:
      "Wände, Nachbarnetze und Entfernung koennen WLAN stark bremsen. Fuer Gaming und Server ist LAN oft stabiler.",
    details: [
      {
        title: "Frequenzbaender",
        text: "2,4 GHz reicht weiter, 5 GHz ist schneller, 6 GHz ist moderner und oft freier.",
      },
      {
        title: "Mesh",
        text: "Mesh-Systeme koennen grosse Wohnungen besser abdecken, brauchen aber gute Positionierung.",
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
    image: commonsImage("Turtle-Beach-Sound-Card.jpg"),
    summary:
      "Soundkarten verbessern oder erweitern Audio-Ein- und Ausgaenge eines PCs.",
    purpose:
      "Sie bieten bessere Wandler, mehr Anschluesse, Surround-Ausgabe, Mikrofonvorverstaerker oder optische Audioports.",
    specs: ["DAC", "ADC", "SNR", "Kopfhoererverstaerker", "Treiber"],
    uses: ["Headsets", "Musikproduktion", "Streaming", "Surround", "Optischer Ausgang"],
    warning:
      "Viele Mainboards haben bereits brauchbaren Sound. Eine Soundkarte lohnt sich vor allem bei konkreten Audio-Anforderungen.",
    details: [
      {
        title: "Intern oder extern",
        text: "Externe USB-Audiointerfaces sind oft besser gegen Stoergeraeusche im PC geschuetzt.",
      },
      {
        title: "Anschluesse",
        text: "Achte auf Klinke, Line-In, optisch, XLR oder MIDI je nach Einsatzzweck.",
      },
    ],
  },
  thermalPaste: {
    index: "24",
    tag: "Waermeuebergang",
    name: "Waermeleitpaste",
    fullName: "Thermal Paste",
    category: "Wartung und Aufbau",
    subcategory: "Kuehlermontage",
    href: "parts/thermal-paste.html",
    partHref: "thermal-paste.html",
    image: commonsImage("Thermal Paste 9648.jpg"),
    summary:
      "Waermeleitpaste fuellt mikroskopische Unebenheiten zwischen CPU und Kuehler.",
    purpose:
      "Sie verbessert den Waermeuebergang, damit der Kuehler Hitze effizienter abfuehren kann.",
    specs: ["Menge", "Viskositaet", "Leitfaehigkeit", "Haltbarkeit", "Reinigung"],
    uses: ["CPU-Kuehler", "GPU-Wartung", "Laptop-Service", "Temperaturverbesserung", "Neuaufbau"],
    warning:
      "Zu viel Paste kann verschmieren, zu wenig kann Hotspots erzeugen. Ein kleiner Punkt in der Mitte reicht oft.",
    details: [
      {
        title: "Auftragen",
        text: "Bei Desktop-CPUs funktioniert ein erbsengrosser Punkt meist gut, weil der Kuehler den Druck verteilt.",
      },
      {
        title: "Erneuern",
        text: "Nach mehreren Jahren, hohen Temperaturen oder Kuehlerwechsel kann neue Paste sinnvoll sein.",
      },
    ],
  },
  fanHeaders: {
    index: "25",
    tag: "Lueftersteuerung",
    name: "Fan-Header",
    fullName: "3-Pin und 4-Pin Luefteranschluesse",
    category: "Kabel und Stecker",
    subcategory: "Kuehlungsanschluss",
    href: "parts/fan-headers.html",
    partHref: "fan-headers.html",
    image: commonsImage("Atx computer motherboard with cpu and fan.jpg"),
    summary:
      "Fan-Header verbinden Gehaeuse- und CPU-Luefter mit dem Mainboard.",
    purpose:
      "Sie liefern Strom und steuern Drehzahlen ueber Spannung oder PWM, damit der PC kuehl und leise bleibt.",
    specs: ["3-Pin DC", "4-Pin PWM", "Ampere-Limit", "CPU_FAN", "SYS_FAN"],
    uses: ["CPU-Luefter", "Gehaeuseluefter", "Luefter-Hub", "AIO-Pumpe", "Airflow-Steuerung"],
    warning:
      "Ueberschreite nicht das Stromlimit eines Headers. Viele Luefter gehoeren an einen Hub mit eigener Stromversorgung.",
    details: [
      {
        title: "PWM",
        text: "4-Pin-PWM regelt die Drehzahl genauer, waehrend die Spannung stabil bleiben kann.",
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
      "Der Monitor entscheidet, wie du die Leistung des PCs wirklich siehst: Aufloesung, Bildrate, Farben und Groesse.",
    purpose:
      "Er zeigt Desktop, Spiele, Videos und kreative Projekte an und bestimmt, ob die GPU eher 1080p, 1440p oder 4K bedienen muss.",
    specs: ["Aufloesung", "Hz", "Paneltyp", "Farbraum", "Adaptive Sync"],
    uses: ["Gaming", "Office", "Bildbearbeitung", "Coding", "Streaming"],
    warning:
      "Ein starker PC fuehlt sich mit schlechtem Monitor schlechter an. Plane Display und GPU zusammen.",
    details: [
      {
        title: "Bildrate",
        text: "144 Hz oder mehr wirken in Spielen und beim Scrollen fluessiger, brauchen aber auch passende GPU-Leistung.",
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
    subcategory: "Eingabegeraet",
    href: "parts/keyboard.html",
    partHref: "keyboard.html",
    image: commonsImage("Keyboard with mouse.jpg"),
    summary:
      "Die Tastatur ist das wichtigste Eingabegeraet fuer Schreiben, Programmieren, Shortcuts und viele Spiele.",
    purpose:
      "Layout, Schalter, Lautstaerke, Groesse und Ergonomie beeinflussen den Alltag staerker, als man beim PC-Kauf oft denkt.",
    specs: ["Layout", "Switches", "Formfaktor", "N-Key Rollover", "Funk oder Kabel"],
    uses: ["Schreiben", "Programmieren", "Gaming", "Shortcuts", "Office"],
    warning:
      "Achte auf deutsches oder Schweizer Layout, wenn du Umlaute, Sonderzeichen und gewohnte Tastenpositionen brauchst.",
    details: [
      {
        title: "Mechanisch vs. Membran",
        text: "Mechanische Tastaturen haben einzelne Schalter und sind oft langlebiger, aber nicht automatisch besser fuer jeden.",
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
    subcategory: "Zeigegeraet",
    href: "parts/mouse.html",
    partHref: "mouse.html",
    image: commonsImage("Keyboard with mouse.jpg"),
    summary:
      "Die Maus steuert Cursor, Kamera, Auswahl und Praezision in Desktop- und Gaming-Anwendungen.",
    purpose:
      "Sensor, Gewicht, Form, Tasten und Gleitverhalten entscheiden, wie angenehm und genau sich der PC bedienen laesst.",
    specs: ["Sensor", "DPI", "Gewicht", "Polling Rate", "Ergonomie"],
    uses: ["Gaming", "Office", "Grafikarbeit", "CAD", "Alltag"],
    warning:
      "DPI ist nicht alles. Form, Gewicht und Sensorqualitaet sind meist wichtiger als extreme Zahlen auf der Verpackung.",
    details: [
      {
        title: "Grip",
        text: "Palm, claw und fingertip grip fuehlen sich mit unterschiedlichen Mausformen besser an.",
      },
      {
        title: "Kabel oder Funk",
        text: "Moderne Funkmaeuse koennen sehr schnell sein, brauchen aber Akku- oder Batteriemanagement.",
      },
    ],
  },
  drivers: {
    index: "29",
    tag: "Software-Bruecke",
    name: "Treiber",
    fullName: "Device Drivers",
    category: "Software und Systeme",
    subcategory: "Hardware-Kommunikation",
    href: "parts/drivers.html",
    partHref: "drivers.html",
    image: commonsImage("BIOS Setup First Time.jpg"),
    summary:
      "Treiber uebersetzen zwischen Betriebssystem und Hardware, damit Geraete korrekt funktionieren.",
    purpose:
      "GPU, Chipsatz, Audio, Netzwerk, Drucker und Spezialgeraete brauchen passende Software-Schichten fuer Funktionen und Leistung.",
    specs: ["Chipsatztreiber", "GPU-Treiber", "Audio", "LAN / WLAN", "Firmware"],
    uses: ["Windows", "Linux", "Gaming", "Stabilitaet", "Neue Hardware"],
    warning:
      "Installiere Treiber am besten vom Hersteller oder ueber vertrauenswuerdige Paketquellen. Random Driver-Updater sind riskant.",
    details: [
      {
        title: "GPU-Treiber",
        text: "Grafiktreiber bringen oft Performance- und Kompatibilitaetsupdates fuer neue Spiele und Anwendungen.",
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
      "Backups schuetzen deine Daten vor Defekten, Fehlern, Diebstahl, Ransomware und versehentlichem Loeschen.",
    purpose:
      "Sie kopieren wichtige Dateien auf externe Laufwerke, NAS, Server oder Cloud-Speicher und machen Wiederherstellung moeglich.",
    specs: ["3-2-1-Regel", "Versionierung", "Externe Platte", "NAS", "Cloud"],
    uses: ["Fotos", "Dokumente", "Projekte", "Server", "Systemabbilder"],
    warning:
      "Ein Backup, das nie getestet wurde, ist nur eine Hoffnung. Pruefe regelmaessig, ob Wiederherstellung wirklich klappt.",
    details: [
      {
        title: "3-2-1-Regel",
        text: "Drei Kopien, zwei verschiedene Medien, eine Kopie ausser Haus: Das ist eine solide Backup-Grundregel.",
      },
      {
        title: "Versionierung",
        text: "Versionen helfen, wenn Dateien schon vor Tagen beschaedigt oder versehentlich geaendert wurden.",
      },
    ],
  },
};
