import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Community, Home } from "./pages";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join-us" element={<Community />} />
          </Routes>
        </Navbar>
      </Router>
      <Footer />
    </>
  );
}

export default App;
