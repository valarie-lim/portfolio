import "./App.css";
import BackToTop from "./components/BackToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
