import { initializeApp } from "firebase/app";
import { getUser } from "../components/Redux/Action";
import { useDispatch } from "react-redux";
import { store } from "../components/Redux/Store";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/firestore";

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

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const photo = result.user.photoURL;
      store.dispatch(
        getUser({
          displayName: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      const id = result.user.uid;
      console.log(id);
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("photo", photo);
      //console.log(name, email, photo);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutFunc = () => {
  signOut(auth, provider)
    .then((result) => {
      store.dispatch(getUser(null));
    })
    .catch((error) => {
      store.dispatch(getUser(null));
    });
};
//   try {
//     await firebase.auth().signOut();
//     store.dispatch(getUser(null));
//   } catch (error) {
//     store.dispatch(getUser(null));
//   }
// };
