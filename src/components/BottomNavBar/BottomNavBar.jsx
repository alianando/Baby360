import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import { useHistory } from "react-router-dom";
import "./BottomNavBar.css";

function BottomNavBar() {
  const [home, setHome] = useState("");
  const [catagory, setCatagory] = useState("");
  const [Cart, setCart] = useState("");
  const [Call, setCall] = useState("");
  useEffect(() => {
    const fetchlogo = async (name, fun) => {
      const starsRef = ref(storage, name);
      await getDownloadURL(starsRef)
        .then((url) => {
          fun(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        });
    };
    fetchlogo('logo/home.png', setHome);
    fetchlogo('logo/category.png', setCatagory);
    fetchlogo('logo/cart.png', setCart);
    fetchlogo('logo/phone.png', setCall);
  }, []);
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
              src={home}
              alt="home page"
            />
            <span className="nav__text">Home</span>
          </div>
          <div onClick={gotoAllProducts} className="nav__link nav__link--active">
            <img
              className="material-icons nav__icon"
              src={catagory}
              alt="catagory page"
            />
            <span className="nav__text">Category</span>
          </div>
          <a href="/" className="nav__link">
            <img
              className="material-icons nav__icon"
              src={Cart}
              alt="cart page"
            />
            <span className="nav__text">Cart</span>
          </a>
          <a href="/" className="nav__link">
            <img
              className="material-icons nav__icon"
              src={Call}
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
