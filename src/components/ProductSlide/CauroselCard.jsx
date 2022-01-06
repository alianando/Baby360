import { useHistory } from "react-router";
import React from "react";

function CauroselCard(props) {
  const image1 = props.source;
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/details/${props.id}`);
  };
  return (
    <div>
      <div onClick={goToDetailsPage} className="Card">
        <div className="Image">
          <img src={`${image1}`} alt="" />
        </div>
        <div className="Price">{props.price}</div>
      </div>
    </div>
  );
}

export default CauroselCard;
