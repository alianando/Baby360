import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import NavBar from "../navbar/navbar";
export default function ItemDetailsWithCarosul(props) {
  const history = useHistory();

  const [Image, setImage] = useState(props.source);

  const buttoncolor = ["red", "black", "crimson", "teal"];
  const buttonImage = [props.source, props.img2, props.img3, props.img4];

  function deleteUserWithName(img) {
    setImage(img);
  }

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
        <NavBar/>
        <Breadcrumb name= "details" id={`${props.id}`} catagory={`${props.catagory}`}/>
      </div>
      <div className="about">
        <div className="details">
          <div className="big-img">
            <img src={Image} alt="MainImage" />
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
            </div>{" "}
            <p>All the description will be here</p> <p>details</p>{" "}
            <div className="thumb">
              {" "}
              {buttonImage.map((img) => (
                <img
                  src={img}
                  alt="/"
                  onClick={() => deleteUserWithName(img)}
                />
              ))}{" "}
            </div>{" "}
            <button className="cart" onClick={goToBuyPage}>
              Buy
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="">
        <Footer/>
        <BottomNavBar/>
      </div>
    </div>
  );
}
