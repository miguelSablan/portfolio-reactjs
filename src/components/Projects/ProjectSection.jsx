import "./ProjectSection.css";
import Portfolio from "../../assets/PortfolioExample.png";
import Appli from "../../assets/DashboardExample.png";
import AniMedia from "../../assets/AniMedia.png";
import Weezle from "../../assets/weezle.png";
import { Project } from "./Project";

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
        <Project
          imageSrc={Weezle}
          title="Weezle"
          description="For the 30 year anniversary of one of my favorite albums, I made a
          Wordle clone themed around Weezer's Blue album. Players guess song lyrics from the album in infinite rounds."
          link="https://weezle.netlify.app/"
          buttonText="View Site"
        />
        <Project
          imageSrc={Portfolio}
          title="Portfolio"
          description="A portfolio website to showcase my software engineering work. My first portfolio website was done with pure HTML, CSS, and JavaScript when I first started learning web development in early 2022. Fast forward a year later, I wanted to redo my portfolio using React.js."
          link=""
          buttonText="View Site"
        />
        <Project
          imageSrc={Appli}
          title="Appli"
          description="Over a span of 9 weeks in the INIT Build program, our team of 6 people developed a full-stack web application using the MERN Stack to help Computer Science students track and manage their internship/job applications. It also provides resources in preparing for behavioral and technical interviews."
          link="https://appli-today.netlify.app/"
          buttonText="View Site"
        />
        <Project
          imageSrc={AniMedia}
          title="AniMedia"
          description="A prototype social media application for anime fans to look up details for any anime, get the latest news on anime, post media content, and chat with other users."
          link="https://github.com/miguelSablan/AniMedia"
          buttonText="View Repo"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
