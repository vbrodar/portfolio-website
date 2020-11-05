import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <img
          className="programming-image"
          src={process.env.PUBLIC_URL + "/assets/programming.jpg"}
        />
        <h2 className="home-description">
          Hello, i am <b className="bolder-words"> Vedran</b> welcome to my site
        </h2>
      </div>
    );
  }
}

export default Home;
