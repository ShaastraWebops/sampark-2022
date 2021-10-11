import React, { useContext } from "react";
import "../../Styles/Login.css";
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

  if (loading) return <Loader/>;

  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>SIGNIN</h2>
          <div className="line" />
        </div>
        <form className="Credentials" action="" onSubmit={loginHandler}>
          <div className="Userinfo">
            <div className="Useralign">
              <div className="info">
                <label htmlFor="email">EMAIL ID:</label>
                <label htmlFor="password">PASSWORD:</label>
              </div>
              <div className="divid">
                <input
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                />
                <input
                  required
                  type="password"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  name="password"
                ></input>
              </div>
            </div>
            <button className="auth-button">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
