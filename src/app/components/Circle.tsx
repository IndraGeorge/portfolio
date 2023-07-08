type IProps = {
  width: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export default function Circle({
  width,
  height,
  top,
  left,
  right,
  bottom,
}: IProps) {
  return (
    <div
      className={`circle absolute md:translate-y-18 translate-y-4 scale-105 opacity-80 animate-[wiggle_1s_ease-in-out_infinite] ${top} ${left} ${right} ${width} ${bottom} ${height}`}
    ></div>
  );
}
