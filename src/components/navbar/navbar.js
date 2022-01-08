import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory } from "react-router";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";

export default function NavBar() {
  const [baby360, setBaby360] = useState();
  const [store, setStore] = useState();

  useEffect(() => {
    const fetchImages = async (name, fun) => {
      // let result = await storage.ref().child("").listAll();
      // let urlPromises = result.items.map((imageRef) =>
      //   imageRef.getDownloadURL()
      // );

      // return Promise.all(urlPromises);
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
    fetchImages("Baby360-logo1.png", setBaby360);
    fetchImages("logo/store.svg", setStore);
  }, []);

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
        <img src={baby360} alt="logo" />
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
            <div
              className="button"
              onClick={() => {
                history.push({
                  pathname: "/products",
                });
              }}
            >
              <img src={store} alt="store" />
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
