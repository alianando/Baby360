import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductSliderBody.css";
import data from "../../data/data.json";
import { useHistory } from "react-router";
import CauroselCard from "./CauroselCard";

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
        {data.map((datas, index) => {
          if (datas.catagory === `${catagory}`) {
            return (
              <div key={index} className="">
                <CauroselCard
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
            return(
              null
            )
          }
        })}

        {/* <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div>
        <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div>
        <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div>
        <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div>
        <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div>
        <div className="Card">
          <div className="Image">
            <img src="/images/shoe/shoe1.jpg" alt="" />
          </div>
          <div className="Price">$300</div>
        </div> */}
      </Carousel>
    </div>
  );
}
