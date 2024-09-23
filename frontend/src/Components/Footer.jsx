import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div
        className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14
    my-10 mt-40 text-center items-center  bg-slate-100 p-4 md:p-14 rounded-lg"
      >
        <div>
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="text-gray-500 w-full md:w-2/3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            quae alias. Perspiciatis omnis facere aperiam cumque rem eveniet
            voluptatem quae incidunt adipisci! Animi sed dolorem eius. Saepe
            minus reiciendis aut.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick</h2>
          <ul className="space-y-1">
            <li className="text-gray-700 hover:text-gray-900">Home</li>
            <li className="text-gray-700 hover:text-gray-900">About</li>
            <li className="text-gray-700 hover:text-gray-900">Delivery</li>
            <li className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700">Email: info@example.com</p>
          <p className="text-gray-700">Phone: +1 123 456 7890</p>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-gray-500 text-center mb-4">
          @ 2024 Great E-Commerce. All rights reserved.
        </p>
        <p className="text-center sm:text-end">
          Developed By:{" "}
          <span className="text-lg text-blue-600 ">Mohammed Sobhi</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
