import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Home />
      </Navbar>
    </>
  );
}

export default App;
