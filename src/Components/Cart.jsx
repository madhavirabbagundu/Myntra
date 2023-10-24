import React from 'react'
import { useParams } from 'react-router-dom'

function Cart(){
    const {item} = useParams();
    console.log(item)
    const [selectedData,setSelectedData] = React.useState([])
    // const [cartImages,setcartImage] = React.useState([])

    React.useEffect(()=>{
 fetch(`http://localhost:3000/men/${item}`)
 .then((res)=>res.json())
 .then((json)=>{setSelectedData(json)})
    },[item])
    var data = JSON.stringify(selectedData.subImages)
    console.log(typeof(data))
    // console.log(typeof(data),typeof(selectedData),"images")
     
    return(
        <>
        <div>
             <div className='cartContainer'>
       
                <img className = "cartImage" src = {selectedData.subImages} alt = ""/>
             {/* {
                selectedData.subImages.map(item=>(
                    <div>
                        <img src = {item.img} alt = ""/>
                    </div>
                ))
             } */}
             <img src = {data}/>
                </div>
        </div>
        {/* <div>
            {data.map(item => {
                <div>
                    <img className = "cartImage" src = {item} alt = ""/>
                    </div>
})}
        </div> */}
        </>
    )
}
export {Cart}