import React from "react";
import "../../Styles/ForgotPassword.css";
import "../../Styles/Login.css";
import { useState } from "react";
import { useReqForgotPassVerificationMutation } from "../../generated/graphql";
import Popup from "../Cards/Popup";
import { useHistory } from "react-router-dom";
import Loader from "../Shared/Loader";

function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [reqForgotPassVerificationMutation, { data, loading, error }] =
    useReqForgotPassVerificationMutation();

  const forgotPassReqHandler = async (e: any) => {
    e.preventDefault();
    try {
      await reqForgotPassVerificationMutation({
        variables: {
          reqForgotPassVerificationData: {
            email: email!,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (data?.reqForgotPassVerification) {
    return (
      <Popup
        message={"Please check your email for the link to reset your password."}
        popupType={"SUCCESS"}
        close={() => history.push("/")}
      />
    );
  }

  if (loading) return <Loader/>;

  if (error) {
    if (error.message.includes("Could not find any entity of type")) {
      return (
        <Popup
          message={
            "No account is associated with this email id. Please register."
          }
          close={() => history.push("/register")}
          popupType={"ERROR"}
        />
      );
    } else {
      return (
        <Popup
          message={"Some error occured"}
          close={() => window.location.reload()}
          popupType={"ERROR"}
        />
      );
    }
  }

  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>FORGOT PASSWORD</h2>
          <div className="line" />
        </div>
        <form className="Credentials" action="" onSubmit={forgotPassReqHandler}>
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
            <button className="auth-button">Send link to reset password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
