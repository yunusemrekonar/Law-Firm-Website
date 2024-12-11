import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/law-logo.png";
import { Helmet } from 'react-helmet'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Sidebar link tıklama fonksiyonu
  const handleLinkClick = (e) => {
    e.preventDefault();  // Sayfa yenilenmesini engeller
    setMenuOpen(false);   // Sidebar'ı kapat
    window.location.href = e.target.href;  // Bağlantıya git
  };

  return (
<>
    <Helmet>
    <title>Ankara Avukat Çankaya | Hukuk Hizmetleri ve Danışmanlık</title>
    <meta name="description" content="Ankara'da avukatlik hizmetleri ve hukuki danismanlik. Ceza, aile, iş, ticaret, miras ve daha birçok alanda profesyonel hizmetler." />
    <meta name="keywords" content="Ankara avukat, Çankaya avukat, ceza hukuku, aile hukuku, iş hukuku, ticaret hukuku, Ankara hukuk danismani" />
    <meta property="og:title" content="Ankara Avukat Çankaya | Hukuk Hizmetleri" />
    <meta property="og:description" content="Ankara'da profesyonel avukatlik ve hukuk danismanlik hizmetleri. Ceza, aile, iş, ticaret, miras gibi birçok alanda çözümler sunuyoruz." />
    <meta property="og:url" content="https://www.konarhukuk.com/" />
    <meta property="og:image" content="https://www.konarhukuk.com/images/logo.png" />
    </Helmet>


    <nav className="navbar">
      <div className="navbar-container">
        <div className="logopart">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        {/* Hamburger Menü İkonu */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#ankara-avukat-ana-sayfa" onClick={handleLinkClick}>Ana Sayfa</a>
            </li>
            <li>
              <a href="#ankara-avukat-hakkimizda" onClick={handleLinkClick}>Hakkımızda</a>
            </li>
            <li>
              <a href="#ankara-avukat-calisma-alanlarimiz" onClick={handleLinkClick}>Çalışma Alanlarımız</a>
            </li>
            <li>
              <a href="#ankara-avukat-hukuki-makaleler" onClick={handleLinkClick}>Makaleler</a>
            </li>
            <li>
              <a href="#ankara-avukat-iletisim" onClick={handleLinkClick}>İletişim</a>
            </li>
          </ul>
        </div>

        {/* Navbar Links (Masaüstü için) */}
        <ul className="navbar-links">
          <li>
            <a href="#ankara-avukat-ana-sayfa" onClick={handleLinkClick}>Ana Sayfa</a>
          </li>
          <li>
            <a href="#ankara-avukat-hakkimizda" onClick={handleLinkClick}>Hakkımızda</a>
          </li>
          <li>
            <a href="#ankara-avukat-calisma-alanlarimiz" onClick={handleLinkClick}>Çalışma Alanlarımız</a>
          </li>
          <li>
            <a href="#ankara-avukat-hukuki-makaleler" onClick={handleLinkClick}>Makaleler</a>
          </li>
          <li>
            <a href="#ankara-avukat-iletisim" onClick={handleLinkClick}>İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
