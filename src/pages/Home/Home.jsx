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
import Navbar from "../../components/Navbar";

const Home = ({ isFirstMount }) => {
  return (
    <Navbar>
      <motion.div exit={{ opacity: 0 }} style={{ margin: "10px" }}>
        <Header />
        <Company />
        <Progress />
        <Community />
        <Join />
        {/* <LearnMore /> */}
        <Contact />
      </motion.div>
    </Navbar>
  );
};

export default Home;
