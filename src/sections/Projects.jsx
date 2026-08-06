import "./Projects.css";
import projectsData from "../data/projects.json";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h3>My Builds and Experiments</h3>
        <h2>Featured Projects</h2>
        <hr></hr>
        <p>
          A selection of projects that showcase my experience in full-stack development, responsive web design, and
          software engineering.
        </p>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="projects-card" key={project.id}>
              <div className="card-header">
                <h3>{project.name}</h3>
              </div>
              <div className="card-body">
                <div className="left-column">
                  <h4>{project.type}</h4>
                  <p>{project.desc}</p>
                  <h4>Tech Stack</h4>
                  <div className="tech-stack-pill">
                    {project.stack.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </div>
                  <h4>Highlights</h4>
                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="btn-container">
                    {project.demo && (
                      <a href={project.demo} className="btn btn-primary">
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} className="btn btn-primary">
                        Github
                      </a>
                    )}
                  </div>
                </div>
                <div className="right-column">
                  <img src={project.image} alt={project.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
