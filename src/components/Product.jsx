/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-07-08 13:27:50
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-07-15 21:39:04
 * @FilePath: /shoes_shop/my-app/src/components/Product.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useContext,useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import {CloseCircleOutlined} from '@ant-design/icons'

const Product = ({product}) => {
  const [show,setShowDetails]=useState(false)
 

  const {addToCart}=useContext(CartContext)


  const handleAddToCart=()=>{addToCart(product)}



  return (
    <div className='card'>
      <img src={product.image} alt='product_img'></img>
      <h4 className='quick_view' onClick={()=>setShowDetails(true)}>Quick review</h4>
      <p>{product.name}</p>
      <p>{product.price} euro</p>
      {show&&(
      <div className='detail_layer'>
        <div className='left'>
          <img src={product.image} alt='product_img'></img>
        </div>
        <div className='right'>
          <div className='details'>
            <h3>{product.name}</h3>
            <p>{product.price} euro & <span style={{color:'white'}}>Free shipping</span></p>
            {product.description}
          </div>
          <div className='numberControl' style={{marginTop:'30px'}}>
            <button 
            onClick={() => handleAddToCart(product)}
            className='cursor-pointer bg-gray-200 rounded-md hover:bg-white active:bg-black focus:outline-none focus:ring focus:ring-black w-24'
            >Add to Cart</button>
          </div>
        </div>
        <CloseCircleOutlined className='exit' onClick={()=>setShowDetails(false)}/>
      </div>)}
    </div>
  )
}

export default Product