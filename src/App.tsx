import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ForgotAfter from "./Components/Pages/ForgotAfter";
import ResendEmail from "./Components/Pages/ResendEmail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/passwordreset" component={ForgotAfter}></Route>
      <Route exact path="/resendemail" component={ResendEmail}></Route>
    </Router>
  );
}

export default App;
