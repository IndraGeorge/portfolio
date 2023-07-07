import Link from "../components/Link";
import ArrowLeft from "../assets/ArrowLeft.svg";
import Techno from "../components/Techno";
import javascript from "../assets/javascript.png";

export default function competences() {
  return (
    <div className="p-8">
      <Link href="./" img={ArrowLeft}>
        Accueil
      </Link>
      <h2 className="text-center mt-2.5">Compétences</h2>
      <Techno img={javascript} alt="Javacript">
        JavaScript
      </Techno>
    </div>
  );
}
