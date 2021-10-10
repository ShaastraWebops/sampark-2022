import React from "react";
import "../../Styles/Register.css";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { cities } from "./cities";
function Register() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [state, setState] = useState("Andaman and Nicobar Islands");
  const [city, setCity] = useState("");

  const history = useHistory();
  const [logged, setLogged] = useState(false);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const pwHandler = (e: any) => {
    setPw(e.target.value);
  };
  const repeatPwHandler = (e: any) => {
    setCheckPw(e.target.value);
  };
  const nameHandler = (e: any) => {
    setName(e.target.value);
  };
  const schoolHandler = (e: any) => {
    setSchool(e.target.value);
  };
  const stateHandler = (e: any) => {
    setState(e.target.value);
  };
  const cityHandler = (e: any) => {
    setCity(e.target.value);
  };
  return (
    <div className="Registerform">
      <div className="box">
        <h2>REGISTER</h2>
        <form className="Main">
          <div className="button_content">
            <div className="Userdetail">
              <div className="Details">
                <div className="Catogories">
                  <label>NAME</label>
                  <input></input>
                </div>
                <div className="Catogories">
                  <label>EMAIL ID</label>
                  <input type="email"></input>
                </div>
                <div className="Catogories">
                  <label>PASSWORD</label>
                  <input type="password"></input>
                </div>
                <div className="Catogories">
                  <label>CONFIRM</label>
                  <input type="password"></input>
                </div>
                <div className="Catogories">
                  <label>PHONE NO</label>
                  <input type="digit"></input>
                </div>
                <div className="rowflex">
                  <div className="Catogories">
                    <label>COLLEGE NAME</label>
                    <input></input>
                  </div>
                  <div className="Catogories">
                    <label>YEAR OF STUDY</label>
                    <input></input>
                  </div>
                </div>
                <div className="rowflex">
                  <div className="Catogories">
                    <label>STATE</label>
                    <select
                      className="StateName"
                      required
                      name="state"
                      id="state"
                      onChange={stateHandler}
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
                    <label>CITY</label>
                    <select
                      className="CityName"
                      required
                      name="city"
                      id="city"
                      onChange={cityHandler}
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
                  <label>CA</label>
                  <input></input>
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
