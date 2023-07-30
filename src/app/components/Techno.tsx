type IProps = {
  children: React.ReactNode;
};

export default function Techno({ children }: IProps) {
  return (
    <div className="bloc-anim flex flex-col items-center">
      <h4>{children}</h4>
    </div>
  );
}
