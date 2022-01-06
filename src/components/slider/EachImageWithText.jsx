import React from "react";
import "./EachImageWithText.css";

function EachImageWithText(props) {
  return (
    <div className="ImgTxt" >
      <div className="ImgWithText">
        <div className="ImgWithText-Txt">
          <h1>50% Off For Your First Shopping</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            lobortis consequat eu, quam etiam at quis ut convalliss.
          </p>
          <a href="/">
            <div
              className="button"
            >
              Shop Now<span ></span>
            </div>
          </a>
        </div>
        <div className="ImgWithText-Img">
          <img
            className="EachImage-img"
            src={`${props.src}`}
            alt="model"
          />
        </div>
      </div>
    </div>
  );
}

export default EachImageWithText;
