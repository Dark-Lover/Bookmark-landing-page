import Image from "next/image";
import MobileMenu from "../mobileMenu/MobileMenu";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p className={styles.small}>35,000+ ALREADY JOINED</p>
        <h2 className={styles.title}>Stay up-to-date with what we’re doing</h2>
        <div className={styles.form}>
          <input type="email" placeholder="Enter your email address" />
          <button>Contact Us</button>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.logo}>
          <Image
            src="/images/logo-bookmark-white.svg"
            layout="fill"
            alt="Logo"
          />
        </div>
        <ul className={styles.footer_menu}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className={styles.icons}>
          <Image
            src="/images/icon-facebook.svg"
            width={24}
            height={24}
            alt="Logo"
          />
          <Image
            src="/images/icon-twitter.svg"
            width={24}
            height={24}
            alt="Logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
