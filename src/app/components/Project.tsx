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
    <li className="p-[1.2rem] bloc relative md:max-w-[350px]">
      <Link
        href={href}
        target="_blanck"
        rel="noreferrer"
        className={"project flex relative flex-col items-center block"}
      >
        <Image priority={false} className="h-auto" src={src} alt={alt} />
      </Link>
      <span className="name-project text-center">{children}</span>
    </li>
  );
}
