import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import "./banner.css";

export default function Banner() {
  const [phonelogo, setPhonelogo] = useState("");
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
    fetchlogo("logo/phone.png", setPhonelogo);
  }, []);
  return (
    <div className="banner">
      <div className="banner-phone"></div>
      <img className="icon" src={phonelogo} alt="call page" />
      <p>01737029729</p>
      <p>01737029729</p>
    </div>
  );
}
