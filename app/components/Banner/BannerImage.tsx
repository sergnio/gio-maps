import Image from "next/image";
import PizzaBanner from "@/public/static/images/pizza.webp";
import styles from "./BannerImage.module.css";

export default () => {
  const height = 600;
  const width = height * 0.33;

  return (
    <Image
      className={styles.banner}
      src={PizzaBanner}
      alt={"GioMaps Banner Image"}
      height={height}
      width={width}
    />
  );
};
