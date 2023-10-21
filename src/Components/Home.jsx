import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'


function Home(){
    return(
        <>
        <div className='home'>
            <img className = "item" src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/c697c000-3cf1-48f8-8130-c15ff23306401696438189573-FLAT-300-Off-on-1st-Purchase-Strip--2-.jpg" alt = ""/>
           <div className='item1'>
            <img className="item2" src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/5/b23170c2-fbef-47ee-9e77-d78e8e05853e1696485422051-Desktop-Main-Banner_01.jpg" alt = ""/>
            <img className = "item2" src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/5/a2154de3-4cac-4e6b-9bbd-3bb718c0920e1696485422044-Desktop-Main-Banner_02.jpg" alt = ""/>
            </div>     
            <div>
                <img className='item' src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/6401663d-5123-45d9-944f-1bce5ce39ecb1696438281384-Sponsorship-strip.jpg" alt = ""/>
            </div> 
            <div>
                <img className = "item" src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/094f8577-046a-43cd-a8a1-fec47b56419e1696437688078-Coupon-Corner.jpg" alt = ""/>
            </div>
            <div className='item1'>
                <img className = "item3"src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/679723f6-90d2-4bf9-aca5-105b621d999d1696437898130-MYNTRA100--2-.jpg" alt = ""/>
                <img className="item3" src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/2ce0c964-b149-462b-bdf8-059af6175db51696437898119-MYNTRA200--2-.jpg"alt =""/>
            </div>
            <div>
                <img className = "item"src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/d441b128-d26f-4533-a7f4-1f9679decfeb1696437688115-OMG-Deals.jpg" alt = ""/>
            </div>
            <div>
                <img className = "item" src = {img1} alt = ""/>
            </div>
            <div>
                <img className = "item" src = {img2} alt = ""/>
            </div>
            <div>
                <img className = "item" src = {img3} alt = ""/>
            </div>
            <div>
                <img className = "item" src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/673c184f-4970-4534-a3ee-af23ebf95c731696438098430-App-Install-Banner--3-.jpg" alt = ""/>
            </div>
         </div>
        </>
    )
}
export {Home}