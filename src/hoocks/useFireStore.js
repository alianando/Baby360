import { database, storage } from "../Config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const useFireStore =  (catagory) => {
    // const querySnapshot = await getDocs(collection(db, catagory));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
};

export default useFireStore;
