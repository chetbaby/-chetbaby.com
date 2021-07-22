import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChetBABY!</title>
        <meta name="description" content="CB's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🚧🚧🚧 CBABY! is working on this site</h1>
        <h2>
          check out my links:
          <a href="https://linktr.ee/chetbaby" className={styles.card}>
            here!
          </a>
        </h2>
        <h3>
          <a href="mailto:eyo@chetbaby.com">eyo@chetbaby.com</a>
        </h3>
      </main>
    </div>
  );
}
