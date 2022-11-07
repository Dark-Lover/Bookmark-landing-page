import Image from "next/image";
import styles from "./Faqs.module.scss";
import { faqs } from "./../../data/faq";
import { useState } from "react";

function Faqs() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  return (
    <section className={styles.faqs}>
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
                <p className={styles.answer}>{faq.answer}</p>
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
    </section>
  );
}
export default Faqs;
