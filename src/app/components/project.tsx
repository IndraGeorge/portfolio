import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
};

export default function Project({ href, src, alt, children }: IProps) {
  return (
    <li className="p-[1.2rem] bloc relative w-1/2">
      <Link
        href={href}
        target="_blanck"
        rel="noreferrer"
        className={"flex relative flex-col items-center block"}
      >
        <Image className="h-auto" src={src} alt={alt} />
        {children}
      </Link>
    </li>
  );
}
