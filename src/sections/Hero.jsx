import myImg from "/assets/valarie-portfolio.webp";
import "./Hero.css";

function Hero() {
  return (
    <section id="#">
      <div className="hero-container">
        <div className="hero-left">
          <img src={myImg} alt="valarie lim avatar" />
        </div>
        <div className="hero-right">
          <h1>
            Hello, I'm <br />
            <span>Valarie Lim</span>
          </h1>
          <h2>Junior Frontend Developer</h2>
          <p>
            Passionate about creating responsive and user-focused web applications. Experienced with ASP.NET, SQL
            Server, HTML/CSS, and WordPress, with hands-on experience building projects using JavaScript, React, Vite,
            Next.js, and Tailwind CSS. Currently seeking opportunities to grow as a Junior Frontend Developer or
            Industrial Trainee.
          </p>
          <div className="btn-container">
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
            <a
              href="https://github.com/valarie-lim/portfolio/raw/main/valarie-lim-yee-hang-resume-intern.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </div>

          <ul className="social-links">
            <li>
              <a href="https://github.com/valarie-lim" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/valarielyh" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill"></i>
              </a>
            </li>
            <li>
              <a href="mailto:vallimyh92@gmail.com">
                <i className="ri-mail-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
