import React from 'react'
import {useNavigate} from "react-router-dom"

function PaymentPage() {
    const navigate = useNavigate();
    const [payNum,setNumber] = React.useState({
        number:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setNumber({...payNum,[name]:value})
        console.log(e.target.value)
    }

    const handleSubmit = (e)=>{
          e.preventDefault()
          console.log(payNum.number.length,"num")
          if(payNum.number.length === 10){
            alert("Your Order is Done !! Thank You")
            navigate("/")
          }
          else{
            alert("Please choose your number once again")
          }
    }
    console.log(payNum.number)
    const {number} = payNum;
return(
    <>
    <div className='loginContainer'>
        <div className='loginPart'>
            <img className="item" src = "https://images.meesho.com/images/marketing/1661417516766.webp" alt = ""/>
            <div>
                <h3>Sign Up to save your order</h3>
            </div>
            <form onSubmit = {handleSubmit}>

            <div>
            <input className = "inputForms1"style = {{width:"95%",marginButtom:"5%",padding:"2%"}}  type = "number"
            placeholder='Enter your phone number'
            value = {number}
            name = "number"
            onChange = {handleChange}
            />
            </div>
            <div>
                <button className="continueButton1" type = "submit" value = "submit">Continue</button>
            </div>
            </form>
        </div>

    </div>
    </>
)
}
export {PaymentPage}