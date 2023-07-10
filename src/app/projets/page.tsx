"use client";

import Link from "../components/Link";
import Image from "next/image";
import imgpodologue from "../assets/imgpodologue.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Footer from "../components/Footer";
import Items from "../components/Items";
import { useEffect, useState } from "react";

export default function Projects() {
  const [image, setImage] = useState(false);

  useEffect(() => {
    let timeout: any;
    if (!image) {
      timeout = setTimeout(() => {
        setImage(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [image]);

  const over = () => {
    setImage(!image);
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
      <div className="flex items-center justify-between mt-8 min-h-[500px] ">
        <div className="projects flex justify-center w-2/4">
          {image ? (
            <Image
              className="p2 w-64"
              src={imgpodologue}
              alt="site podologue"
            />
          ) : null}
        </div>
        <div className=" bloc-anim flex flex-col m-5 w-full sm:w-2/4 h-full">
          <h2>Projets</h2>
          <hr />
          <Items onMouseOver={over} href="#">
            Cabinet Pédicure-Podologue
          </Items>
          <Items href="#">ChallengeMaster</Items>
          <Items href="#">To-do-app</Items>
          <Items href="#">Kanap</Items>
        </div>
      </div>
      <div className="relative bottom-[-40px]">
        <Footer />
      </div>
    </main>
  );
}
