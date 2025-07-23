import React from 'react';
import './App.css';
import './style.css'; 
import Services from './components/Services';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { customStyles } from './components/Color';
import Hero from './components/Hero';
import About from './components/About';
import Header from './components/Header';


function App() {
  
  return (
    <React.Fragment>
      <style>{customStyles}</style>
      <Header />
      <Hero />
      <Services />
      <About />
      <Feedback />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
