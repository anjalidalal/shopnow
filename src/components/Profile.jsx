import React from "react";
import Header from "./header/Header";
import { signInWithGoogle } from "../services/firebase";

const Profile = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "95px" }} className="signInContainer">
        <button onClick={signInWithGoogle} className="signin">
          Sign in with Google
        </button>
        <h2>{localStorage.getItem("name")}</h2>
        <p>{localStorage.getItem("email")}</p>
        <img src={localStorage.getItem("photo")} className="profilePhoto" />
      </div>
    </>
  );
};

export default Profile;
