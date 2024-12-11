import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/law-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [sidebarVisible, setSidebarVisible] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const showSidebar = () => {
    setSidebarVisible(true); 
  };

  const hideSidebar = () => {
    setSidebarVisible(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logopart">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#ankara-avukat-ana-sayfa">Ana Sayfa</a>
          </li>
          <li>
            <a href="#ankara-avukat-hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="#ankara-avukat-calisma-alanlarimiz">Çalışma Alanlarımız</a>
          </li>
          <li>
            <a href="#ankara-avukat-hukuki-makaleler">Makaleler</a>
          </li>
          <li>
            <a href="#ankara-avukat-iletisim">İletişim</a>
          </li>
        </ul>

        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 96 960 960"
            width="26"
          >
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"></path>
          </svg>
        </button>

        <button className="sidebar-toggle" onClick={showSidebar} aria-label="Open sidebar">
          <span></span>
        </button>

        {sidebarVisible && (
          <div className="sidebar">
            <button className="sidebar-close" onClick={hideSidebar} aria-label="Close sidebar">
              
            </button>
            <ul>
              <li>
                <a href="#home" onClick={hideSidebar}>Ana Sayfa</a>
              </li>
              <li>
                <a href="#aboutus" onClick={hideSidebar}>Hakkımızda</a>
              </li>
              <li>
                <a href="#services" onClick={hideSidebar}>Çalışma Alanlarımız</a>
              </li>
              <li>
                <a href="#contact" onClick={hideSidebar}>İletişim</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
