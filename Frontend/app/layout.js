import "./globals.css";

export const metadata = {
  title: "HardwareWissen",
  description: "PC-Hardware einfach erklärt mit JSON-Datenbank, API, Login und Pro-Editing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
