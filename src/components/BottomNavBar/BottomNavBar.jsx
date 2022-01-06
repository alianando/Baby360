import React from "react";
import { useHistory } from "react-router-dom";
import "./BottomNavBar.css";

function BottomNavBar() {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: "/",
    });
  };
  const gotoAllProducts = () => {
    history.push({
      pathname: "/products",
    });
  };
  return (
    <div>
      <div className="BottomNavBar">
        <div className="nav">
          <div onClick={gotoHome} className="nav__link">
            <img
              className="material-icons nav__icon"
              src="/images/Buttons/home.png"
              alt="home page"
            />
            <span className="nav__text">Home</span>
          </div>
          <div onClick={gotoAllProducts} className="nav__link nav__link--active">
            <img
              className="material-icons nav__icon"
              src="/images/Buttons/category.png"
              alt="catagory page"
            />
            <span className="nav__text">Category</span>
          </div>
          <a href="/" className="nav__link">
            <img
              className="material-icons nav__icon"
              src="/images/Buttons/cart.png"
              alt="cart page"
            />
            <span className="nav__text">Cart</span>
          </a>
          <a href="/" className="nav__link">
            <img
              className="material-icons nav__icon"
              src="/images/Buttons/phone.png"
              alt="call page"
            />
            <span className="nav__text">Contact us</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
