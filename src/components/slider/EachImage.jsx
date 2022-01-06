import React from "react";
import { useHistory } from "react-router-dom";
import "../slider/Slider.css";

function EachImage(props) {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/details/${props.id}`);
  };

  return (
    <div className="helloooooo" onClick={handleOnClick} >
      <img className="EachImage-img" src={`${props.src}`} alt="skjfg" />
    </div>
  );
}

export default EachImage;
