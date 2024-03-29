import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h4>Информация</h4>
          {[
            ["#", "О нас"],
            ["#", "Связаться с нами"],
            ["#", "Правила и условия"],
            ["#", "Руководство по доставке"],
          ].map(([route, text], idx) => (
            <NavLink key={idx} to={route}>
              {text}
            </NavLink>
          ))}
        </div>
        <div className={styles.col}>
          <h4>Полезные ссылки</h4>
          {[
            ["#", "Онлайн магазин"],
            ["#", "Обслуживание клиентов"],
            ["#", "Продвижение"],
            ["#", "Лучшие бренды"],
          ].map(([route, text], idx) => (
            <NavLink key={idx} to={route}>
              {text}
            </NavLink>
          ))}
        </div>
        <div className={styles.col}>
          {[
            <i className="bx bxl-facebook-square"></i>,
            <i className="bx bxl-instagram-alt"></i>,
            <i className="bx bxl-twitter"></i>,
          ].map((icon, idx) => (
            <span key={idx}>{icon}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
