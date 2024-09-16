import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "react";
import "./Log.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import { toast } from "react-toastify";

function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUserChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Signup");
  }

  async function handleSignin() {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.jwtToken && data.success) {
          sessionStorage.setItem("token", data.jwtToken);
          toast.success("sign in successfully!");
          navigate("/");
        }
        else{
          toast.warning(data.message);
        }
      });
  }

  return (
    <>
      <h1 id="hh">SHOP.CO</h1>
      <img id="log" src="/Images/bert-b-rhNff6hB41s-unsplash 1.png" />
      <button id="button1" type="button">
        Login
      </button>
      <button id="button2" type="button" onClick={handleClick}>
        Sign Up
      </button>
      <h3 id="sign">Sign In Page</h3>
      <button id="button3" type="button">
        Continue With Google
      </button>
      <img id="googleicon" src="/Images/googleicon.png" />
      <div className="hr">
        <hr class="new7"></hr>
        <p id="or">OR</p>
      </div>
      <div className="hr">
        <hr className="new8"></hr>
      </div>
      <p id="username">email address</p>
      <input id="userinput1" onChange={handleUserChange} type="email" />
      <p id="username1">Password</p>
      <input id="userinput2" onChange={handlePasswordChange} type="password" />
      <button id="button4" type="button" onClick={handleSignin}>
        Sign in
      </button>
      <p id="account"> Don't have an account?</p>
      <Link>
        {" "}
        <p id="sin">Sign up</p>
      </Link>
    </>
  );
}

export default Log;
