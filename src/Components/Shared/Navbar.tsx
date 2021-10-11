import React, { Fragment } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserRole } from "../../generated/graphql";
import Profile from "../../Images/profile.png";
import Shaastra from "../../Images/shaastra.png";
import "../../Styles/Navbar.css";
import AuthContext from "../../Utils/contexts";

interface Props {}

const Navbar = (props: Props) => {
  const { role } = useContext(AuthContext)!;
  const [isMenuON, setIsMenuON] = React.useState<boolean>(false);

  const navAuth = (
    <Fragment>
      {!role && (
        <NavLink to="/login" className="nav-link" style={{ minWidth: "150px" }}>
          LOGIN
        </NavLink>
      )}
      {!role && (
        <NavLink
          to="/register"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          REGISTER
        </NavLink>
      )}
      {/* {role && (
        <NavLink
          to="/profile"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          PROFILE
        </NavLink>
      )} */}
      {role && (
        <NavLink
          to="/logout"
          className="nav-link"
          style={{ minWidth: "150px" }}
        >
          LOGOUT
        </NavLink>
      )}
    </Fragment>
  );
  const navPage = (
    <Fragment>
      <NavLink to="/" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="/#workshops" className="nav-link">
        WORKSHOPS
      </NavLink>
      {role === UserRole.Admin && (
        <NavLink to="/add-workshop" className="nav-link">
          ADD WORKSHOP
        </NavLink>
      )}
      <NavLink to="/schedule" className="nav-link">
        SCHEDULE
      </NavLink>
      <NavLink to="/help-desk" className="nav-link">
        HELP DESK
      </NavLink>
      <NavLink to="/#contact" className="nav-link">
        CONTACT US
      </NavLink>
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
      {window.innerWidth >= 1000 ? (
        <button
          className="navbar-profile"
          onClick={() => setIsMenuON(!isMenuON)}
        >
          <img src={Profile} alt="Profile" />
        </button>
      ) : (
        <button
          className="hamburger-mobile"
          onClick={() => setIsMenuON(!isMenuON)}
        >
          <div className={isMenuON ? "change-bar1" : "bar1"}></div>
          <div className={isMenuON ? "change-bar2" : "bar2"}></div>
          <div className={isMenuON ? "change-bar3" : "bar3"}></div>
        </button>
      )}
    </div>
  );
};

export default Navbar;
