import Link from "../components/Link";
import Image from "next/image";
import imgpodologue from "../assets/imgpodologue.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Footer from "../components/Footer";
import Projets from "../components/Projets";

export default function projets() {
  return (
    <main className="p-10">
      <div className="flex justify-between">
        <Link href="./" img={ArrowLeft}>
          Accueil
        </Link>
        <Link href="./contacts" img={ArrowRight}>
          Contacts
        </Link>
      </div>
      <div className="flex items-center justify-between mt-8 min-h-[430px] ">
        <div className="projects flex justify-center rounded-[20px] w-2/4 h-[350px]">
          <Image className="p2 w-64" src={imgpodologue} alt="site podologue" />
        </div>
        <div className="flex flex-col m-5 w-2/4 h-full">
          <h2>Projets</h2>
          <hr />
          <Projets>Cabinet Pédicure-Podologue</Projets>
          <Projets>ChallengeMaster</Projets>
          <Projets>To-do-app</Projets>
          <Projets>Kanap</Projets>
        </div>
      </div>
      <div className="relative bottom-[-40px]">
        <Footer />
      </div>
    </main>
  );
}
