import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";
import logo from "../assets/law-logo.png";
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Sayfanın en başına gitmek için kullanılan fonksiyon
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Ankara Avukat Çankaya | Hukuk Hizmetleri ve Danışmanlık</title>
        <meta name="description" content="Ankara'da avukatlık hizmetleri ve hukuki danışmanlık. Ceza, aile, iş, ticaret, miras ve daha birçok alanda profesyonel hizmetler." />
        <meta name="keywords" content="Ankara avukat, Çankaya avukat, ceza hukuku, aile hukuku, iş hukuku, ticaret hukuku, Ankara hukuk danışmanı" />
        <meta property="og:title" content="Ankara Avukat Çankaya | Hukuk Hizmetleri" />
        <meta property="og:description" content="Ankara'da profesyonel avukatlık ve hukuk danışmanlık hizmetleri. Ceza, aile, iş, ticaret, miras gibi birçok alanda çözümler sunuyoruz." />
        <meta property="og:url" content="https://www.konarhukuk.com/" />
        <meta property="og:image" content="https://www.konarhukuk.com/images/logo.png" />
      </Helmet>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logopart">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          <div className={`sidebar ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-hakkimizda" onClick={() => { closeMenu(); scrollToTop(); }}>Hakkımızda</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-çalisma-alanlari" onClick={() => { closeMenu(); scrollToTop(); }}>Çalışma Alanlarımız</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-hukuki-makaleler" onClick={() => { closeMenu(); scrollToTop(); }}>Makaleler</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-iletişim-bilgileri" onClick={() => { closeMenu(); scrollToTop(); }}>İletişim</Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-hakkimizda" onClick={() => { closeMenu(); scrollToTop(); }}>Hakkımızda</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-çalisma-alanlari" onClick={() => { closeMenu(); scrollToTop(); }}>Çalışma Alanlarımız</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-tüm-makaleler" onClick={() => { closeMenu(); scrollToTop(); }}>Makaleler</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-iletişim-bilgileri" onClick={() => { closeMenu(); scrollToTop(); }}>İletişim</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
