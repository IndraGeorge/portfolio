"use client";
import Image, { StaticImageData } from "next/image";
import imgpodologue from "../assets/imgpodologue.png";
import master from "../assets/master.png";
import todoapp from "../assets/to-do-app.png";
import kasa from "../assets/kasa.svg";
import kanap from "../assets/kanap.png";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { useState } from "react";
import Menu from "../components/Menu";

type Images = {
  [key: number]: {
    image: StaticImageData;
  };
};

export default function Projects() {
  const images: Images = {
    0: {
      image: imgpodologue,
    },
    1: {
      image: master,
    },
    2: {
      image: todoapp,
    },
    3: {
      image: kasa,
    },
    4: {
      image: kanap,
    },
  };

  let getKeys = Object.keys(images);

  // Get values data
  const imageSources = Object.values(images).map((item) => item.image);

  const [hovered, setHovered] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  const over = (isHovered: boolean, key: number) => {
    for (let i = 0; i < getKeys.length; i++) {
      if (key === i) {
        setHovered(isHovered);
        setIndexImage(i);
      }
    }
  };

  return (
    <main className="px-10 pt-10 flex flex-col">
      <Menu />
      <div className="flex items-center justify-between flex-grow mb-3">
        <div className="projects flex justify-center w-2/4">
          {imageSources.map((src, index) =>
            hovered && index === indexImage ? (
              <Image
                key={index}
                className="p2 w-80 object-contain anim-opacity"
                src={src}
                alt="site podologue"
              />
            ) : null
          )}
        </div>
        <div className="bloc-anim flex flex-col m-5 w-full md:w-2/4">
          <h2>Projets</h2>
          <hr />
          <ul>
            <Project
              onMouseOver={() => over(true, 0)}
              onMouseOut={() => over(false, 0)}
              href="https://cabinetpodologievalamba.fr/"
            >
              Cabinet Pédicure-Podologue
            </Project>
            <Project
              onMouseOver={() => over(true, 1)}
              onMouseOut={() => over(false, 1)}
              href="https://challengemaster.fr/"
            >
              ChallengeMaster
            </Project>
            <Project
              onMouseOver={() => over(true, 2)}
              onMouseOut={() => over(false, 2)}
              href="https://to-do-app-bb6ea.web.app/"
            >
              To-do-app
            </Project>
            <Project
              onMouseOver={() => over(true, 3)}
              onMouseOut={() => over(false, 3)}
              href="https://indrageorge.github.io/Kasa/"
            >
              Kasa
            </Project>
            <Project
              onMouseOver={() => over(true, 4)}
              onMouseOut={() => over(false, 4)}
              href="#"
            >
              Kanap
            </Project>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
