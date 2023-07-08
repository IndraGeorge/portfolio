import Image, { StaticImageData } from "next/image";

type IProps = {
  img: StaticImageData;
  alt: string;
  children: React.ReactNode;
};

export default function Techno({ img, children, alt }: IProps) {
  return (
    <div className="flex flex-col items-center">
      <h4>{children}</h4>
      <Image className="w-32" src={img} alt={alt} />
    </div>
  );
}
