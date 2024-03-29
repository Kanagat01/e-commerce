import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export function Banner() {
  return (
    <section className={`section ${styles.banner}`}>
      <div className={styles.left}>
        <span className={styles.trend}>Trend Design</span>
        <h1>New Collection 2021</h1>
        <p>
          New Arrival <span className={styles.color}>Sale 50% OFF</span> Limited
          Time Offer
        </p>
        <NavLink to="#" className={`${styles.btn} btn-1`}>
          Discover Now
        </NavLink>
      </div>
      <div className={styles.right}>
        <img src="./images/banner.png" alt="" />
      </div>
    </section>
  );
}
