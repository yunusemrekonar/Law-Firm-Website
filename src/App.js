import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';  
import Hakkimizda from './components/Hakkimizda';
import ServicesDetail from './components/ServicesDetail'; 
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail'; 
import Makaleler from './components/Makaleler';
import Iletisim from './components/Iletisim';
import { Helmet } from "react-helmet";   
import './components/whatsapp.css'; 
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <FloatingWhatsApp
          phoneNumber="+90 506 835 18 93" 
          chatMessage="Merhaba, size nasıl yardımcı olabiliriz?" 
          accountName="Konar Hukuk & Danışmanlık" 
          placeholder="Lütfen mesajınızı iletiniz"
          statusMessage="Aktif"
          allowClickAway
          notification
        />


        <Helmet>
          <meta name="description" content="Ankara Konar Hukuk ve Danışmanlık olarak, hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz. Aile hukuku, ceza hukuku ve daha fazlası için bize başvurun." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Ankara Konar Hukuk & Danışmanlık</title>
        </Helmet>


        <Navbar /> 
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Aboutus />
                <Services />
                <Blogs />
                <Contact />
              </>
            } 
          />
          <Route
            path='ankara-avukat-hakkimizda'
            element={<Hakkimizda/>}
          />
          <Route 
            path="ankara-avukat-çalisma-alanlari" 
            element={<ServicesDetail />}
          />
          <Route 
            path="ankara-avukat-tüm-makaleler" 
            element={<Makaleler />}
          />
          <Route 
            path="ankara-avukat-iletişim-bilgileri" 
            element={<Iletisim />}
          />
          <Route 
            path="/blogs/:id" 
            element={<BlogDetail />}
          />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
