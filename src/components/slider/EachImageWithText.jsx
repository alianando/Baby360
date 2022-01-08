import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import "./EachImageWithText.css";

function EachImageWithText(props) {
  const [model, setModel] = useState("");
  useEffect(() => {
    const fetchlogo = async (name, fun) => {
      const starsRef = ref(storage, name);
      await getDownloadURL(starsRef)
        .then((url) => {
          fun(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        });
    };
    fetchlogo(props.src, setModel);
  }, []);
  return (
    <div className="ImgTxt">
      <div className="ImgWithText">
        <div className="ImgWithText-Txt">
          <h1>50% Off For Your First Shopping</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            lobortis consequat eu, quam etiam at quis ut convalliss.
          </p>
          <a href="/">
            <div className="button">
              Shop Now<span></span>
            </div>
          </a>
        </div>
        <div className="ImgWithText-Img">
          {/* <img className="EachImage-img" src={`${props.src}`} alt="model" /> */}
          <img className="EachImage-img" src={model} alt="model" />
        </div>
      </div>
    </div>
  );
}

export default EachImageWithText;
