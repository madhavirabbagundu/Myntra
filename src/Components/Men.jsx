import React from 'react'
// import { Link } from 'react-router-dom'
import { MenCardPage } from './MenCardPage'
// import { Cart } from './Cart'

function Men({handleClick}){
    const [menData,setMenData] = React.useState([])
    // const [HighToLow,setHighToLow] = React.useState('--Select--')


    React.useEffect(()=>{
        fetch(`http://localhost:3000/men`)
        .then((res)=>res.json())
        .then((json)=>setMenData(json))
    },[])
    console.log(typeof(menData),"men")

   
    const handleChangeHigh = (e)=>{
        console.log(e,menData,"data")
        if(e.target.value === "HighToLow"){
            const sort = [...menData].sort((a,b)=>a.price < b.price ? 1 :-1)
            setMenData(sort)
            console.log(sort,"sorting")

        }
         if(e.target.value === "LowToHigh"){
            console.log(e.target.value,"low")
            const sort1 = [...menData].sort((a,b)=>a.price > b.price ? 1 : -1)
            setMenData(sort1)
            console.log(sort1,"low to high")
        }
        if(e.target.value === "select"){
            const data = [...menData].sort((a,b)=>a.id > b.id ? 1 : -1)
            setMenData(data)
        
        }
        if(e.target.value  === "A TO Z"){
            const data1 = [...menData].sort((a,b)=> a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1)

            setMenData(data1)
        }
       
        
    }

return (
    <>
    <div>
      
        <select  className='selectMenChategory'onChange = {handleChangeHigh}>
            <option value = "select">--- Select ---</option>
            <option value = "HighToLow" ><b>High to Low</b></option>
            <option value = "LowToHigh"><b>Low to High</b></option>
            <option value = "A TO Z"><b>A TO Z</b></option>
        </select>
    </div>
    <div className = "menContainer">
        
   
   {
        menData.map((item)=>(
       <MenCardPage className = "menContainerData"key = {item.id} item = {item} handleClick = {handleClick}/>
            //     {/* <div className='content'>
            //     <Link to = {`/Cart/${item.id}`}><img className='menPhoto' src = {item.image} alt = ""/></Link>
            //     <h4 className='names'>{item.brand}</h4>
            //     <p className='names'>{item.name}</p>
            //     <h4 className='names' style = {{color:'red'}}> RS:{item.price}</h4> */}
            //     {/* <Link to = {`/Cart`}> */}
            //     {/* <button className="continueButton" onClick={handleCart(item.id)}>ADD TO CART</button> */}
            //     {/* </Link> */}
            //     {/* </div> */}
            // // </div>
           
        ))
        

      }

    </div>

    </>
)
}
export {Men}