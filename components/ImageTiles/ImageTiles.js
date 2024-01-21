import Grid from "@mui/material/Grid";
import Image from "next/image";

import { Img1, Img2, Img3, Img4, Img5 } from "@/public/tileImg";

function ImageTiles() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} sm={12}>
          <Image src={Img1} alt="Tile image 1" placeholder="blur" />
        </Grid>
        <Grid item xl={6} md={6} sm={3}>
          <Image src={Img2} alt="Tile image 2" placeholder="blur" />
        </Grid>
        <br></br>
        <Grid item xl={4} md={4} sm={3}>
          <Image src={Img3} alt="Tile image 3" placeholder="blur" />
        </Grid>
        <Grid item xl={4} md={4} sm={3}>
          <Image src={Img5} alt="Tile image 5" placeholder="blur" />
        </Grid>
        <Grid item xl={4} md={4} sm={3}>
          <Image src={Img4} alt="Tile image 4" placeholder="blur" />
        </Grid>
      </Grid>
    </>
  );
}

export default ImageTiles;
