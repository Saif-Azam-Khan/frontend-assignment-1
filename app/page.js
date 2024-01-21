
import Head from "next/head";
// import { useClient } from "next/data-client";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar/Navbar";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import { Container } from "@mui/material";
import CircleImg from "@/components/CircleImg/CircleImg";
import ImageTiles from "@/components/ImageTiles/ImageTiles";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  // useClient()
  return (
    <main>
      <Head>
        <title>E-comm</title>
      </Head>
      <>
        <NavBar />
        <HeaderImage/>
        <br></br>
        <br></br>
        <Container>
          <CircleImg/>
          <br></br>
          <br></br>
          <br></br>
          <ImageTiles/>
          <br></br>
          <Carousel tags="trending" heading="Trending T-Shirts"/>
          <Carousel tags="featured" heading="Featured Products"/>
        </Container>
      </>
    </main>
  );
}
