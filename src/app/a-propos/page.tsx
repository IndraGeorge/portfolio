import Menu from "../components/Menu";
import Link from "next/link";

export default function About() {
  return (
    <div className="mt-10 mx-8">
      <Menu />
      <main className="mt-3 md:ml-8">
        <div className="flex min-[900px]:flex-row justify-between min-[900px]:items-center flex-col">
          <div className="mt-8 pr-0 md:mr-8 w-full min-[900px]:w-1/2 pl-5">
            <h2 className="mb-8">À propos</h2>
            <p className="text-base md:text-lg">
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
              <b>Soyez inspirés</b> et laissez-vous emporter par mon amour pour
              le développement web, car chaque ligne de code que j&apos;écris
              est un pas de plus vers <b>un futur numérique captivant</b> !
            </p>
          </div>
          <div className="w-full mt-8 min-[900px]:ml-8 min-[900px]:w-1/2 pl-5">
            <h4 className="mb-8">Compétences</h4>
            <div className="flex flex-wrap mb-5">
              <div className="skills">JavaScript </div>
              <div className="skills">TypeScript</div>
              <div className="skills">React JS</div>
              <div className="skills"> Node JS</div>
              <div className="skills">Express</div>
              <div className="skills">CSS</div>
              <div className="skills">HTML</div>
              <div className="skills">Git</div>
              <div className="skills"> GitHub</div>
            </div>
            <Link
              className="text-base hover:underline text-[purple]"
              href="/projets"
            >
              Voir mes projets
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
