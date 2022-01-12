import { useState, useEffect } from "react";
import { database, storage } from "../Config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const useDatabase = (location) => {
  const [url, seturl] = useState("");
  useEffect(() => {
    const fetchlogo1 = async (loc) => {
      const starsRef = ref(storage, loc);
      await getDownloadURL(starsRef)
        .then((url) => {
          seturl(url);
          console.log("the url is :  " + url);
        })
        .catch((error) => {
          console.log("error");
        });
    };
    fetchlogo1(location);
    return () => {};
  }, []);
  return { url };
};
export default useDatabase;
