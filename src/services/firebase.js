import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5FgPgj7GoSG0Uq6uEuJc9FemjWRxmYAk",
  authDomain: "cultsport-3a7c0.firebaseapp.com",
  projectId: "cultsport-3a7c0",
  storageBucket: "cultsport-3a7c0.appspot.com",
  messagingSenderId: "181038111542",
  appId: "1:181038111542:web:42cdeda46439e699473197",
  measurementId: "G-X6Z5FM3B6V",
};

const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
