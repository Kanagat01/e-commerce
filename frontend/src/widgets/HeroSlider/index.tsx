import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

export function HeroSlider() {
  const slides = [
    {
      subtitle: "New Inspiration 2020",
      title: "NEW COLLECTION!",
      description: "Trending from men's and women's style collection",
      img: "images/hero-1.png",
    },
    {
      subtitle: "New Inspiration 2020",
      title: "THE PERFECT MATCH!",
      description: "Trending from men's and women's style collection",
      img: "images/hero-2.png",
    },
  ];

  useEffect(() => {
    const glide = new Glide(".glide").mount();
    glide.play(5000);
  }, []);

  return (
    <div className={styles.hero}>
      <div className="glide" id="glide_1">
        <div className="glide__track" data-glide-el="track">
          <ul className={`glide__slides ${styles.glide__slides}`}>
            {slides.map((slide, idx) => (
              <li
                key={idx}
                className={`glide__slide ${styles["glide__slide"]}`}
              >
                <div className={styles.center}>
                  <div className={styles.left}>
                    <span>{slide.subtitle}</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <NavLink to="#" className={styles["hero-btn"]}>
                      Сделать покупку
                    </NavLink>
                  </div>
                  <div className={styles.right}>
                    <img src={slide.img} alt="" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
