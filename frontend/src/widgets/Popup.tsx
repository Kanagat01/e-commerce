import { useEffect, useState } from "react";

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
    isPopupVisible && (
      <div className="popup hide-popup">
        <div className="popup-content">
          <div className="popup-close" onClick={closePopup}>
            <i className="bx bx-x"></i>
          </div>
          <div className="popup-left">
            <div className="popup-img-container">
              <img className="popup-img" src="./images/popup.jpg" alt="popup" />
            </div>
          </div>
          <div className="popup-right">
            <div className="right-content">
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
                  className="popup-form"
                />
                <a href="#">Subscribe</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
