import React from "react";
interface ScrollContextType {
    heroRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}
export declare const ScrollProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useScroll: () => ScrollContextType;
export {};
