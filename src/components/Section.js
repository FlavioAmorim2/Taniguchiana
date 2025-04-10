import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Section = ({ title, description, image, textPosition }) => {
    const flexDirection = textPosition === "right" ? "flex-row-reverse" : "flex-row";
    return (_jsxs("section", { className: `flex ${flexDirection} bg-gray-100 p-6 rounded-lg shadow-md`, children: [_jsx("div", { className: "w-1/2", children: _jsx("img", { src: image, alt: title, className: "w-full h-auto rounded-md shadow-md" }) }), _jsxs("div", { className: "w-1/2 bg-white p-6 rounded-md shadow-lg", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: title }), Array.isArray(description) ? (_jsx("ul", { className: " list-inside text-gray-700 space-y-2", children: description.map((item, index) => (_jsx("li", { children: item }, index))) })) : (_jsx("p", { className: "text-gray-700 mb-4", children: description }))] })] }));
};
export default Section;
