import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Router>
        <nav>
          <div>
            <li>
              <Link to={"/"} className="navbar-title">
                <h2>Vedran Brodar</h2>
              </Link>
            </li>
          </div>
          <ul>
            <li>
              <Link to={"/"} className="nav-link">
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                <h2 className="text-effect">About</h2>
              </Link>
            </li>
            <li>
              <Link to={"/projects"} className="nav-link">
                <h2 className="text-effect">Projects</h2>
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                <h2 className="text-effect">Contact</h2>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
