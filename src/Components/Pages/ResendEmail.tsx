import React from "react";
import "../../Styles/Auth.css";
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

  if (loading) return <Loader />;

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
    <div className="auth-page">
      <div className="auth-form-box">
        <div className="auth-header auth-header-larger-heading">
          <div className="auth-header-text auth-header-text-larger-heading">
            RESEND VERIFICATION LINK
          </div>
          <div className="auth-header-line auth-header-line-larger-heading" />
        </div>
        <form
          className="auth-form-inner-box"
          action=""
          onSubmit={resendMailHandler}
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
                placeholder="Enter your Registered Email"
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
export default ResendEmail;
