// File HomePage.js
import React from "react";
import Carousel from "./Carousel/Carousel";
import HomeIntro from "./Carousel/HomeIntro";
import Banner from "./Home/Banner";
import TopTech from "./Home/TopTech";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeedBack from "./Home/FeedBack";
import ListCourse from "./ListCourses/ListCourse";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Carousel />
      <HomeIntro />

      <ListCourse />

      <Banner />
      <TopTech />
      <FeedBack />
    </div>
  );
};

export default HomePage;
