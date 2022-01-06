import React from "react";
import { useLocation } from "react-router";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import NavBar from "../navbar/navbar";
import ProductCatagory from "../ProductCatagory/ProductCatagory";
import data from "../../data/data.json";
import "./ProductInCatagory.css";
import { useHistory } from "react-router-dom";

function ProductInACatagory() {
  const location = useLocation();
  const history = useHistory();
  let catagory = location.state.catagory;
  return (
    <div>
      <NavBar />
      <Breadcrumb
        name="ProductInACatagory"
        catagory={`${location.state.catagory}`}
      />
      <ProductCatagory />
      <div className="ProductInACatagoryyy">
        <div className="yyy">
        {data.map((datas, index) => {
          if (datas.catagory === `${catagory}`) {
            return (
              <div
                className="Card"
                onClick={() => {
                  history.push(`/details/${datas.id}`);
                }}
              >
                <div className="Image">
                  <img src={`${datas.source}`} alt="" />
                </div>
              </div>
            );
          }return(
              null
            )
        })}
        </div>
      </div>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default ProductInACatagory;
