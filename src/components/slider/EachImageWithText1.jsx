import React from "react";
import "./EachImageWithText1.css";

function EachImageWithText1(props) {
  return (
    <div className="ImgTxt1">
      <div className="Txt1">
        <h1 class="title">50% Off For Your First Shopping</h1>
        <div className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis
          consequat eu, quam etiam at quis ut convalliss.
        </div>
        <a href="/">
            <div
              className="button"
            >
              Shop Now<span class="MuiTouchRipple-root css-w0pj6f"></span>
            </div>
          </a>
      </div>
      <div className="Img">
        <div className="ImgTxt1__Img">
          <img className="img" src={`${props.src}`} alt="model" />
        </div>
      </div>
    </div>
  );
}

export default EachImageWithText1;
