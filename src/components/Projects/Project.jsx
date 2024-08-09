import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Project = ({ imageSrc, title, description, techStack, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="project"
    data-aos="fade-up"
    data-aos-offset="100"
  >
    <div className="project-image">
      <img src={imageSrc} alt={`${title} Preview Image`} />
    </div>

    <div className="project-info">
      <div className="project-title">
        <h1>{title}</h1>
        <FaArrowUpRightFromSquare className="icon-link" />
      </div>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);
