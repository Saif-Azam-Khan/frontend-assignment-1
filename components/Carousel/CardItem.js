// import { useState } from "react";
import styles from "./Card.module.css";
import { cardData } from "@/utils/data/card";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

function CardItem(tag) {
  // const [card, setCard] = useState([]);
  let dataToShow = [];
  if (tag === "trending") {
    dataToShow = cardData.filter((e) => e.tag === "trending");
  } else {
    dataToShow = cardData.filter((e) => e.tag === "featured");
  }

  return (
    <>
      <Grid container spacing={2}>
        {dataToShow.map((item, index) => (
          <Grid item md={3} xs={3}>
            <Card key={index}>
              <Image src={item.imgUrl} />
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
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <Button>VIEW all</Button>
    </>
  );
}

export default CardItem;
