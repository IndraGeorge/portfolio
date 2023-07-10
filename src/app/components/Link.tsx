import Image from "next/image";
import Link from "next/link";

type IProps = {
  href: string;
  img: any;
  children: React.ReactNode;
};

export default function Nav({ href, children, img }: IProps) {
  return (
    <nav className="flex gap-4 items-center duration-200 hover:underline">
      <Image className="w-6" src={img} alt="flèche" />
      <ul>
        <li>
          <Link href={href}>{children}</Link>
        </li>
      </ul>
    </nav>
  );
}
