import React from 'react'

function WomenCardPage({item,handleClick}){
    console.log(handleClick)
    const {image,name,price} = item;

   
return(
    <>
    <div className='menContainerData'>
          <div className='content'>
                 {/* <Link to = {`/Cart/${item.id}`}> */}
                    <img className='menPhoto' src = {image} alt = ""/>
                 <p className='names'>{name}</p>
                 <h4 className='names' style = {{color:'red'}}> RS:{price}</h4>
             <button className="continueButton" onClick={()=>handleClick(item)}>ADD TO CART</button>
                 </div>
             </div>
    </>
)
}
export {WomenCardPage}