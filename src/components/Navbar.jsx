

import React from 'react'
import  {Link} from 'react-router-dom'
import {ShoppingCartOutlined,UserOutlined} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='left'>
        <h2 className='logo text-4xl mb-2'>Alex Original</h2>
        <Link to='/'>MEN</Link>
        <Link to='/'>WOMEN</Link>
        <Link to='/'>SALE</Link>
      </div>
      <div className='right'>
        <h4><a href='#story'>OUR STORY</a></h4>
        <h4><a href='#footer'>CONTACT</a></h4>
        <Link to='/cart'><ShoppingCartOutlined className='cart'/></Link>
        <Link to='/login'><UserOutlined /></Link>
      </div>
    </div>
  )
}

export default Navbar