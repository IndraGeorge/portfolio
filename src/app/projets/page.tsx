"use client";
import Link from "../components/Link";
import Image, { StaticImageData } from "next/image";
import imgpodologue from "../assets/imgpodologue.png";
import master from "../assets/master.png";
import todoapp from "../assets/to-do-app.png";
import kasa from "../assets/kasa.svg";
import kanap from "../assets/kanap.png";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Footer from "../components/Footer";
import Items from "../components/Items";
import { useState } from "react";

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
    <main className="p-10">
      <div className="flex justify-between">
        <Link href="./competences" img={ArrowLeft}>
          Compétences
        </Link>
        <Link href="./contacts" img={ArrowRight}>
          Contacts
        </Link>
      </div>
      <div className="flex items-center justify-between mt-8 min-h-[456px] ">
        <div className="projects flex justify-center w-2/4">
          {imageSources.map((src, index) =>
            hovered && index === indexImage ? (
              <Image
                key={index}
                className="p2 w-80"
                src={src}
                alt="site podologue"
              />
            ) : null
          )}
        </div>
        <div className=" bloc-anim flex flex-col m-5 w-full md:w-2/4 h-full">
          <h2>Projets</h2>
          <hr />
          <Items
            onMouseOver={() => over(true, 0)}
            onMouseOut={() => over(false, 0)}
            href="https://cabinetpodologievalamba.fr/"
          >
            Cabinet Pédicure-Podologue
          </Items>
          <Items
            onMouseOver={() => over(true, 1)}
            onMouseOut={() => over(false, 1)}
            href="#"
          >
            ChallengeMaster
          </Items>
          <Items
            onMouseOver={() => over(true, 2)}
            onMouseOut={() => over(false, 2)}
            href="#"
          >
            To-do-app
          </Items>
          <Items
            onMouseOver={() => over(true, 3)}
            onMouseOut={() => over(false, 3)}
            href="#"
          >
            Kanap
          </Items>
        </div>
      </div>
      <div className="relative bottom-[-40px]">
        <Footer />
      </div>
    </main>
  );
}
