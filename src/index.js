import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./components/about";
import BuyPage from "./components/buy_page/buy";
import Details from "./components/details_page/Details";
import AllProducts from "./components/all_products/AllProducts";
import ProductInACatagory from "./components/ProductInACatagory/ProductInACatagory";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="/product/:catagory">
          <ProductInACatagory/>
        </Route>
        <Route exact path="/products">
          <AllProducts />
        </Route>
        <Route path="/buy/:id">
          <BuyPage />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
