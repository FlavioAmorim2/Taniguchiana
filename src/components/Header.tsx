import { useScroll } from "../context/ScrollContext";
import "../styles/navigation.css";

const Navbar: React.FC = () => {
  const { heroRef, aboutRef, contactRef, scrollToSection } = useScroll();

  return (
    <header className="bg-white shadow sticky top-0 z-50 flex text-xl shadow-xl rounded-lg absolute">
      <div className="mx-auto px-4 py-2 w-full flex justify-between">
        <div className="flex items-center">
          <img src="/src/assets/logo/logo.png" alt="Logo" className="pl-11 navbar-logo" />
          <div className="flex flex-col">
            <span className="text-green-700 font-bold text-xl mt-2">ONG Taniguchiana</span>
            <span className="text-green-700 text-base">Ser diferente é ser eficiente.</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 items-center mr-24 mt-3">
          <div className="nav-links">
            <button onClick={() => scrollToSection(heroRef)}> Início </button>
            <button onClick={() => scrollToSection(aboutRef)}> Sobre Nós </button>
            <button onClick={() => scrollToSection(contactRef)}> Contato </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
