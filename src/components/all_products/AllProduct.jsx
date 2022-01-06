import React from "react";
import { useHistory } from "react-router-dom";
import "./AllProduct.css";

function AllProduct(props) {
  const image = props.source;
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/details/${props.id}`);
  };
  return (
    <div onClick={goToDetailsPage} className="aboutAllProduct">
      <div className="detailsProduct">
        <div className="big-imgProduct">
          <img src={`${image}`} alt="MainImage" />
        </div>
        {/*  <div className="boxProduct">
          <h2>{props.title}</h2>
        </div>  */}
        <div className="productPrice">{props.price}</div>
      </div>
    </div>
  );
}

export default AllProduct;
