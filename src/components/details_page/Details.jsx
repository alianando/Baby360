import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import PageNotFound from "../notFound/PageNotFound";
import ItemDetailsWithCarosul from "./ItemDetailsWithCarosul";

function Details() {
  const { id } = useParams();

  if (data.some((item) => item.id === id)) {
    return (
      <div>
        <div>
          <ItemDetailsWithCarosul  {...data.find((object) => object.id === id)}/>
        </div>
      </div>
    );
  } else {
    return (<PageNotFound/>);
  }
}

export default Details;
