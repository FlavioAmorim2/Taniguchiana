import React from "react";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
      }}
    >
      <h1 className="text-5xl font-bold mb-4 uppercase">
        Educação grátis e acessível
      </h1>
      <p className="text-xl mb-6">Para todo mundo</p>
      <button className="bg-blue-500 px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all">
        Nos ajude a crescer
      </button>
    </section>
  );
};

export default HeroSection;
