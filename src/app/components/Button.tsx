type IProps = {
  href?: string;
  children: React.ReactNode;
};

export default function Button({ children, href }: IProps) {
  return (
    <a className="mt-3" href={href}>
      <button className="rounded-full uppercase w-36 p-3">{children}</button>
    </a>
  );
}
