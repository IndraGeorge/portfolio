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
      className={`circle absolute md:translate-y-18 translate-y-4 scale-105 opacity-80 ${top} ${left} ${right} ${width} ${bottom} ${height}`}
    ></div>
  );
}
