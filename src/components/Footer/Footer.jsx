import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import "./Footer.css";

function Footer() {
  const [logo, setlogo] = useState("");
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
    fetchlogo("Baby360-logo1.png", setlogo);
  }, []);
  return (
    <div>
      <div className="Footer">
        <div className="logo">
          <div className="logoImg">
            <img src={logo} alt="logo" />
          </div>
          <div className="Details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>
        </div>
        <div className="About">
          <div className="Heading">ABOUT US</div>
          <div className="Details">Our Stores</div>
          <div className="Details">Our Cares</div>
          <div className="Details">Terms & Conditions</div>
        </div>
        <div className="CustomarCare">
          <div className="Heading">CUSTOMER CARE</div>
          <div className="Details">Help Center</div>
          <div className="Details">How to Buy</div>
          <div className="Details">Returns & Refunds</div>
        </div>
        <div className="ContactUs">
          <div className="Heading">CONTACT US</div>
          <div className="Details">
            70 Washington Square South, New York, NY 10012, United States
          </div>
          <div className="Details">Email: uilib.help@gmail.com</div>
          <div className="Details">Phone: +1 1123 456 780</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
