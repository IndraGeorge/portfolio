import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IProps = {
  href: string;
  img: StaticImageData;
  children: React.ReactNode;
};

export default function Nav({ href, children, img }: IProps) {
  return (
    <div className="flex gap-4 items-center">
      <Image className="w-6" src={img} alt="flèche" />
      <Link className="link-border" href={href} rel="noreferrer">
        {children}
      </Link>
    </div>
  );
}
