import Menu from "../components/Menu";
import Link from "next/link";
import Image from "next/image";
import img_about from "../assets/img_about.jpg";

export default function About() {
  return (
    <div className="mt-10 ml-10">
      <Menu />
      <main className="mb-9 mt-3 md:ml-8 mr-10 md:mr-0 ">
        <div className="flex md:flex-row-reverse justify-between flex-col">
          <div className="w-full md:w-[35%]">
            <Image
              className="anim-opacity md:rounded-l-3xl max-[768px]:rounded-3xl h-full object-cover"
              src={img_about}
              alt="ordinateur"
            />
          </div>
          <div className="mt-8 pr-0 md:mr-8 w-full md:w-[65%]">
            <h2 className="mb-8">À propos</h2>
            <h4 className="md:w-9/12">
              Dynamisez votre équipe avec une développeuse passionnée et
              créative !
            </h4>
            <p className="mt-5 text-base md:text-lg md:w-9/12">
              Mon parcours professionnel m&apos;a offert une palette diversifiée
              de compétences, couvrant différents langages, frameworks et
              technologies.
              <br />
              Ma spécialisation en JavaScript et React.js m&apos;a permis de
              concevoir des interfaces utilisateur interactives et conviviales,
              procurant une expérience utilisateur remarquable.
              <br /> N&apos;hésitez pas à parcourir mon portfolio et à me
              contacter pour en savoir plus sur mon travail et comment je
              pourrais contribuer à la réussite de votre entreprise.
              <br />
            </p>
            <div className="mt-3">
              <h4>Savoir-faires</h4>
              <p className="text-base md:text-lg mt-2 mb-4">
                JavaScript / TypeScript / React JS / Node JS / Express / CSS /
                HTML / Git / GitHub
              </p>
            </div>
            <Link
              className="text-base text-[#6a519f] hover:underline"
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
