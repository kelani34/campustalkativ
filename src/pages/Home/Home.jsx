import React from "react";
import Community from "./container/Community";
import Company from "./container/Company";
import Contact from "../../components/Contact";
import Header from "./container/Header";
import Join from "./container/Join";
import LearnMore from "./container/LearnMore";
import Progress from "./container/Progress";

const Home = () => {
  return (
    <div>
      <Header />
      <Company />
      <Progress />
      <Community />
      <Join />
      {/* <LearnMore /> */}
      <Contact />
    </div>
  );
};

export default Home;
