// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCgEpBi50V3pGhfzZgZUi4pNoU9E2hsf4",
  authDomain: "coffeemaster-d13e1.firebaseapp.com",
  projectId: "coffeemaster-d13e1",
  storageBucket: "coffeemaster-d13e1.firebasestorage.app",
  messagingSenderId: "284223017128",
  appId: "1:284223017128:web:0df52d22b293f3f033b29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;