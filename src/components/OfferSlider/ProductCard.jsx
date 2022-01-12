import React from "react";
import { useHistory } from "react-router-dom";
import "./ProductCard.css";


// for the Storage
import { useState, useEffect } from "react";
import {  storage } from "../../Config.js";
import { ref, getDownloadURL} from "firebase/storage";

export default function ProductCard(props) {
  const [url, seturl] = useState("");
  useEffect(() => {
    const fetchlogo1 = async (loc) => {
      const starsRef = ref(storage, loc);
      await getDownloadURL(starsRef)
        .then((url) => {
          
          seturl(url);
          // console.log("the url is :  "+url);
        })
        .catch((error) => {
          console.log("error");
        });
    };
    fetchlogo1(props.img);
    return () => {};
  }, []);
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
            <img src={`${url}`} alt="baby product" />
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

