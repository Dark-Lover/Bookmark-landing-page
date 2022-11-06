import styles from "./Features.module.scss";
import { featuresData } from "./../../data/features";
import Image from "next/image";
import { useState } from "react";

function Features() {
  const [selectedId, setSelectedId] = useState<number>(0);
  return (
    <section className={styles.features}>
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
        <div className={styles.features_details}>
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
          </div>
        </div>
        {/* End Feature detail comp */}
      </div>
    </section>
  );
}

export default Features;
