import React from "react";
import { useHistory } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  const image = props.source;
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/details/${props.id}`);
  };
  return (
    <div>
      <div className="ProductCard">
        <div onClick={goToDetailsPage} className="ProductCard-Card">
          <div className="ProductCard-Card-Offer">
            <div className="ProductCard-Card-Offer-Box">25% off</div>
          </div>
          <div className="ProductCard-Img">
            <img src={`${image}`} alt="baby product" />
          </div>
          <div className="ProductCard-Details">
            <div className="ProductCart-Details-Price">{props.title}</div>
            <div className="ProductCart-Details-Star"> * * * * </div>
            <div className="PriceCart-Details-Price">{props.price} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

