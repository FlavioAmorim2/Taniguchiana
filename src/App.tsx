// // import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Header';
// import HeroSection from './pages/homePage/HeroSection';
// import MainLayout from './pages/homePage/MainLayout'
// import Footer from './components/Footer';


// function App() {
//   return (
//     <div>
//       <div className='font-sans'>
//         <Navbar />
//         <HeroSection />
//         <MainLayout />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import MainLayout from './pages/homePage/MainLayout';
import Footer from './components/Footer';
import AboutUs from './pages/aboutUs/AboutPage'; // Corrigir o caminho se necessário
import HeroSection from './pages/homePage/HeroSection';

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <MainLayout />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

