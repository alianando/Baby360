import React from "react";
import { useHistory } from "react-router-dom";

function ItemDetails(props) {
  const history = useHistory();

  const buttoncolor = ["red", "black", "crimson", "teal"];
  const buttonImage = [
    "/images/image2.jpg",
    "/images/image2.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
  ];

  const goToBuyPage = () => {
    history.push({
      pathname: `/buy/${props.id}`,
      state: {
        id: `${props.id}`,
        title: `${props.title}`,
        price: `${props.price}`,
        catagory: `${props.catagory}`,
        details: `${props.details}`,
        source: `${props.source}`,
      },
    });
  };

  return (
    <div>
      <div>
      </div>
      <div className="about">
        <div className="details">
          <div className="big-img">
            <img src={`${props.source}`} alt="MainImage" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{props.title}</h2>
              <span>{props.price}</span>
            </div>
            <div className="colors">
              {buttoncolor.map((color) => (
                <button style={{ backgroundColor: color }}></button>
              ))}
            </div>
            <p>All the description will be here</p>
            <p>{props.details}</p>
            <div className="thumb">
              {buttonImage.map((img) => (
                <img src={img} alt="/" />
              ))}
            </div>
            <button className="cart" onClick={goToBuyPage}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
