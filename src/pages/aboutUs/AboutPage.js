import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { history } from "../../context/history";
const AboutUs = ({ aboutRef }) => {
    return (_jsxs("div", { ref: aboutRef, className: "bg-gray-50 py-16 flex flex-col items-center", children: [_jsx("h2", { className: "text-3xl font-bold text-green-700 text-center mb-6", children: "Nossa Hist\u00F3ria" }), _jsx("div", { className: "w-full max-w-6xl px-8", children: history.map((item, index) => (_jsxs("div", { className: "grid grid-cols-12 gap-x-8 items-start mb-10", children: [_jsx("h3", { className: "col-span-3 text-lg font-semibold text-green-900 text-right", children: item.ano }), _jsx("div", { className: "col-span-9 text-gray-700 text-left leading-relaxed border-l-2 border-green-700 pl-6", children: item.texto.map((paragrafo, idx) => (_jsx("p", { className: "mb-4", children: paragrafo }, idx))) })] }, index))) })] }));
};
export default AboutUs;
