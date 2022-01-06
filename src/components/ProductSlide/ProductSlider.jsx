import { Divider } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router";
import data from "../../data/data.json";
import AllProduct from "../all_products/AllProduct";
import "./ProductSlider.css";

function ProductsWithSlider() {
  return (
    <div>
      {ProductSlider("Shoes", "shoes")}
      <Divider />
      {ProductSlider("Bags", "bag")}
      <Divider />
      {ProductSlider("Shades", "Glass")}
      <Divider />
      {ProductSlider("Hat", "Hat")}
      <Divider />
    </div>
  );
}

function ProductSlider(name, catagory) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
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
      <div className="ProductSlider-Name">
        <div className="ProductSlider-Title">{name}</div>
        <div className="ProducetSlider-button" onClick={goToSeeAll}>
          See All
        </div>
      </div>
      <Carousel responsive={responsive}>
        {data.map((datas, index) => {
          if (datas.catagory === `${catagory}`) {
            return (
              <div className="ProductSlider-Product">
                <AllProduct
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
            )
          }
        })}
      </Carousel>
    </div>
  );
}

export default ProductsWithSlider;
