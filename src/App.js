import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import OrdersDetails from "./pages/OrdersDetails";
import MyOrders from "./pages/MyOrders";
import MyCart from "./pages/MyCart";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/orders-details":
        title = "";
        metaDescription = "";
        break;
      case "/my-orders":
        title = "";
        metaDescription = "";
        break;
      case "/my-cart":
        title = "";
        metaDescription = "";
        break;
 
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/orders-details" element={<OrdersDetails />} />

      <Route path="/my-orders" element={<MyOrders />} />

      <Route path="/my-cart" element={<MyCart />} />

    </Routes>
  );
}
export default App;
