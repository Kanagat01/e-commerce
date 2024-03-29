import styles from "./styles.module.scss";

export function Categories() {
  return (
    <section className={`section ${styles.category}`}>
      <div className={styles["cat-center"]}>
        {[
          ["images/cat3.jpg", "WOMEN'S WEAR"],
          ["images/cat2.jpg", "ACCESSORIES"],
          ["images/cat1.jpg", "MEN'S WEAR"],
        ].map(([img, text], idx) => (
          <div className={styles.cat} key={idx}>
            <img src={img} alt="" />
            <div>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
