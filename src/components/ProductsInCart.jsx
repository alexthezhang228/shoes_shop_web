import { useContext } from 'react'
import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { CartContext } from '../contexts/CartContext'
const ProductsInCart = ({cartItem}) => {

  const {addOne,removeOne}=useContext(CartContext)
  const [quantity,setQuantity]=useState(cartItem.quantity)
  const handleAddOne = () => {
    addOne(cartItem);
    setQuantity(cartItem.quantity)
  };
  const handleRemoveOne= () => {
    removeOne(cartItem);
    setQuantity(cartItem.quantity)
  };

  return (
    <div className='w-6/12 h-3/12 bg-slate-200 border-md flex border-2 border-black m-2'>
      <div className='w-3/12'><img src={cartItem.image} alt='product_img' ></img></div>
      <div className='flex flex-col items-center justify-center ml-8'>
        <h4 className='font-bold'>{cartItem.name}</h4>
        <h4 className='my-2'>${cartItem.price}</h4>
        <div className='flex '>
          <button onClick={handleAddOne}><AiOutlinePlus/></button>
          <p className='font-bold rounded-lg mx-2'>{quantity}</p>
          <button onClick={handleRemoveOne}>
              <AiOutlineMinus />
          </button>  
        </div>
      </div>
    </div>
  )
}

export default ProductsInCart