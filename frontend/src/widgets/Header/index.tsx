import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useUnit } from "effector-react";
import { AuthContext } from "~/app/providers/withAuthContext";
import { Logout } from "~/features";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  CART_ROUTE,
  FAVORITES_ROUTE,
} from "~/shared/routes";
import styles from "./styles.module.scss";
import { $favoritesCount } from "~/entities/User";

export function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const favoritesCount = useUnit($favoritesCount);
  const renderIcons = () => {
    return (
      <>
        <div className={styles.icon}>
          <i className="bx bx-search"></i>
        </div>
        {isAuthenticated ? (
          <NavLink to={FAVORITES_ROUTE} className={styles.icon}>
            <i className="bx bx-heart"></i>
            <span className="d-flex align-items-center">{favoritesCount}</span>
          </NavLink>
        ) : (
          ""
        )}
        <NavLink to={CART_ROUTE} className={styles.icon}>
          <i className="bx bx-cart"></i>
          <span className="d-flex align-items-center">0</span>
        </NavLink>
        <NavLink
          to={isAuthenticated ? PROFILE_ROUTE : LOGIN_ROUTE}
          className={styles.icon}
        >
          <i className="bx bx-user"></i>
        </NavLink>
        {isAuthenticated ? <Logout className={styles.icon} /> : ""}
      </>
    );
  };
  return (
    <>
      <div className={styles["top-nav"]}>
        <div className="container-2 d-flex align-items-center">
          <p>
            Закажите онлайн или позвоните нам: <span>+7 (777) 777 7777</span>
          </p>
          <ul>
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
          <div className={styles.hamburger} onClick={toggleOpen}>
            <i className="bx bx-menu-alt-left"></i>
          </div>

          <Offcanvas
            show={isOpen}
            onHide={toggleOpen}
            style={{ width: "fit-content" }}
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <ul
                className={`${styles["nav-list"]} ${isOpen ? styles.open : ""}`}
              >
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
            </Offcanvas.Body>
          </Offcanvas>
          <div className={styles.icons}>{renderIcons()}</div>
        </div>
      </div>
    </>
  );
}
