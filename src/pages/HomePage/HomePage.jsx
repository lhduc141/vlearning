// File HomePage.js
import React from "react";
import Carousel from "./Carousel/Carousel";
import HomeIntro from "./Carousel/HomeIntro";
const HomePage = () => {
  return (
    <div className="bg-white">
      <Carousel />
      <HomeIntro/>
    </div>
  );
};

export default HomePage;
