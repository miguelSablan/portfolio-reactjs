import "./LandingSection.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

const LandingSection = () => {
  return (
    <section id="home" className="landing-section">
      <h1>Hi, I'm Miguel Sablan</h1>

      <p>A Software Engineer From Miami 🌴</p>

      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/miguel-sablan"
          target="_blank"
          className="icon-container"
        >
          <FaLinkedinIn size="50px" />
        </a>

        <a
          href="https://www.github.com/miguelSablan"
          target="_blank"
          className="icon-container"
        >
          <AiFillGithub size="50px" />
        </a>

        <a
          href="mailto:msabl005@fiu.edu"
          target="_blank"
          className="icon-container"
        >
          <IoMdMail size="50px" />
        </a>
      </div>

      <div className="arrow">
        <Link to="projects" smooth duration={500} style={{ cursor: "pointer" }}>
          <FaArrowDown size={"22px"} />
        </Link>
      </div>
    </section>
  );
};

export default LandingSection;
