import Image from "next/image";
import styles from "./MobileMenu.module.scss";

interface IMobileMenu {
  handleToggle: (toggle: boolean) => void;
}

function MobileMenu({ handleToggle }: IMobileMenu) {
  return (
    <div className={styles.mobile_menu}>
      <div className={styles.mobile_logo}>
        <div className={styles.m_logo}>
          <Image
            src="/images/logo-bookmark-white.svg"
            layout="fill"
            alt="Logo"
          />
        </div>
        <div className={styles.m_toggle}>
          <Image
            src="/images/icon-close.svg"
            layout="fill"
            alt="Logo"
            onClick={() => handleToggle(false)}
          />
        </div>
      </div>
      <ul className={styles.m_items}>
        <li>FEATURING</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <li className={styles.m_btn}>LOGIN</li>
      </ul>
    </div>
  );
}

export default MobileMenu;
