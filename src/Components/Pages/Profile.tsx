import React from "react";
import "../../Styles/Profile.css";
import image1 from "../../Images/profile.png";
function Profile() {
  return (
    <div className="Loginform1">
      <div className="MainBox">
        <img src={image1} alt="" />
        <div className="contents">
          <h2>USERNAME</h2>
          <p className="id">SAMPARK ID</p>
          <div className="topbox">
            <div className="heading">
              <p className="bolde">Email</p>
              <p>abcde@gmail.com</p>
            </div>
            <div className="heading">
              <p className="bolde">Phone</p>
              <p>293847983424</p>
            </div>
            <div className="heading">
              <p className="bolde">College Name</p>
              <p>Kongu Nadu intitute of technology</p>
            </div>
            <div className="heading">
              <p className="bolde">Stream</p>
              <p>Computer Science</p>
            </div>
            <div className="heading">
              <p className="bolde">Year Of Study</p>
              <p>2019-24</p>
            </div>
            <div className="heading">
              <p className="bolde">City</p>
              <p>ABCDE</p>
            </div>
            <div className="heading">
              <p className="bolde">State</p>
              <p>EFSVDDVSVD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Profile_workshops">
        <h2
          style={{
            color: "rgb(0, 2, 114)",
            textAlign: "center",
            letterSpacing: "1.5px",
          }}
        >
          REGISTERED WORKSHOPS
        </h2>
        <div className="workshopName">
          <p>Name OF the Workshop</p>
          <p className="Date">20 th sep</p>
        </div>
        <div className="workshopName">
          <p>Name OF the Workshop</p>
          <p className="Date">20 th sep</p>
        </div>
        <div className="workshopName">
          <p>Name OF the Workshop</p>
          <p className="Date">20 th sep</p>
        </div>
        <div className="workshopName">
          <p>Name OF the Workshop</p>
          <p className="Date">20 th sep</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
