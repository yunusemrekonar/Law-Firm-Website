import React from 'react';
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../assets/law-logo.png";
import { Helmet } from 'react-helmet'; 
import Contactus from './Contactus';

const Contact = () => {
  return (
<>  
      <Helmet>
        <meta name="description" content="Konar Hukuk & Danismanlik ile iletişime geçin. Avukatlik ve danismanlik hizmetleri hakkinda bilgi ve iletişim için bize ulaşin." />
        <meta name="keywords" content=" Ankara en iyi avukatlari,avukat, Ankara avukat, Çankaya avukat, iletisim, hukuk, ankara danismanlik, ankara avukatlik ofisi, avukat Ayşenur Konar" />
        <meta name="author" content="Avukat Ayşenur Konar" />
      </Helmet>


    <section id="ankara-avukat-iletisim" className="contact">
      
      <div className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <p><HomeIcon/>Kocatepe Mah. Hatay Sk. Tülta İş Hanı No:6/9 Çankaya - Ankara</p>
        <p><PhoneIphoneIcon/>+90 (534) 828 38 06</p>
        <p><EmailIcon/>konarhukuk@gmail.com</p>
        <div className="contact-logopart">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

     
      <Contactus/>

     
      <div className="google-maps">
        <h2 className='google-maps-h2'>Konumumuz</h2>
        <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.012580186715!2d32.85534687580137!3d39.91873467152397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d255cc80c59e2bd%3A0x8b3c2809e4f15a9a!2sKonar%20Hukuk%20%26%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20%7C%20Ankara%20Avukatl%C4%B1k%20Hizmetleri!5e0!3m2!1str!2sde!4v1733932024465!5m2!1str!2sde" 
  width="600" 
  height="450" 
  style={{ border: '0' }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
        </div>
    </section>
    </>

  );
};

export default Contact;
