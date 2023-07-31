import Menu from "../components/Menu";
import Link from "next/link";
import Image from "next/image";
import arrow from "../assets/arrowLink.svg";

export default function About() {
  return (
    <div className="mt-14 md:mx-14 mx-8">
      <Menu />
      <main>
        <div className="bloc-anim mt-3 mb-6 md:ml-28">
          <div>
            <h2 className="mb-6">À propos</h2>
            <p className="text-base md:text-lg md:max-w-[75%]">
              Bienvenue dans mon univers !
              <br />
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
              React.js / JavaScript / Node.js / Express.js / TypeScript /
              MongoDB / Git / GitHub / Responsive design / HTML et CSS /
              Méthodes agiles
            </p>
            <br />

            <Link
              className="flex gap-3 items-center text-base text-[#a616b9] hover:underline"
              href="/projets"
            >
              <Image className="animate-bounce w-6" src={arrow} alt="flèche" />
              Voir mes projets
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
