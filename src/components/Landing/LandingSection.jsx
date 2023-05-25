import "./LandingSection.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const LandingSection = () => {
  return (
    <section id="home" className="landing-section">
      <h1>Hi! I'm Miguel Sablan.</h1>

      <p>A Full-Stack Web Developer</p>

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
    </section>
  );
};

export default LandingSection;
