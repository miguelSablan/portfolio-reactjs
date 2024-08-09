import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./components/Landing/LandingSection";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import MouseCursor from "./components/MouseCursor/MouseCursor";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });

    window.addEventListener("load", Aos.refresh);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <MouseCursor />
    </div>
  );
};

export default App;
