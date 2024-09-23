import React from "react";
import { assets } from "../assets/assets";
function Hero() {
  return (
    <div
      className={` bg-[url('./assets/header_img.png')] rounded-xl shadow-lg  h-[38vw] bg-cover justify-center  flex flex-col `}
    >
      {/* hero left */}
      <div className="w-full  border-gray-400 flex md:items-center md:ml-28 ml-2 animate-fade">
        <div className="text-black">
          <div className="flex  md:items-center gap-2 ">
            <p className="w-8 md:w-11 h-0.5 bg-zinc-700 "></p>
            <p className="uppercase font-medium text-sm md:text-base">
              delicious food
            </p>
          </div>
          <h1 className="text-2xl   md:text-4xl lg:text-5xl font-semibold leading-relaxed text-white">
            Order Your Favorite Food Here
          </h1>
          <div className="flex items-center gap-2 ">
            <p className="uppercase font-medium text-sm md:text-base">
              explore more
            </p>
            <p className="w-8 md:w-11 h-0.5 bg-zinc-700 "></p>
          </div>
        </div>
      </div>
      {/* hero right */}
    </div>
  );
}

export default Hero;
