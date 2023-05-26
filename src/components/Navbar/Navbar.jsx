import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
      <Link id="logo" to="home" smooth duration={500}>
        MIGUEL
      </Link>
      <ul>
        <li className="nav-link">
          <Link to="home" smooth spy={true} duration={500} activeClass="active">
            HOME
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="about"
            smooth
            spy={true}
            duration={500}
            activeClass="active"
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="projects"
            smooth
            spy={true}
            duration={500}
            activeClass="active"
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="contact"
            smooth
            spy={true}
            duration={500}
            activeClass="active"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
