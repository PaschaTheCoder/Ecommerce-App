import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import NewArrivals from '../components/NewArrivals'
import Topselling from '../components/Topselling'
import Footer from '../components/Footer'
import NewArrival from '../components/NewArrival'
function Home() {
  return (
    <>
  <Nav></Nav> 
   <Banner></Banner>
   <NewArrival></NewArrival>
   <Topselling></Topselling>
  <Footer></Footer>
   
    </>
  )
}

export default Home