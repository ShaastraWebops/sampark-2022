import React from "react";
import "../../Styles/Auth.css";
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

  if (loading) return <Loader />;

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
    <div className="auth-page">
      <div className="auth-form-box">
        <div className="auth-header auth-header-larger-heading">
          <div className="auth-header-text auth-header-text-larger-heading">
            FORGOT PASSWORD
          </div>
          <div className="auth-header-line auth-header-line-larger-heading" />
        </div>
        <form
          className="auth-form-inner-box"
          action=""
          onSubmit={forgotPassReqHandler}
        >
          <div className="auth-form">
            <div className="auth-form-label">
              <label htmlFor="email">EMAIL ID</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="Enter your registered Email"
              />
            </div>
          </div>
          <button className="auth-button">SUBMIT</button>
          <a href="/login" className="auth-link">
            Back to login
          </a>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
