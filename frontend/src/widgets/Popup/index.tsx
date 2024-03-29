import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Popup() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const closePopup = () => {
    setPopupVisible(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`${styles.popup} ${
        !isPopupVisible ? styles["hide-popup"] : ""
      }`}
    >
      <div className={styles["popup-content"]}>
        <div className={styles["popup-close"]} onClick={closePopup}>
          <i className="bx bx-x"></i>
        </div>
        <div className={styles["popup-left"]}>
          <div className={styles["popup-img-container"]}>
            <img
              className={styles["popup-img"]}
              src="./images/popup.jpg"
              alt="popup"
            />
          </div>
        </div>
        <div className={styles["popup-right"]}>
          <div className={styles["right-content"]}>
            <h1>
              Get Discount <span>50%</span> Off
            </h1>
            <p>
              Sign up to our newsletter and save 30% for you next purchase. No
              spam, we promise!
            </p>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email..."
                className={styles["popup-form"]}
              />
              <a href="#">Subscribe</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
