import React from "react";
import Community from "./container/Community";
import Company from "./container/Company";
import Contact from "../../components/Contact";
import Header from "./container/Header";
import Join from "./container/Join";
import LearnMore from "./container/LearnMore";
import Progress from "./container/Progress";
import { motion } from "framer-motion";
import InitialTransition from "../../transitions/InitialTransitions";


const Home = ({ isFirstMount }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Header />
      <Company />
      <Progress />
      <Community />
      <Join />
      {/* <LearnMore /> */}
      <Contact />
    </motion.div>
  );
};

export default Home;
