import "./buy.css";
import { useLocation } from "react-router-dom";
import AddressForm from "./addressfore";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NavBar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import BottomNavBar from "../BottomNavBar/BottomNavBar";

export default function BuyPage() {
  const location = useLocation();
  return (
    <div>
      <div>
        <NavBar />
        <Breadcrumb
          name="buy"
          id={`${location.state.id}`}
          catagory={`${location.state.catagory}`}
        />
      </div>
      <div className="buy">
        <div className="details1">
          <div className="colum1">
            <div className="big-img1">
              <img src={`${location.state.source}`} alt="1" />
            </div>
            <div className="allthetexts">
              <div className="rowfortitlemoney">
                <h1>title</h1>
                <h1>$50</h1>
              </div>
              <p>
                {" "}
                ifduhbgnir soiedhugnv skdfvbn skdbfnv skdfbvn soihdvfn bskdvjf
              </p>
            </div>
            <div className="cool"></div>
          </div>
          <div className="colum2">
            <AddressForm />
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <BottomNavBar/>
      </div>
    </div>
  );
}
