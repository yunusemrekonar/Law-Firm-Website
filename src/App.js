import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
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
