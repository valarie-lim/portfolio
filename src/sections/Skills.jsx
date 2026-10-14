import "./Skills.css";

const skillsData = [
  {
    category: "Frontend Development",
    list: ["HTML5", "CSS3 (Vanilla CSS)", "JavaScript", "React", "Next.js", "Responsive Design"],
  },
  {
    category: "Backend Development",
    list: ["ASP.NET Web Forms", "Java", "c++", "VB.NET", "MS SQL Server", "SQL"],
  },
  {
    category: "Development Tools",
    list: ["Git", "Github", "Visual Studio", "VS Code", "Azure", "Vercel", "Netlify", "SSMS", "IntelliJ IDEA"],
  },
  {
    category: "Design & CMS",
    list: ["Figma", "Canva", "WordPress", "Elementor", "WooCommerce", "Webflow", "Shopify", "ClickFunnels"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h3>Capabilities by Discipline</h3>
        <h2>Skills & Technologies</h2>
        <hr></hr>
        <p>The technologies and tools I use to build responsive, scalable, and user-friendly web applications.</p>
        <div className="skills-card-wrapper">
          {skillsData.map((skill) => (
            <div className="skills-card" key={skill.category}>
              <h3>{skill.category}</h3>

              <div className="skills-card-pill-container">
                {skill.list.map((item, index) => (
                  <p key={`${skill.category}-${index}`}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
