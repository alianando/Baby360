import React from "react";
import "./ProductCatagory.css";
import { useHistory } from "react-router";

function ProductCatagory() {
  const history = useHistory();
  return (
    <div>
      <div className="ProductCatagory-Background">
        <div className="title1">
          {/* <h1>~~ CATAGORY ~~</h1> */}
          {/* <div></div> */}
          <img className="catagory" src="\images\Catagory\Catagory-logo.png" alt="catagory" />
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
              <img src="\images\Catagory\sunglass1.png" alt="" />
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
              <img src="\images\Catagory\shoe.png" alt="" />
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
              <img src="\images\Catagory\hatvector.png" alt="" />
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
              <img src="\images\Catagory\handbagvector.png" alt="" />
            </div>
            <div className="Item-Name">BAGS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatagory;
