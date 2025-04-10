import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import doe from '../assets/imgs/doee.jpg';
// interface AboutUsProps {
//   aboutRef?: React.RefObject<HTMLDivElement>;
// }
const Doe = () => {
    return (_jsxs("div", { className: "relative w-full max-w-7xl mx-auto mt-16 py-24 px-6 text-white rounded-lg bg-fixed bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%] before:absolute before:inset-0 before:bg-black before:opacity-50", style: {
            backgroundImage: `url(${doe})`,
        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-50 rounded-lg " }), _jsxs("div", { className: " relative max-w-4xl mx-auto text-center ", children: [_jsx("h3", { className: "text-lg font-semibold uppercase tracking-wide ", children: "Quer fazer a diferen\u00E7a?" }), _jsx("h2", { className: " relative text-4xl font-bold my-4  ", children: "Ajude-nos a arrecadar fundos para nossas causas humanit\u00E1rias" }), _jsx("button", { className: "bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all relative z-10 animate-pulse-slow", children: _jsx("a", { href: "https://www.asaas.com/c/225559079703", target: '_blank', children: "Doar" }) })] })] }));
};
export default Doe;
