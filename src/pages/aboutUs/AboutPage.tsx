import React from 'react';

const AboutUs = () => {
  return (
    <div className="animate-slide-in-left bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
          <p className="text-gray-700 mb-6">
            Somos uma organização dedicada a transformar vidas e promover mudanças positivas nas comunidades.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Imagem sobre nós"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
