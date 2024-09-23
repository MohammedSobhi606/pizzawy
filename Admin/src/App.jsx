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
import Navbar from "./Components/Navbar";
import Sidbare from "./Components/Sidbare";
import AddFood from "./pages/AddFood";
import ListFood from "./pages/ListFood";
import Orders from "./pages/Orders";

function App() {
  const url = "http://localhost:5000";
  return (
    <div>
      <div className="px-4 sm:px-[7vw] md:px-[7vw] lg:px-[9vw]">
        <Router>
          {" "}
          <Navbar />
          <hr />
          <ToastContainer
            autoClose={500}
            transition={Zoom}
            position="top-center"
          />
          <div className="content flex gap-8 ">
            <Sidbare />

            <Routes>
              <Route path="/add" element={<AddFood url={url} />} />
              <Route path="/list" element={<ListFood url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
