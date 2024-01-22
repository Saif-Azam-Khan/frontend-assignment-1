import Head from "next/head";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar/Navbar";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import { Container } from "@mui/material";
import CircleImg from "@/components/CircleImg/CircleImg";
import ImageTiles from "@/components/ImageTiles/ImageTiles";
import Carousel from "@/sharedComponents/Carousel/Carousel";
import Banner from "@/sharedComponents/Banner/Banner";
import ThreeImg from "@/components/ThreeImg/ThreeImg";

export default function Home() {
  return (
    <main>
      <Head>
        <title>E-comm</title>
      </Head>
      <div className={styles.main}>
        <NavBar />
        <HeaderImage />
        <br></br>
        <br></br>
        <Container>
          <CircleImg />
          <br></br>
          <br></br>
          <br></br>
          <ImageTiles />
          <br></br>
          <Carousel tags="trending" heading="Trending T-Shirts" />
          <Carousel tags="featured" heading="Featured Products" />
        </Container>
        <br></br>
          <Banner order="1" />
          <br></br>
          <Banner order="2" />
          <br></br>
          <Container>
            <ThreeImg/>
          </Container>
      </div>
    </main>
  );
}
