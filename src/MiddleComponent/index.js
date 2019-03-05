import "./middleComponent.css";
import React, { Component } from "react";

class MiddleComponent extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-top"> </div>
        <div className="middle-bottom">
          <div className="image-middle" />
          <div className="text-middle" />
          <h1>Check out my website</h1>
        </div>
      </div>
    );
  }
}

export default MiddleComponent;
