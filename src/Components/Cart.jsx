import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Cart(){
    const {item} = useParams();
    console.log(item)
    const [selectedData,setSelectedData] = React.useState([])
    const [cartImagesSize,setcartImageSize] = React.useState([])

    React.useEffect(()=>{
 fetch(`http://localhost:3000/men/${item}`)
 .then((res)=>res.json())
 .then((json)=>{setSelectedData(json)})
    },[item])
 
 
console.log(typeof(selectedData),"cart")
     const handleSmall = (e)=>{
      setcartImageSize(e.target.value)
     }
     console.log(cartImagesSize,"size")
    return(
       <>
       <div className='cartContainer'>
         <div>
         <img className='cartImage' src = {selectedData.image} alt = ""/>
         <Link to = "/payment">
         <button className='buyButton'>BUY NOW</button>
         </Link>
         </div>
            <div>
             <h2 className='productName'><h4>Product Details</h4></h2>

              <h4>product Brand  :
             <span className='size'>{selectedData.brand}</span>
             </h4>
             <h5>Product Name  : <label className='size'>{selectedData.name}</label></h5>

             <h5>Price Rs:<span className='size'>{selectedData.price}</span></h5>
             <img className = "rateImage" src = {selectedData.rating} alt = ""/>
             <div className='sizes'>
             <h2 className='sizeName'> Select Size</h2>
             <button value = "S" onClick = {handleSmall} className='sizes1'>S</button>
             <button value = "M" onClick = {handleSmall} className='sizes1'>M</button>
             <button value = "XL" onClick = {handleSmall} className='sizes1'>XL</button>
             <button value = "XLL" onClick = {handleSmall} className='sizes1'>XXL</button>
             <button value = "SX" onClick = {handleSmall} className='sizes1'>SX</button>
</div>
<div>
   <h5>Your Product Size::<label className='size'>{cartImagesSize}</label></h5>
</div>
<div>

</div>
            </div>
                  
               </div>

         
                
       </>
    )
}
export {Cart}