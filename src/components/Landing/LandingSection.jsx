import "./LandingSection.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

const LandingSection = () => {
  return (
    <section id="home" className="landing-section">
      <h1>
        Hi, I'm<span> Miguel Sablan </span>
      </h1>

      <p>A Software Engineer From Miami 🌴</p>

      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/miguel-sablan"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <FaLinkedinIn size="50px" className="icon" />
        </a>

        <a
          href="https://www.github.com/miguelSablan"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <AiFillGithub size="50px" className="icon" />
        </a>

        <a
          href="mailto:miguelsablan1@outlook.com"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <IoMdMail size="50px" className="icon" />
        </a>
      </div>

      <div className="arrow-container">
        <Link to="about" smooth duration={500} style={{ cursor: "pointer" }}>
          <FaArrowDown size={"22px"} className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
};

export default LandingSection;
