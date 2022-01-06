import React from "react";
import { useHistory } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb(props) {
  if (props.name === "product") {
    return (
      <div className="Breadcrumb">
        {Home()}
        {Divider()}
        {Products()}
      </div>
    );
  } else if (props.name === "details") {
    return (
      <div className="Breadcrumb">
        {Home()}
        {Divider()}
        {Products()}
        {Divider()}
        {Catagory(props.catagory)}
        {Divider()}
        {Details(props.id)}
      </div>
    );
  } else if (props.name === "buy") {
    return (
      <div className="Breadcrumb">
        {Home()}
        {Divider()}
        {Products()}
        {Divider()}
        {Catagory(props.catagory)}
        {Divider()}
        {Details(props.id)}
        {Divider()}
        {Buy()}
      </div>
    );
  } else if (props.name === "ProductInACatagory") {
    return (
      <div className="Breadcrumb">
        {Home()}
        {Divider()}
        {Products()}
        {Divider()}
        {Catagory(props.catagory)}
      </div>
    );
  } else {
    return <div>Didnt match</div>;
  }
}

function Divider() {
  return <div className="Breadcrumb-divider">/</div>;
}
function Home() {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div className="Breadcrumb-pageName" onClick={gotoHome}>
      Home
    </div>
  );
}

function Products() {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: "/products",
    });
  };
  return (
    <div className="Breadcrumb-pageName" onClick={gotoHome}>
      Products
    </div>
  );
}
function Catagory(catagory) {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: "/products",
    });
  };
  return (
    <div className="Breadcrumb-pageName" onClick={gotoHome}>
      {catagory}
    </div>
  );
}
function Details(id) {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: `/details/${id}`,
    });
  };
  return (
    <div className="Breadcrumb-pageName" onClick={gotoHome}>
      Details
    </div>
  );
}
function Buy() {
  return <div className="Breadcrumb-pageName">Buy</div>;
}
export default Breadcrumb;
