import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(){
return (
    <>
    <div className='navbar'>
        <div>
       <Link to = "/"><img className='navitems1'  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dYHWFq4mqnD49prLX96ST6Sp046_Jf4S2XTGClaVQA&s" alt = ""/></Link>
       </div>
       <div className='container'>
       <Link className='navitems' to = "/men">Men</Link>
       <Link className='navitems' to = "/Women">Women</Link>
       <Link className='navitems' to = "/Kids">Kids</Link>
       </div>
       <div className='search'>
        {/* <input type = "search" placeholder = "Enter the item"/> */}
       </div>
       <div>
        <Link to = "/Login"><img className='signlogo' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwT10DWaK6cYFH6SZUxx-18rvmT-lN3XUpg&usqp=CAU" alt = ""/></Link>
        <Link to = "/Cart"><img className='cartlogo' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk1DWXKlAJWzAzAAp0qoR34uNNzm_iLC2lQ&usqp=CAU" alt = ""/></Link>
       </div>
    </div>
    
    </>
)
}
export {Navbar}