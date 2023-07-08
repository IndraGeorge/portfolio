type IProps = {
  children: React.ReactNode;
};

export default function Projets({ children }: IProps) {
  return (
    <div>
      <p className="items-project mt-2.5 border-b-[2px] border-[#606887]">
        {children}
      </p>
    </div>
  );
}
