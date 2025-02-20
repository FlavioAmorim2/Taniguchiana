import { Link } from 'react-router-dom';

import "../styles/navigation.css";
// import logo from "../assets/logo/cropped-cropped-tanicuchiana_sem_texto-1-100x100.png";
const Navbar = () => {
  const simpleHeader = (
    <header className="bg-white shadow sticky top-0 z-50 flex text-xl top-0 shadow-xl ">
      <div className="mx-auto px-1 py-1 w-full ">
        <div className="flex justify-between w-full">

          <div className="flex items-center">
            <img
              src="/src/assets/logo/cropped-cropped-tanicuchiana_sem_texto-1-100x100.png "
              alt="Logo"
              className="pl-11"
            />
              <div  className="flex flex-col">
                <span className="text-green-700 font-bold text-3xl mt-2"> ONG Taniguchiana </span>
                <span className="text-green-700 "> Ser diferente é ser eficiente. </span>
              </div>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center mr-24 mt-3">
            <div className="nav-links">
              <Link to="/" >
                Início
              </Link>

              <Link to="/" >
                Cursos
              </Link>

              <Link to="/" >
                Modalidades
              </Link>

              <Link to="/about" >
                Sobre Nós
              </Link>

              <Link to="/contact" >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
  return simpleHeader;
};

export default Navbar;
