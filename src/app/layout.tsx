import "./style.css";
import "./animation.css";

export const metadata = {
  title: "Indra George - Portfolio développeuse web",
  description: "Portfolio Indra George",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
