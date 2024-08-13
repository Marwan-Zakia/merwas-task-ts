import Hero from "@/Components/Header/Hero/Hero";
import styles from "./page.module.css";
import Offerings from "@/Components/Offerings/Index";
import AboutUs from "@/Components/AboutUs/Index";
import Services from "@/Components/Services/Index";
import Partners from "@/Components/Partners/Index";
import ContactUs from "@/Components/ContactUs/Index";
import Footer from "@/Components/Footer/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Offerings />
      <AboutUs />
      <Services />
      <Partners />
      <ContactUs />
      <Footer />
    </main>
  );
}
