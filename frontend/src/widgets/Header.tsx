import { useEffect, useState } from "react";
import Glide, { Autoplay } from "@glidejs/glide/dist/glide.modular.esm";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    new Glide("#glide_1").mount({ Autoplay });
    // new Glide(".glide", {
    //   type: "carousel",
    //   startAt: 0,
    //   // autoplay: 3000,
    //   gap: 0,
    //   hoverpause: true,
    //   perView: 1,
    //   animationDuration: 800,
    //   animationTimingFunc: "linear",
    // }).mount();
  }, []);
  return (
    <header className="header" id="header">
      <div className="top-nav">
        <div className="container d-flex">
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul className="d-flex">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-center container d-flex">
          <a href="/" className="logo">
            <h1>Dans</h1>
          </a>

          <ul className={`nav-list d-flex ${isOpen ? "open" : ""}`}>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="product.html" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#terms" className="nav-link">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="icons d-flex">
              <a href="login.html" className="icon">
                <i className="bx bx-user"></i>
              </a>
              <div className="icon">
                <i className="bx bx-search"></i>
              </div>
              <div className="icon">
                <i className="bx bx-heart"></i>
                <span className="d-flex">0</span>
              </div>
              <a href="cart.html" className="icon">
                <i className="bx bx-cart"></i>
                <span className="d-flex">0</span>
              </a>
            </li>
          </ul>

          <div className="icons d-flex">
            <a href="login.html" className="icon">
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <a href="cart.html" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </a>
          </div>

          <div className="hamburger" onClick={toggleOpen}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>

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
    </header>
  );
}
