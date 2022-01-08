import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import "./ProductCatagory.css";
import { useHistory } from "react-router";

function ProductCatagory() {
  const [catagory, setCatagory] = useState("");
  const [shoe, setShoe] = useState("");
  const [sunglass, setSunglass] = useState("");
  const [hat, setHat] = useState("");
  const [bag, setBag] = useState("");
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
    fetchlogo('logo/Catagory-logo.png', setCatagory);
    fetchlogo('logo/shoe.png', setShoe);
    fetchlogo('logo/sunglass.png', setSunglass);
    fetchlogo('logo/hatvector.png', setHat);
    fetchlogo('logo/handbagvector.png', setBag);
  }, []);
  const history = useHistory();
  return (
    <div>
      <div className="ProductCatagory-Background">
        <div className="title1">
          {/* <h1>~~ CATAGORY ~~</h1> */}
          {/* <div></div> */}
          <img className="catagory" src={catagory} alt="catagory" />
        </div>
        <div className="ProductCatagory">
          <div
            className="CatagoryItem"
            onClick={() => {
              history.push({
                pathname: "/product/shoes",
                state: {
                  catagory: "shoes",
                },
              });
            }}
          >
            <div className="Item-Image">
              <img src={sunglass} alt="" />
            </div>
            <div className="Item-Name">SUNGLASS</div>
          </div>
          <div
            className="CatagoryItem"
            onClick={() => {
              history.push({
                pathname: "/product/Glass",
                state: {
                  catagory: "Glass",
                },
              });
            }}
          >
            <div className="Item-Image">
            <img src={shoe} alt="" />
            </div>
            <div className="Item-Name">SHOES</div>
          </div>
          <div
            className="CatagoryItem"
            onClick={() => {
              history.push({
                pathname: "/product/Hat",
                state: {
                  catagory: "Hat",
                },
              });
            }}
          >
            <div className="Item-Image">
              <img src={hat} alt="" />
            </div>
            <div className="Item-Name">HATS</div>
          </div>
          <div
            className="CatagoryItem"
            onClick={() => {
              history.push({
                pathname: "/product/bag",
                state: {
                  catagory: "bag",
                },
              });
            }}
          >
            <div className="Item-Image">
              <img src={bag} alt="" />
            </div>
            <div className="Item-Name">BAGS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatagory;
