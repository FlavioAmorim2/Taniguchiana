import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs/AboutPage";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
    return (_jsx(ScrollProvider, { children: _jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "font-sans", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUs, {}) })] }), _jsx(Contact, {}), _jsx(Footer, {})] })] }) }));
};
export default App;
