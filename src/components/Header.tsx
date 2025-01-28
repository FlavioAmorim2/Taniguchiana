import React from "react";
import "../styles/navigation.css";

const Navbar = () => {
  const simpleHeader = (
    <header className="bg-white shadow sticky top-0 z-50 flex text-xl top-0 shadow-xl ">
      <div className="mx-auto px-1 py-1 w-full ">
        <div className="flex justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/assets/logo/cropped-cropped-tanicuchiana_sem_texto-1-100x100.png "
              alt="Logo"
              className="pl-11"
            />
            <span className="text-green-700 font-bold text-3xl mt-2">
              ONG Taniguchiana
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center mr-24 mt-3">
            <div className="nav-links">

              <a href="" className="">
                Início
              </a>

              <a href="#cursos" className="">
                Cursos
              </a>

              <a href="#modalidades" className="">
                Modalidades
              </a>

              <a href="#sobre-nos" className="">
                Sobre Nós
              </a>

              <a href="#contato" className="">
                Contato
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
  return simpleHeader;
};

export default Navbar;
