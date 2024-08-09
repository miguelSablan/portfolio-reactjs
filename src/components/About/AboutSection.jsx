import "./AboutSection.css";
import { FaGitAlt, FaPython, FaReact, FaDownload } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJava, DiMongodb } from "react-icons/di";
import {
  SiJavascript,
  SiExpress,
  SiSwift,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import headshotImg from "../../assets/headshot.jpeg";
import resumePDF from "../../assets/Miguel_Sablan_Resume.pdf";

const skillsData = [
  { title: "Java", Icon: DiJava, color: "orange" },
  { title: "HTML", Icon: AiFillHtml5, color: "#e44c26" },
  { title: "CSS", Icon: DiCss3, color: "#1573b6" },
  { title: "JavaScript", Icon: SiJavascript, color: "#f0db4f" },
  { title: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { title: "Python", Icon: FaPython, color: "#f0db4f" },
  { title: "Swift", Icon: SiSwift, color: "#F1502F" },
  { title: "PostgreSQL", Icon: SiPostgresql, color: "#0064a5" },

  { title: "React", Icon: FaReact, color: "#61dafb" },
  { title: "Next", Icon: SiNextdotjs, color: "#white" },
  { title: "Express", Icon: SiExpress, color: "white" },
  { title: "Node", Icon: IoLogoNodejs, color: "#83cd29" },
  { title: "TailwindCSS", Icon: SiTailwindcss, color: "#83cd29" },

  { title: "Git", Icon: FaGitAlt, color: "#F1502F" },
  { title: "MongoDB", Icon: DiMongodb, color: "#4db33d" },
];

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
            playing video games, collecting records, and learning new languages.
          </p>

          <p className="about-text">Check out some of my latest projects.</p>

          <a href={resumePDF} target="_blank">
            <button className="resume-button">
              Download Resume <FaDownload />
            </button>
          </a>
        </div>

        <img className="headshot" src={headshotImg} alt="headshot photo" />
      </div>

      <h2 data-aos="fade-up" data-aos-offset="100" className="skills-title">
        My Skills
      </h2>

      <div className="skill-summary" data-aos="fade-up" data-aos-offset="100">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <p className="skill-title">{skill.title}</p>
            <skill.Icon size={120} color={skill.color} className="skill-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
