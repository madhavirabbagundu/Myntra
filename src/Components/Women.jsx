import React from 'react'
import {Link} from 'react-router-dom'

function Women(){
    const [womenData,setwoMenData] = React.useState([])
    // const [HighToLow,setHighToLow] = React.useState('--Select--')


    React.useEffect(()=>{
        fetch(`http://localhost:3000/Womens`)
        .then((res)=>res.json())
        .then((json)=>setwoMenData(json))
    },[])
    console.log(womenData,"women")


    const handleChangeHigh = (e)=>{
        console.log(e,womenData,"data")
        if(e.target.value === "HighToLow"){
            const sort = [...womenData].sort((a,b)=>a.price < b.price ? 1 :-1)
            setwoMenData(sort)
            console.log(sort,"sorting")

        }
         if(e.target.value === "LowToHigh"){
            console.log(e.target.value,"low")
            const sort1 = [...womenData].sort((a,b)=>a.price > b.price ? 1 : -1)
            setwoMenData(sort1)
            console.log(sort1,"low to high")
        }
        if(e.target.value === "select"){
            const data = [...womenData].sort((a,b)=>a.id > b.id ? 1 : -1)
            setwoMenData(data)
        
        }
        if(e.target.value  === "A TO Z"){
            const data1 = [...womenData].sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

            setwoMenData(data1)
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
      womenData.map((item)=>(
          <div className = "menContainerData"key = {item.id}>
              <div className='content'>
                <Link to = {`/WomenCart/${item.id}`}>
              <img className='menPhoto' src = {item.image} alt = ""/></Link>
              {/* <h4>{item.brand}</h4> */}
              <p>{item.name}</p>
              <h4 style = {{color:'red'}}>RS:{item.price}</h4>
              <Link to = {`/WomenCart/${item.id}`}>
                <button className="continueButton">ADD TO CART</button>
                </Link>
              </div>
          </div>
      ))
      

    }

  </div>

    </>
)
}
export {Women}