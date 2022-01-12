import React from "react";
import { useState, useEffect } from "react";
import { database, storage } from "../../Config";
import { ref, getDownloadURL } from "firebase/storage";
import "./banner.css";

import { collection, addDoc, getDocs } from "firebase/firestore";


export default function Banner() {



  const [phonelogo, setPhonelogo] = useState("");
  useEffect(() => {
    const fetchdata = async(catagory)=> {
      const querySnapshot = await getDocs(collection(database, catagory));
      querySnapshot.forEach((doc) => {
        const a = doc.data();
        // console.log(a.id);
        // console.log(`${doc.id} => ${doc.data()}`);
        fetchlogo1(a.location, catagory);
        // console.log(a.location);
      });
    };
    const fetchlogo = async (name, fun) => {
      const starsRef = ref(storage, name);
      await getDownloadURL(starsRef)
        .then((url) => {
          fun(url);
        })
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
    const fetchlogo1 = async (name) => {
      const starsRef = ref(storage, name);
      await getDownloadURL(starsRef)
        .then((url) => {
        })
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
    fetchlogo("logo/phone.png", setPhonelogo);
    // fetchdata('icon')
  }, []);
  return (
    <div className="banner">
      <div className="banner-phone"></div>
      <img onClick={()=>{}} className="icon" src={phonelogo} alt="call page" />
      <p>01737029729</p>
      <p>01737029729</p>
    </div>
  );
}
