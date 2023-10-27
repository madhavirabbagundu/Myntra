import React from 'react'

function MenCardPage({item,handleClick}){
    console.log(handleClick)
    const {brand,image,name,price} = item;

   
return(
    <>
    <div className='menContainerData'>
          <div className='content'>
                 {/* <Link to = {`/Cart/${item.id}`}> */}
                    <img className='menPhoto' src = {image} alt = ""/>
                    {/* </Link> */}
                 <h4 className='names'>{brand}</h4>
                 <p className='names'>{name}</p>
                 <h4 className='names' style = {{color:'red'}}> RS:{price}</h4>
                {/* <Link to = {`/Cart`}> */}
             <button className="continueButton" onClick={()=>handleClick(item)}>ADD TO CART</button>
             {/* </Link> */}
                 </div>
             </div>
    </>
)
}
export {MenCardPage}