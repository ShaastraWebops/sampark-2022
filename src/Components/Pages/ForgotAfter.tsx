import React from "react";
import "../../Styles/ForgotPassword.css";
import "../../Styles/Login.css";
import { useState } from "react";

function ForgotAfter() {
  const [pw, setPw] = useState("");
  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>FORGOT PASSWORD</h2>
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
                <label htmlFor="pw">NEW PASSWORD:</label>
              </div>
              <div className="divid">
                <input
                required
                  type="password"
                  name="pw"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="auth-button">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotAfter;
