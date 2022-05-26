import React from "react";
import Banner from "./Banner";
import BusinessMoral from "./BusinessMoral/BusinessMoral";
import Review from "./Review/Review";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessMoral></BusinessMoral>
      <Review></Review>
    </div>
  );
};

export default Home;
