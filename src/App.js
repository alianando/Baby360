import "./App.css";
import Slider2 from "./components/slider/Slider2";
import NavBar from "./components/navbar/navbar";
import Banner from "./components/Banner/banner";
import OfferSlider from "./components/OfferSlider/OfferSlider";
import ProductGroup from "./components/ProductGroup/ProductGroup";
import ProductCatagory from "./components/ProductCatagory/ProductCatagory";
import ProductSliderBody from "./components/ProductSlide/ProductSliderBody";
import Footer from "./components/Footer/Footer";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar.jsx";

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Slider2 />
      <ProductCatagory />
      <OfferSlider />
      <ProductGroup />
      {ProductSliderBody("SHOES", "shoes")}
      {ProductSliderBody("BAGS", "bag")}
      {ProductSliderBody("SHADES", "Glass")}
      {ProductSliderBody("HATS", "Hat")}
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
