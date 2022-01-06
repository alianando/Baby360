import React from "react";
import "./AllProducts.css";
import data from "../../data/data.json";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import '../ProductInACatagory/ProductInCatagory.css'
import { useHistory } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
function AllProducts() {
  const history = useHistory();
  return (
    <div>
      <div>
        <NavBar/>
        <Breadcrumb name = "product" /> 
      </div>
      {/* {ProductWithCatagory("shoes")}
      {ProductWithCatagory("shoes")}
      {ProductWithCatagory("bag")}
      {ProductWithCatagory("Glass")}
      {ProductWithCatagory("Hat")} */}
      <div className="ProductInACatagoryyy">
        <div className="yyy">
        {data.map((datas, index) => {         
            return (
              <div
                className="Card"
                onClick={() => {
                  history.push(`/details/${datas.id}`);
                }}
              >
                <div className="Image">
                  <img src={`${datas.source}`} alt="" />
                </div>
              </div>
            );
        
        })}
        </div>
      </div>
      <Footer/>
      <BottomNavBar/>
    </div>
  );
}

export default AllProducts;

// function ProductWithCatagory(catagory) {
//   return (
//     <div>
//       <div>
//         <h1 className="AllProductsTitle">{catagory}</h1>
//       </div>
//       <div className="allProductsRow">
//         {data.map((datas, index) => {
//           if (datas.catagory == `${catagory}`) {
//             return (
//               <div className="allProductItem">
//                 <AllProduct
//                   id={datas.id}
//                   title={datas.title}
//                   price={datas.price}
//                   catagory={datas.catagory}
//                   details={datas.details}
//                   source={datas.source}
//                 />
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// function ProductWithCatagoryAndMui(catagory) {
//   return (
//     <div>
//       <div>
//         <h1 className="AllProductsTitle">{catagory}</h1>
//       </div>
//       <div className="allProductsRow">
//         {data.map((datas, index) => {
//           if (datas.catagory == `${catagory}`) {
//             return (
//               <div className="allProductItem">
//                 <OutlinedCard
//                   id={datas.id}
//                   title={datas.title}
//                   price={datas.price}
//                   catagory={datas.catagory}
//                   details={datas.details}
//                   source={datas.source}
//                 />
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }
