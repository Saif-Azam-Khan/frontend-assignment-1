import Image from "next/image";
import styles from "./Banner.module.css";
import { Img1, Img2 } from "@/public/bannerImg";

function Banner({ order = "1" }) {
  return (
    <div className={styles.container}>
      <Image
        src={order === "1" ? Img1 : Img2}
        className={styles.image}
        alt={order === "1" ? "banner 1" : "banner 2"}
      />
      ;
    </div>
  );
}

export default Banner;
