import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sneaker</title>
      </Head>
      <main className={styles.contentContainer}>
        <button>Shop now</button>
        <section className={styles.hero}>
          <h1>Try Sneackers, </h1>
          <h2>
            {" "}
            the best shoes <br /> in the world
          </h2>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul>
          <li>Shop</li>
          <li>All Products</li>
          <li>Colections</li>
          <li>Men</li>
          <li>Woman</li>
        </ul>
      </footer>
    </>
  );
}
