import "./AboutSection.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { AiFillHtml5, AiOutlineDownload } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiExpress, SiSwift } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import headshotImg from "../../assets/headshot.jpeg";
import resumePDF from "../../assets/Miguel_Sablan_Resume.pdf";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 data-aos="fade-up" data-aos-offset="100">
        ABOUT <span>ME</span>
      </h1>

      <div className="about-container" data-aos="fade-up" data-aos-offset="100">
        <div className="about-bio">
          <p className="about-text">
            I am 22 years old and recently graduated from Florida International
            University with a Bachelor of Science in Computer Science. I am very
            passionate about creating interesting applications and enjoy
            learning the latest technologies. My hobbies include playing guitar,
            playing video games, collecting records, and reading manga.
          </p>

          <p className="about-text">Check out some of my latest projects.</p>

          <a className="resume-button" href={resumePDF} target="_blank">
            <button className="button">Resume</button>
          </a>
        </div>

        <img className="headshot" src={headshotImg} alt="headshot photo" />
      </div>

      <div className="skill-summary" data-aos="fade-up" data-aos-offset="100">
        <div className="skill">
          <p className="skill-title">HTML</p>
          <AiFillHtml5 size={120} color="#e44c26" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">CSS</p>
          <DiCss3 size={120} color="#1573b6" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">JavaScript</p>
          <SiJavascript size={120} color="#f0db4f" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">Git</p>
          <FaGitAlt size={120} color="#F1502F" className="skill-img" />
        </div>

        <div className="skill">
          <p className="skill-title">MongoDB</p>
          <DiMongodb size={120} color="#4db33d" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">Express</p>
          <SiExpress size={120} color="white" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">React</p>
          <FaReact size={120} color="#61dafb" className="skill-img" />
        </div>
        <div className="skill">
          <p className="skill-title">Node</p>
          <IoLogoNodejs size={120} color="#83cd29" className="skill-img" />
        </div>

        <div className="skill">
          <p className="skill-title">Swift</p>
          <SiSwift size={120} color="#F1502F" className="skill-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
