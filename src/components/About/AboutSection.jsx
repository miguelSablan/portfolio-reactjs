import "./AboutSection.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>

      <h2>Skills</h2>
      <div className="skill-summary">
        <div className="skill-icon">
          <AiFillHtml5 size={120} color="#e44c26" />
        </div>
        <div className="skill-icon">
          <DiCss3 size={120} color="#1573b6" />
        </div>
        <div className="skill-icon">
          <SiJavascript size={120} color="#f0db4f" />
        </div>
        <div className="skill-icon">
          <FaGitAlt size={120} color="#F1502F" />
        </div>

        <div className="skill-icon">
          <DiMongodb size={120} color="#4db33d" />
        </div>
        <div className="skill-icon">
          <SiExpress size={120} color="white" />
        </div>
        <div className="skill-icon">
          <FaReact size={120} color="#61dafb" />
        </div>
        <div className="skill-icon">
          <IoLogoNodejs size={120} color="#83cd29" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
