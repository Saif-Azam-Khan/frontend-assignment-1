import Image from "next/image";
import Head from "next/head";

import styles from "./page.module.css";
import NavBar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Head>
        <title>E-comm</title>
      </Head>
      <div>
        <NavBar />
      </div>
    </main>
  );
}
