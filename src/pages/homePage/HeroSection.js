import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PlanoDeInclusao from "../../assets/imgs/PlanoDeInclusao.jpg";
import "../../styles/herosection.css";
const HeroSection = () => {
    return (_jsxs("section", { className: "relative min-h-screen pt-10 flex flex-col justify-center items-center text-white text-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%] bg-fixed", style: { backgroundImage: `url(${PlanoDeInclusao})` } }), _jsx("div", { className: "absolute inset-0 bg-black opacity-50" }), _jsxs("div", { className: "relative z-10 text-center", style: { top: "-10%", transform: "translateY(-30%)" }, children: [_jsx("h1", { className: "text-4xl font-bold uppercase text-white-700", children: "Educa\u00E7\u00E3o sem barreiras." }), _jsx("p", { className: "text-2xl mb-6 font-bold pt-1", children: "Aprenda, cres\u00E7a e transforme seu futuro" }), _jsx("button", { className: "bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse-slow", children: _jsx("a", { href: "https://forms.gle/rpNWpjVsaej1FvqWA", target: "_blank", children: "Inscreva-se" }) })] })] }));
};
export default HeroSection;
