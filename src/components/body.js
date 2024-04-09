import React from 'react'
import Bodyitems from './bodyitems'
import leftarrow from '../components/images/leftarrow.png'
import rightarrow from '../components/images/rightarrow.jpg'
export default function Body() {
  return (
    <div>
        <div className='body-heading1'>Shop By</div>
        <div style={{color:"white",display:"grid",gridTemplateColumns:"70px 70px 70px",marginLeft:"520px",fontSize:"13px",marginTop:"50px"}}>
            <div>concerns</div>
            <div>Brands</div>
            <div>Categories</div>
        </div>
        <div style={{marginTop:"30px",display:"grid",gridTemplateColumns:"200px 200px 200px 200px 200px 200px"}}>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"60px",fontSize:"20px"}}>Acne</div>
            </div>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"60px",fontSize:"20px"}}>Dandruf</div>
            </div>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"60px",fontSize:"20px"}}>Dryness</div>
            </div>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"40px",fontSize:"20px"}}>Thinng Hair</div>
            </div>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"40px",fontSize:"20px"}}>Blackheads</div>
            </div>
            <div className='div-acne'>
                <div style={{marginTop:"70px",marginLeft:"50px",fontSize:"20px"}}>Darkspots</div>
            </div>
        </div>
        <div style={{marginLeft:"600px",marginTop:"80px"}}>
            <button><img src={leftarrow} style={{height:"30px",width:"30px"}}/></button>
            <button><img src={rightarrow} style={{height:"30px",width:"30px"}}/></button>
        </div>
        <Bodyitems />
        
    </div>
  )
}
