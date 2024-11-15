import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link className="logo" to="home" smooth duration={500}>
        MIGUEL
      </Link>

      {/* Desktop navigation links */}
      <ul className="nav-links">
        <Link
          className="nav-link"
          to="home"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
        >
          HOME
        </Link>
        <Link
          className="nav-link"
          to="about"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
        >
          ABOUT
        </Link>
        <Link
          className="nav-link"
          to="projects"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
        >
          PROJECTS
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
        >
          CONTACT
        </Link>
      </ul>

      {/* Burger menu icon for mobile */}
      <div className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile navigation links */}
      <ul className={`mobile-nav-links ${menuOpen ? "open" : ""}`}>
        <Link
          className="nav-link"
          to="home"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          className="nav-link"
          to="about"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
          onClick={() => setMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          className="nav-link"
          to="projects"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
          onClick={() => setMenuOpen(false)}
        >
          PROJECTS
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth
          spy={true}
          duration={500}
          activeClass="active"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
