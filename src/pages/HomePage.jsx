

import React, {useState,useEffect } from 'react';
// import shoesData from '../assets/shoesData'
import { fetchData,shoesOptions } from '../uils/fetchData'
import Navbar from '../components/Navbar';
import Slogan from '../components/Slogan';
import Products from '../components/Products';
import Story from '../components/Story';
import Footer from '../components/Footer';
const HomePage = () => {
  const [shoes,setShoes]=useState([])

  useEffect(()=>{
    const fetchShoes=async()=>{
    const data=await fetchData('https://shoes-collections.p.rapidapi.com/shoes',shoesOptions)
    setShoes(data)
    }
    fetchShoes()
  },[])

  return (
      <div>
        <Navbar></Navbar>
        <Slogan></Slogan>
        <Products products={shoes.slice(0,4)}></Products>
        <Story id='story'></Story>
        <Footer></Footer>
      </div>
  );
};

export default HomePage;

