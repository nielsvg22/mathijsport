import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Cards from './Components/Cards';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
       
        <Cards/>


        
      </Router>
    </>
  );
}

export default App;