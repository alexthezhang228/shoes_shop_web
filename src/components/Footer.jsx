import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <div id='footer'>
      <ul className='flex text-4xl items-center justify-center'>
        <li><a><AiFillInstagram/></a></li>
        <li><a><AiFillYoutube/></a></li>
        <li><a><AiFillFacebook/></a></li>
        <li><a><AiFillTwitterCircle/></a></li>

      </ul>
    </div>
  )
}

export default Footer