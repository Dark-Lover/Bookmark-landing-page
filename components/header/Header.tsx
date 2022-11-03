import Image from "next/image";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo-bookmark.svg" layout="fill" alt="Logo" />
        </div>
        <div className={styles.menu_toggle}>
          <Image src="/images/icon-hamburger.svg" layout="fill" alt="Logo" />
        </div>
        <ul className={styles.menu_items}>
          <li>FEATURING</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li className={styles.btn}>LOGIN</li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
