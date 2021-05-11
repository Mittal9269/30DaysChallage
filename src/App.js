import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
// import { Router } from "";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Service from "./Service";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Service />
    </div>
  );
}
