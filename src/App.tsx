import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ScrollProvider } from "./context/ScrollContext";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs/AboutPage";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => { //: React.FC 
  return (
    <ScrollProvider>
      <Router>
      <ScrollToTop />
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </Router>
    </ScrollProvider>
  );
};

export default App;
