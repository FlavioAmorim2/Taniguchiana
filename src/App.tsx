// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import HeroSection from './pages/homePage/HeroSection';
import MainLayout from './pages/homePage/MainLayout'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='font-sans'>
        <Navbar />
        <HeroSection />
        <MainLayout />
        <Footer />
      </div>
    </div>
  )
}

export default App
