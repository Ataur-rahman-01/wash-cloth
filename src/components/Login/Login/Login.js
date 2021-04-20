import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebase";

const Login = () => {
  const hendelGoogle = () => {
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var token = credential.accessToken;
        const log = result.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <div className="text-center m-5">
      <button onClick={hendelGoogle} className="btn btn-primary">
        Continue With Google
      </button>
    </div>
  );
};

export default Login;
