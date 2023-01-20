import React from "react";
import Community from "./container/Community";
import Company from "./container/Company";
import Header from "./container/Header";
import Join from "./container/Join";
import Progress from "./container/Progress";

const Home = () => {
  return (
    <div>
      <Header />
      <Company />
      <Progress />
      <Community />
      <Join />
    </div>
  );
};

export default Home;
