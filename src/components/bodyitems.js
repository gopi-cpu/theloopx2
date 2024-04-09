import React from 'react'
import list from './list'
import Card from './card'
export default function Bodyitems() {
  return (
    <div>
    <div style={{color:"white",marginLeft:"500px",fontSize:"50px",marginTop:"150px"}}>
        Our Bestsellors
    </div>
    <Card  />
    <div style={{border:"solid",borderColor:"white",width:"300px",textAlign:"center",marginLeft:"500px",marginTop:"100px",borderRadius:"20%"}}>
    <div style={{color:"white",fontSize:"40px"}}>Show all</div>
    </div>
    </div>
    
  )
}
