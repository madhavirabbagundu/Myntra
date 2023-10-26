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
import { WomenCart } from './Components/WomenCart';
import './App.css'


function App() {
  return (
    <div className="App">
      < Navbar />
     <Routes>
      <Route path = "/Home" element = {<Home/>}></Route>
      <Route path = "/men" element = {<Men />}>Men</Route>
      <Route path = "/Women" element = {<Women />}>Women</Route>
      <Route path = "/Home" element = {<Home />}>Kids</Route>
      <Route path = "/" element={<Login/>}></Route>
      <Route path = "/Cart/:item" element={<Cart />}></Route>
      <Route path = "/WomenCart/:item" element= {<WomenCart />}></Route>
      <Route path = "/payment" element = {<PaymentPage />}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
