// server

import dotenv from 'dotenv';
import connectDB from './src/db/ConnectDB.js';
import { app } from './app.js';

dotenv.config({
    path:'./.env'
});

// console.log(process.env.PRINT)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed ",err);
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9G_8ursdcOcvRxDrP-W9XDN_Um0N3VU",
  authDomain: "event-crave.firebaseapp.com",
  projectId: "event-crave",
  storageBucket: "event-crave.appspot.com",
  messagingSenderId: "411075675475",
  appId: "1:411075675475:web:627d348cdc9656dc780da6",
  measurementId: "G-WGQM8P0C7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);