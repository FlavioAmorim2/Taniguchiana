import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Transforme sua carreira com nossos cursos profissionalizantes
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Oferecemos uma variedade de cursos que ajudam você a alcançar seus objetivos profissionais.
        </p>
        <a
          href="#cursos"
          className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition duration-300"
        >
          Explore nossos cursos
        </a>
      </div>
      <div className="mt-8">
        <img
        //   src={}
          alt="Educação e Cursos"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;