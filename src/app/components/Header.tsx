"use client";
import {useState} from "react"

const Header = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () =>{
    setOpen(!open);
  }
 
  return (
    <header className="flex h-[70px] justify-end items-center">
      <div onClick={openMenu} className= {`burger ${open ? "active":""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <nav className={`${open ? "open" : ""}`}>
          <ul className="flex pr-16 pt-4">
            <li className="pr-10">
                <a onClick={openMenu} href="#about">A propos</a>
            </li>
            <li className="pr-10">
                <a onClick={openMenu} href="#skills">Compétences</a>
            </li>
            <li className="pr-10">
                <a onClick={openMenu} href="#portfolio">Portfolio</a>
            </li>
            <li className="pr-10">
                <a onClick={openMenu} href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
