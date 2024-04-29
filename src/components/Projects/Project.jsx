export const Project = ({ imageSrc, title, description, link, buttonText }) => (
  <div className="project" data-aos="fade-up" data-aos-offset="100">
    <div className="project-image">
      <img src={imageSrc} alt={`${title} Preview Image`} />
    </div>

    <div className="project-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="button">{buttonText}</button>
      </a>
    </div>
  </div>
);
