// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhScqPrGARRMoa3YfqsTqcnTQuqPgrviI",
  authDomain: "whatsapp-40fa3.firebaseapp.com",
  projectId: "whatsapp-40fa3",
  storageBucket: "whatsapp-40fa3.appspot.com",
  messagingSenderId: "795532212588",
  appId: "1:795532212588:web:e15d66aa114d61be1cdb49",
  measurementId: "G-RLE3VF17C0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
