import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <>
      <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
      <div className='navbar1'>
        <Link to='/Shop'>Shop</Link>
        <Link to='/OnSale'>OnSale</Link>
        <Link to='/NewArrivals'>NewArrivals</Link>
        <Link to='/Brands'>Brands</Link>
        <input className="gm" type="text" placeholder="Search for products" />
     
        {token?(
          <>
             <Link to="/Cart">
          <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" /></Link>
        
                     <span
                     id="user"
                       onClick={() => {
                         sessionStorage.removeItem("token");
                         navigate("/");
                       }}
                     >LogOut</span>
                   </>
                 ) : (
                    <Link  to="/Signup">
                      <p id='sss'>SignUp</p></Link>
                 )}
       </div>
    </>
  );
}

export default Nav;