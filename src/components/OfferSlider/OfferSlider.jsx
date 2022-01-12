import React from "react";
import "./OfferSlider.css";
import Carousel from "react-multi-carousel";
import data from "../../data/data.json";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { database } from "../../Config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../Config";

function OfferSlider() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchdata = async (catagory) => {
      const querySnapshot = await getDocs(collection(database, catagory));
      let c = [];
      querySnapshot.forEach((doc) => {
        let a = doc.data();
        c.push({ ...doc.data(), di: doc.id });
      });

      setBlogs(c);
    };

    fetchdata("icon");
  }, []);
  const history = useHistory();
  let catagory = "shoes";
  const goToSeeAll = () => {
    history.push({
      pathname: `/product/${catagory}`,
      state: {
        catagory: `${catagory}`,
      },
    });
  };
  return (
    <div className="OfferSlider">
      <div className="OfferSlider-Main">
        <div className="OfferSlider-Title">
          <div className="OfferSlider-Title-Main">
            <h2>Flash Seles</h2>
          </div>
          <div onClick={goToSeeAll} className="navigaton__button">
            See all
          </div>
        </div>
        <div className="OfferSlider-Body">
          {OfferSliderSlider("Shoes", "shoes", blogs)}
        </div>
      </div>
    </div>
  );
}

export default OfferSlider;

function OfferSliderSlider(name, catagory, blogs) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {blogs.map((datas, index) => {
          if (true) {
            return (
              <div key={index}>
                <ProductCard
                  id={datas.id}
                  title={datas.title}
                  price={datas.price}
                  catagory={datas.catagory}
                  details={datas.details}
                  source={datas.source}
                  img={datas.location}
                />
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
}
