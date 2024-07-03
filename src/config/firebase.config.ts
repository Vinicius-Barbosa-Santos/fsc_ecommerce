import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZgUTeK8U9W6_Ipjje2owhUFSC_L3Dtns",
  authDomain: "club-ecommerce-ee1be.firebaseapp.com",
  projectId: "club-ecommerce-ee1be",
  storageBucket: "club-ecommerce-ee1be.appspot.com",
  messagingSenderId: "1068292714013",
  appId: "1:1068292714013:web:d9078ff366931bbfc020f4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
