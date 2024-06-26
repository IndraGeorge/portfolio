import Link from "next/link";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export default function Footer() {
  let date = new Date();

  return (
    <footer className="flex flex-col items-center justify-center p-6">
      <div className="flex gap-4 mb-2">
        <Link
          href="mailto:george.indraa@gmail.com"
          target="_blanck"
          rel="noreferrer"
          aria-label="Adresse email"
        >
          <Mail color="#323232" size={20}></Mail>
        </Link>
        <Link
          href="https://www.linkedin.com/in/indra-george/"
          target="_blanck"
          rel="noreferrer"
          aria-label="Lien linkedin"
        >
          <Linkedin color="#323232" size={20}></Linkedin>
        </Link>
        <Link
          href="https://github.com/IndraGeorge"
          target="_blanck"
          rel="noreferrer"
          aria-label="Lien repository GitHub"
        >
          <Github color="#323232" size={20}></Github>
        </Link>
      </div>
      <p className="text-xs">
        © {date.getFullYear()} Indra George, tous droits réservés
      </p>
    </footer>
  );
}