import React from 'react'
import { useParams } from 'react-router-dom'

function Cart(){
    const {item} = useParams();
    console.log(item)
    const [selectedData,setSelectedData] = React.useState({})

    React.useEffect(()=>{
 fetch(`http://localhost:3000/men/${item}`)
 .then((res)=>res.json())
 .then((json)=>{setSelectedData(json)})
    },[item])
    console.log(selectedData,"cart")
    return(
        <>
        <div>
       
                <img src = {selectedData.image} alt = ""/>
                
        </div>
        </>
    )
}
export {Cart}