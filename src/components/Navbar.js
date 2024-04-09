import React from 'react'
import sticker from '../components/images/sticker.png'
import profile from '../components/images/profile.png'
export default function Navbar() {
  return (
    <div className='navbar-tag'>
        <div>
        <div>
          <img src={sticker}/>
        </div>
        </div>
        <div className='navbar-options'>
        <div >HOME</div>
        <div>SALONS</div>
        <div>SHOP</div>
        <div>ABOUT US</div>
        <div style={{paddingLeft:"100px"}}><img src={profile}/></div> 
        </div>
       
    </div>
  )
}