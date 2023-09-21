import "./ProjectSection.css";
import { Link } from "react-scroll";
import Portfolio from "../../assets/PortfolioExample.png";
import AppliImg from "../../assets/DashboardExample.png";
import AniMedia from "../../assets/AniMedia.png";

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
      <h1 data-aos="fade-up" data-aos-offset="100">
        MY <span>PROJECTS</span>
      </h1>
      <h2 data-aos="fade-up" data-aos-offset="100">
        Some of my work
      </h2>

      <div className="projects-list">
        <div className="project" data-aos="fade-up" data-aos-offset="100">
          <div className="project-image">
            <img src={Portfolio} alt="Portfolio Preview Image" />
          </div>

          <div className="project-info">
            <h1>Portfolio</h1>
            <p>
              A portfolio website to showcase my software engineering work. My
              first portfolio website was done with pure HTML, CSS, and
              JavaScript when I first started learning web development in early
              2022. Fast foward a year later, I wanted to redo my portfolio
              using React.js.
            </p>
            <a href="">
              <button className="button">View Site</button>
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-offset="100">
          <div className="project-image">
            <img src={AppliImg} alt="Appli Preview Image" />
          </div>

          <div className="project-info">
            <h1>Appli</h1>
            <p>
              Over a span of 9-weeks in the INIT Build program, our team of 6
              people developed a full-stack web application using the MERN Stack
              to help Computer Science students track and manage their
              internship/job applications. It also provides resources in
              preparing for behavioral and technical interviews.
            </p>

            <a href="https://appli-today.netlify.app/" target="_blank">
              <button className="button">View Site</button>
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-up" data-aos-offset="100">
          <div className="project-image">
            <img src={AniMedia} alt="AniMedia Preview Image" />
          </div>

          <div className="project-info">
            <h1>AniMedia</h1>
            <p>
              A prototype social media application for anime fans to look up
              details for any anime, get the latest news on anime, post media
              content, and chat with other users.
            </p>

            <a href="https://github.com/miguelSablan/AniMedia" target="_blank">
              <button className="button">View Repo</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
