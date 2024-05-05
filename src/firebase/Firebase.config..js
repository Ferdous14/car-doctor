// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apikey,
  authDomain:import.meta.env.VITE_authdomain,
  projectId:import.meta.env.VITE_projectid,
  storageBucket:import.meta.env.VITE_storagebucket,
  messagingSenderId:import.meta.env.VITE_messagingsenderid,
  appId:import.meta.env.VITE_appid,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;