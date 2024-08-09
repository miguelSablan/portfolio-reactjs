export const Project = ({ imageSrc, title, description, techStack, link, buttonText }) => (
  <div className="project" data-aos="fade-up" data-aos-offset="100">
    <div className="project-image">
      <img src={imageSrc} alt={`${title} Preview Image`} />
    </div>

    <div className="project-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="button">{buttonText}</button>
      </a>
    </div>
  </div>
);
