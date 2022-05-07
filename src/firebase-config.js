import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUoa4K8CvJghK0S3DBkKK0oOX_u1Z4YvQ",
  authDomain: "sign-in-d0e43.firebaseapp.com",
  projectId: "sign-in-d0e43",
  storageBucket: "sign-in-d0e43.appspot.com",
  messagingSenderId: "575518879257",
  appId: "1:575518879257:web:3e57a5b6fd376b78598488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
