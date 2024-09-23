import React from "react";

function NewsLetterBox() {
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-600 font-medium">
        Subscribe Now & Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Stay up-to-date with our latest products, promotions, and offers.
      </p>
      {/* newsletter form */}
      <form className=" rounded-s-lg w-full sm:w-1/2 flex  items-center justify-between gap-3 mx-auto my-6 border-black border pl-3">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-1/2 outline-none"
          required
        />
        <button
          type="submit"
          className=" bg-black text-xs px-5 py-4 lg:px-10 font-semibold uppercase text-white "
          disabled
        >
          subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
