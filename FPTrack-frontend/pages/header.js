import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GoogleSignin from "../src/components/auth/google_oauth";

export default function Header() {
  return (
    <div className={styles.header}>
      <link rel="stylesheet" href="css/main.css" />
      <Head>
        <title>FpTrack App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link href="./css/main.css" rel="stylesheet" />
      </Head>
      <center>
        <a href="/">
          <img src="/logo.png" height="100px"></img>
        </a>
      </center>
      <div>
        <p className={"text-2xl sub"}>Funded Project Tracker</p>
      </div>
      <GoogleSignin />
    </div>
  );
}
