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
                <label>EMAIL ID:</label>
                <label>PASSWORD:</label>
              </div>
              <div className="divid">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                />
                <input
                  type="password"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  name="password"
                ></input>
              </div>
            </div>
            <div>
              <button>Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
