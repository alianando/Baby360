import React from "react";
import { useHistory } from "react-router-dom";

function PageNotFound() {
    const history = useHistory();

    const goToHomePage=()=>{
        history.push("/")
    }
  return (
    <div>
      <h1>Could not find the page Sorry</h1>
      <button onClick = {goToHomePage} >Go to Home</button>
    </div>
  );
}

export default PageNotFound;
