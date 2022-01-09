import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIO6SmTFi6YKUV4xRJxsNF_whCKxqEIVQ",
  authDomain: "baby360-f3e1b.firebaseapp.com",
  projectId: "baby360-f3e1b",
  storageBucket: "baby360-f3e1b.appspot.com",
  messagingSenderId: "379769803501",
  appId: "1:379769803501:web:f7a3a1e39bd6a82319b2e4",
  measurementId: "G-BXLY4M486N",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { database, storage };
