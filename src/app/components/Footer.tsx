import Image from "next/image";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mb-2 absolute bottom-0 left-0 right-0">
      <div className="flex">
        <Link
          href="mailto:george.indraa@gmail.com"
          target="_blanck"
          rel="noreferrer"
        >
          <Image className="w-9" src={mail} alt="mail" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/indra-george/"
          target="_blanck"
          rel="noreferrer"
        >
          <Image className="w-9" src={linkedin} alt="linkedin" />
        </Link>
        <Link
          href="https://github.com/IndraGeorge"
          target="_blanck"
          rel="noreferrer"
        >
          <Image className="w-9" src={github} alt="github" />
        </Link>
      </div>
      <p className="text-xs">© 2023 Indra George, tous droits réservés</p>
    </div>
  );
}
