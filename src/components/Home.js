import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <img
          className="programming-image"
          src={process.env.PUBLIC_URL + "/assets/programming.jpg"}
        />
      </div>
    );
  }
}

export default Home;
