import React from "react";
import { useHistory } from "react-router";
import "./ProductGroup.css";
import data from "../../data/data.json";

function ProductGroup() {
  var catagory = data[data.length - 1].catagory;
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
    <div className="ProductGroup">
      <div className="title">
        <h1>BEST SELLING</h1>
        <div onClick={goToSeeAll} className="navigaton__button">See all</div>
        
      </div>
      <div className="body">
        <div className="card">{<Card data={data[data.length - 1]} />}</div>
        <div className="card">{<Card data={data[data.length - 2]} />}</div>
        <div className="card">{<Card data={data[data.length - 3]} />}</div>
        <div className="card">{<Card data={data[data.length - 4]} />}</div>
        <div className="card">{<Card data={data[data.length - 5]} />}</div>
        <div className="card">{<Card data={data[data.length - 6]} />}</div>
      </div>
    </div>
  );
}

function Card(props) {
  const image1 = props.data.source;
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/details/${props.data.id}`);
  };
  return (
    <div className="CardBody">
      <div onClick={goToDetailsPage} className="Image">
        <img src={`${image1}`} alt="" />
      </div>
      <div className="Rating">*****</div>
      <div className="Name">{props.data.id}</div>

      <div className="Price">{props.data.title}</div>
    </div>
  );
}

export default ProductGroup;
