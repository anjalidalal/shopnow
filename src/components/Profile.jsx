import React from "react";
import Header from "./header/Header";
import { signInWithGoogle } from "../services/firebase";

const Profile = () => {
  return (
    <>
      <Header />
      <div>
        <button className="login-provider-button" onClick={signInWithGoogle}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
            alt="google icon"
          />
          <span> Continue with Google</span>
        </button>
      </div>
    </>
  );
};

export default Profile;
