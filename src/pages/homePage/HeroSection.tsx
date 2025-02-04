import React from "react";
import "../../styles/pages.css";
import PlanoDeInclusao from "../../assets/imgs/PlanoDeInclusao.jpg";


const HeroSection = () => {
  return (
    <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center opacity-60"
      style={{
        backgroundImage: `url(${PlanoDeInclusao})`,
      }}>

      <h1 className="text-5xl font-bold mb-4 uppercase">
        Educação grátis e acessível
      </h1>
      <p className="text-xl mb-6"> PARA TODOS </p>
      <button className="bg-blue-500 px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all">
        Inscreva-se
      </button>
    </section>
  );
};

export default HeroSection;
