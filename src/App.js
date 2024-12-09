import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Blogs from './components/Blogs';
import { Helmet } from "react-helmet";   



function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Ankara Konar Hukuk ve Danışmanlık olarak, hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz. Aile hukuku, ceza hukuku ve daha fazlası için bize başvurun." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ankara Konar Hukuk & Danışmanlık</title>
      </Helmet>
      <Navbar></Navbar>
      <Home></Home>
      <Aboutus></Aboutus>
      <Services/>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
 
  );
}


export default App;
