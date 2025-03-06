import React from "react";
import HeroSection from "./HeroSection";
import MainLayout from "./MainLayout";
import AboutUs from "../aboutUs/AboutPage";
import Contact from "../Contact/Contact";
import { useScroll } from "../../context/ScrollContext";

const HomePage: React.FC = () => {
  const { heroRef, aboutRef, contactRef } = useScroll();

  return (
    <div>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <MainLayout />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;