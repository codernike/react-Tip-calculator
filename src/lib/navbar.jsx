import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/'> <img id='navbarimg' src='https://play-lh.googleusercontent.com/QRqRcE0MYhSniy-ef7_UKbLxSqKPdzDtOAnrTRjE4ywMIPkwplMNEiAPfNlus0VuE2w' alt='logo'/>
      Tip Calculator  </a>
        <ul>
            <li className='li-nav'><a href='/' >Home</a></li>
            <li className='li-nav'><a href='/'>Contact Us</a></li>
            <li className='li-nav'><a href='/'>Form</a></li>
            <li className='li-nav'><a href='/'>Login</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}
