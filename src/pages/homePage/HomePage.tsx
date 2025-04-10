import HeroSection from "./HeroSection";
import MainLayout from "./MainLayout";
import Doe from "../../components/Doe"
// import AboutUs from "../aboutUs/AboutPage";
// import Contact from "../Contact/Contact";
// import { useScroll } from "../../context/ScrollContext";

const HomePage: React.FC = () => {
  // const { contactRef } = useScroll(); //aboutRef heroRef

  return (
    <div>
      <HeroSection />
      <MainLayout />
      <Doe />
      {/* <div ref={contactRef}>
        <Contact />
      </div> */}
    </div>
  );
};

export default HomePage;