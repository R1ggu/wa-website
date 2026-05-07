import "./globals.css";

export const metadata = {
  title: "HardwareWissen",
  description: "PC-Hardware einfach erklärt: Komponenten, Kompatibilität, Build-Planung und Wartung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
