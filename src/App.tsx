// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import HeroSection from './pages/homePage/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='font-sans'>
        <Navbar />
        <HeroSection />
        <Section
          title="Iniciativas"
          description="Descubra as iniciativas que estão mudando vidas e transformando comunidades ao redor do mundo."
          image="https://via.placeholder.com/1920x1080"
          textPosition="left"
        />
        <Section
          title="Nossa missão"
          description="Nosso compromisso é garantir que a educação seja acessível para todos, em qualquer lugar."
          image="https://via.placeholder.com/1920x1080"
          textPosition="center"
        />
        <Section
          title="Novas notícias"
          description="Fique por dentro das últimas novidades e veja como você pode participar."
          image="https://via.placeholder.com/1920x1080"
          textPosition="right"
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
