// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsE_7WbNf96Z07yS9qxi4SKfq2XT4YR48",
  authDomain: "uber-next-clone-live-bc998.firebaseapp.com",
  projectId: "uber-next-clone-live-bc998",
  storageBucket: "uber-next-clone-live-bc998.appspot.com",
  messagingSenderId: "492593544303",
  appId: "1:492593544303:web:1ae80089280a2ca002619a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}