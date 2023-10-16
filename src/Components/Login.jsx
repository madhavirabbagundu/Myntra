import React from "react";
import {useNavigate} from "react-router-dom"


function Login(){
    const navigate = useNavigate(); 

    const [input,setInput] = React.useState({
        number:""

    })
    const [inputstore,setInputStore] = React.useState(0)

    const handleChange = (e)=>{
        const {name,value} = e.target
        setInput({...input,[name]:value})
    }

    React.useEffect(()=>{
        fetch(`http://localhost:3000/loginData`)
        .then((res)=>res.json())
        .then((json)=>setInputStore(json))
      },[])

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(input.number.length === 10){
         alert("Login successfully")
         navigate("/")
        fetch(`http://localhost:3000/loginData`,{
            method:"POST",
            body:JSON.stringify(input),
            headers:{
                "Content-type":"application/json"
            }

        })
        .then((res)=>res.json())
        .then((json)=>console.log(json,"effect"))
      }
      else{
        alert("Choose your number")
      }
    }
    
    const {number} = input;
    return (
        <>
        <div className="loginContainer">
            {/* This is the login page */}
            <div className="loginPart">
            <div>
             <img className="item" src = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg" alt =  ""/>
            </div>
            <div>
                <h2>Login or Signup</h2>
            </div>
            <div>
                {/* <input type = "text" placeholder="Enter your mobile number"/> */}

            </div>
        <form onSubmit = {handleSubmit}>

            {/* <div class="form-row"> */}
    <div >
      <input className = "inputForms" style = {{width:"60%",padding:"2%"}} 
      type="number" 
      class="form-control" 
      placeholder="Enter your mobile number"
      name = "number"
      value = {number}
      onChange = {handleChange}/>
    </div>
            <div>
                <p className="Para">
                By continuing, I agree to the <span className="loginPart2"><b>Terms of Use & Private Policy</b> </span>
                  </p>     
            </div>
            <div>
                <button className="continueButton" type = "submit" value = "submit">Continue</button>
            </div>
      </form>

            <div>
                <p className="Para">Have troubled logging in ?<span className="loginPart2"><b>Get Help</b></span></p>
            </div>
            </div>
        </div>
        </>
    )
    }
export {Login}