import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Logout from "./Components/Pages/Logout";
import Schedule from "./Components/Pages/Schedule";
import Workshop from "./Components/Pages/Workshop";
import { UserRole } from "./generated/graphql";
import AuthContext from "./Utils/contexts";

function App() {
  const { role } = useContext(AuthContext)!;
  console.log(!role);
  console.log(role === "ADMIN");
  return (
    <Router>
      <Route exact path="/workshops/:id" component={Workshop} />
      <Route exact path="/help-desk" component={Workshop} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/login">
        {!role ? <Workshop /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/register">
        {!role ? <Schedule /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/logout">
        {!!role ? <Logout /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/profile">
        {!!role ? <Schedule /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add-workshop">
        {role === UserRole.Admin ? <Schedule /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
