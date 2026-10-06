import "./Contact.css";
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h3>Contact</h3>
        <h2>Let's Connect</h2>
        <hr></hr>
        <p>Have an opportunity in mind? Let's work together.</p>
      </div>
      <div className="two-column-grid">
        <div className="column-left">
          <h3>Get in Touch</h3>
          <p>
            I'm currently seeking opportunities to begin my career as a Junior Frontend Developer or Industrial Trainee.
            If you have an opening or would like to discuss a potential opportunity, I'd be happy to hear from you.
          </p>
          <div className="contact-card">
            <a href="mailto:vallimyh92@gmail.com">
              <div>
                <i className="ri-mail-fill"></i>
                <p>
                  <span>Email</span>
                  <br />
                  vallimyh92@gmail.com
                </p>
              </div>
            </a>
          </div>
          <div className="contact-card">
            <a href="tel:60109640097">
              <div>
                <i className="ri-phone-fill"></i>
                <p>
                  <span>Phone</span>
                  <br />
                  +60 10 964 0097
                </p>
              </div>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://github.com/valarie-lim">
              <div>
                <i className="ri-github-fill"></i>
                <p>
                  <span>Github</span>
                  <br />
                  @valarie-lim
                </p>
              </div>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://www.linkedin.com/in/valarielyh">
              <div>
                <i className="ri-linkedin-fill"></i>
                <p>
                  <span>Linkedin</span>
                  <br />
                  Valarie (YH) Lim
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="column-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
