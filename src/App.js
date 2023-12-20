import React from 'react'
import './App.css';
import { Routes,Route } from 'react-router-dom'
import {Men} from './Components/Men'
import {Women} from './Components/Women'
// import {Kids} from './Components/Kids'
import { Navbar } from './Components/Navbar';
import {Home }from './Components/Home'
import {Login}from './Components/Login'
import {Cart} from './Components/Cart'
import { PaymentPage } from './Components/PaymentPage';
// import { WomenCart } from './Components/WomenCart';
import './App.css'
import { MainCart } from './Components/MainCart';
import { User } from './ReduxComponent/User';
// import { WomenCardPage } from './Components/WomenCardPage';


function App() {
  const [cart,setCart] = React.useState([])

  const handleClick = (item)=>{
    cart.push(item)
    setCart([...cart],item)
    console.log(cart,"womenitem")
        }

  return (
    <div className="App">
      < Navbar />
     <Routes>
      <Route path = "/Home" element = {<Home/>}></Route>
      <Route path = "/men" element = {<Men handleClick={handleClick}/>}>Men</Route>
      <Route path = "/Women" element = {<Women handleClick={handleClick}/>}>Women</Route>
      <Route path = "/Home" element = {<Home />}>Kids</Route>
     {/* <Route path = "/" element={<Login/>}></Route> */}
      <Route path = "/" element={<User/>}></Route>

      {/* <Route path = "/cart" element = {<WomenCardPage handleClick={handleClick} cart = {cart} setCart={setCart}/>}></Route> */}
      <Route path = "/Cart" element = {<MainCart handleClick = {handleClick} cart = {cart} setCart = {setCart}/>}></Route>
      <Route path = "/Cart/:item" element={<Cart />}></Route>
      {/* <Route path = "/WomenCart/:item" element= {<WomenCart />}></Route> */}
      <Route path = "/payment" element = {<PaymentPage />}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
