import React from "react";
import "../../Styles/Register.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { cities } from "./cities";
import {
  Stream,
  useCreateUserMutation,
  YearOfStudy,
} from "../../generated/graphql";
import Popup from "../Cards/Popup";

function Register() {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [checkPw, setCheckPw] = useState();
  const [phNo, setPhNo] = useState();
  const [name, setName] = useState();
  const [college, setCollege] = useState();
  const [state, setState] = useState("Andaman and Nicobar Islands");
  const [city, setCity] = useState(cities[state][0]);
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
        city,
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

  if (loading) return <p>Loading...</p>;

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
    <div className="Registerform">
      <div className="box">
        <h2>REGISTER</h2>
        <form className="Main" onSubmit={registerHandler}>
          <div className="button_content">
            <div className="Userdetail">
              <div className="Details">
                <div className="Catogories">
                  <label htmlFor="name">NAME</label>
                  <input
                    required={true}
                    name="name"
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  ></input>
                </div>
                <div className="Catogories">
                  <label htmlFor="email">EMAIL ID</label>
                  <input
                    required
                    name="email"
                    type="email"
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  ></input>
                </div>
                <div className="Catogories">
                  <label htmlFor="pw">PASSWORD</label>
                  <input
                    required
                    name="pw"
                    type="password"
                    onChange={(e: any) => {
                      setPw(e.target.value);
                    }}
                    value={pw}
                  ></input>
                </div>
                <div className="Catogories">
                  <label htmlFor="confirm">CONFIRM PASSWORD</label>
                  <input
                    required
                    name="confirm"
                    type="password"
                    onChange={(e: any) => {
                      setCheckPw(e.target.value);
                    }}
                    value={checkPw}
                  ></input>
                </div>
                <div className="Catogories">
                  <label htmlFor="phno">PHONE NO</label>
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
                  ></input>
                </div>
                <div className="rowflex">
                  <div className="Catogories">
                    <label htmlFor="college">COLLEGE NAME</label>
                    <input
                      required
                      name="college"
                      onChange={(e: any) => {
                        setCollege(e.target.value);
                      }}
                      value={college}
                    ></input>
                  </div>
                  <div className="Catogories">
                    <label htmlFor="stream">STREAM</label>
                    <select
                      required
                      className="StateName"
                      name="stream"
                      id="stream"
                      onChange={(e: any) => {
                        setStream(e.target.value);
                      }}
                    >
                      <option value={Stream.Btech}>B.Tech</option>
                      <option value={Stream.Mtech}>M.Tech</option>
                      <option value={Stream.BSc}>B.Sc</option>
                      <option value={Stream.Msc}>M.Sc</option>
                      <option value={Stream.Bse}>BSE</option>
                      <option value={Stream.Others}>Other</option>
                    </select>
                  </div>
                  <div className="Catogories">
                    <label htmlFor="year">YEAR OF STUDY</label>
                    <select
                      required
                      className="StateName"
                      name="year"
                      id="year"
                      onChange={(e: any) => {
                        setYear(e.target.value);
                      }}
                    >
                      <option value={YearOfStudy.First}>1st Year</option>
                      <option value={YearOfStudy.Second}>2nd Year</option>
                      <option value={YearOfStudy.Third}>3rd Year</option>
                      <option value={YearOfStudy.Fourth}>4th Year</option>
                      <option value={YearOfStudy.Others}>Other</option>
                    </select>
                  </div>
                </div>
                <div className="rowflex second">
                  <div className="Catogories">
                    <label htmlFor="state">STATE</label>
                    <select
                      className="StateName"
                      required
                      name="state"
                      id="state"
                      onChange={(e: any) => {
                        setState(e.target.value);
                      }}
                      placeholder="Select State"
                    >
                      {Object.keys(cities).map((_state: any) => {
                        return (
                          <option key={_state} value={_state}>
                            {_state}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="Catogories">
                    <label htmlFor="city">CITY</label>
                    <select
                      className="CityName"
                      required
                      name="city"
                      id="city"
                      onChange={(e: any) => {
                        setCity(e.target.value);
                      }}
                      placeholder="Select City"
                    >
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
                <div className="Catogories">
                  <label htmlFor="ca">CA referral (if any)</label>
                  <input
                    name="ca"
                    onChange={(e: any) => {
                      setCa(e.target.value);
                    }}
                    value={ca}
                  ></input>
                </div>
              </div>
            </div>
            <button className="auth-button">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
