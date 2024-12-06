import React, { useState } from "react";
import "./Navbar.css";
import logo from '../components/law-logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menu state to track whether the menu is open or closed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logopart">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>Konar Hukuk & Danışmanlık</h1>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home">Ana Sayfa</a></li>
          <li><a href="#aboutus">Hakkımızda</a></li>
          <li><a href="#services">Çalışma Alanlarımız</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
