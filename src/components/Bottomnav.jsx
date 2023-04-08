import React from 'react'
import './bottomnav.css'
import { useNavigate } from 'react-router-dom'
const Bottomnav = () => {
    const navigate=useNavigate()
    const navigateHandler=(page)=>{
        switch (page) {
            case "home":
                navigate("/")
                break;
            case "cart":
                navigate("/my-cart")
                break;
            case "order":
                navigate("/my-orders")
                break;
            default:
                break;
        }
    }
  return (
    <nav className="bottomnav">
    <button className="homebtn" onClick={()=>navigateHandler("home")}>
      <div className="homebtn-child" />
      <img className="vector-icon" alt="" src="../vector.svg" />
      <div className="home1">HOME</div>
    </button>
    <button className="homebtn" onClick={()=>navigateHandler("cart")}>
      <div className="homebtn-child" />
      <div className="house" />
      <div className="cart">CART</div>
      <img className="cartfill-icon" alt="" src="../cartfill.svg" />
    </button>
    <button className="homebtn" onClick={()=>navigateHandler("order")}>
      <div className="homebtn-child" />
      <div className="orders">ORDERS</div>
      <img className="newspaper-icon" alt="" src="../newspaper.svg" />
    </button>
  </nav>
  )
}

export default Bottomnav