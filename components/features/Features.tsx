import styles from "./Features.module.scss";
import { featuresData } from "./../../data/features";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
function Features() {
  const [selectedId, setSelectedId] = useState<number>(0);
  return (
    <motion.section
      className={styles.features}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -300 },
      }}
    >
      <div className={styles.features_heading}>
        <h2 className={styles.title}> Features</h2>
        <p className={styles.desc}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className={styles.features_body}>
        <div className={styles.features_list}>
          <ul>
            {featuresData.map((feature) => {
              return (
                <li
                  key={feature.id}
                  onClick={() => setSelectedId(feature.id)}
                  className={
                    selectedId === feature.id ? `${styles.active}` : ""
                  }
                >
                  {feature.feature}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Feature detail comp */}
        <motion.div
          className={styles.features_details}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={styles.features_image}>
            <Image
              src={`/images/${featuresData[selectedId].img}.svg`}
              layout="fill"
              priority
              alt="Hero"
            />
          </div>
          <div className={styles.features_content}>
            <h2 className={styles.title}> {featuresData[selectedId].title}</h2>
            <p className={styles.desc}>{featuresData[selectedId].desc}</p>
            <a href="#" className={styles.btn_primary}>
              More Info
            </a>
          </div>
        </motion.div>
        {/* End Feature detail comp */}
      </div>
    </motion.section>
  );
}

export default Features;
