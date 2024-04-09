import React from 'react'
import fivestar from '../components/images/fivestart.png'
import sticker from '../components/images/sticker.png'
import logos from '../components/images/logos.png'
import mail from '../components/images/mail.jpg'
import phone from '../components/images/phone.jpg'
import location from '../components/images/location.png'
export default function Footer() {
  return (
    <div >
        <div style={{fontSize:"40px",color:"white",marginTop:"100px",marginLeft:"500px",width:"300px"}}>Hear it from our  custemores</div>
        <div className='review-section'>
           <div style={{border:"solid",borderColor:"white",height:"200px",width:"350px",marginLeft:"50px"}}>
            
            <img src={fivestar} style={{marginTop:"20px",marginLeft:"20px"}}/>
            <div style={{color:"white",fontSize:"20px",marginTop:"12px",marginLeft:"20px"}}>Prakash chaukarey</div>
            <div style={{color:"white",fontSize:"12px",marginTop:"20px",width:"300px",marginLeft:"20px"}}>impressed with the quality of the grooming tools!  They're durable and precise, making grooming   routines effortless and efficient</div>
            </div>


           <div  style={{border:"solid",borderColor:"white",height:"200px",width:"350px",marginLeft:"20px"}}
           
           ><img src={fivestar} style={{marginTop:"20px",marginLeft:"20px"}}/>
           <div style={{color:"white",fontSize:"20px",marginTop:"12px",marginLeft:"20px"}}>Neha Sukheja</div>
           <div style={{color:"white",fontSize:"12px",marginTop:"20px",width:"300px",marginLeft:"20px"}}>The skin care products exceeded my Expectations!  My skin feels rejuvenated and looks radiant after just a few uses.</div>
           </div>



           <div  style={{border:"solid",borderColor:"white",height:"200px",width:"350px",marginLeft:"0px"}}>
            <img src={fivestar} style={{marginTop:"20px",marginLeft:"20px"}}/>
            <div style={{color:"white",fontSize:"20px",marginTop:"12px",marginLeft:"20px"}}>Ajay Ravelkar</div>
            <div style={{color:"white",fontSize:"12px",marginTop:"20px",width:"300px",marginLeft:"20px"}}>Absolutely love the range of products available! From    essentials to luxury items, this site has everything for    frooming needs.</div>
            </div>
        </div>
        <div style={{marginTop:"200px",marginLeft:"50px",display:"grid",gridTemplateColumns:"repeat(3,1fr"}}>
            <div><img src={sticker} />
            <div><img src={logos} style={{marginTop:"50px"}}/></div>
            </div>


            <div style={{color:"white"}}> 
            <div>
                <img src={mail} style={{height:"20px",width:"20px"}} />
                <span style={{paddingLeft:"30px"}}>Groomer.online@gmail.com</span>
                 </div>
                 <div style={{marginTop:"30px"}}>
                    <img src={phone} style={{height:"20px",width:"20px"}}/>
                    <span style={{paddingLeft:"30px"}}>+91 9876543210</span>
                 </div>
                 <div style={{marginTop:"30px"}}>
                    <img src={location} style={{height:"20px",width:"20px"}}/>
                    <span style={{paddingLeft:"30px"}}>Hi-tech city,Hyderabad</span>
                 </div>
            </div>
            <div style={{color:"white"}}>
                <div>Terms and conditions</div>
                <div style={{marginTop:"30px"}}>Privacy and policy</div>
            </div>
        </div>
    </div>
  )
}
