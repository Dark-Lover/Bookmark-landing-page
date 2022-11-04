import Image from "next/image";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_image}>
        <Image
          src="/images/illustration-hero.svg"
          layout="fill"
          priority
          alt="Hero"
        />
      </div>
      <div className={styles.hero_content}>
        <h1>A simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize you favourite websites. Open
          a new browser tab and see your sites load instantly.try for free.
        </p>
        <div className={styles.hero_btns}>
          <a href="#" className={styles.btn_primary}>
            Get it on Chrome
          </a>
          <a href="#" className={styles.btn_outlined}>
            Get it on Firefox
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
