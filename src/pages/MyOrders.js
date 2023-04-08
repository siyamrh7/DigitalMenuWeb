import Bottomnav from "../components/Bottomnav";
import Header from "../components/Header";
import "./MyOrders.css";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const navigate=useNavigate()
  const navigateHandler=()=>{
navigate("/orders-details")
  }
  return (
    <div className="my-orders">
 
      <section className="orderitemscon">
        <div className="orderitems" onClick={navigateHandler}>
          <div className="orderitemback" />
          <div className="orderitemcon">
            <div className="orderitemhead">
              <div className="preparing1">PREPARING</div>
            </div>
            <div className="orderitemtop">
              <b className="four-cuisines1">FOUR CUISINES</b>
              <a className="callbtn" href="tel:+880">
                <div className="btntext">CALL</div>
                <div className="callbtn-child" />
              </a>
            </div>
            <div className="orderitemmiddle">
              <div className="special-chawmin2">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="totaltxt">{`₹400 `}</div>
            </div>
            <div className="orderitemmiddle1">
              <div className="special-chawmin2">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="totaltxt">{`₹400 `}</div>
            </div>
            <div className="orderitembottom">
              <b className="totaltxt">TOTAL :</b>
              <b className="totalprice">{`₹800 `}</b>
            </div>
          </div>
        </div>
        <div className="orderitems" onClick={navigateHandler}>
          <div className="orderitemback" />
          <div className="orderitemcon">
            <div className="orderitemhead">
              <div className="preparing1" style={{color:"Red"}}>REJECTED</div>
            </div>
            <div className="orderitemtop">
              <b className="four-cuisines1">FOUR CUISINES</b>
              <a className="callbtn" href="tel:+880">
                <div className="btntext">CALL</div>
                <div className="callbtn-child" />
              </a>
            </div>
            <div className="orderitemmiddle">
              <div className="special-chawmin2">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="totaltxt">{`₹400 `}</div>
            </div>
            <div className="orderitemmiddle1">
              <div className="special-chawmin2">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="totaltxt">{`₹400 `}</div>
            </div>
            <div className="orderitembottom">
              <b className="totaltxt">TOTAL :</b>
              <b className="totalprice">{`₹800 `}</b>
            </div>
          </div>
        </div>
      </section>
  
     <Header title="MY ORDERS"/>
      <Bottomnav />

    </div>
  );
};

export default MyOrders;
