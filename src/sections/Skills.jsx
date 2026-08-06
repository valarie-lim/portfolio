import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h3>Capabilities by Discipline</h3>
        <h2>Skills & Technologies</h2>
        <hr></hr>
        <p>The technologies and tools I use to build responsive, scalable, and user-friendly web applications.</p>
        <div className="skills-card-wrapper">
          <div className="skills-card">
            <h3>Frontend Development</h3>
            <div className="skills-card-pill-container">
              <p>HTML5</p>
              <p>CSS3 (Vanilla CSS)</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Next.js</p>
              <p>Responsive Design</p>
            </div>
          </div>
          <div className="skills-card">
            <h3>Backend Development</h3>
            <div className="skills-card-pill-container">
              <p>ASP.NET Web Forms</p>
              <p>Java</p>
              <p>C++</p>
              <p>VB.NET</p>
              <p>MS SQL Server</p>
              <p>SQL</p>
            </div>
          </div>
          <div className="skills-card">
            <h3>Development Tools</h3>
            <div className="skills-card-pill-container">
              <p>Git</p>
              <p>Github</p>
              <p>Visual Studio</p>
              <p>VS Code</p>
              <p>Azure</p>
              <p>Vercel</p>
              <p>SSMS</p>
              <p>IntelliJ IDEA</p>
            </div>
          </div>
          <div className="skills-card">
            <h3>Design & CMS</h3>
            <div className="skills-card-pill-container">
              <p>Figma</p>
              <p>Canva</p>
              <p>WordPress</p>
              <p>Elementor</p>
              <p>WooCommerce</p>
              <p>Webflow</p>
              <p>ClickFunnels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
