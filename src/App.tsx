import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ScrollProvider } from "./context/ScrollContext";
import Navbar from "./components/Header";
import MainLayout from "./pages/homePage/MainLayout";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs/AboutPage";
import HeroSection from "./pages/homePage/HeroSection";
import HomePage from "./pages/homepage/HomePage"
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  return (
    <ScrollProvider>
      <Router>
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ScrollProvider>
  );
};

export default App;
