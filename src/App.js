import React, { Component } from "react";
import "./App.css";
import RightComponent from "./RightComponent";
import MiddleComponent from "./MiddleComponent";
import LeftComponent from "./LeftComponent";
import NavComponent from "./NavComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <div className="app">
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
      </div>
    </div>
  );
}
export default App;
