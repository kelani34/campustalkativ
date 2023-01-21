import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Community, Home } from "./pages";
import { GlobalStyle } from "./styles/GlobalStyle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <Navbar>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/join-us" element={<Community />} />
          </Routes>
        </AnimatePresence>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
