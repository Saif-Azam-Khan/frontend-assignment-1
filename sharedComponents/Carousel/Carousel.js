import { sizeImg } from "@/public/cardImg";
import styles from "./Carousel.module.css";
import { cardData } from "@/utils/data/card";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

function Carousel({ tag = "trending", heading = "Trending T-Shirts" }) {
  let dataToShow = [];
  if (tag === "trending") {
    dataToShow = cardData.filter((e) => e.tag === "trending");
  } else {
    dataToShow = cardData.filter((e) => e.tag === "featured");
  }

  return (
    <>
      <hr className={styles["hr-text"]} data-content={heading} />
      <br></br>
      <Grid container spacing={2}>
        {dataToShow.map((item, index) => (
          <Grid item md={3} xs={3} key={index}>
            <Card className={styles.card}>
              <Image src={item.imgUrl} alt="card image"/>
              <CardContent>
                <span className={styles.description}>{item.description}</span>
                <br></br>
                <Grid
                  container
                  spacing={1}
                  style={{ justifyContent: "center" }}
                >
                  <Grid item>
                    <span className={styles.price}>{item.price}</span>
                  </Grid>
                  <Grid item>
                    <span className={styles["original_price"]}>
                      {item.original_price}
                    </span>
                  </Grid>
                  <Grid item>
                    <br></br>
                    <Image src={sizeImg} alt="size chart"/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <Button className={styles.button}>VIEW all</Button>
      <br></br>
    </>
  );
}

export default Carousel;
