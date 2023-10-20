import React from 'react'

function Men(){
    const [menData,setMenData] = React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:3000/men`)
        .then((res)=>res.json())
        .then((json)=>setMenData(json))
    },[])
    console.log(menData,"men")
return (
    <>
    <div className = "menContainer">
      {
        menData.map((item)=>(
            <div className = "menContainerData"key = {item.id}>
                <div className='content'>
                <img className='menPhoto' src = {item.image} alt = ""/>
                <h4>{item.brand}</h4>
                <p>{item.name}</p>
                </div>
            </div>
        ))
      }

    </div>

    </>
)
}
export {Men}