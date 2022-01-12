import React from "react";
import { useState, useEffect } from "react";
import { database, storage } from "../Config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";

import "../components/all_products/AllProduct.css";
import useDatabase from "../hoocks/useDatabase";

function FireStore() {
  //   console.log("Hello");
  const [blogs, setBlogs] = useState([]);
  const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchdata = async (catagory) => {
      const querySnapshot = await getDocs(collection(database, catagory));
      let c = [];
      let d = [];
      querySnapshot.forEach((doc) => {
        let a = doc.data();
        c.push({ ...doc.data(), di: doc.id });
      });

      setBlogs(c);
      // setImg(d);

      // console.log(blogs);
    };
    const fetchlogo1 = async (name, l) => {
      const starsRef = ref(storage, name);
      await getDownloadURL(starsRef)
        .then((url) => {
          let r = url;
          l.push({ ul: r });
          // list.push(url);
          // list.push("a");
          // console.log(list)
          // console.log(list);

          // console.log(blogs);
        })
        .then(() => {})
        .then(() => {})
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        });
    };
    const fetchAll = async (name) => {
      const listRef = ref(storage, name);
      // Find all the prefixes and items.
      await listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // console.log(folderRef);
            // console.log('above is the folder ref');
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            let e = itemRef["_location"]["bucket"];
            let f = itemRef["_location"]["path_"];
            // console.log(itemRef);
            console.log(e + f);
            // All the items under listRef.
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    };
    // fetchdata("icon");
  }, []);
  return (
    <div>
      {blogs &&
        blogs.map((doc) => (
          <div className="">
            <AllProduct price="4" img={doc.location} />
          </div>
        ))}
    </div>
  );
}

function AllProduct(props) {
  const [url, seturl] = useState("");
  useEffect(() => {
    const fetchlogo1 = async (loc) => {
      const starsRef = ref(storage, loc);
      await getDownloadURL(starsRef)
        .then((url) => {
          
          seturl(url);
          console.log("the url is :  "+url);
        })
        .catch((error) => {
          console.log("error");
        });
    };
    fetchlogo1(props.img);
    return () => {};
  }, []);
  return (
    <div className="aboutAllProduct">
      <div className="detailsProduct">
        <div className="big-imgProduct">
          <img src={`${url}`} alt="MainImage" />
        </div>
        {/*  <div className="boxProduct">
          <h2>{props.title}</h2>
        </div>  */}
        <div className="">{props.img}</div>
        <div className="productPrice">{url}</div>
      </div>
    </div>
  );
}

export default FireStore;
