import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import logo from "../assets/logo/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50 text-xl shadow-xl rounded-lg">
      <div className="mx-auto px-4 py-2 w-full flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="pl-4 navbar-logo" />
          <div className="flex flex-col ml-2">
            <span className="text-green-700 font-bold text-base">ONG Taniguchiana</span>
            <span className="text-green-700 text-sm">Ser diferente é ser eficiente.</span>
          </div>
        </div>

        <button
          className="md:hidden focus:outline-none text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

           <div className="hidden md:flex space-x-6 items-center mr-24 mt-3">
             <div className="nav-links">
                <Link to={"/"} className="nav-links">Início</Link>
                <Link to={"/Courses"} className="nav-links">Cursos</Link>
                <Link to={"/Team"} className="nav-links">Equipe</Link>
                <Link to={"/about"} className="nav-links">Sobre nós</Link>
           </div>
         </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center pb-4 space-y-2">
          <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Início</Link>
          <Link to="/Courses" className="nav-links" onClick={() => setIsOpen(false)}>Cursos</Link>
          <Link to="/Team" className="nav-links" onClick={() => setIsOpen(false)}>Equipe</Link>
          <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>Sobre nós</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

