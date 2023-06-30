import "./AboutSection.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { AiFillHtml5, AiOutlineDownload } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import headshotImg from "../../assets/headshot.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 data-aos="fade-up" data-aos-offset="100">
        ABOUT ME
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
        </div>

        <img className="headshot" src={headshotImg} alt="headshot photo" />
      </div>

      {/*
      <h2 data-aos="fade-up" data-aos-offset="100">
        Skills
      </h2>
      <div className="skill-summary" data-aos="fade-up" data-aos-offset="100">
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
  */}
    </section>
  );
};

export default AboutSection;
