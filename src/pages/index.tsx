import CompletedChallengers from "../components/completedChallengers";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallengers />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
