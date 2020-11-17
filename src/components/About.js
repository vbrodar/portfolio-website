import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="about-div">
        <body>
          <img
            className="about-avatar"
            src={process.env.PUBLIC_URL + "/assets/me.jpg"}
          />
          <h2 className="about-title">About me </h2>
          <p className="about-paragraph">
            I am frontend developer in the making, Raspberry Pi and Arduino
            enthusiast and overall geek. Always eager to learn and improve both
            myself and my code. Began my journey in 2017 when enrolled in FERIT,
            Osijek and never stopped learning since. I love good challenge and
            finding simple and efficient solutions with combining knowledge in
            HTML, CSS(Sass) and React(JS).
          </p>
          <p className="about-paragraph">
            When i'm not coding you will probably find me cycling, watching
            movies or geeking out over some book or game.{" "}
          </p>
          <div>
            <a
              href="https://github.com/vbrodar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://gitlab.com/vbrodar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-gitlab" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/thewaywardone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
