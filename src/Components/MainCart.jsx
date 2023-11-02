import React from 'react'
import {Link} from 'react-router-dom'
function MainCart({cart,setCart}){
    console.log(cart)
    

const handleRemove = (id)=>{
const arr = cart.filter((item) => item.id !== id);
setCart(arr)
}

    return(
        <>
         <table className='tableFom'>
                        <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        </tr>
                        <tbody>
                        {
                       cart.map((item)=>(
               
                         <tr>
                        <td><img className = "cartImg"src = {item.image} alt = ""/></td>
                        <td><p>{item.name}</p></td>
                        <td><p>{item.price}</p></td>
                        <td><button onClick = {()=>handleRemove(item.id)}>Remove</button></td>

                    </tr>

                     ))
                    }
                    {/* <tr> */}
                    
                {/* </tr> */}

                    </tbody>
                    
                </table>
                <div>
                    
                <Link to = {`/payment`}>
                <button className="paymnetButton">Go TO Payment</button>
                </Link>
                </div>

                
              

                
           
        </>
    )
}
export {MainCart}