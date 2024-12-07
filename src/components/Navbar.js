import React, { useState } from "react";
import "./Navbar.css";
import logo from "../components/law-logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu open/close
  };

  const showSidebar = () => {
    setSidebarVisible(true); // Show the sidebar
  };

  const hideSidebar = () => {
    setSidebarVisible(false); // Hide the sidebar
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logopart">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1>Konar Hukuk & Danışmanlık</h1>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Ana Sayfa</a>
          </li>
          <li>
            <a href="#aboutus">Hakkımızda</a>
          </li>
          <li>
            <a href="#services">Çalışma Alanlarımız</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
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

        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle" onClick={showSidebar} aria-label="Open sidebar">
          <span></span> {/* Optional: Hamburger icon for the sidebar */}
        </button>

        {/* Sidebar */}
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
