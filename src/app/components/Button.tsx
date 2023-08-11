type IProps = {
  href?: string;
  children: React.ReactNode;
};

export default function Button({ children, href }: IProps) {
  return (
    <a href={href}>
      <button className="rounded-full uppercase p-3 w-36 mt-5">
        {children}
      </button>
    </a>
  );
}
