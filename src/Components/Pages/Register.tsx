import React from "react";
import "../../Styles/Register.css";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { cities } from "./cities";
function Register() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [phNo, setPhNo] = useState();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [state, setState] = useState("Andaman and Nicobar Islands");
  const [city, setCity] = useState("");
  const [year, setYear] = useState();
  const [stream, setStream] = useState("");
  const [ca, setCa] = useState("");

  const history = useHistory();

  return (
    <div className="Registerform">
      <div className="box">
        <h2>REGISTER</h2>
        <form className="Main">
          <div className="button_content">
            <div className="Userdetail">
              <div className="Details">
                <div className="Catogories">
                  <label htmlFor="name">NAME</label>
                  <input
                    required
                    name="name"
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
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
                  ></input>
                </div>
                <div className="Catogories">
                  <label htmlFor="phno">PHONE NO</label>
                  <input
                    required
                    name="phno"
                    type="digit"
                    onChange={(e: any) => {
                      setPhNo(e.target.value);
                    }}
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
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="B.Sc">B.Sc</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="BSE">BSE</option>
                      <option value="other">Other</option>
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
                      <option value="1st year">1st Year</option>
                      <option value="2nd year">2nd Year</option>
                      <option value="3rd year">3rd Year</option>
                      <option value="4th year">4th Year</option>
                      <option value="other">Other</option>
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
                    required
                    name="ca"
                    onChange={(e: any) => {
                      setCa(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <button>REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
