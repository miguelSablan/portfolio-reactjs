import "./ProjectSection.css";
import CodeNook from "../../assets/CodeNook.png";
import Portfolio from "../../assets/PortfolioExample.png";
import Appli from "../../assets/DashboardExample.png";
import Recyclepedia from "../../assets/Recyclepedia.gif";
import AniMedia from "../../assets/AniMedia.png";
import { Project } from "./Project";

const projects = [
  {
    imageSrc: CodeNook,
    title: "CodeNook",
    description:
      "A full stack platform designed to connect developers for project collaboration, enabling them to find and join projects that match their skills and interests.",
    techStack: [
      "Next",
      "TailwindCSS",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Vercel",
    ],
    link: "https://codenook.vercel.app/",
  },
  {
    imageSrc: Portfolio,
    title: "Portfolio",
    description:
      "A portfolio website to showcase my software engineering work. My first portfolio website was done with pure HTML, CSS, and JavaScript when I first started learning web development in early 2022. Fast forward a year later, I wanted to redo my portfolio using React.js.",
    techStack: ["React", "JavaScript", "Netlify"],
    link: "",
  },
  {
    imageSrc: Appli,
    title: "Appli",
    description:
      "Over a span of 9 weeks in the INIT Build program, our team of 6 people developed a full-stack web application using the MERN Stack to help Computer Science students track and manage their internship/job applications. It also provides resources in preparing for behavioral and technical interviews.",
    techStack: ["React", "Express", "MongoDB", "Netlify"],
    link: "https://appli-today.netlify.app/",
  },
  {
    imageSrc: Recyclepedia,
    title: "Recyclepedia",
    description:
      "An iOS app I co-developed with two other students for the non-profit organization Dream in Green. Recyclepedia helps users in South Florida locate nearby recycling centers and learn about recyclable materials.",
    techStack: ["Swift", "SwiftUI", "Firebase"],
    link: "https://github.com/capaldo/Recyclepedia",
  },
  {
    imageSrc: AniMedia,
    title: "AniMedia",
    description:
      "A prototype social media application for anime fans to look up details for any anime, get the latest news on anime, post media content, and chat with other users.",
    techStack: ["Swift", "Firebase", "Jikan API"],
    link: "https://github.com/miguelSablan/AniMedia",
  },
];

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
        {projects.map((project, index) => (
          <Project
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
