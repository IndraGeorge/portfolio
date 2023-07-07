import Image from "next/image";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="flex justify-center items-center absolute bottom-0 mb-6">
      <Image className="w-9" src={mail} alt="mail" />
      <Image className="w-9" src={linkedin} alt="linkedin" />
      <Image className="w-9" src={github} alt="github" />
    </div>
  );
}
