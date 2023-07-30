type IProps = {
  href?: string;
  children: React.ReactNode;
};

export default function Button({ children, href }: IProps) {
  return (
    <a href={href}>
      <button className="rounded-full text-white uppercase p-3 w-36 mt-5 duration-200">
        {children}
      </button>
    </a>
  );
}
