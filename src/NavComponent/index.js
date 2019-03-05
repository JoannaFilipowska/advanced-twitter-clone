import "./navComponent.css";
import React, { Component } from "react";

class NavComponent extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-left" />
        <h1>Tweeter</h1>
        <div className="nav-middle" />
        <div className="nav-right" />
      </div>
    );
  }
}

export default NavComponent;
