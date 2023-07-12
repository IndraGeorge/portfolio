import Image from "next/image";
import Link from "next/link";
import arrowLink from "../assets/arrowLink.svg";

type IProps = {
  href: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  children: React.ReactNode;
};

export default function Items({
  children,
  href,
  onMouseOver,
  onMouseOut,
}: IProps) {
  return (
    <Link
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`bloc-anim items-project relative flex items-center border-b-[2px] border-[#606887]`}
    >
      <Image className="arrow-project" src={arrowLink} alt="flèche" />

      <p className="link-project">{children}</p>
    </Link>
  );
}
