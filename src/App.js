import React from 'react'
import Footer from './lib/footer'
import Navbar from './lib/navbar'
import Tip from './lib/tip'
import './App.css'
export default function App() {
  return (
  <>
  
  <Navbar/>
  <div ></div>
  <div class="container">
   <center> <div className='tipcalc' style={{marginTop:'150px',alignItems:'center'}}><Tip/></div> </center>
  </div>
  <Footer/>
  </>
  )
}
