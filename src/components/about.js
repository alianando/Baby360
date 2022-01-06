import "./about.css";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "./navbar/navbar";

export default function AboutPage() {
  const history = useHistory();
  const location = useLocation();
  const buttoncolor = ["red", "black", "crimson", "teal"];
  const buttonImage = [
    "/images/image2.jpg",
    "/images/image2.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
  ];

  const goToBuyPage = () => {
    history.push({
      pathname: "/about/buy",
      state: {
        id: `${location.state.id}`,
        title: `${location.state.title}`,
        price: `${location.state.price}`,
        catagory: `${location.state.catagory}`,
        details: `${location.state.details}`,
        source: `${location.state.source}`,
      },
    });
  };

  return (
    <div>
    <div>
    
      <NavBar/>
    </div>
      <div className="about">
        <div className="details">
          <div className="big-img">
            <img src={`${location.state.source}`} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{location.state.title}</h2>
              <span>{location.state.price}</span>
            </div>
            <div className="colors">
              {buttoncolor.map((color) => (
                <button style={{ backgroundColor: color }}></button>
              ))}
            </div>
            <p>All the description will be here</p>
            <p>{location.state.details}</p>
            <div className="thumb">
              {buttonImage.map((img) => (
                <img src={img} alt="/" />
              ))}
            </div>
            <button className="cart" onClick={goToBuyPage}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
