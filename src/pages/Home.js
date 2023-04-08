import Bottomnav from "../components/Bottomnav";
import "./Home.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
const options=[
  "Burger",
  "Pizza",
  "Rice",
  "Steak",
  "Drinks",
  "Chicken",
  "Signature"
]
const ITEM_HEIGHT = 48;

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="home">
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option} Item
          </MenuItem>
        ))}
      </Menu>
        <div className="hero">
        <input className="inputcon" type="text" placeholder="Search food" />
        <img className="logo-icon" alt="" src="../logo.svg" />
      </div>
    
      <button className="menubtn" onClick={handleClick}>
        <div className="menugrp" onClick={handleClick}/>
        <b className="menu">MENU</b>
        <img className="menuicon" alt="" src="../menuicon.svg" />
      </button>
      <section className="itemcontainer">
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
       < div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
            <div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
            <div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
            <div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
            <div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="item">
          <div className="itemgrp" />
          <b className="itemprice">RS- 200</b>
          <div className="itemdetails">{`Freshly made with chicken, gralic & onion.`}</div>
          <div className="itemheader">Special Chawmin</div>
          <img className="itemimg-icon" alt="" src="../itemimg@2x.png" />
          <button className="addbtn">
            <div className="addbtnback" />
            <div className="addbtntxt">Add</div>
            <div className="plus">+</div>
          </button>
        </div>
      </section>
      <Bottomnav />
    </div>
  );
};

export default Home;
