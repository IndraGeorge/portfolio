"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";

const Menu = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between h-[70px]">
      <div
        onClick={showNav}
        className={`${nav ? "active fixed" : ""} burger cursor-pointer z-[3]`}
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
      <nav
        className={`menu overflow-hidden fixed top-[0px] left-[0px] flex flex-col justify-center w-full z-[2] transform${
          nav ? "translate-y-0 h-full" : "translate-y-full h-0"
        }`}
      >
        <ul className="m-auto md:ml-[25%] overflow-hidden">
          <li>
            <Link className="link-border nav-link" href="/" rel="noreferrer">
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="link-border nav-link"
              href="/a-propos"
              rel="noreferrer"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              className="link-border nav-link"
              href="/projets"
              rel="noreferrer"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="link-border nav-link"
              href="/contact"
              rel="noreferrer"
            >
              Contacts
            </Link>
          </li>
        </ul>
        <Footer />
      </nav>
    </header>
  );
};

export default Menu;
