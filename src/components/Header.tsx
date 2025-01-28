import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/src/assets/logo/cropped-cropped-tanicuchiana_sem_texto-1-100x100.png " alt="Logo" className=" " />
            <span className="text-green-700 font-bold text-3xl mt-2">
              ONG Taniguchiana
            </span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Início
            </a>
            <a
              href="#consultoria"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Consultoria
            </a>
            <a
              href="#sobre-nos"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Sobre Nós
            </a>
            <a
              href="#atuacao"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Atuação
            </a>
            <a
              href="#equipe"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Equipe
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Contato
            </a>
          </div>
          {/* Button */}
          <div className="hidden md:block">
            <a
              href="#doar"
              className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800"
            >
              Doar
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
