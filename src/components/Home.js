import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <img
          className="programming-image"
          src={process.env.PUBLIC_URL + "/assets/space.jpg"}
        />
        <h2 className="home-description">
          Hello<b className="symbols">;</b> {"\n"} I am
          <b className="bolder-words"> Vedran Brodar</b>
          <b className="symbols">.</b>
          {"\n"}
          {"\n"}
          <img
            className="home-avatar"
            src={process.env.PUBLIC_URL + "/assets/avatar.png"}
          />
          <h2 className="gradient-description">{"< Frontend developer />"}</h2>
          <h2 className="technologies-description">
            HTML <b className="symbols">.</b> CSS(Sass)
            <b className="symbols">.</b> Javascript{" "}
            <b className="symbols">. </b>
            React
          </h2>
          <footer>
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
          </footer>
        </h2>
      </div>
    );
  }
}

export default Home;
