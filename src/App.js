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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <meta name="description" content="Ankara Konar Hukuk ve Danismanlik olarak, hukuki danismanlik ve avukatlik hizmetleri sunuyoruz. Aile hukuku, ceza hukuku ve daha fazlasi için bize başvurun." />
          <meta name="keywords" content=" Ankara avukat, Ankara boşanma avukati, ceza hukuku avukati ankara, aile hukuku avukati ankara, iş hukuku avukati ankara, ticaret hukuku avukati ankara, icra ve iflas hukuku avukati ankara, gayrimenkul hukuku avukati ankara, vergi hukuku avukati ankara, miras hukuku avukati ankara, saglik hukuku avukati ankara, fikri mülkiyet hukuku avukati ankara, uluslararasi hukuk avukati ankara, avukatlik hizmetleri avukati ankara" />
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
          <Route path="/ankara-avukat-hakkimizda" element={<Hakkimizda />} />
          <Route path="/ankara-avukat-çalisma-alanlari" element={<ServicesDetail />} />
          <Route path="/ankara-avukat-tüm-makaleler" element={<Makaleler />} />
          <Route path="/ankara-avukat-iletisim-bilgileri" element={<Iletisim />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
