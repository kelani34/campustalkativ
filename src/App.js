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
import PageNotFound from "./pages/PageNotFound";
import Form from "./pages/Form";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<Form />} />
          <Route path="/join/community" element={<Community />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
