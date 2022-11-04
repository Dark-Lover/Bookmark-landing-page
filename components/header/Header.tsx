import Image from "next/image";
import styles from "./Header.module.scss";
import { useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo-bookmark.svg" layout="fill" alt="Logo" />
        </div>
        <div className={styles.menu_toggle}>
          <Image
            src="/images/icon-hamburger.svg"
            layout="fill"
            alt="Logo"
            onClick={() => setToggle(true)}
          />
        </div>
        <ul className={styles.menu_items}>
          <li>FEATURING</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li className={styles.btn}>LOGIN</li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {toggle ? <MobileMenu handleToggle={setToggle} /> : ""}
      {/* End Mobile Menu */}
    </header>
  );
}
export default Header;
