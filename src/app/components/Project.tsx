import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type IProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
};

export default function Project({ href, src, alt, children }: IProps) {
  return (
    <li className="project w-80 p-8 rounded-lg relative">
      <Image
        priority={false}
        className="w-full h-40 object-cover rounded-lg mb-4"
        src={src}
        alt={alt}
      />
      <div className="text-center">{children}</div>
      <div className="overlay">
        <Link
          className="flex items-center justify-center p-4 border-2 border-[#d280ff]
           hover:bg-[#d280ff] duration-400 rounded-full normal-case"
          href={href}
          target="_blanck"
          rel="noreferrer"
        >
          Visiter le site
          <span>
            <ChevronRight color="#fff" size={24}></ChevronRight>
          </span>
        </Link>
      </div>
    </li>
  );
}
