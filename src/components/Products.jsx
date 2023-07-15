

import React from 'react';
import Product from './Product';

const Products=({products})=>{
  return (
    <main>
      <h2 className='text-4xl mb-2'>Our Best Seller</h2>
      <div className='products_row'>
        {products.map((product)=>{
          return (
            <div key={product.id} className='col'>
              <Product product={product}></Product>
            </div>
          )
        })}
      </div>
    </main>
  )
}



export default Products