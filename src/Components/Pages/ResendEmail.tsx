import React from "react";
import "../../Styles/ForgotPassword.css";
import "../../Styles/Login.css";
import { useState } from "react";

function ResendEmail() {
  const [email, setEmail] = useState("");
  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>RESEND EMAIL</h2>
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
export default ResendEmail;
