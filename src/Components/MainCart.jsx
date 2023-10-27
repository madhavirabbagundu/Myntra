import React from 'react'
function MainCart({cart}){
    console.log(cart)
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
                        <td><button>Remove</button></td>

                    </tr>
                     ))
                    }
                    </tbody>
                </table>

                
           
        </>
    )
}
export {MainCart}