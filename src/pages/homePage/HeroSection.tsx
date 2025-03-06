import PlanoDeInclusao from "../../assets/imgs/PlanoDeInclusao.jpg";
import "../../styles/herosection.css";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-10 flex flex-col justify-center items-center text-white text-center overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%] bg-fixed"
        style={{ backgroundImage: `url(${PlanoDeInclusao})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center" style={{ top: "-10%", transform: "translateY(-30%)" }}>
        <h1 className="text-4xl font-bold uppercase text-white-700">
          Educação sem barreiras.
        </h1>

        <p className="text-2xl mb-6 font-bold pt-1">
          Aprenda, cresça e transforme seu futuro
        </p>

        <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse-slow">
          <a href="https://forms.gle/rpNWpjVsaej1FvqWA" target="_blank">Inscreva-se</a>
        </button>
  </div>
    </section>
  );
};

export default HeroSection;