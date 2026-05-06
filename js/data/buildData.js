export const buildProfiles = [
  {
    name: "Alltags- und Schul-PC",
    budget: "niedrig bis mittel",
    focus: "leise, einfache Wartung, schnelle SSD, genug RAM",
    parts: "6-Kern-CPU, integrierte oder kleine GPU, 16 GB RAM, 1 TB SSD, solides 450-550-W-Netzteil",
  },
  {
    name: "Ausgewogener Gaming-PC",
    budget: "mittel",
    focus: "GPU-Leistung, Airflow, gutes Netzteil und ein Monitor, der zur Grafikkarte passt",
    parts: "moderne 6-8-Kern-CPU, starke GPU, 32 GB RAM, 1-2 TB NVMe-SSD, 650-850-W-Netzteil",
  },
  {
    name: "Creator-Workstation",
    budget: "mittel bis hoch",
    focus: "CPU-Threads, GPU-Beschleunigung, RAM-Kapazität, schnelles Projektlaufwerk",
    parts: "8-16-Kern-CPU, Creator-GPU, 64 GB RAM, schnelle Projekt-SSD plus Archivspeicher",
  },
];

export const buildLevels = [
  {
    id: "beginner",
    label: "Anfänger",
    subtitle: "Für den ersten eigenen PC",
    summary:
      "Diese Anleitung hält die Entscheidungen bewusst klar. Du baust einen stabilen PC, ohne dich in Tuning, Spezialkabeln oder BIOS-Feinheiten zu verlieren.",
    steps: [
      {
        title: "Einsatzzweck festlegen",
        text: "Schreibe auf, ob der PC hauptsächlich für Schule, Office, Gaming, Programmieren oder Medien gedacht ist. Daraus ergeben sich CPU-, GPU- und RAM-Bedarf.",
        checks: ["Monitor-Auflösung notieren", "Budget mit 10-15 % Reserve planen", "Wichtige Programme und Spiele auflisten"],
      },
      {
        title: "CPU und Mainboard gemeinsam wählen",
        text: "Achte darauf, dass CPU-Sockel, Mainboard-Chipsatz und BIOS-Unterstützung zusammenpassen. Für Einsteiger ist ein aktuelles Mainstream-Board meist sinnvoller als ein extremes Topmodell.",
        checks: ["Sockel vergleichen", "BIOS-Kompatibilität prüfen", "Mainboard-Formfaktor zum Gehäuse passend wählen"],
      },
      {
        title: "RAM und SSD nicht unterschätzen",
        text: "Für moderne Systeme sind 16 GB RAM das Minimum, 32 GB fühlen sich deutlich entspannter an. Eine NVMe-SSD als Systemlaufwerk macht den PC im Alltag viel schneller.",
        checks: ["DDR4 oder DDR5 passend zum Board", "zwei RAM-Module für Dual Channel", "mindestens 1 TB SSD einplanen"],
      },
      {
        title: "Netzteil und Gehäuse prüfen",
        text: "Das Netzteil muss genug Reserve und passende Stecker haben. Das Gehäuse muss GPU-Länge, CPU-Kühlerhöhe und Airflow sauber aufnehmen.",
        checks: ["GPU-Länge messen", "CPU-Kühlerhöhe prüfen", "PCIe-Stromstecker der GPU vergleichen"],
      },
      {
        title: "Zusammenbauen und Grundtest",
        text: "Baue ruhig und Schritt für Schritt. Nach dem ersten Start prüfst du BIOS, Temperaturen, RAM-Profil und installierst Betriebssystem sowie Treiber.",
        checks: ["CPU_FAN belegt", "RAM erkannt", "SSD erkannt", "Temperaturen im Leerlauf prüfen"],
      },
    ],
    avoid: [
      "CPU und Mainboard getrennt kaufen, ohne den Sockel zu prüfen.",
      "Eine starke GPU in ein zu kleines oder schlecht belüftetes Gehäuse setzen.",
      "Ein billiges No-Name-Netzteil verwenden.",
    ],
  },
  {
    id: "advanced",
    label: "Fortgeschritten",
    subtitle: "Für ausgewogene Gaming- und Arbeits-PCs",
    summary:
      "Hier geht es um Balance: keine Engpässe, bessere Kühlung, sinnvolle Plattformwahl und Komponenten, die auch in zwei bis drei Jahren noch Luft haben.",
    steps: [
      {
        title: "Leistungsziel definieren",
        text: "Plane nach Zielauflösung und Bildrate. Ein 1440p-144-Hz-Monitor braucht eine andere GPU als ein 1080p-Office-Setup.",
        checks: ["1080p, 1440p oder 4K festlegen", "Ziel-FPS realistisch wählen", "GPU-Benchmarks zum Monitor vergleichen"],
      },
      {
        title: "Plattform und Upgrade-Pfad bewerten",
        text: "Vergleiche nicht nur CPU-Leistung, sondern auch Mainboard-Qualität, RAM-Generation, M.2-Slots, USB-C, BIOS-Flashback und spätere CPU-Upgrades.",
        checks: ["VRM-Kühlung ansehen", "M.2-Slots und Lane-Sharing prüfen", "Front-USB-C-Header vergleichen"],
      },
      {
        title: "Airflow planen",
        text: "Lege fest, wo Luft ins Gehäuse kommt und wo sie hinausgeht. CPU-Kühler, GPU-Lüfter und Gehäuselüfter sollten zusammenarbeiten.",
        checks: ["Front/Boden als Intake", "Heck/Deckel als Exhaust", "Staubfilter zugänglich halten"],
      },
      {
        title: "Strom und Kabel sauber planen",
        text: "Berechne typische Last und Lastspitzen. Prüfe 24-Pin-ATX, EPS für die CPU, PCIe- oder 12VHPWR-Stecker für die GPU und SATA-Strom für Laufwerke.",
        checks: ["Wattreserve einplanen", "native GPU-Kabel bevorzugen", "Kabel nicht scharf knicken"],
      },
      {
        title: "Stabilität testen",
        text: "Nach der Installation testest du RAM, CPU, GPU, SSD und Temperaturen. Erst danach lohnt sich Feintuning wie Lüfterkurven oder Undervolting.",
        checks: ["RAM-Test laufen lassen", "GPU-Lasttest beobachten", "Lüfterkurven anpassen", "Backup einrichten"],
      },
    ],
    avoid: [
      "Nur auf FPS schauen und Lautstärke, Temperaturen und Stromverbrauch ignorieren.",
      "M.2- und SATA-Port-Sharing übersehen.",
      "RAM-Profil aktivieren, aber Stabilität nie testen.",
    ],
  },
  {
    id: "pro",
    label: "Profi",
    subtitle: "Für Workstations, Server und sehr gezielte Builds",
    summary:
      "Diese Stufe betrachtet den PC als Plattform: Dauerlast, Speicherstrategie, Betriebssysteme, Virtualisierung, Netzwerk, Backups und Wartbarkeit.",
    steps: [
      {
        title: "Workload messbar machen",
        text: "Notiere konkrete Programme, Datenmengen, Laufzeiten und Engpässe. Bei Workstations zählt nicht nur Spitzenleistung, sondern dauerhafte Leistung unter Last.",
        checks: ["CPU-Thread-Skalierung prüfen", "GPU-Compute oder VRAM-Bedarf klären", "RAM-Verbrauch echter Projekte messen"],
      },
      {
        title: "Plattform mit I/O-Reserve wählen",
        text: "Prüfe PCIe-Lanes, M.2-Anbindung, 10G-Netzwerk, Thunderbolt/USB4, ECC-RAM, IPMI oder Remote-Management, falls der Rechner produktiv oder als Server läuft.",
        checks: ["PCIe-Lanes zählen", "ECC-Unterstützung prüfen", "IOMMU/Virtualisierung prüfen", "Netzwerkdurchsatz planen"],
      },
      {
        title: "Speicher- und Backup-Strategie planen",
        text: "Trenne System, aktive Projekte, Scratch-Daten, Archiv und Backup. Für Server und NAS sind Redundanz und Wiederherstellung wichtiger als reine Maximalgeschwindigkeit.",
        checks: ["3-2-1-Backup", "RAID nicht mit Backup verwechseln", "SMART-Werte überwachen", "Wiederherstellung testen"],
      },
      {
        title: "Thermik für Dauerlast auslegen",
        text: "Plane Kühlung für Stunden oder Tage unter Last. Wichtig sind VRM-Temperaturen, SSD-Kühlung, GPU-Abwärme und ein Gehäuse, das Wartung zulässt.",
        checks: ["Dauerlast statt Kurztest", "Staubfilter erreichbar", "Ersatzlüfter und Kabelweg planen", "Lautstärkeprofil festlegen"],
      },
      {
        title: "Betriebssystem und Wartung definieren",
        text: "Windows, Linux oder Dual-Boot brauchen unterschiedliche Treiber, Dateisysteme, Sicherheitsupdates und Backup-Tools. Dokumentiere BIOS-Einstellungen und Kabelwege.",
        checks: ["Treiberquelle dokumentieren", "Update-Fenster planen", "Monitoring einrichten", "Konfiguration schriftlich festhalten"],
      },
    ],
    avoid: [
      "Server ohne Backup, Monitoring und Update-Konzept betreiben.",
      "RAID als Ersatz für Datensicherung verstehen.",
      "Eine Workstation nur nach Gaming-Benchmarks auswählen.",
    ],
  },
];

export const buildTools = [
  "Kreuzschlitzschraubendreher",
  "Kabelbinder oder Klettbänder",
  "USB-Stick für Windows oder Linux",
  "Mainboard-Handbuch",
  "kleine Schale für Schrauben",
  "Backup-Medium für wichtige Daten",
];



