import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Footprints } from "lucide-react";
import { UserCircle } from 'lucide-react';
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1 className="Header">
            SHOE HUB <Footprints size={30} />
          </h1>
          <Link to="/login" className="login">
            <UserCircle className="icon" size={35} />
          </Link>
        </div>
        <div className="Ap-search">
          <Menu />
        </div>
        <NavBar setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
