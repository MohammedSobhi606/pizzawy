import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Bounce,
  Flip,
  Slide,
  ToastContainer,
  Zoom,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { useDispatch } from "react-redux";
import { setfoodList } from "./Store/States";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  // get food list from server
  const fetchFoodList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/food/list");
      const data = await response.json();
      dispatch(setfoodList(data.data));
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFoodList();
  }, []);
  return (
    <div>
      {" "}
      <div className="px-4 sm:px-[7vw] md:px-[7vw] lg:px-[9vw]">
        <Router>
          <Navbar />
          <ToastContainer autoClose={500} transition={Zoom} />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/place_order" element={<PlaceOrder />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
