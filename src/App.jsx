import { useState } from "react";
import myImg from "./assets/vlavatar.png";
import "./App.css";
import Lottie from "./lottie.jsx";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <Lottie />
          {/* <img src={myImg} className="image" width="170" height="170" alt="" /> */}
        </div>
        <div>
          <h1>Valarie Lim Portfolio</h1>
          <p>This site is still under construction.</p>
        </div>
        <button className="btn" onClick={() => (window.location.href = "https://github.com/valarie-lim")}>
          Github
        </button>
      </section>
    </>
  );
}

export default App;
