import { Card, CardContent, Grid } from "@mui/material";
import styles from "./ThreeImg.module.css";
import { Description } from "@/public/3Img";
import Image from "next/image";

function ThreeImg() {
  return (
    <Grid container spacing={2}>
      {Description.map((e, index) => (
        <Grid item xl={3} key={index}>
          <div
            className={styles.background}
          >
            <Image src={e.url} alt={e.url} />
            <span className={styles.background_img}>{e.description}</span>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ThreeImg;
