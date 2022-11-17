import React from "react";
import UpMessage from "../components/UpMessage";
import Categories from "../components/Categories";
import Bottom from "../components/Bottom";
import LinksBox from "../components/LinksBox";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <UpMessage />
      <LinksBox />
      <Slider />
      <Categories />
      <Bottom/>
    </div>
  );
};

export default Home;
