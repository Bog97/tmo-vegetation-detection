import React, { Component } from 'react';
import { Navbar } from "./Components/Navbar";
import './App.css';
import { Home } from "./Components/Home";
import { Device } from "./Components/Device";
import { About } from "./Components/About";
import { SidePanel } from "./Components/SidePanel";
import { HashRouter as Router, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div id="outer-container">
          <SidePanel outerContainer="outer-container" pageWrap="page-wrap" />
          <div className="row bodyContainer m-0" id="page-wrap">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/device" component={Device} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;