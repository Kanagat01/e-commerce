import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export function Contacts() {
  return (
    <section className={`section ${styles.contact}`}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>EXCELLENT SUPPORT</h2>
          <p>
            We love our customers and they can reach us any time of day we will
            be at your service 24/7
          </p>
          <NavLink to="#" className="btn-1">
            Contact
          </NavLink>
        </div>
        <div className={styles.col}>
          <form action="">
            <div>
              <input type="email" placeholder="Email Address" />
              <a href="">Send</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
