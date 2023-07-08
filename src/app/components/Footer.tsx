import Image from "next/image";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center mb-2">
      <div className="flex">
        <Image className="w-9" src={mail} alt="mail" />
        <Image className="w-9" src={linkedin} alt="linkedin" />
        <Image className="w-9" src={github} alt="github" />
      </div>
      <p className="text-xs">© 2023 Indra George, tous droits réservés</p>
    </footer>
  );
}
