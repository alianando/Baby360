import React from "react";
import { useHistory } from "react-router";
import "./ProductGroup.css";
import data from "../../data/data.json";

//for the database
import { database } from "../../Config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

//for the storage
import { useState, useEffect } from "react";
import { storage } from "../../Config.js";
import { ref, getDownloadURL } from "firebase/storage";

function ProductGroup() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchdata = async (catagory) => {
      const querySnapshot = await getDocs(collection(database, catagory));
      let c = [];
      querySnapshot.forEach((doc) => {
        let a = doc.data();
        c.push({ ...doc.data(), di: doc.id });
      });

      setBlogs(c);
    };

    fetchdata("icon");
  }, []);
  var catagory = data[data.length - 1].catagory;
  const history = useHistory();
  const goToSeeAll = () => {
    history.push({
      pathname: `/product/${catagory}`,
      state: {
        catagory: `${catagory}`,
      },
    });
  };
  return (
    <div className="ProductGroup">
      <div className="title">
        <h1>BEST SELLING</h1>
        <div onClick={goToSeeAll} className="navigaton__button">
          See all
        </div>
      </div>
      <div className="body">
        <div className="card">{<Card data={blogs[blogs.length - 1]} />}</div>
        <div className="card">{<Card data={blogs[blogs.length - 2]} />}</div>
        <div className="card">{<Card data={blogs[blogs.length - 3]} />}</div>
        <div className="card">{<Card data={blogs[blogs.length - 4]} />}</div>
        <div className="card">{<Card data={blogs[blogs.length - 5]} />}</div>
        <div className="card">{<Card data={blogs[blogs.length - 6]} />}</div>
      </div>
    </div>
  );
}

function Card(props) {
  // console.log(props.data.location);
  const [url, seturl] = useState("");
  useEffect(() => {
    const fetchlogo1 = async (loc) => {
      const starsRef = ref(storage, loc);
      await getDownloadURL(starsRef)
        .then((url) => {
          seturl(url);

        })
        .catch((error) => {
          console.log("error");
        });
    };
    fetchlogo1('shoe/shoe1.jpg');
    return () => {};
  }, []);
  // const image1 = props.data.source;
  const image1 = url;
  const history = useHistory();
  const goToDetailsPage = () => {
    // history.push(`/details/${props.data.id}`);
  };
  return (
    <div className="CardBody">
      <div onClick={goToDetailsPage} className="Image">
        <img src={`${image1}`} alt="" />
      </div>
      <div className="Rating">*****</div>
      {/* <div className="Name">{props.data.id}</div> */}
      <div className="Name">Namw</div>

      <div className="Price">4</div>
    </div>
  );
}

export default ProductGroup;
