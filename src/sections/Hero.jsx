import myImg from "/assets/valarie-portfolio.png";
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
          <h2>Junior Full-Stack Web Developer</h2>
          <p>
            Passionate about creating responsive and user-focused web applications. Experienced with ASP.NET, React,
            Vite, Next.js, MERN stack, JavaScript, SQL Server, HTML/CSS, and WordPress. Currently seeking a Junior Web
            Developer or Software Developer role.
          </p>
          <div className="btn-container">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a
              href="https://github.com/valarielyh/your-repo/raw/main/resume.pdf"
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
