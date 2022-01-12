import { useHistory } from "react-router";
import React from "react";
// for the Storage
import { useState, useEffect } from "react";
import { storage } from "../../Config.js";
import { ref, getDownloadURL } from "firebase/storage";

function CauroselCard(props) {
  const [url, seturl] = useState("");
  useEffect(() => {
    const fetchlogo1 = async (loc) => {
      const starsRef = ref(storage, loc);
      await getDownloadURL(starsRef)
        .then((url) => {
          seturl(url);
          // console.log("the url is :  "+url);
        })
        .catch((error) => {
          console.log("error");
        });
    };
    fetchlogo1(props.source);

    return () => {};
  }, []);
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/details/${props.id}`);
  };
  return (
    <div>
      <div onClick={goToDetailsPage} className="Card">
        <div className="Image">
          <img src={`${url}`} alt="image" />
        </div>
        <div className="Price">{props.price}</div>
      </div>
    </div>
  );
}

export default CauroselCard;
