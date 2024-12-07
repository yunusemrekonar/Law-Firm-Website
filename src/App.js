import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import { Helmet } from "react-helmet"; 

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Konar Hukuk Sitesi</title>
      </Helmet>
      <Navbar></Navbar>
      <Home></Home>
      <Aboutus></Aboutus>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
