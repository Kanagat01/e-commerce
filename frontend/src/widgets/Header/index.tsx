import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CART_ROUTE, HOME_ROUTE } from "~/shared/routes";
import styles from "./styles.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const renderIcons = () => {
    return (
      <>
        <NavLink to="#" className={styles.icon}>
          <i className="bx bx-user"></i>
        </NavLink>
        <div className={styles.icon}>
          <i className="bx bx-search"></i>
        </div>
        <div className={styles.icon}>
          <i className="bx bx-heart"></i>
          <span className="d-flex align-items-center">0</span>
        </div>
        <NavLink to={CART_ROUTE} className={styles.icon}>
          <i className="bx bx-cart"></i>
          <span className="d-flex align-items-center">0</span>
        </NavLink>
      </>
    );
  };
  return (
    <>
      <div className={styles["top-nav"]}>
        <div className="container-2 d-flex align-items-center">
          <p>Закажите онлайн или позвоните нам: +7 (777) 777 7777</p>
          <ul className="d-flex align-items-center">
            {[
              ["#", "О нас"],
              ["#", "FAQ"],
              ["#", "Контакты"],
            ].map(([route, text], idx) => (
              <li key={idx}>
                <NavLink to={route}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={`${styles["nav-center"]} container-2`}>
          <a href={HOME_ROUTE} className="logo">
            <h1>Dans</h1>
          </a>

          <ul className={`${styles["nav-list"]} ${isOpen ? "open" : ""}`}>
            {[
              [HOME_ROUTE, "Главная"],
              ["#", "Shop"],
              ["#", "Terms"],
              ["#", "About"],
              ["#", "Contact"],
            ].map(([route, text], idx) => (
              <li key={idx} className={styles["nav-item"]}>
                <a href={route} className={styles["nav-link"]}>
                  {text}
                </a>
              </li>
            ))}
            <li className={styles.icons}>{renderIcons()}</li>
          </ul>

          <div className={styles.icons}>{renderIcons()}</div>

          <div className={styles.hamburger} onClick={toggleOpen}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </>
  );
}
