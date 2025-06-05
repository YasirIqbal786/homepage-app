import React from 'react';
import {Routes, Route } from 'react-router-dom';

// Pages

import Header from './components/HeaderSection/Header';
import Home from './pages/Home';
import Navbar from './components/NavbarSection/Navbar';
import BackToTop from './pages/BackToTop';
import Footer from './pages/Footer';

function App() {
  return (
      <div className="min-h-screen w-full mt-[120px] lg:mt-[120px]">
        <Header/>
         <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <BackToTop/>
        </main>
         <Footer /> 
      </div>
  );
}

export default App;