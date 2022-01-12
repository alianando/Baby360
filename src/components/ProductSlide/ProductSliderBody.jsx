import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductSliderBody.css";
import data from "../../data/data.json";
import { useHistory } from "react-router";
import CauroselCard from "./CauroselCard";

//for the database
import { database } from "../../Config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function ProductSliderBody(name, catagory) {
  const history = useHistory();
  const goToSeeAll = () => {
    history.push({
      pathname: `/product/${catagory}`,
      state: {
        catagory: `${catagory}`,
      },
    });
  };
  return (
    <div>
      <div className="ProductSliderBody">
        <div className="Body">
          <div className="title">
            <h1>{name}</h1>
            <div className="GoToSeeAll" onClick={goToSeeAll}>
              See All
            </div>
          </div>
          <div className="Cards">{ProductSliderSlider(name, catagory)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductSliderBody;

function ProductSliderSlider(name, catagory) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchdata = async (catagory) => {
      const querySnapshot = await getDocs(collection(database, catagory));
      let c = [];
      querySnapshot.forEach((doc) => {
        c.push({ ...doc.data(), di: doc.id });
        console.log(catagory)
        console.log("the data is :  " + doc.id);
      });

      setBlogs(c);
    };

    fetchdata(catagory);
  }, []);
  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1524 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1524, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="Carousel-Body">
      <Carousel responsive={responsive1}>
        {blogs.map((datas, index) => {
          return (
            <div key={index} className="">
              <CauroselCard
                id={datas.id}
                title={datas.name}
                price={datas.price}
                // catagory={datas.catagory}
                // details={datas.details}
                source={datas.location}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
