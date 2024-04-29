

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { config } from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get a reference to Realtime Database
const firebaseDb = getDatabase(app);
export {
  firebaseDb,

}




