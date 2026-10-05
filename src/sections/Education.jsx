import "./Education.css";

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h3>Academic Background</h3>
        <h2>Education & Professional Development</h2>
        <hr></hr>
        <p>
          My educational background combines formal IT studies with hands-on professional training in web development
          and digital technologies.
        </p>
        <div className="row-card-container">
          <div className="row-card">
            <h3>
              <span>🎓</span>Diploma in Information Technology
            </h3>
            <h4>INTI International University</h4>
            <p>Expected Graduation: January 2027</p>
            <h4>Key Areas of Study</h4>
            <ul>
              <li>Software Development</li>
              <li>Web Application Development</li>
              <li>Database Systems</li>
              <li>System Analysis & Design</li>
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Human-Computer Interaction</li>
            </ul>
          </div>
          <div className="row-card">
            <h3>
              <span>🚀</span>Professional Development
            </h3>
            <h4>Woodpecker Academy</h4>
            <p>Web Development & Digital Marketing Training</p>
            <h4>Hands-on Training Covering</h4>
            <ul>
              <li>Responsive Web Design</li>
              <li>Domain & Web Hosting Management</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Search Console</li>
              <li>WordPress Website Development</li>
              <li>E-commerce Store Setup</li>
              <li>Payment Gateway Integration</li>
            </ul>
          </div>
          <div className="row-card">
            <h3>
              <span>⌨️</span>JavaScript Certification
            </h3>
            <h4>freeCodeCamp</h4>
            <p>In Progress (Currently studying: DSA)</p>
            <h4>Key Areas of Study</h4>
            <ul>
              <li>Core JavaScript programming concepts</li>
              <li>DOM manipulation and event handling</li>
              <li>Asynchronous & functional programming</li>
              <li>Accessibility best practices</li>
              <li>5 certification projects + final exam required</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
