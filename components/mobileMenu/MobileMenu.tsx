import Image from "next/image";
import { IMobileMenu } from "../../types/types";
import styles from "./MobileMenu.module.scss";
import { motion } from "framer-motion";

function MobileMenu({ handleToggle }: IMobileMenu) {
  return (
    <motion.div
      className={styles.mobile_menu}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 200 },
      }}
    >
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
    </motion.div>
  );
}

export default MobileMenu;
