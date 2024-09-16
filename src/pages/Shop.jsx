import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
// import './shop.css';
import './dd.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
function Shop() {
  const [products,setProducts]=useState([]);
  
  useEffect(() => {
    console.log("This is useEffect 1");
    fetch('http://localhost:4000/product/products') // api for the get request
    .then(response => response.json())
    .then((data) => 
      { 
        console.log(data.products)
        setProducts(data.products)
      });
  }, [])


  // Top selling
  const [products2,setProducts2]=useState([]);
  useEffect(() => {
    console.log("This is useEffect 2");
    fetch('http://localhost:4000/product/products2') // api for the get request
    .then(response => response.json())
    .then((data) => 
      { 
        console.log(data.products2)
        setProducts2(data.products2)
      });
  }, [])
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Brands");
  }

  return (
    <>
    <Nav></Nav>
    <div className='main'>
  <h1 className='he'>FIND CLOTHES<br/>THAT MATCHES <br/>YOUR STYLE</h1>
  <p id='p1'>Browse through our diverse range of meticulously crafted garmnents,designed<br/>
  to bring out your individuality and cater to your sense of style.</p>
  <button id ='b1'type='button' onClick={handleClick} >Shop Now</button>
  <p id='p2'>200+</p>
  <p id='p3'>International Brands</p>
  <div className='vl'></div>
  <p id='p4'>2000+</p>
  <p id='p5'>High-Quality Products</p>
  <div className='vl1'></div>
  <p id='p6'>30,000+</p>
  <p id='p7'>Happy Customers</p>
  <img id='im1'src='/Images/Rectangle_2-removebg-preview 1.png'/>
  </div>
  <img id='brands'src='/Images/brands1.png'/>
                    
   
  
  
    </>
  )
}

export default Shop;