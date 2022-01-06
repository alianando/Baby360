import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="logo">
          <div className="logoImg">
            <img src={"/images/logo/Baby360-logo.png"} alt="logo" />
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
