import Image from "next/image";

type IProps = {
  href: string;
  img: any;
  children: React.ReactNode;
};

export default function Link({ href, children, img }: IProps) {
  return (
    <nav className="flex gap-4 items-center duration-200 hover:underline">
      <Image className="w-7" src={img} alt="flèche" />
      <ul>
        <li>
          <a href={href}>{children}</a>
        </li>
      </ul>
    </nav>
  );
}
