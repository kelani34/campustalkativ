import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Navbar>
        <Home />
      </Navbar>
    </>
  );
}

export default App;
