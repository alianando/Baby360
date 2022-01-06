import React from "react";
import "./navbar.css";
import { useHistory } from "react-router";

export default function NavBar() {
  const history = useHistory();
  return (
    <div className="Nav-Grid">
      <div className="Nav-Button">M</div>
      <div
        className="Nav-Icon"
        onClick={() => {
          history.push({
            pathname: "/",
          });
        }}
      >
        <img src={"/images/logo/Baby360-logo1.png"} alt="logo" />
      </div>
      <div className="Nav-Search">
        <input type="search" placeholder="SEARCH" />
        {/* <input type="submit" name="" value="search" /> */}
        <div className="search__icon">
          <img src="/images/Catagory/search.svg" alt="" />
        </div>
      </div>
      <div className="Nav-Menu">
        <div>
          <div className="itemsNav">
            <div className="button"
              onClick={() => {
                history.push({
                  pathname: "/products",
                });
              }}
            >
              <img src={"/images/Catagory/store.svg"} alt="store" />
              <div className="">Store</div>
            </div>
            {/* <li>
            <img src={"/images/Catagory/store.svg"} alt="logo" />
            <a href="/">Home</a>
            <a href="/">Contact</a>
              <a >Home</a>
              <a >About</a>
              <a >Contact</a>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}
