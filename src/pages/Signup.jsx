import React, { useState } from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
function Signup() {
  
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  function handleUserChange(e){
    setUsername(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  const navigate = useNavigate();
  function handleClick() {
    //navigate("/Log");
  }
  async function handleSignup() {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        if(data.jwtToken && data.success){
        sessionStorage.setItem("token", data.jwtToken);
        toast.success("sign up succecced!")
        navigate("/Log")
        }
        else{
          toast.warning(data.message);
        }
      })
      .catch((er) => console.log(er));
  }
  return(
    <>
    <h1 id='hh'>SHOP.CO</h1>
   <img id='log'src='/Images/bert-b-rhNff6hB41s-unsplash 1.png'/>
    <h3 id='signup'>Sign Up Page</h3>
    <button id='button3' type='button'>Continue With Google</button>
    <img id='googleicon'src='/Images/googleicon.png'/>
    <div className='hr'>
      <hr class="new7"></hr>
      <p id='or'>OR</p>
      </div>
      <div className='hr'>
      <hr className="new8"></hr>
      </div>
      <p id='usernamep'>User Name </p> 
      <input id='userinput1' type='Username'onChange={handleUserChange}/>
      <p id='username11'>Email</p>
      <input id='userinput2' type='email' onChange={handleEmailChange}/>
      <p id='username12'>Password</p>
      <input id='userinput21' type='password' onChange={handlePasswordChange}/>
      <button id='buttonl' type='button' onClick={handleSignup}>Sign Up</button>
      
    
    </>
  )
}
export default Signup