import "./globals.css";
import "./animation.css";

export const metadata = {
  title: "Indra",
  description: "Portfolio Indra George",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
