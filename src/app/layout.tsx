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
        <div className="blur"></div>
        {children}
        <div className="blur2"></div>
      </body>
    </html>
  );
}
