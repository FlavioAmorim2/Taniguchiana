import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HeroSection from "./HeroSection";
import MainLayout from "./MainLayout";
import Doe from "../../components/Doe";
// import AboutUs from "../aboutUs/AboutPage";
// import Contact from "../Contact/Contact";
// import { useScroll } from "../../context/ScrollContext";
const HomePage = () => {
    // const { contactRef } = useScroll(); //aboutRef heroRef
    return (_jsxs("div", { children: [_jsx(HeroSection, {}), _jsx(MainLayout, {}), _jsx(Doe, {})] }));
};
export default HomePage;
