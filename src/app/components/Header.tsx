"use client";
import Link from "next/link";
import { useState } from "react";

const header = () => {
 
  return (
    <header className="flex justify-between h-[70px]">
        <nav>
          <ul className="flex">
            <li className="pr-6">
                <a href="#about">About</a>
            </li>
            <li className="pr-6">
                <a href="#skills">Skills</a>
            </li>
            <li className="pr-6">
                <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default header;
