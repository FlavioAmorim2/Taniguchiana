import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef } from "react";
const ScrollContext = createContext(null);
export const ScrollProvider = ({ children }) => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (_jsx(ScrollContext.Provider, { value: { heroRef, aboutRef, contactRef, scrollToSection }, children: children }));
};
export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};
