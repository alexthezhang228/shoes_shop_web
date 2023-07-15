

import Navbar from '../components/Navbar'
import React, { useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import {ShoppingOutlined } from '@ant-design/icons'
import ProductsInCart from '../components/ProductsInCart'

const CartPage = () => {
  const { cart,amount,clear} = useContext(CartContext);

  const cartList = Object.values(cart)

  if (cart.length === 0) {
    return (
      <>
        <Navbar/>
        <div className=''>
          <div className='flex items-center justify-center flex-col '>
            <div className='my-10 font-bold text-8xl'>Your cart is empty.</div>
            <Link to="/"><button className='text-white bg-black mx-8 text-6xl my-10'>Continue Shopping</button></Link>
          </div>
        </div>
      </>
    );
  }
  

  return (
    <>
      <Navbar/>
    
      <div className='bg-zinc-200'>
        <h1 className='flex items-center justify-center font-bold mt-2 text-6xl'>
        <ShoppingOutlined className='mr-2 '/>MY CART ITEMS</h1>
        <div className='flex justify-center items-center flex-col-reverse'>
          {cartList.map((cartItem)=>{
            return (
              <ProductsInCart cartItem={cartItem} key={cartItem.id}/>
            )
          })}
        </div>
        <div className='flex items-center justify-center font-bold mt-10'>Total:{amount} Euro</div>
        <div className='flex items-center justify-center pt-10 '>
          <button 
          className='text-white bg-black mx-8'
          onClick={clear}>Clear Cart</button>
          <Link to="/"><button className='text-white bg-black mx-8'>Continue Shopping</button></Link>
        </div>
      </div>
    </>
  );
};


export default CartPage;