


import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [amount,setAmount]=useState(0)

  const addToCart = (product) => {  
    if (!(product.id in cart)) {
      cart[product.id] = {};
      cart[product.id]['image']=product['image']
      cart[product.id]['quantity']=0
      cart[product.id]['price']=product['price']
      cart[product.id]['name']=product['name']
    }
    cart[product.id]['quantity'] += 1;
    setCart(cart)
    calculateAmount() 
  };


  const addOne = (cartItem) => {
    cartItem.quantity=cartItem.quantity+1
    setCart(cart)
    calculateAmount()
  };

  const calculateAmount=()=>{
    let totalAmount = 0;
    for (const itemId in cart) {
      const item = cart[itemId];
      totalAmount += item.quantity * item.price;
    }
    setAmount(totalAmount);
  }
  const removeOne=(cartItem)=>{
   if (cartItem.quantity>0){
    cartItem.quantity=cartItem.quantity-1
    setCart(cart)
    calculateAmount()
   }  
  }

  const clear=()=>{
    setCart({})
    setAmount(0)

  }


  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart,addOne,amount,removeOne,clear}}
    >
      {children}
    </CartContext.Provider>
  );
};