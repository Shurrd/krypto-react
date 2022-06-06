import React from "react";
import FetchCoins from "./components/FetchCoins";
import Navbar from "./components/Navbar";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* <FetchCoins />; */}
    </>
  );
};

export default App;
