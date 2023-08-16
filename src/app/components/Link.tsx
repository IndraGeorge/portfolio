import Link from "next/link";
import { MoveRight } from "lucide-react";

type IProps = {
  href: string;
  children: React.ReactNode;
};

export default function Nav({ href, children }: IProps) {
  return (
    <Link href={href} rel="noreferrer" className="flex gap-4 items-center p-2">
      <MoveRight color="white" size={20}></MoveRight>
      <span className="link-border">{children}</span>
    </Link>
  );
}
