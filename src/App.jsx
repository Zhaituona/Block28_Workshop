import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Green from "./components/Green";
import Yellow from "./components/Yellow";
import './App.css';  // Import the CSS for styling

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/yellow">Yellow</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>
      </div>
      <footer id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/yellow">Yellow</Link>
      </footer>
    </div>
  );
}

export default App;
