import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <p>Built using React, Vite and CSS.</p>
        <p>&copy; {new Date().getFullYear()} Valarie Lim. All Rights Reserved.</p>

        <ul className="footer-social-links">
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
    </footer>
  );
}

export default Footer;
