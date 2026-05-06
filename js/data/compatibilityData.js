export const compatibilitySections = [
  {
    title: "CPU und Mainboard",
    tag: "Sockel, Chipsatz, BIOS",
    summary:
      "Die CPU muss mechanisch und elektrisch zum Mainboard passen. Der Sockel ist nur der erste Schritt, denn auch Chipsatz, BIOS-Version und Stromversorgung zählen.",
    checks: [
      "CPU-Sockel exakt vergleichen, zum Beispiel AM5, LGA1700 oder LGA1851.",
      "Chipsatz prüfen: Nicht jedes Board erlaubt jedes Feature der CPU.",
      "BIOS-Support auf der Herstellerseite kontrollieren, besonders bei neueren CPUs.",
      "VRM und Kühlkörper beachten, wenn eine CPU viel Leistung aufnehmen kann.",
    ],
  },
  {
    title: "RAM",
    tag: "DDR-Generation, Takt, Höhe",
    summary:
      "RAM muss zur Plattform passen. DDR4 und DDR5 sehen ähnlich aus, sind aber nicht austauschbar. Zusätzlich zählen Slot-Anzahl, Modulhöhe und Stabilität.",
    checks: [
      "DDR4 oder DDR5 passend zum Mainboard wählen.",
      "Bei zwei Modulen die empfohlenen Slots laut Handbuch nutzen.",
      "XMP oder EXPO nur aktivieren und danach Stabilität testen.",
      "RAM-Höhe mit großem CPU-Luftkühler vergleichen.",
    ],
  },
  {
    title: "GPU",
    tag: "PCIe, Länge, Strom, Monitor",
    summary:
      "Eine Grafikkarte passt nicht nur über den PCIe-Slot. Länge, Dicke, Stromstecker, Netzteilreserve und Monitorauflösung sind genauso wichtig.",
    checks: [
      "GPU-Länge und Slot-Dicke mit dem Gehäuse vergleichen.",
      "PCIe-Stromstecker prüfen: 6+2-Pin, 8-Pin, 12VHPWR oder 12V-2x6.",
      "Netzteilleistung mit Lastspitzen und Reserve planen.",
      "DisplayPort oder HDMI-Version passend zu Auflösung und Bildrate wählen.",
    ],
  },
  {
    title: "Speicher",
    tag: "M.2, SATA, PCIe-Lanes",
    summary:
      "SSDs und Festplatten brauchen passende Steckplätze, Protokolle und manchmal Kühlung. M.2 bedeutet nicht automatisch NVMe.",
    checks: [
      "M.2-Key, Länge und Protokoll prüfen: SATA-M.2 oder NVMe.",
      "PCIe-Generation und Lane-Sharing im Mainboard-Handbuch lesen.",
      "Bei schnellen NVMe-SSDs einen Kühler oder Mainboard-Heatsink nutzen.",
      "SATA-Datenkabel und SATA-Stromkabel nicht verwechseln.",
    ],
  },
  {
    title: "Netzteil",
    tag: "Watt, Qualität, Stecker",
    summary:
      "Das Netzteil muss nicht nur genug Watt liefern, sondern stabile Qualität, Schutzschaltungen und die richtigen Kabel mitbringen.",
    checks: [
      "Wattbedarf von CPU und GPU plus Reserve berechnen.",
      "EPS-Stecker für CPU und PCIe-Stecker für GPU nicht verwechseln.",
      "Modulare Kabel nie zwischen verschiedenen Netzteilmodellen mischen.",
      "Effizienz, Garantie und unabhängige Tests berücksichtigen.",
    ],
  },
  {
    title: "Gehäuse und Kühlung",
    tag: "Clearance, Airflow, Lautstärke",
    summary:
      "Gehäuse, CPU-Kühler, GPU und Lüfter müssen räumlich zusammenpassen. Gute Temperaturen entstehen durch klare Luftwege.",
    checks: [
      "CPU-Kühlerhöhe, GPU-Länge und Radiatorplätze prüfen.",
      "Front- und Bodenlüfter meist als Intake, Heck und Deckel als Exhaust planen.",
      "AIO-Radiator und RAM-Höhe gemeinsam betrachten.",
      "Staubfilter und Kabelraum für Wartung einplanen.",
    ],
  },
  {
    title: "Windows, Linux und Treiber",
    tag: "TPM, Secure Boot, Kernel, Treiber",
    summary:
      "Auch Software ist Kompatibilität. Windows, Linux, Treiber, Secure Boot und Firmware entscheiden, ob Hardware vollständig funktioniert.",
    checks: [
      "Windows-11-Anforderungen wie TPM und Secure Boot prüfen.",
      "Linux-Kompatibilität für WLAN, GPU, Audio und Spezialhardware recherchieren.",
      "Chipsatz-, GPU-, LAN- und Audiotreiber nach der Installation aktualisieren.",
      "Vor Dual-Boot Backups anlegen und Boot-Modus sauber planen.",
    ],
  },
  {
    title: "Netzwerk und Server",
    tag: "LAN, Switch, Router, Backup",
    summary:
      "Bei Netzwerk- und Server-Themen müssen Geschwindigkeit, Kabel, Switch, Router, Betriebssystem, Backup und Sicherheit zusammenpassen.",
    checks: [
      "LAN-Geschwindigkeit von Netzwerkkarte, Kabel, Switch und Router gemeinsam prüfen.",
      "Cat5e, Cat6 oder besser passend zur gewünschten Geschwindigkeit wählen.",
      "Server für Dauerbetrieb mit Kühlung, Monitoring und Updates planen.",
      "Backups regelmäßig testen, nicht nur einrichten.",
    ],
  },
];

export const compatibilityWorkflow = [
  "Erst CPU, Mainboard und RAM gemeinsam prüfen.",
  "Danach GPU, Netzteil und Gehäuse-Freiraum vergleichen.",
  "Dann Speicher, M.2-Slots, SATA-Ports und Kabel planen.",
  "Zum Schluss Betriebssystem, Treiber, Netzwerk und Backup absichern.",
];



