import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./components/Landing/LandingSection";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
