import "./ProjectSection.css";
import { Link } from "react-scroll";

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
      <h1>Projects</h1>
      <h2>Some of my work</h2>

      <div className="projects-list">
        <div className="project">
          <div className="project-image">
            <img src="https://camo.githubusercontent.com/172a7734bb205378a311ed6945e1f5c0b797c4260aaa2fa4d55aafafe5ebd233/68747470733a2f2f692e696d6775722e636f6d2f3243616b714f632e706e67253232253345" />
          </div>

          <div className="project-info">
            <h1>Portfolio</h1>
            <p>
              A portfolio website to showcase my software engineering work. My
              first portfolio website was done with pure HTML, CSS, and
              JavaScript when I first started learning web development in early
              2022. Fast foward a year later, I wanted to redo my portfolio
              using React.js
            </p>
            <a href="">
              <button>View Site</button>
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src="https://camo.githubusercontent.com/172a7734bb205378a311ed6945e1f5c0b797c4260aaa2fa4d55aafafe5ebd233/68747470733a2f2f692e696d6775722e636f6d2f3243616b714f632e706e67253232253345" />
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
              <button>View Site</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
