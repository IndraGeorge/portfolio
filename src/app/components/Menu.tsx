"use client";
import Link from "next/link";
import { useState } from "react";

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
        <span className="barre"></span>
        <span className="barre"></span>
        <span className="barre"></span>
      </div>
      <nav
        className={`menu overflow-hidden fixed top-[0px] left-[0px] flex flex-col justify-center w-full z-[2] transform${
          nav
            ? "translate-y-0 h-full opacity-100"
            : "translate-y-full h-0 opacity-0"
        }`}
      >
        <ul className="overflow-hidden flex flex-col items-center justify-center md:flex-row">
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
        <div className="absolute left-0 right-0 bottom-0">
        
        </div>
      </nav>
    </header>
  );
};

export default Menu;
