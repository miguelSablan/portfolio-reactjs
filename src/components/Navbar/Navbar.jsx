import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    console.log("Navbar Toggled");
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className={`navbar ${scrollPosition ? "scrolled" : ""}`}>
      <Link class="logo" to="home" smooth duration={500}>
        MIGUEL
      </Link>
      {toggleMenu && (
        <ul className="nav-links">
          <li className="nav-link">
            <Link
              to="home"
              smooth
              spy={true}
              duration={500}
              activeClass="active"
            >
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
      )}
      <div className="burger-menu" onClick={toggleNav}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
