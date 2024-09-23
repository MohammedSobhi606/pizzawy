import React from "react";
import { assets } from "../assets/assets";

function OurPolicies() {
  return (
    <div
      className=" flex flex-col sm:flex-row justify-around  text-center gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700
     "
    >
      <div className="shadow-sm">
        <img src={assets.exchange_icon} className="w-12 mb-5 m-auto" alt="" />
        <p className="font-semibold">Free Returns & Exchange within 30 days</p>
        <p className="text-gray-400">
          Return items within 30 days for a full refund. If you're not
          satisfied, we'll exchange it for a new one.
        </p>
      </div>
      <div className="shadow-sm">
        <img src={assets.quality_icon} className="w-12 mb-5 m-auto" alt="" />
        <p className="font-semibold">
          Quality Guarantee: 100% Authentic & Satisfaction Guarantee
        </p>
        <p className="text-gray-400">
          We will ensure all products are 100% authentic and meet all your
          expectations.
        </p>
      </div>
      <div className="shadow-sm">
        <img src={assets.support_img} className="w-12 mb-5 m-auto" alt="" />
        <p className="font-semibold">
          Customer Support 24/7: Live Chat & Email Support
        </p>
        <p className="text-gray-400">
          We're here to help you with any questions or concerns. From live chat
          to email support, we're always ready to assist you.
        </p>
      </div>
    </div>
  );
}

export default OurPolicies;
