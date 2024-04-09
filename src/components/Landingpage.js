import React from 'react'
import Navbar from './Navbar'
import Secondnav from './Secondnav'
import Searchbar from './searchbar'
import Body from './body'
import Footer from './footer'

export default function Landingpage() {
  return (
    <div >
      <div className='bgimg'>
        <Navbar />
        <Secondnav />
        <Searchbar />
        </div>
        <div style={{background:"black",height:"3000px"}}>
           <Body />
           <Footer />
        </div>
    </div>
  )
}
