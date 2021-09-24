import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <Route exact component={Home} />
    </Router>
  );
}

export default App;
