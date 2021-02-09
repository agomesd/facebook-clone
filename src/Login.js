import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import logo from "./assets/facebook-logo.png";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const signInHandler = () => {
    //signIn
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="facebook" />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Logo"
        />
      </div>
      <Button type="submit" onClick={signInHandler}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
