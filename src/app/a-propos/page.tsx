import Menu from "../components/Menu";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <div className="mt-14 md:mx-14 mx-8 h-full">
      <Menu />
      <main>
        <div className="about mt-3 mb-10 md:ml-28">
          <div>
            <h2 className="mb-6">À propos</h2>
            <p className="text-base md:text-lg md:max-w-[75%]">
              Je suis passionnée par l&apos;art de créer des{" "}
              <b>applications web interactives et intuitives</b> qui repoussent
              les limites de l&apos;expérience utilisateur.
              <br />
              Mon portfolio est un reflet de ma personnalité riche et dynamique,
              où chaque projet est une aventure unique dans laquelle je
              m&apos;investis avec enthousiasme.
              <br />
              Que ce soit en concevant des <b>interfaces élégantes</b>, en{" "}
              <b>résolvant des défis techniques</b> ou en explorant de nouvelles
              fonctionnalités, je mets tout en œuvre pour créer des{" "}
              <b>solutions innovantes et performantes</b>.
              <br />
              Plongez dans mes réalisations pour découvrir comment j&apos;allie
              ma créativité à ma maîtrise des technologies pour offrir des
              expériences uniques. <br />
            </p>
          </div>
          <div>
            <h4 className="mt-8">Compétences</h4>
            <br />
            <p className="text-base md:text-lg md:max-w-[75%]">
              React JS / JavaScript / Node JS / Express JS / TypeScript /
              MongoDB / Git / GitHub / Responsive design / HTML / CSS / Méthodes
              agiles
            </p>
            <br />
            <Link
              className="flex gap-3 items-center text-base text-[#d280ff] hover:underline"
              href="/projets"
            >
              <MoveRight
                className="animate-bounce"
                color="#d280ff"
                size={25}
              ></MoveRight>
              Voir mes projets
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
