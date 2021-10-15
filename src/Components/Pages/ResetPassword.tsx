import React from "react";
import "../../Styles/Auth.css";
import { useState } from "react";
import { useResetPasswordMutation } from "../../generated/graphql";
import { useHistory, useParams } from "react-router-dom";
import Popup from "../Cards/Popup";
import Loader from "../Shared/Loader";

function ResetPassword() {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const [pw, setPw] = useState("");
  const [cpw, setCPw] = useState("");

  const [resetPasswordMutation, { data, loading, error }] =
    useResetPasswordMutation({
      variables: {
        resetPasswordData: {
          token: token,
          newPassword: pw,
        },
      },
    });

  const resetPassHandler = async (e: any) => {
    e.preventDefault();
    if (pw !== cpw) {
      window.alert("Password didn't match");
      return;
    }
    try {
      await resetPasswordMutation();
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <Loader />;

  if (data?.resetPassword) {
    return (
      <Popup
        message={"Password reset successful"}
        popupType={"SUCCESS"}
        close={() => history.push("/login")}
      />
    );
  }

  if (error) {
    if (error.message.includes("jwt expired"))
      return (
        <Popup
          message={
            "Verification Link expired. Please request new verification link"
          }
          close={() => history.push("/forgot-password")}
          popupType={"ERROR"}
        />
      );
    if (error.message.includes("Argument Validation Error"))
      return (
        <Popup
          message={
            "Invalid verification Link. Please request new verification link"
          }
          close={() => history.push("/forgot-password")}
          popupType={"ERROR"}
        />
      );
    else
      return (
        <Popup
          message={"Some error occurred"}
          close={() => history.push("/forgot-password")}
          popupType={"ERROR"}
        />
      );
  }

  return (
    <div className="auth-page">
      <div className="auth-form-box">
        <div className="auth-header auth-header-larger-heading">
          <div className="auth-header-text auth-header-text-larger-heading">
            RESET PASSWORD
          </div>
          <div className="auth-header-line auth-header-line-larger-heading" />
        </div>
        <form
          className="auth-form-inner-box"
          action=""
          onSubmit={resetPassHandler}
        >
          <div className="auth-form">
            <div className="auth-form-label">
              <label htmlFor="pw">NEW PASSWORD</label>
              <label htmlFor="pw">CONFIRM PASSWORD</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                type="password"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                name="pw"
                placeholder="Enter your new password"
              />
              <input
                required
                type="password"
                onChange={(e) => {
                  setCPw(e.target.value);
                }}
                name="cpw"
                placeholder="Re-enter the password"
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

export default ResetPassword;
