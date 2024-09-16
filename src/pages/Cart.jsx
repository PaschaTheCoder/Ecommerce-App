import { useState } from "react";
import React from "react";
import Nav from "../components/Nav";
import { useFetch } from "../hooks/useFetch";
import "./cart.css";
import Stayuptodate from "../components/Stayuptodate";
import Footer from "../components/Footer";
import ActualFooter from "../components/ActualFooter";
import { deleteData, putData } from "../services/utils/apiCall";
function Cart() {
  const [cont, setCont] = useState(0);
  const [cartItems, setCartItems] = useState()

 

  const { data, error } = useFetch(`/cart/addtocart`);

  console.log(data);
  function myFunction() {
    window.confirm("Your order is confirmed");
  }
  const discountRate = .2;
  const deliveryFee = 15;

  const calculateSubtotal = () => { 
    return cartItems.reduce((acc, item) => parseFloat( acc + item.price )* parseFloat(item.quantity), 0);
  };

  const calculateDiscount = () => {
    return calculateSubtotal() * discountRate;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + deliveryFee;
  };


  return (
    <>
      <Nav />
      (<h1 id="yourcart">YOUR CART</h1>
      <div id="outerdiv">
        {data &&
          data.map((product, index) => (
            <div className="outerdivChild">
              <img
                id="img35"
                src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
              />
              <div id="line"></div>
              <div id="line1"></div>
              <h2 id="chs">{product.title}</h2>
              <p id="size">Size:Large</p>
              <p id="color">Color:Red</p>
              <p id="dollar">{product.price}</p>
              <img id="del" src="./Images/delete.png" onClick={()=>{deleteData(`/cart/addtocart?productId=${product._id}`)}}/>
              <div id="calculation2">
                <button id="buttong1" onClick={() =>{
                   setCont(cont - 1)
putData(`/decrease?productId=${product._id}`)
                }}>
                  -
                </button>
                <span id="span1">{cont}</span>
                <button id="buttongg1" onClick={() => {setCont(cont + 1)
                  putData(`/cart/addtocart?productId=${product._id}`)
                 } }>
                  +
                </button>
              </div>
            </div>
          ))}
      </div>
      <div id="summarydiv">
        <h2 id="orders">Order Summary</h2>
        <p id="subtotal">Subtotal:{calculateSubtotal}</p>
        <p id="rupee"></p>
        <p id="dis">Discount({discountRate*100}%):{""}</p>
        <p id="rupee1">$113</p>
        <p id="dely">Delivery Fees</p>
        <p id="rupee2">$15</p>
        <div id="underline"></div>
        <p id="total">Total</p>
        <p id="rupee3">$333</p>
        <input
          id="memo"
          type="text"
          placeholder="                Add promo code"
        ></input>
        <button id="app">Apply</button>
        <button id="go1" onClick={myFunction}>Go to Checkout </button>
      </div>
      <Stayuptodate></Stayuptodate>
      <ActualFooter></ActualFooter>
      {/* <Footer></Footer> */}
      )
    </>
  );
}

export default Cart;
