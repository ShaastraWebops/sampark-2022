import React from "react";
import "../../Styles/Auth.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { cities } from "../../Data/Cities";
import {
  Stream,
  useCreateUserMutation,
  YearOfStudy,
} from "../../generated/graphql";
import Popup from "../Cards/Popup";
import Loader from "../Shared/Loader";

function Register() {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [checkPw, setCheckPw] = useState();
  const [phNo, setPhNo] = useState();
  const [name, setName] = useState();
  const [college, setCollege] = useState();
  const [state, setState] = useState("Andaman and Nicobar Islands");
  const [city, setCity] = useState();
  const [year, setYear] = useState<YearOfStudy>(YearOfStudy.First);
  const [stream, setStream] = useState<Stream>(Stream.Btech);
  const [ca, setCa] = useState();

  const history = useHistory();

  const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
    variables: {
      createUserData: {
        name: name!,
        email: email!,
        password: pw!,
        number: phNo!,
        college: college!,
        stream: stream!,
        yearOfStudy: year!,
        city: city!,
        state,
        campusAmb: ca,
      },
    },
  });

  const registerHandler = async (e: any) => {
    e.preventDefault();
    if (pw !== checkPw) {
      window.alert("Password didn't match");
      return;
    }
    try {
      await createUserMutation();
    } catch (e) {
      console.log(e);
    }
  };

  if (error) {
    if (
      error?.message.includes("duplicate key value violates unique constraint")
    ) {
      return (
        <Popup
          message={"Account exits already. Login to continue!"}
          close={() => history.push("/login")}
          popupType={"ERROR"}
        />
      );
    }
    if (error.message.includes("Argument Validation Error")) {
      return (
        <Popup
          message={"Invalid Input"}
          close={() => window.location.reload()}
          popupType={"ERROR"}
        />
      );
    } else {
      return (
        <Popup
          message={"Some error occurred"}
          close={() => window.location.reload()}
          popupType={"ERROR"}
        />
      );
    }
  }

  if (loading) return <Loader />;

  if (data?.createUser)
    return (
      <Popup
        message={
          "Verification Mail has been sent to your registered mail ID. Verify your mail to continue"
        }
        close={() => history.push("/login")}
        popupType={"SUCCESS"}
      />
    );

  return (
    <div className="auth-page">
      <div className="auth-form-box">
        <div className="auth-header">
          <div className="auth-header-text">REGISTER</div>
          <div className="auth-header-line" />
        </div>
        <form
          className="auth-form-inner-box"
          action=""
          onSubmit={registerHandler}
        >
          <div className="auth-form signup-form">
            <div className="auth-form-label signup-form-label">
              <label htmlFor="name">NAME</label>
            </div>
            <div className="auth-form-input">
              <input
                required={true}
                name="name"
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder="Enter your full name"
                className="large-input"
              />
            </div>
          </div>
          <div className="auth-form signup-form" style={{paddingTop: "20px"}}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="email">EMAIL ID</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                name="email"
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Enter your email"
                className="large-input"
              />
            </div>
          </div>
          <div className="auth-form signup-form" style={{ paddingTop: "20px" }}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="pw">PASSWORD</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                name="pw"
                type="password"
                onChange={(e: any) => {
                  setPw(e.target.value);
                }}
                value={pw}
                placeholder="Enter your password"
                className="small-input"
              />
            </div>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="confirm">CONFIRM PASSWORD</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                name="confirm"
                type="password"
                onChange={(e: any) => {
                  setCheckPw(e.target.value);
                }}
                value={checkPw}
                placeholder="Re-enter your password"
                className="small-input"
              />
            </div>
          </div>
          <div className="auth-form signup-form" style={{ paddingTop: "20px" }}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="college">COLLEGE NAME</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                name="college"
                onChange={(e: any) => {
                  setCollege(e.target.value);
                }}
                value={college}
                placeholder="Enter your full college name"
                className="large-input"
              />
            </div>
          </div>
          <div className="auth-form signup-form" style={{ paddingTop: "20px" }}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="stream">PROGRAM</label>
              <label htmlFor="state">STATE</label>
            </div>
            <div className="auth-form-input">
              <select
                required
                name="stream"
                id="stream"
                onChange={(e: any) => {
                  setStream(e.target.value);
                }}
                className="small-select"
              >
                <option value="" selected>Select your Program</option>
                <option value={Stream.Btech}>B.Tech</option>
                <option value={Stream.Mtech}>M.Tech</option>
                <option value={Stream.BSc}>B.Sc</option>
                <option value={Stream.Msc}>M.Sc</option>
                <option value={Stream.Bse}>BSE</option>
                <option value={Stream.Others}>Other</option>
              </select>
              <select
                required
                name="state"
                id="state"
                onChange={(e: any) => {
                  setState(e.target.value);
                }}
                placeholder="Select State"
                className="small-select"
              >
                <option value="" selected>Select your state</option>
                {Object.keys(cities).map((_state: any) => {
                  return (
                    <option key={_state} value={_state}>
                      {_state}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="year">YEAR OF STUDY</label>
              <label htmlFor="city">CITY</label>
            </div>
            <div className="auth-form-input">
              <select
                required
                name="year"
                id="year"
                onChange={(e: any) => {
                  setYear(e.target.value);
                }}
                className="small-select"
              >
                <option value="" selected>Select Year of Study</option>
                <option value={YearOfStudy.First}>1st Year</option>
                <option value={YearOfStudy.Second}>2nd Year</option>
                <option value={YearOfStudy.Third}>3rd Year</option>
                <option value={YearOfStudy.Fourth}>4th Year</option>
                <option value={YearOfStudy.Others}>Other</option>
              </select>
              <select
                required
                name="city"
                id="city"
                onChange={(e: any) => {
                  setCity(e.target.value);
                }}
                placeholder="Select City"
                className="small-select"
              >
                <option value="" selected>Select your City</option>
                {cities[state].map((_city: any) => {
                  return (
                    <option key={_city} value={_city}>
                      {_city}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="auth-form signup-form" style={{ paddingTop: "20px" }}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="phno">PHONE NUMBER</label>
            </div>
            <div className="auth-form-input">
              <input
                required
                name="phno"
                type="tel"
                onChange={(e: any) => {
                  setPhNo(e.target.value);
                }}
                minLength={10}
                maxLength={10}
                value={phNo}
                placeholder="Enter your phone number"
                className="large-input"
              />
            </div>
          </div>
          <div className="auth-form signup-form" style={{ paddingTop: "20px" }}>
            <div className="auth-form-label signup-form-label">
              <label htmlFor="ca">CA REFERRAL (If any)</label>
            </div>
            <div className="auth-form-input">
              <input
                name="ca"
                onChange={(e: any) => {
                  setCa(e.target.value);
                }}
                value={ca}
                placeholder="CA referral (If any)"
                className="large-input"
              />
            </div>
          </div>
          <button className="auth-button">REGISTER</button>
          <a href="/login" className="auth-link">
            Registered already? Login
          </a>
          <a
            href="/resend-email"
            className="auth-link"
            style={{ marginTop: "8px" }}
          >
            Didn't recieve verification link?
          </a>
        </form>
      </div>
    </div>
  );
}
export default Register;
