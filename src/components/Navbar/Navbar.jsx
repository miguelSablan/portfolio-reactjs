import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
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
