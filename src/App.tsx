import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Workshop from "./Components/Pages/Workshop";

function App() {
  return (
    <Router>
      <Route exact path="/workshops/:id" component={Workshop} />
      <Route exact path = "/" component={Home} />
    </Router>
  );
}

export default App;
