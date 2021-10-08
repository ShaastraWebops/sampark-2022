import React, { Fragment } from "react";
import Profile from "../../Images/profile.png";
import Shaastra from "../../Images/shaastra.png";
import "../../Styles/Navbar.css";

interface Props {}

const Navbar = (props: Props) => {
  const { name, spId } = { name: "Janith M S", spId: "S22SP0001" };
  const [isMenuON, setIsMenuON] = React.useState<boolean>(false);

  const navAuth = (
    <Fragment>
      <a href="/login" className="nav-link">
        LOGIN / REGISTER
      </a>
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
      <div className="profile-info">
        <div className="profile-name">HELLO {name}</div>
        <div className="sampark-id">{spId}</div>
      </div>
      {window.innerWidth >= 1000 ? (
        <button
          className="navbar-profile"
          onClick={() => setIsMenuON(!isMenuON)}
        >
          <img src={Profile} alt="Profile" />
        </button>
      ) : (
        <button className="hamburger-mobile" onClick={() => setIsMenuON(!isMenuON)}>
          <div className={isMenuON ? "change-bar1" : "bar1"}></div>
          <div className={isMenuON ? "change-bar2" : "bar2"}></div>
          <div className={isMenuON ? "change-bar3" : "bar3"}></div>
        </button>
      )}
    </div>
  );
};

export default Navbar;
