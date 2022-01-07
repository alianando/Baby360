import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory } from "react-router";
import { storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";

export default function NavBar() {
  const [files, setFiles] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      // let result = await storage.ref().child("").listAll();
      // let urlPromises = result.items.map((imageRef) =>
      //   imageRef.getDownloadURL()
      // );

      // return Promise.all(urlPromises);
      const starsRef = await ref(storage, "Baby360-logo1.png");
      // Get the download URL
      await getDownloadURL(starsRef)
        .then((url) => {
          console.log(url);
          setFiles(url);
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object-not-found":
              // File doesn't exist
              break;
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    };
    fetchImages();

    // const loadImages = async () => {
    //   const urls = await fetchImages();
    //   setFiles(urls);
    // };
    // loadImages();
  }, []);

  // console.log(files);

  const history = useHistory();
  return (
    <div className="Nav-Grid">
      <div className="Nav-Button">M</div>
      <div
        className="Nav-Icon"
        onClick={() => {
          history.push({
            pathname: "/",
          });
        }}
      >
        {/* <img src={"/images/logo/Baby360-logo1.png"} alt="logo" /> */}
        <img src={files} alt="logo" />
      </div>
      <div className="Nav-Search">
        <input type="search" placeholder="SEARCH" />
        {/* <input type="submit" name="" value="search" /> */}
        <div className="search__icon">
          <img src="/images/Catagory/search.svg" alt="" />
        </div>
      </div>
      <div className="Nav-Menu">
        <div>
          <div className="itemsNav">
            <div
              className="button"
              onClick={() => {
                history.push({
                  pathname: "/products",
                });
              }}
            >
              <img src={"/images/Catagory/store.svg"} alt="store" />
              <div className="">{files}</div>
            </div>
            {/* <li>
            <img src={"/images/Catagory/store.svg"} alt="logo" />
            <a href="/">Home</a>
            <a href="/">Contact</a>
              <a >Home</a>
              <a >About</a>
              <a >Contact</a>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}
