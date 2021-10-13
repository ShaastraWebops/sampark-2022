import React, { Fragment } from "react";
import { useContext } from "react";
import { UserRole } from "../../generated/graphql";
import Profile from "../../Images/profile.png";
import Shaastra from "../../Images/shaastra.png";
import "../../Styles/Navbar.css";
import AuthContext from "../../Utils/contexts";
import { HashLink } from 'react-router-hash-link';

interface Props {}

const Navbar = (props: Props) => {
  const { role } = useContext(AuthContext)!;
  const [isMenuON, setIsMenuON] = React.useState<boolean>(false);

  const navAuth = (
    <Fragment>
      {!role && (
        <HashLink to="/login" className="nav-link" style={{ minWidth: "150px" }}>
          LOGIN
        </HashLink>
      )}
      {!role && (
        <HashLink
          to="/register"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          REGISTER
        </HashLink>
      )}
      {/* {role && (
        <a
          href="/profile"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          PROFILE
        </a>
      )} */}
      {role && (
        <HashLink
          to="/logout"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          LOGOUT
        </HashLink>
      )}
    </Fragment>
  );
  const navPage = (
    <Fragment>
      <HashLink to="/" className="nav-link">
        HOME
      </HashLink>
      <HashLink to="/#workshops" className="nav-link">
        WORKSHOPS
      </HashLink>
      {role === UserRole.Admin && (
        <HashLink to="/add-workshop" className="nav-link">
          ADD WORKSHOP
        </HashLink>
      )}
      <HashLink to="/schedule" className="nav-link">
        SCHEDULE
      </HashLink>
      <HashLink to="/help-desk" className="nav-link">
        HELP DESK
      </HashLink>
      <HashLink to={"/#contact"} className="nav-link">
        CONTACT US
      </HashLink>
      {window.innerWidth < 1000 && navAuth}
    </Fragment>
  );

  return (
    <div className="navbar">
      <a href="/">
        <img src={Shaastra} className="shaastra-logo" alt="Shaastra Logo" />
      </a>
      <div
        className={
          window.innerWidth >= 1000
            ? "nav-links"
            : isMenuON
            ? "hamburger"
            : "hamburger not-active"
        }
      >
        {navPage}
      </div>
      {window.innerWidth >= 1000 && (
        <div className={isMenuON ? "hamburger" : "hamburger not-active"}>
          {navAuth}
        </div>
      )}
      {role && (
        <div className="profile-info">
          <div className="profile-name">
            Hello {localStorage.getItem("name")}
          </div>
          <div className="sampark-id">{localStorage.getItem("spID")}</div>
        </div>
      )}
      <button
        className="hamburger-mobile"
        onClick={() => setIsMenuON(!isMenuON)}
      >
        <div className={isMenuON ? "change-bar1" : "bar1"}></div>
        <div className={isMenuON ? "change-bar2" : "bar2"}></div>
        <div className={isMenuON ? "change-bar3" : "bar3"}></div>
      </button>
    </div>
  );
};

export default Navbar;
