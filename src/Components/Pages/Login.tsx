import React from "react";
import "../../Styles/Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>SIGNIN</h2>
          <div className="line" />
        </div>
        <form
          className="Credentials"
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
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
