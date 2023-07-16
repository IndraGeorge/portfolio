import Techno from "../components/Techno";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function competences() {
  return (
    <main className="px-10 pt-10 flex flex-col">
      <Menu />
      <h2 className="text-center mt-5">Compétences</h2>
      <div className="flex justify-center mt-8 flex-grow duration-700">
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
      <Footer />
    </main>
  );
}
