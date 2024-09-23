import React from "react";

import Title from "./Title";
import Fooditem from "./Fooditem";
import { useSelector } from "react-redux";
function FoodDisplay({ category }) {
  const { foodList } = useSelector((store) => store.states);

  return (
    <div>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"Top "} text2={"dishes"} />
          <p className="text-sm text-gray-600"></p>
        </div>
        {/* Best products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-8">
          {foodList.map((data, i) =>
            category === "all" || category === data.category ? (
              <Fooditem key={i} data={data} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
