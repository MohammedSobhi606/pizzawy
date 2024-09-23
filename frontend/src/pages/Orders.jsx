import React from "react";
import Title from "../Components/Title";
import { products } from "../assets/assets";
function Orders() {
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"my"} text2={"orders"} />
      </div>
      {/* order list */}
      <div>
        {products.slice(1, 5).map((product, index) => (
          <div className="flex border-t border-b py-4 justify-between items-center">
            <div key={index} className=" text-gray-700 flex flex-col">
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 object-cover rounded-md"
                  src={product.image[0]}
                  alt={product.name}
                />
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">Status: {product.date}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <span className="min-w-3 h-3 animate-bounce rounded-full bg-green-500"></span>
              <span className="min-w-3 h-3 animate-bounce rounded-full bg-yellow-500"></span>
              <span className="min-w-3 h-3 animate-bounce rounded-full bg-red-500"></span>

              <button className="px-4 py-2 text-sm font-bold text-gray-600 ">
                ready to go !
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
