import imgpodologue from "../assets/imgpodologue.jpg";
import master from "../assets/master.jpg";
import kasa from "../assets/kasa.jpg";
import todoapp from "../assets/todoapp.jpg";
import Project from "../components/Project";
import Menu from "../components/Menu";

export default function Projects() {
  return (
    <div className="mt-16 md:mx-16 mx-6">
      <Menu />
      <main>
        <h2 className="text-center">Projets</h2>
        <div className="bloc-anim bloc-projects flex flex-wrap items-center m-auto mt-8">
          <ul className="list-projects flex flex-wrap justify-center w-full h-full pl-3 relative">
            <Project
              href="https://cabinetpodologievalamba.fr/"
              src={imgpodologue}
              alt="site cabinet podologue valamba"
            >
              Cabinet Podologue
            </Project>
            <Project
              href="https://challengemaster.fr/"
              src={master}
              alt="site générateur de projest et de défis"
            >
              ChallengeMaster
            </Project>
            <Project
              href="https://indrageorge.github.io/Kasa/"
              src={kasa}
              alt="site location appartement"
            >
              Kasa
            </Project>
            <Project
              href="https://to-do-app-bb6ea.web.app/"
              src={todoapp}
              alt="to do list"
            >
              Todoapp
            </Project>
          </ul>
        </div>
      </main>
    </div>
  );
}
