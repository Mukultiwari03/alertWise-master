// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyVW7RYyPT6iiTHIHIPlkxRnpzzQjiiCM",
  authDomain: "alertwise-672ce.firebaseapp.com",
  projectId: "alertwise-672ce",
  storageBucket: "alertwise-672ce.appspot.com",
  messagingSenderId: "237141586788",
  appId: "1:237141586788:web:bc3fa3528a862f3b54c071"
};

// Initialize Firebase
export default  app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
auth.languageCode = 'it';
auth.useDeviceLanguage();
export const provider = new GoogleAuthProvider();