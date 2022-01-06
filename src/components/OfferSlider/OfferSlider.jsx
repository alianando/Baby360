import React from "react";
import "./OfferSlider.css";
import Carousel from "react-multi-carousel";
import data from "../../data/data.json";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router";

function OfferSlider() {
  const history = useHistory();
  let catagory ='shoes';
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
          <div onClick={goToSeeAll} className="navigaton__button">See all</div>
        </div>
        <div className="OfferSlider-Body">{OfferSliderSlider("Shoes", "shoes")}</div>
      </div>
    </div>
  );
}

export default OfferSlider;

function OfferSliderSlider(name, catagory) {
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
  return(
    <div>
        <Carousel responsive={responsive}>
        {data.map((datas, index) => {
          if (datas.catagory === `${catagory}`) {
            return (
              <div key={index}>
                <ProductCard
                  id={datas.id}
                  title={datas.title}
                  price={datas.price}
                  catagory={datas.catagory}
                  details={datas.details}
                  source={datas.source}
                />
              </div>
            );
          }else{
            return (
              null
            );
          }
        })}
      </Carousel>
    </div>
  );
}
