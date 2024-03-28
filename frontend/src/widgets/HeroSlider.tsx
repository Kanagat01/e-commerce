import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

export function HeroSlider() {
  useEffect(() => {
    const glide = new Glide(".glide").mount();
    glide.play(5000);
  }, []);
  return (
    <div className="hero">
      <div className="glide" id="glide_1">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="center">
                <div className="left">
                  <span className="">New Inspiration 2020</span>
                  <h1 className="">NEW COLLECTION!</h1>
                  <p>Trending from men's and women's style collection</p>
                  <a href="#" className="hero-btn">
                    SHOP NOW
                  </a>
                </div>
                <div className="right">
                  <img className="img1" src="./images/hero-1.png" alt="" />
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="center">
                <div className="left">
                  <span>New Inspiration 2020</span>
                  <h1>THE PERFECT MATCH!</h1>
                  <p>Trending from men's and women's style collection</p>
                  <a href="#" className="hero-btn">
                    SHOP NOW
                  </a>
                </div>
                <div className="right">
                  <img className="img2" src="./images/hero-2.png" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
