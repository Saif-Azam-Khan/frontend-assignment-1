import Image from "next/image";
import styles from "./HeaderImage.module.css"
import image from "../../public/headerImg.png"
function HeaderImage() {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt="headerImg"
        placeholder="blur"
        className={styles.header-image}
      />
    </div>
  );
}

export default HeaderImage;
