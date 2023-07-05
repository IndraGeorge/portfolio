import Image from "next/image";

type IProps = {
  href: string;
  img: string;
  children: React.ReactNode;
};

export default function Link({ href, children, img }: IProps) {
  return (
    <div className="flex gap-4 items-center duration-200 hover:underline">
      <Image className="w-8" src={img} alt="flèche" />
      <a href={href}>{children}</a>
    </div>
  );
}
