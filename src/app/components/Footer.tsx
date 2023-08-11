import Link from "next/link";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export default function Footer() {
  let date = new Date();

  return (
    <div className="flex flex-col items-center justify-center mb-2 absolute bottom-0 left-0 right-0">
      <div className="flex gap-4 mb-2">
        <Link
          href="mailto:george.indraa@gmail.com"
          target="_blanck"
          rel="noreferrer"
        >
          <Mail color="white" size={20}></Mail>
        </Link>
        <Link
          href="https://www.linkedin.com/in/indra-george/"
          target="_blanck"
          rel="noreferrer"
        >
          <Linkedin color="white" size={20}></Linkedin>
        </Link>
        <Link
          href="https://github.com/IndraGeorge"
          target="_blanck"
          rel="noreferrer"
        >
          <Github color="white" size={20}></Github>
        </Link>
      </div>
      <p className="text-xs">
        © {date.getFullYear()} Indra George, tous droits réservés
      </p>
    </div>
  );
}
