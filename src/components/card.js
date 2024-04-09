import React from 'react'
import list from './list'
import star from '../components/images/star.png'

export default function Card() {
  return (
    <div className='card-main-box'>
     {
        list.map(data =>
           <div className='card-box'>
            <div><img src={data.img} className='img-tag'/>
            <div className='card-concern'>concern : {data.concern}</div>
            </div>
            <div style={{color:"white"}}>{data.name} <span style={{paddingLeft:"80px",fontSize:"13px"}}>{data.rating}/5 <img src={star}/></span></div>
            <div style={{color:"white",marginTop:"15px",fontSize:"20px"}}>Rs {data.price}</div>
            <button className='btn-shopnow'>Shop now</button>
           </div>
            )
     }
    </div>
  )
}
