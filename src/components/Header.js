import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useScroll } from "../context/ScrollContext";
import "../styles/navigation.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    // const {contactRef, scrollToSection } = useScroll(); //aboutRef heroRef
    return (_jsx("header", { className: "bg-white shadow sticky top-0 z-50 flex text-xl shadow-xl rounded-lg absolute", children: _jsxs("div", { className: "mx-auto px-4 py-2 w-full flex justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: "/src/assets/logo/logo.png", alt: "Logo", className: "pl-11 navbar-logo" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-green-700 font-bold text-xl mt-2", children: "ONG Taniguchiana" }), _jsx("span", { className: "text-green-700 text-base", children: "Ser diferente \u00E9 ser eficiente." })] })] }), _jsx("div", { className: "hidden md:flex space-x-6 items-center mr-24 mt-3", children: _jsxs("div", { className: "nav-links", children: [_jsx(Link, { to: "/", className: "nav-links", children: "In\u00EDcio" }), _jsx(Link, { to: "/about", className: "nav-links", children: "Sobre n\u00F3s" })] }) })] }) }));
};
export default Navbar;
