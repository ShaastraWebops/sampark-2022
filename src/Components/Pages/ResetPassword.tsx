import React from "react";
import "../../Styles/ForgotPassword.css";
import "../../Styles/Login.css";
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

  const registerHandler = async (e: any) => {
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

  if (loading) return <Loader/>;

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
    <div className="Loginform">
      <div className="box">
        <div className="header">
          <h2>RESET PASSWORD</h2>
          <div className="line" />
        </div>
        <form className="Credentials" action="" onSubmit={registerHandler}>
          <div className="Userinfo">
            <div className="Useralign">
              <div className="info">
                <label htmlFor="email">NEW PASSWORD:</label>
                <label htmlFor="password">CONFIRM PASSWORD:</label>
              </div>
              <div className="divid">
                <input
                  required
                  type="password"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  name="pw"
                />
                <input
                  required
                  type="password"
                  onChange={(e) => {
                    setCPw(e.target.value);
                  }}
                  name="cpw"
                ></input>
              </div>
            </div>
            <button className="auth-button">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
