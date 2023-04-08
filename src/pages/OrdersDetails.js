import Bottomnav from "../components/Bottomnav";
import Header from "../components/Header";
import "./OrdersDetails.css";

const OrdersDetails = () => {
  return (
    <div className="orders-details">
      <section className="orderdetailsmain">
        <div className="orderdetailstop">
          <div className="orderdetailstop-child" />
          <div className="orderdetailscon">
            <div className="headdetails">
              <div className="order-details">ORDER DETAILS</div>
            </div>
            <div className="head1">
              <div className="order-id">ORDER ID :</div>
              <div className="thfashfds">#tHfasHfds</div>
            </div>
            <div className="head2">
              <div className="order-status">ORDER STATUS :</div>
              <div className="preparing-wrapper">
                <div className="preparing">PREPARING</div>
              </div>
            </div>
            <div className="head3">
              <div className="special-chawmin">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="div">{`₹400 `}</div>
            </div>
            <div className="head3">
              <div className="special-chawmin">{`Special Chawmin : 2 x ₹200 `}</div>
              <div className="div">{`₹400 `}</div>
            </div>
            <div className="head5">
              <b className="total">TOTAL :</b>
              <b className="total">{`₹800 `}</b>
            </div>
          </div>
        </div>
        <div className="makepayment">
          <div className="payment-unpaid">PAYMENT : UNPAID</div>
          <button className="paymentbtn">
            <div className="make-payment">MAKE PAYMENT</div>
            <button className="paymentbtn-child" />
          </button>
        </div>
        <div className="orderothers">
          <div className="orderothersback" />
          <div className="orderotherscon">
            <div className="headdetails">
              <div className="other-details">OTHER DETAILS</div>
            </div>
            <div className="head11">
              <div className="order-id">RESTURANT :</div>
              <div className="total">Four Cuisines</div>
            </div>
            <div className="head21">
              <div className="mobile">MOBILE :</div>
              <div className="div2">+9100000000</div>
            </div>
            <div className="head31">
              <div className="delivery-address">DELIVERY ADDRESS :</div>
              <div className="total">India , Kolkata</div>
            </div>
            <div className="head41">
              <div className="time-of-order">TIME OF ORDER :</div>
              <div className="total">30 DEC 2022</div>
            </div>
          </div>
        </div>
        <div className="ordercancelation">
          <div className="order-cancelation-wrapper">
            <div className="order-cancelation">ORDER CANCELATION :</div>
          </div>
          <button className="ordercancelbtn">
            <div className="cancel">CANCEL</div>
            <button className="ordercancelbtn-child" />
          </button>
        </div>
      </section>

   
      <Header title="ORDER DETAILS"/>
      <Bottomnav />
    </div>
  );
};

export default OrdersDetails;
