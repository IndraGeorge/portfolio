import Link from "./components/Link";
import arrowLink from "./assets/arrowLink.svg";
import laptup from "./assets/laptup.png";
import Button from "./components/Button";
import Circle from "./components/Circle";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Circle top={"top-0"} left={"left-40"} width={"w-1/12"} />
      <div className="px-2.5 h-screen flex flex-col justify-center items-center text-center relative z-10">
        <h3 className="anim-opacity">Hello!</h3>
        <h3 className="anim-opacity">
          Je suis Indra George, développeuse JavaScript React.
        </h3>
        <p className="anim-opacity mt-3 text-xl md:text-2xl font-medium">
          J’aime créer des applications solides et évolutifs avec d’excellentes
          expériences utilisatrices
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <Link img={arrowLink} href={"./competences"}>
            Compétences
          </Link>
          <Link img={arrowLink} href={"./projets"}>
            Projets
          </Link>
        </div>
        <Button href={"./contacts"}>Contacts</Button>
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </div>
      <Circle left={"left-[-7%]"} bottom={"bottom-0"} width={"w-3/12"} />
      <Image
        className="absolute bottom-0 w-4/12  opacity-90 "
        src={laptup}
        alt="ordinateur"
      />
      <Circle right={"right-[-4%]"} bottom={"bottom-0"} width={"w-2/12"} />
    </main>
  );
}
