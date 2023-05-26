import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition >= 50 ? "scrolled" : ""}`}>
      <a id="logo" href="#home">MIGUEL</a>
      <ul>
        <li className="nav-link">
          <a href="#home">HOME</a>
        </li>
        <li className="nav-link">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav-link">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="nav-link">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
