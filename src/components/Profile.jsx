import React from "react";
import Header from "./header/Header";
import { signIn, signOut } from "../services/firebase";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }} className="signInContainer">
        <button onClick={signIn} className="signin">
          Sign in with Google
        </button>
        {user === null ? (
          <p>User is not sign in</p>
        ) : (
          <div>
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
            <img src={user.photo} className="profilePhoto" />
          </div>
        )}

        <button className="signin" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Profile;
