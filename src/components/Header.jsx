import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
const Header = ({title}) => {
    const navigate=useNavigate()
    const backHandler=()=>{
        navigate(-1)
    }
  return (
    <div className="header1">
    <button className="backbtn" onClick={backHandler}>
      <img className="vector-icon2" alt="" src="../vector2.svg" />
    </button>
    <div className="headertxt1">{title}</div>
  </div>
  )
}

export default Header