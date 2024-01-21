import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import styles from "./CircleImg.module.css";

import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/public/circleImg";

const imgData = [
  { url: Img1, description: "Men’s T-Shirts" },
  { url: Img2, description: "Women’s Wear" },
  { url: Img3, description: "Winter Collections" },
  { url: Img4, description: "Hooded T-Shirts" },
  { url: Img5, description: "Polo Neck T-Shirts" },
  { url: Img6, description: "Full Sleeves T-Shirts" },
];

function CircleImg() {
  return (
    <div>
      <Grid container spacing={2}>
        {imgData.map((item, index) => (
          <Grid item xl={2} key={index}>
            <Stack spacing={2}>
              <Image src={item.url} alt={`Circle image ${index+1}`} placeholder="blur" />
              <span className={styles.imgDescription}>{item.description}</span>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CircleImg;
