import imgpodologue from "../assets/imgpodologue.jpg";
import master from "../assets/master.jpg";
import kasa from "../assets/kasa.jpg";
import todoapp from "../assets/todoapp.jpg";
import Project from "../components/Project";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Projects() {
  return (
    <div className="mt-10 mx-8 relative">
      <Menu />
      <main className="pt-8">
        <h2 className="text-center">Projets</h2>
        <div className="flex flex-wrap items-center">
          <ul className="list-projects flex flex-wrap mt-5 w-full h-full pl-3 relative">
            <Project
              href="https://cabinetpodologievalamba.fr/"
              src={imgpodologue}
              alt="site cabinet podologue valamba"
            >
              Cabinet Pédicure-Podologue
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
              alt="site location appartemenr"
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
