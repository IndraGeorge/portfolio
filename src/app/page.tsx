import Link from "./components/Link";
import ArrowRight from "./assets/Arrowright.svg";
import laptup from "./assets/laptup.png";
import Button from "./components/Button";
import Circle from "./components/Circle";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Circle top={"top-0"} left={"left-40"} width={"w-1/12"} />
      <div className="px-2.5 h-screen flex flex-col justify-center items-center text-center relative z-10">
        <h3>Hello!</h3>
        <h3>Je suis Indra George, développeuse JavaScript React.</h3>
        <p className=" mt-3 text-xl md:text-2xl font-medium">
          J’aime créer des applications solides et évolutifs avec d’excellentes
          expériences utilisatrices
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <Link img={ArrowRight} href={"./competences"}>
            Compétences
          </Link>
          <Link img={ArrowRight} href={"./projets"}>
            Projets
          </Link>
        </div>
        <Button href={"./contacts"}>Contacts</Button>
        <Footer />
        <p className="text-xs mb-2 absolute bottom-0">
          © 2023 Indra George, tous droits réservés
        </p>
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
