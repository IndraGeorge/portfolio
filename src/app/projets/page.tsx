import imgpodologue from "../assets/imgpodologue.png";
import master from "../assets/master.png";
import kasa from "../assets/kasa.png";
import todoapp from "../assets/todoapp.png";
import Project from "../components/Project";
import Menu from "../components/Menu";

export default function Projects() {
  return (
    <div className="mt-16 md:mx-16 mx-6">
      <Menu />
      <main>
        <h2 className="text-center">Projets</h2>
        <div className="flex flex-wrap items-center m-auto my-8">
          <ul className="flex flex-wrap justify-center gap-6 w-full h-full mt-8 relative">
            <Project
              href="https://cabinetpodologievalamba.fr/"
              src={imgpodologue}
              alt="site cabinet podologue valamba"
            >
              <h5 className="name-project">Cabinet podologue</h5>
              <p className="tech">Découverte du travail d&apos;un podologue.</p>
            </Project>
            <Project
              href="https://challengemaster.fr/"
              src={master}
              alt="site générateur de projest et de défis"
            >
              <h5 className="name-project">Challenge master</h5>
              <p className="tech">
                Outil pour générer des idées de projets ou de défis.
              </p>
            </Project>
            <Project
              href="https://indrageorge.github.io/Kasa/"
              src={kasa}
              alt="site location appartement"
            >
              <h5 className="name-project">Kasa</h5>
              <p className="tech">
                Location d&apos;appartements entre particuliers
              </p>
            </Project>
            <Project
              href="https://to-do-app-bb6ea.web.app/"
              src={todoapp}
              alt="to do list"
            >
              <h5 className="name-project">To do app</h5>
              <p className="tech">To do list</p>
            </Project>
          </ul>
        </div>
      </main>
    </div>
  );
}
