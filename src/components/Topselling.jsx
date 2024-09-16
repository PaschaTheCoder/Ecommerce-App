import React, { useState,useEffect } from 'react'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
function Topselling() {
  const navigate = useNavigate();
  function handleClick(productId) {
    console.log("data")
    navigate(`/Productdetails/${productId}`);
  }
  const[topsell,setTopsell]=useState([])
  useEffect(() => {
    console.log("Topselling is coming");
    fetch("http://localhost:4000/products/getproduct?tag=topSelling")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setTopsell(data.products);
      });
  }, []);
  return  <>
    <h1 id='newarrivals'>TOP SELLING</h1>
       <div id='divv'>
       {
       topsell && topsell.map((product,index)=>{
      
        return<>
          <Card handleClick={handleClick}product={product}/>

          </>
       })
      }
  </div>
    </>

}
export default Topselling
