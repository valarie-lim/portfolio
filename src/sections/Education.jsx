import "./Education.css";

const educationData = [
  {
    icon: "🎓",
    qualification: "Diploma in Information Technology",
    institute: "INTI International University",
    status: "Expected Graduation: January 2027",
    about: "Information Technology & Systems Development Training",
    desc: "Key Areas of Study:",
    studyArea: [
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Rapid Application Development",
      "Database Management Systems",
      "System Analysis & Design",
      "Data Structures & Algorithms",
      "Human-Computer Interaction",
    ],
  },
  {
    icon: "🚀",
    qualification: "Professional Development",
    institute: "Woodpecker Academy",
    status: "Ongoing learning since Dec 2024",
    about: "Web Development & Digital Marketing Training",
    desc: "Hands-on Training Covering:",
    studyArea: [
      "Responsive Web Design",
      "Domain & Web Hosting Management",
      "Search Engine Optimization (SEO)",
      "Google Search Console",
      "WordPress Website Development",
      "E-commerce Store Setup",
      "Payment Gateway Integration",
    ],
  },
  {
    icon: "⌨️",
    qualification: "JavaScript Certification",
    institute: "freeCodeCamp.org",
    status: "Learning In Progress",
    about: "Core JavaScript Programming & DOM Manipulation Training",
    desc: "Core Topics Include:",
    studyArea: [
      "Core JavaScript programming concepts",
      "DOM manipulation and event handling",
      "Asynchronous & functional programming",
      "Accessibility best practices",
      "5 certification projects + final exam required",
    ],
  },
];

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
          {educationData.map((edulist) => (
            <div className="row-card" key={edulist.qualification}>
              <h3>
                <span>{edulist.icon}</span>
                {edulist.qualification}
              </h3>
              <h4>{edulist.institute}</h4>
              <p>{edulist.status}</p>
              <h4>{edulist.about}</h4>
              <br />
              <h5>{edulist.desc}</h5>
              <ul>
                {edulist.studyArea.map((item, index) => (
                  <li key={`${edulist.qualification}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
