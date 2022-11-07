import styles from "./Faqs.module.scss";
function Faqs() {
  return (
    <section className={styles.faqs}>
      <div className={styles.faqs_heading}>
        <h2 className={styles.title}> Frequently Asked Questions</h2>
        <p className={styles.lead}>
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
    </section>
  );
}
export default Faqs;
