import React from 'react';
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../assets/law-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      
      <div className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <p><HomeIcon/>Kocatepe Mah. Hatay Sk. Tülta İş Hanı No:6/9 Çankaya - Ankara</p>
        <p><PhoneIphoneIcon/>+90 (534) 828 38 06</p>
        <p><EmailIcon/>konarhukuk@gmail.com</p>
        <div className="logopart">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
      </div>

     
      <div className="contact-form">
        <h2>Bizimle İletişime Geçin</h2>
        <form>
          <input type="text" placeholder="Adınız" required />
          <input type="text" placeholder="Soyadınız" required />
          <input type="tel" placeholder="Telefon Numaranız" required />
          <input type="email" placeholder="E-Posta" required />
          <textarea placeholder="Mesajınız" rows="4" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>

     
      <div className="google-maps">
        <h2>Konumumuz</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.011542219463!2d32.85799999999999!3d39.918757899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fab73b02881%3A0xcf61ae0152211317!2zVMO8bHRhIMSwxZ8gSGFuxLE!5e0!3m2!1str!2sde!4v1733443735268&zoom=20" width="600" height="800" style={{ border: "10" }} allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>
  );
};

export default Contact;
