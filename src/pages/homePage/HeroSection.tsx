import PlanoDeInclusao from "../../assets/imgs/PlanoDeInclusao.jpg";
import "../../styles/herosection.css";


const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%] bg-fixed"
        style={{ backgroundImage: `url(${PlanoDeInclusao})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex border rounded-full border-indigo-500 justify-center items-center bg-white p-3 relative z-10">
        <h1 className="text-5xl font-bold uppercase relative z-10 text-green-700 text-center">
          Educação grátis e acessível
        </h1>
      </div>

      <p className="text-xl mb-6 relative z-10 font-bold pt-1">PARA TODOS</p>

      <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all relative z-10 animate-pulse-slow">
        Inscreva-se
      </button>
    </section>
  );
};

export default HeroSection;