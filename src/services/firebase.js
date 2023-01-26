import { getUser } from "../components/Redux/Action";
import "firebase/compat/firestore";
import store from "../components/Redux/Store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import data from "../components/data";

// Firebase configuration (should be in .env)
const firebaseConfig = {
  apiKey: "AIzaSyC5FgPgj7GoSG0Uq6uEuJc9FemjWRxmYAk",
  authDomain: "cultsport-3a7c0.firebaseapp.com",
  projectId: "cultsport-3a7c0",
  storageBucket: "cultsport-3a7c0.appspot.com",
  messagingSenderId: "181038111542",
  appId: "1:181038111542:web:42cdeda46439e699473197",
  measurementId: "G-X6Z5FM3B6V",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result.user.displayName,
        email: result.user.email,
        id: result.user.uid,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
      })
    );

    // if (result.additionalUserInfo.isNewUser) {
    //   await database.collection("wishlists").doc(result.user.uid).set({
    //     productsIds: [],
    //   });
    // }
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    store.dispatch(getUser(null));
  }
};
const database = firebase.firestore();
export { auth, database };
export default firebase;
