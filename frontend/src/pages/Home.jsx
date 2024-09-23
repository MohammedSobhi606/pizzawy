import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicies from "../Components/OurPolicies";
import NewsLetterBox from "../Components/NewsLetterBox";
import { useState } from "react";
import FoodDisplay from "../Components/FoodDisplay";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setfoodList } from "../Store/States";
function Home() {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Hero />
      <LatestCollection category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />

      <NewsLetterBox />
    </div>
  );
}

export default Home;
