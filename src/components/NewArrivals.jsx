import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import Card from "./Card";


 function NewArrivals(){
  const navigate = useNavigate();
  function handleClick(productId) {
    console.log("data")
    navigate(`/Productdetails/${productId}`);
  }
  const[arrivals,setArrivals]=useState([])
  useEffect(() => {
    console.log("data is coming");
    fetch("http://localhost:4000/products/getproduct?tag=newArrivals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setArrivals(data.products);
      });
  }, []);
  return (
    <>

      <h1 id="newarrivals">NEW ARRIVALS</h1>
      <div id="divv">
        {arrivals &&
          arrivals.map((product, index) => {
            return (
              <>
                <Card  handleClick={handleClick} product={product} />
              </>
            );
          })}
      </div>
      <center>
        <button id="b2" type="button" >   
          View All
        </button>
      </center>
    </>
  );
}
export default NewArrivals;