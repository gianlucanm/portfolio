import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Gianluca Nino</h2>
        <div className="prompt">
          <p>Um estudante da ETEC, aspirante a programação.</p>
          <a
            className="social-media"
            href="https://www.linkedin.com/in/gianluca-nino-mariano-4b5703278/










"
          >
            Linkledin
          </a>
          <a className="social-media" href="https://github.com/gianlucanm">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
