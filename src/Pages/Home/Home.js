import React from "react";
import Footer from "../Shared/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
