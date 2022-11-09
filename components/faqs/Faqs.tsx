import Image from "next/image";
import styles from "./Faqs.module.scss";
import { faqs } from "./../../data/faq";
import { useState } from "react";
import { motion } from "framer-motion";

function Faqs() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <motion.section
      className={styles.faqs}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      <div className={styles.faqs_heading}>
        <h2 className={styles.title}> Frequently Asked Questions</h2>
        <p className={styles.lead}>
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
      <div className={styles.dropdown_faq}>
        {faqs.map((faq) => {
          return (
            <div className={styles.faq_card} key={faq.id}>
              <div className={styles.question}>
                <h3>{faq.title}</h3>
                <Image
                  src={`/images/${
                    openFaq === faq.id ? "icon-arrow-red" : "icon-arrow"
                  }.svg`}
                  width={18}
                  height={12}
                  alt="arrow"
                  onClick={() => setOpenFaq(openFaq === faq.id ? 0 : faq.id)}
                />
              </div>
              {openFaq === faq.id ? (
                <motion.p
                  className={styles.answer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.2 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  {faq.answer}
                </motion.p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <a href="#" className={styles.btn_primary}>
        More Info
      </a>
    </motion.section>
  );
}
export default Faqs;
