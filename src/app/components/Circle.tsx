type IProps = {
  width: string;
  height: string;
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
      className={`circle rounded-full absolute overflow-hidden ${top} ${left} ${right} ${width} ${bottom} ${height}`}
    ></div>
  );
}
