import { useState } from "react";
import Lottie from "../components/Lottie.jsx";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container">
        <h3>Story</h3>
        <h2>About Me</h2>
        <hr></hr>
        <div className="about-card">
          <div className="about-card-list">
            <h3>Problem Solving</h3>
            <p>Break down complex problems into effective software solutions.</p>
          </div>
          <div className="about-card-list">
            <h3>Responsive Web Design</h3>
            <p>Create user-friendly interfaces that work across all screen sizes.</p>
          </div>
          <div className="about-card-list">
            <h3>Clean Code</h3>
            <p>Develop readable, maintainable, and well-structured code.</p>
          </div>
        </div>
      </div>
      <div className="two-column-grid">
        <div className="column-left">
          <h3>Professional Summary</h3>
          <ul>
            <li>Diploma in Information Technology student at INTI International University.</li>
            <li>
              Experienced in building responsive web applications using ASP.NET, SQL Server, HTML, CSS, JavaScript, and
              WordPress.
            </li>
            <li>Possess hands-on experience creating projects with React, Vite, Next.js, and Tailwind CSS.</li>
            <li>Passionate about writing clean, maintainable code and solving real-world problems.</li>
            <li>
              Actively learning advanced JavaScript, modern frontend frameworks, and the MERN stack for full-stack
              development.
            </li>
          </ul>
        </div>
        <div className="column-right animation">
          <Lottie />
        </div>
      </div>
    </section>
  );
}

export default About;
