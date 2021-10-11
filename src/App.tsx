import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import AddWorkshop from "./Components/Pages/AddWorkshop";
import EditWorkshop from "./Components/Pages/EditWorkshop";
import Home from "./Components/Pages/Home";
import Logout from "./Components/Pages/Logout";
import Schedule from "./Components/Pages/Schedule";
import Workshop from "./Components/Pages/Workshop";
import { UserRole } from "./generated/graphql";
import AuthContext from "./Utils/contexts";
import Login from "./Components/Pages/Login";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import ResetPassword from "./Components/Pages/ResetPassword";
import ResendEmail from "./Components/Pages/ResendEmail";
import Profile from "./Components/Pages/Profile";
import Register from "./Components/Pages/Register";
import Verify from "./Components/Pages/Verify";

function App() {
  const { role } = useContext(AuthContext)!;
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/workshop/:id" component={Workshop} />
      <Route exact path="/help-desk" component={Schedule} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/login">
        {!role ? <Login /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/register">
        {!role ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/verify/:token">
        {!role ? <Verify /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/forgot-password">
        {!role ? <ForgotPassword /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/reset-password/:token">
        {!role ? <ResetPassword /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/resend-email">
        {!role ? <ResendEmail /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/logout">
        {!!role ? <Logout /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/profile">
        {!!role ? <Profile /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/add-workshop">
        {role === UserRole.Admin ? <AddWorkshop /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/edit-workshop/:id">
        {role === UserRole.Admin ? <EditWorkshop /> : <Redirect to="/" />}
      </Route>
    </Router>
  );
}

export default App;
