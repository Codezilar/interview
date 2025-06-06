
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7GkQklJsYgp_3Pscy4DY64qBTQG6ps_4",
  authDomain: "nexafoz-70abf.firebaseapp.com",
  projectId: "nexafoz-70abf",
  storageBucket: "nexafoz-70abf.firebasestorage.app",
  messagingSenderId: "134568613008",
  appId: "1:134568613008:web:377dfb2d61919848fd7415",
  measurementId: "G-Y4HNWD4D1W"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)