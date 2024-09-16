import React from 'react'
import '../pages/cart.css'
function Stayuptodate() {
  return (
    <> 
    <div className="stay">
        <h1 id="stay1">STAY UPTO DATE ABOUT</h1>
        <input
          id="inp"
          type="text"
          placeholder="                   Enter your email address"
        ></input>
        <img id="email" src="/Images/email.png" />
        <h1 id="stay2">OUR LATEST OFFERS</h1>
        <input
          id="inp1"
          type="text"
          placeholder="                   Subscribe to newsletter"
        ></input>
      </div>
      </>
  )
}

export default Stayuptodate