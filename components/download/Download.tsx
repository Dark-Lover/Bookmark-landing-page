import styles from "./Download.module.scss";

function Download() {
  return (
    <section className={styles.download}>
      <div className={styles.download_heading}>
        <h2 className={styles.title}> Download Extension</h2>
        <p className={styles.lead}>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;de like us to prioritize.
        </p>
      </div>
    </section>
  );
}

export default Download;
