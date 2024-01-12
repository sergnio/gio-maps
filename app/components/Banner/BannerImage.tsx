import Image from "next/image";
import PizzaBanner from "@/public/static/images/pizza.webp";

export default () => {
  const height = 500;
  const width = height * 0.9;

  return (
    <Image
      src={PizzaBanner}
      alt={"GioMaps Banner Image"}
      height={height}
      width={width}
    />
  );
};
