import React from "react";
import "../../Styles/ForgotPassword.css";
import "../../Styles/Login.css";
import { useState } from "react";
import { useResendVerificationMailMutation } from "../../generated/graphql";
import Popup from "../Cards/Popup";
import { useHistory } from "react-router-dom";
import Loader from "../Shared/Loader";

function ResendEmail() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const [resendVerificationMailMutation, { data, loading, error }] =
    useResendVerificationMailMutation({
      variables: {
        resendVerificationMailData: {
          email,
        },
      },
    });

  const resendMailHandler = async (e: any) => {
    e.preventDefault();
    try {
      await resendVerificationMailMutation();
    } catch (e) {
      console.log(e);
    }
  };

  if (error) {
    if (error.message.includes("Could not find any entity of type")) {
      return (
        <Popup
          message={
            "No account is associated with this email ID. Please register."
          }
          close={() => history.push("/register")}
          popupType={"ERROR"}
        />
      );
    }
    if (error.message === "Email has been verified before") {
      return (
        <Popup
          message={"Email has been verified before. Login to continue"}
          close={() => history.push("/login")}
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

  if (loading) return <Loader/>;

  if (data?.resendVerificationMail) {
    return (
      <Popup
        message={"Please check your email to verify"}
        close={() => history.push("/login")}
        popupType={"SUCCESS"}
      />
    );
  }

  return (
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>RESEND EMAIL</h2>
          <div className="line" />
        </div>
        <form className="Credentials" action="" onSubmit={resendMailHandler}>
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
            <button className="auth-button">Resend email</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ResendEmail;
