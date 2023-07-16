"use client";

import Link from "next/link";
import { useState } from "react";
import rod from "../assets/rod.svg";
import close from "../assets/cross.svg";
import Image from "next/image";

const Menu = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {nav ? (
        <Image
          onClick={showNav}
          className="md:w-16 w-12 cursor-pointer fixed z-[5]"
          src={close}
          alt="croix"
        />
      ) : (
        <Image
          onClick={showNav}
          className="md:w-16 w-12 cursor-pointer"
          src={rod}
          alt="barre menu"
        />
      )}
      <nav
        className={`h-full bg-[#f0f1ff] fixed top-[0px] left-[0px] flex flex-col justify-center w-full z-[2] duration-400 ${
          nav ? "translate-y-[0]" : "translate-y-[-100%]"
        }`}
      >
        <ul
          className={`m-auto md:ml-[25%] ${
            nav ? "translate-y-[0]" : "translate-y-[-100vh] translate-z-[0]"
          } duration-700`}
        >
          <li>
            <Link
              className="link-border italic text-3xl md:text-4xl xl:text-5xl"
              href="/"
              rel="noreferrer"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="link-border italic text-3xl md:text-4xl xl:text-5xl"
              href="/competences"
              rel="noreferrer"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              className="link-border italic text-3xl md:text-4xl xl:text-5xl"
              href="/projets"
              rel="noreferrer"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="link-border italic text-3xl md:text-4xl xl:text-5xl"
              href="/contact"
              rel="noreferrer"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
