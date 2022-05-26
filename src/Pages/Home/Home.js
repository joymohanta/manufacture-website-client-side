import React from "react";
import Banner from "./Banner";
import BusinessMoral from "./BusinessMoral/BusinessMoral";
import DrillDetail from "./DrillDetail/DrillDetail";
import Review from "./Review/Review";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessMoral></BusinessMoral>
      <Review></Review>
      <DrillDetail></DrillDetail>
    </div>
  );
};

export default Home;
