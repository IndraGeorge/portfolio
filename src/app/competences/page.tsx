import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Link from "../components/Link";
import Techno from "../components/Techno";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import Footer from "../components/Footer";

export default function competences() {
  return (
    <main className="p-10 h-screen">
      <div className="flex justify-between">
        <Link href="/" img={ArrowLeft}>
          Accueil
        </Link>
        <Link href="/projets" img={ArrowRight}>
          Projets
        </Link>
      </div>
      <h2 className="text-center mt-5">Compétences</h2>
      <div className="flex justify-center mt-8 min-h-[420px]">
        <div className="flex justify-center flex-wrap items-center gap-10">
          <Techno img={javascript} alt="logo Javacript">
            JavaScript
          </Techno>
          <Techno img={nodejs} alt="logo node js">
            Node JS
          </Techno>
          <Techno img={mongodb} alt="logo mongodb">
            MongoDB
          </Techno>
          <Techno img={react} alt="logo react">
            React JS
          </Techno>
          <Techno img={typescript} alt="typescript">
            TypeScript
          </Techno>
          <Techno img={figma} alt="figma">
            Figma
          </Techno>
          <Techno img={git} alt="figma">
            Git
          </Techno>
        </div>
      </div>
      <div className="relative bottom-[-50px]">
        <Footer />
      </div>
    </main>
  );
}
