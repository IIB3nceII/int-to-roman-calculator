import Head from "next/head";
import styles from "@/pages/index.module.css";
import { Converter } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Converter />
    </div>
  );
}
