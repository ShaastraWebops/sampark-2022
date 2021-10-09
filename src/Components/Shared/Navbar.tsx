import React, { Fragment } from "react";
import { useContext } from "react";
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
        <a href="/login" className="nav-link" style={{ minWidth: "150px" }}>
          LOGIN
        </a>
      )}
      {!role && (
        <a href="/register" className="nav-link" style={{ minWidth: "150px" }}>
          REGISTER
        </a>
      )}
      {role && (
        <a href="/profile" className="nav-link" style={{ minWidth: "150px" }}>
          PROFILE
        </a>
      )}
      {role && (
        <a href="/logout" className="nav-link" style={{ minWidth: "150px" }}>
          LOGOUT
        </a>
      )}
    </Fragment>
  );
  const navPage = (
    <Fragment>
      <a href="/" className="nav-link">
        HOME
      </a>
      <a href="/#workshops" className="nav-link">
        WORKSHOPS
      </a>
      {role === UserRole.Admin && <a href="/add-workshop" className="nav-link">
        ADD WORKSHOP
      </a>}
      <a href="/schedule" className="nav-link">
        SCHEDULE
      </a>
      <a href="/help-desk" className="nav-link">
        HELP DESK
      </a>
      <a href="/#contact" className="nav-link">
        CONTACT US
      </a>
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
