import Hero from "@/Components/Header/Hero/Hero";
import styles from "./page.module.css";
import Offerings from "@/Components/Offerings/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Offerings />
    </main>
  );
}
