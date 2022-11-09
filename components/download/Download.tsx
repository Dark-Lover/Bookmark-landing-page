import Image from "next/image";
import styles from "./Download.module.scss";
import { extensions } from "../../data/extensions";
import { motion } from "framer-motion";
function Download() {
  return (
    <motion.section
      className={styles.download}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className={styles.download_heading}>
        <h2 className={styles.title}> Download Extension</h2>
        <p className={styles.lead}>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;de like us to prioritize.
        </p>
      </div>
      <div className={styles.extensions}>
        {extensions.map((extension, i) => {
          return (
            <div
              className={styles.card}
              key={extension.id}
              style={{ marginTop: i !== 0 ? i * 1 + "rem" : "0rem" }}
            >
              <Image
                src={`/images/logo-${extension.img}.svg`}
                width={100}
                height={100}
                alt="navigator"
                className={styles.card_img}
              />
              <h2 className={styles.title}> Add to {extension.name}</h2>
              <p className={styles.lead}>Minimum version {extension.version}</p>
              <Image
                src="/images/bg-dots.svg"
                width={280}
                height={4}
                alt="dots"
              />
              <a href="#" className={styles.btn_primary}>
                Add & Install Extension
              </a>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default Download;
