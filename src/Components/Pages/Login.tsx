import React, { useContext } from "react";
import "../../Styles/Auth.css";
import { useState } from "react";
import AuthContext from "../../Utils/contexts";
import { useLoginMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";
import Popup from "../Cards/Popup";
import Loader from "../Shared/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { setRole } = useContext(AuthContext)!;
  const history = useHistory();

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: {
      loginData: {
        email: email,
        password: pw,
      },
    },
  });

  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      await loginMutation();
    } catch (e) {
      console.log(e);
    }
  };

  if (data?.login) {
    setRole(data.login?.role!);
    localStorage.setItem("email", data.login?.email!);
    localStorage.setItem("name", data.login?.name!);
    localStorage.setItem("role", data.login?.role!);
    localStorage.setItem("spID", data.login?.spID!);
    history.push("/");
  }

  if (error) {
    if (
      error?.message.includes(
        'Could not find any entity of type "User" matching'
      )
    ) {
      return (
        <Popup
          message={"User not registered. Please register"}
          close={() => history.push("/register")}
          popupType={"ERROR"}
        />
      );
    } else if (error?.message === "Invalid Credential") {
      return (
        <Popup
          message={"Invalid credentials"}
          close={() => window.location.reload()}
          popupType={"ERROR"}
        />
      );
    } else if (error?.message === "Oops, email not verified!") {
      return (
        <Popup
          message={
            "Please verify your account by the clicking on the verification link sent to your registered email"
          }
          close={() => window.location.reload()}
          popupType={"ERROR"}
        />
      );
    }
  }

  if (loading) return <Loader />;

  return (
    <div className="auth-page">
      <div className="auth-form-box">
        <div className="auth-header">
          <div className="auth-header-text">SIGN IN</div>
          <div className="auth-header-line" />
        </div>
        <form className="auth-form-inner-box" action="" onSubmit={loginHandler}>
          <div className="auth-form">
            <div className="auth-form-label">
              <label htmlFor="email">EMAIL ID</label>
              <label htmlFor="password">PASSWORD</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="Enter your Email"
              />
              <input
                required
                type="password"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                name="password"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <button className="auth-button">LOG IN</button>
          <a href="/register" className="auth-link">
            New user? sign up
          </a>
          <a
            href="/forgot-password"
            className="auth-link"
            style={{ marginTop: "8px" }}
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}
export default Login;
