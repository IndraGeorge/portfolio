"use client";
import Image, { StaticImageData } from "next/image";
import imgpodologue from "../assets/imgpodologue.png";
import master from "../assets/master.png";
import kasa from "../assets/kasa.svg";
import kanap from "../assets/kanap.png";
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
      image: kasa,
    },
    3: {
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
    <div className="mt-10 ml-10 mr-10">
      <Menu />
      <main className="pt-8">
        <div className="flex items-center justify-between mb-5">
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
                Cabinet Pédicure-Podologue - <span>React JS</span>
              </Project>
              <Project
                onMouseOver={() => over(true, 1)}
                onMouseOut={() => over(false, 1)}
                href="https://challengemaster.fr/"
              >
                ChallengeMaster - <span>Node JS et Express </span>
              </Project>
              <Project
                onMouseOver={() => over(true, 2)}
                onMouseOut={() => over(false, 2)}
                href="https://indrageorge.github.io/Kasa/"
              >
                Kasa - <span>React JS</span>
              </Project>
              <Project
                onMouseOver={() => over(true, 3)}
                onMouseOut={() => over(false, 3)}
                href="#"
              >
                Kanap - <span>JavaScript vanilla</span>
              </Project>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
